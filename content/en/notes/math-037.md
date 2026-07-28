---
title: "Lecture 29: Integration by Substitution"
slug: math-037
description: "Graduate Entrance Examination Mathematics study notes: Lecture 29: Integration by Substitution. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-01-17
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Indefinite Integrals"]
---

## 1.1 The first type of substitution method
**Introduced: Starting from differentiated number**
- When differentiate counting, what is the core method?
	- 1. algebraic manipulation rules (addition, subtraction, multiplication and division);
	- 2. composite function differentiate method;
		- The implicit differentiation method and the parametric equation differentiation method are the conclusions of the first two;
- Reverse process
	- So when considering the inverse process of differentiate number, you can consider the inverse process based on two points 1 and 2;
	- composite function
		- Reverse the process of composite function differentiate method `->`**Substitution integral method**;
	- algebraic manipulation law
		- Inverse `->` integral method by parts;
		- Multiplication `->`**integration by parts**;

### 1.1.1 Basic concepts of the first type of substitution method
#####**Theorem**: # The first kind of substitution method: the differential method
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> If $\int f(u)\mathrm{d}u=F(u)+C$, then $\int f[\varphi(x)]\varphi^{\prime}(x)\operatorname{d}x=\int f[\varphi(x)]\operatorname{d}\varphi(x)=F[\varphi(x)]+C$

**Explanation**
- Common situations:
	- $\frac{dx}{\sqrt{x}}=2d\sqrt{x}$

**Example**
- Example: $\int e^x\mathrm{d}x=e^x+c$
- currently $\int xe^{x^2}dx=\frac12\int e^{x^2}(x^2)dx=\frac12\int e^{x^2}dx^2=\frac12e^{x^2}+c^2$
	- In order to use the conclusion of $\int e^x\mathrm{d}x=e^x+c$ above, write it in the form of $\frac12\int e^{x^2}dx^2$;
	- This step is to make up the differential;

### 1.1.2 Examples
**Example**: $\int(1+3x)^{100}dx$
- Analysis
	- Because the integrated object is a composite function, you can first consider how to convert it into a simple one, you can use the form of a formula:
	- $\int u^{100}du=\frac1{101}u^{101}+c$
- Analysis
	- $\int(1+3x)^{100}dx=\frac13\int(1+3x)^{100}d(1+3x)=\frac1{303}(1+3x)^{101}+C$
	- Made up a $1+3x$ of $d$
- problem type: # differential differential method

**Example**: $\int\frac{dx}{a^2+x^2}$
- Analysis
	- Because
- Analysis
	- $\int\frac{dx}{a^{2}+x^{2}}=\frac{1}{a}\int\frac{d\frac{x}{a}}{1+(\frac{x}{a})^{2}}=\frac{1}{a}\operatorname{arcc}t, \frac{x}{a}+C^{1}$
- problem type: # differential differential method

**Example**: $\int\frac{dx}{\sqrt{1-x^2-2x}}$
- Analysis
	- $17, \int\frac{dx}{\sqrt{1-x^2}}=\begin{cases}\arcsin x+C\\-\arccos x+C&\end{cases}$
- Analysis
	- $\int\frac{dx}{\sqrt{1-x^2-2x}}=\int\frac{d(x+1)}{\sqrt{2-(x+1)^2}}$ = $\arcsin\frac{x+1}{\sqrt{2}}+c$
- problem type: # differential differential method

### 1.1.3 Summary of differential forms
**Common functions**
- 1. $$\int f( ax+ b) dx= \frac 1a\int f( ax+ b)d( ax+ b)$$
- 2. $$\int x^mf( ax^{m+ 1}+ b)dx=\frac 1{( m+ 1) a}\int f( ax^{m+ 1}+ b)d(ax^{m+1}+ b)\quad\quad\quad ( m\neq- 1) $$
- 3. $$\int f( \sqrt {x}) \frac {\mathrm{d} x}{\sqrt {x}}= 2\int f( \sqrt {x})d( \sqrt x)$$
- 4. $$\int f( e^x) \mathrm{e} ^xdx= \int f( \mathrm{e} ^x)d(\mathrm{e} ^x)$$
- 5. $$\int f(\ln x)\: \frac{1}{x}\mathrm{d}x=\int f(\ln x)\mathrm{d}(\ln x)$$

**Common trigonometric functions make up the differential**
- 1. $$\int f(\sin x)\cos\: x\mathrm{d}x=\int f(\sin x)\mathrm{d}(\sin x)$$
- 2. $${\int}f(\cos x)\sin x\mathrm{d}x=-{\int}f(\cos x)\mathrm{d}(\cos x)$$
- 3. $$\int f(\tan x)\: \frac{1}{\cos^{2}x}\mathrm{d}x=\int f(\tan x)\mathrm{d}(\tan x)$$
- 4. $${\int}f(\arcsin x)\: \frac{1}{\sqrt{1-x^2}}\mathrm{d}x=\int f(\arcsin x)\mathrm{d}(\arcsin x)$$
- 5. $${\int}f(\arctan x)\: \frac1{1+x^2}\mathrm{d}x=\int f(\arctan x)\mathrm{d}(\arctan x)$$

## 1.2 The second type of substitution method
### 1.2.1 Basic concepts of the second type of substitution method
#####**Theorem**: # second kind of substitution method
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $x=\varphi(t)$ is monotone and differentiable with $\varphi'(t)\neq0$, then $\int f(\varphi(t))\varphi'(t)\,dt=F(\varphi(t))+C$.
> Formula: $\int f(x)\mathrm{d}x=\int f[\varphi(t)]\varphi^{\prime}(t)\mathrm{d}t=F(t)+C=F[\varphi^{-1}(x)]+C, $

**Explanation**
- Method:
	- The key is the selection of variable substitution. `->` replaces the x band, and replaces the band with other functions. After `->` produces the result, it must be brought back with the inverse function;
- Example:
	- antiderivative: $\int\frac{x^2}{\sqrt{a^2-x^2}}dx$ `->` Replace x with: $x=a\sin t$ `->` Get the function after substitution: $\int\frac{a^2\sin^2t}{a\cos t}\cdot a\cos tdt$ `->` Find indefinite integral: $\frac{a^2}2(t-\frac12\sin2t)+C$ `->` Replace with: $\frac{a^2}2\arcsin\frac xa-\frac x2\sqrt{a^2-x^2}+C$

**Summary**
- Common forms:
	- The following three forms: $$\begin{aligned}&\sqrt{a^2-x^2} \\&\sqrt{a^2+x^2} \\&\sqrt{x^2-a^2}\end{aligned}$$
	- The following three forms of x can be used to bring in the root sign to eliminate it: $$\begin{aligned}x&=a\sin t(a\cos t)\\\\x&=a\tan t\\\\x&=a\sec t\end{aligned}$$
- Purpose: Remove the**root sign**;

### 1.2.2 Examples
**Example**: $\int\frac{dx}{\sqrt{a^2+x^2}}\quad(a>0)$
- Analysis
	- Because there is a radical in the original formula, when you need to find its indefinite integral, you should first consider how to eliminate the radical;
	- At this time, you can think of using the second type of substitution method to get a and x out of the root sign;
- Analysis
	- $x=a*tant$ can be set
	- At this time, first bring it into the denominator. It can be seen that the denominator becomes $a\sec t$
	- Then Find $dx$ `->` and Find $d(a*tant)$
	- Then:![Pasted image 20240119002138](/assets/notes/9efbfcb1bb7e-Pasted-image-20240119002138.png)
- problem type: # second type of substitution method
