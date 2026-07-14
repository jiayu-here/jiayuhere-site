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

## 模块职责与数据边界
- `dds_core.v` 维护相位累加器，并把相位数据转换为四种波形的统一采样输出；正弦波使用查找表，其他波形直接由相位码变换得到，避免为每种波形复制一套时序控制。
- `pcf8591_i2c.v` 负责 SCL/SDA 时序、DAC 写入与 ADC 读取。采集结果只有在 `adc_valid` 有效时才交给后级，数据未更新的周期不会被误当成新样本。
- `adc_stats.v` 只针对有效 ADC 样本更新最小值、最大值和指数平均值；统计逻辑与 I2C 状态机分离，便于单独检查“采样是否正确”和“统计是否正确”。
- `seg7_74hc595.v` 与显示编码逻辑负责把当前选择的统计量送到六位数码管；按键、LED 和显示选择均在顶层汇合，不侵入 DDS 或采集核心。

## 板级交互与使用方式
开发板上，KEY1/KEY2 选择正弦、方波、锯齿和三角波；KEY3/KEY4 在 ADC 平均值、最小值、最大值与当前 DDS 输出之间切换。PCF8591T 同时承担 8 bit DAC 输出和 A_IN0 ADC 采集，板载电位器可作为 ADC 的直观输入来源。四个 LED 分别用于观察复位状态、波形选择位和 ADC 更新脉冲，数码管异常时可先借此区分“核心没有运行”和“显示链路有问题”。

## 验证证据与交付物
- ModelSim 测试平台运行到 `$finish`，并生成 `sim/dds_measure.vcd`；覆盖 DDS 波形切换、PWM 输出、ADC 统计和显示选择的基础逻辑。
- Quartus II Web Edition 13.0sp1 已完成 Analysis & Synthesis、Fitter、Assembler、TimeQuest 和 EDA Netlist Writer；输出文件为 `quartus/fpga_dds_measure_system.sof`。
- 50 MHz 时钟约束为 20 ns；最近一次编译在慢速 85°C 角的 setup slack 为 7.137 ns，满足时序要求。
- 交付包中包含 Quartus 工程与约束、RTL、ModelSim 脚本、MATLAB 查找表生成脚本、硬件连接说明、测试报告和可下载的 `.sof`，第三方可按文档复现编译与下载流程。

## 后续改进
后续可加入按键配置频率字、串口输出采样数据，以及更完整的板级波形实测图片和视频。
