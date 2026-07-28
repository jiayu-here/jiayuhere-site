---
title: "Lecture 41: Differentiation of Implicit Functions"
slug: math-050
description: "Graduate Entrance Examination Mathematics study notes: Lecture 41: Differentiation of Implicit Functions. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-07
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multivariable Differential Calculus"]
---

## 42.1 Introduction
**Relationship with Single-Variable Functions**
- Relationship between differentiation of multivariable functions and differentiation of single-variable functions:
- Problems in differentiation of single-variable functions:
	- (1) Derivative of composite functions;
	- (2) Finding the differentiation of implicit functions;
	- (3) Parametric equation
	- (4) Higher-order derivatives
	- (5) Logarithmic differentiation;
- Problems in multivariable function differentiation:
	- (1) Differential method for composite functions;
	- (2) Implicit function differentiation;

**Exam Content Overview**
- (1) Differential method for composite functions;
- (2) Implicit function differentiation;

**Common Question Types and Typical Examples**
- Problem Type 1: Partial derivatives and total differentials of composite functions
- Problem Type 2: Partial derivatives and total differentials of implicit functions

## 42.2 Differentiation of Composite Functions
### 42.2.1 Method for Differentiating Composite Functions of Multivariable Functions
**Single-variable Function**
- When $y=f(u), u=G(x)$ is differentiable `->` $y=f(G (x))$ is differentiable;
- Chain differentiation method: $y_{x}^{\prime}=y_{u}^{\prime}\cdot u_{x}^{\prime}$

#####**Theorem**: #Differentiationrulesformultivariablecompositefunctions
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> Let $u=u(x,y)$ and $v=v(x,y)$ have first-order partial derivatives, and let $z=f(u,v)$ have continuous first-order partial derivatives. Then $z=f(u(x,y),v(x,y))$ has:
> $$\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x},\qquad\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial y}$$

**Explanation**
- For inner sheaf functions:
	- $u=u(x,y),\quad v=v(x,y)$ The requirement is**the existence of a partial derivative**;
- For outer layer functions:
	- $z=f(u,v)$ must have continuous first-order partial derivatives.
- Cause:
	- In diversity, differentiability cannot be derived from differentiability;

**Principle**
- Assume the relationship between functions and variables:
	- z
		- u
			- x
			- y
		- v
			- x
			- y
- Analysis:
	- From the tree-derived diagram above, there are `x、y` two variables;
	- For the variable $x$, both $u$ and $v$ depend on $x$, so $\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x}$.
	- Similarly, for `y`

### 42.2.2 Invariance of Fully Differential Forms

#####**Theorem**: #Invarianceofthefullydifferentialform
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $z=f(u,v)$, $u=u(x,y)$, and $v=v(x,y)$ have continuous first-order partial derivatives, then the total differential is invariant: $$\mathrm{d}z=\frac{\partial z}{\partial x}\mathrm{d}x+\frac{\partial z}{\partial y}\mathrm{d}y=\frac{\partial z}{\partial u}\mathrm{d}u+\frac{\partial z}{\partial v}\mathrm{d}v.$$
> That is, multivariable functions also possess invariance in differential form;
> Therefore: $$\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x},\qquad\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial y}.$$

**Explanation**
- One Yuan Hour:
	- Whether the current derivative $dx$ x or u is $du$ (i.e., whether independent or intermediate), the current is**the derivative of this variable multiplied by the derivative of that variable**;
- When there are multiple types:
	- Since $z=f(u,v),\quad u=u(x,v)$ and $\nu=\nu(x,y)$ have continuous first-order partial derivatives, they are always differentiable;
	- Differential-form invariance gives $\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x}$ and $\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial y}$.
	- substitute
		- ![Pasted image 20240203172405](/assets/notes/8b643ae6ba7c-Pasted-image-20240203172405.png)
- Meaning:
	- `z` As a function of other variables, the variables appearing there are invariant variables, regardless of whether they are intermediate or independent variables; the differential form is invariant;


### 42.2.3 Example Problems
**Scenario 1:**$\text{ Let }z=f(u,v),u=\varphi(x),v=\psi(x)\text{ The equinox can be subminicious, then }$
- $\frac{dz}{dx}=\frac{\partial z}{\partial u}\frac{du}{dx}+\frac{\partial z}{\partial v}\frac{dv}{dx}$
- Analysis:
	- Since u and v are partial derivatives with respect to z, they are partial differential $\partial$
	- Because of the relationship shown in the diagram
		- ![Pasted image 20240203161930](/assets/notes/92ddc96a14d2-Pasted-image-20240203161930.png)
	- Therefore, z is a monovariate function with respect to x, so u is a direct derivative with respect to x;

**Situation 2:**$\text{ Let }w=f(u),u=\varphi(x,y,z)\text{ All can be subtracted },$
- $\frac{\partial w}{\partial x}=\frac{dw}{du}\frac{\partial u}{\partial x},\frac{\partial w}{\partial y}=\frac{dw}{du}\frac{\partial u}{\partial y},\frac{\partial w}{\partial z}=\frac{dw}{du}\frac{\partial u}{\partial z}$
- Analysis
	- w is a ternary function with respect to xyz
	- ![Pasted image 20240203162158](/assets/notes/54531d7cbb60-Pasted-image-20240203162158.png)

**Situation 3:**$\text{ Let }u=f(x,y,z),z=\varphi(x,y)\text{ All can be subtracted }$
- $\frac{\partial u}{\partial x}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial z}\frac{\partial z}{\partial x},\frac{\partial u}{\partial y}=\frac{\partial f}{\partial y}+\frac{\partial f}{\partial z}\frac{\partial z}{\partial y}$
	- Because the meaning of the u before and after the middle equality differs, the letter f is written at the end to indicate distinction;
- Analysis
	- ![Pasted image 20240203162504](/assets/notes/9ddf73daf50d-Pasted-image-20240203162504.png)

**Example Question**: $\text{ Let }z=f(x+y,xy),\text{ where }z=f(u,v)\text{ It can be subtracted, to seek }\frac{\partial z}{\partial x},\frac{\partial z}{\partial y}$
- Analysis
- Analysis
	- $dz=\frac{\partial f}{\partial u}du+\frac{\partial f}{\partial v}dv=\frac{\partial f}{\partial u}(dx+dy)+\frac{\partial f}{\partial V}(ydx+xdy)$
	- From invariance, it can be inferred
	- = $\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy$
	- Then, since x and y are found separately, the results are:
	- ![Pasted image 20240203173251](/assets/notes/bf00984ae725-Pasted-image-20240203173251.png)
- Question Type: #Differentiationrulesformultivariablecompositefunctions

## 42.3 Differentiation of implicit functions
### 42.3.1 Basic Concepts of Multivariable Functions and Implicit Functions
#####**Definition**: #Multivariablefunctionsandimplicitfunctions
> <font color="#ccc1d9"> Description: </font> the implicit function $y=(x)$ determined by Equation $F(x, y)=0$, we get: $$y^{\prime}=-\frac{F_{x}^{\prime}}{F_{y}^{\prime}}$$

**Explanation**
- What is an implicit function?
	- A function of the form $F(x, y)=0$ is called an implicit function;
	- Placing the independent variable and the dependent variable in the same expression hides the function-class relationship between them, hence called implicit functions.
- What is an apparent function?
	- An explicit function can be understood as:
	- Functions with a clear relationship between the independent and dependent variables, such as $y=f(x)$ corresponding to the concept of implicit functions;

#####**Theorem**: #Theexistencetheoremofimplicitfunctions
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> 1. $F(x,y)$ Continuously partial differentiable within the neighborhood of point $M_0(x_0,y_0)$;
> 2. $F(x_0,y_0)=0$；
> 3. $F_y\:\prime(x_0,y_0)\neq0$
> then the function $F(x,y)$ uniquely determines a continuous differentiable function $y=f(x)$ in the $M_{0}$ neighborhood to $y_0=f(x_0)$
> Rule: $$\frac{dy}{dx}=-\frac{F_{x}'}{F_{y}'}$$

**Explanation**
- More straightforward explanations
	- $F(x,y)=0.\text{ If }x\text{ is the independent variable, then }y=y(x).\text{ Find }\frac{dy}{dx}.$
	- According to the requirements, x is an independent variable, so theoretically y can be transformed into a function of x, i.e., y directly regarded as y(x), and then derivative from both sides of x:
		- $F_{x}'+F_{y}'\frac{dy}{dx}=0\Longrightarrow\frac{dy}{dx}=-\frac{F_{x}'}{F_{y}'}$
- Memory
	- 1. There must be a negative sign;
	- 2. In $\frac{dy}{dx}=-\frac{F_{x}'}{F_{y}'}$, x and y correspond interlacing;

**Proof**
- Because in implicit function $F(x,y)$:
	- x is a function for x: $x=x$
	- y is the function for x: $y=f(x)$
- Therefore, when differentiating $F(x,y)=0$, their derivative chain is: $F<_{y}^x>x$
- Applying the chain rule gives $\frac{\partial F}{\partial x}+\frac{\partial F}{\partial y}\frac{dy}{dx}=0$.
- Transform the position to get: $\frac{dy}{dx}=-\frac{F_{x}'}{F_{y}'}$

#####**Theorem**: #Thereexistsatheoremformultivariableimplicitfunctions
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $F$ has continuous first-order partial derivatives near $M_0(x_0,y_0,z_0)$, $F(x_0,y_0,z_0)=0$, and $F_z^{\prime}(x_0,y_0,z_0)\neq0$, then $F(x,y,z)=0$ uniquely defines a continuously differentiable function $z=\varphi(x,y)$ near $M_0$, with $z_0=\varphi(x_0,y_0)$.
> Therefore, $$\frac{\partial z}{\partial x}=-\frac{F_{x}^{\prime}}{F_{z}^{\prime}},\qquad\frac{\partial z}{\partial y}=-\frac{F_{y}^{\prime}}{F_{z}^{\prime}}.$$

### 42.3.2 Example Problems
**Example**: $e^xy^3-x^2+2y=1.\text{ Find }\frac{dy}{dx}\text{ and }\frac{d^2y}{dx^2}.$
- Analysis
	- $\text{ According to the problem, x is the independent variable, and y is a function with respect to x }$
- Analysis: Find $\frac{dy}{dx}$
	- $$\begin{aligned}&e^{x}y^{3}-x^{2}+2y=1 \\&e^{x}y^{3}+e^{x}3y^{2}{\frac{dy}{dx}}-2x+2{\frac{dy}{dx}}=0 \\&\frac{dy}{dx}=\frac{2x-e^{x}y^{3}}{e^{x}3y^{2}+2}\end{aligned}$$
- Analysis: Find $\frac{d^2y}{dx^2}$
	- $$
\begin{aligned}
&\text{To find }\frac{d^{2}y}{dx^{2}},\text{ differentiate }e^{x}y^{3}+3e^{x}y^{2}\frac{dy}{dx}-2x+2\frac{dy}{dx}=0\text{ once more with respect to }x: \\
&e^{x}y^{3}+e^{x}3y^{2}{\frac{dy}{dx}}+e^{x}3y^{2}{\frac{dy}{dx}}+e^{x}6y({\frac{dy}{dx}})^{2}+e^{x}3y^{2}{\frac{d^{2}y}{dx^{2}}}-2+2{\frac{d^{2}y}{dx^{2}}}=0 \\
&\frac{d^{2}y}{dx^{2}}=\frac{2-e^{x}y^{3}-6e^{x}y^{2}\frac{dy}{dx}-6e^{x}y(\frac{dy}{dx})^{2}}{3e^{x}y^{2}+2} \\
&\text{Finally, substitute }\frac{dy}{dx}=\frac{2x-e^{x}y^{3}}{3e^{x}y^{2}+2}.
\end{aligned}
$$
- Question Type: #ImplicitDifferentiation

**Example**: Given $x^{2}+y^{2}-1=0$, find the first and second derivatives of the implicit function at $(0,1)$.
- Analysis
	- Note that it is $F(x,y)=0$
- Explanation: First level
	- Set $F(x,y)=x^{2}+y^{2}-1$
	- Can get: $F_{x}^{\prime}=2x,\,F_{y}^{\prime}=2y$
	- So: $F(0,1)=0,\,F_{y}^{\prime}(0,1)=2\neq0$
	- Substitute formula: $\frac{dy}{dx}=-\frac{F_{x}^{\prime}}{Fy^{\prime}}=-\frac{2x}{2y}=-\frac{x}{y}$
- Explanation: Second order
	- Find the derivative again for $x$ in $-\frac{x}{y}$;
	- $\frac{d^{2}y}{dx^{2}}=-\frac{y-xy^{\prime}}{y^{2}}=-\frac{y+x\frac{x}{y}}{y^{2}}$
- Question Type: #FindingtheRadicalFunctionforImplicitFunctions

## 42.4 Common Question Types

---
### Question Type: #Partialderivativesofcompositefunctionsandtotaldifferentiation
#### PART 1: Problem-solving methods
**Problem Type**: Derivative of multivariable composite functions with respect to the upper integral of variables
- (1) Carry in the variable limit points;
- (2) Differentiation:
	- If you take the derivative from X, then treat Y as a constant. Similarly, for Y;
	- According to $(\int_a^xf(t)\mathrm{d}t)^{\prime}=f(x)$, differentiating yields the function;
- Supplement: Other methods
	- Fill in before calculating: Carry a special value

**Problem Type**: Find the value of the complete differential
- Method One:
	- Directly find differentiation;
	- Usually,**composite function differentiation method**is used;
- Method Two:
	- Find the two partial derivatives separately, then multiply them by $dx,dy$ and add them to obtain the differential;
	- Formula: $$\mathbf{d}z=\frac{\partial z}{\partial x}\mathbf{d}x+\frac{\partial z}{\partial y}\mathbf{d}y$$

**Problem Type**: Find higher-order derivatives using multivariable composite functions
- (1) First find the first derivative $\frac{dy}{dx}$, and do not substitute the composite function
	- For example, when $y=f(e^x,cosx)$, $\frac{dy}{dx}=f_{1}^{\prime}e^{x}+f_{2}^{\prime}(-sinx)$
- (2) Subtract the composite function and the value of the target point into the first derivative to obtain the value of the first derivative;
- (3) Next, find the second derivative, paying attention to the object when taking the differentiation for $f_{1}^{\prime}$ and $f_{2}^{\prime}$;
	- Since `f` is a composite function with respect to $e^x,cosx$, when taking derivatives for $f_{1}^{\prime}$ and $f_{2}^{\prime}$, you must take derivatives for both the $e^x$ and $cosx$ parts:
	- $$\frac{d^{2}y}{dx^{2}}=f_{11}^{\prime\prime}e^{2x}+f_{12}^{\prime\prime}(-e^{x}sinx)+f_{1}^{\prime}\cdot e^{x}+f_{22}^{\prime\prime}\sin^{2}x+f_{21}^{\prime\prime}(-e^{x}sinx)-f_{2}^{\prime}\cos x$$

**Question Type**: When the relationships between independent variables such as x and y in the problem are relatively complex, composite functions can be used to replace them with simple functions, and the derivative is derived from the composite function to find the target result
- Example: For example, when $z=f(x^y,y^x)$, you can let $u=x^y,v=y^x$, and at this point, $z=f(u,v)$, you get the following tree diagram:
- z
	- u
		- x
		- y
	- v
		- x
		- y
- At this point, suppose the partial derivative for x is $$\frac{\partial z}{\partial x}=\frac{\partial f}{\partial u}yx^{y-1}+\frac{\partial f}{\partial u}y^{x}luy$$

#### PART 2: Typical Example Problems
**Example Question**: Let $z=\left(1+\frac{x}{y}\right)^{\frac{x}{y}},\text{ Then find: }dz|_{(1,1)}$
- Method 1: Directly find the differential
	- Because of the invariance of differential forms, the differential of z with respect to u $z_{u}^{\prime}\mathrm{d}u$ equals the differential of z with respect to x and y;
	- $\frac{x}{y}=u,\quad z=(1+u)^{u},\quad\mathrm{d}z=z_{u}^{\prime}\mathrm{d}u$
	- Set $z=e^{u\ln(1+u)},\text{ and }du=d\frac{x}{y}$
	- De: $$\quad\mathrm{d}z=e^{u\ln(1+u)}\left[\ln(1+u)+\frac{u}{1+u}\right]\frac{ydx-xdy}{y^2}$$
	- After obtaining the formula for $dz$, substitute the value of z to get the value of $dz|_{(1,1)}=2\left[\ln 2+\frac{1}{2}\right](dx-dy)$
- Method 2: Use two partial derivatives to find differentiation
	- First, find $z_x^{\prime}(1,1),\quad z_y^{\prime}(1,1)$ separately, then multiply by `dx、dy` to obtain the differential;
	- Since it's a specific point, you can apply first and then calculate;
	- $$\begin{aligned}&z(x,1)=(1+x)^{x}=e^{x\ln(1+x)}\\&z_{x}^{\prime}(x,1)=e^{x\ln(t+x)}\left[\ln(t+x)+\frac{x}{1+x}\right],\quad z_{x}^{\prime}(1,1)=2\left[\ln2+\frac{1}{2}\right]=1+2\ln2\end{aligned}$$
	- Similarly, find partial derivative with respect to `y`

**Example Question**: Let $f(u,v)$ have a second-order continuous partial derivative, the function $g(x,y)=xy-f(x+y,x-y)$, find $\frac{\partial^2g}{\partial x^2}+\frac{\partial^2g}{\partial x\partial y}+\frac{\partial^2g}{\partial y^2}$
- $\frac{\partial g}{\partial x}=y-f_{1}^{\prime}-f_{2}^{\prime}$
	- $\frac{\partial^{2}g}{\partial X^{2}}=-\left[f_{11}^{\prime\prime}+f_{12}^{\prime\prime}\right]-\left[f_{11}^{\prime\prime}+f_{22}^{\prime\prime}\right]$
	- $\frac{\partial^{2}g}{\partial x\partial y}=1-\left[f_{11}^{\prime\prime}-f_{12}^{\prime\prime}\right]-\left[f_{21}^{\prime\prime}-f_{22}^{\prime\prime}\right]$
- $\frac{\partial g}{\partial y}=x-f_{1}^{\prime}+f_{2}^{\prime}$
	- $\frac{\partial^{2}g}{\partial y^{2}}=-\left[f_{11}^{\prime\prime}-f_{12}^{\prime\prime}\right]+\left[f_{21}^{\prime\prime}-f_{22}^{\prime\prime}\right]$
- So the sum is: $1-3f_{11}-f_{22}$

**Example**: Let function $f(u)$ have a second-order continuous derivative, $z=f(e^x\cos y)$ satisfy $\frac{\partial^{2}z}{\partial x^{2}}+\frac{\partial^{2}z}{\partial y^{2}}=(4z+e^{x}\cos y)e^{2x}$, if $f(0)=0,f^{\prime}(0)=0$, find the expression of $f(u)$;
- Analysis
- Analysis
- Question Type: #

#### PART 3: Key Points Review


---
### Question Type: #Partialderivativesandtotaldifferentialsofimplicitfunctions
#### PART 1: Problem-solving methods
**Problem Type**: Finding Differentiation with Implicit Functions
- Note:
	- Just like finding differentiation with explicit functions, there are also two methods
- What is the implicit function of a multivariable function:
	- The current function is $z=z(x,y)$, so z is similar to y in the case of a single-variable function, and is the dependent variable. When the function expression contains z in addition to x and y, it is an implicit function;
- Method One:
	- Directly find differentiation;
	- If you know the values of x and y, you need to first find the value of z, substitute it into the equation, and then calculate;
- Method Two:
	- Use two partial derivations to find the differential

**Problem Type**: Differentiating implicit functions
- Method 1: Bring formulas
	- $$\frac{dy}{dx}=-\frac{F_{x}'}{F_{y}'}$$
- Method 2: Derivative from both sides
	- At the same time, take differentiations from both sides of the function, paying attention to the complex relationship between z and x, y in implicit functions;
- Method 3: Invariance of differential forms
	-
- Note:
	- In Method 1, ${F_{x}'}$ is the derivative of x, but in this case, both z and y in $z=f(x, y)$ are treated as constants;
	- In method two, when deriving with respect to both sides, when differentiating with x, treat z as a function of $z=f(x, y)$

**Question Type**: Comprehensive questions on composite and implicit functions
- Method 1: Chain differentiation
	- (1) Draw the derivative tree diagram;
	- (2) Based on the tree diagram, determine the expression for differentiation
		- For example, the following tree diagram:
			- u
				- x
				- y
					- x
				- z
					- x
		- Its corresponding differentiative formula: $\frac{\operatorname{d}u}{\operatorname{d}x}=\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\frac{\operatorname{d}y}{\operatorname{d}x}+\frac{\partial f}{\partial z}\frac{\operatorname{d}z}{\operatorname{d}x}$
	- (3) Based on implicit function relationships, find $\frac{\operatorname{d}y}{\operatorname{d}x}$ and $\frac{\operatorname{d}z}{\operatorname{d}x}$
- Method 2: Full-differential form invariance
	- For example, the following tree diagram:
		- u
			- x
			- y
				- x
			- z
				- x
	- It does not need to be related whether u and xyz are intermediate variables, because $u=f(x,y,z)$, so according to the invariance of differential forms:
	- $du=\frac{\partial f}{\partial x}dx+\frac{\partial f}{\partial y}dy+\frac{\partial f}{\partial z}dz$

#### PART 2: Typical Example Problems
**Example**: If the function $z=z(x,y)$ is $e^{x+2y+3z}+xyz=1\quad\text{ Confirm, then }dz_{(0,0)}=$ by the equation
- Method 1: Directly find the differential
	- From $x=0,y=0$, it can be known that $z=0$
	- Derivative of both ends of $e^{x+2y+3z}+xyz=1$
	- Get: $e^{x+2y+3z}(dx+2dy+3dz)+yzdx+xzdy+xydz=0$
	- Substitute $x=0,y=0,z=0$ into the above equation to get $dx+2dy+3dz=0$
	- Finally, you get $dz|_{(0,0)}=-\frac{1}{2}(dx+2dy)$
- Method 2: Find the partial derivative separately
	- From $x=0,y=0$, it can be known that $z=0$
	- Got $dz|_{(0,0)}=z_{x}(0,0)dx+z_{y}(0,0)dy$
	- $y=0$ in $e^{x+2y+3z}+xyz=1$ gets $,  e^{x+3z}=1, $ differentiates on both sides $x$ gets
		- $e^{x+3z}(1+3z_{x})=0$
		- $z_{x}(0,0)=-\frac{1}{3}.$
	- $\text{ The same logic can be applied }\quad z_y(0,0)=-\frac23$
	- Get $dz|_{(0,0)}=-\frac{1}{2}(dx+2dy)$

**Example**: Given $u+\mathbf{e}^{u}=xy$, find $\frac{\partial u}{\partial x}$, $\frac{\partial u}{\partial y}$, and $\frac{\partial^{2}u}{\partial x\partial y}$.
- Analysis
	- Because the original expression contains u, x, y, it is an implicit function, and since u is a function of x and y, a composite function is also needed to take the derivative;
- Analysis
	- Method 1: Differentiating both sides
		- For $u+\mathbf{e}^{u}=xy$ and to both ends of x, find the partial derivative to get: $(1+e^{u})\frac{\partial u}{\partial x}=y$
			- The right side shows the partial derivative result for x;
			- The left side shows the derivative result of the composite function u. Since it is a composite function derivative, multiplying by $\frac{\partial u}{\partial x}$ is required
		- Get: $\frac{\partial u}{\partial x}=\frac y{1+e^x}$
		- Similarly, we get: $\frac{\partial u}{\partial y}=\frac x{1+e^u}$
		- Find $$\frac{\partial^2u}{\partial x\partial y}=\frac{(1+e^u)-e^u\frac{\partial u}{\partial y}y}{\left(1+e^u\right)^2}$$
	- Method 2: Formula with the formula
		- Obtained by the formula: $\frac{\partial y}{\partial x}=-\frac{F_{x}^{\prime}}{F_{x}^{\prime}}=-\frac{-y}{1+e^{u}}$
		- By the formula: $\begin{aligned}\frac{\partial u}{\partial y}=-\frac{F_{y}^{\prime}}{F_{u}^{\prime}}&=-\frac{-x}{1+e^{u}}\\&=\frac{x}{1+e^{u}}\end{aligned}$
	- Method 3: Invariance of differential forms
		- $(1+e^{u})du=ydx+xdy$
		- Divide $1+e^{u}$ to the right, and you get $du=Adx+Bdy$ is the form


#### PART 3: Key Points Review
