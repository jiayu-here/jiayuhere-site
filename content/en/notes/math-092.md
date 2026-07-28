---
title: "Lecture 23: Positive-Definite Quadratic Forms"
slug: math-092
description: "Graduate Entrance Examination Mathematics study notes: Lecture 23: Positive-Definite Quadratic Forms. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Quadratic Forms"]
---

## 23.1 Positive Definite Quadratic Forms
### 23.1.1 Basic Concepts
#####**Definition**: #Positivedefinitequadraticform
> <font color="#ccc1d9"> description: </font> $n$ element quadratic form $f(x_1,  x_2,  \cdots,  x_n)=x^TAx.$ If there is $x^TAx>0, $ for any $x=[x_1,  x_2,  \cdots,  x_n]^T\neq0, $, then $f$ is called a positive-definite quadratic form
> The corresponding matrix of the quadratic form $A$ is called a positive definite matrix;

**Explanation**
- Explanation: Geometric understanding
	- For example, in the binary case, in a two-dimensional coordinate system, the positive definite is the projection;

#####**Theorem**: #Sufficientconditionsforpositivedefinitequadraticforms
> <font color="#ccc1d9"> description: </font>
> The $n$-variable quadratic form $f=x^\mathrm{T}Ax$ is positive definite
> $\Leftrightarrow x^\mathrm{T}Ax>0$ for every $x\neq0$ (definition)
> $\Leftrightarrow$ the positive index of inertia is $p=n$
> $\Leftrightarrow$ there exists an invertible matrix $D$ such that $A=D^TD$
> $\Leftrightarrow A\cong E$
> $\Leftrightarrow$ every eigenvalue $\lambda_i$ of $A$ is positive
> $\Leftrightarrow$ every leading principal minor of $A$ is positive.

**Explanation**
- Leading principal minor:
	- It is a principal minor formed by the first $k$ rows and first $k$ columns.
	- Its top-left entry is $a_{11}$ and its bottom-right entry is $a_{kk}$.
	- $$\begin{vmatrix}A_{k}\end{vmatrix}=\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1k}\\a_{21}&a_{22}&\cdots&a_{2k}\\\vdots&\vdots&&\vdots\\a_{k1}&a_{k2}&\cdots&a_{kk}\end{vmatrix}$$

#####**Theorem**: #Necessaryconditionsforquadraticpositivedefinitetypes
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\begin{aligned}&\left(1\right)a_{ii}>0\left(i=1,2,\cdots,n\right).\\&\left(2\right)\left|A\right|>0 .\end{aligned}$$

## 23.2 Judgment and Definite Determination
**Summary**: Methods for determining true positive
- Method 1: Sylvester's criterion — all leading principal minors of $A$ are positive.
	- If this holds, the matrix is positive definite.
- Method 2: All eigenvalues of $A$ are positive.
- Method 3: Complete the square and check whether all coefficients in the standard form are positive.
- Method 4: Definition method
	- First write $f=(x_1+x_2)^2+(x_1+x_3)^2+(x_2+x_3)^2$. This is a sum-of-squares representation, but it may come from a noninvertible change of variables and therefore is not by itself a valid diagonalization by congruence.
	- Since it is a sum of squares, $f=0$ if and only if $\begin{cases}x_{1}+x_{2}=0\\x_{1}+x_{3}=0\\x_{2}+x_{3}=0.\end{cases}$
	- Its determinant is $\left|\begin{matrix}1&1&0\\1&0&1\\0&1&1\end{matrix}\right|$
	- Hence $x_1=x_2=x_3=0$.
	- So, by definition: $f>0\Leftrightarrow\left(\begin{matrix}x_{1}\\x_{2}\\x_{3}\end{matrix}\right)\neq0$

**Summary**: Steps to prove the sufficiency of positive definite quadratic forms
- (1) First, explain $A^T=A$
- (2) Sufficient conditions for reuse;
	- Note: `q=0` cannot be pushed out `p=n`
