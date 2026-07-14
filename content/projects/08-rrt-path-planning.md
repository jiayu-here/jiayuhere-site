---
title: Python RRT 与 RRT* 路径规划演示
slug: rrt-path-planning
description: 纯 Python 标准库实现的二维随机树规划、障碍物碰撞检测、GUI 演示和路径导出工程。
category: 算法
status: 已完成
date: 2026-07
tags: [Python, RRT, RRT Star, Tkinter, Path Planning]
repository: https://github.com/jiayu-here/rrt-path-planning
---
## 项目简介
这是一个纯 Python 标准库实现的二维 RRT / RRT* 路径规划工程。项目同时提供 Tkinter 动画界面和无界面命令行模式，可读取 JSON 地图、处理多种障碍物、导出路径并运行单元测试。

## 项目目标
- 实现基础 RRT 的快速可行路径搜索。
- 实现 RRT* 的父节点优化和邻域重连。
- 支持圆形、矩形、多边形和机器人安全半径。
- 提供可暂停、单步、换随机种子和导出的可视化界面。

## 使用技术
Python、数据类、随机采样树、计算几何、线段碰撞检测、RRT* 重连、Tkinter、JSON、CSV 和 `unittest`。

## 硬件环境
不依赖专用硬件。普通电脑即可运行；图形模式需要桌面环境，命令行模式可在无界面环境执行。

## 软件环境
- Python 3，项目不要求第三方包。
- `python app.py` 启动 GUI。
- `python app.py --headless --algorithm rrt_star --export` 执行无界面规划。
- `python -m unittest discover -s tests -v` 运行测试。

## 系统架构
`rrt.py` 只负责规划器、障碍物和几何计算；`map_io.py` 负责 JSON 读取和 CSV/JSON 导出；`app.py` 负责 GUI、命令行参数和动画播放。算法输出同时保留原始路径与简化路径。

```architecture
JSON 地图与参数 -> 几何和碰撞检测 -> RRT 或 RRT* -> 原始路径 -> 路径简化 -> GUI 动画与结果导出
GUI 和命令行 -> app.py -> rrt.py 规划器 -> map_io.py 导出
```

## 功能模块
- 基础 RRT 和 RRT*。
- 目标偏置采样、步长、终点半径与最大迭代参数。
- 圆、轴对齐矩形和多边形碰撞检测。
- 机器人半径对应的障碍物膨胀。
- 默认、窄通道和无解地图。
- GUI 动画、暂停、单步、速度和路径导出。

## 实现步骤
1. 定义点、树节点、规划结果和三类障碍物。
2. 实现采样、最近节点、定步长扩展和边碰撞检测。
3. 通过 parent 指针回溯路径并进行可视简化。
4. 为 RRT* 加入邻域选父和重连。
5. 接入 JSON 地图、Tkinter 动画和导出。
6. 为正常、窄通道、无解和非法输入编写测试。

## 关键代码
圆形障碍物通过“圆心到路径线段的最短距离”判断碰撞，并把机器人半径作为额外间隙：

```python
return distance_point_to_segment((self.x, self.y), a, b) <= self.radius + clearance
```

## 调试过程
使用固定随机种子复现规划过程；先在默认地图验证成功路径，再使用窄通道观察步长与安全半径影响，最后用封闭墙地图检查无解分支。GUI 与无界面模式使用同一规划器结果。

## 遇到的问题
- 随机算法结果不固定，问题难以复现。
- 只检查节点会漏掉路径线段穿越障碍物。
- RRT* 重连后需要同步维护子树代价。
- 多边形和机器人半径使碰撞判断更复杂。

## 解决方案
为规划器提供独立随机种子；所有扩展边执行线段碰撞检测；RRT* 保存累计 cost 并在重连后刷新；通过障碍物膨胀统一处理机器人安全距离。

## 最终效果
工程可运行 RRT/RRT* 动画或无界面规划，支持 JSON 地图和路径 CSV/JSON 导出。测试目录覆盖默认地图、窄通道、无解地图、导出和非法起点。

## 项目总结
项目把路径规划算法、计算几何、可视化和可测试接口分层实现。它适合算法教学与桌面演示，尚未接入真实机器人定位、运动学或动态障碍物。

## GitHub 仓库链接
[访问 rrt-path-planning](https://github.com/jiayu-here/rrt-path-planning)
