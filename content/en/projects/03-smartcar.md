---
title: STM32F103 FreeRTOS Multi-Mode Smart Car
slug: stm32f103-freertos-smartcar
description: FreeRTOS smart-car firmware with dual-wheel PID, encoder odometry, line following, obstacle avoidance, Flash parameters, safety protection and complete documentation.
category: Embedded Systems
status: Software build completed; vehicle validation pending
date: 2026-07
tags: [STM32, FreeRTOS, PID, Encoder, Bluetooth]
repository: https://github.com/jiayu-here/stm32f103-freertos-smartcar
---
## Project Overview
This is dual-wheel smart-car firmware for STM32F103C8T6 and RCT6 devices. The repository includes HAL, CMSIS, FreeRTOS, startup and linker files, application source, prebuilt images, wiring and BOM documents, host tests and operating instructions.

## Project Goals
- Run a schedulable and diagnosable multi-task controller on the constrained C8T6.
- Implement closed-loop motors, line following, avoidance, distance and angle moves, and route queues.
- Add low-battery, emergency-stop, stall, task-health and watchdog protection.
- Build for both C8T6 and RCT6 while retaining complete delivery artifacts.

## Technology
C, STM32 HAL, FreeRTOS, dual-wheel speed PID, quadrature encoders, 2D odometry, CRC-protected Flash records, StreamBuffer, IWDG, CMake, Ninja, Arm GNU Toolchain and a Python serial console.

## Hardware Environment
STM32F103C8T6 or RCT6, TB6612FNG, two motors and quadrature encoders, five infrared sensors, HC-SR04, SG90, HC-05, SSD1306 OLED, battery sensing, buzzer, LED, ST-Link and a separate 5 V servo supply.

## Software Environment
Windows PowerShell, Arm GNU Toolchain, CMake, Ninja and Python 3. HAL, CMSIS and FreeRTOS are included together with one-command build, flash and test scripts.

## System Architecture
The code is divided into application, BSP, HAL/CMSIS and FreeRTOS layers. Seven tasks cover safety, control, communications, behavior, sensors, display and monitoring. The highest-priority safety task supervises faults; the 10 ms control task updates encoders, ramps, PID and odometry; communications parse Bluetooth commands through a StreamBuffer.

```architecture
Sensors and Bluetooth -> BSP and HAL -> FreeRTOS tasks -> Mode and safety decisions -> PID and odometry -> PWM motor drive
Encoders and faults -> Control and monitoring -> OLED and UART diagnostics
```

## Functional Modules
- 20 kHz dual-motor PWM, two encoder channels and independent PID loops.
- Manual, line-following, avoidance, hybrid and cruise modes.
- `MOVE`, `TURN` and an eight-segment route queue.
- Flash parameter storage with CRC and append-style wear leveling.
- OLED, UART logs, fault history, reset reasons and task-stack diagnostics.

## Implementation
1. Establish the BSP and separate C8T6/RCT6 targets.
2. Verify encoder direction, RPM calculation and dual-wheel PID.
3. Split safety, control, behavior and communications into FreeRTOS tasks.
4. Add mode state machines, odometry and quantitative moves.
5. Add Flash parameters, safety protection, diagnostics and documentation.
6. Run host tests and produce ELF, HEX, BIN, MAP and checksum files.

## Key Code
The PID controller limits both the integral term and final output:

```c
float PID_Update(PIDController *pid, float setpoint, float measurement, float dt_s)
{
    const float error = setpoint - measurement;
    const float derivative = (error - pid->previous_error) / dt_s;
    pid->integral = clampf(pid->integral + error * dt_s, pid->integral_limit);
    float output = pid->kp * error + pid->ki * pid->integral + pid->kd * derivative;
    pid->previous_error = error;
    return clampf(output, pid->output_limit);
}
```

Bluetooth commands reject missing, malformed or extra arguments before reaching control tasks.

## Debugging and Verification
PID and protocol host tests run before building both MCU targets. Vehicle bring-up should proceed with wheels raised, then calibrate encoder counts, wheel diameter and track width, tune PID, test line following and avoidance on the ground, and finally verify safety mechanisms through `STATUS`, `CONFIG` and `DIAG`.

## Problems and Solutions
The C8T6 has only 64 KB Flash and 20 KB RAM; motor or servo current surges may reset the MCU; incorrect encoder signs create positive feedback; and encoder-only odometry drifts under slip. The design reserves the final 1 KB Flash page, favors fixed arrays, avoids a full OLED framebuffer, separates servo power, checks encoder direction before PID tuning and exposes diagnostic fault codes.

## Current Result
Both C8T6 and RCT6 cross-builds pass, as do PID and protocol host tests. Prebuilt firmware is included. The C8T6 image is about 55 KB and leaves the parameter page plus roughly 8.9 KB of Flash. Electrical, mechanical, calibration and endurance behavior remain explicitly pending because no physical vehicle was connected in the delivery environment.

## Summary
The emphasis is controlled task timing, parameter persistence, safety and diagnosable delivery rather than a loose collection of car features. Software boundaries are verified and hardware conclusions remain evidence-based.

## GitHub Repository
[Open stm32f103-freertos-smartcar](https://github.com/jiayu-here/stm32f103-freertos-smartcar)
