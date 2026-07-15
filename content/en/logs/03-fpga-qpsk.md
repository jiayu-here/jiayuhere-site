---
title: FPGA QPSK: Correct Constellation but Growing BER
slug: fpga-qpsk-constellation-correct-ber-growing
description: Uses cycle-by-cycle comparison to locate pipeline misalignment between reference bits and decisions.
date: 2026-07
projectSlug: fpga-qpsk-baseband-system
---

**Project:** FPGA QPSK Baseband Link and Visualization System

**Symptom:** Constellation points were correct while the error counter continued to grow.

**Hypothesis:** After checking Gray mapping and phase decisions, attention shifted to pipeline alignment between transmitted reference bits and received decisions.

**Investigation:** Checked all rotations, compared transmitted reference and decision cycle by cycle, and inspected signed I/Q widths.

**Root cause:** Reference bits and decisions belonged to different pipeline cycles.

**Fix:** Added an equal reference delay, made signed widths explicit and sampled UART telemetry.

**Lesson:** A correct constellation does not verify BER alignment. ModelSim, Quartus and offline visualization pass; the board UART link still requires physical confirmation.
