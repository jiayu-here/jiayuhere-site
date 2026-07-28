---
title: "Lecture 53: Series of Constants"
slug: math-055
description: "Graduate Entrance Examination Mathematics study notes: Lecture 53: Series of Constants. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-12
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Infinite Series"]
---

**Chapter Content**
- Section 1: Series of Constant Terms
- Section 2: Power series
- Section 3: Fourier series

**Section Overview**
- (1) The concept and properties of series
- (2) Convergence criterion for series

**Common Question Types and Typical Examples**
- Determining the convergence and divergence of series of constant terms
---
## 47.1 Basic Concepts of Series with Constant Terms
### 47.1.1 Basic Concepts
#####**Definition**: #Constanttermseries
> <font color="#ccc1d9"> description: </font> $$\sum_{n=1}^\infty u_n=u_1+u_2+\cdots+u_n+\cdots $$

**Explanation**
- Concept:
	- series of constants indicates infinite terms, each of which is constant;
	- Because it is an infinite term, a series of constant terms is a series of constant terms with**constants with infinite terms;
	- Indicated by $u_{1}, u_{2},\cdots u_{n},\cdots$, $u_{n}$ by general terms;
	- The sum of infinite terms is obtained by taking the limit of the sum of finite terms (partial sum);
- Sum of Sums:
	- $\sum_{i=1}^{\infty}u_{i}=u_{1}+u_{2}+\cdots+u_{n}$；
- Partial and Harmonious
	- Represents the sum of the first n terms;
	- $S_{n}=u_{1}+u_{2}+\cdots+u_{n}$；

#####**Definition**: #Convergenceofseriesofconstantterms
> <font color="#ccc1d9"> description: </font> $u_{1}, u_{2},\cdots u_{n},\cdots$ represents the constant term, $S_{n}=u_{1}+u_{2}+\cdots+u_{n}$ represents the sum of the first `n` terms;
> If:
>  $$\lim_{n\to+\infty}S_{n}=\sum_{n=1}^\infty u_n$$
> then the current constant sequence is convergent; if there is no limit, it is divergent;

**Explanation**
- Two questions:
	- Whether the convergence and divergence `->` limit exists `<-` is a more central issue;
	- Value of the series `->` value of the limit;

**Geometric Sequence Analysis**: $a+aq+aq^{2}+aq^{3}+\cdots+aq^{n-1}...$, a geometric sequence, where a is not equal to 0, find its convergence property;
- When q is not equal to 1, $S_{n}=\frac{a(1-q^{n})}{1-q}$
	- When q is less than 1, its limit is 0 - > convergence;
	- When q is greater than 1, its limit does not exist at -> divergence;
- If q equals 1
	- If `q=1`, then $a+a+a+\cdots$, infinite A sums up to be infinite, so it diverges;
	- If `q=-1`, then $a-a+a-a+a-a+\cdots$
		- Odd term `->` limit is a;
		- Even term `->` limit 0;
		- So there is no limit `->` divergence;

### 47.1.2 Properties of Series
**Basic Properties**
- Property 1: If $\sum_{n=1}^{\infty}u_n=S$, then $\sum_{n=1}^{\infty}k u_n=kS$.
- Property 2:
	- If $\sum_{n=1}^{\infty}H_n=h$ and $\sum_{n=1}^{\infty}U_n=u$, then $\sum_{n=1}^{\infty}(H_n\pm U_n)=h\pm u$.
	- Two series of convergence that still converge after addition or subtraction;
	- Two divergent series, whose convergence is uncertain after addition or subtraction;
	- Two series that converge after addition or subtraction may not be convergent in their original series;
	- For example:
		- $1+1+1+1...$ and $-1-1-1-1-1...$
		- After adding: $(1-1)+(1-1)+(1-1)....$
- Nature 3:
	- Remove or add**finite terms**to the series; the convergence and divergence remain unchanged, but the value may change;
- Property 4:
	- $$\sum u_n\text{ Convergence, any series after adding parentheses also converges, and the sum remains unchanged }$$
	- For example:
		- $u_{1}+u_{2}+u_{3}+u_{2}+u_{5}+u_{8}+u_{7}+u_{8}+......$
		- $S_{1},S_{2},S_{3},S_{4},S_{5},S_{6},S_{7},S_{8}......$
		- Then add parentheses: $(u_{1}+u_{2})+u_{3}+(u_{4}+u_{3})+(u_{6}+u_{7}+u_{8})+\cdots$
		- The parentheses are merged to form $v_{1}+v_{2}+v_{3}+v_{4}+\cdots$
	- Note:
		- 1.**After adding parentheses, convergence, the original series may not converge**;
		- 2. If the parentheses diverge after the extension, the original series must diverge;
- Property 5: A necessary condition for series convergence
	- $$\sum_{n=1}^\infty u_n\text{ Convergence }\longrightarrow\lim_{n\to\infty}u_n=0$$
	- Note:
		- $u_n$ Approaches zero, and the series may not converge, so it is a necessary condition rather than a necessary condition;
		- For example, the harmonic series diverges: $1+\frac{1}{2}+\frac{1}{3}+\cdots+\frac{1}{n}+\cdots$;

## 47.2 Series Classification
**Category**
- Constant-sign series
	- Positive-term series `->` [Lecture 48: Positive-term Series and Their Convergence Tests](/en/notes/math-056/)
	- Negative-term series: the negative of a positive-term series;
- Sign-changing series:
	- A special case: alternating series `->` [Lecture 49: Alternating Series and General Series](/en/notes/math-057/)
	- The general case: series of arbitrary terms `->` [Lecture 49: Alternating Series and General Series](/en/notes/math-057/)


---
### Question Type: #ConvergenceAndDivergenceOfConstantTermSeries
#### PART 1: Problem-solving methods
**Problem-Solving Steps**
- Step 1: Determine the type of series
	- Positive, interleaved, arbitrary terms
- Step 2: Choose the method based on the number of levels
	- Series of positive terms `->` Five types of criteria for convergence and dispersion are used for judgment;
	- alternating series `->` a method;
	- Any term series `->` one method;
- Step 3: If a determination cannot be made, you can use definitions and properties to make a judgment
	- Definitions and properties apply to all types of series;

**Problem-Solving Methods**
- Exams usually include multiple-choice questions, so it's better to use direct methods: find the correct option and prove it's correct, rather than using elimination and finding counterexamples one by one to prove other options are wrong;
- How to find: For the current option, if it's wrong, go straight to the next one; If you're unsure about the correct or false option, go to the next option first—the correct one might be right at the back;

**Common Conclusions**
- $$\sum_{n=1}^{+\infty}|b_{n|}\text{ Convergence }\rightarrow \sum_{n=1}^{+\infty}(b_{n})^{2}\text{ Convergence }$$

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review
