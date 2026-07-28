---
title: "Lecture 31: Basic Concepts of Definite Integrals"
slug: math-039
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 31: Basic Concepts of Definite Integrals. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2024-01-21
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Definite and Improper Integrals"]
---

## Common Question Types and Typical Examples in This Chapter
**Exam Content**
- (1) Concept of definite integrals
- (2) Properties of definite integrals
- (3) Functions of the upper limit of integrals
- (4) Calculation of definite integrals

**Frequently Tested Question Types**
- Question Type 1: Concept, properties, and geometric meaning of definite integrals
- Question Type 2: Calculation of Definite Integrals (Key Point)
- Question Type 3: Upper Limit Points (Key Point)

## 1.1 Basic Concepts of Definite Integrals
### 1.1.1 Definition of Definite Integrals
#####**Definition**: #Definiteintegral
> <font color="#ccc1d9"> description: </font> $f(x)$ is bounded on $[a,b]$, arbitrarily inserting a node on $[a,b]$ to divide into n intervals $\Delta x_{1}\Delta x_{2}\cdots\Delta x_{n}$, and any point i is chosen, we have: $$\int_{a}^{b}f(x)dx=\lim_{λ\to0}\sum_{x=1}^{n}f(\xi_{i})\Delta x_{i}$$
>
> Where: $$\lambda=\max\{\Delta x_{1}\cdots\Delta x_{n}\}$$

**Explanation**
- Concept:
	- A definite integral is the**sum limit of $f(x)$ on $[a,b]$;
	- 1. Divide: divide the $[a,b]$ interval into several segments;
		- Let function $f(x)$ be continuous on interval $[a, b]$, divide interval $[a, b]$ into n subintervals $[x_0,x_1]$, ($x_1,x_2],(x_2,x_3],\ldots,(x_{n-1},x_n]$, where $x_0 = a$ and $x_n = b$
	- 2. Even: to take a section of $[x_{i-1},x_i]$ from it;
	- 3. Product: sum all subsegments: $\sum_{x=1}^{n}f(\xi_{i})\Delta x_{i}$
	- 4. Precision: Narrowing each segment toward infinitesimal: $\lim_{λ\to0}\sum_{x=1}^{n}f(\xi_{i})\Delta x_{i}$
- Summary:
	- Definite integrals are a special limit;
	- The existence problem of definite integrals `->` The integrability problem of limits;
- Segments:
	- $\lambda=\max\{\Delta x_1,\Delta x_2,\ldots,\Delta x_n\}$, where $\lambda$ is the maximum subinterval length.
	- If there exists a limit of the sum of integrals when λ→0, then this limit is called the definite integral of the function f(x) on the interval $[a, b]$, denoted as $\int_a^bf(x)dx$, and is said to be integrable on the interval $[a, b]$;
- Note:
	- 1. $\lambda\to0$ is not equivalent to $n\to\infty$.
	- 2. $\int_a^bf(x)\,dx$ depends only on $f$ and the interval $[a,b]$.
	- 3. The limit $\lim_{\lambda\to0}\sum_{i=1}^nf(\xi_i)\Delta x_i$ is independent of the choice of sample points $\xi_i$ and the partition of $[a,b]$.
		- Because it is unrelated to the method of division, and since equal division is the simplest, equal division is used;
		- $$\int_{0}^{1}f(x)\operatorname{d}x=\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_i)\Delta x_{i}=\lim_{n\to\infty}\frac{1}{n}\sum_{i=1}^{n}f(\frac{i}{n})$$
		- This allows us to find the limit of a sum to be the definite integral of it;
		- Here $\frac{1}{n}$ is the common subinterval width.
	- 4. Definite integrals yield a specific number, which depends only on the integrand and the integration interval, and is independent of the integral variable;


### 1.1.2 Conditions for the existence of definite integrals
#####**Theorem**: #Definiteintegralexistence
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> 1. Condition 1: $f(x)$ is continuously -> integrable on $[a,b]$;
> 2. Condition 2: $f(x)$ is bounded on $[a,b]$ and has a finite number of discontinuities -> that are integrable;
> 3. Condition 3: $f(x)$ There are only a finitely many Type I discontinuities on $[a,b]$;

**Explanation**
- Among them, 1 and 3 are used more frequently;
- Requirements:
	- Integrable `->` bounded;
	- But bounded cannot derive a integrable existence;
- Summary:
	- Being bounded is a necessary condition for the existence of definite integrals;
	- An integrable integral is a sufficient condition for the existence of definite integrals;

### 1.1.3 Geometric Meaning of Definite Integrals
**Function values can be positive or negative**
- Concept:
	- The definite integral equals the area of the graph of the function on geometry;
	- When the function value is positive or negative, the current definite integral equals the sum of the areas of parts A and C, minus the area size of part B;
	- The sign of the integral must be determined from the function and the interval.
- Illustration:
	- ![Pasted image 20240121212018](/assets/notes/3721272b403f-Pasted-image-20240121212018.png)

## 1.2 Properties of Definite Integrals
### 1.2.1 Basic Properties: Inequalities
**Property 1**: Inequality property
- $\text{ If }f(x)\leq g(x),\text{ then }\int_a^bf(x)\operatorname{d}x\leq\int_a^bg(x)\operatorname{d}x$
- Note:
	- a needs to be less than or equal to b

**Nature 2**: Valuation
- $m(b-a)\leq\int_a^bf(x)\operatorname{d}x\leq M(b-a)$
- Definite integral between the maximum and minimum values;

**Property 3**: Absolute value
- $\left|\int_a^bf(x)\mathbf{d}x\right|\leq\int_a^b\lvert f(x)\rvert\mathbf{d}x.$


### 1.2.2 Basic Properties: Mean Value Theorem
**Nature 1**
- If $f(x)$ is continuous on $[a,b]$, then
	- $$\int_a^bf(x)\operatorname{d}x=f(\xi)(b-a),a<\xi<b$$

**Nature 2**
- $g(x)$ does not change sign if $f(x),  g(x)$ continuity on $\left[a,  b\right]$
	- $$\int_a^bf(x)g(x)\operatorname{d}x=f(\xi)\int_a^bg(x)\operatorname{d}x,a<=\xi<=b$$

**Applications**
- 1. Proof problems for integrals;
- 2. Find the limit related to the integral;

### 1.2.2 Other Properties
**Two Provisions**
- 1. If b = a, the definite integral from a to a equals 0;
- 2. The definite integral from a to b equals the inverse of the definite integral from b to a;
	- $\int_{a}^{b}f\left(x\right)dx=-\int_{b}^{a}f\left(x\right)dx$
	- Exchange upper and lower limits;

**Nature 1:**$\int_{a}^{b}(\alpha f(x)+\beta g(x))dx=\alpha\int_{a}^{b}f(x)dx+\beta\int_{a}^{b}g(x)dx$

**Nature 2:**
- If $a<c<b$ (c is inside)
	- Then $\int_{a}^{b}f\left(x\right)dx=\int_{a}^{c}f\left(x\right)dx+\int_{c}^{b}f\left(x\right)dx$
- If $a<b<c$ (c is outside)
	- Then $\int_{a}^{b}f(x)dx=\int_{a}^{c}f(x)dx-\int_{b}^{c}f(x)dx$ $=\int_{a}^{c}f\left(x\right)dx+\int_{c}^{b}f\left(x\right)dx$
- So, the final conclusion: $\int_{a}^{b}f\left(x\right)dx=\int_{a}^{c}f\left(x\right)dx+\int_{c}^{b}f\left(x\right)dx$

**Nature 3:**$\begin{aligned}f(x)\equiv1;\,\int_{a}^{b}1dx=b-a\\\int_{a}^{b}kdx=k(b-a)\end{aligned}$

**Property 4:**M and m are the maximum and minimum values respectively, so $m(b-a)\leq\int_{a}^{b}f(a)dx\leq M(cb-a)$

## 1.3 Frequently Tested Question Types
### Question Type: #Theconceptofdefiniteintegrals. Properties and Geometric Meaning
#### PART 1: Problem-solving methods
**Question Type: n Items and Addition**
- Approach:
	- 1. Use the squeeze theorem;
	- 2. Defining using definite integrals;
- Solving definite integrals:
	- Step 1: First, present the cute silver $1/n$
		- Requirement: The element after the proposal is $1/n$ and cannot be offset by unlikable factors;
		- Because cute silver is the $\Delta x_{i}$ in $\int_{a}^{b}f(x)dx=\lim_{λ\to0}\sum_{x=1}^{n}f(\xi_{i})\Delta x_{i}$
	- Step 2: Observe the formula after being proposed, find the variable -> Wherever it changes, that is the variable;
	- Step 3: Obtain the interval -> from where it changes to -> Find the upper and lower bounds of the definite integral;
- How to judge:
	- Generally, the squeeze theorem is used first, and if it is not available, definite integrals are used to define it;

**Question Type: Geometric Meaning of Definite Integrals**
- Note:
	- When the upper and lower limits are required to be negative, such as the value of the definite integral in the $(-3,0)$ part, it is important to note: the upper limit of the definite integral cannot be less than the lower bound;
	- For example, $F(-2)=\int_{0}^{-2}f(t)dt$ This formula is incorrect because the upper limit cannot be less than the lower limit. This form must be used: $F(-2)=-\int_{-2}^{0}f(t)dt$
- Illustration:
	- ![Pasted image 20240410173857](/assets/notes/f97804c74e22-Pasted-image-20240410173857.png)

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review
