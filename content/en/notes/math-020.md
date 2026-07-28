---
title: "Lecture 12: Continuity of functions"
slug: math-020
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 12: Continuity of Functions. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-03-11
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 12.1 Assessment Content
- Content
	- 1. The concept of continuity;
	- 2. Breaks and their classification;
	- 3. Operations and properties of continuity;
	- 4. Properties of continuous functions on closed intervals;
- Question type
	- Question Type 1: Discuss the types of function continuity and discontinuity;
	- Problem Type 2: Proof problems with properties of continuous functions on closed intervals;

## 12.2 The Concept of Continuity
#####**Definition**: #Continuity
> <font color="#ccc1d9"> description: </font>
> Definition 1: $y=f(x)$ is continuous at $x_0$ if $\lim_{\Delta x\to0}[f(x_0+\Delta x)-f(x_0)]=0$.
> Definition 2: $y=f(x)$ is continuous at $x_0$ if $\lim_{x\to x_0}f(x)=f(x_0)$.

**Explanation**
- Equivalent form: $y=f(x)$ is continuous at $x_0$ iff $\lim_{x\to x_0}f(x)=f(x_0)$.
- Left and right continuous:
	- 1. Left continuous: $\lim_{x\to x^-_0}f(x)=f(x_0)$
	- 2. Right continuous: $\lim_{x\to x^+_0}f(x)=f(x_0)$
- $f(x)$ Sufficient and necessary conditions for continuity: $f(x)$**Left continuous and right continuous**,**left and right continuous are equal**;

**Inner and Outer Continuities**
- Inner continuous: every point in $(a,b)$ is continuous;
- Outer continuous: Every point in $[a,b]$ is continuous, and point a is continuous to the right and point b to the left;

**Continuous within the range**
- A function is continuous within an interval = all points on the interval are continuous =**The left and right limits of all points exist and are equal, and the function value equals this point**;

### Question Type: #Discussthecontinuityoffunctionsandtypesofdiscontinuities
#### PART 1: Problem-solving methods
- When discussing the continuity of functions, it is necessary to clearly describe which points are discontinuous and why they are continuous on other intervals;

#### PART 2: Typical Example Problems
**Example Problem**: $\text{ Known }f(x)=\begin{cases}(\cos x)^{1/x^2},x\neq0,\\a,&x=0&\end{cases}$, then continue at x=0, then find a;
- Analysis
	- Because it is continuous at x=0, the limit value of this point exists and is equal;
- Analysis
	- $\lim_{x\to0}f(x)=\lim_{x\to0}(nx)^{\frac12}=\lim_{x\to0}[1+(ax-1)]^{\frac1{x^2}}=e^{-\frac12}=f(0)=0,$
- Question Type: #

**Example Question**: $f(x)=\lim_{n\to\infty}\frac{1+x}{1+x^{{2n}}}$, discuss the breakpoint of the function;
- Analysis
- Analysis
	- First, segment it to get: $f(x)=\begin{cases}1+x&|x|<1\\0&|x|>1\\1&x=1\\0&x=-1\end{cases}$
	- 0 points continuous, 1 point discontinuous;
	- Therefore: there exists a discontinuity point x=1;
- Question Type: #
