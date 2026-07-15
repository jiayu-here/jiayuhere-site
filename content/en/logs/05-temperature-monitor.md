---
title: Temperature Monitor: PB3/PB4 Conflict with JTAG
slug: temperature-monitor-pb3-pb4-jtag-conflict
description: Finds unresponsive STM32F103 key inputs by checking debug-port pin multiplexing.
date: 2026-07
projectSlug: temperature-inspector-stm32f103
---

**Project:** STM32F103 Dual-Channel Temperature Monitoring and Alarm System

**Symptom:** Key inputs on PB3/PB4 did not behave as GPIO.

**Hypothesis:** Check wiring and debounce first, then determine whether alternate debug functions still own the pins.

**Investigation:** Brought up MCU, sensors, OLED, alarm, keys, SD and UART in order and checked debug-port multiplexing.

**Root cause:** PB3/PB4 were still assigned to the full JTAG interface.

**Fix:** Disabled full JTAG while retaining SWD, then re-tested keys and retained SD state plus error counters for later diagnosis.

**Lesson:** Check pin multiplexing before rewriting application logic. The project and flashable HEX exist; sensor voltage, SD and alarm behavior still require board verification.
