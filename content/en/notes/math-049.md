---
title: "Lecture 40: Differentiation Rules for Multivariable Composite Functions"
slug: math-049
description: "Graduate Entrance Examination Mathematics study notes: Lecture 40: Differentiation Rules for Multivariable Composite Functions. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-03
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multivariable Differential Calculus"]
---

**Chapter Content**
- (1) Basic concepts of multivariable functions
- (2) Multivariable Differential Method
- (3) Extrema and extrema of multivariable functions

**Section Overview**
- (1) Limits of multivariable functions
- (2) Continuity of multivariable functions
- (3) Partial derivative
- (4) Total differential
- (5) Continuous, differentiable, and differentiable relationships

**Frequently Tested Question Types in This Section**
- Discuss continuity, differentiability, and differentiability

---
## 41.1 Limits of Multivariable Functions
### 41.1.1 Concept of Multivariable Function Limits
#####**Definition**: #Thelimitofmultivariablefunctions
> <font color="#ccc1d9"> description: </font> $$\lim_{(x,y)\to(x_0,y_0)}f(x,y)=A$$

**Explanation**
- 1. Trends in the limits of multivariable functions:
	- In a single variable, there is only one independent variable, so the approach to the target point and the method is relatively simple, only along the X-axis;
	- But in binary variables, there are two independent variables, but $(x,y)$ `->` $(x_0,y_0)$ is in**arbitrary ways**
	- It must be ensured that in any direction, the function value equals the limit value (similar to the left and right limits in a single-variable limit; only then can this multi-limit be considered to exist;
- 2. Five major characteristics
	- (1) Local bounding;
	- (2) Number retention;
	- (3) Rational operation rules;
	- (4) The relationship between limits and infinitesimals;
	- (5) Compression;
	- Note: L'Hôpital's rule is not available for general multivariable limits.

### 41.1.2 Basic Methods
**Example**: Find the value of the limit
- Question: Find $$\lim_{x\to0,\,y\to0}\frac{xy^{2}}{x^{2}+y^{2}}.$$
- Analysis
	- This limit has the indeterminate form $0/0$, but L'Hôpital's rule does not apply to a two-variable limit.
	- The denominator is quadratic, and the numerator is cubic
	- For `A/B` type:
		- If the power of A > the power of B, it is generally 0;
		- If the power of A < the power of B, it is generally infinite;
		- If the power of A = the power of B, it generally does not exist;
	- In this regard, the preliminary judgment is that the limit of the subfunction is 0;
		- When in a single element: take the absolute value of x, then expand the `->` squeeze theorem;
- Analysis
	- Method One:
		- $0\leq|\frac{xy^{2}}{x^{2}+y^{2}}|\leq|x|\rightarrow0$
		- So $\lim_{x\to0,\,y\to0}\frac{xy^{2}}{x^{2}+y^{2}}=0$
	- Method Two:
		- You can take the x of the numerator, where x `->` 0;
		- After the numerator is presented, the remaining parts are not greater than 1 according to their boundedness, so the limit of the entire function is 0;

**Example Question**: Proving that limits do not exist
- Question: Find $$\lim_{x\to0,\,y\to0}\frac{xy^{}}{x^{2}+y^{2}}$$ Prove that its limit does not exist
- Analysis
	- The numerator is 2 times, the denominator is 2 times;
	- If there are two different pathpoints and the obtained limit differs, then this limit does not exist;
	- Method: Confine `y` to a single straight line;
- Analysis
	- $$\lim_{x\to0,\,y=kx}\frac{xy^{}}{x^{2}+y^{2}} = \lim_{x\to0,\,y\to0}\frac{kx^{2}}{x^{2}+k^{2}x^{2}}=\frac{k}{1+k^2}$$
	- Because k is the slope of a straight line, k is not a fixed value. When k takes different slopes, the function values of the limit are different;
	- Therefore, this limit does not exist;

## 41.2 Continuity of Multivariable Functions
**Two Concepts**
- 1. Concept;
- 2. Discontinuity;
- 3. Nature;

#####**Definition**: #Theconceptofcontinuousmultivariablefunctions
> <font color="#ccc1d9"> description: </font> $$\lim_{(x,y)\to(x_0,y_0)}f(x,y)=f(x_0,y_0)$$

#####**Theorem**: #Propertiesofmultivariablecontinuousfunctions
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> Property 1: The sum, difference, product, and quotient of multivariable continuous functions (with nonzero denominator) are still continuous functions;
> Property 2: The composite function of a multivariable continuous function is also a continuous function;
> Property 3: Multivariable elementary functions are continuous within their**definition region**;
> Property 4: Maximum Theorem `->` A continuous function on a bounded closed region D must find its maximum and minimum values on region D;
> Property 5: A continuous function on a bounded closed region D must obtain any value between the maximum and minimum values on region D;

## 41.3 Partial Derivatives
### 41.3.1 Basic Concepts of Partial Derivatives
#####**Definition**: #Partialderivative
> <font color="#ccc1d9"> Description: </font> for $z=f(x,y)$ functions, there are two partial derivatives defined:
> 1. Partial derivative of X: When partial derivative of X, Y is fixed at$y_0$at (has no effect on x), $x$exist$x.$everywhere$\Delta x$The increment of, at this time there is only one variable x, which is called:
> $$\lim_{\Delta x\to0}\frac{f\left(x_{0}+\Delta x,y_{0}\right)-f\left(x_{0},y_{0}\right)}{\Delta x}$$ is the partial derivative with respect to X;
> Recorded as:
> 	    $\left.\frac{\partial z}{\partial x}\right|_{(x_{0},y_{0})},\left.\frac{\partial f}{\partial x}\right|_{(x_{0},y_{0})},z_{_z}(x_{0},y_{0})\text{ or }$ $f_{x}(x_{0},y_{0})$
> 2. Partial derivative with respect to Y: The same applies to X,
>     $$lim_{\Delta y\to0}\frac{f(x_{0},y_{0}+\Delta y)-f(x_{0},y_{0})}{\Delta y}$$
> Recorded as:
> 	    $\left.\text{}\frac{\partial z}{\partial y}\right|_{(x_{0},y_{0})},\left.\frac{\partial f}{\partial y}\right|_{(x_{0},y_{0})},z_{y}(x_{0},y_{0})\text{ or }f_{y}(x_{0},y_{0}).$

**Explanation**
- Partial derivative of X:
	- Explanation:
		- Essentially, it is the derivative of a function of x in one variable, representing the rate of change of the function along the X-axis;
	- Other forms: $$\frac{\partial f(x,y)}{\partial x}$$
- Partial derivative of Y:
	- Explanation:
		- Essentially, it is the derivative of a function of y, representing the rate of change of the function along the Y-axis;
	- Other forms:
		- $$\frac{\partial f(x,y)}{\partial y}$$
- Summary: Essentially, it is the derivative of a single-variable function;

**Method**: How to find the partial derivative of x or y
- When $z=f(x,y)$, treat y or x as a constant and take the derivative directly from x or y;
- Example: partial derivative of $z=x^{2}+3xy+y^{2}$ at $(1.2)$;
	- Step 1: Calculate the partial derivative function
		- Taking partial derivative with respect to x: $\frac{\partial z}{\partial x}=2x+3y$
		- Finding partial derivative with respect to y: $$\frac{\partial z}{\partial y}=3x+2y$$
	- Step 2: Subtract $(1.2)$ point into the function after finding the partial derivative with respect to x or to y: 2x + 3 y or 3 x + 2 y to get the result

### 41.3.2 Determining the Existence of a Partial Derivative
**Question Type**: Determine whether partial derivatives exist
- Method 1: Definition method
	- Using the definition of partial derivatives, substitute the function values into the partial derivative of Y and the partial derivative of X, find the limit value of the substituted function, and calculate whether this limit exists;
- Method Two: Essential Method
	- Because the partial derivative is essentially the derivative of a function in one variable;
	- So you can directly substitute one value of the partial derivative X or Y (the one with the fixed value)
	- For example, to find the partial derivative of X, you can directly substitute the value of Y into it to find the limit of the derivative of the function of X;

### 41.3.3 Geometric Meaning of Partial Derivatives
#####**Definition**: #Thegeometricmeaningofpartialderivativesofabinaryfunction
> <font color="#ccc1d9"> description: </font> Surface $Z=f(x,y)$
> 1. $f_x(x_0,y_0)$ represents the tangent line to $y=f(x)$ on the $y=f(x)$ line, $x_0$;
> 2. $f_y(x_0,y_0)$ represents the tangent line to $x=f(y)$ on the $x=f(y)$ line, $x_0$;

### 41.3.4 Higher-Order Partial Derivatives
#####**Definition**: #Higherorderpartialderivatives
> <font color="#ccc1d9"> description: </font>
> $$\frac{\partial}{\partial x}\biggl(\frac{\partial z}{\partial x}\biggr)=\frac{\partial^{2}z}{\partial x^{2}}=f_{xx}^{\prime\prime}\quad\frac{\partial}{\partial y}\biggl(\frac{\partial z}{\partial x}\biggr)=\frac{\partial^{2}z}{\partial x\partial y}=f_{xy}^{\prime\prime}$$
> $$\frac{\partial}{\partial x}\Bigg(\frac{\partial z}{\partial y}\Bigg)=\frac{\partial^{2}z}{\partial y\partial x}=f_{yx}^{\prime\prime}\quad\frac{\partial}{\partial y}\Bigg(\frac{\partial z}{\partial y}\Bigg)=\frac{\partial^{2}z}{\partial y^{2}}=f_{yy}^{\prime\prime}$$

**Explanation**
- Mixed partial derivative:
	- $f_{xy}^{\prime\prime}$
	- $f_{yx}^{\prime\prime}$

#####**Theorem**: #Higherorderpartialderivativetheorem
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> if the two second-order mixed partial derivatives $\frac{\partial^2z}{\partial x\partial y}$ and $\frac{\partial^2z}{\partial y\partial x}$ of function $z=f(x,y)$ are continuous within region $D$, then within that region:
> $$\frac{\partial^2z}{\partial x\partial y}=\frac{\partial^2z}{\partial y\partial x}$$

**Explanation**
- When first x or y is applied first, the limit value is the same;

## 41.4 Total Differential of Multivariable Functions
#####**Definition**: #Totaldifferentialofmultivariablefunctions
> <font color="#ccc1d9"> Description: </font> If $\Delta z=f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)=A\Delta x+B\Delta y+o(\rho)$, then the function $z=f(x,y)$ is differentiable at point $(x_0,y_0)$;
> Multivariate differential: $$dz=A\Delta x+B\Delta y$$

#####**Theorem**: #Differentiablenecessaryconditions
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $z=f(x,y)$ is differentiable at $(x_0,y_0)$, then both partial derivatives exist there and $\mathrm{d}z=\frac{\partial z}{\partial x}\mathrm{d}x+\frac{\partial z}{\partial y}\mathrm{d}y$.

**Explanation**
- Differentiable `->` Differentiable;
- Differentiable `-x>` Differentiable;
- First-order partial derivative continuous `->` differentiable;
- Differentiable `-x>` First partial derivative continuous;

**Method**: Use definitions to determine differentiability (sufficient condition)
- (1) Whether $f_{x}(x_{0},  y_{0})$ and $f_{y}(x_{0},  y_{0})$ both exist
	- If there is none, then it is certainly non-differentiable;
	- If both exist, proceed to (2) for judgment;
- （2）$$\lim_{(\Delta x,\Delta y)\to(0,0)}\frac{\Delta z-[f_{x}(x_{0},y_{0})\Delta x+f_{y}(x_{0,}y_{0})\Delta y]}{\sqrt{\left(\Delta x\right)^{2}+\left(\Delta y\right)^{2}}}\text{ Is it zero? }$$
	- Explanation:
		- According to $\Delta z=f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)=A\Delta x+B\Delta y+o(\rho)$, place $f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)$ on the left side;
		- See if $\Delta z-(f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0))$ is `0` when divided by $o(\rho)$;
	- Conclusion:
		- The above limits exist and are 0 `->` differentiable;
		- If it does not exist or is not 0 `->` is not differentiable;
	- Meaning:
		- The meaning of the above formula `->` Because the differential of a point $dz$ equals $A\Delta x+B\Delta y+o(\rho)$, so when the differential of this point exists, whether ${dz-A\Delta x+B\Delta y}\text{ Divide by }{o(\rho)}$ is zero can be seen until its derivative exists;

#####**Theorem**: #Sufficientconditionsfordifferentiability
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> If the partial derivative $\frac{\partial z}{\partial x},\frac{\partial z}{\partial y}$ of $z=f(x,y)$ is continuous at point $(x_0,y_0)$, then function $z=f(x,y)$ is differentiable at point $(x_0,y_0)$;

**Explanation**
- Concept:
	- Two partial derivatives are `->` continuously, as a binary function, the partial derivative exists when x and y approach $x_0、y_0$ respectively;
- Conclusion:
	- Two partial derivatives `->` consecutive differentiable;

## 41.5 Relationships among Continuous, Partial Derivatives, and Differentiables
**Single-variable Function**
- Illustration:
	- ![Pasted image 20240504025921](/assets/notes/562b68fb1e45-Pasted-image-20240504025921.png)

**Multivariate Functions**
- 1. Similarities with the single dollar:
	- (1) Continuously `-x>` differentiable;
	- (2) Differentiable `->` Deviable;
	- (3) Differentiable `->` continuous;
	- (4) Continuous `-x>` differentiable;
- 2. Differences from the single yuan:
	- Cause:
		- The differences are all caused by**derivative**, so why can't diversity be allowed?
		- A partial differentiable is actually the partial derivative of $f_x(x_0,y_0)$ and $f_y(x_0,y_0)$;
		- $f_x(x_0,y_0)$ `->` $f(x,y_0)$ On the $y=y_0$ line, the function changes only depending on the function value on that line;
		- $f_y(x_0,y_0)$ `->` $f(x_0,y)$ On the $x=x_0$ line, the function changes only depending on the function value on that line;
		- Continuity `->` is a heavy limit because it requires that the function is continuous in any direction, while the partial derivative can only determine whether the current derivative exists on a certain line, so it cannot indicate whether it is continuous in any direction;
		- Why is differentiable in a single variable: Because in a single variable, the differentiable means that every region is differentiable, so the differentiable `->` is differentiable and continuous;
	- Concept:
		- (1) Deflectable `-x>` continuity;
		- (2) Partially differentiable `-x>` differentiable;
- 3. New points compared to the One Yuan:
	- (1) Partial derivatives are continuous `->` differentiable;
	- (2) Differentiable `-x>` Partial Derivatives Continuous;
- Illustration:
	- And

## 41.5 Frequently Tested Question Types

---
### Question Type: #Continuous. Partial Derivatives, Total Derivatives and Their Relationships
#### PART 1: Problem-solving methods
**How to Judge**
- Determining whether differentiable:
	- 1. Definition:
		- Step 1: Determine whether $f_{x}(x_{0},  y_{0})$ and $f_{y}(x_{0},  y_{0})$ both exist;
		- Step 2: Use the following definitions to determine whether a double limit exists;
			- Formula: $$\lim_{(\Delta x,\Delta y)\to(0,0)}\frac{\Delta z-[f_{x}(x_{0},y_{0})\Delta x+f_{y}(x_{0,}y_{0})\Delta y]}{\sqrt{\left(\Delta x\right)^{2}+\left(\Delta y\right)^{2}}}\text{ Is it zero? }$$
- Determining whether it is differentiable:
	- 1. Definition method: Find the partial derivative of x and y separately, use partial derivatives to define and analyze whether the univariate function derivative corresponding to the partial derivative exists;
		- Formula (X partial derivative): $$\lim_{\Delta x\to0}\frac{f\left(x_{0}+\Delta x,y_{0}\right)-f\left(x_{0},y_{0}\right)}{\Delta x}$$
	- 2. Bring first, ask later:
- Determining continuity:
	- 1. Definition:
		- (1) Prove continuity: Whether the function value at a certain point equals the limit value of that function; if equal, then continuous;
		- (2) Proving discontinuity: same;
	- 2. Special `y` Value Method:
		- Substitute a fixed y function into a function, often used to prove discontinuity;
		- Common Forms:
			- $y=kx$
			- $y=0$
- Determining whether the partial derivative is continuous:
	- Note:
		- Multivariable function continuous `≠` Multivariable function partial derivative continuous;
		- Whether the partial derivative is continuous refers to whether the**partial derivative of the derivative with respect to X or Y**is continuous;
	- 1. Definition method: Use partial derivative functions with respect to X or Y to solve:
		- If the following formula does not hold, the partial derivative is discontinuous;
		- Formula (partial derivative function with respect to X): $$\lim_{x\to0,y\to0}f_{x}(x,y)=f_{x}(0,0)$$


#### PART 2: Typical Example Problems
**Example Question**: Does the binary function $$f(x,y)=\begin{cases}\frac{xy}{x^{2}+y^{2}},&(x,y)\neq(0,0),\\0,&(x,y)=(0,0)\end{cases}$$ have continuous or partial derivatives at point $(0,0)$?
- Analysis
	- Determine whether the function value at this point is continuous `->` equal to the function's limit;
- Analysis
	- Determining continuity:
		- substitute $y=kx$ for $\lim_{x\to0,y\to0}\frac{xy}{x^{2}+y^{2}}$ to prove that its limit does not exist `->` discontinuity;
	- Determining partial derivatives:
		- Find the partial derivative of x: $f_{x}^{\prime}(0,0)=\lim_{x\to0}\frac{f(x,0)-f(0,0)}{x}=\lim_{x\to0}\frac{0-0}{x}$ `->` the partial derivative is 0;
		- Finding the partial derivative of y: The method is similar to finding x, and the result is also zero partial derivative;
		- Therefore, partial derivatives exist;
#### PART 3: Key Points Review
