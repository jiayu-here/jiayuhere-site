---
title: Multi-Function FPGA DDS Signal Generation and Measurement System
slug: fpga-dds-measure-system
description: A complete Cyclone IV E design combining multi-waveform DDS, PCF8591 AD/DA, real-time statistics and seven-segment display output.
category: FPGA
status: Compilation and simulation completed
date: 2026-07
tags: [Verilog, DDS, Quartus, ModelSim, MATLAB]
repository: https://github.com/jiayu-here/fpga_dds_measure_system
---
## Project Overview
This digital signal generation and measurement system targets the Wildfire Altera EP4CE10 Zhengdian Pro board. It combines DDS waveform generation, PCF8591T AD/DA access, sample statistics, key input and a six-digit seven-segment display in one synthesizable, simulatable FPGA project.

## Project Goals
- Generate sine, square, sawtooth and triangle waves.
- Drive the on-board 8-bit DAC and sample A_IN0 through the PCF8591T.
- Track ADC minimum, maximum and exponentially averaged values.
- Deliver RTL, testbenches, constraints, scripts, documentation and a downloadable `.sof` image.

## Technology
Verilog HDL, a DDS phase accumulator, sine lookup tables, an I2C state machine, exponential averaging, 74HC595 serial display control, ModelSim, TimeQuest and MATLAB LUT generation.

## Hardware Environment
- Wildfire Zhengdian Pro with Cyclone IV E `EP4CE10F17C8`.
- 50 MHz system clock.
- PCF8591T 8-bit ADC/DAC, 74HC595-driven six-digit display, keys and LEDs.

## Software Environment
- Quartus II Web Edition 13.0sp1.
- ModelSim-Altera Starter Edition 10.1d.
- MATLAB R2024b, or another version capable of running `generate_sine_lut.m`.
- Windows batch scripts for simulation, compilation and programming.

## System Architecture
The top level connects DDS, the PCF8591T I2C controller, ADC statistics and display logic. DDS produces one 8-bit waveform stream for the DAC. The I2C block reads the ADC while writing the DAC, and `adc_valid` defines the update boundary for the statistics block. Keys select average, minimum, maximum or current DDS sample for display.

```architecture
Keys and frequency control -> DDS core -> 8-bit waveform -> PCF8591T DAC -> Analog output
PCF8591T ADC -> adc_valid -> Sample statistics -> Display selector -> 74HC595 display
```

## Functional Modules
- `dds_core.v`: phase accumulation and four waveform modes.
- `pcf8591_i2c.v`: DAC writes, ADC reads and valid pulses.
- `adc_stats.v`: minimum, maximum and exponential average.
- `seg7_74hc595.v`: encoding and serial scan for six digits.
- `zhengtu_pro_top.v`: board pins, keys and LED integration.

## Implementation
1. Build a 32-bit phase accumulator and 256-entry sine LUT.
2. Derive square, sawtooth and triangle waves directly from the phase bits.
3. Implement the PCF8591T I2C state machine with an `adc_valid` pulse.
4. Keep sample statistics separate from I2C timing, then connect the display path.
5. Run ModelSim, full Quartus compilation and TimeQuest checks.

## Key Code
The phase accumulator advances by the frequency control word on every clock:

```verilog
always @(posedge clk or negedge reset_n) begin
  if (!reset_n)
    phase_acc <= 32'd0;
  else
    phase_acc <= phase_acc + phase_inc;
end
```

Statistics update only for valid samples; shifting provides a low-cost exponential average:

```verilog
always @(posedge clk or negedge rst_n) begin
  if (!rst_n || clear) begin
    min_value <= {WIDTH{1'b1}};
    max_value <= {WIDTH{1'b0}};
    avg_acc   <= {(WIDTH+AVG_SHIFT){1'b0}};
  end else if (sample_valid) begin
    if (sample_in < min_value) min_value <= sample_in;
    if (sample_in > max_value) max_value <= sample_in;
    avg_acc <= avg_acc - (avg_acc >> AVG_SHIFT) + sample_in;
  end
end
```

## Debugging and Verification
DDS, PWM and statistics were verified with a generic top level before the board-specific I2C and display integration. After simulation reached `$finish`, Analysis & Synthesis, Fitter, Assembler and TimeQuest were checked in sequence, and both reports and the `.sof` were retained.

## Problems and Solutions
Incorrect 74HC595 bit order or segment polarity can blank or corrupt the display, while a digital testbench cannot fully reproduce the analog PCF8591T behavior. Segment polarity and shift order were centralized in the display module, statistics were gated by `adc_valid`, and the verified Quartus 13.0sp1 toolchain was fixed for reproducibility.

## Current Result
ModelSim passes, and Quartus completes synthesis, fitting, assembly and timing analysis with positive setup slack under the 50 MHz constraint. The image is available at `quartus/fpga_dds_measure_system.sof`. Physical analog I/O still requires board-level confirmation.

## Summary
The project closes the loop from algorithm model through RTL, peripheral interface and display to compiled delivery. Its modular structure leaves room for frequency configuration, UART telemetry and further board measurements.

## GitHub Repository
[Open fpga_dds_measure_system](https://github.com/jiayu-here/fpga_dds_measure_system)
