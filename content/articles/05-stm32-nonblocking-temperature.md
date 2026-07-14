---
title: STM32 温度检测如何避免阻塞：从采样状态机到报警任务
slug: stm32-temperature-nonblocking-design
description: 以双路温度检测为例，拆解非阻塞采样、阈值管理、报警节奏、参数保存与上板调试方法。
category: 嵌入式
date: 2026-07-14
tags: [STM32, DS18B20, PT100, Non-blocking, Alarm]
---
## 为什么阻塞式写法很快会失控

温度检测项目刚开始时，很容易把“读取传感器、等待转换、刷新屏幕、判断报警”全部写进一个循环。单个功能可能正常，但加入按键、串口、SD 卡和双路传感器后，任何一次长延时都会拖慢其他模块。常见现象包括按键偶尔失效、串口命令响应不及时、OLED 刷新卡顿，以及报警器节奏不稳定。

解决问题的关键不是简单删除 `HAL_Delay()`，而是把每个模块改成“到时间才执行一步”的状态机。主循环或调度器只负责周期调用，各模块自己保存当前状态和上次执行时间。

## 先明确模块边界

一个可维护的温度检测系统可以拆成五类职责：

- 采样模块负责启动转换、读取原始数据并报告有效状态。
- 数据模块负责滤波、单位换算和传感器故障标记。
- 阈值模块负责上下限检查、参数修改和持久化。
- 报警模块负责越限确认、蜂鸣器与指示灯节奏。
- 显示与通信模块只读取稳定快照，不直接操作采样时序。

这样拆分后，OLED 刷新失败不会改变传感器状态，串口修改阈值也不需要了解 DS18B20 的转换时序。

## DS18B20 采样应拆成两个阶段

DS18B20 启动温度转换后需要等待，阻塞等待会浪费大量 CPU 时间。更合适的做法是记录启动时刻，等待时间满足后再读取结果：

```c
typedef enum {
    DS_IDLE,
    DS_WAIT_CONVERSION
} DsState;

void DS18B20_Task(void)
{
    static DsState state = DS_IDLE;
    static uint32_t started_at = 0;

    if (state == DS_IDLE) {
        if (DS18B20_StartConversion()) {
            started_at = HAL_GetTick();
            state = DS_WAIT_CONVERSION;
        }
        return;
    }

    if ((HAL_GetTick() - started_at) >= DS_CONVERSION_MS) {
        ds_sample_valid = DS18B20_ReadTemperature(&ds_temperature_c);
        state = DS_IDLE;
    }
}
```

这里使用无符号时间差，能够自然处理系统节拍回绕。`ds_sample_valid` 必须与温度值一起更新，显示和报警逻辑不能把一次读取失败误认为 0 摄氏度。

## PT100 的换算要保留原始量

PT100 通常经过恒流源或电桥、运放和 ADC。调试时不要只保存最终温度，还应保留 ADC 原始值、换算电压和估算电阻。这样温度异常时可以逐级判断问题来自 ADC、模拟前端、标定参数还是温度公式。

建议把换算链写成明确步骤：

```text
ADC 码值 -> 输入电压 -> 传感器电阻 -> 温度 -> 滤波结果
```

每一步都应使用与硬件一致的参考电压、增益和电阻参数。没有完成实物标定前，软件结果只能视为换算值，不能当作精度结论。

## 阈值先规范化再保存

串口或按键可能把低温阈值设置得高于高温阈值。参数写入 Flash 前应先建立不变量：低值不高于高值，数值处于允许范围内，且不是 NaN。

```c
static void NormalizeThresholds(float *low, float *high)
{
    if (*low > *high) {
        const float temp = *low;
        *low = *high;
        *high = temp;
    }
    *low = Clamp(*low, MIN_ALLOWED_C, MAX_ALLOWED_C);
    *high = Clamp(*high, MIN_ALLOWED_C, MAX_ALLOWED_C);
}
```

Flash 中还应保存版本号和校验值。启动时如果校验失败，应加载明确的默认值，而不是继续使用未初始化数据。频繁修改参数时不要每次按键都擦写 Flash，可以在用户确认或停止操作一段时间后统一保存。

## 报警逻辑要区分判断与输出

“温度越限”是状态判断，“蜂鸣器如何响”是输出节奏，两者不应写在同一个条件分支里。报警状态可以增加连续确认次数或迟滞，避免温度在阈值附近波动时频繁开关。

```c
void Alarm_Task(bool enabled)
{
    static uint32_t last_toggle = 0;
    static bool output = false;

    if (!enabled) {
        output = false;
        Alarm_Set(false);
        return;
    }

    if ((HAL_GetTick() - last_toggle) >= 200U) {
        output = !output;
        Alarm_Set(output);
        last_toggle = HAL_GetTick();
    }
}
```

这种写法没有阻塞等待，显示、串口和其他传感器仍能按计划运行。若项目使用 FreeRTOS，也可以用软件定时器或任务通知实现同样的节奏。

## 显示层只读取数据快照

OLED 刷新期间不要直接触发传感器读取。数据模块应维护一份包含温度、有效标记、报警状态和更新时间的快照，显示模块按自己的刷新周期读取。这样显示频率可以独立调整，也能避免一半新数据和一半旧数据同时出现。

## 推荐的上板调试顺序

1. 只运行系统时钟、串口和 LED，确认基础工程稳定。
2. 单独接入 DS18B20，打印原始数据和有效标记。
3. 接入 PT100 模拟链，逐级核对 ADC、电压和电阻。
4. 加入 OLED，但暂时关闭报警和 SD 卡。
5. 验证阈值修改、异常输入与掉电恢复。
6. 最后接入蜂鸣器、按键和数据记录，并进行长时间运行检查。

如果 PB3、PB4 等引脚被 JTAG 占用，应先处理调试接口复用，再怀疑按键代码。硬件项目的排查顺序应从供电、引脚复用和原始量开始，而不是直接修改滤波参数。

## 验收时应该记录什么

- 两路传感器的原始量、有效标记和更新时间。
- 传感器断开、短路或 CRC 失败时的系统行为。
- 阈值交叉、越界和 Flash 校验失败时的回退结果。
- 报警期间串口、按键和显示是否仍能响应。
- 编译后的 Flash、RAM 占用以及任务栈余量。

非阻塞设计的价值不只是“运行更快”，而是让每个模块的时序、状态和失败方式都能被单独观察与验证。
