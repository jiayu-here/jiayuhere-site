---
title: RRT and RRT* Beyond Animation: Collision Checks, Rewiring and Repeatable Tests
slug: rrt-rrtstar-reliable-planner
description: Turn a planning animation into a testable planner through step size, edge collision, goal connection and correct RRT* rewiring.
category: Algorithms and Python
date: 2026-07-14
tags: [Python, RRT, RRT Star, Collision, Path Planning]
---
## Drawing a Line Is Not Enough
An RRT animation can look successful while an edge crosses an obstacle or the final goal connection is unsafe. A reliable planner defines workspace bounds, robot size, collision model, termination and an explicit failure result, then makes randomness reproducible.

## Basic Extension Sequence
1. Sample within the map.
2. Find the nearest tree node.
3. Steer toward the sample by at most one step.
4. Check both the new node and the entire edge.
5. Add the node with a parent when safe.
6. Validate a goal connection or continue.

Goal bias accelerates some searches, but too much bias can reduce exploration around complex obstacles.

## Step Size Changes More Than Speed
Large steps grow quickly but miss narrow passages and create more rejected edges. Small steps need more nodes and distance calculations. Choose the value from map scale, obstacle spacing and robot radius.

```python
def steer(source, target, step_size):
    dx = target[0] - source[0]
    dy = target[1] - source[1]
    length = math.hypot(dx, dy)
    if length == 0:
        return source
    scale = min(1.0, step_size / length)
    return source[0] + dx * scale, source[1] + dy * scale
```

## Check the Entire Edge
Endpoint-only checks miss segments crossing obstacles. For a circle, compare radius plus robot clearance against the shortest center-to-segment distance:

```python
def distance_point_to_segment(point, a, b):
    ax, ay = a
    bx, by = b
    px, py = point
    dx, dy = bx - ax, by - ay
    if dx == 0 and dy == 0:
        return math.hypot(px - ax, py - ay)
    t = ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)
    t = min(1.0, max(0.0, t))
    closest_x = ax + t * dx
    closest_y = ay + t * dy
    return math.hypot(px - closest_x, py - closest_y)
```

Obstacle inflation converts robot radius into point-planner geometry for circles, rectangles and polygons.

## Validate the Final Goal Edge
Entering the goal radius does not prove the last segment is clear. Check the exact connection separately. Success should return a path or node chain, while exhausted iterations should return a distinct no-solution state.

## RRT* Uses Neighborhoods Twice
Before insertion, RRT* chooses the collision-free neighbor with the lowest cumulative start-to-new-node cost. After insertion it tries to rewire neighbors through the new node.

```python
best_parent = nearest
best_cost = nearest.cost + distance(nearest.point, new_point)
for node in near_nodes:
    candidate_cost = node.cost + distance(node.point, new_point)
    if candidate_cost < best_cost and collision_free(node.point, new_point):
        best_parent = node
        best_cost = candidate_cost
```

## Rewiring Must Update the Subtree
Changing one node's parent and cost without updating descendants corrupts every later cost comparison. Track children, detach from the old parent and propagate the new cumulative cost through the complete subtree.

## Separate Path Recovery from Smoothing
First follow parents from goal to start to recover a valid path. Smoothing may then skip intermediate points only when the exact same collision checker approves each shortcut. It must not change the clearance definition.

## Make Random Tests Stable
Use fixed seeds on an empty map, a single obstacle, a narrow passage, a sealed goal and invalid start/goal cases. GUI and CLI must call the same planner core; visualization only displays the tree and result.

## Report Distributions, Not One Run
Compare success rate, node count, planning time and path-length distributions over the same seed set. RRT and RRT* comparisons also need identical maps, steps and collision rules.

## State the Engineering Boundary
A collision-free path in a static 2D geometry model does not prove a real vehicle can execute it. Robotics adds kinematic constraints, turning radius, dynamic obstacles, localization error and trajectory tracking. The current planner's claim should remain limited to its stated model.
