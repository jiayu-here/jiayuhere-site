---
title: "Lecture 14: Vector Spaces"
slug: math-083
description: "Postgraduate Entrance Exam Mathematics study notes: Lecture 14: Vector Spaces. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics", "Linear Algebra", "Vector Sets"]
---

## 14.1 Bases, Dimension, and Coordinates

##### **Definition**: #basis

If the ordered vectors $\xi_1,\xi_2,\ldots,\xi_n$ are linearly independent in $\mathbb R^n$, they form a basis of $\mathbb R^n$. Every vector $\alpha\in\mathbb R^n$ has a unique representation

$$
\alpha=a_1\xi_1+a_2\xi_2+\cdots+a_n\xi_n.
$$

The column vector

$$
x=
\begin{bmatrix}
a_1\\a_2\\\vdots\\a_n
\end{bmatrix}
$$

is the coordinate vector of $\alpha$ relative to the basis $\xi_1,\ldots,\xi_n$. The number $n$ of basis vectors is the dimension of the vector space.

## 14.2 Changes of Basis and Coordinates

##### **Theorem**: #change-of-basis

Let

$$
\mathcal B_\xi=(\xi_1,\ldots,\xi_n),
\qquad
\mathcal B_\eta=(\eta_1,\ldots,\eta_n)
$$

be two bases of $\mathbb R^n$. If

$$
\begin{bmatrix}
\eta_1&\eta_2&\cdots&\eta_n
\end{bmatrix}
=
\begin{bmatrix}
\xi_1&\xi_2&\cdots&\xi_n
\end{bmatrix}C,
$$

then $C$ is the transition matrix from $\mathcal B_\xi$ to $\mathcal B_\eta$. Its $i$th column is the coordinate vector of $\eta_i$ relative to the old basis $\mathcal B_\xi$. Because both ordered sets are bases, $C$ is invertible.

##### **Theorem**: #coordinate-transformation

If the same vector $\alpha$ has coordinate vectors $x$ and $y$ relative to the two bases, then

$$
\alpha
=
\begin{bmatrix}\xi_1&\cdots&\xi_n\end{bmatrix}x
=
\begin{bmatrix}\eta_1&\cdots&\eta_n\end{bmatrix}y.
$$

Using the change-of-basis equation gives

$$
x=Cy,
\qquad
y=C^{-1}x.
$$

Thus $C$ converts new-basis coordinates $y$ to old-basis coordinates $x$, while $C^{-1}$ performs the reverse conversion.

**Two-dimensional example**

Let

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

Then

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

- Original illustration:
  - ![Change-of-basis diagram](/assets/notes/609bf8645698-Drawing-2024-06-29-19.34.16.excalidraw.png)

## 14.3 Gram-Schmidt Orthogonalization

##### **Theorem**: #Gram-Schmidt-process

Given linearly independent vectors $\alpha_1,\ldots,\alpha_m$, define

$$
\beta_1=\alpha_1,
$$

and, for $k=2,\ldots,m$,

$$
\beta_k
=
\alpha_k
-\sum_{j=1}^{k-1}
\frac{\langle\alpha_k,\beta_j\rangle}
{\langle\beta_j,\beta_j\rangle}
\beta_j.
$$

The vectors $\beta_1,\ldots,\beta_m$ are mutually orthogonal and span the same subspace as the original vectors. Normalizing them,

$$
e_k=\frac{\beta_k}{\|\beta_k\|},
$$

produces an orthonormal set.
