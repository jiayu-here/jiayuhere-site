---
title: FPGA DDS from Frequency Word to Measurement Display: A Verifiable Path
slug: fpga-dds-frequency-word-to-display
description: Layered design and verification for the phase accumulator, waveform LUT, sample-valid contract, statistics and board display.
category: FPGA
date: 2026-07-14
tags: [FPGA, DDS, Verilog, ADC, Quartus]
---
## DDS Starts with Phase, Not the Waveform Table
A direct digital synthesizer advances phase by a fixed step on each effective sample clock and uses high phase bits to address a waveform. For an N-bit accumulator:

```text
f_out = phase_inc × f_clk / 2^N
```

Resolution is `f_clk / 2^N`. A wide phase accumulator improves resolution without requiring the LUT address to use every phase bit.

## Keep the Phase Accumulator Simple
It should handle reset, enable and the step, not ADC or display control:

```verilog
reg [PHASE_WIDTH-1:0] phase_acc;

always @(posedge clk or negedge reset_n) begin
  if (!reset_n)
    phase_acc <= {PHASE_WIDTH{1'b0}};
  else if (sample_en)
    phase_acc <= phase_acc + phase_inc;
end

assign lut_addr = phase_acc[PHASE_WIDTH-1 -: LUT_ADDR_WIDTH];
```

If `sample_en` is not asserted every clock, the formula must use the true phase-update rate.

## Share Phase Across Waveforms
Sine uses a LUT, square can use the top phase bit, sawtooth can use high bits, and triangle can fold the phase by quadrant. Sharing phase keeps frequency consistent across modes. Sample mode selection on a defined clock boundary to avoid combinational glitches in the DAC path.

## Version the LUT Generator
Store the MATLAB or Python generator next to the ROM file. Fix depth, address width, signedness, DC offset, amplitude, quantization rule, radix and ordering. A `.mif` without its generation contract is not reproducible.

## Send ADC Data with a Valid Signal
The ADC interface, statistics and display run at different effective rates. Minimum, maximum and average must update only for valid samples:

```verilog
always @(posedge clk or negedge reset_n) begin
  if (!reset_n || clear) begin
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

This is an exponential average, not a fixed-window arithmetic mean. Documentation must state that distinction.

## Do Not Let the Display Control the Algorithm
Latch a measurement snapshot, then scan the display independently. A 74HC595 adds bit order, latch timing and active-level concerns. When output is blank or corrupted, first shift a fixed pattern before involving DDS and ADC data.

## Verify in Four Layers
### Phase Layer
Check constant increments, natural wrap and hold while disabled.

### Waveform Layer
Check sine addresses, square duty cycle, triangle folding and sawtooth monotonicity without ADC or display.

### Measurement Layer
Feed known sample sequences, including invalid cycles, and calculate exact expected statistics.

### System Layer
Only then connect mode switching, snapshots, reset and cross-module valid signals before full Quartus compilation.

## Read TimeQuest as a Separate Result
Compilation does not prove timing. Confirm that clocks are constrained, external assumptions are documented, critical paths have non-negative slack and no unexpected clock is unconstrained. Use synchronizers, handshakes or asynchronous FIFOs for clock-domain crossings. Prefer clock enables over casually generated slow clocks.

## Keep Acceptance Boundaries Explicit
Simulation supports digital functional claims. Quartus and TimeQuest support implementation and timing claims. DAC amplitude, ADC analog behavior, display brightness and physical pin levels require board evidence. Report “simulation passed,” “compiled,” “timing passed” and “hardware verified” as separate states.
