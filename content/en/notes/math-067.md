---
title: "Lecture 51: Surface Integrals with Respect to Area"
slug: math-067
description: "Graduate Entrance Examination Mathematics study notes: Lecture 51: Surface Integrals with Respect to Area. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-12
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multivariable Integral Calculus and Applications"]
---

## 59.1 First Category of Curvaturous Area Division: Surface Division of Curved Area
**Example**: Given that a curved surface component has a continuous surface density ρ(x, y, z), find its mass M;
- Illustration
	- ![Pasted image 20240212143059](/assets/notes/ad52d081b939-Pasted-image-20240212143059.png)
- Multiply the density on each small area by its area, then sum them all to get the complete mass: $M=\lim_{\lambda\to0}\sum_{k=1}^n\rho(\xi_k,\eta_k,\zeta_k){\Delta S_k}$

#####**Definition**: #Thefirstcategoryistheareaofcurves
> <font color="#ccc1d9"> description: </font> $\text{ Let }\sum\text{ It is a smooth curved surface },f(x,y,z)\text{ It is defined as }\sum\text{ The first one }\text{ If }\Sigma\text{ Perform arbitrary segmentation and arbitrary local area point selection },$ can be obtained
> Product sum limit: $\lim_{\lambda\to0}\sum_{k=1}^nf\left(\xi_k,\eta_k,\zeta_k\right)\Delta S_k$ exists in both cases, then this limit is called the function $f(x,y,z)$ the area component of the surface $\Sigma$ over the surface;
> Written as: $$\iint_{\Sigma}f(x,y,z)dS=\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_{i},\eta_{i},\zeta_{i})\Delta S_{i}$$

**Explanation**
- Concept:
	- $ds$ Area equivalent to a small curved surface;
	- $f(x,y,z)$ Density equivalent to the surface of the surface;
	- $f(x,\gamma,z)\operatorname{d}S$ represents the mass of a small piece;
	- $\iint_{\Sigma}f(x,\gamma,z)\operatorname{d}S$ represents the sum limit for each small piece on the entire face;
	- $\Sigma$ Called the integration surface;
- Explanation:
	- Multiply the function value of each point by the area of the small region at that point, sum and take the limit to get the area fraction of the area. `->` is unrelated to the direction of the surface, because area and direction are unrelated;
- Nature:
	- 1. Integration surface independence: $$\iint_{\Sigma}f(x,y,z)dS=\iint_{-\Sigma}f(x,y,z)dS$$
	- 2. Existence of the surface part of the surface area: $\text{ If } f(x,y,z)\text{ On smooth curved surfaces }\sum\text{ Continuous on the upper stage }$, then the area component of the area of curvature exists;
	- 3. Additivity to the integration domain: If $\sum$ is smooth in shards, then $\iint_{\Sigma}f(x,y,z)\operatorname{d}S=\iint_{\Sigma_{1}}f(x,y,z)\operatorname{d}S+\iint_{\Sigma_{2}}f(x,y,z)\operatorname{d}S$
	- 4. Linear properties of integration: $$\begin{aligned}\iint_{\Sigma}[k_1f(x,y,z)\pm k_2g(x,y,z)]&\operatorname{d}S=k_1\iint_{\Sigma}f(x,y,z)\operatorname{d}S\pm k_2\iint_{\Sigma}g(x,y,z)\operatorname{d}S\end{aligned}$$

## 59.2 Calculation of Area Partitions for Curvatures
### 59.2.1 Direct Method
#####**Theorem**: #Calculationofthefirsttypeofcurvedareaanalysis
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> There are smooth surfaces with $\Sigma:  z=z(x,  y),  (x,  y)\in D_{xy},  f(x,  y,  z)$ continuity on $\sum$
> Then surface integral $\iint_{\Sigma}f(x,  y,  z)dS$ exists $, $ and has:
> $$\iint_{\Sigma}f(x,y,{z}){\mathrm{d}S}=\iint_{D_{xy}}f(x,y,z(x,y))\sqrt{1+{z_x}^2(x,y)+{z_y}^2(x,y)}\mathrm{d}x\mathrm{d}y$$

**Explanation**
- Essence:
	- Project the hard-to-find surface area onto a plane double integral on x and y to complete the calculation;
	- That is, project the surface $\sum$ onto $D_{xy}$ and convert it into a double integral on `D`;
	- ${\text{ If a surface is defined by the equation }x}=x(y,z){\text{ or }\operatorname*{y}}=y(z,x)\text{ Given , it can similarly differentiate the area of a given area into corresponding parts }\text{ The double integral }$；
- Conversion:
	- Substitute z with the expression about xy to get the double integral;
- Note:
	- When a form like $x^2+y^2=1$ appears, where the central axis is the `z` axis, it cannot be done directly;
	- At this point, $y=y(x,z)$ `->` $\iint_{\Sigma}f(x,y,{z}){\mathrm{d}S}=\iint_{D_{xy}}f(x,y=y(x,z),z)\sqrt{1+{z_x}^2(x,z)+{z_z}^2(x,z)}\mathrm{d}x\mathrm{d}z$ should be used
	- Similarly, for $x=x(y,z)$ form;

### 59.2.2 Parity and Symmetry
#####**Theorem**: #Theparityofthefirsttypeofsurfacefraction
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> if the surface $\sum$ is symmetric about $xoy$, then:
> $$\iint_{\Sigma}f(x,y,z)\mathrm{d}S=\begin{cases}2\iint_{\sum_{z>0}} f(x,y,z)\mathrm{d}S,&f(x,y,-z)=f(x,y,z)\\0&f(x,y,-z)=-f(x,y,z)\end{cases}$$


**Key Point**: Symmetry
- $x^2+y^2+z^2=1$ Good symmetry;
- Therefore, symmetry can be used to simplify the calculation: $\iint_{\Sigma}(x^2+y^2)ds=(\frac{2}{3})\iint (x^2+y^2+z^2)ds=(\frac{2}{3})\iint 1ds=\frac{2}{3}4\pi$

## 59.3 Frequently Tested Question Types

---
### Question Type: #Calculationofthefirstcategoryofareapoints
#### PART 1: Problem-solving methods

#### PART 2: Typical Example Problems
**Example Question**: $\Sigma=\{(x,y,z)\mid x+y+z=1,x\geq0,y\geq0,z\geq0\},\,\text{ then }\iint_\Sigma y^2dS$
- Analysis
	- Illustration:
		- ![Pasted image 20240523230436](/assets/notes/8258fee82319-Pasted-image-20240523230436.png)
	- It can be converted into a double integral over the projection domain on `Dxy`;
	- Because $ds=\sqrt{1+{z_x}^2(x,y)+{z_y}^2(x,y)}dxdy$

#### PART 3: Key Points Review
