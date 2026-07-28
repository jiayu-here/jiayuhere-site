---
title: "Lecture 32: Calculation of definite integrals"
slug: math-040
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 32: Calculation of Definite Integrals. Retain the original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-01-23
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Definite and Improper Integrals"]
---

## 1.1 Calculation of Definite Integrals
### 1.1.1 Concept Introduction
**The Relationship Between Position Function and Velocity Function in Variable Speed Linear Motion**
- Defining definite integrals, which is cumbersome to use directly
	- $\int_a^bf(x)\operatorname{d}x\mathop{\Delta}\lim_{\lambda\to0}\sum_{i=1}^nf(\xi_i)\Delta x_i$
- For example, when calculating distance, $v(t)$ is the velocity function, $s(t)$ is the distance function:
	- $\int_{T_1}^{T_2}\nu(t)dt=s(T_2)-s(T_1)\quad s^{\prime}(t)=\nu(t)$
	- And, according to the property of the indefinite integral: $s(t)=\int_{t_0}^tv(t)dt\quad s^{\prime}(t)=v(t)$
- Can it be transformed into the difference between two points of the antiderivative of the integrand?

**Case Analysis:**Suppose $f(x)$ is continuous on $[a,b]$, and x is any point on $[a,b]$:
![Pasted image 20240123140558](/assets/notes/03002eb7074e-Pasted-image-20240123140558.png)
The area of the shaded part is called the function of the**upper limit of integrals**
- $\Phi(x)=\int_a^xf(t)\mathrm{d}t\quad x\in[a,b]$

**Question:**Is this function with the upper limit of integration differentiable over the function interval?
- Answer: Yes, provided $f(x)$ is continuous on $[a,b]$;

### 1.1.2 Functions and Derivatives of the Upper Limit of Integrals
#####**Theorem**: #Afunctionoftheupperlimitoftheintegral: Fundamental theorem of calculus
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> If $f(x)$ is continuity on $[a,  b]$, then: $\int_a^xf(t)\mathrm{d}t$ is differentiable on $[a,  b]$, and there is $$(\int_a^xf(t)\mathrm{d}t)^{\prime}=f(x)$$

**Explanation**
- Concept:
	-**Derivative of the integral of a function, equal to the function value at this point**;
	- When x is constant, it yields a fixed value;
- Core:
	- Differentiation and integration are inverse operations;
	- Solves the existence of the antiderivative;
- Conclusion:
	- $$(\int_{\varphi(x)}^{\psi(x)}f(t)dt)^{\prime}=f(\psi(x))\psi^{\prime}(x)-f(\varphi(x))\varphi^{\prime}(x)$$

#####**Theorem**: #Parityoftheupperlimitfunctionoftheintegral
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> 1. If f(x) is an odd function, then $\int_0^xf(t)dt$ is even;
> 2. If f(x) is an even function, then $\int_0^xf(t)dt$ is an odd function;

**Explanation**

#####**Theorem**: #Theoriginalfunctionofthedefiniteintegral
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $f$ is continuous on $[a,b]$, then $F(x)=\int_a^x f(t)\,dt$ is an antiderivative of $f$ on $[a,b]$.

**Explanation**
- When $f$ is continuous, the integral with variable upper limit, $F(x)=\int_a^x f(t)\,dt$, satisfies $F^{\prime}(x)=f(x)$.
- Thus every continuous function has an antiderivative; the variable-upper-limit integral provides one.

**Corollary:** A more general form
- If $\varphi$ and $\psi$ are differentiable and $f$ is continuous, then:
	- $\frac d{dx}\int_{\psi(x)}^{\varphi(x)}f(t)dt=f(\varphi(x))\varphi^{\prime}(x)-f(\psi(x))\psi^{\prime}(x)$

### 1.1.3 Example Problems
**Example**: $\text{Let }\Phi(x)=\int_{0}^{x^{2}}e^{-t^{2}}dt.\text{ Find }\Phi^{\prime}(x).$
- Analysis
	- Apply the Fundamental Theorem of Calculus together with the chain rule.
- Solution
	- $\Phi=\int_{0}^{u}e^{-t^{2}}dt$
	- Let $u=x^2$.
	- Differentiate the outer integral with respect to $u$, then multiply by $du/dx$:
	- $\bar{\Phi}_{x}^{\prime}(x)=\bar{\Phi}_{u}^{\prime}\cdot U_{x}^{\prime}=e^{-u^2}\cdot2x=e^{-x^4}\cdot2x.$
- Question Type: #Theoriginalfunctionofthedefiniteintegral

**Example**: When both upper and lower limits of the function change: $g(x)=\int_{\sin x}^{x^2}e^{-t^2}dt\quad$, find its derivative;
- Analysis
	- It can be split into two segments, from sinx to 0, and then from 0 to x squared;
	- Solve separately and add them together;
- Analysis
	- ${\int_0^{x^2}e^{-t^2}dt+\int_{sinx}^0e^{-t^2}dt}$
- Question Type: #Theoriginalfunctionofthedefiniteintegral

## 1.2 Calculation Methods
### 1.2.1 Newton-Leibniz Formula
#####**Theorem**: #NewtonLeibnizformula
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> Let $F(x)$ be an antiderivative of continuous function $f(x)$ on $[a,  b]$, then: $\int_{a}^{b}f(x)dx=F(b)-F(a)$, also called the basic formula of calculus;

**Explanation**
- Turning the problem of solving definite integrals into the problem of finding the antiderivative;
- And this formula communicates the relationship between integral calculus and differential calculus;

**Corollary:**Prove the mean value theorem of integrals n
- If $f(x)$ has continuity on $[a,  b]$, then
- $\int_a^bf(x)\operatorname{d}x=f(\xi)(b-a)\quad\quad a<\xi<b$
	- ![Pasted image 20240123145622](/assets/notes/29cd39e280a4-Pasted-image-20240123145622.png)

### 1.2.2 Substitution Method
#####**Theorem**: #Substitutionmethodfordefiniteintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{a}^{b}f(x)\operatorname{d}x=\int_{\alpha}^{\beta}f(\varphi(t))\varphi^{\prime}(t)\operatorname{d}t$$

**Explanation**
- Note: The integrand and the upper and lower limits must be substituted;

### 1.2.3 Integration by Parts
#####**Theorem**: #IntegrationbyPartsofDefiniteIntegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{a}^{b}u\operatorname{d}v=uv\bigg|_{a}^{b}-\int_{a}^{b}v\operatorname{d}u$$

### 1.2.4 Other Methods
**Method One: Utilizing Parity and Periodicity**
- $$\int_{-a}^af(x)\operatorname{d}x=\begin{cases}0,&f(x)&\text{ is the odd function, }\\2\int_0^af(x)\operatorname{d}x,&f(x)&\text{ is an even function }.\end{cases}$$
- $$\int_a^{a+T}f(x)\operatorname{d}x=\int_0^Tf(x)\operatorname{d}x.$$

**Method 2: Use Existing Formulas**
- $$\begin{aligned}(1)&\int_0^{\frac\pi2}\sin^nx\operatorname{d}x=\int_0^{\frac\pi2}\cos^nx\operatorname{d}x=\begin{cases}\frac{n-1}n\frac{n-3}{n2}\cdots\frac12\frac\pi2,&n\text{ Sorry }\\\frac{n-1}n\frac{n-3}{n-2}\cdots\frac23,&n\text{ Strange }&\end{cases}\\(2)&\int_0^{\pi}x\cdot f(\sin x)\operatorname{d}x=\frac\pi2\int_0^{\pi}f(\sin x)\operatorname{d}x\end{aligned}$$

### 1.2.2 Example Problems
**Example Question**: $\int_{0}^{\pi}\sin xdx$
- Analysis
- Analysis
	- $\int_{0}^{\pi}\sin xdx=\left(-cosx\right)\int_{0}^{\pi}=1-(-1)=2.$
- Question Type: #NewtonLeibnizformula

## 1.3 Frequently Tested Question Types
### Question Type: #Calculationofdefiniteintegrals
#### PART 1: Problem-solving methods
**Five Common Methods**
- 1. Newton-Leibniz formula;
- 2. Cycle change method
- 3. Partial Integration Method;
- 4. Parity, periodicity;
	- Obtain the function and first observe its parity and periodicity;
- 5. Two special formulas;
	- $$\begin{aligned}(1)&\int_0^{\frac\pi2}\sin^nx\operatorname{d}x=\int_0^{\frac\pi2}\cos^nx\operatorname{d}x=\begin{cases}\frac{n-1}n\frac{n-3}{n2}\cdots\frac12\frac\pi2,&n\text{ Sorry }\\\frac{n-1}n\frac{n-3}{n-2}\cdots\frac23,&n\text{ Strange }&\end{cases}\\(2)&\int_0^{\pi}x\cdot f(\sin x)\operatorname{d}x=\frac\pi2\int_0^{\pi}f(\sin x)\operatorname{d}x\end{aligned}$$
- Supplementary Methods:
	- Use geometric analysis: If a function is a type of geometric figure, you can draw its shape and observe its geometric properties;

**Common Conclusions in Indefinite Integral Geometry**
- 1. $$\int_{0}^{a}\sqrt{a^{2}-x^{2}}dx=\frac{\pi a^{2}}{4}(a>0)$$
- 2. $$\int_{0}^{a}\sqrt{2ax-x^{2}}dx=\frac{\pi}{4}a^{2}$$
- 3. $$\int_{0}^{2a}\sqrt{2ax-x^{2}}dx=\frac{\pi}{2}a^{2}$$

**Fixed Points with Variable Limits**
- When calculating definite integrals with variable upper limit functions, consider using the integration by parts method;

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review

### Question Type: #Upgradedlimitedpoints
#### PART 1: Problem-solving methods
**Core Formulas**
- Concept:
	- $$(\int_a^xf(t)\mathrm{d}t)^{\prime}=f(x)$$
- Calculation:
	- $$(\int_{\varphi(x)}^{\psi(x)}f(t)dt)^{\prime}=f(\psi(x))\psi^{\prime}(x)-f(\varphi(x))\varphi^{\prime}(x)$$


**Three Major Methods to Limit Points for Upgrades**
- Method 1: Formula calculation
	- Example: $$(\int_{e^{x}}^{x^{2}}f(t)dt)^{\prime}=f(x^{2})\cdot2x-f(e^{x})e^{x}$$
- Method 2: Extract x
	- Example: $$\int_{0}^{x}(x-t)f(t)dt;=x\int_{0}^{x}f(t)dt-\int_{0}^{x}tf(t)dt$$
	- The integral domain and the integrand contain x;
	- When x can be proposed: split the terms and extract x;
- Method 3: Substitution method
	- Example: $$\int_{0}^{x}cos(x-t)^{2}dt\frac{x-t=u}{}\int_{0}^{x}cos u^{2}du$$
	- The integral domain and the integrand contain x;
	- When x cannot be proposed: substitute;
		- Note: When substituting a substitution, x is a constant, and t and u are the integrand variables;
	- Example: When there is no x in both upper and lower limits, but x is present in the integral, you need to replace x and substitute it into the upper and lower limits;
		- After $x+t=u$: $$\int_{1}^{2}f(x+t)dt=\int_{x+1}^{x+2}f(u)du$$

**Question Type: Variable Upper Limit Integral + Limit Calculation**
- When a limit contains a variable-upper-limit integral in the numerator or denominator, the Fundamental Theorem of Calculus often makes L'Hôpital's rule convenient.

**Problem Type: Variable Upper Limit Integral + Differentiation of Implicit Functions**
- Example: Let the differentiable function $y=y(x)$ be determined by equation $\int_0^{x+y}\mathbf{e}^{-t^2}\mathbf{d}t=\int_0^xx\sin t^2\operatorname{d}t$, find $\frac{\operatorname{d}y}{\operatorname{d}x}_{x=0}$
- Analysis: The left side of the equivalence is a function about x and y, and the right side of the equation is a function about x. Therefore, when you need to find the derivative of $y=y(x)$ on $\frac{\operatorname{d}y}{\operatorname{d}x}_{x=0}$, essentially it is an implicit function with y and x whose derivative is at point 0, so it is a problem of derivative of implicit functions;
	- Core: Derivative by the upper limit

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review
