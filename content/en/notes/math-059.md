---
title: "Lecture 51: Expanding Functions into Power Series"
slug: math-059
description: "Postgraduate Entrance Exam Mathematics study notes: Lecture 51: Expanding Functions into Power Series. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-15
tags: ["Graduate Entrance Examination Mathematics", "Advanced Mathematics", "Infinite Series"]
---

## 51.1 Expanding Functions into Power Series

### 51.1.1 Taylor Series

**Why use a power-series expansion?**

- Some functions have no elementary antiderivative; $e^{x^2}$ is a standard example. After expansion, the series can be differentiated or integrated term by term within its interval of convergence.
- A power series is also useful for numerical approximation. For example,

$$
e^{0.2}=1+0.2+\frac{0.2^2}{2!}+\frac{0.2^3}{3!}+\cdots.
$$

Keeping finitely many terms gives an approximation at the required accuracy.

##### **Theorem**: #power-series-expansion

If $f(x)$ can be represented on $(x_0-R,x_0+R)$ by a power series in $x-x_0$, that representation is unique and must be the Taylor series of $f$ about $x_0$:

$$
f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.
$$

##### **Theorem**: #Taylor-series-convergence

Suppose that $f$ has the required derivatives in a neighborhood of $x_0$. Taylor's formula is

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+R_n(x).
$$

With the Lagrange remainder,

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1},
$$

where $\xi$ lies between $x$ and $x_0$. At a given $x$, the Taylor series converges to $f(x)$ if and only if $\lim_{n\to\infty}R_n(x)=0$.

### 51.1.2 Common Power-Series Expansions

$$
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n,\qquad |x|<1.
$$

$$
\frac{1}{1+x}=\sum_{n=0}^{\infty}(-1)^n x^n,\qquad |x|<1.
$$

$$
e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!},\qquad x\in\mathbb R.
$$

$$
\sin x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!},\qquad x\in\mathbb R.
$$

$$
\cos x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!},\qquad x\in\mathbb R.
$$

$$
\ln(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}x^n,\qquad -1<x\le1.
$$

$$
(1+x)^\alpha
=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots,\qquad |x|<1.
$$

$$
\sum_{n=1}^{\infty}\frac{x^n}{n}=-\ln(1-x),\qquad -1\le x<1.
$$

Endpoint convergence must be checked separately; it cannot be inferred from the open interval alone.

### 51.1.3 Two Expansion Methods

**Method 1: Direct expansion**

1. Compute $f^{(n)}(x_0)$ and write the formal Taylor series

$$
\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.
$$

2. Verify that $\lim_{n\to\infty}R_n(x)=0$ and determine the interval of convergence.

**Method 2: Indirect expansion**

Start from a known expansion and use algebraic operations, term-by-term differentiation, term-by-term integration, or substitution. Track the resulting interval of convergence and check its endpoints after every transformation.

## 51.2 Common Question Types

### Question Type 1: #expanding-a-function

- Try indirect expansion first, because repeated differentiation is often cumbersome.
- For an expansion about $x=x_0$, rewrite the expression in terms of $x-x_0$.
- For example, to expand $\sin x$ about $x_0=\frac{\pi}{4}$, let $u=x-\frac{\pi}{4}$:

$$
\sin x
=\sin\left(\frac{\pi}{4}+u\right)
=\frac{\sqrt2}{2}\left(\cos u+\sin u\right),
$$

then substitute the Maclaurin series for $\cos u$ and $\sin u$.

**Useful transformations**

To apply the geometric series, rewrite an expression in the form

$$
\frac{1}{1-u(x)}
\quad\text{or}\quad
\frac{1}{1+u(x)},
$$

and first verify that $|u(x)|<1$.

### Question Type 2: #summing-a-series

A known expansion can be read in reverse to evaluate a series. For example,

$$
\frac{1}{1-x}=1+x+x^2+\cdots,\qquad |x|<1,
$$

and

$$
\sum_{n=1}^{\infty}\frac{x^n}{n}=-\ln(1-x),\qquad -1\le x<1.
$$

Typically, differentiate or integrate the target series term by term until it matches a known expansion, then use an initial value to determine the constant of integration.
