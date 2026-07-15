---
title: RRT: Safe Nodes with an Edge Through an Obstacle
slug: rrt-safe-node-unsafe-edge
description: Adds segment collision, robot radius and repeatable seeds to path-planning verification.
date: 2026-07
projectSlug: rrt-path-planning
---

**Project:** Python RRT and RRT* Path Planning Demonstration

**Symptom:** New nodes were outside obstacles, but their connecting edges crossed obstacles.

**Hypothesis:** Collision checking covered discrete endpoints but not the full extension edge.

**Investigation:** Reproduced with fixed seeds across default, narrow and sealed maps and compared GUI with headless output.

**Root cause:** Endpoint-only checks did not establish edge safety, and robot radius was missing.

**Fix:** Checked every segment, inflated obstacles for clearance and propagated subtree cost after RRT* rewiring.

**Lesson:** Planning tests need edge collision, impossible maps and repeatable seeds rather than one successful animation.
