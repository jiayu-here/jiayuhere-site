---
title: FPGA 多功能 DDS 信号发生与测量系统
slug: fpga-dds-measure-system
description: 在 Cyclone IV E 上完成多波形 DDS、AD/DA 采集、实时统计、数码管显示与完整编译交付。
category: FPGA
status: 已完成
date: 2026-07
tags: [Verilog, DDS, Quartus, ModelSim, MATLAB]
repository: https://github.com/jiayu-here/fpga_dds_measure_system
---
## 项目背景
课程实验往往只验证单个 RTL 模块，这个项目把波形发生、模拟采集、统计显示和板级交互串成一个可以综合、仿真、编译和下载的完整系统。

## 功能目标
- 生成正弦、方波、锯齿和三角四种波形。
- 通过 PCF8591T 完成 8 bit DAC 输出与 ADC 采集。
- 实时统计采样最小值、最大值和指数平均值。
- 使用按键切换波形和显示项，使用 LED 提示工作状态。

## 硬件与软件环境
- 野火 Altera EP4CE10 征途 Pro 开发板。
- Quartus II Web Edition 13.0sp1。
- ModelSim-Altera Starter Edition 10.1d。
- MATLAB 用于生成 DDS 正弦查找表。

## 系统架构
数据链路分为 DDS 相位累加与波形查表、I2C AD/DA 驱动、ADC 统计、显示格式化和 74HC595 数码管扫描五层。顶层只负责连接接口与板级引脚，核心逻辑保持可复用。

## 实现步骤
1. 使用相位累加器建立 DDS 核心，并为四种波形提供统一采样接口。
2. 编写 PCF8591T I2C 状态机，分离时序控制与采样有效信号。
3. 对 ADC 数据计算最小值、最大值和指数平均值。
4. 完成数码管编码、扫描与按键去抖。
5. 通过 ModelSim、Quartus 编译和 TimeQuest 逐层验证。

## 核心代码说明
`dds_core.v` 根据相位高位索引查找表；方波、三角波与锯齿波直接由相位数据变换得到。`adc_stats.v` 只在 `adc_valid` 到来时更新统计值，避免把无效周期计入结果。

```verilog
always @(posedge clk or negedge reset_n) begin
  if (!reset_n)
    phase_acc <= 32'd0;
  else
    phase_acc <= phase_acc + phase_inc;
end
```

## 调试过程
先用通用顶层验证 DDS 和统计模块，再接入板级 I2C 与显示。仿真通过后依次检查 Analysis & Synthesis、Fitter、Assembler 和 TimeQuest，避免只看最终是否生成下载文件。

## 遇到的问题
- Web Edition 对部分器件和脚本路径较敏感。
- 74HC595 串行位序与数码管有效电平容易造成全灭或乱码。
- 板级 I2C 行为无法只靠纯数字仿真完全覆盖。

## 解决方案
固定经过验证的 Quartus 13.0sp1 工具链；把显示位序与有效电平集中在单一模块；保留硬件检查清单，把仿真结论与上板结论分开记录。

## 最终效果
工程已通过 ModelSim 测试、Quartus 全流程编译和 50 MHz 时序检查，并生成 `.sof` 下载文件。仓库同时保留 RTL、仿真脚本、MATLAB 查找表脚本、约束和测试报告。

## 后续改进
后续可加入按键配置频率字、串口输出采样数据，以及更完整的板级波形实测图片和视频。
