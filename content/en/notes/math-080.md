---
title: "Lecture 11: Linear Dependence of Vectors and Vector Sets"
slug: math-080
description: "Postgraduate Entrance Exam Mathematics study notes: Lecture 11: Linear Dependence of Vectors and Vector Sets. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics", "Linear Algebra", "Vector Sets"]
---

## 11.1 Vectors and Spans

### 11.1.1 Vectors

##### **Definition**: #vector

An $n$-dimensional row vector is an ordered array

$$
\alpha=\begin{bmatrix}a_1&a_2&\cdots&a_n\end{bmatrix},
$$

and the corresponding column vector is

$$
\alpha^{\mathrm T}
=\begin{bmatrix}a_1&a_2&\cdots&a_n\end{bmatrix}^{\mathrm T}.
$$

The scalar $a_i$ is the $i$th component of the vector. Two vectors are equal if and only if all corresponding components are equal.

For vectors $\alpha=(a_1,\ldots,a_n)$ and $\beta=(b_1,\ldots,b_n)$,

$$
\alpha+\beta=(a_1+b_1,\ldots,a_n+b_n),
\qquad
k\alpha=(ka_1,\ldots,ka_n).
$$

The rows or columns of a matrix can be viewed as a vector set. For example, the columns

$$
\alpha_1=
\begin{bmatrix}1\\2\\3\end{bmatrix},
\qquad
\alpha_2=
\begin{bmatrix}6\\7\\9\end{bmatrix},
\qquad
\alpha_3=
\begin{bmatrix}2\\4\\6\end{bmatrix}
$$

satisfy $\alpha_3=2\alpha_1$, so $\alpha_3$ contributes no new independent direction.

### 11.1.2 Span

##### **Definition**: #span

The span of vectors $\alpha_1,\ldots,\alpha_m$ is the set of all their linear combinations:

$$
\operatorname{span}\{\alpha_1,\ldots,\alpha_m\}
=
\left\{
k_1\alpha_1+\cdots+k_m\alpha_m
:
k_1,\ldots,k_m\in\mathbb R
\right\}.
$$

- One nonzero vector spans a line through the origin.
- Two linearly independent vectors in $\mathbb R^3$ span a plane through the origin.
- Three linearly independent vectors in $\mathbb R^3$ span all of $\mathbb R^3$.

- Original illustration:
  - ![Span of two vectors in three-dimensional space](/assets/notes/ea032cb9a6dc-Pasted-image-20240625184520.png)

Coordinates depend on the chosen basis, but the geometric vector itself does not.

## 11.2 Inner Products and Orthogonality

### 11.2.1 Inner Product and Norm

##### **Definition**: #inner-product

For $\alpha,\beta\in\mathbb R^n$,

$$
\langle\alpha,\beta\rangle
=\alpha^{\mathrm T}\beta
=\sum_{i=1}^{n}a_i b_i
=\|\alpha\|\,\|\beta\|\cos\theta.
$$

The Euclidean norm is

$$
\|\alpha\|
=\sqrt{\langle\alpha,\alpha\rangle}
=\sqrt{\sum_{i=1}^{n}a_i^2}.
$$

A vector with norm $1$ is a unit vector.

### 11.2.2 Orthogonal Vectors and Orthogonal Matrices

##### **Definition**: #orthogonal-vectors

Vectors $\alpha$ and $\beta$ are orthogonal if

$$
\langle\alpha,\beta\rangle=\alpha^{\mathrm T}\beta=0.
$$

An ordered vector set $\alpha_1,\ldots,\alpha_s$ is orthonormal if

$$
\alpha_i^{\mathrm T}\alpha_j
=
\begin{cases}
1,&i=j,\\
0,&i\ne j.
\end{cases}
$$

##### **Definition**: #orthogonal-matrix

An $n\times n$ matrix $A$ is orthogonal if

$$
A^{\mathrm T}A=I_n.
$$

Equivalently,

$$
A^{-1}=A^{\mathrm T},
$$

and the rows and columns of $A$ are orthonormal sets. Orthogonal transformations preserve inner products, lengths, and angles.

A planar rotation is represented by

$$
Q=
\begin{bmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta
\end{bmatrix}.
$$

## 11.3 Linear Combinations, Dependence, and Independence

### 11.3.1 Linear Representation

##### **Definition**: #linear-combination

An expression

$$
k_1\alpha_1+k_2\alpha_2+\cdots+k_m\alpha_m
$$

is a linear combination of $\alpha_1,\ldots,\alpha_m$.

A vector $\beta$ is linearly representable by $\alpha_1,\ldots,\alpha_m$ if scalars $k_1,\ldots,k_m$ exist such that

$$
\beta=k_1\alpha_1+\cdots+k_m\alpha_m.
$$

This is equivalent to $\beta\in\operatorname{span}\{\alpha_1,\ldots,\alpha_m\}$.

### 11.3.2 Linear Dependence

##### **Definition**: #linear-dependence

The vector set $\alpha_1,\ldots,\alpha_m$ is linearly dependent if scalars $k_1,\ldots,k_m$, not all zero, satisfy

$$
k_1\alpha_1+\cdots+k_m\alpha_m=0.
$$

Equivalently, at least one vector in the set can be expressed as a linear combination of the others.

- Any vector set containing the zero vector is linearly dependent.
- Any vector set containing two proportional vectors is linearly dependent.

### 11.3.3 Linear Independence

##### **Definition**: #linear-independence

The vector set $\alpha_1,\ldots,\alpha_m$ is linearly independent if

$$
k_1\alpha_1+\cdots+k_m\alpha_m=0
$$

implies

$$
k_1=k_2=\cdots=k_m=0.
$$

A single nonzero vector is linearly independent. Two vectors are linearly independent if and only if neither is a scalar multiple of the other.

## 11.4 Criteria and Useful Theorems

### 11.4.1 Removing or Adding a Vector

##### **Theorem**: #dependence-criterion

For a set containing at least two vectors, the following are equivalent:

1. the set is linearly dependent;
2. at least one vector is a linear combination of the remaining vectors.

##### **Theorem**: #unique-representation

If $\alpha_1,\ldots,\alpha_m$ is linearly independent but $\alpha_1,\ldots,\alpha_m,\beta$ is linearly dependent, then

$$
\beta=k_1\alpha_1+\cdots+k_m\alpha_m
$$

for a unique set of coefficients $k_1,\ldots,k_m$.

### 11.4.2 Comparing the Sizes of Vector Sets

##### **Theorem**: #dimension-bound

If each of the $t$ vectors $\beta_1,\ldots,\beta_t$ can be represented by $\alpha_1,\ldots,\alpha_s$ and $t>s$, then $\beta_1,\ldots,\beta_t$ is linearly dependent.

Equivalently, if $\beta_1,\ldots,\beta_t$ is linearly independent and lies in the span of $\alpha_1,\ldots,\alpha_s$, then $t\le s$.

### 11.4.3 Dependence, Homogeneous Systems, and Rank

Let

$$
A=
\begin{bmatrix}
\alpha_1&\alpha_2&\cdots&\alpha_m
\end{bmatrix}.
$$

Then

$$
Ax
=
\begin{bmatrix}
\alpha_1&\alpha_2&\cdots&\alpha_m
\end{bmatrix}
\begin{bmatrix}
x_1\\x_2\\\vdots\\x_m
\end{bmatrix}
=x_1\alpha_1+\cdots+x_m\alpha_m.
$$

Therefore,

$$
\alpha_1,\ldots,\alpha_m
\text{ are linearly dependent}
\iff
Ax=0
\text{ has a nonzero solution}
\iff
\operatorname{rank}(A)<m.
$$

If the number of unknowns exceeds the number of equations in a homogeneous system, then the system has a nonzero solution. For $n$ vectors in $\mathbb R^n$,

$$
\alpha_1,\ldots,\alpha_n
\text{ are linearly independent}
\iff
\det\begin{bmatrix}\alpha_1&\cdots&\alpha_n\end{bmatrix}\ne0.
$$

### 11.4.4 Linear Representability and Rank

The vector $\beta$ is linearly representable by $\alpha_1,\ldots,\alpha_s$ if and only if

$$
\begin{bmatrix}\alpha_1&\cdots&\alpha_s\end{bmatrix}x=\beta
$$

is consistent. By the rank criterion,

$$
\operatorname{rank}
\begin{bmatrix}\alpha_1&\cdots&\alpha_s\end{bmatrix}
=
\operatorname{rank}
\begin{bmatrix}\alpha_1&\cdots&\alpha_s&\beta\end{bmatrix}.
$$

### 11.4.5 Subsets, Supersets, and Coordinate Extensions

- If a subset of a vector set is linearly dependent, the whole set is linearly dependent.
- Every subset of a linearly independent set is linearly independent.
- If linearly independent $n$-dimensional vectors are extended by appending the same number of additional components to each vector, the resulting higher-dimensional vectors remain linearly independent.
- If a vector set is linearly dependent, deleting the same components from every vector leaves a linearly dependent set.

These statements are often summarized as follows: dependence passes to supersets, independence passes to subsets, coordinate extension preserves independence, and coordinate deletion preserves dependence.
