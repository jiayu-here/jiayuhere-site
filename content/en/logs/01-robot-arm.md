---
title: Vision-Guided Arm: A Passing Simulator Is Not Physical Completion
slug: robot-arm-simulation-is-not-physical-completion
description: Separates the verified software loop and firmware build from acceptance work that requires real hardware.
date: 2026-07
projectSlug: stm32-vision-robot-arm-sorter
---

**Project:** STM32 Vision-Guided Robotic Arm Sorter

**Symptom:** Detection, queueing, protocol, controller simulation and firmware builds pass, but no physical arm was available to measure real grasp accuracy.

**Hypothesis:** Software-loop evidence verifies algorithms and interfaces but cannot replace servo-offset, link-dimension, camera, FSR and electrical acceptance.

**Investigation:** Ran 14 automated tests, a GUI smoke test and the firmware cross-build; checked ELF/HEX/BIN/MAP plus Flash/RAM reports; then separated every parameter and H01-H10 check that requires hardware.

**Root cause:** The software model uses configured parameters, while geometric error, supply capacity, sensor thresholds and assembly variation exist only on the real mechanism.

**Fix:** Report status as software verified, firmware builds, hardware pending; provide staged acceptance from separate power and one joint through four-point calibration, FSR calibration and automatic sorting.

**Lesson:** When hardware is unavailable, retain reproducible software evidence and state the physical acceptance conditions instead of hiding the boundary.
