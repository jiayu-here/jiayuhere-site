---
title: "Lecture 10: Rank of a matrix"
slug: math-079
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 10: Rank of Matrices. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Matrices"]
---

## 10.1 Definition of rank
#####**Definition**: #Rankofthematrix
> <font color="#ccc1d9">Description:</font> Let $A$ be an $m\times n$ matrix. If at least one minor of order $k$ is nonzero and every minor of order $k+1$ is zero, then $r(A)=k$. For an $n\times n$ matrix: $$r\left(A\right)=n\Leftrightarrow\left|A\right|\neq0\Leftrightarrow A\text{ is invertible}.$$

**Explanation**
- Minor:
	- A minor is a determinant formed by selecting the same number of rows and columns.
- Minor of order $k$:
	- For $\left(\begin{matrix}1&2&3\\4&5&6\end{matrix}\right)$, one minor of order $2$ is $\left|\begin{matrix}1&3\\4&6\end{matrix}\right|$.
	- This matrix has three minors of order $2$.
- Meaning: if at least one minor of order $k$ is nonzero and every minor of order $k+1$ is zero, then the largest linearly independent set of rows or columns has size $k$.
- Meaning: `r(A)=k`
	- There are `k` linearly independent row vectors and `k` linearly independent column vectors.
	- Any `k+1` vectors are related;
	- At this point, `r(A)=k` is the number of linearly independent vectors that make up the matrix;

**Supplement**: The geometric meaning of rank
- Meaning:
	- Rank, representing the dimension of the transformed space after the transformation of the `A` matrix;
	- The space stretched by the transformed basis vector is the total possible transformation result `->` That is: the dimension of the transformed basis vector and the space it stretches;
- Example:
	- When a matrix $A_{3*2}$ appears with `3*2`, it means mapping a two-dimensional figure into three-dimensional space; Because A has two basis vectors, and these two basis vectors are now three-dimensional `[x,y,z]`;
	- When a matrix $A_{3*2}$ appears with `2*3`, it means mapping a three-dimensional figure into a two-dimensional space; Because A has three basis vectors, and these three basis vectors are now two-dimensional `[x,y]` basis vectors;

## 10.2 Finding the Rank of a Matrix
**Method**: Find the rank of the matrix
- Transform `A` into a row-stepped matrix using elementary row transformations, where the number of nonzero rows is the rank of `A`;

**Method**: Find the rank of the matrix - Example
- Question: If $\begin{bmatrix}1&2&-1&1\\2&0&t&0\\0&-4&5&-2\end{bmatrix}$ has rank 2, find `t`
- Analysis:
	- $A\rightarrow\left(\begin{matrix}1&2&-1&1\\0&-4&t+2&-2\\0&-4&5&-2\end{matrix}\right)\rightarrow\left(\begin{matrix}1&2&-1\\0&-4&t+2&-2\\0&0&3-t&0\end{matrix}\right)$
	- At this point, it is already a rowed ladder matrix;
	- And since the matrix rank is 2, all the following rows are 0, so `3-t=0`
	- So `t=3`

## 10.3 Several Important Expressions Related to Rank
**Concept**: Let A be a `m*n` matrix, and `B` a matrix that satisfies the requirements for matrix operations, then:
- (1) $0\leq r(A)\leq\min\{m,n\}$ (by definition).
	- Every matrix has nonnegative rank, and $r(A)=0$ iff $A=O$.
	- The order of a nonzero minor cannot exceed either the number of rows or the number of columns, so $r(A)\leq\min\{m,n\}$.
- (2) $r(kA)=r(A)$ for $k\neq0$.
- (3) $r(AB)\leq\min\{r(A),r(B)\}$.
	- Matrix multiplication cannot increase rank.
- (4) $r(A+B)\leq r(A)+r(B)$.
- （5）$r\left(A^{*}\right)=\begin{cases}n,&r\left(A\right)=n,\\1,&r\left(A\right)=n-1,\\0,&r\left(A\right)<n-1,\end{cases}$
- (6) Let A = `m*n` a matrix, `P、Q` be m-th and n-order invertible matrices respectively, then `r(A)=r(PA)=r(AQ)=r(PAQ)`
	- In the process, all intermediate matrices are equivalent: $r\left(\begin{matrix}E_{r}&0\\0&0\end{matrix}\right)$
- (7) If $A_{m\times n}B_{n\times s}=O$, then $r(A)+r(B)\leq n$.
	- `n` is the number of columns in `A`;
- (8) Gram matrix: $r\left(A\right)=r\left(A^{T}\right)=r\left(A^{T}A\right)=r\left(AA^{T}\right)$
	- $r\left(A^{T}A\right)=r\left(AA^{T}\right)$ must have a solution, and it must be the best approximate solution;
	- For any matrix, the transpose rank equals its $r\left(A^{T}A\right)=r\left(AA^{T}\right)$;
