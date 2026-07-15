---
title: Modulation Recognition: Low-SNR Instability
slug: modulation-recognition-low-snr-instability
description: Uses normalization, feature checks and confusion matrices to explain classification instability at low SNR.
date: 2026-07
projectSlug: digital-modulation-recognition-matlab
---

**Project:** MATLAB Digital Modulation Recognition Simulation

**Symptom:** Phase and frequency-difference features became unstable at low SNR, while class amplitude scales biased decisions.

**Hypothesis:** The model could be relying too heavily on energy, with individual features becoming unreliable under noise.

**Investigation:** Inspected waveforms, spectra, constellations, feature NaN values and ranges, compared low- and high-SNR confusion matrices, and ruled out data leakage.

**Root cause:** Unequal scale and noise-sensitive individual features.

**Fix:** Normalized each frame and combined amplitude, phase and higher-order statistics in an ECOC RBF-SVM.

**Lesson:** Accuracy requires context from normalization, feature stability and confusion matrices rather than one aggregate score.
