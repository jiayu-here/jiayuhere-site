---
title: 嵌入式 C 语言检查清单
slug: embedded-c-checklist
description: 聚焦位操作、内存、volatile、接口边界与可测试性。
category: 编程语言
date: 2026-07
tags: [C, Embedded, Pointer, Volatile]
---
## 整数与位宽
使用明确宽度的整数类型；位移前确认符号、提升规则和溢出行为。

## 指针与内存
区分对象生命周期、指针所有权和缓冲区长度，不把数组退化后的指针误当成仍携带长度。

## volatile 的边界
`volatile` 用于可能被硬件或中断异步改变的对象，但它不提供原子性，也不是线程同步工具。

## 模块接口
头文件只暴露稳定接口；硬件寄存器访问集中封装；业务逻辑尽可能接收普通数据以便脱离硬件测试。
