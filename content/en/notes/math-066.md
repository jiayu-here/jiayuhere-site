---
title: "Lecture 49: Line Integrals with Respect to Coordinates"
slug: math-066
description: "Graduate Entrance Examination Mathematics study notes: Lecture 49: Line Integrals with Respect to Coordinates. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-11
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multivariable Integral Calculus and Applications"]
---

## 58.1 Curve Integration with Respect to Coordinates
**Explanation**: Method selection
- Closed Section:
	- Green's formula
- Non-closed interval:
	- Check: Check whether it is independent of the path `->` Use partial derivatives to see if they are equal
	- It is path-independent
		- Change the path
		- Use a potential function.
	- The integral is path-dependent.
		- Direct calculation is convenient `->` Direct calculation
		- Direct calculations are inconvenient `->` Supplement Green

### 58.1.1 Basic Concepts
 #####**Definition**: #Thesecondtypeiscurveintegrals
> <font color="#ccc1d9"> description: </font> $$\int_{L}P(x,y)dx+Q(x,y)dy=\lim_{\lambda\to0}\sum_{i=1}^{n}[P(\xi_{i},\eta_{i})\Delta x_{i}+Q(\xi_{i},\eta_{i})\Delta y_{i}]$$

**Explanation**
- Divide the curve arbitrarily into n small ends, and multiply the projection of each directional small arc segment on the x-axis

**Properties**: Curves have direction; changing direction can alter symbols
- $$\int_{L(AB)}Pdx+Qdy=-\int_{L(BA)}Pdx+Qdy$$
## 58.2 Calculation Methods
### 58.2.1 Method One: Direct Method
#####**Theorem**: #Thesecondtypecalculatescurveintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> the current parameter equation is $\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases}$, from start point A to endpoint B, t moves from α to β:$$\int_{L}P(x,y)dx+Q(x,y)dy = \int_{\alpha}^{\beta}[p(\psi(t),\psi(t))\psi(t)+Q(\varphi(t),\psi(t))\psi^{\prime}(t)]dt$$

**Explanation**
- Concept:
	- Write out the parameter equations, carry them in, and convert them into definite integral calculations;
- Note:
	- The upper and lower limits are calculated from the starting point parameter `->` the endpoint parameters, rather than by size;

### 58.2.2 Method Two: Green's Formula
**Introduction**
- On a double integral of a closed region `D` in a plane, can only the value difference on the boundary curve `L` be found without calculating the values of all points on the surface?
- This function is achieved by Green's formula;

#####**Definition**: #Singleconnectedarea
> <font color="#ccc1d9">Description:</font> A plane region $D$ is simply connected if every simple closed curve in $D$, together with its interior, lies entirely in $D$. Otherwise, the region is multiply connected.


**Explanation**
- The region must be simply connected (it contains no holes).

#####**Theorem**: #Greensformula
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> Let the closed region $D$ be bounded by a piecewise smooth, positively oriented curve $L$. If $P(x,y)$ and $Q(x,y)$ have continuous first-order partial derivatives on $D$, then:
>     $$\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}\sigma =\oint_{L}Pdx+Qdy$$


**Explanation**
- Note:
	- The range of Green's theorem used `->` must be on a closed region: that is, the curve is closed;
	- The positive and negative directions are relative to the current area;
- Where:
	- `L` is the positive boundary curve of region `D`;

**Supplement**: Closing an open path before applying Green's theorem
- Green's theorem applies to a closed curve. For an open path, add a convenient auxiliary segment to form a closed curve, apply Green's theorem, and then subtract the integral over the auxiliary segment.

#####**Theorem**: #Usinglineintegralsisindependentofthepath
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> $\text{ i) Determination: }\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x} (\text{ Region }D\text{ Simply connected }))$
> $ii)\text{ Calculation }:$
> (a) Change path: First, change to a simpler path (usually along the coordinate axis).
> (b) Using a potential function: $\int_{(x_{1},y_{1})}^{(x_{2},y_{2})}P\mathrm{d}x+Q\mathrm{d}y=F(x_{2},y_{2})-F(x_{1},y_{1})$
> Methods for finding the potential function: 1. Integrate one partial derivative and determine the remaining function; 2. Complete the total differential.

## 28.3 Connections Between Two Types of Line Integrals
#####**Theorem**: #Theconnectionbetweenthetwotypesoflineintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{L}P\mathbf{d}x+Q\mathbf{d}y=\int_{L}(P\cos\alpha+Q\cos\beta)\mathbf{d}s$$

## 28.4 Calculation Method: Space
### 28.4.1 Direct Method
#####**Theorem**: #Secondspatialcalculationsforcurvedareafractions
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $\text{ Let }L:x=x(t),y=y(t),z=z(t),\quad t\in[\alpha,\beta]$
> $$\int_{L}P(x,y,z)dx+Q(x,y,z)dy+R(x,y,z)dz\\=\int_{a}^{\beta}\{P[x(t),y(t),z(t)]x^{\prime}(t)+Q[x(t),y(t),z(t)]y^{\prime}(t)+\\R[x(t),y(t),z(t)]z^{\prime}(t)\}dt$$

**Example**: $\text{ Let }L\text{ This is the column face }x^2+y^2=1\text{ and planes }y+z=0\text{ The intersection of the line, from }z\text{ The axis is steadfastly longing }z\text{ If the negative axis is viewed counterclockwise, then the curve integral }\int_{L}z\operatorname{d}x+y\operatorname{d}z$
- Let $x=\cos t,y=\sin t,z=-\sin t$, substitute to get the definite integral: $I=\int_{0}^{2x}(\sin^{2}t-\sin t\cos t)dt$

### 28.4.2 Srocks Formula
#####**Theorem**: #Stokesformula
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{L}P(x,y,z)\mathrm{d}x+Q(x,y,z)\mathrm{d}y+R(x,y,z)dz=$$![Pasted image 20240521214413](/assets/notes/f7f6cb8cc62a-Pasted-image-20240521214413.png)

**Explanation**
- When planar: choose the first method
- Other times: choose the second option
