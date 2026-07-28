---
title: "Lecture 30: Integration by Parts"
slug: math-038
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 30: Integration by Parts. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2024-01-19
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Indefinite Integrals"]
---

## 1.1 Integration by Parts
### 1.1.1 Basic Concepts
#####**Definition**: #Distributedintegrationmethod
> <font color="#ccc1d9"> description: </font> let $u(x),\nu(x)$ have continuous first-order derivatives, then $\int udv=uv-\int vdu$

**Explanation**
- Where: sometimes $udv$ simple, sometimes $vdu$ simple
- The selection of v and u is the core point;

### 1.1.2 Example Problems
**Example Question**: $\int xe^xdx$
- Analysis
	- Since the integral of $ex$ is relatively easy to find, you need to consider how to place ex in the vdu position;
	- But you can also consider placing x in the VDU position, though it's a bit more difficult;
- Analysis
	- $\int xe^xdx=\int x\operatorname{de}^x=xe^x-\int e^x\operatorname{dx}$
	- $\int\mathrm{e}^{\mathrm{x}}\mathrm{d}\mathrm{x}=\times\mathrm{e}^{\mathrm{x}}-\mathrm{e}^{\mathrm{x}}+\mathrm{d}$
- Question Type: #PartialIntegralMethod

**Example Question**: $\int x sin xdx$
- Analysis
- Analysis
	- The original form equals: $-\int xdcosx=-\left[x\cos x-\int\cos dx\right]$
- Question Type: #Distributedintegrationmethod

**Example Question**: $\int sec^3 xdx$
- Analysis
	-
- Analysis
	- Original form: $\int\sec^{3}xdx=\int\sec xd\tan x=\sec xdx-\int\tan^{2}x\sin xdx$ $=\sec x\tan x-\int\sec^3xdx+\int\sec xdx$
	- At this point, since a negative sec 3 xdx also appears on the right side of the original expression, it can be moved to the right
	- $\int sec^3x\mathrm{~d}x=\frac12\left[secxtanx+\ln|\sec x+\ln x|\right]+\mathrm{C}$
		- Part 1 and 2 are because the sec on the right has been moved to the left;
- Question Type: #PartialIntegralMethod

## 1.2 Summary of Integration by Parts
**Summary**
- Concept: Reverses the multiplication formula process from the previous differentiation to form the distributed integration method;

**When to use**
- Suitable for**multiplying two different functions**;
- 1. $\int xe^{x}dx$
- 2. $\int x\sin xdx$
- 3. $\int e^{x}\sin xdx$

**How to Use**
- Eight types of typical integration rules for parts;
- Multinomial function × Exponent|Trigonometry:
	- 1. $\int p_n(x)e^{ax}\operatorname{d}x$
		- Score the index
	- 2. $\int p_n(x)\sin ax\operatorname{d}x$
		- Triangle Together
	- 3. $\int p_n(x)\cos axdx$
		- Triangle Together
- Multinomial Functions × Logarithm | Inverse Triangle:
	- 4. $\int P_n(x)\ln xdx$
		- Fill in polynomials
	- 5. $\int P_n(x)\arctan xdx$
		- Fill in polynomials
	- 6. $\int P_n(x)\arcsin xdx$
		- Fill in polynomials
- Exponential × Trigonometric Function
	- 7. $\int e^{\alpha x}\sin\beta xdx$
		- Either factor can be chosen first when applying integration by parts.
	- 8. $\int e^{\alpha x}\cos\beta xdx$
		- Either factor can be chosen first when applying integration by parts.
