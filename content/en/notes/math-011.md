---
title: "Lecture 3: Properties of functions"
slug: math-011
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 3: Properties of Functions. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-02-26
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 3.1 Four Types of Properties of Functions
### 3.1.1 Monotonicity
#####**Definition**: #Monotonicity
> <font color="#ccc1d9"> description: </font> $\text{ If for intervals }I\text{ Any two points on the above }x_1<x_2\text{ There is always such a thing }$ $\begin{aligned}f(x_1)<&f(x_2)&&\text{ Monotonous increase }\\f(x_1)>&f(x_2)&&\text{ Monotonous reduction }\end{aligned}$


### 3.1.2 Parity
#####**Definition**: #Parity
> <font color="#ccc1d9"> description: </font> $\text{ Let }y=f(x)\text{ Domain of the definition }D\text{ Regarding origin symmetry },\,\forall x\in D$
> 1. $f(-x)=f(x)$ -> Even function;
> 2. $f(-x)=-f(x)$ -> Odd function;

**Explanation**
- Common odd functions: $\sin x, \tan x, \arcsin x, \arctan x, \ln\frac{1-x}{1+x}, {\ln(x+\sqrt{1+x^2})}, \frac{e^x-1}{e^x+1}, $$f(-x)=-f(x)$
- Common even functions: $x^2, |x|, \cos x, f(x)=f(-x)$

**Property**
- 1. The graph of an odd function is symmetric about the origin. If $f$ is defined at $x=0$, then $f(0)=0$.
- 2. The graph of an even function is symmetrical about the y-axis;
- Parity judgment:
	- Common odd functions: $\sin x, \tan x, \arcsin x, \arctan x, \ln\frac{1-x}{1+x}, {\ln(x+\sqrt{1+x^2})}, \frac{e^x-1}{e^x+1}, $$f(-x)=-f(x)$
	- Common even functions: $x^2,|x|,\cos x,f(x)=f(-x)$
- Calculation rules:
	- Odd function + odd function =**odd function**
	- Even function + even function = even function
	- Odd function + even function =**neither odd nor even**
	- Odd function × Odd function =**even function**
	- Even function × Even function = even function
	- Odd function × even function = odd function
- Composite function:
	- Inner odd equals the exterior; even inner is even
	- If the inner function is odd, then the parity and exterior function of the composite function are the same;
	- If the inner function is even, then the composite function is even;
- Derivative Relation:
	- Derivative of odd functions: even functions;
	- Derivative of even functions: odd functions;

**Method**
- Use the definition of odd or even functions to determine whether a function is odd or even;

### 3.1.3 Periodicity
#####**Definition**: #Periodicity
> <font color="#ccc1d9"> Description: </font> if there exists a real number $T>0$, for any $x$, there is always $f(x+T)=f(x)$, then $y=f(x)$ is called a periodic function; The smallest positive number such that the above expression holds is called the smallest positive period, abbreviated as the period of function $f(x)$;

**Explanation**
- The period referred to in normal times is the minimum positive period;

**Common Periodic Functions**
- 1.  $\sin x,\cos x\text\text{ The period is }2\pi;\,\sin2x,|\sin x|\text\text{ The period is }\pi$
- 2. $\text{ If }f(x)\textit{\text{ With }}T\text\text{ This is the cycle },\text{ then }f(a\text{x}+b)\textit{ \text{ With }}\frac T{|a|}\text{ This is the cycle }.$

### 3.1.4 Boundedness
#####**Definition**: #Bounded
> <font color="#ccc1d9"> description: </font> if there exists $\left(M>0\right)$ such that $\left|f(x)\right|\leq M$ always $x\in\left\{X,\right\}$ for any, then $f(x)$ is called a bounded function on $X$; If for any $M>0$, there exists at least one $x_0\in\overline{X}$ such that $|f(x_0)|>M$, then $f(x)$ is an unbounded function on X;

**Explanation**
- Bounded = has an upper bound + has a lower bound;
- Note: Bounded is relative, so the scope needs to be specified;

**Common Bounded Functions**
- $|\sin x|\leq1;|\cos x|\leq1;|\arcsin x|\leq\frac\pi2;|\arctan x|<\frac\pi2,|\arccos x|\leq\pi;$
- Note: $|\arctan x|<\frac\pi2$ is a bounded function, often tested;

## 3.2 Frequently Tested Question Types
### Question Type: #Determinationofthefourtypesofpropertiesoffunctions
- Bounded function
	- When multiplying several basic elementary functions, check whether any of them are infinite;
	- When $sinx、cosx$ appears, you can consider taking x to $2n\pi + \pi/x$
- Periodic function
	- When multiplying several basic elementary functions, check if any basic elementary function is not a periodic function. If so, will the entire function grow larger because of it; If so, it is not a periodic function;
