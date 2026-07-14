---
title: FPGA QPSK 数字基带链路与可视化系统
slug: fpga-qpsk-baseband-system
description: 覆盖 PRBS、Gray 映射、相位信道、硬判决、BER、UART 遥测和 Python 星座图的 FPGA 通信工程。
category: FPGA
status: 已完成编译与仿真
date: 2026-07
tags: [QPSK, Verilog, BER, UART, Python]
repository: https://github.com/jiayu-here/fpga_qpsk_baseband_visual_system
---
## 项目简介
项目在 Cyclone IV E FPGA 上实现完整 QPSK 数字基带教学链路，并用 UART 和 Python 上位机观察发射点、接收点、I/Q 波形及误码率。工程同时提供 ModelSim CSV 路径，未连接硬件时也能验证数据链路。

## 项目目标
- 用 PRBS7 产生测试比特并进行 QPSK Gray 映射。
- 支持 0、90、180、270 度相位旋转。
- 完成硬判决解调和 BER 统计。
- 通过 UART 或仿真 CSV 将观测数据交给 Python 可视化。

## 使用技术
Verilog HDL、PRBS7、Gray 编码、定点有符号 I/Q、象限硬判决、流水线对齐、UART 遥测、ModelSim、Quartus 和 Python Tkinter。

## 硬件环境
- 野火征途 Pro / Cyclone IV E `EP4CE10F17C8`。
- 50 MHz 时钟、按键、LED 和板载 CH340 USB 转串口。
- 默认 UART TX 使用 `PIN_N5`，仓库文档保留 `PIN_N6` 备用检查路径。

## 软件环境
- Quartus II Web Edition 13.0sp1。
- ModelSim-Altera Starter Edition。
- Python 3；CSV 模式使用标准库，串口模式需要 `pyserial`。

## 系统架构
发送端由符号节拍、PRBS7 和 QPSK 映射组成；信道层通过 I/Q 交换和取反实现离散相位旋转；接收端执行象限判决并与延迟后的参考比特比较；遥测层抽样封装 I/Q、累计比特和误码数，交给 UART 或仿真 CSV。

```architecture
符号节拍与 PRBS7 -> Gray 映射 -> QPSK 调制 -> 离散相位信道 -> 象限判决 -> BER 统计
I/Q 与误码数据 -> 遥测封装 -> UART 或仿真 CSV -> Python 上位机 -> 星座图与统计
```

## 功能模块
- `prbs7.v`、`symbol_tick.v`：测试数据与符号节拍。
- `qpsk_mapper.v`、`qpsk_channel_model.v`：Gray 映射和相位旋转。
- `qpsk_demapper.v`、`ber_counter.v`：硬判决与误码统计。
- `telemetry_uart.v`、`uart_tx.v`：遥测封装和串口发送。
- `qpsk_visualizer.py`：星座图、波形和 BER 显示。

## 实现步骤
1. 定义二比特符号与四象限 I/Q 的 Gray 映射。
2. 使用统一符号有效信号驱动映射、信道、判决和计数。
3. 为发射参考比特增加与接收链路等长的延迟。
4. 定义遥测字段并在测试平台中导出 CSV。
5. 完成 Python 解析、Quartus 工程和板级 UART 约束。

## 关键代码
### `rtl/qpsk_channel_model.v`：离散相位旋转
相位旋转不使用三角函数，而是通过交换与取反完成：

```verilog
case (phase_sel)
  2'd0: begin ch_i = tx_i;  ch_q = tx_q;  end
  2'd1: begin ch_i = -tx_q; ch_q = tx_i;  end
  2'd2: begin ch_i = -tx_i; ch_q = -tx_q; end
  2'd3: begin ch_i = tx_q;  ch_q = -tx_i; end
endcase
```

### `rtl/ber_counter.v`：误码统计
每个有效 QPSK 符号比较两个比特，并分别累计总比特数和错误比特数：

```verilog
wire [1:0] diff = tx_bits ^ rx_bits;
wire [1:0] err_count = diff[0] + diff[1];

always @(posedge clk) begin
  if (!rst_n) begin
    total_bits <= 32'd0;
    error_bits <= 32'd0;
  end else if (sym_en) begin
    total_bits <= total_bits + 32'd2;
    error_bits <= error_bits + err_count;
  end
end
```

## 调试过程
先在固定相位下核对星座点，再逐一切换四种旋转状态；随后检查参考比特和判决结果的周期对齐。测试平台持续输出 `qpsk_samples.csv`，Python 先验证离线数据，再用于串口实时显示。

## 遇到的问题
- 发射参考和接收结果存在流水线延迟。
- I/Q 取反与位宽扩展容易丢失符号位。
- UART 吞吐量低于基带符号速率，不能逐符号无条件输出。

## 解决方案
增加参考数据延迟线；显式声明有符号信号并统一位宽；遥测采用抽样输出，使显示刷新率与通信链路速率解耦。

## 最终效果
ModelSim 仿真通过并生成 CSV；Quartus 生成 `fpga_qpsk_baseband_visual_system.sof`，当前 50 MHz 工程的 setup 与 hold slack 均为正。Python 程序可加载 CSV 或连接串口显示星座图、I/Q 和 BER。实际板卡 UART 管脚与跳帽仍需按实物确认。

## 项目总结
项目把通信原理中的星座映射、相位变化和 BER 落到可观察的 RTL 时序上。当前模型适合教学和链路验证，不把默认关闭的噪声接口描述为真实 AWGN 性能测试。

## GitHub 仓库链接
[访问 fpga_qpsk_baseband_visual_system](https://github.com/jiayu-here/fpga_qpsk_baseband_visual_system)
