---
title: "Lecture 14：向量空间"
slug: math-083
description: "考研数学学习笔记：Lecture 14：向量空间。保留原始公式、图示与例题。"
category: "数学"
tags: ["考研数学", "线性代数", "向量组"]
---

## 14.1 基、维数与坐标

##### **定义**： #向量空间的基

若有序向量组 $\xi_1,\xi_2,\ldots,\xi_n$ 在 $\mathbb R^n$ 中线性无关，则它构成 $\mathbb R^n$ 的一组基。任意向量 $\alpha\in\mathbb R^n$ 都能唯一表示为

$$
\alpha=a_1\xi_1+a_2\xi_2+\cdots+a_n\xi_n.
$$

向量

$$
x=
\begin{bmatrix}
a_1\\a_2\\\vdots\\a_n
\end{bmatrix}
$$

称为 $\alpha$ 在基 $\xi_1,\ldots,\xi_n$ 下的坐标列向量。基向量的个数 $n$ 称为向量空间的维数。

## 14.2 基变换与坐标变换

##### **定理**： #基变换

设

$$
\mathcal B_\xi=(\xi_1,\ldots,\xi_n),
\qquad
\mathcal B_\eta=(\eta_1,\ldots,\eta_n)
$$

是 $\mathbb R^n$ 的两组基。若

$$
\begin{bmatrix}
\eta_1&\eta_2&\cdots&\eta_n
\end{bmatrix}
=
\begin{bmatrix}
\xi_1&\xi_2&\cdots&\xi_n
\end{bmatrix}C,
$$

则 $C$ 称为从基 $\mathcal B_\xi$ 到基 $\mathcal B_\eta$ 的过渡矩阵。$C$ 的第 $i$ 列就是 $\eta_i$ 在旧基 $\mathcal B_\xi$ 下的坐标。由于两组向量都是基，$C$ 必可逆。

##### **定理**： #坐标变换

若同一向量 $\alpha$ 在两组基下的坐标分别为 $x$ 和 $y$，则

$$
\alpha
=
\begin{bmatrix}\xi_1&\cdots&\xi_n\end{bmatrix}x
=
\begin{bmatrix}\eta_1&\cdots&\eta_n\end{bmatrix}y.
$$

结合基变换公式可得

$$
x=Cy,
\qquad
y=C^{-1}x.
$$

这说明：从新基坐标 $y$ 转换到旧基坐标 $x$ 时左乘 $C$；反向转换时左乘 $C^{-1}$。

**二维示例**

取

$$
C=
\begin{bmatrix}
2&-1\\
1&1
\end{bmatrix},
\qquad
y=
\begin{bmatrix}
-1\\2
\end{bmatrix}.
$$

则

$$
x=Cy
=-1
\begin{bmatrix}
2\\1
\end{bmatrix}
+2
\begin{bmatrix}
-1\\1
\end{bmatrix}
=
\begin{bmatrix}
-4\\1
\end{bmatrix}.
$$

- 原始图示：
  - ![基变换示意图](/assets/notes/609bf8645698-Drawing-2024-06-29-19.34.16.excalidraw.png)

## 14.3 施密特正交化

##### **定理**： #施密特正交化

给定线性无关向量 $\alpha_1,\ldots,\alpha_m$，依次定义

$$
\beta_1=\alpha_1,
$$

$$
\beta_k
=
\alpha_k
-\sum_{j=1}^{k-1}
\frac{\langle\alpha_k,\beta_j\rangle}
{\langle\beta_j,\beta_j\rangle}
\beta_j,
\qquad k=2,\ldots,m.
$$

则 $\beta_1,\ldots,\beta_m$ 两两正交，并且与原向量组张成同一个子空间。再令

$$
e_k=\frac{\beta_k}{\|\beta_k\|},
$$

即可得到一组标准正交向量。
