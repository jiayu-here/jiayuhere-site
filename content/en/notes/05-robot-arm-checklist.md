---
title: Vision-Guided Arm Calibration, Communications and Hardware Acceptance Checklist
slug: vision-robot-arm-commissioning-checklist
description: A staged checklist covering power, vision, calibration, kinematics, serial transport, FreeRTOS and physical safety from simulation to commissioning.
category: Embedded Systems and Control
date: 2026-07-15
tags: [STM32, OpenCV, Calibration, FreeRTOS, Safety]
---

## Purpose

Use this checklist to keep “simulation runs,” “firmware builds” and “physical operation is safe” as separate results. Save data, screenshots, logs or measurements for every completed item.

## 1. Power and Wiring Preconditions

- Power servos from a separate regulated 5-6 V high-current supply.
- Never power servos from the STM32F103 5 V or 3.3 V pin.
- Join servo-supply, controller and USB-to-TTL grounds.
- Verify ST-Link SWDIO, SWCLK, GND and 3.3 V; keep BOOT0 at zero.
- Remove servo horns or mechanical load for the first powered checks where instructed.
- Verify that the physical E-stop halts motion in every operating state.
- Confirm limit-input polarity, idle level and disconnected behavior.
- Ensure the FSR divider cannot exceed the ADC input range.

## 2. Hardware-Free Software Acceptance

- The Python environment installs OpenCV, NumPy, Pillow and pyserial.
- The simulator shows red, blue and yellow objects and processes the queue.
- Manual, semi-automatic and fully automatic modes switch correctly.
- All 14 automated tests pass.
- The GUI smoke test starts and completes its basic interaction.
- CMake/Ninja and the ARM GNU Toolchain cross-build the firmware.
- ELF, HEX, BIN, MAP and size reports are generated.
- Flash and RAM stay within STM32F103C8T6 limits.

## 3. Vision Detection

- The camera is mechanically fixed and cannot change height, angle or focus during operation.
- Red uses two hue ranges so values near both zero and 179 are covered.
- S/V limits are checked under actual lighting for reflections and shadows.
- Opening removes small noise without erasing targets; closing does not merge neighbors.
- Minimum contour area matches the real object size.
- Every detection retains class, pixel center, area and bounding box.
- De-duplication prevents one object from entering the queue repeatedly.

## 4. Four-Point Calibration

- Select at least four non-collinear points on the work plane.
- Keep pixel and robot coordinate point order identical.
- Spread calibration points across the usable workspace.
- Validate and save the 3x3 homography matrix.
- Measure millimeter error at interior and edge points not used for fitting.
- Recalibrate after camera movement, focus changes or work-plane height changes.
- Treat homography as a planar mapping; configure grasp height separately.

## 5. Kinematics and Servo Parameters

- Measure upper arm, forearm, base height and tool offset on the real arm.
- Verify direction for base, shoulder, elbow, wrist and gripper individually.
- Record mechanical center, zero offset and safe range for every servo.
- Exclude base-collision and mechanical-limit regions from the workspace.
- Reject unreachable coordinates, missing geometric solutions and out-of-range angles.
- Keep interpolation speed and steps low enough to avoid impact.
- Do not run combined trajectories before each joint passes individually.

## 6. Serial Protocol

- PC and firmware share version, message types, field layout and byte order.
- Frames include `AA 55`, version, type, sequence, length, payload and CRC16.
- Payload length has a fixed maximum and coordinates are range-checked before encoding.
- Test complete, split, merged, noisy, bad-CRC and unknown-type input.
- The parser resynchronizes after discarding corrupt data.
- Command sequence numbers match ACK, STATUS or ERROR responses.
- A communications timeout forces a safe or E-stop state while the arm is moving.

## 7. FreeRTOS and Firmware

- Communication tasks parse frames outside the interrupt handler.
- The 20 ms control task uses a fixed period without cumulative drift.
- Sensor tasks monitor limits, FSR and optional voltage state.
- Telemetry reports status periodically so the PC can detect a live scheduler.
- Task stack sizes are interpreted in `StackType_t` units and high-water marks are recorded.
- Five PWM outputs run at 50 Hz with pulse limits matching the servos.
- An E-stop remains latched until an explicit safe reset procedure completes.

## 8. FSR Grasp Confirmation and Retry

- Measure unloaded, light-touch and stable-grip ADC values.
- Place the threshold between unloaded and reliable grip values with noise margin.
- Do not treat disconnected, shorted or invalid FSR readings as success.
- Limit offset retries to the configured count.
- Report an error instead of retrying forever.
- Read completed and failed pick counts through status frames.

## 9. Staged Physical Acceptance

1. Controller, serial link, LED and E-stop.
2. Direction, center and limits for one servo at a time.
3. Low-speed multi-joint motion and workspace boundaries.
4. Fixed camera and four-point calibration.
5. Manual joint control.
6. Semi-automatic click-to-pick.
7. FSR confirmation and failed-grasp retry.
8. Fully automatic color sorting.
9. Endurance, communications loss and E-stop recovery.

## 10. What to Record

- Hardware revision, firmware commit, PC commit and configuration version.
- Servo model, supply voltage, current capacity and grounding.
- Link dimensions, zero offsets, angle limits, homography and FSR threshold.
- Test scene, target count, successes, failure causes and E-stop results.
- Flash/RAM, task stack, serial error counts and longest continuous run.
- Failed checks, temporary workarounds and conditions for retest.

## Review Summary

Commission from power and one joint, then move to calibration, coordinated motion and automatic sorting. When a stage fails, return to the nearest verified boundary instead of changing vision thresholds, kinematic parameters and servo offsets at the same time.

[Related project: STM32 Vision-Guided Robotic Arm Sorter](../../projects/stm32-vision-robot-arm-sorter/)
