---
title: "Lecture 21: Differential Mean Value Theorems"
slug: math-029
description: "Graduate Entrance Examination Mathematics study notes: Lecture 21: Differential Mean Value Theorems. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-03-22
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Mean Value Theorems and Applications of Derivatives"]
---

## Common Question Types and Typical Examples in This Chapter
**Frequently Tested Question Types**
- 1. Find the extremum and extrema of the function, determine the concave direction and inflection point of the curve; (Basic question)
- 2. Find the asymptote; (Basic question)
- 3. Roots of the equation; (More difficult problem)
- 4. Proof of inequalities: (relatively difficult problem)
- 5. Mean Value Theorem Proof Problem (Difficult Problem)

---
## 1.1 Mean Value Theorem for Differentiation
**Purpose**: Why is the mean value theorem for differential differential needed? ``->`` Establish the relationship between derivatives and functions. ``->`` Lay the foundation for studying functions through derivatives;

**Frequently Tested Question Types**
- Problem Type 1: Find limits
- Problem Type 2: Extrema and Extrema of Functions, Concave Directions and Inflection Points of Curves
- Question Type 3: Asymptote of a curve
- Problem Type 4: Roots of the Equation
- Problem Type 5: Proof of inequalities
- Problem Type 6: Proof of the Mean Value Theorem (Difficult)

## 1.2 The Three Major Theorems
**The Meaning of the Three Theorems**
- Rolle's theorem: $\xi\in(a, $ exists $b)$, make $f^{\prime}(\xi)=0$
- Lagrange mean value theorem: $f(b)-f(a)=f^{\prime}(\xi)(b-a)$
	- Establish a relationship between the local and the whole
		- The derivative reflects the rate of change at a point, which is local;
		- But (a, b) is a variation of the entire interval;
		- Therefore: $f(b)-f(a)=f^{\prime}(\xi)(b-a)$ Establish the relationship between the local and the whole;
	- Established the relationship between function values and derivative values
		- Established the theoretical foundation for studying functions using derivatives;
- Cauchy mean value theorem

**The Relationship of the Three Major Theorems**
![Pasted image 20240322225640](/assets/notes/297b431916fb-Pasted-image-20240322225640.png)

**Scope of Application**
- Prove the identity
- Proof of inequalities
- Supporting the conclusions about the median issue

### 1.2.1 Rolle's Theorem
#####**Definition**: maximum and minimum
> <font color="#ccc1d9"> description: </font> $\text{ If }  \exists\delta>0\text{ , so that }$
> Minimum value: $\forall x\in U(x_0,  \delta)$ always has $f(x)\geq f(x_0)$, then it is said that $f(x)$ takes the minimum value in $x_0$
> Maximum value: $\forall x\in U(x_0,  \delta)$ always has $f(x)\leq f(x_0)$, then it is said that $f(x)$ takes the maximum value in $x_0$

**Explanation**
If a function is differentiable at an interior extremum, its tangent is horizontal; equivalently, its derivative is zero.

**Lemma**: Fermat's lemma
- If $f$ has a local extremum at $x_0$ and is differentiable there, then $f'(x_0)=0$.
- Fermat's theorem gives a necessary condition for a differentiable function to have an interior extremum.

#####**Theorem**: Rohr's theorem
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> meet three conditions:
> 1) $f$ continuous on $[a,b]$;
> 2) $f$ conductivable within $(a,b)$;
> 3）f(a)=f(b)
> Thus, it can be known: $\text{ then }\exists\xi\in(a,b)\text{ , to use }f^{\prime}(\xi)=0$
> Derivation conclusion: A tangent line to a point is parallel to the line connecting points ab `->` Lagrange theorem;

**Explanation**
- Derivation relations: [Definition] Maximum and minimum values `->` [Theorem] Fermat's lemma `->` [Theorem] Lawr's theorem
- Illustration
	- ![Pasted image 20231225142739](/assets/notes/fe8f6ba1d4ba-Pasted-image-20231225142739.png)

### 1.2.2 Lagrange Mean Value Theorem
#####**Theorem**: Lagrange's mean value theorem
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if the following conditions are met:
> 1) $f$ continuous on $[a,b]$
> 2) $f$ is differentiable within ($a,b)$
> Therefore, there exists $\xi\in(a,b)$ such that $f(b)-f(a)=f^{\prime}(\xi)(b-a)$;

**Explanation**
- Lagrange's theorem is a generalization of the Roll theorem;
- The Rolle theorem is a special case of the Lagrange theorem;

**Additional Information**
- $a>b,a<b\quad\text{ All conclusions hold true }$
- Rewriting form: $f(b)-b(a)=f^{\prime}[a+\theta(b-a)](b-a)\quad(0<\theta<1)$
-**Important**`->` Rewriting format: $f(x_0+\Delta x)-f(x_0)=f^{\prime}[x_0+\theta\Delta x]\Delta x\quad(0<\theta<1)$
	- This form is an exact description of the following differential approximation form: $\Delta y\approx f^{\prime}(x_0)\Delta x$

**Explanation**
- Illustration
	- ![Pasted image 20231225143334](/assets/notes/841c51f46b65-Pasted-image-20231225143334.png)
- Without the constraint of f(a) = f(b), there may not necessarily be tangents parallel to the X-axis;
- However, there will be a point of slope equal to the current function value connecting the line:
	- ![Pasted image 20231225143547](/assets/notes/ec28e6c99536-Pasted-image-20231225143547.png)

**Corollary 1**: Finite increment formula
- $f(x_0+\Delta x)-f(x_0)=f^{\prime}[x_0+\theta\Delta x]\Delta x\quad(0<\theta<1)$
- Approximate description: $\Delta y\approx f^{\prime}(x_0)\Delta x$

**Corollary 2**: If $f$ is continuous on an interval $I$ and differentiable in its interior, then $f(x)\equiv C$ on $I$ if and only if $f^{\prime}(x)\equiv0$ there.
- The forward implication is immediate.
- The key is proving the converse.

**Proof**: Use analytical methods to prove the Lagrange mean value theorem
- Core method: **construct an auxiliary function and apply Rolle's theorem**.
	- The goal is to prove that $\exists\xi\in(a,b)$ such that $f(b)-f(a)=f^{\prime}(\xi)(b-a)$.
	- Equivalently, prove $f^{\prime}(\xi)-\frac{f(b)-f(a)}{b-a}=0$.
	- Construct a function for which $F^{\prime}(\xi)=0$.
	- Therefore, we get: let $F (x)=f (x)-\frac{f (b)-f (a)}{b-a}x$
	- Rolle's theorem then gives $F^{\prime}(\xi)=0$.

#### 1.2.2.1 Example Problems
**Example Question**: $\text{ Proof }\quad|\sin x-\sin y|\leq|x-y|$
- Analysis
	- Analysis process:
- Analysis
- Conclusion: $\mathrm{~sinx<x<tanx,x\in(0,\frac\pi2)}$


**Example**: $\text{Prove that, for }x\in(0,\frac\pi2),\quad\arctan x+\arctan\frac1x=\frac\pi2.$
- Analysis
	- Since the goal is to prove that a function value equals a constant within a range, it is possible to consider using {Lagrange mean value theorem corollary 2};
- Analysis
	- $f^{\prime}(x)=\frac{1}{1+x^{2}}+\frac{-\frac{1}{x^{2}}}{1+(\frac{1}{x})^{2}}=0.$
	- Therefore, the derivative equals 0, according to the corollary 2 `->` The current function value is a constant within the range;
	- So by substituting any point, the current function value is always $\pi/2$

### 1.2.3 Cauchy Mean Value Theorem
#####**Theorem**: Cauchy's mean value theorem
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if the following conditions are met:
> 1) $f,  F$ on $[a,  b]$ continuity $; $
> 2) $f,  F$ is differentiable within $(a,  b)$, and $\forall x\in(a,  b),  F^{\prime}(x)\neq0$
> Therefore, there exists $\xi\in(a,b)$ such that $\frac{f(b)-f(a)}{F(b)-F(a)}=\frac{f^{\prime}(\xi)}{F^{\prime}(\xi)}$;

**Explanation**
- From Lagrange's mean value theorem `->` Cauchy mean value theorem;
	- Regard $Y=f(t)$ and $x=F(t)$ as a parametric curve.
	- At this point, $\frac{f(b)-f(a)}{F(b)-F(a)}$ represents the slope of segment ab;
	- And for $\xi$ points y and x, derivative `->` $\frac{f^{\prime}(\xi)}{F^{\prime}(\xi)}$ = $dy/dx$ `->` equals the slope at this point;
	- Therefore, for some $\xi\in(a,b)$,
	  $$\frac{f(b)-f(a)}{F(b)-F(a)}=\frac{f^{\prime}(\xi)}{F^{\prime}(\xi)}.$$
- Geometric meaning
	- ![Pasted image 20240520005050](/assets/notes/41fd80d218c7-Pasted-image-20240520005050.png)
- Example: $\lim_{x\to0}\frac{x-\sin x}{x^3}=\lim_{x\to0}\frac{(x-\sin x)-(0-\sin^{}0)}{x^3-0^3}$
	- By Cauchy's mean value theorem, for some $\xi$ between $0$ and $x$,
	  $$\frac{x-\sin x}{x^3}=\frac{1-\cos\xi}{3\xi^2}.$$
	- So we get $\lim_{x\to0}\frac{1-\cos x}{3x^{2}}=\lim_{x\to0}\frac{\frac{1}{2}x^{2}}{3x^{2}}.$
	- Final result is 1/6;

### 1.2.4 Summary of the Three Major Theorems
**Core**: Establish the relationship between derivative values and function values

**Problem Analysis**:
- 1. If the given problem is a derivative and the function is studied, the mean value theorem for differential can be used;
- 2. If the given condition is a function and the proof is a derivative, the mean value theorem for differential can also be used;

**The Relationship Among the Three Parties**
![Pasted image 20240322225640](/assets/notes/297b431916fb-Pasted-image-20240322225640.png)

**Usage Analysis**
- Lagrangian's theorem and Rolle's theorem are more commonly used;
- Especially the Lawr theorem;


#### PART 3: Key Points Review
