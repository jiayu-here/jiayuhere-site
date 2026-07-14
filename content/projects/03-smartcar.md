---
title: STM32F103 FreeRTOS 多模式智能小车
slug: stm32f103-freertos-smartcar
description: 包含双轮 PID、编码器里程计、循迹避障、Flash 参数、安全保护和完整文档的 FreeRTOS 小车固件。
category: 嵌入式
status: 软件构建完成，实车待验证
date: 2026-07
tags: [STM32, FreeRTOS, PID, Encoder, Bluetooth]
repository: https://github.com/jiayu-here/stm32f103-freertos-smartcar
---
## 项目简介
这是面向 STM32F103C8T6 和 RCT6 的双轮智能小车固件。工程包含 HAL、CMSIS、FreeRTOS、启动文件、链接脚本、应用源码、预编译镜像、接线表、BOM、主机测试和操作文档，可直接构建并继续上板标定。

## 项目目标
- 在资源较小的 C8T6 上实现可调度、可诊断的多任务小车控制。
- 完成电机闭环、循迹、避障、定距、定角和路线队列。
- 加入低电、急停、堵转、任务健康和看门狗保护。
- 同时支持 C8T6 与 RCT6 构建，保留完整交付资料。

## 使用技术
C、STM32 HAL、FreeRTOS、双轮速度 PID、AB 相编码器、二维里程计、Flash CRC 记录、StreamBuffer、IWDG、CMake、Ninja、Arm GNU Toolchain 和 Python 串口控制台。

## 硬件环境
- STM32F103C8T6 或 STM32F103RCT6。
- TB6612FNG、电机与双 AB 相编码器。
- 五路红外、HC-SR04、SG90、HC-05、SSD1306 OLED。
- 电池采样、蜂鸣器、LED、ST-Link 和独立 5 V 舵机电源。

## 软件环境
- Windows PowerShell。
- Arm GNU Toolchain、CMake 和 Ninja。
- Python 3 串口控制台。
- 仓库自带 HAL、CMSIS、FreeRTOS 和一键构建、烧录、测试脚本。

## 系统架构
系统分为应用层、BSP、HAL/CMSIS 和 FreeRTOS 内核。七个任务按安全、控制、通信、行为、传感、显示和监控分工；安全任务优先级最高，控制任务以 10 ms 周期完成编码器、斜坡、PID 和里程计；通信任务通过 StreamBuffer 解析蓝牙命令。

```architecture
传感器与蓝牙 -> BSP 与 HAL 驱动 -> FreeRTOS 任务层 -> 模式与安全决策 -> PID 与里程计 -> PWM 电机驱动
编码器与故障状态 -> 控制和监控任务 -> OLED 与 UART 日志
```

## 功能模块
- 双电机 20 kHz PWM、双编码器测速和独立 PID。
- 手动、循迹、避障、融合和巡航模式。
- `MOVE`、`TURN` 与 8 段路线队列。
- Flash 参数保存、CRC 和追加式磨损均衡。
- OLED、UART 日志、故障历史、复位原因与任务栈诊断。

## 实现步骤
1. 建立 BSP 和 C8T6/RCT6 双目标构建。
2. 完成编码器方向、RPM 计算和左右轮 PID。
3. 在 FreeRTOS 中划分安全、控制、行为和通信任务。
4. 加入模式状态机、里程计和定量运动。
5. 加入 Flash 参数、安全保护、诊断和文档。
6. 运行主机测试并生成 ELF、HEX、BIN、MAP 与校验文件。

## 关键代码
PID 模块对积分项和最终输出分别限幅，降低积分饱和风险：

```c
pid->integral = clampf(pid->integral + error * dt_s, pid->integral_limit);
output = pid->kp * error + pid->ki * pid->integral + pid->kd * derivative;
return clampf(output, pid->output_limit);
```

## 调试过程
先运行 PID 与协议主机测试，再分别构建 C8T6 和 RCT6。实车调试应按“架空车轮确认方向—标定 CPR/轮径/轮距—调整 PID—落地循迹避障—验证安全保护”的顺序推进，并通过 `STATUS`、`CONFIG` 和 `DIAG` 观察状态。

## 遇到的问题
- C8T6 只有 64 KB Flash 和 20 KB RAM，FreeRTOS 任务与文档化功能容易超资源。
- 电机、舵机浪涌可能造成复位。
- 编码器符号错误会让 PID 形成正反馈。
- 纯编码器里程计会因打滑累计漂移。

## 解决方案
链接脚本保留最后 1 KB 参数页，固定数组替代动态结构，OLED 不使用全屏缓冲；舵机使用独立 5 V 并共地；调 PID 前先验证编码器正方向；通过 `DIAG`、故障码和分阶段验收定位电源与控制问题。

## 最终效果
C8T6/RCT6 Arm GNU 交叉编译通过，PID 和协议主机测试通过，并生成预编译固件。C8T6 程序约 55 KB，保留参数页和约 8.9 KB Flash 余量。仓库明确标注：交付环境未连接实车，电气、机械、标定和长期运行仍需实物验证。

## 项目总结
该项目重点不是堆叠小车功能，而是建立任务优先级、控制周期、参数持久化、安全策略和可诊断交付。软件边界已验证，硬件结论仍按证据分开说明。

## GitHub 仓库链接
[访问 stm32f103-freertos-smartcar](https://github.com/jiayu-here/stm32f103-freertos-smartcar)
