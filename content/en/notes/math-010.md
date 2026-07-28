---
title: "Lecture 2: Concepts of functions and common functions"
slug: math-010
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 2: Concepts of Functions and Common Functions. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2024-02-26
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 2.1 Basic concepts of functions
### 2.1.1 Definition of function
#####**Definition**: # function
> <font color="#ccc1d9"> Description: </font> If for each number $x\in D$, there is a unique $y$ corresponding to it according to certain rules, then $y$ is called a function of $x$, recorded as $y=f(x)$; $x$ is usually called an independent variable, $y$ is the dependent variable, $D$ is the domain.

**Explanation**
- Basic concepts
	- Domain: $D_f=D.$
	- Value range: $R_f=f(D)=\{y|y=f(x), x\in D\}$
- Two basic elements of functions:
	- Domain
	- Corresponding rules
- As long as two elements are met, two functions can be said to be the same, regardless of the symbol used for the domain;
- NOTE:
	- One $x$ can only correspond to one $y$
	- For example, $y^2=x$ is not a function, because one $x$ corresponds to two $y.$

### 2.1.2 Other function types
**Rounding function**
- Let $x$ be any real number, the largest integer not exceeding $x$ is called the integer part of $x$, denoted as $[x]$.
- Function $y=[x]$ is called a rounding function;

## 2.2 Other common functions
### 2.2.1 composite function
#####**Definition**: # composite function
> <font color="#ccc1d9"> Description: </font> Let the domain of $y=f(u)$ be $D_f$, the domain of $u=g(x)$ be $D_g$, and the value domain be $R_g$. If $D_f\cap R_g\neq\varnothing$, then the function $y=f[g(x)]$ is called the functions $y=f(u)$ and $u=g(x)$ The composite function. Its domain is $\left\{x\mid x\in D_g, \ g(x)\in D_f\right\}$.

**Explanation**
- g: inner function
- f: outer function
- Core: $D_f\cap R_g\neq\varnothing$

**Method: Determine whether two functions are composite**
- The intersection of the value domain of the inner function and the domain of the outer function must be a non-empty set; otherwise it is not a composite function;

**Error-prone points**: Pay attention to the value range and domain in composite function
- Concept:
	- The domain of composite function is $\left\{x\mid x\in D_g, \ g(x)\in D_f\right\}$.
- Common mistakes:
	- Treat the domain of the inner function as the domain of the composite function;

### 2.2.2 inverse function
#####**Definition**: # inverse function
> <font color="#ccc1d9"> description: </font> Let the domain of function $y=f(x)$ be $D$ and the value range be $R_f$. If for any $y\in R_f$, there is a unique $x\in D$ such that $y=f(x)$, then the function determined by $x=f^{-1}(y)$ is called $y=f(x)$ The inverse function.

**Explanation**
- Ordinary functions allow multiple different $x$ to correspond to the same $y$;
- The condition for the existence of antiderivative inverse function is that it has a one-to-one mapping in the domain, that is, different $x$ corresponds to different $y$;
- Concept:
	- 1. The inverse function $x=f^{-1}(y)$ of $y=f(x)$ is often written as $y=f^{-1}(x)$.
	- 2. In the same Cartesian coordinate system, the graphs of $y=f(x)$ and $x=f^{-1}(y)$ coincide.
	- 3. The graphs of $y=f(x)$ and $y=f^{-1}(x)$ are symmetric about the line $y=x$.

**Method: Is there an inverse function**
- Core:
	- 1. Is there a unique $x\in D$ for any $y\in R_y$;
	- 2. A strictly monotonic function on an interval must have an inverse function;
	- 3. A strictly monotonic function on an interval has the same monotonicity as its inverse function;
- For example:
	- $y=x^3$ has inverse function, but $y=x^2$ does not;
- Conclusion:
	- for $\forall x_{1}\neq x_{2}\in D\Rightarrow f(x_{1})\neq f(x_{2})$
	- that is, the f function should be a one-to-one mapping;

**Method: Find the inverse function of a function**
- Example: find the inverse of $y=\sinh x=\frac{e^x-e^{-x}}{2}$.
- Specific steps:
	- 1. Find the inverse solution;
	- 2. Reverse functions y, x;
### 2.2.3 Combination of inverse function and composite function
**Combination of both**:
- Case 1: When $x\in D$, $f^{-1}[f(x)]=x$
	- Ordinary functions are passed into the inverse function of the current function
- Case 2: When $x\in R_f$, $f[f^{-1}(x)]=x$

## 2.3 elementary functions
### 2.3.1 basic elementary functions definition
#####**Definition**: # basic elementary functions
> <font color="#ccc1d9"> Description: </font> collectively refers to power functions, exponentials, logarithms, trigonometric functions, and inverse trigonometric functions as basic elementary functions;
>

**Explanation**
![Pasted image 20240226231300](/assets/notes/195bf45ba27a-Pasted-image-20240226231300.png)

#####**Definition**: # elementary functions
> <font color="#ccc1d9"> Description: </font> by
> 1. Composed of constants and five categories of basic elementary functions;
> 2. Addition, subtraction, multiplication, division and compounding
> 3. The resulting function expressed by an analytical expression
> Call it elementary functions;

## 2.4 common problem types
### problem type: # composite function
#### PART 1: solution method
**Test method: If it is a composite of piecewise functions**
- 1. The inner layer is still brought into the outer layer;
- 2. If it is segmented, the inner function needs to be brought into the corresponding outer function segmentally according to the segmentation of the inner function (**the function value of the inner function falls into which part of the outer function**);
**Test method: If composite function and outer function are known, inner function is required**
- 1. The result of composite function = the function obtained by inserting the outer function into the inner function;
#### PART 2: representative examples
**Example**: Let $g(x)=\begin{cases}2-x,&x\leq0,\\x+2,&x>0,\end{cases}$ and $f(x)=\begin{cases}x^2,&x<0,\\-x,&x\geq0.\end{cases}$ Find $g(f(x))$.
