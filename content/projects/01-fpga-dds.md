---
title: FPGA 多功能 DDS 信号发生与测量系统
slug: fpga-dds-measure-system
description: 面向 Cyclone IV E 开发板的多波形 DDS、PCF8591 AD/DA、实时统计和数码管显示完整工程。
category: FPGA
status: 已完成编译与仿真
date: 2026-07
tags: [Verilog, DDS, Quartus, ModelSim, MATLAB]
repository: https://github.com/jiayu-here/fpga_dds_measure_system
---
## 项目简介
这是一个面向野火 Altera EP4CE10 征途 Pro 开发板的数字信号发生与测量系统。工程把 DDS 波形产生、PCF8591T AD/DA、采样统计、按键交互和六位数码管显示组合为可综合、可仿真、可编译的 FPGA 项目。

## 项目目标
- 生成正弦、方波、锯齿波和三角波。
- 通过板载 PCF8591T 输出 8 bit DAC 波形并采集 A_IN0。
- 统计 ADC 最小值、最大值和指数平均值。
- 留下 RTL、测试平台、约束、脚本、文档和可下载的 `.sof`。

## 使用技术
Verilog HDL、DDS 相位累加、正弦查找表、I2C 状态机、指数平均、74HC595 串行显示、ModelSim 仿真、TimeQuest 时序分析和 MATLAB 查找表生成。

## 硬件环境
- 野火征途 Pro，Cyclone IV E `EP4CE10F17C8`。
- 50 MHz 系统时钟。
- PCF8591T 8 bit ADC/DAC、74HC595 六位八段数码管、板载按键和 LED。

## 软件环境
- Quartus II Web Edition 13.0sp1。
- ModelSim-Altera Starter Edition 10.1d。
- MATLAB R2024b 或可运行 `generate_sine_lut.m` 的版本。
- Windows 批处理脚本用于仿真、编译和下载。

## 系统架构
顶层连接 DDS、PCF8591T I2C、ADC 统计和数码管显示。DDS 产生统一 8 bit 波形数据并送入 DAC；I2C 模块在写 DAC 的同时读取 ADC；`adc_valid` 作为统计模块的更新边界；显示层根据按键选择输出平均值、最小值、最大值或当前 DDS 采样值。

```architecture
按键与频率控制 -> DDS 波形核心 -> 8 bit 波形数据 -> PCF8591T DAC -> 模拟输出
PCF8591T ADC -> adc_valid -> 采样统计 -> 显示选择 -> 74HC595 数码管
```

## 功能模块
- `dds_core.v`：相位累加和四种波形选择。
- `pcf8591_i2c.v`：DAC 写入、ADC 读取和有效脉冲。
- `adc_stats.v`：最小值、最大值与指数平均值。
- `seg7_74hc595.v`：六位数码管编码和串行扫描。
- `zhengtu_pro_top.v`：开发板引脚、按键和 LED 集成。

## 实现步骤
1. 建立 32 bit 相位累加器和 256 点正弦查找表。
2. 用相位高位直接构造方波、锯齿波和三角波。
3. 编写 PCF8591T I2C 状态机并输出 `adc_valid`。
4. 将采样统计与 I2C 时序分离，再接入显示链路。
5. 运行 ModelSim、Quartus 全编译和 TimeQuest 检查。

## 关键代码
### `rtl/dds_core.v`：相位累加器
相位累加器每个时钟加上频率控制字，波形频率由 `phase_inc` 决定：

```verilog
always @(posedge clk or negedge reset_n) begin
  if (!reset_n)
    phase_acc <= 32'd0;
  else
    phase_acc <= phase_acc + phase_inc;
end
```

### `rtl/adc_stats.v`：采样统计
统计模块只在 `sample_valid` 有效时更新，并用移位实现资源开销较低的指数平均：

```verilog
always @(posedge clk or negedge rst_n) begin
  if (!rst_n || clear) begin
    min_value <= {WIDTH{1'b1}};
    max_value <= {WIDTH{1'b0}};
    avg_acc   <= {(WIDTH+AVG_SHIFT){1'b0}};
  end else if (sample_valid) begin
    if (sample_in < min_value) min_value <= sample_in;
    if (sample_in > max_value) max_value <= sample_in;
    avg_acc <= avg_acc - (avg_acc >> AVG_SHIFT) + sample_in;
  end
end
```

## 调试过程
先用通用顶层单独验证 DDS、PWM 和统计模块，再接入开发板 I2C 与显示顶层。仿真运行到 `$finish` 后，依次检查 Analysis & Synthesis、Fitter、Assembler 和 TimeQuest，最后保留编译报告与 `.sof`。

## 遇到的问题
- 74HC595 串行位序和数码管有效电平不一致时会出现全灭或乱码。
- PCF8591T 的模拟行为不能通过纯数字测试平台完全覆盖。
- Quartus Web Edition 对器件和工具路径有明确限制。

## 解决方案
把段码极性和移位顺序集中在显示模块中；只在 `adc_valid` 到来时更新统计值；固定使用已验证的 Quartus 13.0sp1 工具链，并把仿真结论、编译结论和待上板项目分别记录。

## 最终效果
ModelSim 仿真通过，Quartus 完成综合、布局布线、汇编和时序检查；50 MHz 约束下 setup slack 为正，并生成 `quartus/fpga_dds_measure_system.sof`。板级模拟输入输出仍需结合实物继续确认。

## 项目总结
项目打通了“算法模型—RTL—外设接口—显示—编译交付”的完整链路。核心模块相互独立，便于继续加入频率配置、串口遥测或更完整的板级实测。

## GitHub 仓库链接
[访问 fpga_dds_measure_system](https://github.com/jiayu-here/fpga_dds_measure_system)
