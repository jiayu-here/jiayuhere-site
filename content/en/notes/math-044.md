---
title: "Lecture 36: First-Order Linear Differential Equations"
slug: math-044
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 36: First-Order Linear Differential Equations. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2024-02-01
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Differential Equations"]
---

## 1.1 Linear Equations
#####**Definition**: #Linearequation
> <font color="#ccc1d9"> Description: </font> the unknown function $y=y(x)$ and the derivative of the unknown function $y^{\prime}$ are both linear and therefore called linear;
> Standard format: $$y^{\prime}+P(x)y=Q(x)$$

**Supplement**: If y in the expression is second or even third order, but x is only of one order, you can consider swapping x and y and solving using $\frac{dx}{dy}$;

#####**Theorem**: #Ageneralsolutionformulaforlinearequations
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$y=e^{-\int p(x)dx}\left[\int Q(x)e^{\int p(x)dx}dx+C\right]$$

**Explanation**
- Concept:
	- It must be written in the standard form of a linear equation before it can be incorporated into the general solution formula;
- Note:
	- 1. For indefinite integrals of $p(x)$ and $Q(x)$, there is no need to take any constant $C$;
	- 2. For position $p(x)$, if the following form appears, no absolute value is needed: $\int\frac{1}{x}dx=\ln x$;
- Method:
	- Step 1: Organize the differential equation into linear equations;
	- Step 2: Import the general solution formula to find the general solution;

## 1.2 Bernoulli's Equation
### 1.2.1 Basic Concepts
#####**Theorem**: #Bernoulliequation
> <font color="#ccc1d9"> description: </font> Based on linear differential equations, multiply $y^{1-\alpha}=u)$ to the right of $Q(x)$:
> $$y^{\prime}+p (x) y=Q (x) y^{\alpha} \quad\quad\quad\quad\quad\quad(\alpha\neq1)\quad(y^{1-\alpha}=u)$$

**Explanation**
- Solution:
	- Let $y$ be $y^{1-\alpha}=u$ so that the equation becomes a first-order linear differential equation;
- Method:
	- If $\alpha$ equals 0, then it is a linear equation;
	- If $\alpha$ equals 1, then separable variables can be used directly;
	- Therefore: The current discussion assumes that alpha and are not equal to 0, nor equal to 1;
- Approach:
	- Think about how to convert into linear equations;

**Handling Methods**
- Known: $y^{\prime}+p (x) y=Q (x) y^\alpha$
- Step one
	- Divide $y^\alpha$ to the left of the equation, divide by y, and you get:
	- $y^{1-\alpha}$
- Step 2: Set z
	- Ling $y^{1-\alpha}=z$
- Step three
	- Transform into a linear equation

### 1.2.2 Example Problems
**Example Question**: $\frac{dy}{dx}+\frac yx=a(\ln x)y^2$
- Analysis
- Analysis
	- First, divide y squared by the past:
		- $\frac1{y^2}\frac{\mathrm{d}y}{\mathrm{d}x}+\frac1x\frac1y=a\ln x$
		- $-\frac{1}{y^{2}}\frac{dy}{dx}=\frac{dt}{dx}$
	- Then let y be the negative power of z
		- $-\frac{\mathrm{d}z}{\mathrm{d}x}+\frac1xz=\mathrm{alnx}$
	- Differentiating by respect to x:
- Question Type: #Bernoulliequation

## 1.3 Total Differential Equations
### 1.3.1 Basic Concepts
#####**Definition**: #Wholedifferentialequations
> <font color="#ccc1d9"> description: </font> $$dF(x,y)=P(x,y)dx+Q(x,y)dy=0$$

**Explanation**
- Concept:
	- If $P(x,y)dx+Q(x,y)dy=0$ is the differential of a function $F(x,y)$, then the equation is a total differential equation;
- Judgment:
	- If the partial derivatives obtained for $P(y)$ and $Q(x)$ are equal:
		- $$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$$
	- Then the current equation is a fully differential equation;
- Solution:
	- 1. Partial integral;
	- 2. Complete the total differential;
	- 3. Line integral;


**Explanation**
- The differential of a multivariable function is the total differential;
	- The differential in a single-variable function only considers the change caused by x as an independent variable:
		- $dy=A\Delta x$
	- In a binary function, the change caused by the two variables x and y must be expressed:
		- $dz=Adx+Bdy$
- Partial increments and full increments
	- Marginal increment: $\begin{aligned}\Delta z_{x}=f\left(x_{0}+\Delta x,y_{0}\right)-f\left(x_{0},y_{0}\right)\\\Delta z_{y}=f\left(x_{0},y_{0}+\Delta y\right)-f\left(x_0,y_{0}\right)\end{aligned}$
	- Full increment: $\Delta z=f(x_{0}+\Delta x,y_{0}+\Delta y)-f(x_{0},y_{0})$

**Two Problems of Total Differentiation**
- A binary function has two independent variables: x and y
- The definition of the single-variable derivative is conceptually very similar to that of the binary differential;
- Two problems of differentiation
	- 1. Is it differentiable?
		- (Differentiation in one variable) Since differentiability is differentiable, the properties of derivatives can be used to judge;
		- Does binary differential draw such a conclusion?
	- 2. How to calculate differentiation
		- (Differential of a single variable) Since $dy=f^{\prime}(x)dx$, we can use derivatives to find the part of A in $dz=Adx$;
		- Reduce the calculation of differentiation to the calculation of derivatives

### 1.3.2 Properties of Total Differentials
#####**Theorem**: #Anecessaryconditionformultivariatefunctionstobedifferentiable
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> If function $z=f(x,y)$ is differentiable at point $(x,y)$, then the partial derivatives $\frac{\partial z}{\partial x}$ and $\frac{\partial z}{\partial y}$ of the function at points (x, y) must exist, and: $dz=\frac{\partial z}{\partial x}\Delta x+\frac{\partial z}{\partial y}\Delta y$
> Note: Among them
> 1. $\frac{\partial z}{\partial x}$ is the A in $dz=Adx+Bdy$;
> 2. $\frac{\partial z}{\partial y}$ is the B in $dz=Adx+Bdy$;
