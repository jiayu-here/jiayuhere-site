---
title: "Lecture 47: Triple Integral"
slug: math-054
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 47: Triple Integrals. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2024-02-09
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multiple Integrals"]
---

## 46.1 Triple Integral
### 46.1.1 Basic Concepts
#####**Definition**: #Triplepoints
> <font color="#ccc1d9"> description: </font> $\iiint_{\Omega}f(x,y,z)\mathrm{d}\mathbf{v}=\lim_{\lambda\to0}\sum_{k=1}^{n}f(\xi_{k},\eta_{k},\xi_{k})\Delta\nu_{k}$

**Explanation**
- Concept:
	- A ternary function integrating into a spatial field $\Omega$;
	- $\Delta\nu_{k}$ is the volume of the geometric solid in the k-th region;
- Core:
	- The core of the triple integral section is the calculation of the triple integral;
	- The core of triple integral calculations is to convert them into definite integrals or double integrals;

### 46.1.2 Basic Calculation Methods
#####**Theorem**: #Calculationoftherectangularcoordinateoftripleintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> 1. First one, then two: $$\iiint_{\Omega}f(x,y,z)\mathrm{dv}=\iint_{D_{xy}}d\sigma\int_{z_{1}(x,y)}^{z_{2}(x,y)}f(x,y,z)dz$$
> 2. Two first, one later: $$\iiint_{\Omega}f(x,y,z)\mathrm{d}\mathbf{v}=\int_{c_{1}}^{c_{2}}dz\iint_{D_{c}}f(x,y,z)dxdy$$

**Explanation**
- First one, then two:
	- Explanation:
		- First, take definite integrals on `z`;
		- Double integration on `xy`;
	- Limiting method:
		- Draw a projection surface $D_{xy}$ of the current set on the `xy` axis, and draw a ray upward on this projection plane passing through the geometric solid;
		- The lower part of the point is the lower limit of the points $z=z_1(x,y)$, and the upper part of the part is the upper limit of the points $z=z_2(x,y)$;
- Two before one:
	- Explanation:
		- First, perform the double integral on `xy`;
		- Taking definite integrals on `z`;
	- Limiting method:
		- When projecting a geometric solid onto the `z` axis, the upper and lower bounds of `z` are its maximum and minimum values projected onto the `z` axis;


## 46.2 Cylindrical Coordinates
### 46.2.1 Basic Concepts
#####**Definition**: #Cylindricalcoordinates
> <font color="#ccc1d9"> description: </font> $$\begin{cases}x=r\cos\theta,&\quad0\leq r<+\infty,\\y=r\sin\theta,&\quad0\leq\theta\leq2\pi,\\z=z,&\quad-\infty<z<+\infty.\end{cases}$$

**Explanation**
- Concept:
	- `r`: The distance from the point to the `z` axis;
	- `z`: height on the z-axis;
	- ` angle `: Limit the angle of the current line segment;
- Illustration:
	- ![Pasted image 20240521035217](/assets/notes/fb4663a3483a-Pasted-image-20240521035217.png)

### 46.2.2 Methods for Calculating Cylindrical Coordinates
#####**Theorem**: #Cylindricalcoordinatecalculationmethod
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> Volume micro yuan: $dv=\rho d\rho d\theta dz$
> Calculation: $$\iiint_\Omega f(x,y,z)d\nu=\iiint_{\Omega}f(\rho\cos\theta,\rho\sin\theta,z)r\operatorname{d}r\operatorname{d}\theta\operatorname{d}z$$

**Supplement**: Scope of application for cylindrical coordinates
- Function angle:
	- If the integrand can be written as $g(x)*f(\sqrt{x^2+y^2})$ `->` cylindrical coordinates are suitable;
- Regional Perspective:
	- Cylindrical coordinates such as `z`-axis cylinders, eccentric cylinders, and cones `->` are suitable for cylindrical coordinates;

## 46.3 Calculating Triple Integrals with Spherical Coordinates
### 46.3.1 Basic Concepts
#####**Definition**: #Sphericalcoordinates
> <font color="#ccc1d9"> description: </font> $$\begin{cases}x=r\sin\varphi\cos\theta,&\quad0\leq r<+\infty,\\y=r\sin\varphi\sin\theta,&\quad0\leq\varphi\leq\pi,\\z=r\cos\varphi,&\quad0\leq\theta\leq2\pi.\end{cases}$$

**Explanation**
- Illustration:
- ![Pasted image 20240521040109](/assets/notes/389e35889ff4-Pasted-image-20240521040109.png)

### 46.3.2 Methods for Calculating Spherical Coordinates
#####**Theorem**: #Methodsforcalculatingsphericalcoordinates
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> Volume micro yuan: $dv=r^{2}\sin\varphi drd\varphi d\theta$
> Calculation: $$\iiint_{\Omega}f(x,y,z)d\nu =\iiint_\Omega f (r\sin\varphi\cos\theta, r\sin\varphi\sin\theta, r\cos\varphi) r^2\sin\varphi\operatorname{d}r\operatorname{d}\varphi\operatorname{d}\theta$$

**Supplement**: Scope of application for spherical coordinates
- Function angle:
	- If the integrand can be written as $f(\sqrt{x^2+y^2+z^2})$ `->` spherical coordinates are suitable;
- Regional Perspective:
	- Spherical spheres, spheres, hemispheroids, and curved pyramids centered at the origin `->` suitable for spherical coordinates;

## 46.4 Properties of Triple Integrals
### 46.4.1 Parity
#####**Theorem**: #Paritycalculationoftripleintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\text{ Like a division domain }\Omega\text{ About }xoy\text{ Coordinate face-to-face symmetry },\,\text{ then }\iiint_{\Omega}f(x,y,z)\mathrm{d}V=\begin{cases}2\iiint f(x,y,z)\mathrm{d}V&f(x,y,-z)=f(x,y,z)\\0&f(x,y,-z)=-f(x,y,z)\end{cases}$$

**Explanation**

### 46.4.2 Symmetry
#####**Theorem**: #Symmetryoftripleintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>

## 46.5 Frequently Tested Question Types

---
### Question Type: #Calculationoftripleintegrals
#### PART 1: Problem-solving methods

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review
**Key Point**: Suitable for situations where two comes first, then one
- 1. The integrand function is simply a single-variable function about `z`;
- 2. When using `z=z` to truncate the area of a geometric solid, the formula for this area is easy to calculate (for example, $x^2+y^2<1-z^2$);
