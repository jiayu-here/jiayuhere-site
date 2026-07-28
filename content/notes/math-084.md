---
title: "Lecture 15：齐次线性方程组"
slug: math-084
description: "考研数学学习笔记：Lecture 15：齐次线性方程组。保留原始公式、图示与例题。"
category: "数学"
tags: ["考研数学", "线性代数", "线性方程组"]
---

## 15.1 线性方程组与矩阵方程

一般线性方程组可写成

$$
\begin{cases}
a_{11}x_1+\cdots+a_{1n}x_n=b_1,\\
a_{21}x_1+\cdots+a_{2n}x_n=b_2,\\
\vdots\\
a_{m1}x_1+\cdots+a_{mn}x_n=b_m,
\end{cases}
$$

其矩阵形式为

$$
Ax=b.
$$

其中

$$
A=
\begin{bmatrix}
a_{11}&\cdots&a_{1n}\\
\vdots&\ddots&\vdots\\
a_{m1}&\cdots&a_{mn}
\end{bmatrix},
\qquad
x=
\begin{bmatrix}
x_1\\\vdots\\x_n
\end{bmatrix},
\qquad
b=
\begin{bmatrix}
b_1\\\vdots\\b_m
\end{bmatrix}.
$$

系数矩阵为 $A$，增广矩阵为

$$
\begin{bmatrix}A&b\end{bmatrix}.
$$

从列向量角度看，$Ax=b$ 等价于

$$
x_1\alpha_1+x_2\alpha_2+\cdots+x_n\alpha_n=b,
$$

其中 $\alpha_1,\ldots,\alpha_n$ 是 $A$ 的列向量。因此，求解方程组就是判断 $b$ 能否由这些列向量线性表示，并求出表示系数。

- 原始图示：
  - ![矩阵方程的线性变换示意图](/assets/notes/76169b5c8dc8-Pasted-image-20240627210554.png)

若 $A$ 为方阵且 $\det A\ne0$，则 $A$ 可逆，方程组有唯一解

$$
x=A^{-1}b.
$$

## 15.2 齐次线性方程组

##### **定义**： #齐次线性方程组

常数项全为零的线性方程组称为齐次线性方程组：

$$
Ax=0.
$$

齐次方程组总有零解 $x=0$。是否存在非零解由系数矩阵的秩决定。

##### **定理**： #齐次方程组的解

设 $A$ 为 $m\times n$ 矩阵，$\operatorname{rank}(A)=r$。

- 若 $r=n$，则 $Ax=0$ 只有零解。
- 若 $r<n$，则 $Ax=0$ 有非零解，而且解空间的维数为

$$
\dim N(A)=n-r.
$$

这就是秩-零化度定理在齐次线性方程组中的形式。$n-r$ 也是自由变量的个数。

特别地，当未知数个数 $n$ 大于方程个数 $m$ 时，

$$
\operatorname{rank}(A)\le m<n,
$$

所以齐次方程组一定有非零解。

## 15.3 基础解系与通解

##### **定义**： #基础解系

当 $r<n$ 时，若解向量

$$
\xi_1,\xi_2,\ldots,\xi_{n-r}
$$

满足以下条件：

1. 每个 $\xi_i$ 都是 $Ax=0$ 的解；
2. 它们线性无关；
3. $Ax=0$ 的任意解都可以由它们线性表示；

则称它们构成 $Ax=0$ 的一组基础解系。

##### **定义**： #通解

若 $\xi_1,\ldots,\xi_{n-r}$ 是基础解系，则齐次方程组的通解为

$$
x
=k_1\xi_1+k_2\xi_2+\cdots+k_{n-r}\xi_{n-r},
$$

其中 $k_1,\ldots,k_{n-r}$ 是任意常数。

基础解系就是零空间 $N(A)$ 的一组基；通解中的系数是解向量在这组基下的坐标。

## 15.4 求解步骤

1. 对系数矩阵 $A$ 作初等行变换，化为行阶梯形或行最简阶梯形矩阵 $R$：

$$
A\xrightarrow{\text{初等行变换}}R.
$$

初等行变换不改变方程组的解集，所以 $Ax=0$ 与 $Rx=0$ 同解。

2. 数出主元个数，得到

$$
r=\operatorname{rank}(A).
$$

3. 选取 $n-r$ 个非主元变量作为自由变量，用它们表示主元变量。

4. 依次令一个自由变量为 $1$、其余自由变量为 $0$，得到 $n-r$ 个线性无关解

$$
\xi_1,\ldots,\xi_{n-r}.
$$

5. 写出通解

$$
x=k_1\xi_1+\cdots+k_{n-r}\xi_{n-r}.
$$

验算时应确认 $A\xi_i=0$，并检查基础解系的向量个数恰为 $n-r$。
