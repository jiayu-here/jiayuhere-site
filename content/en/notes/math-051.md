---
title: "Lecture 43: Local and Absolute Extrema of Multivariable Functions"
slug: math-051
description: "Graduate Entrance Examination Mathematics study notes: Lecture 43: Local and Absolute Extrema of Multivariable Functions. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-07
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multivariable Differential Calculus"]
---

**Section Overview**
- (1) Unconstrained extremum
- (2) Conditional Extrema and Lagrange Multiplier Method
- (3) Maximum and minimum values

**Frequently Tested Question Types in This Section**
- Problem Type 1: Find Extrema (Unconditional)
- Problem Type 2: Find the maximum and minimum values
- Question Type 3: Word problems with maximum and minimum values
---
## 43.1 Unconditional Extrema of Multivariable Functions
### 43.1.1 Basic Concepts
#####**Definition**: #Extremumofmultivariablefunctions
> <font color="#ccc1d9"> Description: </font> the maximum or minimum value of a multivariable function in a neighborhood;
> If in a neighborhood of point $(x_0,y_0)$, the inequality always holds: $$f(x,y)\leq f(x_0,y_0)\quad(f(x,y)\geq f(x_0,y_0))$$
> Then $f$ has a local maximum (minimum) at $(x_0,y_0)$, and $(x_0,y_0)$ is called a local maximum (minimum) point.
> The maximum and minimum are collectively called extremums, and the maximum and minimum points are collectively called extremum points;

**Explanation**
- Give an example
- $z=3x^{2}+4y^{2}$ is minimal at $(0.0)$;
- $z=-\sqrt{x^{2}+y^{2}}$ is maximum at $\quad(0.0)$

#####**Definition**: #Thestationarypointofamultivariablefunction
> <font color="#ccc1d9"> Description: </font> point where the partial derivative of a multivariable function equals 0 is called the stationary point of the multivariable function;

**Explanation**
- $f_{x}^{\prime}=0.f_{y}^{\prime}=0$ Points that exist simultaneously are called stationary points;

#####**Theorem**: #Thenecessaryconditionfortheexistenceofextremainmultivariablefunctions
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if $z=f(x,y)$ has a partial derivative at point $(x_0,y_0)$ and takes an extremum at $(x_0,y_0)$, then we have: $$f_{x}^{\prime}(x_{0},y_{0})=0,\,f_{y}^{\prime}(x_{0},y_{0})=0$$

**Explanation**
- Requirements:
	- The two first-order partial derivatives of a point must be zero; this is a necessary condition for obtaining an extremum, but**not a sufficient condition**;
	- Narrow the scope;
- The relationship between stationary points and extrema points:
	- Generally:
		- Concept:
			- Not all stationary points are necessarily extremal; Extremal points are not necessarily stationary points `<-` For example, $|x|+|y|$;
		- Conclusion:
			- Two scenarios: possible extreme points
			- (1) Stationary `<-` Mainly this situation;
			- (2) Neither $f_x$ nor $f_y$ exists
			- (3)$f_x$ Nonexistent, $f_y=0$
			- (4)$f_y$ Nonexistent, $f_x=0$
	- Premises of differentiability:
		- Concept:
			- If $z=f(x,y)$ is differentiable, the extremum must be a stationary point;
		- Conclusion:
			- Extremes only need to find stationary points;
-

#####**Theorem**: #Sufficientconditionsforextremes
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font>**Determination of Standpoint Extremity of Multivariable Functions**
> When $z=f(x,y)$ has a second-order continuous partial derivative in a neighborhood of point $P_0(x_0,y_0)$, and $f_x^{\prime}(x_0,y_{0})=f_y^{\prime}(x_0,y_{0})=0$, $A=f_{xx}^{\prime\prime}(x_{0},y_{0})\quad\quad B=f_{xy}^{\prime\prime}(x_{0},y_{0})\quad\quad C=f_{yy}^{\prime\prime}(x_{0},y_{0})$;
> 1. If it is $AC-B^{2}>0$, then there are extremes
> 	1. A<0 is the maximum;
> 	2. A>0 is the minimum value;
> 2. If it is $AC-B^{2}<0$, then there is no extreme value
> 3. If it is $AC-B^{2}=0$, then it can only be determined by definition

**Explanation**: Summary
- After finding the stationary point, you only need to use this sufficient conditional determination method to determine whether it is an extremum
### 43.1.2 Example Problems
**Example**: Find the extremum of $f(x,y)=x^{3}-y^{3}+3x^{2}+3y^{2}-9x$;
- Analysis
- Analysis
	- Finding the partial derivative separately:
		- $f_{x}^{\prime}=3x^{2}+6x-9$
		- $f_{y}^{\prime}=-3y^{2}+6y$
	- Gain
		- $\begin{cases}x^{2}+2x-3=0\\-y^{2}+2y=0\end{cases}$
	- Simplify
		- $(x+3)(x-1)=0$ hour, $x=-3\text{ or }1$;
		- $y(y-2)=0$ hour, $y=0\text{ or }2$;
	- Permutations and combinations to obtain stationary points
		- $(1,0),(1,2),(-3,0),(-3,2)$
	- Find A, B, C
		- $f_{xx}^{\prime\prime}=6x+6$
		- $f_{xy}^{\prime\prime}=0$
		- $f_{yy}^{\prime\prime}=-6y+6$
	- When (1,0) point:
		- $A=12.B=0.C=6$
		- So $AC-B^{2}=72>0$
		- Therefore, it is the minimum value, that is, after substituting $(1,0)$, the result is -5, which is the minimum value;
	- Other analogies
- Question Type: #Extremumofmultivariablefunctions

## 43.2 Conditional Extremum of Multivariable Functions: Lagrange Multiplier Method
### 43.2.1 Basic Concepts
**Unconditional Extrema and Conditional Extremum**
- Unconditional
	- Example: Find the tallest person in the entire school
- Conditional
	- Example: Find the tallest student in the school, from Shandong, Gemini;
- The more conditions you add, the smaller the maximum value

#####**Definition**: #Conditionextremes
> <font color="#ccc1d9"> Description: </font> given $z=f(x,y)$, its extremum is under the condition of $\varphi(x,y)=0$, find its extremum as the conditional extremum;

**Explanation**
- Difference from unconstrained extremums:
	- Unconstrained extremum: an extreme value within the domain, i.e., the highest or lowest point within the domain or locally;
	- Constrained extrema: The content of constraints $\varphi (x, y)=0$ is usually a line geometrically, i.e., on a curve, local minimum and local maximum;
- Example:
	- In $z=f(x,y)$: $z=f(x,\varphi(x))$
	- Here, derivative from z to x: $\frac{dz}{dx}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\cdot\frac{dy}{dx}$
	- Write out $\frac{dz}{dx}\vert_{x=x_{0}}=f^{\prime}(x_{0},y)+f^{\prime}(x_{0},y)\frac{dy}{dx}\vert_{x=x_{0}}=0$

#####**Theorem**: #Lagrangemultipliermethod
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> (1) For a single constraint: let $F(x,y,\lambda)=f(x,y)+\lambda\varphi(x,y)$
> then the necessary condition to obtain the extremum is: $$\begin{cases}F_x=f_x^{\prime}(x,y)+\lambda\varphi_x^{\prime}(x,y)=0,\\F_y=f_y^{\prime}(x,y)+\lambda\varphi_y^{\prime}(x,y)=0,\\F_\lambda=\varphi(x,y)=0,\end{cases}$$
> (2) When multiple constraints are present: the extreme value of the condition under $f(x,y,z)\text{ In terms of conditions }\varphi(x,y,z)=0,\psi(x,y,z)=0$ conditions
> Order $F(x,y,z,\lambda,\mu)=f(x,y,z)+\lambda\varphi(x,y,z)+\mu\psi(x,y,z)$

**Explanation**
- Explanation:
	- $\lambda$ is a parameter
- Meaning:
	- Transform the necessary condition for obtaining conditional extrema of a binary function under constraints into a large `F` Problem of the necessary condition for unconditional extrema of such a ternary function `->` For three partial derivatives, equal to 0;
- Note:
	- The point obtained by solving this constraint is the possible extremum, not a definite one;

#####**Theorem**: #nMeta-Lagrange multiplier method
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> the above methods can be generalized to the extremum problem of $n$-element functions under $m$ constraints,
> To find the extremum of $u=f(x,y,z)$ under condition $\varphi(x,y,z)=0,\psi(x,y,z)=0$, construct the Lagrange function: $$F(x,y,z,\lambda,\mu)=f(x,y,z)+\lambda\varphi(x,y,z)+\mu\psi(x,y,z).$$ find the partial derivatives for $x,y,z,\lambda,\mu$ of $F$ and construct a system of equations: $$\begin{aligned}&f_{x}^{\prime}(x,y,z)+\lambda\varphi_{x}^{\prime}(x,y,z)+\mu\psi_{x}^{\prime}(x,y,z)=0,\\&f_{y}^{\prime}(x,y,z)+\lambda\varphi_{y}^{\prime}(x,y,z)+\mu\psi_{y}^{\prime}(x,y,z)=0,\\&f_{z}^{\prime}(x,y,z)+\lambda\varphi_{z}^{\prime}(x,y,z)+\mu\psi_{z}^{\prime}(x,y,z)=0,\\&\varphi(x,y,z)=0,\\&\psi(x,y,z)=0.\end{aligned}$$ solve for $x,y,z,\lambda$ and $\mu$, then ($x,y,z)$ is the**possible extreme point**.


## 43.3 Maximum/Minimum Values of Multivariable Functions
### 43.3.1 Basic Concepts
**Summary**: Find the maximum and minimum values of the continuous function `f(x, y)` on a bounded closed domain `D`
- Step 1: Find the possible extremum points of `f(x, y)` within `D`;
	- (1) Stationing point;
	- (2) Two first-order partial derivatives, at least one point that does not exist
- Step 2: Find the maximum and minimum values of `f(x, y)` on the**boundary**of `D`;
	- Find the maximum and minimum `->` on the boundary. This is essentially finding a conditional extremum;
- Step 3: Compare the extremes;


### 44.3.2 Conditional Maximum Problem

## 43.3 Frequently Tested Question Types

---
### Question Type: #Findtheextremum
#### PART 1: Problem-solving methods
**Problem Type**: Know the total differential of a function and determine the extremum
- Solution Guidance:
	- Usually, Method Three or Method One is used first;
- Method 1: Sufficient conditions for extremes
	- Use sufficient conditions for extreme values. First, use the full differential to know the partial derivatives for `x` and `y`, then use the partial derivatives to find the values of `A、B、C` and judge using formulas;
- Method 2: Partial integration
	- Core: Know the total differential `->` Use partial integrals to find the function;
	- Example: When the total derivative of a binary function $z=f(x,y)$ is $dz = xdx + ydy$, its partial derivative can be found
		- $z_{x}=x\quad\quad z=\int xdx=\frac{1}{2}x^{2}+q(y)$
		- $z_{y}=y \quad\quad z_{y}=q^{\prime}(y)=y,q(y)=\frac{1}{2}y^{2}+c$
		- So $z=\frac{1}{2}(x^{2}+y^{2})+c$
- Method 3: Derivative Derivation
	- Core: Given a total differential, reconstruct its potential function.
	- Example: $dz=xdx+ydy=d(\frac{1}{2}x^2)+d(\frac{1}{2}y^{2})=d(\frac{1}{2}(x^{2}+y^{2}))$
		- Since the differentials are equal, the two can only differ by constant, so $z=\frac{1}{2}(x^{2}+y^{2})+c$

**Problem Type**: Know the form of the function and find the extrema point
- (1.1) No possible extreme points provided:
	- Compute the partial derivatives of the function x and y respectively so that the partial derivative equals 0, and find possible stationary points (if no possible extrema points are given)
- (1.2) Given possible extreme points:
	- Use necessary conditions to determine `->` determine whether it is a stationary point:
	- Necessary conditions for the existence of extreme points `->` $f_{x}^{\prime}(x_{0},y_{0})=0,\,f_{y}^{\prime}(x_{0},y_{0})=0$
- (2) Sufficient condition judgment: Use the ABC formula to judge
- Note:
	- If calculating ABC is troublesome, you can use "substitution first, then calculate"`->` When finding Y, first substitute X; similarly, when calculating X;

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review


---
### Question Type: #ConditionalextremumandLagrangemultipliermethod
#### PART 1: Problem-solving methods
**Question Type**: Conditional maximum-value problems
- Concept:
	- Using the Lagrange multiplier method, first find all possible extrema points of the function, then compare all possible extrema points without determination to obtain the maximum;
- Steps to solve the problem:
	- (1) Construct the Lagrange function;
	- (2) Find partial derivatives;
	- (3) Find a station;
		- Obtain several equations equal to 0, and use them to solve for possible values of x and y;
	- (4) Compare each point to determine the maximum and minimum values;

**Problem Type**: Given the full differential, find the maximum
- Method:
- (1) First, recover the potential function from the total differential.
	- Two methods `->` partial integral, derivative;
- (2) Find the minimum point of the region;
	- 1. Possible extreme points within the region;
	- 2. The maximum and minimum values on the boundary curve;
		- Method One:
			- Using conditions, convert extremes into unconstrained extremums;
		- Method Two:
			- The general method is the Lagrange multiplier method;
		- Method 3:
			- Parametric equations
	- 3. Compare the maximum and minimum values on the boundary with possible extremes within the region;

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review
