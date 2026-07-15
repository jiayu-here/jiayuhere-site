---
title: FreeRTOS Smart Car: C8T6 Resource Pressure
slug: freertos-smartcar-c8t6-resource-pressure
description: Examines Flash, RAM, task stacks and persistence boundaries in a multi-task smart-car firmware.
date: 2026-07
projectSlug: stm32f103-freertos-smartcar
---

**Project:** STM32F103 FreeRTOS Multi-Mode Smart Car

**Symptom:** Tasks, controls and diagnostics left little room in 64 KB Flash and 20 KB RAM.

**Hypothesis:** Task stacks, dynamic structures, the OLED buffer and persistent parameters could be consuming too many resources together.

**Investigation:** Built C8T6 and RCT6 targets, inspected size and linker output, ran host PID and protocol tests, and checked the reserved final 1 KB Flash page.

**Root cause:** The complete task, display, diagnostic and parameter set approached the MCU limits.

**Fix:** Used fixed arrays, removed a full OLED framebuffer, reduced task resources and reserved the final 1 KB page.

**Lesson:** Embedded acceptance must cover Flash, RAM, task stacks and persistence boundaries. Firmware and host tests pass; vehicle power, calibration and endurance are pending.
