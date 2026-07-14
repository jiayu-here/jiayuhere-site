---
title: Python RRT and RRT* Path Planning Demo
slug: rrt-path-planning
description: A standard-library-only Python project for 2D random-tree planning, obstacle collision checks, GUI animation and path export.
category: Algorithms
status: Completed
date: 2026-07
tags: [Python, RRT, RRT Star, Tkinter, Path Planning]
repository: https://github.com/jiayu-here/rrt-path-planning
---
## Project Overview
This 2D RRT/RRT* planner uses only the Python standard library. It offers both a Tkinter animation and a headless CLI, reads JSON maps, handles multiple obstacle types, exports paths and includes unit tests.

## Project Goals
- Find feasible paths quickly with basic RRT.
- Optimize parent selection and neighborhood rewiring with RRT*.
- Support circles, rectangles, polygons and a robot clearance radius.
- Provide pause, single-step, random-seed selection and export controls.

## Technology and Environment
Python dataclasses, random sampling trees, computational geometry, segment collision tests, RRT* rewiring, Tkinter, JSON, CSV and `unittest`. `python app.py` starts the GUI; `python app.py --headless --algorithm rrt_star --export` runs without a display.

## System Architecture
`rrt.py` owns planning, obstacles and geometry. `map_io.py` handles JSON input and CSV/JSON export. `app.py` implements GUI, CLI arguments and animation. The result retains both original and simplified paths.

```architecture
JSON map and parameters -> Geometry and collision checks -> RRT or RRT* -> Raw path -> Simplification -> GUI and export
GUI or CLI -> app.py -> rrt.py planner -> map_io.py export
```

## Functional Modules
- Basic RRT and RRT*.
- Goal-biased sampling, step size, goal radius and iteration limits.
- Circle, axis-aligned rectangle and polygon collision checks.
- Obstacle inflation for robot clearance.
- Default, narrow-passage and impossible maps.
- Animation, pause, stepping, speed control and export.

## Implementation
1. Define points, nodes, results and three obstacle types.
2. Implement sampling, nearest-node search, fixed-step steering and edge collisions.
3. Recover paths through parent pointers and simplify them visibly.
4. Add neighborhood parent selection and rewiring for RRT*.
5. Connect JSON maps, Tkinter and export.
6. Test normal, narrow, impossible and invalid inputs.

## Key Code
A circle collision uses the shortest distance from its center to a finite path segment, including robot clearance:

```python
return distance_point_to_segment((self.x, self.y), a, b) <= self.radius + clearance
```

The projection ratio is clamped to `[0, 1]`, ensuring the closest point lies on the finite segment rather than the infinite line.

## Debugging and Verification
Fixed seeds reproduce individual plans. The default map verifies success, the narrow passage exposes step-size and clearance effects, and a closed-wall map verifies the no-solution branch. GUI and headless modes consume the same planner result.

## Problems and Solutions
Random runs are difficult to reproduce; checking only nodes misses edges crossing obstacles; RRT* rewiring changes subtree costs; and robot radius complicates geometry. Independent seeds, collision checks on every edge, cumulative-cost updates after rewiring and obstacle inflation make the behavior testable.

## Current Result
The project runs animated or headless RRT/RRT*, reads JSON maps and exports CSV/JSON paths. Tests cover default, narrow and impossible maps, export and invalid starts.

## Summary
Planning, computational geometry, visualization and testing are separated cleanly. This is an educational desktop planner; it does not yet include robot localization, motion constraints or dynamic obstacles.

## GitHub Repository
[Open rrt-path-planning](https://github.com/jiayu-here/rrt-path-planning)
