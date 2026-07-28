---
title: "Lecture 52: Surface Integrals with Respect to Coordinates"
slug: math-068
description: "Graduate Entrance Examination Mathematics study notes: Lecture 52: Surface Integrals with Respect to Coordinates. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-12
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multivariable Integral Calculus and Applications"]
---

## 60.1 Projection of Directed Surfaces and Surface Elements
### 60.1.1 Basic Surface Classification
**Two-Sided Surface**
- A normal direction can be chosen continuously on either side.

**One-Sided Surface**
- Example: a Möbius strip.

**An oriented surface is a surface with a specified side; its orientation is represented by a chosen normal direction.**
![Pasted image 20240212153621](/assets/notes/68f43fccddef-Pasted-image-20240212153621.png)
- Let $\Sigma$ be an oriented surface. The signed projection of a surface element $\Delta S$ onto the $xOy$ plane is denoted by $(\Delta S)_{xy}$.

## 60.2 Surface Integrals of the Second Kind
#####**Definition**: #SurfaceIntegralOfTheSecondKind
> <font color="#ccc1d9"> description: </font> $$\iint_{\Sigma}R(x,y,z)dxdy=\lim_{\lambda\to0}\sum_{i=1}^nR(\xi_i,\eta_i,\zeta_i)(\Delta S_i)_{xy}$$

**Explanation**
- A surface integral of the second kind depends on the orientation of the surface.
- Explanation:
	- The function value of a point $R(\xi_i,\eta_i,\zeta_i)$ multiplied by its projection on `xy`: $(\Delta S_i)_{xy}$
	- If it is $dxdy$ `->` projection on `xy`;
	- If it is $dzdx$ `->` projection on `xz`;
- Reversing the orientation changes the sign:
  $$\iint_{-\Sigma}(P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy)
  =-\iint_{\Sigma}(P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy).$$

## 60.3 Calculating Surface Integrals of the Second Kind
### 60.3.1 Direct Method
#####**Theorem**: #Calculationofthesecondtypeofcurvedareafraction
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> Let the integrands be continuous on the smooth surface $\Sigma$.
> 1. If $\Sigma:z=z(x,y)$ over $D_{xy}$, then
> $$\iint_{\Sigma}R\,dx\,dy=\pm\iint_{D_{xy}}R(x,y,z(x,y))\,dx\,dy.$$
> Use $+$ for the upward orientation and $-$ for the downward orientation.
> 2. If $\Sigma:x=x(y,z)$ over $D_{yz}$, then
> $$\iint_{\Sigma}P\,dy\,dz=\pm\iint_{D_{yz}}P(x(y,z),y,z)\,dy\,dz.$$
> Use $+$ when the normal points toward positive $x$ and $-$ otherwise.
> 3. If $\Sigma:y=y(z,x)$ over $D_{zx}$, then
> $$\iint_{\Sigma}Q\,dz\,dx=\pm\iint_{D_{zx}}Q(x,y(z,x),z)\,dz\,dx.$$
> Use $+$ when the normal points toward positive $y$ and $-$ otherwise.

**Explanation**
- Convert the surface integral to a double integral over the appropriate projection domain.
- Selection of positive and negative signs:
	- If projecting onto `xy`:
		- Make the integral `->` positive sign on the upper side;
		- Score the `->` minus sign on the lower side;
	- If projecting onto `yz`:
		- The front side of `yoz` `->` positive sign;
		- The `->` minus sign behind `yoz`;
	- If projecting onto `xz`:
		- `xoz` `->` to the right of the positive sign;
		- The left side of `xoz` `->` minus;
- Note:
	- If at `z=f(x,y)`:
	- If `x` is a constant `->` the projected field is a line, then the integral equals `0`;
	- If `y` is a constant `->` the projection field is also a line, then the integral equals `0`;

### 60.3.2 Gaussian Formula
#####**Theorem**: #GaussDivergenceTheorem
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If the closed surface $\Sigma=\partial\Omega$ is oriented outward, then
> $$\iint_{\Sigma}\left(P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy\right)
> =\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)dV.$$

**Explanation**
- Concept:
	- Gauss's theorem relates the outward flux through a closed surface to the triple integral of the divergence over the enclosed volume.
	- It is the three-dimensional analogue of Green's theorem.

**Supplement**: Use the Gaussian formula to cover the surface
- When the surface is not closed, add a face using the Gaussian formula;
- Then, the result calculated using Gauss's formula `-` is added to the added part;

## 60.4 Relationship Between the Two Types of Surface Integral
**Concept**: Conversion formula
- Formula: $$\iint_{\Sigma}(P\cos\alpha+Q\cos\beta+R\cos\gamma)\mathrm{d}S=\iint_{\Sigma}(P\mathrm{d}y\mathrm{d}z+Q\mathrm{d}z\mathrm{d}x+R\mathrm{d}x\mathrm{d}y)$$
- Explanation:
	- The left-hand side is a surface integral of the first kind.
	- The right-hand side is a surface integral of the second kind.
	- $\cos\alpha$, $\cos\beta$, and $\cos\gamma$ are the direction cosines of the chosen unit normal.
