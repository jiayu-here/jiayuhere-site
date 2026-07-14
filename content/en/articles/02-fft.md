---
title: Five Decisions to Make Before Designing a Fixed-Point FPGA FFT
slug: fpga-fixed-point-fft-checklist
description: A design checklist covering width, scaling, twiddle factors, data order and streaming timing for fixed-point FFTs.
category: Digital Signal Processing
date: 2026-07-12
tags: [FFT, Fixed Point, FPGA, DSP]
---
## Start from System Requirements
Width and architecture depend on the required FFT length, runtime configurability, sample interval, latency, input organization, output order and the resource that matters most. Quantization error, overflow probability and dynamic range must also be stated. Resource counts are meaningless without an interface and throughput target.

## Document Every Q Format
For a signed 16-bit value with 14 fractional bits:

```text
x_real = x_int / 2^14
```

Inputs, twiddles, products and outputs may use different formats. Every port should state total width, fractional width and signedness so that a later truncation still has a known binary-point position.

## Butterfly Addition Creates Growth
A radix-2 addition can double magnitude and needs one extra worst-case bit per stage. The main strategies are:

- Shift right at every stage for simple, predictable headroom.
- Scale selected stages to balance range and error.
- Use block floating point with a frame exponent.
- Retain all growth bits and round or saturate once at the end.

Whichever rule is used must also exist in the software model. An unexplained RTL shift makes output amplitude impossible to interpret.

## Derive Complex-Multiply Widths
For `(a + jb)(c + jd)`, the real output is `ac - bd` and the imaginary output is `ad + bc`. W-bit inputs generally create about 2W-bit products and another growth bit for the sum:

```verilog
wire signed [2*W-1:0] ac = a * c;
wire signed [2*W-1:0] bd = b * d;
wire signed [2*W:0] real_full = ac - bd;
```

Retain the full product before applying the target Q format. Taking high bits is truncation and creates biased error; rounding mode must be chosen deliberately and mirrored in the reference model.

## Make Twiddle Tables Reproducible
The generation script should fix FFT size, width, fractional bits, rounding and output format, then be versioned with the ROM file. Check `+1` and `-1`: two's-complement fixed point often represents `-1` exactly but not positive `+1`, so the generator must clamp rather than wrap.

## Data Order Determines Address Control
DIT, DIF and pipeline variants may use natural or bit-reversed input/output. Reversing the bits of index `3'b011`, for example, gives `3'b110`. If software plots natural order while RTL emits bit-reversed order, peaks appear at the wrong bins.

The top-level contract must identify the first output bin, frame markers, any extra samples and whether reorder RAM is present.

## Stream Data and State Together
Real, imaginary, `valid`, start-of-frame, end-of-frame and any scale exponent need identical pipeline delay. A valid-only interface normally requires fixed-rate input; a ready/valid interface must hold data and state stable during backpressure.

## Overflow, Rounding and Saturation Are Different
Overflow means the exact result exceeds the width. Rounding determines how removed low bits are approximated. Saturation clamps out-of-range values instead of wrapping. Instrument each stage for add growth, product error, saturation count and accumulated scaling so that the first failing stage can be found.

## The Reference Model Must Be Fixed-Point
Keep three results:

1. Double-precision FFT as the mathematical reference.
2. Stage-by-stage software fixed-point FFT as the RTL behavioral reference.
3. RTL simulation output.

If the fixed model is already too far from floating point, revise the numeric plan. If only RTL differs, inspect widths, addresses and timing.

## Use Diagnostic Test Vectors
- Impulse: confirms order and overall scale.
- Integer-bin sine: confirms bin location, mirror, magnitude and leakage behavior.
- Two tones: tests simultaneous peaks and dynamic range.
- Full-scale and alternating extremes: stress overflow and saturation.
- Random complex samples: support maximum-error and mean-square-error statistics.

## Check Timing After Structure Stabilizes
DSP blocks, long adders and address logic may become critical. Review DSP, RAM, registers and worst timing slack. Added pipeline registers require matching delay in valid and frame-control paths.

## Acceptance Checklist
- Q formats are recorded for inputs, twiddles, intermediate stages and outputs.
- Scaling, rounding, truncation and saturation agree in software and RTL.
- Natural or bit-reversed order is explicit.
- Impulse, tone, two-tone, full-scale and random vectors agree.
- Data and control delays match exactly.
- Resource and timing reports are checked separately from functional simulation.
