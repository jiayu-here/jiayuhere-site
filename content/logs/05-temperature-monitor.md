---
title: 双路温度检测：PB3/PB4 按键与 JTAG 冲突
slug: temperature-monitor-pb3-pb4-jtag-conflict
description: 通过检查调试端口复用定位 STM32F103 按键 GPIO 无响应问题。
date: 2026-07
projectSlug: temperature-inspector-stm32f103
---

**项目：** STM32F103 双路温度检测与报警系统

**问题现象：** 使用 PB3/PB4 作为按键输入时，按键功能与默认调试接口发生冲突。

**初步判断：** 先检查按键接线和消抖逻辑，再检查这两个引脚是否仍由芯片复用功能占用。

**排查过程：** 按主控、单个传感器、OLED、报警、按键、SD 和串口的顺序逐项接入，并核对 STM32F103 的调试端口复用配置。

**最终原因：** PB3/PB4 默认属于完整 JTAG 接口，未释放时不能按普通 GPIO 使用。

**解决方法：** 关闭完整 JTAG，仅保留 Serial Wire 调试，再验证按键输入；同时保留 SD 状态与错误计数用于后续排查。

**经验总结：** 遇到 GPIO 无响应时，应先核对复用功能和调试接口，再修改业务逻辑。工程和可烧录 HEX 已生成，传感器电压、SD 卡和报警功能仍需上板验证。
