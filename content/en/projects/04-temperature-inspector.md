---
title: STM32F103 Dual-Channel Temperature Monitoring and Alarm System
slug: temperature-inspector-stm32f103
description: An STM32 design integrating DS18B20, PT100, OLED, audible and visual alarms, SD logging, serial configuration and Flash threshold storage.
category: Embedded Systems
status: Project and firmware generated
date: 2026-07
tags: [STM32, DS18B20, PT100, FatFs, OLED]
repository: https://github.com/jiayu-here/TemperatureInspector_STM32F103C8T6
---
## Project Overview
This dual-channel temperature monitor targets an STM32F103C8T6 minimum board. It samples a digital DS18B20 and the voltage from a PT100 module, drives an OLED and alarms, logs CSV to an SD card, accepts serial commands and stores thresholds across power cycles. An ESP-01S cloud workflow is reserved but disabled by default.

## Project Goals
- Acquire digital and analog temperature channels together.
- Adjust thresholds from keys or serial commands and retain them in Flash.
- Provide alarms, min/max tracking, SD CSV logs and status diagnostics.
- Keep Keil, CubeMX and GCC outputs together with complete wiring documents.

## Technology and Environment
C, STM32 HAL, ADC, 1-Wire, I2C, SPI, FatFs, UART, internal Flash, non-blocking periodic scheduling and debounced limit decisions. Hardware includes the STM32F103C8T6, ST-Link, DS18B20, PT100 voltage module, SSD1306 OLED, SD SPI module, keys, buzzer and alarm LED. Serial is 115200 8N1.

## System Architecture
The main loop uses independent millisecond timestamps. Sampling updates channel values and ranges; the alarm block requires two consecutive violations; the display refreshes only after content changes; FatFs appends CSV records; and UART receives and parses whole lines without blocking.

```architecture
DS18B20 and PT100 -> Non-blocking sampler -> Limit confirmation -> OLED status -> Buzzer and LED
Temperature and thresholds -> FatFs CSV -> Flash settings -> UART query and configuration
```

## Functional Modules
- `app_ds18b20.c`, `app_pt100.c`: two sensing paths.
- `app_alarm.c`, `app_keys.c`: alarm output and key configuration.
- `app_oled.c`: status, thresholds and min/max display.
- `app_storage.c`: SD-card CSV logging.
- `app_settings.c`: persistent storage for four thresholds.
- `app.c`: state aggregation, serial commands and periodic scheduling.

## Implementation
1. Configure ADC, I2C, SPI, UART and GPIO from the pin table.
2. Verify DS18B20 and PT100 conversion independently.
3. Add thresholds, two-sample confirmation and audible/visual alarms.
4. Integrate the OLED, short/long key presses and Flash storage.
5. Integrate FatFs logs and serial commands.
6. Generate the Keil project, GCC HEX and user documentation.

## Key Code
Threshold pairs are normalized before persistence, and alarm cadence uses the system tick instead of a blocking delay:

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

## Debugging and Verification
Bring-up proceeds through MCU and ST-Link, one sensor at a time, OLED, alarm, keys, SD and serial. PB3/PB4 key use requires disabling full JTAG while retaining Serial Wire. OLED SD status and error counts help isolate card failures.

## Problems and Solutions
PB3/PB4 conflict with default JTAG, PT100 module output may exceed the 3.3 V ADC limit, one bad sample can cause false alarms, and SD power or formatting can fail. The design fixes debug mode to SWD, requires input-voltage checks, confirms two consecutive violations and exposes storage status and error counters. FAT32, insertion before power-on and a common ground are documented requirements.

## Current Result
The repository contains a complete HAL project, Keil project, CubeMX configuration, FatFs, documentation and a flashable HEX image. Defaults are 15-second sampling and logging, 10–60 °C for DS18B20 and 0–100 °C for PT100. Cloud support remains a documented flow, not a claimed deployed feature.

## Summary
The project integrates acquisition, interaction, persistence and fault status in one STM32 exercise. Sensor accuracy, PT100 calibration and long-term SD reliability still require physical acceptance testing.

## GitHub Repository
[Open TemperatureInspector_STM32F103C8T6](https://github.com/jiayu-here/TemperatureInspector_STM32F103C8T6)
