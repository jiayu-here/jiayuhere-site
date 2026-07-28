---
title: "Lecture 13: Points of Discontinuity and Their Classification"
slug: math-021
description: "Graduate Entrance Examination Mathematics study notes: Lecture 13: Points of Discontinuity and Their Classification. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-03-11
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 13.1 Discontinuity and Its Classification
### 13.1.1 Definition
#####**Definition**: #Discontinuity
> <font color="#ccc1d9">Description:</font> If $f(x)$ is defined in a punctured neighborhood of $x_0$ but is not continuous at $x_0$, then $x_0$ is a discontinuity of $f$.

**Explanation**
- 1. The function must be defined in some punctured neighborhood of $x_0$.
- 2. If it is not continuous at $x_0$, then $x_0$ is a discontinuity.

**Classification of Discontinuities**
- 1. A discontinuity of the first kind: both one-sided limits exist and are finite.
	- Removable discontinuity: the left- and right-hand limits are equal.
	- Jump discontinuity: the left- and right-hand limits are unequal.
- 2. A discontinuity of the second kind: at least one one-sided limit does not exist as a finite number.
	- Infinite discontinuity: for example, $f(x)=1/x$ at $x=0$.
	- Oscillatory discontinuity: for example, $f(x)=\sin(1/x)$ at $x=0$.
	- Infinite and oscillatory discontinuities are common cases, but they are not the only possibilities.

**Situations That Commonly Require One-Sided Limits**
- 1. Boundary points of piecewise-defined functions.
- 2. Expressions involving $e^x$ as $x\to\pm\infty$.
- 3. Expressions involving $\arctan x$ as $x\to\pm\infty$.

### 13.1.2 Example Problems
**Example Question**: For $f(x)=\dfrac{\ln|x|}{|x-1|}\sin x$, find and classify its discontinuities.
- Analysis
	- The function is undefined at $x=0$ and $x=1$.
	- At $x=0$, since $\sin x\sim x$ and $|x-1|\to1$,
	  $$\lim_{x\to0}\frac{\ln|x|}{|x-1|}\sin x
	  =\lim_{x\to0}x\ln|x|=0.$$
	  Therefore, $x=0$ is a removable discontinuity.
	- At $x=1$, since $\ln x\sim x-1$,
	  $$\lim_{x\to1^-}f(x)=-\sin1,\qquad
	  \lim_{x\to1^+}f(x)=\sin1.$$
	  The one-sided limits are finite but unequal, so $x=1$ is a jump discontinuity.
- Question Type: #Discontinuity
