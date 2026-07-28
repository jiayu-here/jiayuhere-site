---
title: "Lecture 8: Infinitesimals and Infinite Quantities"
slug: math-016
description: "Graduate Entrance Examination Mathematics study notes: Lecture 8: Infinitesimals and Infinite Quantities. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-03-01
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 8.1 Infinitesimal
### 8.1.1 Basic Concepts
#####**Definition**: #infinitelysmall
> <font color="#ccc1d9"> Description: </font> if the function $f(x)$ has zero limit at $x\to x_0($ or $x\to\infty)$, then $f(x)$ is called an infinitesimal at $x\to x_0($ or $x\to\infty)$.

### 8.1.2 Comparison of infinitesimals
-**Iso-order**infinitesimal: $\alpha(x)\text{ and }\beta(x)$ The result of division is**constant C**(C is not equal to 0);
-**Equivalent**infinitesimal: $\alpha(x)\text{ and }\beta(x)$ divide by**constant 1**;
- Higher-order infinitesimal: $\alpha(x)\text{ and }\beta(x)$ divide by 0; can be denoted as: $\alpha(x)=o(\beta(x))$
- Low-order infinitesimals: $\alpha(x)\text{ and }\beta(x)$ divide by the opposite order is infinite;
- $\text{ If }\lim\frac{\alpha (x)^{\color{red}{}}}{\left[\beta (x)\right]^{k}\color{red}}=C\neq 0,\text{ Said }$ α is the k-th order infinitesimal of β;

### 8.1.3 Properties of infinitesimals
-**Property 1:****The sum of infinitesimals**is still infinitesimal;
-**Property 2:****The product of finite**infinitesimals is still infinitesimal;
-**Property 3:**The product of infinitesimals and**bounded quantities**is infinitesimal;

## 8.2 Infinity
### 8.2.1 Basic Concepts
#####**Definition**: #infinitelylarge
> <font color="#ccc1d9"> Description: </font> if the function $f(x)$ has an infinite limit at $x\to x_0($ or $x\to\infty)$, then $f(x)$ is called an infinite quantity at $x\to x_0($ or $x\to\infty)$.

**Explanation**
- For every $M>0$, there is a $\delta>0$ such that $0<|x-x_0|<\delta$ implies $|f(x)|>M$.

### 8.2.2 Comparison of Common Infinity
**Concept**: Function limit
- When x approaches infinity:
- $$\ln^{\alpha}x<<x^{\beta}<<a^{x}$$
- Among them, $\alpha>0,\beta>0,a>1$
- Example:
	- So $\lim_{x\to+\infty}\frac{\ln x}{x}=0$;

**Concept**: Sequence limits
- Sequence limit: $n\to\infty$
- $$\ln^\alpha n<<n^\beta<<a^n<<n!<<n^n$$
- Where $\alpha>0,\beta>0,a>1$;

### 8.2.3 Properties of Infinity
-**Property 1:**The sum of finite positive infinity is infinity;
-**Property 2:**The**product**of finite infinity is still infinite;
-**Property 3:**The sum of infinite quantities and**bounded variables**remains infinitely large;

### 8.2.4 Infinite Quantity and Unbounded Variables
- 1. A sequence $\{x_n\}$ tends to infinity in magnitude if, for every $M>0$, there is an $N$ such that $n>N$ implies $|x_n|>M$.
	- $|x_n|$ All values after N are very large;
- 2. $\text{ Sequence }\left\{x_n\right\}\text{ It is an unbounded variable }$：$\forall\boldsymbol{M}>\boldsymbol{0},\exists N>\boldsymbol{0},\text{ Envoy }|x_N|>\boldsymbol{M}$
	- $|x_n|$ There exists a value at n greater than M, but not necessarily many terms are greater than M;
	- Example: $x_n=\begin{cases}n,&n\text{ which is an odd number }\\\mathbf{0},&n\text{ and the number is even }\\\end{cases}$ is an unbounded variable, but not infinite;
- 1 can be inferred from 2, 2 cannot be deduced from 1;
- $\text{ Infinite and vast }\Rightarrow\textbf{ \text{ Unbounded variable }}$

## 8.3 The Relationship Between Infinity and Infinitesimal
- In the same limiting process, if $f(x)$ is infinite, then $1 / f(x)$ is infinitesimal;
- In the same limiting process, if $f(x)$ is infinitesimal and $f(x)$ is not zero, then $1 / f(x)$ is infinite;
