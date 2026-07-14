---
title: FPGA QPSK Baseband Link and Visualization System
slug: fpga-qpsk-baseband-system
description: An FPGA communications project covering PRBS, Gray mapping, phase rotation, hard decisions, BER, UART telemetry and Python constellation plots.
category: FPGA
status: Compilation and simulation completed
date: 2026-07
tags: [QPSK, Verilog, BER, UART, Python]
repository: https://github.com/jiayu-here/fpga_qpsk_baseband_visual_system
---
## Project Overview
This project implements a complete educational QPSK baseband link on a Cyclone IV E FPGA. UART and a Python desktop program expose transmitted and received points, I/Q traces and BER. A ModelSim-to-CSV path also supports verification without connected hardware.

## Project Goals
- Generate test bits with PRBS7 and apply Gray-coded QPSK mapping.
- Support 0, 90, 180 and 270-degree phase rotations.
- Perform hard-decision demodulation and BER counting.
- Export observations through UART or simulation CSV for Python visualization.

## Technology
Verilog HDL, PRBS7, Gray coding, signed fixed-point I/Q, quadrant decisions, pipeline alignment, UART telemetry, ModelSim, Quartus and Python Tkinter.

## Hardware and Software
- Wildfire Zhengdian Pro / Cyclone IV E `EP4CE10F17C8`, 50 MHz clock, keys, LEDs and CH340 USB UART.
- Quartus II Web Edition 13.0sp1 and ModelSim-Altera Starter Edition.
- Python 3; CSV mode uses the standard library and serial mode requires `pyserial`.

## System Architecture
The transmitter combines a symbol tick, PRBS7 and Gray mapping. The channel applies discrete phase rotations by swapping and negating I/Q. The receiver makes quadrant decisions and compares them with delayed reference bits. Telemetry samples I/Q and counters for UART or CSV output.

```architecture
Symbol tick and PRBS7 -> Gray mapping -> QPSK modulator -> Discrete phase channel -> Quadrant decision -> BER counter
I/Q and error data -> Telemetry framing -> UART or simulation CSV -> Python host -> Constellation and statistics
```

## Functional Modules
- `prbs7.v`, `symbol_tick.v`: source data and symbol timing.
- `qpsk_mapper.v`, `qpsk_channel_model.v`: Gray mapping and phase rotation.
- `qpsk_demapper.v`, `ber_counter.v`: hard decisions and error statistics.
- `telemetry_uart.v`, `uart_tx.v`: telemetry framing and serial transmission.
- `qpsk_visualizer.py`: constellation, waveform and BER display.

## Implementation
1. Define one fixed mapping between two-bit symbols and four I/Q quadrants.
2. Drive mapping, channel, decisions and counters from the same symbol-valid signal.
3. Delay the transmitted reference bits by the receiver pipeline latency.
4. Define telemetry fields and export CSV from the testbench.
5. Implement Python parsing, the Quartus project and board UART constraints.

## Key Code
The phase model uses swaps and negation rather than trigonometric functions:

```verilog
case (phase_sel)
  2'd0: begin ch_i = tx_i;  ch_q = tx_q;  end
  2'd1: begin ch_i = -tx_q; ch_q = tx_i;  end
  2'd2: begin ch_i = -tx_i; ch_q = -tx_q; end
  2'd3: begin ch_i = tx_q;  ch_q = -tx_i; end
endcase
```

Each valid QPSK symbol adds two compared bits to the BER counters:

```verilog
wire [1:0] diff = tx_bits ^ rx_bits;
wire [1:0] err_count = diff[0] + diff[1];

always @(posedge clk) begin
  if (!rst_n) begin
    total_bits <= 32'd0;
    error_bits <= 32'd0;
  end else if (sym_en) begin
    total_bits <= total_bits + 32'd2;
    error_bits <= error_bits + err_count;
  end
end
```

## Debugging and Verification
Constellation points were first checked under a fixed phase, then under all four rotations. Reference bits and decisions were inspected cycle by cycle to establish pipeline alignment. The testbench continuously produced `qpsk_samples.csv`, which was validated offline before live UART use.

## Problems and Solutions
Reference and received data had different pipeline delays; signed negation could lose the sign bit; and UART could not transmit every baseband symbol. A reference delay line, explicit signed widths and sampled telemetry resolved these issues while keeping visualization independent from baseband rate.

## Current Result
ModelSim passes and generates CSV. Quartus produces `fpga_qpsk_baseband_visual_system.sof`, with positive setup and hold slack for the 50 MHz build. Python loads CSV or serial data. Physical UART pin and jumper placement still require confirmation on the target board.

## Summary
The design turns constellation mapping, phase changes and BER into observable RTL timing. It is an educational verification model; the disabled noise interface is not presented as measured AWGN performance.

## GitHub Repository
[Open fpga_qpsk_baseband_visual_system](https://github.com/jiayu-here/fpga_qpsk_baseband_visual_system)
