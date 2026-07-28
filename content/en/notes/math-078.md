---
title: "Lecture 9: Equivalent Matrices"
slug: math-078
description: "Postgraduate Entrance Exam Mathematics study notes: Lecture 9: Equivalent Matrices. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics", "Linear Algebra", "Matrices"]
---

## 9.1 Equivalent Matrices

##### **Definition**: #equivalent-matrices

Let $A$ and $B$ both be $m\times n$ matrices. If an invertible $m\times m$ matrix $P$ and an invertible $n\times n$ matrix $Q$ exist such that

$$
PAQ=B,
$$

then $A$ and $B$ are equivalent, written $A\sim B$.

Left multiplication by an invertible matrix represents a finite sequence of elementary row operations, while right multiplication represents a finite sequence of elementary column operations. Thus two matrices are equivalent precisely when one can be transformed into the other by finitely many elementary row and column operations.

## 9.2 Rank Normal Form

##### **Definition**: #rank-normal-form

If $\operatorname{rank}(A)=r$, invertible matrices $P$ and $Q$ exist such that

$$
PAQ=
\begin{bmatrix}
I_r&0\\
0&0
\end{bmatrix}.
$$

The matrix on the right is the rank normal form of $A$, where $I_r$ is the $r\times r$ identity matrix. The sizes of the zero blocks are determined by the numbers $m$ and $n$ of rows and columns of $A$.

**Conclusions**

- Every $m\times n$ matrix is equivalent to a rank normal form of this type.
- The rank normal form is uniquely determined by the matrix dimensions and its rank.
- Two matrices of the same size are equivalent if and only if they have the same rank:

$$
A\sim B
\iff
\operatorname{rank}(A)=\operatorname{rank}(B).
$$

- When reducing a matrix to rank normal form, $P$ records the row operations and $Q$ records the column operations.
