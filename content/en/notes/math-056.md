---
title: "Lecture 48: Series of Positive Terms"
slug: math-056
description: "Graduate Entrance Examination Mathematics study notes: Lecture 48: Series of Positive Terms. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-13
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Infinite Series"]
---

## 48.1 positive-term series
### 48.1.1 Definition of positive-term series
#####**Theorem**: # convergence of a positive-term series
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> positive term $\sum u_n$ The necessary and sufficient condition for convergence is that ${S_n}$ is bounded;
> That is: $\sum_{n=1}^\infty u_n$ converges $\Leftrightarrow S_n$ is bounded on

**Concept of positive-term series**
- Each item of $u_n$ is greater than 0;
- And because each term of the positive-term series is positive, the sequence of partial sums is increasing:
	- $S_{1}\leq S_{2}\leq S_{3}\cdots$ `->` $\{S_{n}\}\geq0$

**Explanation**
- But this theorem is almost useless -> because it is difficult to tell whether $S_n$ is bounded;


### 48.1.2 Method selection
**Method**
- Method classification:
	- 1. comparison test
	- 2. limit comparison test
	- 3.ratio test
	-4. root test
	- 5. integral test
- Method selection:
	- Category 1: Method `1, 2`
		- Need to compare the current general term with other known general terms;
		- Advantages:
			- Wider scope of application;
			- As long as methods 3 and 4 can make a judgment, methods 1 and 2 can definitely make a judgment, but it may be more inconvenient to do;
		- Disadvantages:
			- Inconvenient to use;
	- Category 2: Method `3, 4`
		- Concept:
			- Just judge for yourself;
		- Advantages:
			- It is easy to use, no other series is needed, you can judge by yourself;
		- Disadvantages:
			- Sometimes, it is obvious that a series is divergent, but it is difficult to prove using these methods;
			- ie: Narrow scope of application;
- Problem solving steps:
	- 1. First observe whether the convergence or divergence pattern of `->` can be seen directly;
	- 2. When judging the method, first consider the method `3, 4`;
	- 3. If you cannot make a decision, consider `1, 2`;
- Rules:
	- Big Three: $$a^n\quad n!\quad n^n$$
	- If at least one of the three giants is present, the method `3, 4` is usually used;
	- If none of the Big Three appears, the form of $n^p$ or $\ln n$ often appears. In this case, use the method `1, 2`;

## 48.2 comparison test
### 48.2.1 comparison test definition
**START WITH QUESTION**
- 1. How to scale inequalities? Should `->` scale or shrink?
- 2. Who to compare with?
- Idea:
	- Improved comparison test using limit;

#####**Theorem**: # comparison test
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> if $\sum U_n$ and $\sum V_n$ are both positive-term series, and $u_n<v_n$:
> $\sum_{n=1}^\infty v_n$ convergence $\Rightarrow\sum_{n=1}^\infty u_n$ convergence
> $\sum_{n=1}^\infty u_n$ diverge $\Rightarrow\sum_{n=1}^\infty v_n$ diverge

**Explanation**
- Summary:
	- Large ones converge, small ones definitely converge;
	- Small divergence, large divergence for sure;
	- Neither the other way around;
- How to use:
	- Make a preliminary judgment before use;
	- If it is initially judged to be convergent, then amplify;
	- If it is initially judged to be divergent, it will be reduced;
- Prerequisites for use:
	- Both series are**positive-term series**;

**Supplement**
- If $0<L<+\infty$, then $\sum u_n$ and $\sum v_n$ converge;
- If $L=0$, then $u_n$ is higher order than $v_n$:
	- $\sum v_n$ convergence can be derived from $\sum u_n$ convergence;
	- When $\sum v_n$ diverges, $\sum u_n$ cannot be judged based on this;
- If $L=+\infty$, then $u_n$ is lower order than $v_n$:
	- $\sum v_n$ divergence can be derived from $\sum u_n$ divergence;
	- When $\sum v_n$ converges, $\sum u_n$ cannot be judged based on this;
- Therefore, it is still necessary to select the appropriate comparison series $\sum v_n$, and then determine the convergence or divergence of the target series;

**Compare with whom**
- Core Question:
	- How to find the series used to assist judgment `->` two commonly used series;


### 48.2.2 limit comparison test
#####**Theorem**: # limit comparison test
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> set $$\lim_{n\to\infty}\frac{u_n}{v_n}=l\left(0\leq l\leq+\infty\right)$$
> if:
> 1. If $0<l<\infty$, then $\sum_{n=1}^{\infty}u_n$ and $\sum_{n=1}^{\infty}v_n$ have the same convergence behavior.
> 2. If $l=0$, then convergence of $\sum_{n=1}^{\infty}v_n$ implies convergence of $\sum_{n=1}^{\infty}u_n$; equivalently, divergence of $\sum u_n$ implies divergence of $\sum v_n$.
> 3. If $l=\infty$, then divergence of $\sum_{n=1}^{\infty}v_n$ implies divergence of $\sum_{n=1}^{\infty}u_n$; equivalently, convergence of $\sum u_n$ implies convergence of $\sum v_n$.

**Explanation**
- Concept: Transform the problem of the ratio of two general terms into the problem of finding the limit of the ratio of two general terms;

### 48.2.3 Two commonly used series
**Commonly used series 1**: P series
- Formula:
	- The $p$-series $\sum_{n=1}^{\infty}\frac1{n^p}$ converges for $p>1$ and diverges for $p\leq1$.
- NOTE:
	- `P=1` `->` Harmonic series: $\sum\frac{1}{n}\quad$ must diverge
	- Why is it divergent when P=1?
- Essence:
	- The nature of convergence: What determines whether a series converges is not whether the summation term is infinite, or even the size of the summation, but the speed at which the general term in the summation term tends to 0;
	- Speed comparison cannot determine whether a series diverges or converges, but speed changes will bring about essential changes.

**Commonly used series 2**: geometric series
- Formula:
	- The geometric series $\sum_{n=1}^{\infty}aq^n$ with $a>0$ and $q>0$ converges for $q<1$ and diverges for $q\geq1$.
- Concept:
	- Whether a geometric series converges or not depends only on the value of its `q`, that is, the common ratio determines its convergence or divergence;
	- That is, for geometric series, if the common ratio $\frac{u_{u+1}}{u_n}=q$ exists, it has the above limit;

**Supplement**: Convergence of harmonic series
- $$\sum_{n=1}^{\infty}\frac{1}{n}=1+\frac{1}{2}+\frac{1}{3}+\cdots+\underbrace{\frac{1}{n}+\frac{1}{n+1}+\cdots+\frac{1}{2n-1}}+\cdots$$
- $\frac{1}{n}+\frac{1}{n+1}+\cdots+\frac{1}{2n-1}>\underbrace{\frac1{2n}+\frac1{2n}+\cdots+\frac1{2n}}_{n$ items $=\frac n{2n}=\frac12$
- The partial sum of the harmonic series can be used to create a constant that has nothing to do with `n`. Having nothing to do with `n` means that infinity has lost its meaning to it, so it diverges;

## 48.3 ratio test
### 48.3.1 ratio test
#####**Theorem**: # ratio test
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> If $\sum U_n$ is a positive-term series, then if $$\lim_{n\to\infty}\frac{u_{n+1}}{u_{n}}=\rho$$
> if $\rho <1$, then $\sum U_n$ converges;
> IF $\rho >1$, then $\sum U_n$ diverges;
> If $\rho =1$, then $\sum U_n$ cannot be determined, please use other methods;

**Advantages and Disadvantages**
- Advantages: Compare yourself with yourself, no need to find other functions;
- Disadvantage: If $\rho =1$, the method fails;

### 48.3.2 root test
#####**Theorem**: # root test
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> If $\lim_{n\to\infty}\sqrt[n]{u_n}=\rho$, then $\sum_{n=1}^\infty u_n \begin{cases}\text{convergent}, &\rho<1, \\\\\text{divergent}, &\rho>1, \\\\\text{inconclusive}, &\rho=1, \end{cases}$

**Explanation**

## 48.4 integral test
#####**Theorem**: # integral test
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $f$ is nonnegative, continuous, and decreasing on $[1,\infty)$, and $a_n=f(n)$, then $\sum_{n=1}^{\infty}a_n$ and $\int_1^\infty f(x)\,dx$ have the same convergence behavior.

**Explanation**
- rarely used because there are many conditions;

**Example**: Prove that the series $\sum_{i=1}^\infty\frac1{n^p}$ converges when $p>1$ and diverges when $p\leq1$.
- Analysis
	- Set $a_{n}=\frac{1}{n^{p}}=f(u), f(x)=\frac{1}{x^{p}}$
	- So get points: $\int_{1}^{+\infty}\frac{dx}{x^{p}}$


## 48.5 Example questions
**Example**: $\sum\frac{1}{\sqrt{n(n+1)}}$ Find its divergence property
- Analysis
- Analysis
	- BECAUSE $:  n(n+1)<(n+1)^{2}$;
	- SO: $\frac{1}{\sqrt{n(n+1)}}>\frac{1}{\sqrt{(n+1)^{2}}}=\frac{1}{n+1}$
- problem type: # positive-term series

**Example**: Find the convergence or divergence of $\sum_{n=1}^{\infty}\sin\frac{1}{n}$
- Analysis
	- First of all: sin 1/n must be a positive number;
- Analysis
	- Because $\lim_{n\to\infty}\frac{\sin{\frac{1}{n}}}{\frac{1}{n}}=1$, its limit is of type 0/0, the final result is 1;
	- so 1>0, so $\sin{\frac{1}{n}}$ and $\frac{1}{n}$ are of the same order;
	- Because $\sin\frac{1}{n}\sim\frac{1}{n}$, and $\sum\frac{1}{n}$ diverge, so $\sum\sin\frac{1}{n}$ diverges.
- problem type: # comparison test

**Example**: $1+\frac{1}{1}+\frac{1}{2!}+\frac{1}{3!}+\cdots+\frac{1}{(n-1)!}+\cdots$, prove that it is convergent;
- Analysis
- Proof
	- it converges because of $\lim_{n\to\infty}\frac{u_{n+1}}{u_{n}}=\lim_{n\to\infty}\frac{\frac{1}{n^{1}}}{\frac{1}{\left(n-n\right)!}}=\lim_{n\to\infty}\frac{1}{n}=0<1$;
	-
- problem type: # ratio test
