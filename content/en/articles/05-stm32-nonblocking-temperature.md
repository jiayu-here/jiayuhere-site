---
title: Non-Blocking STM32 Temperature Monitoring: From Sampling State Machines to Alarm Tasks
slug: stm32-temperature-nonblocking-design
description: A dual-channel example covering non-blocking sampling, threshold management, alarm cadence, persistence and board bring-up.
category: Embedded Systems
date: 2026-07-14
tags: [STM32, DS18B20, PT100, Non-blocking, Alarm]
---
## Why Blocking Code Quickly Becomes Unmanageable
Putting sensor reads, conversion waits, display refresh and alarms in one loop may work at first. Once keys, serial, SD and a second sensor arrive, any long delay slows everything else. Missed keys, delayed commands, display stutter and irregular alarms are typical symptoms.

The solution is not simply deleting `HAL_Delay()`. Each module becomes a state machine that performs one step when its deadline arrives, retaining its own state and last-run time.

## Define Module Boundaries
- Sampling starts conversions, reads raw data and reports validity.
- Data processing filters, converts units and records sensor faults.
- Threshold management validates, edits and persists limits.
- Alarm logic confirms violations and generates buzzer/LED cadence.
- Display and communication consume stable snapshots without controlling sensor timing.

With these boundaries, an OLED failure cannot corrupt sensor state, and a serial threshold update need not understand DS18B20 conversion timing.

## Split DS18B20 Sampling into Two Stages
Start conversion, record the tick, return immediately, and read only after the conversion interval:

```c
typedef enum { DS_IDLE, DS_WAIT_CONVERSION } DsState;

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

Unsigned tick subtraction naturally survives counter wrap. Update value and validity together so that a failed read is not interpreted as 0 °C.

## Preserve Raw PT100 Quantities
A PT100 path may include a current source or bridge, amplifier and ADC. Retain ADC code, voltage, estimated resistance and temperature so an anomaly can be localized. The conversion chain should state its reference voltage, gain and resistor assumptions:

```text
ADC code -> Input voltage -> Sensor resistance -> Temperature -> Filtered value
```

Before physical calibration, the result is a calculated estimate, not an accuracy claim.

## Normalize Thresholds Before Saving
Reject NaN, clamp limits to allowed bounds and ensure low is not above high. Store a version and checksum in Flash; fall back to explicit defaults when validation fails. Do not erase Flash for every key press—save on confirmation or after an inactivity interval.

## Separate Alarm Decisions from Alarm Output
Limit violation is a state decision; buzzer cadence is an output policy. Use consecutive confirmations or hysteresis near the boundary. A tick-driven output toggles without blocking:

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

## Let the Display Read a Snapshot
The display should never trigger a sensor conversion. Maintain a snapshot containing temperatures, valid flags, alarm state and update time. Display refresh can then change independently without mixing half-new and half-old data.

## Recommended Board Bring-Up
1. Verify clock, UART and LED.
2. Connect only DS18B20 and print raw data plus validity.
3. Add the PT100 analog chain and inspect ADC, voltage and resistance.
4. Add the OLED with alarm and SD still disabled.
5. Verify threshold edits, invalid input and power-cycle restoration.
6. Finally add buzzer, keys and logging, then run an endurance test.

Resolve supply, pin multiplexing and raw values before tuning filters. PB3/PB4 key use, for example, may first require changing the JTAG configuration.

## Acceptance Evidence
- Raw values, validity and timestamps for both sensors.
- Behavior on disconnect, short circuit or CRC failure.
- Fallback after crossed limits, out-of-range values or Flash checksum failure.
- Serial, key and display responsiveness while alarms run.
- Compiled Flash/RAM use and task-stack margin.

Non-blocking design is valuable because timing, state and failure can be observed and verified independently, not merely because the loop runs faster.
