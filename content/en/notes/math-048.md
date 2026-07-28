---
title: "Lecture 40: Euler’s Equation"
slug: math-048
description: "Graduate Entrance Examination Mathematics study notes: Lecture 40: Euler’s Equation. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Differential Equations"]
---

## 40.1 Euler's Equation
### 40.1.1 Basic Concepts
#####**Definition**: #Eulersequation
> <font color="#ccc1d9"> description: </font>
> 1. Format: $$x^ny^{(n)}+a_1x^{n-1}y^{(n-1)}+\cdots+a_{n-1}xy^{\prime}+a_ny=f(x)$$

**Explanation**
- Concept:
	- Euler's equation, which is also a linear equation but has variable coefficients;
	- But it is a special type of variable coefficient: a very**regular**linear coefficient equation;
- Philosophy:
	- Transform the variable-coefficient equation of this pattern into a constant coefficient equation;
- Method:
	- Let $x=e^t$ to get $x^{k}y^{(k)}=D(D-1)\cdots(D-k+1)y$
	- Among them, $D=\frac{d}{dt}$, $Dy=\frac{dy}{dt}$, $D^{2}=\frac{d^{2}}{dt^{2}}\quad\quad D^{2}y=\frac{d^{2}y}{dt^{2}}$

### 40.1.2 Example Problems
**Example Problem**: Find a general solution to Euler's equation $x^{2}\frac{d^{2}y}{dx^{2}}+4x\frac{dy}{dx}+2y=0\quad(x>0)$;
- Analysis
- Analysis
	- $x=e^{t}\quad D(p-1)y+4Dy+2y=0$
	- Get: $(y^{2}-1)y+4y+2y=0$
	- De: $\frac{d^{2}y}{dt^{2}}+3\frac{dy}{dt}+2y=0$
- Question Type: #
