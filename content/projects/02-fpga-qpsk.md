---
title: FPGA QPSK 数字基带链路与可视化系统
slug: fpga-qpsk-baseband-system
description: 从 PRBS、Gray 映射、相位信道、硬判决到 BER 统计和 Python 星座图的完整数字通信实践。
category: FPGA
status: 已完成
date: 2026-07
tags: [QPSK, Verilog, BER, UART, Python]
repository: https://github.com/jiayu-here/fpga_qpsk_baseband_visual_system
---
## 项目背景
通信原理中的星座映射和误码率如果只停留在公式层面，很难建立算法与硬件时序之间的联系。本项目把完整 QPSK 基带链路放到 FPGA 中，并通过上位机观察数据。

## 功能目标
- 生成 PRBS7 伪随机比特流并完成 QPSK Gray 映射。
- 提供 0、90、180、270 度相位旋转信道。
- 完成硬判决解调与 BER 统计。
- 通过 UART 输出 I/Q、总比特数和误码数。
- 在 Python 上位机显示星座图、I/Q 波形与 BER。

## 硬件与软件环境
- Cyclone IV E EP4CE10F17C8 FPGA。
- Quartus II Web Edition 13.0sp1 与 ModelSim-Altera。
- Python 上位机用于 CSV 或串口数据可视化。

## 系统架构
发送链路由 PRBS7、串并转换和 Gray 映射组成；信道层注入相位旋转；接收链路执行象限判决、比特恢复与误码比较；遥测层把观测点封装成 UART 帧。

## 实现步骤
1. 明确二比特符号与四象限 I/Q 电平的映射表。
2. 让发送参考比特与接收判决结果在相同有效周期比较。
3. 为相位旋转建立可综合的符号变换，不使用浮点运算。
4. 定义稳定的串口帧格式并编写 Python 解析器。
5. 先导出仿真 CSV，再进行真实串口联调。

## 核心代码说明
Gray 映射使用 `00, 01, 11, 10` 顺序，使相邻星座点只变化一个比特。相位旋转通过 I/Q 交换和取反完成，比三角函数实现更适合 RTL。

```verilog
case (phase_sel)
  2'd0: begin ch_i = tx_i;  ch_q = tx_q;  end
  2'd1: begin ch_i = -tx_q; ch_q = tx_i;  end
  2'd2: begin ch_i = -tx_i; ch_q = -tx_q; end
  2'd3: begin ch_i = tx_q;  ch_q = -tx_i; end
endcase
```

## 调试过程
测试平台持续记录发送点、接收点和误码统计到 CSV。先在固定相位下确认星座点位置，再切换四种旋转状态，最后验证 UART 字段顺序与 Python 解析一致。

## 遇到的问题
- 发送参考比特和接收判决存在流水线延迟。
- 有符号 I/Q 在位宽扩展时容易发生符号位错误。
- 串口数据量过大时会反过来限制符号更新速率。

## 解决方案
为参考比特增加等长延迟线；所有 I/Q 运算显式声明为 `signed`；遥测采用抽样输出，把通信链路与显示刷新速率解耦。

## 最终效果
仓库包含可综合 RTL、ModelSim 仿真、CSV 导出、Quartus 工程和 Python 上位机。链路可显示星座图、I/Q 波形以及 BER 统计。

## RTL 模块分工与时序处理
- `prbs7.v` 和 `symbol_tick.v` 产生稳定的比特源与符号节拍；映射、信道、判决和 BER 计数都以同一有效节拍为边界，避免不同模块各自计数造成符号错位。
- `qpsk_mapper.v` 将两比特符号映射到四象限 I/Q；`qpsk_channel_model.v` 通过 I/Q 交换和取反实现 0、90、180、270 度旋转，不在 RTL 中引入浮点三角函数。
- `qpsk_demapper.v` 根据 I/Q 符号完成象限硬判决；`ber_counter.v` 比较经过等长延迟的发射参考比特与接收比特，这是保证 BER 数字有意义的关键。
- `telemetry_uart.v` 与 `uart_tx.v` 将发射/接收 I/Q、累计比特数和误码数封装为串口遥测；遥测采用抽样输出，显示吞吐不会反过来改变基带符号速率。

## 仿真、上位机与板级观测流程
先执行 `sim/run_msim.bat`，由测试平台导出 `sim/qpsk_samples.csv`；再运行 `host_app/qpsk_visualizer.py`，用 CSV 模式检查星座点位置、I/Q 波形和 BER。确认仿真链路后，才下载 `.sof` 到 EP4CE10F17C8，通过板载 CH340 的 UART 进行实时观测。默认 `uart_txd` 连接 `PIN_N5`；若 PC 端没有串口数据，应先检查 CH340 跳帽，再按硬件说明尝试 `PIN_N6` 并重新编译。

## 验证证据与当前边界
- 2026-07-03 的本机验证中，ModelSim 仿真通过并生成 CSV；Python 上位机可加载该文件进行可视化。
- Quartus Web Edition 已完成全流程编译并生成 `quartus/output_files/fpga_qpsk_baseband_visual_system.sof`；最差 setup slack 为 11.216 ns、hold slack 为 0.452 ns，满足当前 50 MHz 单时钟演示工程的时序要求。
- 板级 RTL 已提供 `sw_noise` 噪声模型接口，但默认顶层设为 0；因此当前成果用于验证映射、相位旋转、判决、时序对齐和可视化，不把它表述为带真实 AWGN 信道的物理层性能测试。
- 交付内容包括 RTL、测试平台、仿真脚本、Quartus 工程和约束、Python 可视化程序、硬件连接说明、测试报告与发布包，方便按“仿真 CSV → 上位机 → 板卡 UART”三段式复现。

## 后续改进
可继续增加脉冲成形、AWGN 近似、载波同步与定时恢复，让模型从基带教学链路逐步接近真实接收机。
