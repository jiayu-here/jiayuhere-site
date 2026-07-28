---
title: "Lecture 33: Applications of Definite Integrals"
slug: math-041
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 33: Application of Definite Integrals. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-01-24
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Definite and Improper Integrals"]
---

## Common Question Types and Typical Example Questions
**Frequently Tested Contents**
- (1) Improper integrals over an infinite interval
- (2) Improper integrals of unbounded functions

**Common Question Types and Typical Examples**
- Problem Type 1: Convergence and Divergence of Improper Integrals
- Problem Type 2: Calculation of Improper Integrals

## 1.1 Improper integrals of infinity
### 1.1.1 Basic Concepts
**Introduction**
- Basic conditions for definite integrals: $[a,b]$ is finite, and $f(x)$ is bounded;
- When an integral from $a$ to infinity is needed: $\int_{a}^{+\infty}f(x)dx$
- At this point, you can first set a $b$, then let b approach its limit;

#####**Definition**: #Anomalousintegral
> <font color="#ccc1d9"> description: </font> integral with infinite intervals or unbounded integrands is called improper integral; also known as generalized integral;

**Explanation**
- When it approaches infinity, if the limit has value, then it is called integral convergence;

**Both the upper and lower realms are infinite**
- Find: All values from negative infinity to positive infinity:
	- $\int_{-\infty}^{+\infty}f(x)dx=\int_{-\infty}^{0}f(x)dx+\int_{0}^{+\infty}f(x)dx$
	- Both limits must exist and converge; only then does the improper integral of the current upper and lower bounds converge;

**Corollary: Generalized Newton-Leibniz Formula**
- $\int_{-\infty}^{+\infty}f(x)dx=F(x)|_{-\infty}^{+\infty}$

#####**Definition**: #Improperintegralsoveraninfiniteinterval
> <font color="#ccc1d9"> description: </font>
> 1. Definition 1: $$\int_{a}^{+\infty}f(x)dx=\lim_{t\to+\infty}\int_{a}^{t}f(x)dx$$ If this limit exists, then the improper integral is called convergent; Conversely, it is divergent;
> 2. Definition 2: $$\int_{-\infty}^{b}f(x)dx=\lim_{t\to-\infty}\int_{t}^{b}f(x)dx$$ Same logic as definition one;
> 3. Definition 3: $$\int_{-\infty}^{+\infty}f(x)dx=\int_{-\infty}^{0}f(x)dx+\int_{0}^{+\infty}f(x)dx$$ If both converge, then converge; Otherwise, divergence;

**Explanation**
- Integral on an infinite interval, defined using the limit of the integral over a finite interval;
- Convergence can be evaluated;

### 1.1.2 Calculation Methods
#####**Theorem**: #ComparativeDiscrimination
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> used to determine the divergence of improper integrals;
> Suppose $f (x),  g (x)$ continuity on $[a,  +\infty)$, and $0\leq f (x)\leq g (x)$, then
> $$1)\int_{a}^{+\infty}g(x)dx\text{ Convergence }\Rightarrow\int_{a}^{+\infty}f(x)dx\text{ Convergence }$$
> $$2) \int_{a}^{+\infty}f(x)dx\text{ Diverges }\Rightarrow\int_{a}^{+\infty}g(x)dx\text{ Diverges }$$

**Explanation**
- Large convergence, small convergence; Large divergence, small divergence not necessarily divergence;
- Small things diverge, big ones definitely diverge; Small things converge, big ones don't necessarily converge;

**Supplement: Preliminary Judgment on Zoom in and Out**
- The number of times to observe the variable x in the function, for example, in $\frac{\sqrt{x}}{1+x^2}$ where the denominator x is $3/2$, and convergence;

**Usage Examples**
- Example question: $\int_1^{+\infty}\frac{\sqrt{x}}{1+x^2}dx.$
- Since $1+x^2>x^2$, $\frac{\sqrt{x}}{1+x^{2}}<\frac{\sqrt{x}}{x^{2}}=\frac{1}{x^{3/2}}$;
- Because the comparison integral has exponent $P=\frac32>1$, $\int_1^{+\infty}\frac{\sqrt{x}}{1+x^2}\,dx$ converges;

##### **Theorem**: #LimitComparisonTest
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font>
> Let $f,g$ be nonnegative and continuous on $[a,+\infty)$, and suppose $\lim_{x\to+\infty}\frac{f(x)}{g(x)}=\lambda$. Then:
> 1. If $\lambda>0$, then $\int_a^\infty f(x)\,dx$ and $\int_a^\infty g(x)\,dx$ have the same convergence behavior.
> 2. If $\lambda=0$ and $\int_a^\infty g(x)\,dx$ converges, then $\int_a^\infty f(x)\,dx$ converges.
> 3. If $\lambda=\infty$ and $\int_a^\infty g(x)\,dx$ diverges, then $\int_a^\infty f(x)\,dx$ diverges.
> Common result: $$\int_{a}^{+\infty}\frac{1}{x^{P}}\,dx\begin{cases}\text{converges},&P>1,\\\text{diverges},&P\leq1,\end{cases}\qquad(a>0).$$

### 1.1.3 Example Problems
**Example Question**: Find $\int_{-\infty}^{+\infty}\frac{dx}{1+x^{2}}$
- Solution:
	- $\arctan x\big|_{-\infty}^{+\infty}=\frac{\pi}{2}-(-\frac{\pi}{2})=\pi$;
- Question Type: #ImproperIntegral


## 1.2 Improper integrals of unbounded functions
### 1.2.1 Basic Concepts
##### **Definition**: #ImproperIntegralsOfUnboundedFunctions
> <font color="#ccc1d9">Description:</font>
> 1. If $f(x)$ is unbounded in every right-hand neighborhood of $a$, then $a$ is a singular point and $$\int_a^bf(x)\,dx=\lim_{t\to a^+}\int_t^bf(x)\,dx;$$
> 2. If $b$ is a singular point, then $$\int_{a}^{b}f(x)\,dx=\lim_{t\to b^{-}}\int_{a}^{t}f(x)\,dx;$$
> 3. If $c$ is a singular point with $a<c<b$, then both sides must converge and $$\int_{a}^{b}f(x)\,dx=\int_{a}^{c}f(x)\,dx+\int_{c}^{b}f(x)\,dx.$$

##### **Theorem**: #ComparisonTest
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font>
> Let $f,g$ be continuous on $(a,b]$ and satisfy $0\leq f(x)\leq g(x)$. Then:
> $$\int_{a}^{b}g(x)\,dx\text{ converges }\Rightarrow\int_{a}^{b}f(x)\,dx\text{ converges};$$
> $$\int_{a}^{b}f(x)\,dx\text{ diverges }\Rightarrow\int_{a}^{b}g(x)\,dx\text{ diverges}.$$

##### **Theorem**: #LimitComparisonTest
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font>
> Let $f,g$ be nonnegative and continuous on $(a,b]$, and suppose $\lim_{x\to a^+}\frac{f(x)}{g(x)}=\lambda$. Then
> $$\begin{aligned}&1)\ \lambda>0:\ \int_a^b f(x)\,dx\text{ and }\int_a^b g(x)\,dx\text{ have the same convergence behavior};\\&2)\ \lambda=0:\ \int_a^b g(x)\,dx\text{ convergent}\Rightarrow\int_a^b f(x)\,dx\text{ convergent};\\&3)\ \lambda=+\infty:\ \int_a^b g(x)\,dx\text{ divergent}\Rightarrow\int_a^b f(x)\,dx\text{ divergent}.\end{aligned}$$
> Common result: $$\int_a^b\frac{dx}{(x-a)^P},\quad\int_a^b\frac{dx}{(b-x)^P}\quad\begin{cases}\text{converge},&P<1,\\\text{diverge},&P\geq1.\end{cases}$$


**Concept Introduction**
- Assume the current function is $y=1/x$, then the current requirement is to integrate the function from 0 to 1;
	- At point 0, since the limit is undefined, this point is also called a defect point;
- The imperfect integral of this unbounded function is also called the improper integral;

**The Deceptive Nature of Flawed Points**
- Only looking at the upper and lower limits of the definite integral cannot determine whether the current integral is a flawed integral;
- You need to check the current conditions for the function to see if they are met;

## 1.3 Frequently Tested Question Types

### Question Type: #Convergenceofimproperintegrals
#### PART 1: Problem-solving methods
**Methods for Determining Convergence and Divergence**
- 1. Definition method;
	- Based on the current integrand, find its antiderivative, find its limit on the integrand interval, and see if the limit value converges;
- 2. Comparative discriminant;
	- Comparative law;
	- The limit form of the comparative method;
- 3. P Integral;
	- Note:
		- The infinite impermanent integral converges at `->` $P>1$ and diverges at $P<1$
		- The improper integral of an unbounded function converges at `->` $P<1$ and diverges at $P>1$
- Use whichever is most convenient;

**Note**: When it comes to $\mathrm{e}^{\infty}$, pay attention to dividing it into left and right sections;

#### PART 2: Typical Example Problems
**Example Question**: $\int_{2}^{+\infty}\frac{1}{\sqrt{x}}dx$
- Analysis
	- Method 1: Use definitions
	- Method 2: Use a P-series
- Analysis
	- Method One:
		- $\int_{2}^{+\infty}\frac{1}{\sqrt{x}}dx$ Find the antiderivative -> which is 2√x at 2 times. At this point, directly find its limit;
	- Method Two:
		- Since the radical x is half of the P series, it diverges;
- Question Type: #Convergenceanddivergenceofimproperintegrals

**Example Question**: $\text{ Anomalous integral }\int_{0}^{+\infty}\frac1{x^a(1+x)^b}dx{\text{ To converge means to contract }}$
- Analysis
	- $\int_{0}^{+\infty}\frac{1}{x^{a}(i+x)^{b}}dx=\int_{0}^{1}\frac{1}{x^{a}(i+x)^{b}}dx+\int_{1}^{ts}\frac{1}{x^{a}(i+x)^{b}}dx$
	- Both need to converge;
	- Analysis of the left side:
		- Use the comparative method: $\lim_{x\to0^{+}}\frac{\frac{1}{x^{a}(x+x)^{b}}}{\frac{1}{x^{a}}}=1$
		- Therefore, the convergence and divergence with the P integral `->` $a<1$
	- Analysis of the right side:
		- $\frac1{x^{a+b}(1+\frac1x)^b}$
		- Because it approaches infinity, 1+1/x equals 1, so only $a+b$ is needed
		- Limit form using the comparative method: $\lim_{x\to\infty}\frac{\frac1{x^{a}(x)^{b}}}{\frac1{x^{a+b}}}$ `->` $a+b>1$
- Analysis
- Question Type: #

#### PART 3: Key Points Review

### Question Type: #Calculationofimproperintegrals
#### PART 1: Problem-solving methods
**What is the Calculation of Improper Integrals**
- Definition:
	- Calculate a definite integral + calculate a limit;
- Method:
	- Method 1: Substitution method
	- Method 2: Partial Method

#### PART 2: Typical Example Problems
**Example Question**: $\int_{2}^{+\infty}\frac{\mathrm{d}x}{(x+7)\sqrt{x-2}}=$
- Analysis
	- Solution 1: Substitution method
		- Ling $\sqrt{k-2}=t,\quad x-2=t^{2}$
		- So: $\int_{0}^{+\infty}\frac{2t}{t(t^{2}+9)}dt=2\int_{0}^{+\infty}\frac{dt}{9+t^{2}}$
		- $=\frac{2}{3}\arctan\frac{\pi}{3}|_{0}^{+\infty}=\frac{2}{3}\left[\frac{\pi}{2}-0\right]$
	- Solution Two: Completing the differential
		- Original expression = $\int_{2}^{+\infty}\frac{2d\sqrt{x-2}}{9+(\sqrt{x-2})^{2}}$
		-
- Analysis
- Question Type: #

#### PART 3: Key Points Review
