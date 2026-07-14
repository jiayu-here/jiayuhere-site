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

## 后续改进
可继续增加脉冲成形、AWGN 近似、载波同步与定时恢复，让模型从基带教学链路逐步接近真实接收机。
