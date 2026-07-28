---
title: "Lecture 21：二次型的定义与矩阵表示"
slug: math-090
description: "考研数学学习笔记：Lecture 21：二次型的定义与矩阵表示。保留原始公式、图示与例题。"
category: "数学"
tags: ["考研数学", "线性代数", "二次型"]
---

## 21.1 二次型的定义与矩阵表示

##### **定义**： #二次型

> 含有 $n$ 个变量的二次齐次多项式称为二次型。通常写成：

$$
\begin{aligned}
f(x_1,x_2,\ldots,x_n)
&=\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ij}x_ix_j \\
&=x^{\mathrm T}Ax,
\end{aligned}
$$

其中

$$
A=
\begin{bmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{bmatrix},
\qquad
x=
\begin{bmatrix}
x_1\\x_2\\\vdots\\x_n
\end{bmatrix}.
$$

**解释**

- 同一个二次型可以由不同的非对称矩阵表示；为保证矩阵表示唯一，通常约定 $A$ 为实对称矩阵。
- 当 $A$ 为对称矩阵时，多项式中交叉项 $x_ix_j\ (i\ne j)$ 的系数为 $2a_{ij}$。
- 二次型的秩定义为其唯一对称矩阵 $A$ 的秩，即 $\operatorname{rank}(f)=\operatorname{rank}(A)$。
- 非对称表示示例：
  - $f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+4x_1x_2$；
  - $f(x)=\begin{bmatrix}x_1&x_2&x_3\end{bmatrix}\begin{bmatrix}1&4&0\\0&1&0\\0&0&1\end{bmatrix}\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}$。
- 对称表示示例：
  - $f(x_1,x_2,x_3)=2x_1^2+2x_2^2+2x_3^2-2x_1x_2-2x_2x_3+2x_1x_3$；
  - $f(x)=\begin{bmatrix}x_1&x_2&x_3\end{bmatrix}\begin{bmatrix}2&-1&1\\-1&2&-1\\1&-1&2\end{bmatrix}\begin{bmatrix}x_1\\x_2\\x_3\end{bmatrix}$。

---

## 21.2 合同变换

### 21.2.1 可逆线性变换

##### **定义**： #线性变换

> 对 $n$ 元二次型 $f(x)=x^{\mathrm T}Ax$，作线性变换 $x=Cy$：

$$
\begin{bmatrix}
x_1\\x_2\\\vdots\\x_n
\end{bmatrix}
=
\begin{bmatrix}
c_{11}&c_{12}&\cdots&c_{1n}\\
c_{21}&c_{22}&\cdots&c_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
c_{n1}&c_{n2}&\cdots&c_{nn}
\end{bmatrix}
\begin{bmatrix}
y_1\\y_2\\\vdots\\y_n
\end{bmatrix}.
$$

若 $C$ 可逆，即 $\det C\ne0$，则称 $x=Cy$ 为可逆线性变换。代入二次型可得

$$
f(Cy)=(Cy)^{\mathrm T}A(Cy)
=y^{\mathrm T}(C^{\mathrm T}AC)y
=y^{\mathrm T}By
=g(y),
$$

其中 $B=C^{\mathrm T}AC$。

### 21.2.2 矩阵合同的定义与性质

##### **定义**： #合同二次型

> 设 $A,B$ 为 $n$ 阶矩阵。若存在可逆矩阵 $C$，使

$$
C^{\mathrm T}AC=B,
$$

则称 $A$ 与 $B$ 合同，记作 $A\cong B$；对应的二次型 $f(x)$ 与 $g(y)$ 也称为合同二次型。

**解释**

- 合同变换就是对二次型作可逆线性换元。
- 对实对称矩阵，合同保持对称性、秩以及正负惯性指数不变。
- 因为可逆矩阵左乘、右乘都不改变秩，所以 $\operatorname{rank}(A)=\operatorname{rank}(B)$。
- 若 $A=A^{\mathrm T}$，则

$$
B^{\mathrm T}
=(C^{\mathrm T}AC)^{\mathrm T}
=C^{\mathrm T}A^{\mathrm T}C
=C^{\mathrm T}AC
=B.
$$

- 原始例图：
  - ![矩阵合同例题](/assets/notes/cff37fdd0709-Pasted-image-20240704170125.png)

---

## 21.3 二次型的标准型与规范型

### 21.3.1 定义

##### **定义**： #标准型

> 只含平方项、不含交叉项的二次型称为标准型：

$$
d_1y_1^2+d_2y_2^2+\cdots+d_ny_n^2.
$$

在实数范围内，再通过非零变量伸缩，可以把所有非零系数化为 $1$ 或 $-1$，得到规范型：

$$
y_1^2+\cdots+y_p^2-y_{p+1}^2-\cdots-y_{p+q}^2.
$$

其余变量的系数为零。根据惯性定律，正平方项个数 $p$ 与负平方项个数 $q$ 在合同变换下保持不变，因此规范型在变量排列意义下唯一。

### 21.3.2 配方法与正交变换

##### **定理**： #配方法

任意实二次型 $f(x)=x^{\mathrm T}Ax$ 都可以通过可逆线性变换 $x=Cy$ 化为标准型；进一步伸缩变量即可化为规范型。用矩阵语言表示，就是存在可逆矩阵 $C$ 使

$$
C^{\mathrm T}AC
=
\begin{bmatrix}
d_1&&&\\
&d_2&&\\
&&\ddots&\\
&&&d_n
\end{bmatrix}.
$$

这里的 $C$ 一般不是正交矩阵，所以 $C^{\mathrm T}$ 不一定等于 $C^{-1}$；合同对角化也不一定同时是相似对角化。

##### **定理**： #正交变换法

若 $A$ 为实对称矩阵，则由实对称矩阵的谱定理，存在正交矩阵 $Q$，使

$$
Q^{-1}AQ
=Q^{\mathrm T}AQ
=\Lambda
=
\begin{bmatrix}
\lambda_1&&&\\
&\lambda_2&&\\
&&\ddots&\\
&&&\lambda_n
\end{bmatrix}.
$$

因此正交变换 $x=Qy$ 可以把二次型化为标准型。$Q$ 不一定唯一；$\Lambda$ 的对角元是 $A$ 的特征值，其排列次序可以改变。此时 $A$ 与 $\Lambda$ 既合同又相似。
