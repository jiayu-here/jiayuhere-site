---
title: "Lecture 44: Double Integrals"
slug: math-052
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 44: Double Integrals. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2024-02-08
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multiple Integrals"]
---

**Summary of this section**
- (1) Concept and properties of double integrals
- (2) Double integral calculation

**Common problem types in this section**
- problem type 1: Cumulative integral exchange sequence and calculation
- problem type 2: Double integral calculation
---
## 44.0 polar coordinates basics
**Basic Concept**
- Concept:
	-**Coordinate system describing position in terms of angles and lengths**;
- Conversion:
	- $$x=r\cos\theta,\qquad y=r\sin\theta,\qquad r=\sqrt{x^2+y^2},\qquad \theta=\operatorname{atan2}(y,x).$$
	- The polar and Cartesian systems are assumed to share the same origin and positive $x$-axis.
- diagram:
	- ![Pasted image 20240509172033](/assets/notes/577fe472c3ac-Pasted-image-20240509172033.png)

## 44.1 Basic concepts of double integrals
### 44.1.1 Concept introduction
**Volume Under a Surface**
- For a solid bounded above by $z=f(x,y)$ and below by a region $D$, the volume is obtained from
  $$\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_i,\eta_i)\Delta\sigma_i.$$
- Here $\Delta\sigma_i$ is the area of the $i$th subregion, $f(\xi_i,\eta_i)$ is the corresponding height, and $\lambda$ is the maximum diameter of the subregions.

#####**Definition**: # double integral
> <font color="#ccc1d9">Description:</font> Let $f(x,y)$ be bounded on a region $D$. Partition $D$ into subregions $\Delta\sigma_i$ and choose $(\xi_i,\eta_i)$ in each one. If the following limit exists and is independent of the partition and sample points, it is the double integral:
> $$\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_i,\eta_i)\Delta\sigma_i=\iint_D f(x,y)\,d\sigma.$$

**Explanation**
- Interval
	- The integration area of a single integral is an interval, such as $(3, 6)$;
	- The integration region of a double integral is a graph, so it is usually represented by a region D;
- NOTE:
	- The integration area is not equal to the definition domain, the integration area is the area where integration is required;
- Area element
	- $d\sigma$ is the area element;


### 44.1.2 Area element of Cartesian coordinates system
**Geometric significance of double integrals**: Area element
- divide horizontally and vertically;
- $\sigma_{i}=\Delta x_{i}\cdot\Delta y_{j}$
- Formula: $\int\int_{D}f(x, y)dxdy$

## 44.2 Properties of double integrals
### 44.2.1 Inequality properties
**Double integral**: Property 1
- If on D, $f(x, y)\leq g(x, y)$, then there is an inequality:
- $$\int\int_Df(x, y)d\sigma\leq\int\int_Dg(x, y)d\sigma $$

**Double integral**: Property 2
- If there is $m\leq f(x, y)\leq M$ on $D$, then:
- $$mS\leq\iint_Df(x, y)\mathrm{d}\sigma\leq MS$$
- where: S is the area of region D

**Double integral**: Property three
- The absolute value of the integral, the integral is less than the absolute value
- $$\left|\iint_Df(x, y)\mathrm{d}\sigma\right|\leq\iint_D\left|f(x, y)\right|\mathrm{d}\sigma.$$

### 44.2.2 Mean value theorem
#####**Theorem**: # Mean value theorem of double integrals
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> Suppose the function $f(x, y)$ is continuous on the closed area D, S is the area of the area D, then there is at least one $(\xi, \eta)$ on D, such that: $$\iint_Df(x, y)\mathrm{d}\sigma=f(\xi, \eta)\cdot S$$

**Explanation**
- The integral of a function is equal to the function value $f(\xi, \eta)$ at a point on the region D multiplied by the area of the integration domain;

### 44.2.3 Other properties
1. The constant factor of the integrand can be mentioned outside the double integral, that is
$$
\int\int_Dkf(x, y)d\sigma=k\int\int_Df(x, y)d\sigma
$$
2. The double integral of the sum (or difference) of a function is equal to the sum (or difference) of the double integral of each function, that is
$$
\int\int_D[f(x, y)\pm g(x, y)]d\sigma=\int\int_Df(x, y)d\sigma+\int\int_Dg(x, y)d\sigma
$$
3. If on D, f (x, y)=A, A is a constant, then σ is the area of D, then
$$
\sigma=\int\int_DA\cdot d\sigma=A\int\int_Dd\sigma
$$
4. If the closed area D is divided into a finite number of partially closed areas by lines and curves, then the double integral on D is equal to the double integral on each partial area. The sum of double integrals of
 , for example, D is divided into two closed regions D 1 and D2, then
$$
\int\int_Df(x, y)d\sigma=\int\int_{D_1}f(x, y)d\sigma+\int\int_{D_2}f(x, y)d\sigma
$$
- Geometric meaning: Originally, a geometric cylinder could be calculated by a double integral. Now one cylinder is divided into two cylinders, and then double integrals are calculated respectively. The sum is the complete volume;

5. If the value of $f(x, y)$ in area D is always equal to 1, then its double integral is
$$
\int_{D}\left(1)  d\sigma=\sigma\times1\right.
$$ is the double integral of 1, which is the area of the function;
