---
title: "Lecture 6: Properties of Function Limits"
slug: math-014
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 6: Properties of Function Limits. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-02-28
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 6.1 Limiting Properties
### 6.1.1 Boundedness
**Sequences**
- $\text{ If the sequence is }\left\{x_n\right\}\text{ Convergence, then the sequence }\left\{x_n\right\}\text{ There must be boundaries }$
- Convergent sequences must have bounds;
-**Bounded sequences may not converge**;
	- Example: $(-1)^n$

**Function**
- If $\lim_{x\to x_0}f(x)$ exists, then $f(x)$ is bounded (that is, locally bounded) in a certain punctured neighborhood of $x_0$;
-**Limits are a local property of a function**;
- However, when locally bounded, there may not be limits;
	- Example: $\lim_{x\to0}\sin\frac1x$, it continuously oscillates locally as it approaches zero;

### 6.1.2 Number retention
**Sequences**
- Setting $\lim_{n\to\infty}x_n=A$:
	- 1. If $A>0$ (or $A<0$), then there is an $N$ such that $n>N$ implies $x_n>0$ (or $x_n<0$).
		- That is: when N becomes large enough, there will always be terms in the sequence that maintain the same positive and negative signs as A and -> number-preservative;
	- 2. If $N>0, $ exists when $n>N$, $x_n\geq0$ (or $x_n\leq0$ then $A\geq0$ (or $A\leq0)$;
		- Note that here it is a sign greater or equal to the sign;
		- $\mathrm{X_n\geqslant0\longrightarrow A\geqslant0}$
		- But it is only greater than time; if A cannot be deduced, it is also greater than 0;
		- $\mathrm{X_{n>0}\longrightarrow×\longrightarrow A>0}$

**Function**
- Set $\lim_{x\to x_0}f(x)=A$
	- 1. If $A>0$ (or $A<0)$, then there exists a $\delta>0$; when $x\in U(x_0,\delta)$, $f(x)>\mathbf{0}$ (or $f(x)<\mathbf{0})\:.$
	- 2. If $\delta>\mathbf{0}, $ exists when $x\in U(x_0,  \delta)$, $f(x)\geq0$, $($ or $f(x)\leq0$ ), then $A\geq0$ (or $A\leq0)$

### 6.1.3 Supplement: Problem-solving approach for multiple-choice questions using elimination methods
**When to Use Division**
- When solving advanced mathematics problems, use the elimination method when general functions appear;

**How to Use Elimination**
- When an abstract $f(x)$ function appears, consider entering a concrete function and use this function to determine whether each option is correct;

## 6.2 The Relationship Between Limits and Infinitesimals
**Relationships**: $\lim f(x)=A\Leftrightarrow f(x)=A+\alpha(x)\quad\text{ where }\quad\lim\alpha(x)=0$;
- $f(x)$ The necessary and sufficient condition with A as the limit -> $f(x)$ equals A plus infinitesimals;
