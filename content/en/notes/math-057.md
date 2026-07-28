---
title: "Lecture 55: Alternating Series"
slug: math-057
description: "Graduate Entrance Examination Mathematics study notes: Lecture 55: Alternating Series. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-14
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Infinite Series"]
---

## 49.1 alternating series
### 49.1.1 Concept of alternating series
#####**Definition**: #Alternatingseries
> <font color="#ccc1d9"> description: </font> $$\sum_{n=1}^\infty(-1)^{n-1}u_n,u_n>0$$

**Explanation**
- Series with alternating positive and negative occurrences:
	- 1. $u_{1}-u_{2}+u_{3}-u_{4}+u_{5}-u_{6}+\cdots$；
	- 2. $-u_{1}+u_{2}-u_{3}+u_{4}-u_{5}+u_{6}\cdots$；
	- This series is called an alternating series;
- And $u_n >=0$

**Note**
- If the number of terms is infinite,**parentheses cannot be arbitrarily added, and**order cannot be arbitrarily changed**;
- For example:
	- $1-1+1-1+1-1+1-1+1-1+1-1+1......$
	- If it is an odd term ->, the result is 1;
	- If the even term -> is 0;
- If you add parentheses
	- $(1-1)+(1-1)+(1-1)+(1-1)+......$
	- Adding parentheses to the infinite term like this may cause problems because it is unclear whether it is an odd or even term;

### 49.1.2 Methods for Determining alternating series
#####**Theorem**: #Leibnizprinciple
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> currently has an alternating series $\sum_{n=1}^{+\infty}\left(-1\right)^{n-1}u_{n}$, when:
> 1) $u_{n}\geq u_{n+1}$: Monotonous subtraction
> 2）$\lim_{n\to\infty}u_{n}=0$
> then $\sum_{n=1}^{+\infty}\left(-1\right)^{n-1}u_{n}$ series converges, `S` `<=` $u_1$, and $|r_{n}|\leq u_{n+1}$

**Explanation**
- Note:
	- Requirements:
		- 1) $u_{n}\geq u_{n+1}$: Monotonous subtraction
		- 2）$\lim_{n\to\infty}u_{n}=0$
	- These two requirements are**sufficient conditions**for the convergence of an alternate series, meaning if either of these does not hold, the convergence of an alternate series is also possible;
- Premise:
	- Before using Leibniz's theorem, it must be ensured that the current is an alternating series;
	- The latter is smaller than the former;
	- And $u_n$ approaches zero;

**Example**: The Leibniz criterion is a sufficient condition
- $$\sum_{n=1}^\infty\frac{(-1)^{n-1}}{2^{n+(-1)^n}}\text{ Convergence, but }u_n=\frac1{2^{n+(-1)^n}}\text{ and did not decrease in number }.$$

## 49.2 Arbitrary Term Series
### 49.2.1 Concept of Arbitrary Term Series
**Concept of Arbitrary Term Series**
- Features:
	- There are positive terms and negative terms;
	- And both positive and negative terms must be infinite;
- Any term: $u_{1}+u_{2}+u_{3}+u_{4}+\cdots$, and the positive or negative of $u_n$ is unknown;
- Positive term series: $|u_{1}|+|u_{2}|+|u_{3}|+|u_{4}|+\cdots$, each term takes an absolute value;
	- This is an absolute series;

### 49.2.2 Method for Determining Arbitrary Term Series
**Principle**: Convert new problems into old problems `->` Convert a variant series into a positive term series `->` Add an absolute value to the general term `->` When this new positive term series converges, any term series also converges;

#####**Definition**: #Absoluteconvergenceandconditionalconvergence
> <font color="#ccc1d9"> description: </font>
> 1. Absolute convergence: If the absolute value of $\sum|u_{n}|$ converges, it is called $\sum u_n$ convergence;
> 2. Conditional convergence: If $u_n$ is convergent and $\sum|u_{n}|$ divergent, then $\sum u_n$ is called conditionally convergent;
> Details:
> (1) If $\sum^{\infty}_{n=1}=|a_n|$ converges, then $\sum^{\infty}_{n=1}=a_n$ must converge; in this case, $\sum^{\infty}_{n=1}a_n$ is called absolute convergence
> (2) If $\sum^{\infty}_{n=1}=a_n$ converges and $\sum^{\infty}_{n=1}=|a_n|$ diverges, then it is called conditional convergence $\sum^{\infty}_{n=1}a_n$

**Explanation**
- Absolute convergence
	- $\sum|u_{n}|$ Convergence
	- $\sum u_n$ Convergence
- Conditional convergence
	- $\sum|u_{n}|$ divergence
	- $\sum u_n$ Convergence

**Examples**
- $\sum(-1)^{n-1}\frac{1}{n}$: Interleaved adjustment series -> convergent;
- $\sum(-1)^{n}\frac{1}{n^{3}}$: It is absolutely convergent;

**Key Conclusions**
- 1. A series of absolute convergence must converge `->` that is: $\sum^{\infty}_{n=1}|a_n|$ converges `->` $\sum^{\infty}_{n=1}a_n$ converges;
- 2. A series formed by all positive (or negative) terms of conditionally convergent series must diverge `->` $$\sum_{n=1}^\infty u_n\text{ Conditional convergence }\Rightarrow\sum_{n=1}^\infty\frac{u_n+|u_n|}2\text{ and }\sum_{n=1}^\infty\frac{u_n-|u_n|}2\text{ Diverges }.$$

#####**Theorem**: #Absoluteconvergenceofanytermseries
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if each term is summed with absolute value $\sum_{n=1}^{+\infty}|u_{n}|$, it converges, then its original series $\sum_{n=1}^{+\infty}u_{n}$ is also convergent;

**Explanation**
- Simpler understanding:
	- If all numbers are positive (plus absolute value), it should converge even more;

#####**Theorem**: #Judgmentfordivergenceandconvergenceofanytermseries
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if $\sum_{n=1}^{+\infty}u_{n}=u_{1}+u_{2}+u_{3}+\cdots$ is an arbitrary series and $\lim_{n\to+\infty}\left|\frac{u_{n+1}}{u_{n}}\right|=l$
> 1) When $l$ < 1, $\sum u_n$ converges absolutely;
> 2) When $L>1(+\infty)$, $\sum u_n$ diverges;
> 3) When L = 1, it cannot be determined;

**Explanation**
- If L>1, then the original series is divergent;
