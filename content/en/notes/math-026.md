---
title: "Lecture 18: Higher-Order Derivatives"
slug: math-026
description: "Graduate Entrance Examination Mathematics study notes: Lecture 18: Higher-Order Derivatives. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2023-12-18
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Derivatives and Differentials"]
---

## 1.1 Definition of Multi-Order Derivatives
**Representation of Multi-Order Derivatives**
$(y^{\prime})^{\prime}=y^2=\frac{d^2y}{dx^2}\quad\quad y^{m}\quad\quad y^{(4)}\quad\quad y^{(n)}=\frac{d^ny}{dx^n}$

#####**Definition**: #Advancedderivatives
> <font color="#ccc1d9"> Description: </font> Specifically, the definition of an n-th order derivative is:
> Definition 1: $f^{(n)}(x_0)=\lim_{\Delta x\to0}\frac{f^{(n-1)}(x_0+\Delta x)-f^{(n-1)}(x_0)}{\Delta x}$
> Definition 2: $f^{(n)}(x_0)=\lim_{x\to x_0}\frac{f^{(n-1)}(x)-f^{(n-1)}(x_0)}{x-x_0}$

**Explanation**
- Conclusion:
	- If function $f(x)$ is n-th differentiable at x, then in some neighborhood of x, $f(x)$ must have all derivatives below n-th order**;
- Concept:
	- If $f^{(n)}(x)$ is continuous on interval $I$, $f(x)$ is said to be n-th-order continuously differentiable on $I$
	- The n-th derivative exists, and it is continuous;

## 1.2 Common Ways to Find the n-th Order Derivative
### 1.2.1 Common Conclusions
**Common Ways to Find n-th Order Derivatives**
- Index
	- $(e^{x})^{(n)}=e^{x}$
- Trigonometric function
	- $(\sin x)^{(n)}=\sin(x+n\frac\pi2)$
	- $(\cos x)^{(n)}=\cos(x+n\frac{\pi}{2})$
- In function
	- $(\ln(1+x))^{(n)}=(-1)^{n-1}\frac{(n-1)!}{(1+x)^n}$
- Addition
	- $(u\pm v)^{(n)}=u^{(n)}\pm v^{(n)}$
- Multiplication
	- Leibniz formula
	- $(uv)^{(n)}=\sum_{k=0}^n\binom{n}{k}u^{(k)}v^{(n-k)}$

**Example Question**: $\text{ Let }f(x)=\frac1{x^2-1}\text{ , please }f^{(n)}(x)$
Approach: Since addition or multiplication formulas cannot be used directly, the denominator needs to be factored and split:
- $\begin{aligned}f(x)&=\frac{1}{(x-1)(x+1)}=\frac{1}{2}\frac{(x+1)-(x-1)}{(x-1)(x+1)}\\&=\frac{1}{2}\left[\frac{1}{x-1}-\frac{1}{x+1}\right]\end{aligned}$
After the split, use the n-th order derivative of addition:
- $f^{(n)}(x)=\frac12\left[(\frac1{x-1})^{(n)}-(\frac1{x+1})^{(n)}\right]$
- Then let's analyze one first: $(\frac1{x-1})^{(n)}=(-1)^nn!(x-1)^{-(n+1)}$
- $f^{(n)}(x)=\frac{1}{2}\left[\frac{(-1)^{n}n!}{(x-1)^{n+1}}-\frac{(-1)^{n}n!}{(x+1)^{n+1}}\right].$

### 1.2.2 Higher-Order Differentiation of Composite Functions
**Example**: For example, find the derivative of $y=sin3x$;
- Here, sinx has a corresponding formula for the higher-order derivative derivative but compounds 3x;
- In this case, you can set u = 3x and then use the principle of differentiation with composite functions to propose the compound part caused by u, then substitute the original higher-order derivative formula;

## 1.3 Frequently Tested Question Types
### Question Type: #Higherorderderivativestofindthedifferentiation
#### PART 1: Problem-solving methods
**Basic Approach**
- 1. If you have a formula, substitute it;
	- Find the n-th order derivative $f^{(n)}(x)$
- 2. If there is no formula, substitute the first and second order derivatives to find general patterns;
	- Find the n-th order derivative $f^{(n)}(x)$
- 3. Expand using Taylor's formula
	- Specify the point: $f^{(n)}(x_0)$ Develop Taylor at this point

#### PART 2: Typical Example Problems
**Example Question**: $\text{ Let the function be }\quad y=\frac1{2x+3},\quad\text{ then }y^{(n)}(0)=$?
- Analysis
- Analysis
	- Method 1: Find patterns
		- $\begin{aligned}&y^{\prime}=(-1)(2 x+3)^{-2}\cdot 2 \\&y^{\prime\prime}=(-1)(-2)(2 x+3)^{-3}\cdot 2^{2} \\&y^{(n)}=(-1)^{n}n! (2 x+3)^{-(n+1)}. 2^{n}\end{aligned}$
		- Then substitute the derivative from point 0 to order n;
	- Method 2: Use Taylor
		- $f(x)=f(0)+f^{\prime}(0)x+\frac{f^{\prime\prime}(0)}{2!}x^2+\cdots$
- Question Type: #Higherorderderivativestofindthedifferentiation
