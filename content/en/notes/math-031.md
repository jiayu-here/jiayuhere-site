---
title: "Lecture 23: Taylor's Formula"
slug: math-031
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 23: Taylor's Formula. Original formulas, illustrations, and example problems are retained."
category: "Mathematics"
date: 2024-01-12
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Mean Value Theorems and Applications of Derivatives"]
---

The role of Taylor's formula: establishing the relationship between higher-order derivatives and functions, using higher-order derivatives to study functions;
## 1.1 What is Taylor's Formula?
- Popular Science Article: [(99+ private messages / 85 messages) How to explain Taylor's formula in simple terms? - Zhihu (zhihu.com)](https://www.zhihu.com/question/21149770)
**What is Taylor's Formula**
- Essence: This is about using polynomial functions to approximate smooth functions
- Explanation: Complex equations are approximated using a series of simple, computable equations. For example, turning the area of an irregular figure into the area of a series of (many) squares and then adding them together;

### 1.1.1 Definition of Taylor's Formula
#####**Theorem**: Taylor's Theorem - with the remainder of Peano
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> Taylor's formula with Peano remainder: Suppose $f(x)$ is differentiable in $n$ order at $x_0$, then $$f(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o((x-x_0)^n)$$


**Explanation**
- Meaning:
	- Write a general function as a ` general polynomial + remainder `;
- Additional items:
	- $$P_n(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$$
- $f(x)$ n Taylor polynomials at $x_{0}$:
	- $$R_n(x)=o((x-x_0)^n)$$
- Disadvantages:
	- 1. Only qualitative descriptions of the remaining items can be given, not quantitative analysis;
	- 2. It can only be used when x0 is approaching; it cannot be used from a distance;

**Additional Information**
- First, the relationship between functions and differentials
	- If $f(x)$ is differentiable at $x_0$, then $\Delta y\approx dy$
	- $f(x)\approx f(x_0)+f^{\prime}(x_0)(x-x_0)$
- At this point, it is approximately equal to, because geometrically, $f^{\prime}(x_0)(x-x_0)$ actually uses a straight line to simulate the value of the curve;
- Therefore, a single differentiation can be performed using higher-order infinitesimals to further approximate the value of the curve, i.e., the value of f(x).
	- $f(x)=f(x_0)+f^{\prime}(x_0)(x-x_0)+o(x-x_0)$
- If $f(x)$ is n-th differentiable at $x_0$, does there exist an n-th degree polynomial $P_n(x)=a_0+a_1(x-x_0)+a_2(x-x_0)^2+\cdots+a_n(x-x_0)^n$ such that:
	- $f(x)=P_n(x)+o((x-x_0)^n)$
- Therefore, we get $a_0=f(x_0),\quad a_k=\frac{f^{(k)}(x_0)}{k!}\quad k=1,2\cdots n$
- So: $P_n(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$

#####**Theorem**: Taylor's Formula - Lagrange
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> Let $f(x)$ be in the interval $I$ and $n+1$ order is differentiable $,  x_0\in I, $ then $\forall x\in I,  \exists\xi\in I\quad(\xi$ is between $x_0$ and $x$), making $$f(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}\big(x-x_0\big)^k+\frac{f^{(n+1)}(\xi)}{(n+1)!}\big(x-x_0\big)^{n+1}$$
> Taylor's formula with Lagrangian remainders:
> $$R_{n}(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_{0})^{n+1}$$

**Explanation**
- Provides the specific expression for the remaining terms
- Quantitative analysis can be performed under given conditions;
	- It guarantees error, with zero as x0 approaches zero;

**Corollary 1**: Taylor's formula for zero
$\begin{gathered}\text{If }x_0=0,\text{ then}\\f(x)=f(0)+f^{\prime}(0)x+\frac{f^{\prime\prime}(0)}{2!}x^2+\cdots+\frac{f^{(n)}(0)}{n!}x^n+\frac{f^{(n+1)}(\theta x)}{(n+1)!}x^{n+1},\quad0<\theta<1.\\\text{This is the Maclaurin formula for }f(x).\end{gathered}$

**Corollary 2**: Maclaurin formulas for several elementary functions
- $e^x=1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}+\frac{x^{n+1}}{(n+1)!}e^{\theta x}\quad\quad x\in(-\infty,+\infty)$
	- Because the derivative of e is still itself, so for each order of derivative, use 1 to substitute;
- $\sin x=x-\frac{x^3}{3!}+\cdots+\left(-1\right)^{m-1}\frac{x^{2m-1}}{\left(2m-1\right)!}+\left(-1\right)^m\frac{\cos\theta x}{\left(2m+1\right)!}x^{2m+1}$
- $\begin{aligned}(1+x)^\alpha&=1+cx+\cdots+\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n\\&+\frac{\alpha(\alpha-1)\cdots(\alpha-n)(1+\beta x)^{x-n-1}}{(n+1)!}x^{n+1}\quad x\in(-1,+\infty)\end{aligned}$

## 1.2 Content Summary
### 1.2.1 Commonalities
**Commonalities**
- 1. Use simple polynomial functions to approximate general functions;
- 2. Functions are associated with higher-order derivatives;
- Conclusion:
	- 1. When the problem requires**studying higher-order derivatives**, Taylor's formula is often used;
	- 2. If the study is a local property `->` Taylor's formula for the remaining Peano terms;
	- 3. If the study is global properties `->` the Taylor formula for the remaining Lagrange

**Core**: Both Taylor formulas write f(x) as**one polynomial + one remainder**;
- Peano Remaining Terms
	- $R_n(x)=o((x-x_0)^n)$
- Lagrange remainder
	- $R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$

**Essence**: Use polynomials to approximate the value of f(x) `->` Use known point information to represent unknown points;
- Why? Because solving polynomials is simple

### 1.2.2 Analysis of the Use of Two Taylor Formulas
**Differences**
- Other items differ

**Peano**: Qualitative, local description `->` Study the local morphology of functions using the Peano formula
- 1. Study the limits of the function approaching a point;
- 2. Study the extremum of the function;

**Lagrange**: A quantitative, overall description
- 1. Study maximum/minimum;
- 2. Proving inequalities `->` studying an interval;

**Supplement**: A special case of Taylor's theorem when it comes to Lagrange's mean value theorem;
- The four major mean value theorems:
	- The first three establish the relationship between $f(x)$ and the first derivative;
	- Taylor's Theorem: Study the relationship between $f(x)$ and higher-order derivatives
- Commonality: Studying the relationship between functions and derivatives, laying the foundation for**using derivatives to study functions**;

## 1.3 Example Problems
**Example Question**: $\text{ Find the limit }\lim_{x\to0}\frac{\cos x-e^{-\frac{x^2}2}}{x^4}$
- Analysis
	- The expression has type $0/0$, but L'Hôpital's rule is not the intended method here.
	- So you can consider using Taylor
	- Since it is a limit, local Taylor's formula is used
	- Since x is to the fourth power, write it as four terms;
- Analysis
	- Solution process:
	- $cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}+o\left(x^4\right)$
	- Because:
		- $\mathbb{e}^x=1+x+\frac{\mathbb{x}}{2_1^2}$
		- De: $e^{-\frac{X^{2}}{2}}=1-\frac{X^{2}}{2}+\frac{1}{2!}\left(-\frac{X^{2}}{2}\right)^{2}+o(X^{4})$
	- Therefore, we have the original expression =
		- $\operatorname*{lim}_{x\rightarrow0}\frac{-\frac{1}{12}x^{4}+0(x^{4})}{x^{4}}=-\frac{1}{12}$
