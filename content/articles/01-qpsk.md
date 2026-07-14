---
title: 从星座图到 RTL：QPSK 链路的实现顺序
slug: qpsk-from-constellation-to-rtl
description: 用可验证的顺序拆解 Gray 映射、相位旋转、硬判决与 BER 对齐。
category: 通信原理
date: 2026-07-14
tags: [QPSK, FPGA, BER, Gray]
---
## 先定义一条完整的数据链

QPSK 链路不只是“两个比特映射成一个星座点”。在 RTL 中，数据需要依次经过比特源、串并转换、Gray 映射、信道、判决、参考延迟、误码统计和遥测输出。每一级都可能改变位宽、符号含义或时序。

开始编码前应写清以下约定：

- 每个 QPSK 符号包含哪两个比特，先发送高位还是低位。
- I、Q 使用有符号二进制还是无符号偏置表示。
- 正方向对应星座图的哪个象限。
- `valid` 在哪个周期表示输入或输出有效。
- BER 统计的是比特错误数还是符号错误数。

这些约定必须同时用于 Verilog、测试平台和 Python 可视化。只要三处有一处使用不同定义，波形可能看起来合理，统计结果却会错误。

## 固定 Gray 映射表

Gray 映射让相邻星座点只相差一个比特。一个常用约定是：

```text
00 -> I=+A, Q=+A
01 -> I=-A, Q=+A
11 -> I=-A, Q=-A
10 -> I=+A, Q=-A
```

RTL 中可以把映射写成完整 `case`，避免用难以追踪的位运算压缩逻辑：

```verilog
always @* begin
  case (tx_bits)
    2'b00: begin i_symbol =  AMP; q_symbol =  AMP; end
    2'b01: begin i_symbol = -AMP; q_symbol =  AMP; end
    2'b11: begin i_symbol = -AMP; q_symbol = -AMP; end
    2'b10: begin i_symbol =  AMP; q_symbol = -AMP; end
    default: begin i_symbol = 0; q_symbol = 0; end
  endcase
end
```

`AMP`、`i_symbol` 和 `q_symbol` 都应显式声明为有符号量。Verilog 中只要表达式的一部分被当成无符号数，负数比较、取反和位宽扩展就可能偏离预期。

## 把比特源和调制器分开

PRBS 适合持续产生可重复的伪随机比特，但调试映射时不应一开始就连接 PRBS。先在测试平台中按顺序输入 `00、01、11、10`，确认四个星座点，再加入 PRBS。

比特源模块只负责产生参考比特和有效信号，调制器只负责符号映射。这样可以在固定输入下独立验证调制器，也方便以后替换为 UART、存储器或其他数据源。

## 离散相位旋转不需要三角函数

如果信道只模拟 0、90、180、270 度旋转，可以通过 I/Q 交换和取反完成：

```verilog
case (phase_sel)
  2'd0: begin rx_i =  tx_i; rx_q =  tx_q; end
  2'd1: begin rx_i = -tx_q; rx_q =  tx_i; end
  2'd2: begin rx_i = -tx_i; rx_q = -tx_q; end
  2'd3: begin rx_i =  tx_q; rx_q = -tx_i; end
endcase
```

这种方式不需要乘法器和三角函数表，行为也容易逐项验证。需要任意相位、频偏或噪声时，可以先在 MATLAB/Python 模型中验证，再决定使用 CORDIC、查表还是外部数据注入。

## 硬判决必须与映射互逆

在零门限、理想基带条件下，硬判决只需判断 I、Q 的符号。但判决后的两比特组合必须严格对应发送端映射：

```verilog
always @* begin
  if (rx_i >= 0 && rx_q >= 0)      decided_bits = 2'b00;
  else if (rx_i < 0 && rx_q >= 0)  decided_bits = 2'b01;
  else if (rx_i < 0 && rx_q < 0)   decided_bits = 2'b11;
  else                              decided_bits = 2'b10;
end
```

边界值等于 0 时归入哪个象限也要固定。理想仿真中可能很少遇到零值，但量化、滤波和噪声会让边界定义影响结果。

## 最容易忽略的是流水线对齐

映射、旋转、判决和输出寄存器都会引入延迟。BER 比较时不能把当前发送比特与数个周期后的判决结果直接比较，而应让参考比特经过等长延迟线。

建议为每一级同时传递数据和 `valid`：

```text
tx_bits + tx_valid
  -> mapper
  -> channel
  -> decision
  -> decided_bits + decided_valid
```

参考路径中的 `tx_bits` 需要延迟到 `decided_valid` 对应的周期。测试平台应逐周期打印参考值、判决值和有效信号，而不是只观察最终 BER 数字。

## BER 统计要说明分母

每个有效 QPSK 符号包含两个比特。统计模块可以先异或发送与接收比特，再累计错误位数：

```verilog
wire [1:0] bit_diff = reference_bits ^ decided_bits;
wire [1:0] error_count = bit_diff[0] + bit_diff[1];

always @(posedge clk) begin
  if (!reset_n) begin
    total_bits <= 32'd0;
    error_bits <= 32'd0;
  end else if (decided_valid) begin
    total_bits <= total_bits + 32'd2;
    error_bits <= error_bits + error_count;
  end
end
```

BER 等于 `error_bits / total_bits`。RTL 中通常只累计两个整数，把除法交给上位机或显示换算模块，避免为了一个低速显示值引入不必要的除法器。

## 位宽和取负需要单独检查

补码最小负数的绝对值无法在原位宽内表示。例如 8 位有符号数 `-128` 取负仍可能得到 `-128`。如果相位旋转可能处理满量程负数，应限制输入幅值、增加一位保护位，或明确采用饱和逻辑。

跨模块端口都应显式写出 `signed`。对 I/Q 扩位时使用符号扩展，不能简单在高位补 0。

## 仿真按层次推进

### 映射测试

按固定顺序输入四种符号，检查 I/Q 和反向判决。

### 相位测试

在同一个星座点上依次切换四种相位，确认交换与取反关系。

### 时序测试

连续输入带编号的符号，逐周期核对参考延迟、输出有效和 BER 更新时刻。

### 误码注入测试

人为翻转判决比特，验证每个符号可能增加 0、1 或 2 个错误比特。

### 长序列测试

接入 PRBS，检查计数器持续运行、复位和清零行为。

## 可视化应放在算法验证之后

先让仿真导出 I/Q、参考比特和误码计数到 CSV，再由 Python 绘制星座图和统计曲线。离线数据正确后再接 UART，可以把算法错误与串口丢帧、波特率或协议解析问题分开。

串口带宽通常远低于 FPGA 内部符号率，因此遥测应抽样发送或按帧汇总。上位机只负责解析和展示，不应重新定义映射或修改 BER 计算方式。

## 常见错误与定位顺序

- 星座整体旋转但 BER 很高：先检查相位补偿和映射约定。
- 星座正确但 BER 持续增加：优先检查参考数据延迟。
- 只有部分象限错误：检查符号位、取负和判决表。
- UART 图像断裂：检查抽样节奏、帧格式和接收缓存，不要先修改调制器。
- 复位后计数异常：检查 `valid` 是否在复位释放时产生伪脉冲。

## 验收清单

- 四个符号的映射与判决完全互逆。
- 无噪声、零相位条件下错误比特数保持为 0。
- 四种离散旋转的 I/Q 位置符合定义。
- 参考比特与判决结果在同一有效周期比较。
- 人工注入错误时计数按 0、1、2 正确增加。
- CSV 与 UART 数据使用相同字段和符号定义。
- 文档明确区分仿真验证、编译时序验证和板级验证。
