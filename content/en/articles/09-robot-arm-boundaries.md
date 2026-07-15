---
title: From Pixel Coordinates to a Safe Grasp: Five Boundaries in a Vision-Guided Arm
slug: vision-robot-arm-coordinate-safety-boundaries
description: Uses the STM32 vision-arm project to explain why color detection, four-point calibration, inverse kinematics, robust serial transport and hardware safety need separate verification.
category: Embedded Systems and Computer Vision
date: 2026-07-15
tags: [OpenCV, STM32, Homography, Inverse Kinematics, UART]
---

## Detecting an Object Is Only the Beginning

A red object in a camera frame does not mean the arm knows how to grasp it safely. The full path crosses at least five boundaries: colored pixels to a target center, pixels to work-plane coordinates, Cartesian coordinates to joint angles, PC commands to firmware state, and software results to physical motion.

Each boundary has independent failure modes. A final animation cannot reveal whether an error comes from lighting, calibration order, link dimensions, serial data or servo installation.

## Boundary One: Color Detection Produces Candidates

A fixed-color sorter does not always need a trained neural network. HSV segmentation is explainable, low latency and reproducible, but it must handle lighting, reflections and red hue wrapping around zero.

The project uses two hue ranges for red and one each for blue and yellow. Morphological opening removes isolated noise, closing fills small holes, contour area rejects tiny regions, and image moments produce the center.

```python
hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
```

A detection is still only a candidate. Area thresholds, de-duplication, workspace checks and queue limits must run before a colored region becomes a pick task.

## Boundary Two: Pixels Are Not Millimeters

Image center `(320, 240)` describes a location in a frame. The arm needs millimeters relative to its base. With a fixed overhead camera and one fixed table plane, a homography maps planar pixels into arm work coordinates.

At least four non-collinear point pairs are required and their order must match. The mapping compensates translation, rotation, scale and moderate perspective, but it does not recover depth. Pick height must come from task configuration or another sensor.

```python
matrix, _ = cv2.findHomography(pixel_points, robot_points, cv2.RANSAC)
robot_xy = cv2.perspectiveTransform(pixel_xy, matrix)
```

Calibration verification should use independent interior and edge points, record millimeter error and repeat whenever the camera, focus or work-plane height changes.

## Boundary Three: Reachable Coordinates May Still Be Unsafe

Inverse kinematics converts `(x, y, z)` into base, shoulder, elbow and wrist angles. A conservative workspace check rejects clearly dangerous input first. The solver must then verify that a geometric solution exists and every servo angle stays within its allowed range.

```c
if (!kinematics_in_workspace(x_mm, y_mm, z_mm)) {
    return false;
}
if (cosine_elbow < -1.0f || cosine_elbow > 1.0f) {
    return false;
}
```

Model link lengths, tool offset and zero positions must match the physical arm. Passing an equation test without hardware only proves consistency under the configured parameters, not real end-effector accuracy.

## Boundary Four: A Serial Write Is Not Reliable Delivery

One serial read may contain part of a frame, several frames, prefix noise or corrupted bytes. A robust protocol needs a start marker, version, type, sequence, bounded length, payload and checksum. Its parser must discard bad data and resynchronize.

```text
AA 55 | version | type | sequence | length | payload | CRC16
```

Sequence numbers match commands with responses, payload lengths need a hard limit, and coordinates need range checks before encoding. While the arm is moving, a heartbeat or valid-frame timeout should force a safe state when communications stop.

## Boundary Five: A Software Loop Is Not Hardware Acceptance

The simulator verifies detection, queueing, protocol, controller state and failure paths. Automated tests verify calibration, kinematics and framing. Cross-builds prove that firmware produces ELF, HEX, BIN and MAP artifacts. None of these prove servo power, link assembly, E-stop behavior, limits or grasp force.

Hardware acceptance should proceed in order:

1. Disconnect servo horns and verify the controller, supplies, common ground and E-stop input.
2. Test direction, neutral point and safe range for one servo at a time.
3. Measure the real links and update the kinematic parameters.
4. Fix the camera and repeat four-point calibration.
5. Measure unloaded and gripping FSR values and choose a threshold.
6. Verify manual, then semi-automatic, and only then fully automatic sorting.

## Building Traceable Evidence

Each boundary needs its own evidence: color-test frames, calibration points and errors, kinematic inputs and outputs, protocol vectors, firmware size reports, E-stop records and grasp statistics. One artifact cannot substitute for another.

The current project retains 14 PC tests, a GUI smoke test, firmware cross-build outputs and resource reports. Physical-arm results remain explicitly pending.

## Summary

The engineering value of a vision-guided arm comes from making each conversion boundary inspectable, rejectable and recoverable. A grasp becomes credible only after color, coordinates, motion, communications and safety have each been verified.

[View the STM32 Vision-Guided Robotic Arm Sorter](../../projects/stm32-vision-robot-arm-sorter/)
