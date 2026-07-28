---
title: "Lecture 17: Differentiation Rules"
slug: math-025
description: "Graduate Entrance Examination Mathematics study notes: Lecture 17: Differentiation Rules. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2023-12-17
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Derivatives and Differentials"]
---

## 1.1 Differentiation Rule for Sum and Difference Quotient
**Rational Operation Rules**
If $u(x)$ and $v(x)$ are differentiable, then
- $(u\pm v)^{\prime}=u^{\prime}\pm v^{\prime}$
- $(uv)^{\prime}=u^{\prime}v+uv^{\prime}$
- $(\frac uv)^{\prime}=\frac{u^{\prime}v-v^{\prime}u}{v^2}\quad(v\neq0)$

## 1.2 Differentiation Rules for Inverse Functions
**Theorem 2:**
Let the strictly monotonic and continuous function $x=f(y)$ on the interval $I$ be differentiable at $y$, and $f^{\prime}(y)\neq0$, then its inverse function $y=f^{-1}(x)$ is differentiable at the corresponding point.
- Therefore, $(f^{-1})^{\prime}(x)=\frac1{f^{\prime}(y)}\quad\frac{dy}{dx}=\frac1{dx/dy}$;
- Meaning
	- The function and the inverse function are two functions, but they are the same curve;
	- If a function is strictly monotonic and continuous, differentiable at the corresponding point, and has a nonzero derivative there, then its inverse is differentiable at the corresponding point;

**Example:** Find the derivative of $y=\arcsin x\quad(x\in[-1,1])$.
Inverse function: $x=\sin y\quad y\in\left[-\frac\pi2,\frac\pi2\right]$
Derivative of the function: $\frac{dy}{dx}=(\arctan x)^{\prime}=\frac{1}{\log}=\frac{1}{\sqrt{1-\sin^{2}y}}=\frac{1}{\sqrt{1-x^{2}}}$

## 1.3 Differentiation Rules for Composite Functions
**Theorem 3: Chain Law**
Let $u=g(x)$ be differentiable at $x$, $y=f(u)$ at the corresponding $u$, then $y=f[g(x)]$ is differentiable at x.
- then: $\frac{dy}{dx}=f^{\prime}(u)g^{\prime}(x)$
- Other forms:
	- $\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$

**Example Question:**$y=2\cos^2\frac1x$
Use the chain rule: $y=2u^{2},u=\cos v,v=\frac{1}{-x^2}$
- $\begin{aligned}\frac{dy}{dx}&=4u\cdot(-\sin v)(-\frac1{x^2})\\&=4\end{aligned}$

**Note: When calculating the function value, it is done from inside to outside; But when finding derivatives, it is from outside to inside and continues to find differentiation with respect to x;**

**Conclusion**: After differentiating odd and even functions, the parity of the derivative is reversed;
- Derivative of odd functions: even functions;
- Derivative of even functions: odd functions;

## 1.4 Derivative Conclusion
**Basic Elementary Functions**
- Basic
	- $\begin{aligned}&\quad(C)^{\prime}=0\quad&\quad(x^\alpha)^{\prime}=\alpha x^{\alpha-1}\\&\quad(a^x)^{\prime}=a^x\ln a\quad&\quad(e^x)^{\prime}=e^x\\&\quad(\log_ax)^{\prime}=\frac1{x\ln a}\quad&\quad(\ln|x|)^{\prime}=\frac1x\end{aligned}$
- Trigonometric functions
	- $(\sin x)'=\cos x\qquad(\cos x)'=-\sin x$
	- $\begin{aligned}(\tan x)^{\prime}&=\sec^2x&(\cot x)^{\prime}&=-\csc^2x\\\\(\sec x)^{\prime}&=\sec x\tan x&(\csc x)^{\prime}&=-\csc x\cot x\end{aligned}$
- Inverse trigonometric functions
	- $\begin{aligned}&(\arcsin x)'=\frac1{\sqrt{1-x^2}}&&(\arccos x)'=-\frac1{\sqrt{1-x^2}}\\&(\arctan x)'=\frac1{1+x^2}&&(\operatorname{arccot}x)'=-\frac1{1+x^2}\end{aligned}$

## 1.5 Logarithmic Differentiation Method
**Example Problem Introduction**
- Let $y=(1+\sin x)^x$. Find $\mathrm{d}y\big|_{x=\pi}$.
- Power refers to the function;
- Logarithmic differentiation method:
	- First logarithmic: $\ln y=x\ln(1+\sin x)$
	- Differentiate both sides: $\frac{y'}{y}=\ln(1+\sin x)+\frac{x\cos x}{1+\sin x}$.
	- Present $y^{\prime}$ to obtain the derivative function
	- Substituting x = Π;

**An Important Conclusion**
- $(\ln|x|)^{\prime}=\frac{1}{x}$
- The derivative after adding the absolute value of $In$ is still 1/x;

**Applications of Logarithmic Differentiation**
- 1. idempotent function;
- 2. Multiplication, continuous division, multiplication, square root;
