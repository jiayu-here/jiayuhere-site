---
title: "Lecture 25: Local and Absolute Extrema of Functions"
slug: math-033
description: "Graduate Entrance Examination Mathematics study notes: Lecture 25: Local and Absolute Extrema of Functions. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-01-14
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Mean Value Theorems and Applications of Derivatives"]
---

## 1.1 Extremum of the Function
### 1.1.1 Basic Concepts
#####**Definition**: #Theextremumofthefunction
> <font color="#ccc1d9"> description: </font> if $\exists\delta>0$, make it
> 1) $\forall x\in U(x_0,\delta)$ always has $f(x)\geq f(x_0)$, then $f(x)$ is said to take the minimum value at $x_{0}$.
> 2) $\forall x\in U(x_0,  \delta)$ always has $f(x)\leq f(x_0)$, then it is said that $f(x)$ takes the maximum value in $x_0$

#####**Theorem**: #Extremaisanecessarycondition
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> If $f(x)$ is differentiable at $x_0$ and extremum is obtained at $x_0$, then $f^{\prime}(x_0)=0$

**Significance**
- For differentiable functions, this theorem narrows down the range of possible extremum points of the function;
- 1. For differentiable functions, only the stationary point needs to be considered;
- 2. For non-differentiable points, just look at stationary points and non-existent points;

**The Relationship Between Extremals and Stations**
- Location:
	- The point of the derivative equal to zero is called the**stationary point of the function**;
	- Take the extreme value at $x_0$, whose derivative is zero;
- The relationship between stationary points and extreme points
	- ![Pasted image 20240114161815](/assets/notes/894b82fc68db-Pasted-image-20240114161815.png)
- For differentiable functions, the extremum is the stationary point;

**Corollary 1**: Possible extrema points of a general function
- 1. Points where the derivative equals 0;
- 2. Points where the derivative does not exist;

#####**Theorem**: #Thefirstsufficientconditionforextremevalues
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> Let $f$ be continuous at $x_0$ and differentiable in a punctured neighborhood of $x_0$.
> 1. If $f'(x)\geq0$ for $x<x_0$ and $f'(x)\leq0$ for $x>x_0$, then $f$ has a local maximum at $x_0$.
> 2. If $f'(x)\leq0$ for $x<x_0$ and $f'(x)\geq0$ for $x>x_0$, then $f$ has a local minimum at $x_0$.
> 3. If $f'$ has the same sign on both sides of $x_0$, then $f$ has no local extremum there.

**Significance**
- Determine whether a point is truly an extreme point;
- How to use:
	- From the necessary condition (theorem) of ` extremum ` `->` several possible extremum points `->` ` the first sufficient condition (theorem) for extremums ` `->` the true extremum point;

**Explanation**
- Geometry
	- Cases 1 and 2 respectively: ![Pasted image 20240114162335](/assets/notes/aeb6b52d15a5-Pasted-image-20240114162335.png)
- Advantages
	- It can analyze points where the derivative equals 0, and points where the derivative does not exist;

#####**Theorem**: #Thesecondsufficientconditionfortheextremum
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $\text{ Let }\quad f^{\prime}(x_0)=0,f^{\prime\prime}(x_0)\neq0$
> 1) When $f^{\prime\prime}(x_0)<0$, $f(x)$ take the maximum value at $x_{0}$
> 2) When $f^{\prime\prime}(x_0)>0,\quad f(x)$ takes the minimum value at $x_{0}$

**Explanation**
- Meaning:
	- Determine whether a point has reached an extreme value by using the value of the**second derivative**of a point whose derivative equals 0;
- Limitations:
	- Unable to analyze points where the derivative does not exist;

### 1.1.2 Example Problems
**Example Question**: $\text{ Find the inverse of }f(x)=x^3-3x^2-9x+5\text{ Extremes }$
- Analysis
	- From the form, the**function is a differentiable function -> The extremum of the differentiable function can only be taken at the stationary position of**;
	- But a stationary point is not necessarily an extreme point; You need to use sufficient conditions to determine whether a point with zero first derivative of -> changes its sign (positive or negative);
- Analysis
	- Using the first sufficient condition
		- $f(x)=3x^{2}-6x-9=3\left(x_{-2}^{2}x-3\right)=3(x-3)(x+1)=0\Longrightarrow x_{1}=-1,x_{2}=3$
		- At $x=-1$, the function derivative ranges from positive to >, so it is the maximum point;
		- At $x=3$, the function derivative ranges from negative to >, so it is the minimum value;
	- Use the second sufficient condition
		- $\begin{aligned}f^{\prime\prime}(x)=6x-6,\quad f^{\prime\prime}(-1)=-12<0,\quad \text{ Extremely large }\\f^{\prime\prime}(3)=12>0\quad \text{ Very small }\end{aligned}$
- Question Type: #Theextremumofthefunction


## 1.2 Maximum and Minimum Values
#####**Definition**: #Themaximumandminimumvaluesofthecontinuousfunction
> <font color="#ccc1d9"> Description: </font> Find the absolute extremum of continuous function $f(x)$ on $[a,  b]$
> 0) Establishing the objective function (for word problems)
> 1) Find the station, non-differentiable, and endpoint $x_1,x_2,x_3 ...$ of $f(x)$ within $(a,b)$;
> 2) Find the function values for each point
> 3) Compare the calculated value with the endpoint; the larger value is the maximum, the smaller is the minimum

**Explanation**
- If the continuous function f(x) has only a unique extremum point in `(a,b)` `->` If it is maximal, it is a maximum; If it is small, it is a minimum;

**Supplement**: Word problems for maximum-minimum values
- Step 1: Create the objective function $y=f(x)$
- Convert into general questions

**Example**: $\text{Find the maximum and minimum values of }f(x)=2x^3-3x^2\text{ on }[-1,2].$
- Analysis
	- Since it is a polynomial, there are no points where the derivative does not exist, so only points where the derivative equals zero are needed;
- Analysis
	- $f^{\prime}(x)=6x^2-6x=6x(x-1)=0\Longrightarrow x_1=0,x_2=1$
	- Find the value of the stationary point
		- $f(0)=0,f(1)=-1$
	- Find the value of the endpoint
		- $f(-1)=-5,f(2)=4$
	- Therefore, x = -1 is the minimum point, and x = 2 is the maximum point
- Question Type: #Themaximumandminimumvaluesofthecontinuousfunction

## 1.3 Related Question Types
### Question Type: #Findtheextremumandextremaofthefunction
#### PART 1: Problem-solving methods
**Core**: Composed of the necessary conditions (theorem) for ` extremums ` `->` several possible extremum points, `->` ` first sufficient condition (theorem)` `->` true extremum points;

**Possible Extremes**
- 1. Points where the derivative equals 0;
- 2. Points where the derivative does not exist;

**Determining whether a possible extreme point is truly an extreme point**
- When the derivative exists: the first sufficient condition of the extreme value can be used. `->` Whether the left and right limits of the derivative change in signs. `->` When the derivative changes from positive to negative: maximum + from negative to positive: minimum;
- The derivative does not exist:
	- 1. When the function is continuous: you can use the first sufficient condition for the extreme value + continuous derivative `->` You can derive whether the point where the derivative does not exist is an extremum `->` When the derivative changes from positive to negative: maximum + from negative to positive: minimum value;
	- 2. Unclear whether the function is continuous: use the first sufficient condition of the extremum + determine if this point is continuous (whether the left and right limits are equal) `->` If continuous `->` derivative changes from positive to negative: maximum + derivative from negative to positive: minimum;
- Or use the second sufficient condition for the extremum `->` The second derivative is not zero;

**Supplement**: About the derivatives of functions and the left-right derivatives
- If one of the left and right derivatives of the derivative does not exist, then this derivative does not exist;
- And if one of the left and right derivatives has already been determined, then the other half does not need to be discussed;

**Finding Derivatives Based on Function Formulas**
- 1. Analyze the function and see if there are points where the derivative does not exist. `->` Usually, the boundary points and zero points around the piecewise function may be points where the derivative does not exist;
- 2. After removing the nonexistent points, derivative is taken from the function;

**Application Problems for Maximum/Minimum**: First, establish a goal, then solve it using methods to find maximum/minimum.
- Note: Objective functions are usually not unique; consider whether there are simpler objective functions;

#### PART 2: Typical Example Problems
**Example**: Given that $f(x)$ is continuous in a neighborhood of $x=0$ and $f(0)=0,\lim_{x\to0}\frac{f(x)}{1-\cos x}=2$, then at point $x=0$ $f(x)$ __
- Analysis
- Analysis
	- Direct Method:
		- Since $\lim_{x\to0}\frac{f(x)}{1-\cos x}=2$ and $1-\cos x$ is greater than 0 `->` near $x=0$, so near 0, $f(x)>0$;
		- Because at 0 o'clock, $f(0)=0$, and near 0 again, $f(x)>0$;
		- Therefore, it can be known that $f(0)=0$ is the smallest point near point 0, so the minimum value is obtained;
	- Elimination method:
		- substitute specific functions and analyze;
		- Let $f(x)=x^2$, at which point it meets all the conditions of the question;
		- From this, $f(x)=x^2$ finds its minimum value at point 0, and the limit exists, is differentiable, and its derivative equals 0;
- Question Type: #

#### PART 3: Key Points Review
