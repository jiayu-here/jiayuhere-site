---
title: "Lecture 20: Differentials of Functions"
slug: math-028
description: "Graduate Entrance Examination Mathematics study notes: Lecture 20: Differentials of Functions. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2023-12-22
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Derivatives and Differentials"]
---

## 1.1 Definition of a Differential
### 1.1.1 Why Differentials Are Useful
**Core Idea**
- A differential is the linear part of a small change in a function. It approximates the actual increment when the independent-variable increment is small.
- A derivative describes an instantaneous rate of change; a differential uses that rate to approximate an actual small change.

**Example**
- Let $f(x)=x^2$. At $x_0$,
  $$\Delta y=f(x_0+\Delta x)-f(x_0)
  =2x_0\Delta x+(\Delta x)^2.$$
- As $\Delta x\to0$, the term $(\Delta x)^2$ is of higher order than $\Delta x$, so
  $$\Delta y\approx2x_0\Delta x.$$
- The linear term is the differential:
  $$dy=f'(x_0)\,dx=2x_0\Delta x,\qquad dx=\Delta x.$$
- This approximation is useful in error estimation.
	- ![Pasted image 20231222204211](/assets/notes/2b43afc69f73-Pasted-image-20231222204211.png)

**Relationship Between a Derivative and a Differential**
- The derivative $f'(x_0)$ is the local rate of change.
- The actual increment is $\Delta y=f(x_0+\Delta x)-f(x_0)$.
- The differential $dy=f'(x_0)\Delta x$ is the linear principal part of $\Delta y$.
- Therefore,
  $$\frac{dy}{dx}=f'(x_0).$$

### 1.1.2 Formal Definition
#####**Definition**: #Differential
> <font color="#ccc1d9">Description:</font> If
> $$f(x_0+\Delta x)-f(x_0)=A\Delta x+o(\Delta x)\qquad(\Delta x\to0),$$
> then $f$ is differentiable at $x_0$. Its differential is
> $$dy=A\Delta x.$$

**Explanation**
- The term $A\Delta x$ is the linear principal part of $\Delta y$.
- The remainder $o(\Delta x)$ is a higher-order infinitesimal.
- Hence
  $$\Delta y=dy+o(\Delta x),\qquad dy\approx\Delta y.$$

**Geometric Meaning**
- For the curve $y=f(x)$, $dy=f'(x_0)dx$ is the vertical increment along the tangent line at $x_0$ corresponding to a horizontal increment $dx$.

### 1.1.3 Differentiability and Existence of the Derivative
#####**Theorem**: #DifferentiabilityAndDerivative
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> For a single-variable function, $f$ is differentiable at $x_0$ if and only if $f'(x_0)$ exists. In that case,
> $$dy=f'(x_0)\,dx.$$

## 1.2 Continuity, Differentiability, and the Derivative
**Illustration**
![Pasted image 20240317192744](/assets/notes/fdce7bdf7363-Pasted-image-20240317192744.png)

**Main Relationships**
- Differentiability at $x_0$ implies continuity at $x_0$.
- Continuity does not imply differentiability. For example, $f(x)=|x|$ is continuous at $0$, but its one-sided derivatives are $-1$ and $1$.
- Existence of $f'(x_0)$ does not imply that $f'$ is continuous at $x_0$.
- Existence of $f''(x_0)$ does not by itself imply that $\lim_{x\to x_0}f''(x)$ exists.

**Proof That Differentiability Implies Continuity**
- If $f'(x_0)$ exists, then
  $$\Delta y=\frac{\Delta y}{\Delta x}\Delta x.$$
- As $\Delta x\to0$, the difference quotient tends to the finite number $f'(x_0)$, while $\Delta x\to0$. Therefore $\Delta y\to0$, which is continuity at $x_0$.

![Pasted image 20240317190353](/assets/notes/9c7ffc616e35-Pasted-image-20240317190353.png)

**How to Test Differentiability**
- If the function is discontinuous at the point, it is not differentiable there.
- If it is continuous, differentiability still must be checked:
	- use the derivative definition; or
	- verify that the left- and right-hand derivatives both exist and are equal.

### 1.2.2 Repeated Use of L'Hôpital's Rule
1. Reapply the rule only while the expression remains of type $0/0$ or $\infty/\infty$ and all hypotheses of the rule continue to hold.
2. At every application, check that the derivative of the denominator is nonzero in a punctured neighborhood and that the new derivative ratio has a limit.

## 1.3 Supplement: Historical View of Differentials
### 1.3.1 Classical Calculus
**Characteristics**
![Pasted image 20240115172004](/assets/notes/f0aa42b96531-Pasted-image-20240115172004.png)
1. Early calculus treated $dx$ and $dy$ as infinitesimal changes.
2. Tangents were described using these infinitesimals.
3. The derivative was interpreted as the tangent slope $dy/dx$.

![Pasted image 20240115171900](/assets/notes/ee9f6882b9dd-Pasted-image-20240115171900.png)

### 1.3.2 Limit-Based Definition
Limits provide a precise meaning for infinitesimals: a quantity is infinitesimal when its limit is zero.

![Pasted image 20240115172055](/assets/notes/6fc2f7173e64-Pasted-image-20240115172055.png)

**Modern Interpretation**
- In general, $dy$ is not identical to $\Delta y$.
- Instead,
  $$\Delta y=dy+o(dx),\qquad dy\approx\Delta y\quad(dx\to0).$$
- Thus the differential is the best linear approximation to the actual increment.

![Pasted image 20240115172447](/assets/notes/5a1425cca2ba-Pasted-image-20240115172447.png)
