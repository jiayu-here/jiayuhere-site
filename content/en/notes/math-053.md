---
title: "Lecture 45: Calculation of Double Integrals"
slug: math-053
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 45: Calculation of Double Integrals. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-02-09
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multiple Integrals"]
---

## 45.1 Calculation of Double Integrals
**Core Idea**: Transform a double integral into the calculation of a definite integral in one variable, simplifying the calculation method;

**Method Selection**
- Choose methods based on the following:
- 1. integrand;
- 2. Scoring area;

**Suitable for polar coordinates**
- (1) Integrands suitable for polar coordinates calculations
	- Formula:
		- $$f(x^2+y^2),f(\sqrt{x^2+y^2}),f(\frac yx),f(\frac xy)$$
	- Cause:
		- $\sqrt{x^2+y^2}$ is more complex in the Cartesian coordinate system, but represents `ρ` in polar coordinates
		- $\frac yx$ In polar coordinates, it represents an angle
- (2) Integration fields suitable for polar coordinates
	- $$x^{2}+y^{2}\leq R^{2};\quad\quad\quad r^{2}\leq x^{2}+y^{2}\leq R^{2};\quad\quad\quad\\x^{2}+y^{2}\leq2ax;\quad\quad\quad x^{2}+y^{2}\leq2by;$$
	- Note:
		- When the center is not at the origin, $x-x_0$ can be set to $\rho\sin\theta$, and similarly, $y-y_0$
- If (1) and (2) have a conflict, (1) takes precedence

## 45.2 Calculation Using Cartesian Coordinate System
#####**Theorem**: #Doubleintegrationcalculationbasedonrectangularcoordinatesystem
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> (1) First `Y` Later `X`: $$\int\int_D{f(x,y)d\sigma = \int_{a}^{b}[\int_{y_{1}(x)}^{y_{2}(x)}f(x,y)dy]dx}$$
> Area: $\begin{aligned}\varphi_1(x)&\leq y\leq\varphi_2(x)\cdot\\a&\leq x\leq b\end{aligned}$
> $\varphi_1(x)\leq y\leq\varphi_2(x)$ represents the range of x values, which is the function of x with respect to y, and $\varphi_1(x)$ is the actual value of y equal to.
> (2) First `X` Later `Y`: $$\iint_Df(x,y)\mathrm{d}\sigma=\int_c^ddy\int_{\psi_1(y)}^{\psi_2(y)}f(x,y)dx$$
> Area: $\begin{aligned}\Psi(y)&\leq X\leq\Psi_2(y)\\c&\leq y\leq d\end{aligned}$

**Method**: Set the points limit;
- When Y comes first, then X:
	- `dy` upper and lower integral limits `->`**Draw a ray from bottom to top**, with the lower end of the ray being the `dy` lower limit of integration and the upper end of the ray being the upper limit of the integral of dy;
	- `dx` upper and lower limits of integration `->` Observe the graph to see the range of x values;
- When X comes first, then Y:
	- The upper and lower limits of `dx` integration `->`**Draw a ray from left to right**, with the left end of the ray as the `dx` lower limit and the upper end as the `dx` lower limit;
	- `dy` upper and lower limits of integration `->` Observe the image and see the**range**of `y`;

**Explanation**
- Concept:
	- Both can be used; choose whichever is more convenient for calculation;
- First `Y` `X`:
	- Concept:
		- $\int_{a}^{b}[\int_{y_{1}(x)}^{y_{2}(x)}f(x,y)dy]dx$ or $\int_a^b\mathbf{d}x\int_{y_1(x)}^{y_2(x)}f(x,y)\operatorname{d}y.$
	- Reasoning:
		- 1. First, find the cross-sectional area: $S(x)=\int_{y_1(x)}^{y_2(x)}f(x,y)\mathsf{d}y.$
		- 2. Then, for the curved edge body area, solve: $V=\int_a^bS(x)\operatorname{d}x$
		- 3. Merging the two: $\int_{a}^{b}[\int_{y_{1}(x)}^{y_{2}(x)}f(x,y)dy]dx$
	- Illustration:
		 - 2D:
			 - ![Pasted image 20240209014016](/assets/notes/cc5c4223a429-Pasted-image-20240209014016.png)
		- 3D:
			- ![Pasted image 20240209014221](/assets/notes/09f953820fd4-Pasted-image-20240209014221.png)
- First `X` `Y`:
	- Premise: $(\sigma)=\{(x,y)\mid x_1(y)\leq x\leq x_2(y),c\leq y\leq d\}$
	- Illustration:
		- ![Pasted image 20240209015118](/assets/notes/ae3eee53b8b5-Pasted-image-20240209015118.png)
	- Convert to two single-invariant integrals with x before y;
	- Formula: $\begin{aligned}\iint_{(\sigma)}f(x,y)\operatorname{d}\sigma&=\int_c^d[\int_{x_1(y)}^{x_2(y)}f(x,y)dx]\operatorname{d}y\\\\&=\int_c^d\operatorname{d}\left.y\right]_{x_1(y)}^{x_2(y)}f(x,y)\operatorname{d}x.\end{aligned}$
- Non-X and non-Y regions
	- Illustration
		- ![Pasted image 20240209015436](/assets/notes/ba644f067fd4-Pasted-image-20240209015436.png)
	- Concept:
		- A complex double integral of a non-X and non-Y figure;
	- Method:
		- Can**be converted by partitioning to: sum of multiple X-types and multiple Y-types**;

## 45.3 Calculation Using Polar Coordinates
#####**Theorem**: #Doubleintegralcalculationbasedonpolarcoordinates
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>$$\text{ First }\rho\text{ Afterwards }\theta\quad\iint_Df (x, y)\mathrm{d}\sigma=\int_\alpha^\beta d\theta\int_{\varphi_1 (\theta)}^{\varphi_2 (\theta)}f (\rho\cos\theta,\rho\sin\theta)\rho d\rho$$
> Area: $\begin{aligned}\varphi_1(0)&\leq p\leq\varphi_2(0)\\\alpha&\leq\theta\leq\beta.\end{aligned}$
>

**Explanation**
- Note:
	- When integrating with $\rho$, $\theta$ in the expression can be regarded as a constant. Similarly, when integrating with $\theta$;
- Supplement:
	- The contents of a function can be divided into two integrals for calculation;
	- $\iint_D\frac{x\sin (\pi\sqrt{x^2+y^2})}{x+y}dxdy=\int_0^{\frac\pi 2}\frac{\cos\theta}{\cos\theta+\sin\theta}d\theta\cdot\int_1^2\rho\sin (\pi\rho) d\rho$
	- $\Delta\sigma=\frac12[(\rho+\Delta\rho)^2\Delta\theta-\rho^2\Delta\theta]$ = $\rho\Delta\rho\Delta\theta+\frac12(\Lambda\rho)^2\Delta\theta.$

## 45.4 Calculation Using Symmetry and Parity
### 45.4.1 Parity
**Concepts**: When `Y` is symmetrical, look at `X`; when about `X`, look at `Y`;

**Property One**: If the integral `D` relation `Y` axial, then the function is evenly `X`:
- If the function with respect to `X` is even, it doubles; If the function with respect to `X` is odd, it is `0`;
- $$\iint\limits_{D}f(x,y)d\sigma=\begin{cases}2\iint\limits_{D_{x\geq0}}f(x,y)\mathrm{d}\sigma;&f(-x,y)=f(x,y)\\0;&f(-x,y)=-f(x,y)\end{cases}$$

**Property Two**: If the integral `D` relation `X` axiosymmetric, then the function has parity with respect to `Y`:
- $$\iint\limits_{D}f(x,y)d\sigma=\begin{cases}2\iint\limits_{D_{y_{z_0}}}f(x,y)\mathrm{d}\sigma&f(x,-y)=f(x,y)\\0&f(x,-y)=-f(x,y)\end{cases}$$

### 45.4.2 Symmetry
#####**Theorem**: #Variablesymmetryofdoubleintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\text{ If }D\text{ About }y=x\text{ Symmetric, then }\quad\iint_Df(x,y)\mathrm{d}\sigma=\iint_Df(y,x)\mathrm{d}\sigma $$

**Explanation**
- The integration field is the same, where the independent variable is swapped;
- Because the point of $(x,y)$ symmetric about `y=x` is $(y,x)$


**Inference**: A more generalized conclusion
- $$\int\int_{D(x,y)} f(x,y)\mathrm{d}x\mathrm{d}y=\int\int_{D(u,v)} f(u,v)\mathrm{d}u\mathrm{d}v=\int\int_{D(y,x)} f(y,x)\mathrm{d}y\mathrm{d}x$$

## 45.5 Frequently Tested Question Types

---
### Question Type: #Cumulativepointsexchangeorderorcalculation
#### PART 1: Problem-solving methods
**Problem-solving steps**: Example $\text{ Exchange cumulative points }\int_0^1dx\int_{x^2}^{2-x}f(x,y)dy\text{ The order }$
- Step 1: Draw the domain
	- ![Pasted image 20240508210257](/assets/notes/2e7722fbd717-Pasted-image-20240508210257.png)
- Step 2: After drawing the domain, define the domain in another order
	- Swap order and reline:
	- $$\int_0^1dy\int_0^{\sqrt{y}}f(x,y)dx+\int_1^2dy\int_0^{2-y}f(x,y)dx$$
- Additional note: If it's hard to calculate after swapping order, consider using polar coordinates;

**Question Type**: Cumulative integrals in polar coordinates
- Example:
	- $$\int_{0}^{\frac{\pi}{2}}\mathrm{d}\theta\int_{0}^{\cos\theta}f(\rho\cos\theta,\rho\sin\theta)\rho\mathrm{d}\rho $$
- Steps:
	- (1) Drawing area;
	- (2) Draw the limit, convert the polar coordinate equation into a rectangular coordinate equation;

**Question Type**: Calculate cumulative points
-


#### PART 2: Typical Example Problems

#### PART 3: Key Points Review


---
### Question Type: #Calculationofdoubleintegrals
#### PART 1: Problem-solving methods
**Question Type**: Calculation of double integrals
- First, draw the graph based on the function of D
- First, observe the form and analyze:
	- 1. Can parity, symmetry, `->` simplify the integral to be used;
	- 2. Observe the formula, whether Cartesian or polar coordinate systems are appropriate;
- Calculation:
	- Using the rules for calculating double integrals, calculating;

**Question Type**: Double Integrals and Inequalities
- Basic idea: The integrand of the integrand is larger;

#### PART 2: Typical Example Problems
**Example**: Let $D=\{(x,y)|x^2+y^2\leq1\}$, then $\iint_D(x^2-y)dxdy=$
- Analysis
	- Directly calculating the double integral of $x^2-y$ is difficult to compute, so consider analyzing parity and symmetry;
- Analysis
	- From parity, it can be inferred: $\int\int ydxdy=0$
	- From symmetry, it can be inferred: $\text{ Original form }=\int\int y^2dxdy=\int\int x^2dxdy=\frac{1}{2}\int\int(x^{2}+y^{2})db$


#### PART 3: Key Points Review
