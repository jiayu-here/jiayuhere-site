---
title: STM32 Vision-Guided Robotic Arm Sorter
slug: stm32-vision-robot-arm-sorter
description: A vision-guided sorter built with STM32F103, FreeRTOS, Python and OpenCV, including calibration, kinematics, a checked serial protocol, force feedback, simulation and automated tests.
category: Embedded Systems and Computer Vision
status: Software loop and firmware build verified
date: 2026-07
tags: [STM32, FreeRTOS, OpenCV, Inverse Kinematics, UART]
repository: https://github.com/jiayu-here/stm32-vision-robot-arm-sorter
---

## Project Overview

This is the public engineering edition of the robotic-arm project listed on the resume for 2023.05 - 2023.06. It combines STM32F103C8T6, FreeRTOS, Python and OpenCV. A camera detects red, blue and yellow objects, four-point hand-eye calibration maps image centers into the arm work plane, and a CRC16-protected serial protocol sends pick tasks to the controller.

The public repository was packaged in 2026.07 with a hardware-free simulator, automated tests, a reproducible firmware build, wiring instructions and calibration documentation. The software loop and firmware cross-build are verified. No physical arm was available during development, so servo offsets, real link dimensions, camera calibration, FSR thresholds, electrical protection and physical grasp accuracy still require hardware acceptance.

## Project Goals

- Convert color-target pixel positions into arm work-plane coordinates.
- Provide manual joint control, semi-automatic click-to-pick and fully automatic sorting.
- Share a checked and recoverable binary serial protocol between the PC and firmware.
- Fit multi-servo motion, sensing, communications and telemetry into STM32F103 resources.
- Verify the complete software flow through simulation when no hardware is connected.
- Keep software verification, firmware compilation and physical acceptance as separate claims.

## Verified Status

- The Python application and simulator pass 14 automated tests and a GUI smoke test.
- Red, blue and yellow HSV detection passes tests on generated simulator frames.
- The STM32F103 firmware cross-build produces ELF, HEX, BIN, MAP and size reports.
- The linker reports 34,580 / 65,536 B Flash and 10,136 / 20,480 B RAM.
- The physical arm, electrical system and real grasp accuracy remain unverified.

## Technology

Python, OpenCV, NumPy, Pillow, pyserial, C, STM32 HAL, FreeRTOS, UART, CRC16-CCITT, PWM, ADC, inverse kinematics, homography, CMake, Ninja and the ARM GNU Toolchain.

## Hardware Environment

- STM32F103C8T6 Blue Pill, ST-Link V2 and USB-to-TTL adapter.
- Five servos for base, shoulder, elbow, wrist and gripper.
- A separate regulated 5-6 V high-current servo supply with common ground.
- A USB camera fixed above the work plane.
- FSR pressure sensor, 10 kOhm divider, physical E-stop and optional limit switch.

## Software Environment

- Windows 10/11 and Python 3.11-3.13.
- OpenCV, NumPy, Pillow and pyserial for the PC application.
- CMake, Ninja and the ARM GNU Toolchain for the firmware build.
- STM32CubeProgrammer for SWD or UART flashing.
- STM32CubeMX for inspecting `robot_arm_f103.ioc`; CubeIDE is optional for browsing.

## System Architecture

The PC application owns vision, calibration, task scheduling and interaction. The STM32 firmware owns safety checks, kinematics, servo trajectories, force feedback and telemetry. A binary frame carrying version, sequence and CRC16 connects the two boundaries.

```architecture
USB camera -> OpenCV color detection -> Four-point calibration -> Queue and workspace checks -> CRC16 serial protocol
STM32F103 and FreeRTOS -> Inverse kinematics and smooth PWM -> Four-axis arm and gripper -> FSR confirmation -> Telemetry
```

## Functional Modules

- `vision.py`: HSV segmentation, morphology, contour filtering and target centers.
- `calibration.py`: four-point homography and pixel-to-millimeter conversion.
- `scheduler.py`, `controller.py`: de-duplication, nearest-first priority and a 20-item queue.
- `protocol.py`: frame encoding, CRC16 and recovery from splits, merged frames, noise and bad CRC.
- `kinematics.c`: workspace checks and analytic base, shoulder and elbow inverse kinematics.
- `app_tasks.c`: FreeRTOS communication, control, sensor and telemetry tasks.
- `robot_control.c`, `servo_control.c`: joint limits, smooth interpolation, five 50 Hz PWM channels and E-stop.
- `sensors.c`: FSR, limit input and optional voltage monitoring.

## Implementation Steps

1. Detect red, blue and yellow objects with HSV ranges and contour filtering.
2. Estimate a homography from at least four matching image and work-plane points.
3. De-duplicate targets, prioritize them and reject out-of-workspace tasks on the PC.
4. Send pick coordinates in sequenced CRC16-protected binary frames.
5. Re-check coordinates, solve inverse kinematics and generate smooth joint motion in firmware.
6. Confirm grasp force with the FSR, make up to two offset retries and report failures.
7. Retain evidence through simulation, automated tests, a GUI smoke test and firmware cross-build.

## Key Code

### Four-Point Calibration

`calibration.py` uses a 3x3 homography for one fixed work plane. It does not claim depth recovery:

```python
matrix, mask = cv2.findHomography(
    np.float32(pixel_points),
    np.float32(robot_points),
    cv2.RANSAC,
)
source = np.float32([[[pixel_x, pixel_y]]])
robot_xy = cv2.perspectiveTransform(source, matrix)[0, 0]
```

### Recoverable Serial Frames

Frames use `AA 55 | version | type | seq | length | payload | crc`. The incremental parser retains unread bytes and recovers from partial frames, multiple frames, prefix noise and CRC failures.

```python
body = struct.pack("<BBBH", VERSION, int(message_type), sequence, len(payload))
frame = b"\xAA\x55" + body + payload
frame += struct.pack("<H", crc16_ccitt(body + payload))
```

### Firmware Kinematics Boundary

Firmware checks a conservative workspace before calculating an analytic solution and validating servo ranges. Unreachable coordinates fail instead of producing unsafe angles.

```c
if (solution == NULL || !kinematics_in_workspace(x_mm, y_mm, z_mm)) {
    return false;
}
const float base = atan2f(y_mm, x_mm) * RAD_TO_DEG + 90.0f;
```

## Debugging and Verification

- Generated frames test all three colors, area filtering, centers and overlays.
- Protocol tests cover complete, split, merged, noisy, bad-CRC and oversized frames.
- Python and C kinematics are checked with valid, boundary and unreachable coordinates.
- The hardware-free simulator checks queueing, pick states, object removal and failure paths.
- The firmware cross-build verifies Flash/RAM use and ELF/HEX/BIN/MAP artifacts.

## Problems Encountered

- Image pixels cannot be used directly as millimeter arm coordinates.
- Serial reads naturally split, merge or contain noisy and corrupt frames.
- Mathematically computed angles may violate the actual workspace or joint limits.
- Servo current, E-stop behavior, limits and force thresholds cannot be proven by simulation alone.

## Solutions

Use a fixed camera and four-point homography; add version, sequence, length and CRC16 fields plus incremental resynchronization; check workspace and joint ranges on both sides; power servos separately and make E-stop, limits, FSR calibration and one-joint-at-a-time testing prerequisites for physical operation.

## Final Result

Without hardware, the repository can run simulated red, blue and yellow detection, task queueing, protocol transfer, controller state and result feedback. The firmware builds reproducibly and creates flashable artifacts. GitHub Actions repeats the Python tests and ARM firmware build on every change.

## Known Limits

The current result does not prove physical grasp accuracy. Hardware commissioning must measure real link dimensions, configure servo direction and zero offsets, perform four-point camera calibration, measure unloaded and gripping FSR values, and verify power, E-stop, limits, individual joints and automatic sorting in order.

## Project Summary

The main achievement is not one successful animation. It is the explicit separation of vision, coordinates, communications, motion, safety and verification. Software and build evidence establish part of the result, while the physical arm still requires real acceptance testing.

## GitHub Repository

[Open stm32-vision-robot-arm-sorter](https://github.com/jiayu-here/stm32-vision-robot-arm-sorter)
