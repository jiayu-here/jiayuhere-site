---
title: Communication Theory Review Index
slug: communication-theory-index
description: An end-to-end review path from signal representation, sampling and modulation through channels, matched filters, BER and channel coding.
category: Engineering Courses
date: 2026-07
tags: [Communication Theory, Modulation, Channel, Detection]
---
## Start with the Complete Link
A digital link contains source, source coding, channel coding, modulation, channel, demodulation, decoding and information recovery. Place every concept in that chain and identify its input, output and problem. Pulse shaping controls bandwidth and ISI, coding adds corrective redundancy, and matched filtering improves sample-time SNR.

## Signal Classes and Metrics
Continuous/discrete refers to the independent variable, while analog/digital refers to value range. Digital symbols must ultimately become continuous-time waveforms for a physical channel.

Know energy, average power, peak-to-average ratio, correlation, PSD, bandwidth definitions, SNR, Es/N0, Eb/N0, symbol rate and spectral efficiency. For M-ary modulation, one symbol carries `log2(M)` bits and ideally `Rb = Rs·log2(M)`. Higher order improves spectral efficiency but generally requires more SNR.

## Spectrum, Bandwidth and Filtering
An LTI system performs convolution in time and multiplication in frequency. Sharp rectangular pulses have wide sidelobes, so practical links use pulse-shaping filters. Inspect phase, group delay and transients as well as magnitude response. For FFT measurements, retain sample rate, length, window and amplitude correction.

## Sampling, Quantization and PCM
For a signal band-limited to `fmax`, ideal reconstruction requires `fs > 2fmax`. Real systems reserve transition bands and add an analog anti-alias filter. Aliasing folds high-frequency content irreversibly into the baseband.

Quantization maps continuous amplitude to finite levels. Each added bit improves the ideal full-scale-sine quantization SNR by about 6 dB. PCM consists of sampling, quantization and coding, followed by decoding, hold and reconstruction filtering.

## Baseband Transmission and ISI
ISI occurs when channel and filter responses make adjacent pulses overlap at decision times. The first Nyquist criterion requires the total pulse to be zero at other symbol sampling instants. Practical links use raised-cosine or root-raised-cosine filters. More roll-off uses more bandwidth but often eases implementation and timing tolerance.

An eye diagram exposes ISI, noise and timing error. Greater opening means more decision margin, and the preferred sample is near the widest point.

## Analog Modulation
AM is simple but power-inefficient; DSB-SC suppresses the carrier and needs coherent detection; SSB saves bandwidth. FM and PM resist amplitude noise better but use more complex spectra and demodulators. Review time waveforms, spectral translation, detector blocks, bandwidth, power efficiency and noise behavior.

## Digital Passband Modulation
ASK uses amplitude, FSK frequency and PSK phase. BPSK carries one bit per symbol, QPSK carries two, and QAM varies both I and Q for higher spectral efficiency with tighter amplitude, phase and linearity requirements. Gray mapping limits common nearest-neighbor decisions to one bit error. Mapper, decision table, signed I/Q convention and bit order must match.

## Channels and Noise
AWGN is additive, spectrally white and Gaussian. Wireless links also include path loss, shadowing and multipath fading. Multipath can create frequency-selective amplitude and phase response.

```text
Power ratio: 10·log10(P2/P1)
Amplitude ratio: 20·log10(A2/A1)
```

When adding noise, account for actual signal power, bits per symbol, samples per symbol and real-versus-complex variance definitions.

## Matched Filtering and Detection
Under AWGN, a matched filter maximizes SNR at a chosen sample time. Correlation and matched-filter receivers project the observation onto candidate basis functions. For equal priors and energies in AWGN, maximum likelihood often becomes minimum Euclidean distance; MAP additionally uses prior probabilities.

## Synchronization
Receivers need carrier, symbol-timing and frame synchronization. Frequency offset continuously rotates a constellation, fixed phase offset rotates it once, and timing error moves samples away from the eye center. Preambles support frame, frequency and channel estimation. Loop filters balance noise rejection and tracking speed.

For constellation diagnosis, inspect DC offset, I/Q gain mismatch, quadrature error, frequency offset, fixed phase, timing error and noise in a deliberate order.

## BER and Simulation
BER is erroneous bits divided by compared bits; SER uses symbols. A reliable simulation:
1. Generate enough independent bits.
2. Apply one fixed mapper.
3. Upsample and pulse-shape.
4. Add noise or fading by a precise definition.
5. Matched-filter and compensate group delay.
6. Sample and decide at the correct instants.
7. Align source and decisions before counting.
8. Sweep Eb/N0 and compare simulation with theory.

At high SNR, rare errors require many bits. Observing zero errors only bounds BER for that sample count; it does not prove true BER is zero.

## Channel Coding Basics
Coding adds controlled redundancy. Block codes map fixed information blocks to longer codewords; convolutional codes depend on current input and encoder state. Minimum Hamming distance `dmin` typically detects up to `dmin-1` errors and corrects `floor((dmin-1)/2)`. Soft decisions retain confidence and usually outperform hard decisions, at a cost in bandwidth, delay, storage and computation.

## Review Checklist
- Draw and explain the complete digital link.
- Distinguish bit rate, symbol rate and sample rate.
- Explain irreversible aliasing and raised-cosine roll-off.
- Draw BPSK, QPSK and QAM constellations with Gray mapping.
- Relate SNR, Es/N0 and Eb/N0 under stated assumptions.
- Explain why matched filtering improves sample-time SNR.
- Diagnose rotation, spreading and stretching of a constellation.
- Build a BER simulation with correct noise variance and alignment.
- State coding correction capability, benefit and cost.
