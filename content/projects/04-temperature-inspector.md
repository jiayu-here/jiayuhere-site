---
title: STM32F103 双路温度检测与报警系统
slug: temperature-inspector-stm32f103
description: 集成 DS18B20、PT100、OLED、声光报警、SD 记录、串口调参和 Flash 阈值保存的 STM32 工程。
category: 嵌入式
status: 工程与固件已生成
date: 2026-07
tags: [STM32, DS18B20, PT100, FatFs, OLED]
repository: https://github.com/jiayu-here/TemperatureInspector_STM32F103C8T6
---
## 项目简介
这是一个基于 STM32F103C8T6 最小系统板的双路温度监测工程。系统同时采集 DS18B20 数字温度和 PT100 模块电压，完成 OLED 显示、阈值报警、SD 卡记录、串口控制和阈值掉电保存，并预留 ESP-01S 云服务流程。

## 项目目标
- 同时完成数字与模拟温度采集。
- 让阈值可通过按键和串口调整并保存到 Flash。
- 提供声光报警、最高最低值、SD CSV 记录和状态诊断。
- 保留 Keil、CubeMX、GCC 产物和完整接线文档。

## 使用技术
C、STM32 HAL、ADC、单总线、I2C、SPI、FatFs、UART、内部 Flash、非阻塞周期调度和阈值消抖判定。

## 硬件环境
- STM32F103C8T6、ST-Link。
- DS18B20、PT100 电压转换模块、SSD1306 OLED。
- SD 卡 SPI 模块、三个按键、有源蜂鸣器、报警 LED。
- ESP-01S 为预留硬件，默认关闭。

## 软件环境
- Keil MDK 工程 `TemperatureInspector_STM32F103C8T6.uvprojx`。
- STM32CubeMX 配置文件和 STM32 HAL/CMSIS。
- GCC 构建输出 `build_gcc/TemperatureInspector.hex`。
- 串口参数 115200、8N1。

## 系统架构
主循环使用多个毫秒时间戳进行非阻塞调度：采样任务更新两路温度和范围；报警模块执行连续两次越限确认；显示任务只在内容变化时刷新；存储任务通过 FatFs 追加 CSV；串口任务以非阻塞方式接收并解析整行命令。

```architecture
DS18B20 与 PT100 -> 非阻塞采样调度 -> 越限确认 -> OLED 状态显示 -> 蜂鸣器报警
温度与阈值状态 -> FatFs CSV 记录 -> Flash 参数保存 -> 串口命令查询
```

## 功能模块
- `app_ds18b20.c`、`app_pt100.c`：两路温度采集。
- `app_alarm.c`、`app_keys.c`：报警和按键调参。
- `app_oled.c`：状态、阈值和最高最低值显示。
- `app_storage.c`：SD 卡 CSV 记录。
- `app_settings.c`：四个阈值的 Flash 保存。
- `app.c`：状态汇总、串口命令和周期调度。

## 实现步骤
1. 根据引脚表配置 ADC、I2C、SPI、UART 和 GPIO。
2. 分别验证 DS18B20 与 PT100 换算。
3. 加入阈值、连续两次越限确认和声光报警。
4. 接入 OLED、按键长短按和 Flash 保存。
5. 接入 FatFs 记录和串口命令。
6. 生成 Keil 工程、GCC HEX 和使用文档。

## 关键代码
### `Core/Src/app.c`：阈值规范化与保存
阈值修改后先保证低值不高于高值，再写入 Flash：

```c
static void NormalizeThresholds(void)
{
    float t;
    if (ds_low_limit_c > ds_high_limit_c) {
        t = ds_low_limit_c;
        ds_low_limit_c = ds_high_limit_c;
        ds_high_limit_c = t;
    }
    if (pt_low_limit_c > pt_high_limit_c) {
        t = pt_low_limit_c;
        pt_low_limit_c = pt_high_limit_c;
        pt_high_limit_c = t;
    }
}
```

### `Core/Src/app_alarm.c`：非阻塞报警节奏
报警任务用系统节拍翻转状态，不使用阻塞延时：

```c
void Alarm_Task(uint8_t enabled)
{
    static uint32_t last_toggle = 0;
    static uint8_t state = 0;
    if (!enabled) {
        state = 0;
        Alarm_Set(0);
        return;
    }
    if ((HAL_GetTick() - last_toggle) >= 200U) {
        state ^= 1U;
        Alarm_Set(state);
        last_toggle = HAL_GetTick();
    }
}
```

## 调试过程
按“主控与 ST-Link—单个传感器—OLED—报警—按键—SD—串口”的顺序逐项接入。PB3/PB4 复用按键时必须关闭完整 JTAG、保留 Serial Wire；SD 异常通过 OLED 的 `SD` 与错误计数定位。

## 遇到的问题
- PB3/PB4 与 JTAG 默认功能冲突。
- PT100 模块输出超过 3.3 V 会威胁 ADC。
- 单次异常采样容易造成误报警。
- SD 卡格式、供电或接触问题会导致写入失败。

## 解决方案
调试接口固定为 Serial Wire；上板前检查 PT100 电压范围；同一路连续两次越限才报警；为 SD 卡提供状态和错误计数，并要求 FAT32、上电前插卡和所有模块共地。

## 最终效果
仓库包含完整 HAL 工程、Keil 项目、CubeMX 配置、FatFs、文档和可烧录 HEX。默认每 15 秒采样、判断和写入；DS18B20 默认 10–60°C，PT 默认 0–100°C。云服务仅保留流程，不标记为已上线功能。

## 项目总结
工程覆盖了传感采集、交互、持久化和异常状态，是一套完整的 STM32 外设综合实践。实际传感器精度、PT100 标定和长期 SD 稳定性仍应在实物上继续验收。

## GitHub 仓库链接
[访问 TemperatureInspector_STM32F103C8T6](https://github.com/jiayu-here/TemperatureInspector_STM32F103C8T6)
