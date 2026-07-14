---
title: Engineering Mathematics Map: Complex Numbers, Transforms and Probability
slug: engineering-math-map
description: A dependency-based map of complex numbers, calculus, linear algebra, transforms and probability, with their uses in communications and signal processing.
category: Mathematics
date: 2026-07
tags: [Complex Numbers, Fourier Transform, Probability, Linear Algebra]
---
## Learning Goal
Engineering mathematics is about selecting the right tool for a real problem. Complex numbers describe amplitude and phase, calculus describes continuous change, transforms reveal systems and spectra, and probability describes noise and uncertainty.

A useful sequence is complex numbers and trigonometry, calculus, linear algebra, Fourier analysis, Laplace and Z transforms, probability and random processes. For every concept, be able to state its meaning, assumptions, engineering use and a way to verify it numerically.

## Complex Numbers, Euler's Formula and Phasors
Write `z = a + jb` as two orthogonal components, or `z = r·e^(jθ)` as magnitude and phase.

```text
e^(jθ) = cos(θ) + j·sin(θ)
cos(θ) = [e^(jθ) + e^(-jθ)] / 2
sin(θ) = [e^(jθ) - e^(-jθ)] / (2j)
```

Phasors turn sinusoidal circuit differential equations into algebra. In digital communications, the real and imaginary parts are I and Q. `z·z* = |z|²` measures squared magnitude, while multiplication by `e^(jφ)` rotates phase. Carrier phase correction is the inverse rotation.

## Calculus and Continuous-Time Signals
Derivatives represent change and integrals represent accumulation. Capacitors and inductors use differential relations; signal energy uses `E = ∫|x(t)|²dt`. Always track continuity, integration bounds, initial conditions, convergence and physical units.

Convolution describes the output of a linear time-invariant system:

```text
y(t) = ∫ x(τ)h(t-τ)dτ
y[n] = Σ x[k]h[n-k]
```

Each input contribution excites the impulse response, and all responses add to the output.

## Linear Algebra and Signal Space
A vector can be a discrete signal, feature set or multi-antenna sample. A matrix describes a linear relation between several inputs and outputs. Core ideas are norm, inner product, angle, orthogonality, rank, eigenvalues, projection, least squares and conditioning.

Matched filters and correlation receivers project the received waveform onto known basis functions. Least squares estimates parameters from noisy data. In `y = Hx + n`, the rank of `H` limits independent streams, while poor conditioning amplifies noise during inversion.

## Fourier Series and Fourier Transform
Fourier analysis decomposes a signal into sinusoidal or complex-exponential components. Time and frequency domains are two views of the same data: time emphasizes transients and delays, while frequency emphasizes bandwidth, filters, harmonics and noise.

Important properties:
- Time shift creates linear phase.
- Time convolution becomes frequency multiplication.
- Time multiplication becomes frequency convolution.
- Greater time concentration usually broadens the spectrum.
- Real signals have conjugate-symmetric spectra.

For an FFT, record sample rate, count, resolution and window. `Δf = fs / N`. Non-bin-centered tones leak into neighboring bins; windows reduce sidelobes but alter main-lobe width and amplitude estimates.

## Laplace and Z Transforms
Laplace analysis adds exponential growth or decay and is useful for continuous-system stability and transients. Pole location determines stability, while zeros suppress parts of the response.

The Z transform is the discrete-time counterpart. Difference equations become transfer functions for digital filter analysis. A causal discrete system is typically stable when its poles lie inside the unit circle. Always connect region of convergence, pole-zero position, causality, stability and initial conditions back to the original equation.

## Probability Foundations
Probability models random bits, thermal noise, fading and error events. Expectation is a long-run average and variance measures spread. Uncorrelated variables are not generally independent, although jointly Gaussian uncorrelated variables are independent.

Gaussian models arise because many small independent effects add together. Q-functions express Gaussian tail probabilities and appear in theoretical BER formulas. Bayes' rule updates a prior after an observation:

```text
P(A|B) = P(B|A)P(A) / P(B)
```

Maximum likelihood chooses the symbol most likely to produce the observation; maximum a posteriori also incorporates prior symbol probability.

## Random Processes and Power Spectral Density
A random process is a collection of possible waveforms. Stationarity means statistics do not depend on absolute time; ergodicity lets one sufficiently long record estimate ensemble statistics. Autocorrelation measures similarity to delayed self, and power spectral density is its Fourier transform.

Ideal white noise has constant PSD and uncorrelated samples. Real systems are bandwidth-limited, so filtering shapes noise and output power depends on spectral density and equivalent noise bandwidth.

## An End-to-End Analysis Path
For noisy QPSK reception:
1. Use complex values for I/Q and carrier phase.
2. Use distributions for random bits and Gaussian noise.
3. Use convolution for transmit, channel and receive filters.
4. Use Fourier analysis for bandwidth and response.
5. Use inner products or correlation for detection.
6. Estimate simulated BER statistically and compare it with theory.

## Review Checklist
- Convert a sine wave to complex-exponential form and explain magnitude and phase.
- Explain convolution as the output of an LTI system.
- Calculate FFT resolution from sample rate and length.
- Judge continuous or discrete stability from pole location.
- Distinguish expectation, variance, correlation and independence.
- Explain the autocorrelation–PSD relationship.
- Connect projection and least squares to matched filtering and detection.
- Split a communications simulation into deterministic computation and random statistics.
