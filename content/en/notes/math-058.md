---
title: "Lecture 56: Power Series"
slug: math-058
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 56: Power Series. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2024-02-14
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Infinite Series"]
---

**Section Overview**
- (1) Radius of convergence, convergence interval, and convergence domain
- (2) Properties of Power Series
- (3) Power series expansion of functions

**Frequently Tested Question Types in This Section**
- Problem Type 1: Find the radius of convergence, the interval of convergence, and the domain of convergence
- Problem Type 2: Expand a function into a power series
- Question Type 3: Summing Series
	- Difficulties
	- Focus

---
## 50.1 Power Series
### 50.1.1 Basic Concepts
**Sequence**: Each term is only related to n
- Sequence: $u_{1},u_{2},\cdots,u_{n}$
- Infinite series: $u_{1}+u_{2}+\cdots+u_{n}+\cdots$

**Function Sequences**: Each term is related to n and $x$
- Assume x lies on interval $I$;
- Function sequence: $u_{1}(x), u_{2}(x), u_{n}(x),\cdots$
- Infinite series of function terms: $u_{1}(x)+u_{2}(x)+\cdots+u_{n}(x)+\cdots$

#####**Definition**: #Powerseries
> <font color="#ccc1d9"> description: </font>
> Common form: $$\sum_{n=0}^\infty a_nx^n=a_0+a_1x+a_2x^2+\cdots+a_nx^n+\cdots $$
> General form: $$\sum_{n=0}^\infty a_n(x-x_0)^n=a_0+a_1(x-x_0)+\cdots+a_n(x-x_0)^n+\cdots $$

**Explanation**
- Concept:
	- Every term is a positive integer power of x: power series: $a_{0}a_{1},a_{2}x^{2}\cdots a_{n}x^{n}\cdots$
	- Power series are actually the simplest type of function term series; $x^{n}$ is a function of x, $a_n$ is a sequence of numbers;
	- $a_0,a_1,a_2...a_n$ called the coefficient;
- Supplement:
	- General study of common forms, because general forms can be $x-x_0=t$ into common forms;


### 50.1.2 Convergence and Divergence
#####**Definition**: #Convergencepointanddivergencepoint
> <font color="#ccc1d9"> description: </font>
> 1. If $x_{0}\in I$ and $u_{1}(x)+u_{2}(x)+\cdots+u_{n}(x)+\cdots$ converges, $x_o$ is called the convergence point; if it is an interval, it is called the convergence domain;
> 2. If $x_{0}\in I$ and $u_{1}(x)+u_{2}(x)+\cdots+u_{n}(x)+\cdots$ diverges, $x_o$ is called the divergence point; if it is an interval, it is called the divergence domain;
> 3. $S(x)=u_1(x)+u_2(x)+\cdots+u_n(x)+\cdots$ is called the sum function, with $\lim_{n\to\infty}S_n(x)=S(x)$;

**Explanation**
- Generally, the problem is to solve two questions: What is the convergence domain? What is the sum function?

**Examples**
- $1+x+x^{2}+x^{3}+\cdots+x^{n}+\cdots$
- At this point:
	- For $|x|<1$, the interval of convergence is $(-1,1)$ and the sum is $\frac{1}{1-x}$;
	- For $|x|\geq1$, the series diverges, so the divergence set is $(-\infty,-1]\cup[1,+\infty)$;

##### **Theorem**: #AbelsTheorem
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font>
> For the power series $\sum_{n=0}^{+\infty}a_nx^n$:
> - If it converges at $x=x_0$, then it converges absolutely for every $|x|<|x_0|$;
> - If it diverges at $x=x_0$, then it diverges for every $|x|>|x_0|$;

**Explanation**
- Function of the theorem:
	- The theorem shows that convergence is organized around the origin and reduces the problem to finding the radius of convergence $R$;
- Absolute Convergence:
	- At $|x|<|x_0|$, all points in this interval also converge `->` and points closer to the origin converge;
- Divergence:
	- At $|x|>|x_0|$, points outside this interval also converge `->` diverging to points farther from the origin;
- Summary:
	- 1. The boundary point between the convergence point and the divergence point `->` is the**radius of convergence R**
	- 2. Two series $\sum_{n=0}^{+\infty}a_n{(x+2)}$ and $\sum_{n=0}^{+\infty}a_n{(x-3)}$, if their $a_n$ are the same, then they share a common radius of convergence `R`;
- Note:
	- Convergence intervals do not require endpoint attention;
	- The convergence domain needs to focus on endpoints;

**Supplement**: Convergence intervals and convergence domains
- Convergence interval:
	- $(-R,+R)$
- Convergence domain:
	- Including endpoints: $\pm R$
	- After determining the values of the two endpoints separately, the interval is obtained;

**Supplement**: Regarding the convergence domain when $x$ is not equal to $x_0$
- Premise:
	- According to `<Summary-1>`, $\sum_{n=0}^{+\infty}a_n(x+2)^n$ and $\sum_{n=0}^{+\infty}a_n(x-3)^n$ have the same radius of convergence $R$.
- Concept:
	- Convergence interval:
		- For $\sum_{n=0}^{+\infty}a_n(x+2)^n$, the center is $x_0=-2$. If the radius is $R=2$, the open interval of convergence is:
		- $$\text{Interval of convergence}:\ (x_0-R,x_0+R)=(-2-2,-2+2)=(-4,0).$$
	- Endpoint Convergence Invariance:
		- Because the two series have the same coefficients $a_n$, corresponding endpoints have the same convergence behavior after translation.

#####**Theorem**: #Theconvergenceofpowerseries
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> The power series $\sum_{n=0}^{+\infty}a_nx^n$ has exactly one of three convergence behaviors:
> (1) Convergence for any x belonging to $(-\infty ,+\infty)$;
> (2) Converges only at $x=0$;
> (3) There exists a positive number `R` When $|x| < R$ is absolute convergence, when $|x|>R$ diverges;
> Note: If the power series $\sum_{n=0}^{+\infty}a_nx$ converges conditionally at point $x=x_0$, then point $x_0$ must be an endpoint of the convergence interval $(-R,R)$ of that power series;

### 50.1.3 Radius of Convergence R
#####**Theorem**: #Determiningtheradiusofconvergence
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\text{ If }\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_{n}}\right|=\rho,\,\text{ then } R = \frac{1}{{\rho}}$$
> That is: there are three situations at this time: $$R=\begin{cases}\frac{1}{\rho},&\rho\neq0\\+\infty,&\rho=0\\0,&\rho=+\infty\end{cases}$$

**Explanation**
- Note:
- 1. This theorem can only be applied in one direction;
- 2. The convergence interval is endpoint-independent, i.e., $(-R,R)$


#####**Theorem**: #Determiningtheradiusofconvergence: Based on radicals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\text{ If }\lim_{n\to\infty}\sqrt[n]{|a_n|}=\rho,\text{ then }\quad R=\frac1\rho $$

**Explanation**
- derived based on root test;

## 50.2 Operations on Power Series
### 50.2.1 Properties of Power Series Operations
**Properties**: Properties of rational operations
- Premise:
	- Set
	- 1. The radius of convergence of $\sum_n^{\infty}a_nx^n$ is $R_1$
	- 2. The radius of convergence of $\sum_n^{\infty}b_nx^n$ is $R_2$
	- Let $R=\min\{R_1,R_2\}$, then when $x\in(-R,R)$:
- Operation Properties:
	- (1) Addition: $$\sum_{n=0}^\infty a_nx^n\pm\sum_{n=0}^\infty b_nx^n=\sum_{n=0}^\infty(a_n\pm b_n)x^n$$
	- (2) Multiplication: $$(\sum_{n=0}^\infty a_nx^n)\cdot(\sum_{n=0}^\infty b_nx^n)=\sum_{n=0}^\infty c_nx^n$$
		- The coefficients satisfy $c_n=a_0b_n+a_1b_{n-1}+\cdots+a_nb_0$.
	- (3) Division: $$\frac{\sum_{n=0}^\infty a_nx^n}{\sum_{n=0}^\infty b_nx^n}=\sum_{n=0}^\infty c_nx^n$$

### 50.2.2 Analytical Properties of Power Series
**Properties**: Derivative by term
- Premise:
	- If the radius of convergence of $\sum_{n=0}^{+\infty}a_{n}x^{n}$ is `R` and the sum is $S(x)$, then:
- Analytical Nature:
	- (1) Continuity:
		- $S(x)$ $I$ is continuous on its convergence domain;
	- (2) differentiability:
		- $S(x)$ is differentiable on $(-R,R)$ and can be differentiated term by term, with the radius unchanged, that is:
			- $$S^{\prime}(x)=\left(\sum_{n=0}^\infty a_nx^n\right)^{\prime}=\sum_{n=0}^\infty(a_nx^n)^{\prime}=\sum_{n=0}^\infty na_nx^{n-1}$$
		- Note: Term-by-term differentiation leaves the radius of convergence equal to $R$ and introduces a factor of $n$ in each term.
	- (3) Integrability:
		- If the sum function $S(x)$ of $\sum_{n=0}^{\pm\infty}a_{n}x^{n}$ is integrable on $I$ and can be integrated by term:
			- $$\int_{0}^{x}S(x)\operatorname{d}x=\int_{0}^{x}\sum_{n=0}^{\infty}a_{n}x^{n}\operatorname{d}x=\sum_{n=0}^{\infty}\int_{0}^{x}a_{n}x^{n}\operatorname{d}x=\sum_{n=0}^{\infty}\frac{1}{n+1}a_{n}x^{n+1}$$
		- Note: The power series after integrating each term has the same radius of convergence as the original power series;


## 50.3 Frequently Tested Question Types
---
### Question Type: #Findtheradiusofconvergence. Convergence interval, convergence domain
#### PART 1: Problem-solving methods
**Problem Type**: Find the radius of convergence
- Two methods:
	- Method 1: Use the radius of convergence determination method
	- Method 2: Use radius of convergence root test
- Note: When items are missing
	- Missing item: $x^{2n-1}$, not $x^n$
	- When missing terms, you cannot directly use the formula. If it is $x^{2n+b}$, then the `R` calculated by the root-value method must be taken to the $\frac{1}{2}$ power;

**Problem Type**: Find the convergence interval
- Method:
	- To find the convergence interval, first find the radius of convergence;

**Question Type**: Find the convergence of endpoints
- Method:
	- Substituting the $x=\pm x_0$ of the endpoints respectively, we get the functional expression about n, that is: the general term of the current series. At this time, the solution method is consistent with the series of constants. According to it being a positive term, alternating series, arbitrary term series, selection method, judgment;

**Question Type**: Judge the convergence of any point
- Method:
	- First, find the radius of convergence of the current power series (often using Abel's theorem), then, based on the convergence interval, determine whether any point lies within the interval to obtain convergence;

#### PART 2: Typical Example Problems
**Example Question**: Find $\sum_{n=1}^\infty\frac{e^n-(-1)^n}{n^2}x^n$

#### PART 3: Key Points Review
**Key Point**: When there is n next to the $a_n$ of the power series $\sum_{n=0}^\infty na_nx^n$
- Key point: According to the property that the radius of convergence remains unchanged after taking the derivative of a power series with**terms by term, R for $\sum_{n=0}^\infty na_nx^n$ and $\sum_{n=0}^\infty a_nx^n$ remains unchanged;
