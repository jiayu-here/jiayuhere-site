---
title: From Constellation to RTL: A Verifiable Order for Building a QPSK Link
slug: qpsk-from-constellation-to-rtl
description: A verification-first sequence for Gray mapping, phase rotation, hard decisions and BER alignment.
category: Communication Theory
date: 2026-07-14
tags: [QPSK, FPGA, BER, Gray]
---
## Define the Complete Data Path First
A QPSK RTL link is more than mapping two bits to a point. Data crosses a source, serial-to-parallel conversion, Gray mapping, channel model, decision logic, reference delay, error counters and telemetry. Every stage can change width, signed meaning or timing.

Before coding, define bit order, signed I/Q representation, quadrant orientation, the cycle represented by `valid`, and whether the counter measures bit or symbol errors. The Verilog, testbench and Python display must use the same contract.

## Fix One Gray Mapping Table
One common convention is:

```text
00 -> I=+A, Q=+A
01 -> I=-A, Q=+A
11 -> I=-A, Q=-A
10 -> I=+A, Q=-A
```

Write the complete mapping explicitly and declare `AMP`, I and Q as signed values:

```verilog
always @* begin
  case (tx_bits)
    2'b00: begin i_symbol =  AMP; q_symbol =  AMP; end
    2'b01: begin i_symbol = -AMP; q_symbol =  AMP; end
    2'b11: begin i_symbol = -AMP; q_symbol = -AMP; end
    2'b10: begin i_symbol =  AMP; q_symbol = -AMP; end
    default: begin i_symbol = 0; q_symbol = 0; end
  endcase
end
```

An unsigned operand can silently alter comparison, negation and extension rules.

## Keep the Bit Source Separate
PRBS is useful for continuous data, but start with `00, 01, 11, 10` in the testbench. Verify all points before connecting PRBS. The source should only produce reference bits and validity; the mapper should only map symbols. That separation also makes later UART or memory sources easy to substitute.

## Discrete Phase Rotation Needs No Trigonometry
For 0, 90, 180 and 270 degrees, swaps and negation are sufficient:

```verilog
case (phase_sel)
  2'd0: begin rx_i =  tx_i; rx_q =  tx_q; end
  2'd1: begin rx_i = -tx_q; rx_q =  tx_i; end
  2'd2: begin rx_i = -tx_i; rx_q = -tx_q; end
  2'd3: begin rx_i =  tx_q; rx_q = -tx_i; end
endcase
```

Arbitrary phase, frequency offset or noise should first be verified in MATLAB or Python before choosing CORDIC, a LUT or external sample injection.

## Hard Decisions Must Invert the Mapper
In an ideal zero-threshold baseband model, the signs of I and Q select the quadrant. The decoded bits must exactly invert the transmitter table, including the convention for values equal to zero.

```verilog
if (rx_i >= 0 && rx_q >= 0)      decided_bits = 2'b00;
else if (rx_i < 0 && rx_q >= 0)  decided_bits = 2'b01;
else if (rx_i < 0 && rx_q < 0)   decided_bits = 2'b11;
else                              decided_bits = 2'b10;
```

## Pipeline Alignment Is the Common Failure
Mapping, channel, decisions and output registers introduce latency. BER logic must compare a delayed reference with the decision from the same symbol. Data and `valid` should travel through every stage together, while the transmitted reference follows an equal-length delay line.

Do not debug from the final BER number alone. Print the reference, decision and valid signal cycle by cycle.

## State the BER Denominator
Each valid QPSK symbol represents two bits. XOR the reference and decision, count zero, one or two bit differences, add two to `total_bits`, and leave the final division to the host or low-rate display logic.

```verilog
wire [1:0] bit_diff = reference_bits ^ decided_bits;
wire [1:0] error_count = bit_diff[0] + bit_diff[1];
```

## Check Width and Negation Explicitly
The most negative two's-complement value cannot be negated in the same width. If full-scale negative samples are possible, limit amplitude, add a guard bit or use saturation. All cross-module I/Q ports must be signed and widened with sign extension.

## Verify in Layers
1. Map all four symbols and verify inverse decisions.
2. Rotate one point through all four phase states.
3. Send numbered symbols and verify latency and valid timing.
4. Inject controlled bit errors and confirm increments of 0, 1 or 2.
5. Run long PRBS sequences and test reset and clear behavior.

## Add Visualization After Algorithm Verification
Export I/Q, reference bits and counters to CSV first. Once offline Python plots agree, connect UART. Because serial bandwidth is normally far below the internal symbol rate, sample or aggregate telemetry instead of transmitting every symbol. The host displays the agreed data contract; it must not redefine mapping or BER.

## Acceptance Checklist
- Mapping and decision tables are exact inverses.
- Error count remains zero with no noise and zero rotation.
- All four rotations match the I/Q definition.
- Reference bits and decisions meet on the same valid cycle.
- Injected errors add 0, 1 or 2 correctly.
- CSV and UART use identical fields and symbol conventions.
- Simulation, timing compilation and board verification are reported separately.
