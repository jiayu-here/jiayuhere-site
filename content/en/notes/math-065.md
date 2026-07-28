---
title: "Lecture 48: Line Integrals with Respect to Arc Length"
slug: math-065
description: "Graduate Entrance Examination Mathematics study notes: Lecture 48: Line Integrals with Respect to Arc Length. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-11
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multivariable Integral Calculus and Applications"]
---

## 57.1 Curve Integral with Respect to Arc Length
### 57.1.1 Basic Concepts
#####**Definition**: #Thelineintegralofthearclengthontheplane
> <font color="#ccc1d9"> description: </font> $$\int_{L}f(x,y)ds=\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_{i},\eta_{i})\Delta s_{i}$$

**Explanation**
- A binary function integrating along a two-dimensional curve segment;
- Divide the curve into n small ends, multiply the curve's function value by the length of the small arc segment, sum each segment and take the limit. If this limit exists, then the line integral exists;

#####**Theorem**: #Propertiesoflineintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{L(AB)}f(x,y)ds=\int_{L(BA)}f(x,y)ds$$

**Explanation**
- Meaning: Line integral is unrelated to the direction of the path;

**Inference**
- 1.  $\int_{L_{1}+L_{2}}f(x,y)ds=\int_{L_{1}}f(x,y)ds+\int_{L_{2}}f(x,y)ds$；
- 2. $\int_{L}[df(x,y)+\beta g(x,y)]ds=\alpha\int_{L}f(x,y)ds+\beta\int_{L}g(x,y)ds$；
- 3. $\int_{C}f(x,y)ds=\int_{C_{1}}f(x,y)ds+\int_{C_{2}}f(x,y)ds$；
- 4. $f(x,y)<=g(x,y) ; \int_{L}f(x,y)ds\leq\int_{L}g(x,y)ds$

## 57.2 Calculation of Curve Integrals
### 57.2.1 Basic Law
#####**Theorem**: #Thefirsttypecalculatescurveintegrals: Direct method
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> assume the parameter equation of L is $\begin{cases}x=\varphi(t),\\y=\psi(t),&\end{cases}(\alpha\leqslant t\leqslant\beta)$, then: $$\int_{L}f(x,y)\mathrm{d}s=\int_{\alpha}^{\beta}f(\varphi(t),\psi(t))\sqrt{\varphi'(t)^2+\psi'(t)^2}\mathrm{d}t$$

**Explanation**
- Note:
	- `ds` is the arc derivative of the curve;
	- The upper and lower limits are arc lengths from small to large;

#####**Theorem**: # Calculation of line integral of the first kind: Cartesian equations
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $\text{ If }C:y=y(x),\quad a\leq x\leq b$, then:
> $$\int_{}f(x,y)\mathrm{d}s=\int_{a}^{b}f(x,y(x))\sqrt{1+y'^2(x)}\mathrm{d}x$$

**Explanation**
- Equivalent to treating `x` as a parameter;

#####**Theorem**: #Thefirsttypecalculatescurveintegrals: Polar coordinate equation
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $\text{ If }C:\rho=\rho (\theta)\quad\alpha\leq\theta\leq\beta$, then:
> $$\int_{C}f(x,y)ds=\int_{\alpha}^{\beta}f(\rho(\theta)\cos\theta,\rho(\theta)\sin\theta)\sqrt{\rho^{2}(\theta)+\rho^{\prime2}(\theta)}d\theta $$

**Explanation**

### 57.2.2 Parity and Symmetry
#####**Theorem**: #Parityoftheintegralcurve
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{C}f(x,y)\mathrm{d}s=\begin{cases}2\int_{C_{x>4}}f(x,y)\mathrm{d}s,&f(-x,y)=f(x,y)\\0,&f(-x,y)=-f(x,y)\end{cases}$$

**Explanation**

#####**Theorem**: #Symmetry
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> General situation: $\int_{c}f(x,y)\mathrm{d}s=\int_{c}f(y,x)\mathrm{d}s$
> Special: $\int_Cf(x)ds=\int_Cf(y)ds$
