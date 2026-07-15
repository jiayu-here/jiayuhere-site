---
title: FreeRTOS 智能小车：C8T6 资源余量不足
slug: freertos-smartcar-c8t6-resource-pressure
description: 从 Flash、RAM、任务栈和持久化边界分析多任务智能小车的资源压力。
date: 2026-07
projectSlug: stm32f103-freertos-smartcar
---

**项目：** STM32F103 FreeRTOS 多模式智能小车

**问题现象：** 完整任务、控制和诊断功能放入 C8T6 后，64 KB Flash 与 20 KB RAM 的余量较紧。

**初步判断：** 任务栈、动态数据结构、OLED 缓冲和参数存储可能共同占用过多资源。

**排查过程：** 分别构建 C8T6 与 RCT6，检查程序尺寸和链接结果；运行 PID 与协议主机测试，并确认最后 1 KB Flash 参数页未被程序覆盖。

**最终原因：** C8T6 本身资源有限，FreeRTOS 多任务与显示、诊断、参数功能叠加后形成资源压力。

**解决方法：** 使用固定数组替代动态结构，OLED 不保留全屏缓冲，精简任务资源，并在链接脚本中固定保留参数页。

**经验总结：** 嵌入式功能设计必须同时验证 Flash、RAM、任务栈和持久化边界。当前固件与主机测试通过，电机方向、标定、电源和长期运行尚未实车验证。
