---
title: "Lecture 35: Basic Concepts of Differential Equations"
slug: math-043
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 35: Basic Concepts of Differential Equations. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2024-02-01
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Differential Equations"]
---

## Common Question Types and Typical Examples in This Chapter
**Exam Content**
- (1) Basic concepts of ordinary differential equations
- (2) First-order differential equations
- (3) Higher-order equations that can be reduced (not required in Math III)
- (4) Higher-order linear differential equations
- (5) Difference Equations (only the requirement for Mathematics III)

**Frequently Tested Question Types**
- Problem Type 1: Solving differential equations
- Question Type 2: Comprehensive questions
- Question Type 3: Word Problems

## 1.1 What is a Differential Equation?
#####**Definition**: #Differentialequations
> <font color="#ccc1d9"> Description: </font> equations containing unknown functions**derivatives**or**differentials**are called differential equations;
> A differential equation is a mathematical equation used to describe the relationship between a**function and its derivative**.
> 1. Its solution is not a number, but a**function that fits the equations**
> 2. The origin of differential equations dates back to the late 17th century, created to solve physical and astronomical problems encountered in the development of natural sciences;
> 3. A general equation representing the relationship between unknown functions, derivatives of unknown functions, and independent variables is called differential equations;
> 4. If the unknown function is a single-variable function, it is called a**ordinary differential equation**; if the unknown function is a multivariable function, it is called a**partial differential equation**;
> 5. Differential equations developed alongside calculus;
> 6. A differential equation contains equations of unknown functions and their derivatives; the highest order of the derivative of an unknown function is called the order of the differential equation;

**Basic Concepts**
- Differential Equations:
	- Concept:
		- Equations containing unknown derivatives or differentials
	- Example:
		- $y^{\prime}=y+x,y^{\prime\prime}+y^{3}=x,y^{\prime\prime}=e^{x}$
- Rank:
	- Concept:
		-**Highest order**containing the unknown function**derivative**;
	- Example:
		- When the differential equation is of order n: $F(x,y,y^{\prime},y^{(n)})=0$
- Solution:
	- Concept:
		- If a function is substituted into a differential equation to make it an identity, then the function is called the solution to the differential equation.
		- Suppose: $y=y (x)$ is continuous on the interval I and has derivatives up to the $n$ order, so that $F[x,  y (x),  y^{\prime}(x),  \cdotp\cdotp\cdotp,  y^{(n)}(x)]\equiv 0, $ is called $y=y (x)$. The differential equation is in the interval A solution to $I.$
	- Example:
		- If the current differential equation is $y^{\prime\prime}=e^{x}$
		- Then the solution to the current equation is:
			- 1. This equation $y=e^{x}$ is the solution to the differential equation;
			- 2. This equation $y=e^{x}+c_{1}x+c_{2}$ is also a solution to the differential equation;
- Explanation:
	- Concept:
		- If the solution to a differential equation contains any constant**, and the number of**independent (non-combinable) constants equals the order of the differential equation, it is called a general solution to the equation;
		- That is: the general solution represents the set of solutions, and the number of independent constants must equal the order of the differential equation;
	- Example:
		- If there is a differential equation with a second-order derivative
		- $y^{\prime\prime}=3 ; y^{\prime}=3x+c_{1}$
		- At this point, the function of y must have two constants: $y=\frac{3}{2}x^{2}+C_{1}x+C_{2}$
- Particular Solutions:
	- Concept:
		- A solution containing no arbitrary constants is called a particular solution of the differential equation;
	- Supplement:
		- Assigning values to the arbitrary constants in the general solution produces a particular solution;
		- To find the solution satisfying given initial conditions, first obtain the general solution and then determine its constants from those conditions;
- Initial Conditions:
	- Conditions used to determine a unique solution;
- Integral Curve:
	- The graph of a solution is called an integral curve of the differential equation;

**The Role of Differential Equations**
- Illustration:
	- ![Pasted image 20240422161204](/assets/notes/bbe8e2cb591e-Pasted-image-20240422161204.png)

#####**Definition**: #Firstorderequation
> <font color="#ccc1d9"> Description: </font> general form of first-order equations: $y^\prime=f(x,y)$

#####**Definition**: #Secondorderandhigherorderequations
> <font color="#ccc1d9"> description: </font>
> 1. Second-order differential equation: the highest derivative in an expression is the second-order derivative;
> 2. Higher-order differential equations: equations containing third-order derivatives, fourth-order derivatives, or higher-order derivatives;
> General form of a second-order differential equation: $y^{\prime\prime}=f(x,y,y^{\prime})$

#####**Definition**: #Ordinarydifferentialequations
> <font color="#ccc1d9"> Description: </font> function has only one independent variable;

**Explanation**
- Introduction:
	- In physics: the most commonly used variable in ordinary differential modes is time;
- Example: Study the change in the position of a small ball after it is thrown upward;
	- Current differential equation: second-order derivative
		- Gravitational acceleration of the ball
			- $$\ddot{y}(t)=-g$$
	- Know**First-Order Derivatives**:
		- Knowing that the downward component is gravitational acceleration $-g$, thus $\ddot{y}(t)=-g$, its relationship with velocity can also be described: $\frac{d}{dt}(-gt+v_0)=-g$.
		- Acceleration alone does not determine the velocity; an initial condition is needed.
	- Add**Initial Condition 1**:
		- Based on the speed of $v_0$, the downward g action is performed by $\dot{y}(t)=-gt+v_0$
		- The position is still undetermined; at this stage we only know $\frac{d\,y(t)}{dt}=-gt+v_0$.
	- Find an **antiderivative**:
		- $\frac{d}{dt}\left(-\frac{1}{2}gt^{2}+v_{0}t\right)=-gt+v_{0}$。
	- Add**Initial Condition 2**:
		- When the initial position of an object is $y_0$ and its relationship is: $\frac{d}{dt}\left(-\frac{1}{2}gt^{2}+v_{0}t+y_{0}\right)=-gt+v_{0}$.
	- Obtain the solution of the**differential equation**:
		- $y(t)=-(1/2)gt^2+v_0t+y_0$


#####**Definition**: #Partialdifferentialequations
> <font color="#ccc1d9"> Description: </font> function has multiple independent variables;
> Differential equations written based on partial derivatives, hence called partial differential equations;

**Explanation**
- Partial derivative:
	- Consider that there are currently two variables, each with their respective derivative formulas, which is the partial derivative:
	- $$\frac{dT}{dt}(x,t)\quad\frac{dT}{dx}(x,t)$$
	- To distinguish it from the d derivative of ordinary differential equations, a new notation is used here:
	- $$\frac{\partial T}{\partial t}(x,t)\quad\frac{\partial T}{\partial x}(x,t)$$
- Example: Heat conduction equation
	- Formula:
		- $\frac{\partial T}{\partial t}=\alpha\nabla^2T$
	- Corresponding partial differential equation:
		- Because it is a differential equation written based on partial derivatives, it is called a partial differential equation;
		- $$\frac{\partial T}{\partial t}(x,t)=\alpha\cdot\frac{\partial^2T}{\partial x^2}(x,t)$$
	- Illustration:
		- ![Pasted image 20240422162747](/assets/notes/703f10079fac-Pasted-image-20240422162747.png)

#####**Definition**: #Partialderivative
> <font color="#ccc1d9"> Description: </font> for $z=f(x,y)$ functions, there are two partial derivatives defined:
> 1. Partial derivative of X: When partial derivative of X, Y is fixed at$y_0$at (has no effect on x), $x$exist$x.$everywhere$\Delta x$The increment of, at this time there is only one variable x, which is called:
> $\lim_{\Delta x\to0}\frac{f\left(x_{0}+\Delta x,y_{0}\right)-f\left(x_{0},y_{0}\right)}{\Delta x}$ is the partial derivative with respect to X;
> Written as: $\left.\frac{\partial z}{\partial x}\right|_{(x_{0},y_{0})},\left.\frac{\partial f}{\partial x}\right|_{(x_{0},y_{0})},z_{_z}(x_{0},y_{0})\text{ or }$ $f_{x}(x_{0},y_{0})$
> 2. Partial derivative with respect to Y: The same applies to X,
>     $lim_{\Delta y\to0}\frac{f(x_{0},y_{0}+\Delta y)-f(x_{0},y_{0})}{\Delta y}$；
> Written as: $\left.\text{}\frac{\partial z}{\partial y}\right|_{(x_{0},y_{0})},\left.\frac{\partial f}{\partial y}\right|_{(x_{0},y_{0})},z_{y}(x_{0},y_{0})\text{ or }f_{y}(x_{0},y_{0}).$

**Method**: How to find the partial derivative of x or y
- When $z=f(x,y)$, treat y or x as a constant and take the derivative directly from x or y;
- Example: partial derivative of $z=x^{2}+3xy+y^{2}$ at $(1.2)$;
	- Step 1: Calculate the partial derivative function
		- Taking partial derivative with respect to x: $\frac{\partial z}{\partial x}=2x+3y$
		- Finding partial derivative with respect to y: $$\frac{\partial z}{\partial y}=3x+2y$$
	- Step 2: Subtract $(1.2)$ point into the function after finding the partial derivative with respect to x or to y: 2x + 3 y or 3 x + 2 y to get the result

**Partial Derivation of Binary Functions**
- In a single-variable function
	- differentiable -> continuity
	- Differentiability is a very strong condition
- In a binary function
	- The premise for the partial derivation of a function of two variables with respect to x < - On the line y = $y_0$, it is continuous;
	- For a binary function, partial derivatives exist and may not be continuous at $(x_0,y_0)$;

## 1.2 Differential Equations of Separable Variables
#####**Definition**: #Equationsofseparablevariables
> <font color="#ccc1d9"> description: </font>
> Form: $$y^{\prime}=f(x)g(y)$$
> Explanation: $\frac{dy}{dx}=f(x)g(y)$ `->` $\frac{dy}{g(y)}=f(x)dx$ can separate $g(y)$ and $dy$, $f(x)$ $dx$ to both sides of an equation `->` differential equations of separable variables;
> Solutions of separable variables: Integral of both sides $$\int\frac{dy}{g(y)}=\int f(x)dx$$

**Example Question**: Find the general solution of $y^{\prime}=\dfrac{y(1-x)}x$.
- Analysis
- Analysis
	- $$\frac{dy}{y}=\frac{1-x}{x}\,dx,\qquad
	  \ln|y|=\ln|x|-x+C_1.$$
	- Hence $$y=Cxe^{-x},\qquad x\neq0.$$
- Question Type: #

**Example Question**: $\frac{dy}{dx}=2xy$
- Analysis
- Analysis
	- Finding the integral
		- $\int\frac{dy}{y}=\int 2x\,dx$
	- Obtained:
		- $\ln|y|=x^{2}+c$
	- So:
		- $|y|=e^{x^{2}+c}$
	- Ultimate:
		- $y=Ce^{x^{2}}$
- Question Type: #Separablevariables

## 1.3 Homogeneous Equations
#####**Definition**: #Generateorderequations
> <font color="#ccc1d9"> Description: </font> simplified equation,**all nonzero terms have equal exponents**: $$\frac{dy}{dx}=\varphi(\frac{y}{x})$$

**Explanation**
- Concept:
	- The right end is a binary function about xy, but it can be written as a $\frac{y}{x}$ binary function;
- Qici:
	- The right side acts as a binary function, which is a**zero-degree and homogeneous function**;
	- That is: dy is a function compared to dx, and**the number of degrees x and y is equal**

**Method**: Three key strategies
- Step zero: Organize into homogeneous equations with only $\frac{dy}{dx}$ on the left, i.e., $\frac{dy}{dx}=\varphi(\frac{y}{x})$;
- Step one: Write down the $u=\frac{y}{x}$
- Step 2: Since $y=xu$, after taking the derivative of y, we get $\frac{dy}{dx}=u+x\frac{du}{dx}$, which is the expression for $y^{\prime}=\frac{dy}{dx}=u+x\frac{du}{dx}=u+xu^{\prime}$;
- Step 3: Substitute into the original differential equation to obtain $u+x\frac{du}{dx}=\varphi(u)$, which is separable.
	- That is, convert it into a separable differential equation and solve.

**Example**: $\text{Find the solution of }x^2y^{\prime}+xy=y^2\text{ satisfying the initial condition }y(1)=1.$
- Analysis
- Analysis
	- The original equation is homogeneous equation $y^{\prime}=(\frac{y}{x})^{2}-\frac{y}{x}$
	- $\text{Let }u=\frac yx\text{; then}$
	- $xu^{\prime}+u=u^2-u,\quad xu^{\prime}=u^2-2u.$
	- At this point, you can separate the variable: $\frac{du}{u^{2}-2u}=\frac1xdx$
	- $\frac12[\ln|u-2|-\ln|u|]=\ln|x|+C_1,\frac{u-2}u=Cx^2$
	- $\frac{y-2x}y=Cx^2$
	- From $y(1)=1$, we get $C=-1$, which gives the specific solution to be $$\frac{y-2x}y=-x^2,\quad\text{ That is }y=\frac{2x}{1+x^2}$$
- Question Type: #

**Example Question**: $y^{2}+x^{2}\frac{dy}{dx}=xy\frac{dy}{dx}$
- Analysis
	- Note:
	- 1. First, process the function so that it satisfies y/x;
	- 2. How to determine whether the homogeneous equations -> x and y are more symmetric in their degrees?
- Analysis
	- First, let's summarize:
		- $\frac{dy}{dx}=\frac{y^{2}}{xy-x^{2}}$
	- Then divide all numerators and denominators by the square of x;
		- $\frac{\left(\frac{y}{x}\right)^{2}}{\frac{y}{x}-1}$
	- Then use three key methods to solve the problem
		- $x\frac{du}{dx}=\frac{u^{2}}{u-1}-u$
	- Then
		- $\frac{u-1}{u}du=\frac{dx}{x}$
- Question Type: #Generateorderequations

## 1.4 Frequently Tested Question Types
### Question Type: #Solvedifferentialequations
#### PART 1: Problem-solving methods
**Core Points**: Identify types and select methods
- Concept:
	- If the problem requires a particular solution satisfying given conditions, first find the general solution;
	- Before finding a general solution, first determine the type of the current differential equation;

**Summary**: Methods for determining the type of differential equation
- Method:
	- 1. Determining type, and when determining type, it is usually in the form of a derivative (i.e., non-differential, without $dy$, $dx$, etc.)
	- 2. If you can't judge any form, `->`
		- Method 1: $x、y$ Swap the two;
		- Method 2: Variable substitution;
	- 3. Determine the order: determine if and to what degree;
	- 4. Core method for combining differentials: grouped differentials `->` Easy to assemble on a single basis, use it separately. Hard to assemble, put several expressions together;

**Summary**: Common form
- Equation in one variable:
	- First-order equation:
		- (A) Homogeneous equation:
			- Format: $$\frac{dy}{dx}=\varphi(\frac{y}{x})$$
			- Method: Let $u=\frac yx$, substitute, and simplify `->` reduce the equation to separable form;
		- (B) Linear equation:
			- Format: $$y^{\prime}+P(x)y=Q(x)$$
			- Method: Write it in standard form, then use the general-solution formula $$y=e^{-\int p(x)dx}\left[\int Q(x)e^{\int p(x)dx}dx+C\right]$$ `->` [Lecture 36: First-order Linear Differential Equations](/en/notes/math-044/)
		- (C) Bernoulli Equation:
			- Format: $$y^{\prime}+p (x) y=Q (x) y^{\alpha} \quad\quad\quad\quad\quad\quad(\alpha\neq1)\quad(y^{1-\alpha}=u)$$
			- Method:
	- Second-order equations: classify them by their coefficients
		- Constant coefficients:
			- (D) Second-order homogeneous equation with constant coefficients:
				- Form: $$y^{\prime\prime}+py^{\prime}+qy=0$$
				- Method: Write the characteristic equation and find its roots `->` [Lecture 38: Homogeneous Linear Differential Equations with Constant Coefficients](/en/notes/math-046/)
			- (E) Second-order constant coefficient nonhomogeneous equation:
				- Format: $$y^{\prime\prime}+py^{\prime}+qy=f(x)$$
				- Method: Split the solution into two parts: **general solution of the nonhomogeneous equation = general solution of the corresponding homogeneous equation + one particular solution of the nonhomogeneous equation**; `->` [Lecture 39: Nonhomogeneous Linear Differential Equations with Constant Coefficients](/en/notes/math-047/)
		- Variable coefficients:
			- (F) Order-reducible equations involving $x$ and $y$
				- Format: $$y^{\prime\prime}=f(x,y^{\prime})$$
				- Method: Set $y^{\prime}=p$ and $y^{\prime\prime}=\frac{dp}{dx}$ to obtain the first-order equation $\frac{dp}{dx}=f(x,p)$, then separate variables when possible;
			- (G) Order-reducible equation involving $y$ but not $x$
				- Form: $$y^{\prime\prime}=f(y,y^{\prime})$$
				- Method: Set $y^{\prime}=p(y)$, so $y^{\prime\prime}=p\frac{dp}{dy}$; this gives a first-order equation in $y$ and $p$;
- Differential Forms in Two Variables:
	- (H) Equation in differential form:
		- Form: $$P(x,y)\,dx+Q(x,y)\,dy=0$$
		- Method: Regroup terms or test for exactness, then integrate with respect to $x$ or $y$ as appropriate;

**Question Types**: Summary of question types and methods
- 1. Finding a particular solution:
	- (1) Find a general solution
	- (2) Find the constant
	- (3) Obtain a particular solution
- 2. Inverse problem: derive a differential equation from a given family of solutions;
	- Analysis: In a second-order constant-coefficient nonhomogeneous equation,
		- **nonhomogeneous general solution = homogeneous general solution + one particular solution**;
		- $y=C_{1}y_{1}+C_{2}y_{2}+y^{\star}$;
	- Method: Identify the two linearly independent homogeneous components $y_1,y_2$, recover the characteristic roots and homogeneous operator, and then use $y^\star$ to determine the nonhomogeneous term;


---
### Question Type: #ComprehensiveDifferentialEquationProblems
#### PART 1: Problem-solving methods
**Method**: Solve the differential equation complex
- (1) Analysis: This is a comprehensive question about differential equations and what content it covers;
- (2) Different question types use common methods corresponding to different contents;

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review


---
### Question Type: #Differentialequationapplicationproblems
#### PART 1: Problem-solving methods
**Question Type**: Geometry word problems
- Method:
	- (1) Sketch the current image, which needs to highlight the main features;
	- (2) Use the relationship given in the problem to establish a differential equation;
	- (3) Solving differential equations;

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review
