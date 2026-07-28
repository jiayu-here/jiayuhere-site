---
title: "Lecture 19: Implicit Functions and Parametric Equations"
slug: math-027
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 19: Implicit Functions and Parametric Equations. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2023-12-21
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Derivatives and Differentials"]
---

## 1.1 Derivative of implicit functions
### 1.1.1 Basic Concepts of Implicit Functions
**Manifest Functions**
y can be expressed entirely using an expression of x;

**Implicit Functions**
- Implicit function: $3y+x+1=0$
	- Explicit Functionalization (Manifestation): $y=-\frac{x+1}3$
	- But not all implicit functions are easy to manifest
- Difficult-to-manifest implicit function: $y-x-\varepsilon\sin y=0\quad(0<\varepsilon<1)$

**General Form**
General form of implicit functions (expressed as binary functions): $F(x,y)=0\Rightarrow y=f(x)$

**Methods for Differentiating Implicit Functions**
The implicit function becomes the following form:
- $F(x,f(x))\equiv0$
- Derivative of x on both sides, then the derivative part is proposed to obtain the equation of the derivative;

**Common Errors**: Implicit function differentiation calculation
- Illustration:
	- ![Pasted image 20240706152937](/assets/notes/951c440ea700-Pasted-image-20240706152937.png)

### 1.1.2 Example Problems
**Example**: $\text{Find the derivative of the implicit function }y=f(x)\text{ defined by }y^5+2y-x=0.$
- Since it is a plus sign, the three terms are differentiated separately: $5y^4y^{\prime}+2y^{\prime}-1=0$
- Isolating $y^\prime$ gives $y^\prime=\frac1{5y^4+2}$.

**Example**: $\text{Let }y=f(x)\text{ be defined by }y=1+xe^y.\text{ Find }y^{\prime\prime}(0).$
First substitute $x=0$ into the original equation to obtain $y(0)=1$.
Differentiate both sides to obtain the first derivative:
- $y^{\prime}=e^{y}+xe^{y}y^{\prime}$
At $x=0$ and $y=1$, this gives $y^{\prime}(0)=e$.
Differentiate again: $y^{\prime\prime}=e^{y}y^{\prime}+e^{y}y^{\prime}+x(e^{y}y^{\prime})^{\prime}$.
Therefore, $y^{\prime\prime}(0)=e^{2}+e^{2}=2e^{2}$.

**Example**: $\text{Let }y=(1+x^2)^{\sin x}.\text{ Find }y^{\prime}.$
- This is a variable-base, variable-exponent function, so take logarithms on both sides:
	- $\ln y=\sin x\ln(1+x^2)$
- Differentiating gives $\frac{y^{\prime}}y=\cos x\ln(1+x^2)+\frac{2x\sin x}{1+x^2}$.
- Therefore, $y^{\prime}=(1+x^{2})^{\sin x}\left[\cos x\ln(1+x^2)+\frac{2x\sin x}{1+x^{2}}\right]$.

**Problem-solving method**: Logarithmic differentiation method
#Logarithmicdifferentiationmethod
- For a variable-base, variable-exponent function, take logarithms on both sides before differentiating.

## 1.2 Parameter Equations Determine Function Derivatives
### 1.2.1 Basic Concepts
Plane curves can be represented by parametric equations; This may involve the differentiation of parametric equations;

#####**Theorem**: #Thefirstderivativeoftheparametricequation
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> $$\text{If }x=\varphi(t)\text{ and }y=\psi(t)\text{ are differentiable on }(\alpha,\beta)\text{ and }\varphi^{\prime}(t)\neq0,\text{ then }\frac{dy}{dx}=\frac{\psi^{\prime}(t)}{\varphi^{\prime}(t)}.$$

**Explanation**
- Because: $\varphi^{\prime}(t)\neq0$, so there are derivatives, so
	- ${t=\varphi^{-1}(x)}$
	- ${y=\psi(t)}$
- $\frac{dy}{dx}=\frac{dy}{dt}\frac{dt}{dx}$
- Ultimately: $\frac{dy}{dx}=\frac{\psi^{\prime}(t)}{\varphi^{\prime}(t)}$
	- Analysis: Derivative of y with respect to x, the result is the derivative of y with respect to t, divided by the derivative of x with respect to t;

#####**Theorem**: #Thesecondderivativeoftheparametricequation
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\frac{d^{2}y}{dx^{2}}=\frac{\psi^{\prime\prime}(t)\varphi^{\prime}(t)-\varphi^{\prime\prime}(t)\psi^{\prime}(t)}{\varphi^{\prime3}(t)}$$

**Analysis**: Find the second derivative with the t formula
- Note: When calculating the second derivative, follow these steps and do not skip steps
- Find the diagram:
	- ![Pasted image 20240319215159](/assets/notes/94aee05bf7b1-Pasted-image-20240319215159.png)
### 1.2.2 Example Problems
**Example**: $\text{Let }\quad\begin{cases}y=\ln(1+t^2)\\x=\arctan t.&\end{cases}\quad\text{Find }\quad y^{\prime},y^{\prime\prime}.$
Step 1: Find the first derivative - > $\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\frac{2t}{1+t^{2}}}{\frac{1}{1+t^{2}}}=2t$
Then the second derivative is required, so**the left and right simultaneously need to derive from x**(note that x is not t).
- $\frac{d^2y}{dx^2}=\color{red}{2\cdot\frac{dt}{dx}}$ = $\frac{2}{\frac{1}{1+t^{2}}}=2(1+t^{2})$
	- Note that the right side also takes the differentiation with respect to x

**Example Question**: Given the parameter equation of the cycloid (cycloid) is $x=a(t-\sin t)$ $y=a(1-\cos t)$, find the tangent equation and normal equation of the cycloid at $t=\frac\pi2$;
Since it is a tangent line, it is necessary to derive the slope at this point -> slope is the rate of change;
- Calculating the slope: $k=\frac{dy}{dx}=\frac{a\sin t}{a(1-\cos t)}\Bigg|_{t=\frac{\pi}{2}}=1$
- Then: $x_0=a\left(\frac\pi2-i\right),\quad y_0=a.$
- Obtain tangents and normals;

## 1.3 Rate of Change
### 1.3.1 Basic Concepts
**Rate of Change - Basic Concepts**
Known: $x=x(t)\quad y=y(t)\quad F(x,y)=0$
It indicates that x and t are related, y is related to t, and x and y satisfy a certain relationship;
If you know the rate of change relationship between x and y and t, then you need to find the other rate of change with t, that is, find the rate of change;

**General Method**
- 1. Establish $F(x,y)=0$: that is, the relationship between two related quantities,
- 2. Derivative of both sides of the equation with respect to t;


### 1.3.2 Example Problems
**Example Question**: Suppose an inverted conical container has a base circle diameter of 10 cm and a height of 5 cm. Now, adding water to the container at 3 cm per second, calculate the rate at which the water level rises at t = 1 second;
1. Step one: Establish the relationship between two related quantities: the volume and height of the water
	- $V(t)=\frac\pi3h^2(t)h(t)=\frac\pi3h^3(t)$
2. Derivative of both sides of the equation with respect to t:
	- $V^{\prime}(t)=\pi h^2(t)\frac{dh}{dt}$
	- The derivative of V(t) is 3 cm per second, so it is 3;
	- $3=\pi h(1)\frac{\mathrm{d}h}{\mathrm{d}t}$
- 3. The result: $h(1)=\sqrt{\frac{9}{\pi}}$
