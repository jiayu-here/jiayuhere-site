---
title: "Lecture 37: Order-Reducible Equations and Higher-Order Linear Differential Equations"
slug: math-045
description: "Graduate Entrance Examination Mathematics study notes: Lecture 37: Order-Reducible Equations and Higher-Order Linear Differential Equations. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Differential Equations"]
---

## 1.1 Order-Reducible Equations
**Core Idea of Order Reduction**
- Core:
	- Most higher-order equations cannot be reduced by a standard procedure. Many equations in Section 1.2 have theoretical solutions but no universal elementary method;
	- Two common forms that can be reduced and solved systematically are $y^{\prime\prime}=f(x,y^{\prime})$ and $y^{\prime\prime}=f(y,y^{\prime})$;
	- Identify the order-reducible form, make the corresponding substitution, and then use the **method of separation of variables**;
- Note:
	- Each integration introduces a constant; use the initial or boundary conditions to determine these constants one by one;

**Common Order-Reducible Forms**
- 1. $y^{\prime\prime}=f(x)$；
	- Example: $y^{\prime\prime}=e^{x},\quad y^{\prime}=e^{x}+C_{1},\quad y=e^{x}+C_{1}x+C_{2}$
- 2. $y^{\prime\prime}=f(x,y^{\prime})$
	- Method:
		- Set ${y^{\prime}=p,\ y^{\prime\prime}=\frac{dp}{dx}}$;
		- This gives the first-order equation $\frac{dp}{dx}=f(x,p)$ in $p$ and $x$, after which the variables can be separated;
	- Example:
		- $\text{ Differential equations }xy^{\prime\prime}+3y^{\prime}=0\text{ The general definition is }$
		- No direct y appears, so the second method is used;
		- Getting: $y^{\prime}=p,y^{\prime\prime}=\frac{dp}{dx},x\frac{dp}{dx}+3p=0$ This equation is a separable equation of order 1;
- 3. $y"=f(y,y^{\prime})$
	- Method:
		- Set: $y^{\prime}=P$, $y^{\prime\prime}=\frac{dp}{dy}P$;
		- Become a first-order equation with only y and p and no x, then use the method of separating variables;

## 1.2 Higher-Order Linear Differential Equations
**Summary**
- Higher-order linear differential equations;
	- Includes:
		- Higher-order linear homogeneous differential equations;
		- Higher-order linear nonhomogeneous differential equations;
	- Features:
		- There are theoretical solutions, but no universal solution methods;
- Cases that can be solved:
	- Homogeneous linear differential equations with constant coefficients;

**Structure of Solutions**
- Second-order linear homogeneous differential equation:
	- $$y^{\prime\prime}+p(x)y^{\prime}+q(x)y=0$$
- Second-order linear nonhomogeneous differential equation:
	- $$y^{\prime\prime}+p(x)y^{\prime}+q(x)y=f(x)$$

#####**Theorem**: #Solutiontoasecondorderlinearhomogeneousdifferentialequation
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> If $y_1(x)$ and $y_2(x)$ are two linearly independent solutions to a second-order linear homogeneous differential equation, then: $$y=C_{1}y_{1}(x)+C_{2}y_{2}(x)$$
> is a general solution to second-order linear homogeneous differential equations;

**Explanation**
- The number of independent differential equations matches their order;

**Testing Linear Independence**
- If $\frac{y_{1}(x)}{y_{2}(x)}$ is not constant on the interval, then $y_1$ and $y_2$ are linearly independent;

##### **Theorem**: #SolutionsOfSecondOrderLinearNonhomogeneousDifferentialEquations
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $y^*$ is a particular solution of a second-order linear **nonhomogeneous** differential equation and $y_1(x),y_2(x)$ are linearly independent solutions of the corresponding **homogeneous** equation, then
> $$y=C_{1}y_{1}(x)+C_{2}y_{2}(x)+y^{*}(x)$$
> is the general solution of the nonhomogeneous equation;

**Explanation**
- $$\text{general solution of the homogeneous equation}+\text{one particular solution}=\text{general solution of the nonhomogeneous equation}$$

##### **Theorem**: #RelationshipBetweenNonhomogeneousAndHomogeneousSolutions
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $y^*_1(x)$ and $y^*_2(x)$ are two particular solutions of the same nonhomogeneous differential equation, then $y^*_1(x)-y^*_2(x)$ is a solution of the corresponding homogeneous equation;

##### **Theorem**: #SuperpositionOfNonhomogeneousTerms
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $y^*_1(x)$ and $y^*_2(x)$ are particular solutions of
> $$y^{\prime\prime}+p(x)y^{\prime}+q(x)y=f_{1}(x),\qquad y^{\prime\prime}+p(x)y^{\prime}+q(x)y=f_{2}(x),$$
> respectively, then $y^*_1(x)+y^*_2(x)$ is a particular solution of
> $$y^{\prime\prime}+p(x)y^{\prime}+q(x)y=f_1(x)+f_2(x).$$
