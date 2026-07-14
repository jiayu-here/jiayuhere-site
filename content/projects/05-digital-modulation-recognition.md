---
title: MATLAB 数字调制识别仿真系统
slug: digital-modulation-recognition-matlab
description: 生成五类调制信号，在 AWGN 与多信噪比条件下提取特征并比较 RBF-SVM 和 KNN。
category: 通信仿真
status: 已完成仿真
date: 2026-07
tags: [MATLAB, Modulation, AWGN, SVM, KNN]
repository: https://github.com/jiayu-here/digital-modulation-recognition-matlab
---
## 项目简介
项目使用 MATLAB 生成 ASK、FSK、BPSK、QPSK 和 16QAM 五类信号，在不同 SNR 下加入 AWGN，提取幅度、相位、频率变化和高阶累积量特征，并比较 RBF-SVM 与 KNN 的调制识别效果。

## 项目目标
- 建立统一的五类调制信号数据生成流程。
- 覆盖 `-10:2:20 dB` 的噪声条件。
- 形成训练集、测试集、特征表、准确率曲线和混淆矩阵。
- 用 SVM 作为主分类器、KNN 作为对照组。

## 使用技术
MATLAB 复数基带建模、AWGN、幅相频特征、高阶累积量、RBF-SVM、ECOC 多分类、KNN、混淆矩阵和 CSV/MAT 结果导出。

## 硬件环境
本项目是离线仿真，不依赖专用硬件。普通能够运行 MATLAB 和 Statistics and Machine Learning Toolbox 的电脑即可执行。

## 软件环境
- MATLAB。
- Statistics and Machine Learning Toolbox，用于 `fitcecoc`、`templateSVM` 和 `fitcknn`。
- 入口为 `run_modulation_recognition.m`，结果输出到 `results/`。

## 系统架构
脚本分为参数配置、信号生成、加噪、特征提取、数据集构建、模型训练、预测评估和结果导出八个阶段。训练集与测试集按调制类型和 SNR 生成，特征矩阵统一标准化后分别送入 SVM 与 KNN。

## 功能模块
- 五类调制信号生成和功率归一化。
- 复高斯噪声注入。
- 17 维幅度、相位、频率和累积量特征。
- SVM/KNN 训练、逐 SNR 准确率和 10 dB 混淆矩阵。
- 时域、频谱、星座、CSV、MAT 和论文材料输出。

## 实现步骤
1. 固定随机种子并定义 SNR、采样率和帧长度。
2. 为每类调制生成归一化复基带帧。
3. 依据目标 SNR 计算并加入复高斯噪声。
4. 提取 17 维特征并构造训练/测试集。
5. 训练 RBF-SVM 和 `k=5` 的 KNN。
6. 输出准确率、混淆矩阵、特征数据和模型文件。

## 关键代码
噪声功率由信号功率和目标 SNR 直接计算：

```matlab
noisePower = signalPower / (10^(snrDb / 10));
noise = sqrt(noisePower / 2) * (randn(size(signal)) + 1j * randn(size(signal)));
noisy = signal + noise;
```

## 调试过程
先检查每类信号的时域、频谱和星座，再核对特征是否出现 NaN 或量纲异常；随后分别观察低 SNR 与高 SNR 的混淆矩阵，确认模型提升来自信噪比变化而不是数据泄漏。

## 遇到的问题
- 五类调制的幅度尺度不同，会让分类器过度依赖能量。
- 低 SNR 下相位与频率差分特征波动明显。
- 多分类 SVM 不能直接使用单个二分类器完成。

## 解决方案
每帧按平均功率归一化；同时使用幅度统计、相位差分和高阶累积量形成互补特征；通过 `fitcecoc` 采用 one-vs-one 编码组织多个 RBF-SVM 学习器。

## 最终效果
仓库结果显示 SVM 在 4 dB 后准确率接近 100%，6 dB 后达到 100%；KNN 在高 SNR 下表现良好，但低 SNR 稳定性较弱。工程输出逐 SNR 准确率、五类星座、两种混淆矩阵、完整特征表和模型文件。

## 项目总结
该项目形成了可重复的通信信号机器学习实验链路，并清楚保留参数、数据、模型和图表。结果属于仿真数据上的识别性能，不等同于真实射频采集环境。

## GitHub 仓库链接
[访问 digital-modulation-recognition-matlab](https://github.com/jiayu-here/digital-modulation-recognition-matlab)
