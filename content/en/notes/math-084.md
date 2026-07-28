---
title: "Lecture 15: Homogeneous Systems of Linear Equations"
slug: math-084
description: "Postgraduate Entrance Exam Mathematics study notes: Lecture 15: Homogeneous Systems of Linear Equations. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics", "Linear Algebra", "Systems of Linear Equations"]
---

## 15.1 Linear Systems and Matrix Equations

A general linear system can be written as

$$
\begin{cases}
a_{11}x_1+\cdots+a_{1n}x_n=b_1,\\
a_{21}x_1+\cdots+a_{2n}x_n=b_2,\\
\vdots\\
a_{m1}x_1+\cdots+a_{mn}x_n=b_m,
\end{cases}
$$

or, in matrix form,

$$
Ax=b.
$$

Here

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

The coefficient matrix is $A$, and the augmented matrix is

$$
\begin{bmatrix}A&b\end{bmatrix}.
$$

If $\alpha_1,\ldots,\alpha_n$ are the columns of $A$, then $Ax=b$ is equivalent to

$$
x_1\alpha_1+x_2\alpha_2+\cdots+x_n\alpha_n=b.
$$

Thus solving the system means deciding whether $b$ lies in the span of the columns of $A$ and, if so, finding the coefficients of that representation.

- Original illustration:
  - ![Linear transformation represented by a matrix equation](/assets/notes/76169b5c8dc8-Pasted-image-20240627210554.png)

If $A$ is square and $\det A\ne0$, then $A$ is invertible and the system has the unique solution

$$
x=A^{-1}b.
$$

## 15.2 Homogeneous Linear Systems

##### **Definition**: #homogeneous-linear-system

A linear system whose constant terms are all zero is homogeneous:

$$
Ax=0.
$$

Every homogeneous system has the trivial solution $x=0$. The rank of the coefficient matrix determines whether nonzero solutions exist.

##### **Theorem**: #solutions-of-a-homogeneous-system

Let $A$ be an $m\times n$ matrix with $\operatorname{rank}(A)=r$.

- If $r=n$, then $Ax=0$ has only the trivial solution.
- If $r<n$, then $Ax=0$ has nonzero solutions, and its solution space has dimension

$$
\dim N(A)=n-r.
$$

This is the rank-nullity theorem for a homogeneous linear system. The number $n-r$ is also the number of free variables.

In particular, if the number $n$ of unknowns exceeds the number $m$ of equations, then

$$
\operatorname{rank}(A)\le m<n,
$$

so the homogeneous system must have a nonzero solution.

## 15.3 Fundamental Solution Set and General Solution

##### **Definition**: #fundamental-solution-set

When $r<n$, solutions

$$
\xi_1,\xi_2,\ldots,\xi_{n-r}
$$

form a fundamental solution set of $Ax=0$ if:

1. every $\xi_i$ satisfies $A\xi_i=0$;
2. the vectors are linearly independent;
3. every solution of $Ax=0$ is a linear combination of them.

##### **Definition**: #general-solution

If $\xi_1,\ldots,\xi_{n-r}$ is a fundamental solution set, then the general solution is

$$
x
=k_1\xi_1+k_2\xi_2+\cdots+k_{n-r}\xi_{n-r},
$$

where $k_1,\ldots,k_{n-r}$ are arbitrary constants.

The fundamental solution set is a basis of the null space $N(A)$, and the coefficients in the general solution are the coordinates of a solution vector relative to that basis.

## 15.4 Solution Procedure

1. Apply elementary row operations to reduce $A$ to row-echelon or reduced row-echelon form:

$$
A\xrightarrow{\text{elementary row operations}}R.
$$

Elementary row operations preserve the solution set, so $Ax=0$ and $Rx=0$ have the same solutions.

2. Count the pivots to obtain

$$
r=\operatorname{rank}(A).
$$

3. Choose the $n-r$ nonpivot variables as free variables and express the pivot variables in terms of them.

4. Set one free variable at a time to $1$ and the others to $0$. This produces $n-r$ linearly independent solutions

$$
\xi_1,\ldots,\xi_{n-r}.
$$

5. Write the general solution

$$
x=k_1\xi_1+\cdots+k_{n-r}\xi_{n-r}.
$$

As a final check, verify that $A\xi_i=0$ for every basis vector and that the number of vectors is exactly $n-r$.
