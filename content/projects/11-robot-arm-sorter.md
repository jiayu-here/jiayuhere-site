---
title: STM32 视觉机械臂自动分拣系统
slug: stm32-vision-robot-arm-sorter
description: 基于 STM32F103、FreeRTOS、Python 与 OpenCV 的视觉分拣系统，覆盖标定、运动学、串口协议、压力反馈、仿真与自动测试。
category: 嵌入式与机器视觉
status: 软件闭环与固件编译已验证
date: 2026-07
tags: [STM32, FreeRTOS, OpenCV, Inverse Kinematics, UART]
repository: https://github.com/jiayu-here/stm32-vision-robot-arm-sorter
---

## 项目简介

这是简历中 2023.05 - 2023.06 机械臂项目的公开工程化版本。系统围绕 STM32F103C8T6、FreeRTOS、Python 和 OpenCV 构建，从摄像头识别红、蓝、黄目标，经四点手眼标定得到机械臂平面坐标，再通过带 CRC16 校验的串口协议下发抓取任务。

公开仓库于 2026.07 完成整理，加入了无硬件仿真器、自动测试、可复现固件构建、接线与标定文档。软件闭环和固件编译已经验证，但开发期间没有机械臂实物，因此舵机零偏、真实连杆尺寸、摄像头标定、FSR 阈值、电气保护和抓取精度仍需装机验收。

## 项目目标

- 完成颜色目标从像素坐标到机械臂工作平面坐标的转换。
- 支持手动关节控制、半自动点击抓取和全自动分拣。
- 让上位机与固件共享可校验、可恢复的二进制串口协议。
- 在 STM32F103 的资源范围内实现多舵机、传感、通信和遥测任务。
- 没有硬件时仍能通过仿真和测试验证完整软件流程。
- 明确区分软件验证、固件编译和实机验收三种完成状态。

## 已验证状态

- Python 上位机与仿真器通过 14 项自动测试和 GUI 冒烟测试。
- 红、蓝、黄 HSV 识别已在生成的仿真画面中验证。
- STM32F103 固件交叉编译成功，生成 ELF、HEX、BIN、MAP 和容量报告。
- 链接器报告 Flash 使用 34,580 / 65,536 B，RAM 使用 10,136 / 20,480 B。
- 实体机械臂、电源、舵机和真实抓取精度尚未验证。

## 使用技术

Python、OpenCV、NumPy、Pillow、pyserial、C、STM32 HAL、FreeRTOS、UART、CRC16-CCITT、PWM、ADC、逆运动学、Homography、CMake、Ninja 和 ARM GNU Toolchain。

## 硬件环境

- STM32F103C8T6 蓝板、ST-Link V2、USB 转 TTL。
- 底座、肩、肘、腕和夹爪 5 个舵机。
- 独立稳压 5-6 V 大电流舵机电源，控制板与舵机电源共地。
- 固定在工作平面上方的 USB 摄像头。
- FSR 压力传感器、10 kOhm 分压、电气急停和可选限位开关。

## 软件环境

- Windows 10/11 与 Python 3.11-3.13。
- OpenCV、NumPy、Pillow 和 pyserial 上位机依赖。
- CMake、Ninja 与 ARM GNU Toolchain 固件构建链。
- STM32CubeProgrammer 用于 SWD 或 UART 烧录。
- STM32CubeMX 用于检查 `robot_arm_f103.ioc`，CubeIDE 为可选浏览环境。

## 系统架构

上位机负责视觉识别、标定、任务队列和交互；STM32 固件负责安全检查、运动学、舵机轨迹、压力反馈和遥测。两个边界通过带版本、序号和 CRC16 的二进制帧连接。

```architecture
USB 摄像头 -> OpenCV 颜色识别 -> 四点手眼标定 -> 任务队列与工作空间检查 -> CRC16 串口协议
STM32F103 与 FreeRTOS -> 逆运动学与平滑 PWM -> 四轴机械臂与夹爪 -> FSR 抓取确认 -> 状态遥测
```

## 功能模块

- `vision.py`：HSV 分割、形态学处理、轮廓过滤和目标中心提取。
- `calibration.py`：四点 Homography 标定与像素到毫米坐标转换。
- `scheduler.py`、`controller.py`：目标去重、最近目标优先和最多 20 项任务队列。
- `protocol.py`：帧编码、CRC16、拆包、粘包、噪声和坏帧恢复。
- `kinematics.c`：工作空间检查和底座、肩、肘的解析逆运动学。
- `app_tasks.c`：通信、控制、传感器和遥测四个 FreeRTOS 任务。
- `robot_control.c`、`servo_control.c`：关节限位、平滑插值、5 路 50 Hz PWM 与急停。
- `sensors.c`：FSR、限位和可选电压监测。

## 实现步骤

1. 使用 HSV 阈值检测红、蓝、黄目标并过滤小轮廓。
2. 用至少四组像素点与工作平面坐标估计 Homography。
3. 在上位机执行目标去重、优先级排序和工作空间预检查。
4. 使用带序号和 CRC16 的二进制帧发送抓取坐标。
5. 固件检查坐标、求解逆运动学并生成平滑关节轨迹。
6. 使用 FSR 确认夹持，失败时执行两次偏移重试并上报结果。
7. 通过仿真、自动测试、GUI 冒烟测试和固件交叉编译保留验证证据。

## 关键代码

### 四点标定与坐标转换

`calibration.py` 用 3x3 Homography 描述固定桌面平面，不把二维标定误写成深度估计：

```python
matrix, mask = cv2.findHomography(
    np.float32(pixel_points),
    np.float32(robot_points),
    cv2.RANSAC,
)
source = np.float32([[[pixel_x, pixel_y]]])
robot_xy = cv2.perspectiveTransform(source, matrix)[0, 0]
```

### 可恢复的串口帧

帧格式为 `AA 55 | version | type | seq | length | payload | crc`。增量解析器保存未消费字节，能够处理一次读取不足一帧、一次读取多帧、前缀噪声和 CRC 错误。

```python
body = struct.pack("<BBBH", VERSION, int(message_type), sequence, len(payload))
frame = b"\xAA\x55" + body + payload
frame += struct.pack("<H", crc16_ccitt(body + payload))
```

### 固件运动学边界

固件先检查保守工作空间，再计算解析解并验证舵机角度范围。不可达坐标直接失败，不发送危险角度。

```c
if (solution == NULL || !kinematics_in_workspace(x_mm, y_mm, z_mm)) {
    return false;
}
const float base = atan2f(y_mm, x_mm) * RAD_TO_DEG + 90.0f;
```

## 调试与验证过程

- 用固定生成画面验证三种颜色、面积过滤、中心点和标注结果。
- 用正常帧、拆包、粘包、噪声、错误 CRC 和超长 payload 测试串口解析器。
- 用工作空间内、边界和不可达坐标测试 Python 与 C 两端运动学。
- 运行无硬件仿真器，检查目标入队、抓取状态、目标移除和失败路径。
- 交叉编译 STM32 固件并核对 Flash、RAM 和 ELF/HEX/BIN/MAP 产物。

## 遇到的问题

- 摄像头像素坐标不能直接作为机械臂毫米坐标。
- 串口读取天然存在拆包、粘包、噪声和坏帧。
- 数学上可计算的角度不一定满足真实工作空间与关节限位。
- 舵机大电流、急停、限位和压力阈值无法只靠仿真证明安全。

## 解决方案

固定摄像头后使用四点 Homography；串口加入版本、序号、长度和 CRC16，并用增量解析器恢复同步；上位机和固件同时检查工作空间与角度；舵机使用独立电源，并把急停、限位、FSR 标定和逐关节测试列为装机前置条件。

## 最终效果

仓库可在没有机械臂时启动仿真，跑通红、蓝、黄目标识别、任务入队、协议传输、控制器状态和结果反馈。固件能够稳定交叉编译并生成可烧录产物，GitHub Actions 会重复运行 Python 测试和 ARM 固件构建。

## 已知限制

当前结果不能证明真实抓取精度。装机后必须重新测量连杆尺寸、配置舵机方向与零偏、完成摄像头四点标定、测量 FSR 空载与夹持值，并依次验证电源、急停、限位、单关节和全自动流程。

## 项目总结

这个项目的核心不是一次抓取动画，而是把视觉、坐标、通信、运动、安全和验证拆成清晰边界。软件测试和编译证据可以证明当前实现的一部分，实机验收仍必须由真实硬件完成。

## GitHub 仓库链接

[访问 stm32-vision-robot-arm-sorter](https://github.com/jiayu-here/stm32-vision-robot-arm-sorter)
