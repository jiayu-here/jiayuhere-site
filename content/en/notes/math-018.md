---
title: "Lecture 10: Finding Limits"
slug: math-018
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 10: Finding Limits. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-03-04
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 10.1 Common Methods for Finding Limits
**Common Methods: Eight Types**
### 10.1.1 Method 1: Use the basic limit to find the limit
**Common Basic Limits**
- $\lim_{x\to0}\frac{\sin x}x=1;$

**Power Exponents and Square Roots**
- $\lim_{x\to0}(1+x)^{\frac1x}=e;$
	- is of type $1^\infty$, and the power base inside the parentheses is greater than 0;
	- $\lim_{x\to0}(1+\frac{1}{x})^{x}$ does not exist, because when x approaches 0, it can also tend toward 0 negative;
- $\lim_{x\to0^+}(1+\frac{1}{x})^{x}=1$
- $\lim_{x\to\infty}(1+\frac1x)^x=e;$
	- is of type $1^\infty$, and the base of the parentheses is greater than 0
	- $\lim_{x\to\infty}(1+x)^{\frac{1}{x}}$
- $\lim_{x\to+\infty}(1+x)^{\frac{1}{x}}=1$
- $\lim_{x\to0}\frac{a^x-1}x=\ln a;$
- $\lim_{n\to\infty}\sqrt[n]{n}=1.$
	- Note that here it is n, so it tends toward positive infinity;
- $\lim_{n\to\infty}\sqrt[n]{a}=1,(a>0).$
	- Note that here it is n, so it tends toward positive infinity;

**Piecewise Functions**
- $\left.\lim_{{x\to\infty}}\frac{a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0}{{b}_mx^m+b_{m-1}x^{m-1}+\cdots+b_1x+b_0}=\left|\begin{array}{ll}\frac{a_n}{b_m},&n=m,\\0,&n<m,\\\infty,&n>m.\end{array}\right.\right.$
	- With so many numerator and denominator, the result mainly depends on the largest number (highest degree);
	- Note that x tends toward infinity.
	- When x approaches 0, the value of the function should depend on the smallest number (minimum degree);
- $\lim_{{n\to\infty}}x^n=\begin{cases}0,&|x|<1,\\1,&x=1,\\+\infty,&x>1,\\\text{does not exist},&x\leq-1.\end{cases}$
- $\lim_{n\to\infty}e^{{nx}}=\begin{cases}0,&x<0,\\+\infty,&x>0\\1,&x=0.&\end{cases}$

**1 to the power of infinity**
- For $1^{\infty}$, its result is infinitive, which does not necessarily equal 1;
- $\text{ If }\lim\alpha(x)=0,\lim\beta(x)=\infty,\text{ and }\lim\alpha(x)\beta(x)=A.\text{ then }\lim(1+\alpha(x))^{\beta(x)}=e^A$
	- That is, the core is at $\lim\alpha(x)\beta(x)=A$, check if it holds;
- The method trilogy
	- 1. Written in standard form: $\text{ Original form }=\mathbf{lim}[1+\alpha(x)]^{\beta(x)}$;
	- 2. Find the limit: $\lim\alpha(x)\beta(x)=A;$
	- 3. Write the result: $\text{ Original form }=e^A.$
- Example problem
	- Title: $\lim_{x\to\infty}\left(\frac{x^2}{(x-a)(x+b)}\right)^x$
	- $\lim_{x\to\infty}\left(\frac{x^2}{(x-a)(x+b)}\right)^x=\lim_{x\to\infty}\left(\frac{x_.}{x-a}\right)^x\left(\frac x{x+b}\right)^x=e^a\cdot e^{-b}=e^{a-b}$

#### Problem Type: Problem-solving technique - arbitrary constants
##### PART 1: Questions
- When a multiple-choice question contains**parameters that can take any value**, consider giving the constant a special specific value. Substituting it can eliminate certain expressions without changing the original meaning;
##### PART 2: Typical Example Problems
- In $\lim_{x\to\infty}\left(\frac{x^2}{(x-a)(x+b)}\right)^x$, a can be set to 0;

### 10.1.2 Method 2: Use equivalent infinitesimal substitution to find limits
**Principle of Equivalent Substitution**
- 1. Multiplication and division relationships can be swapped
	- $\text{ If }\alpha\sim\alpha_1,\beta\sim\beta_1,\text{ then }\lim\frac\alpha\beta=\lim\frac{\alpha_1}\beta=\mathbf{lim}\frac\alpha{\beta_1}=\mathbf{lim}\frac{\alpha_1}{\beta_1}$
- 2. Addition and subtraction relationships can be swapped under**certain conditions**
	- Subtraction
		- $\text{ If }\alpha{\sim}\alpha_1,\beta{\sim}\beta_1,\text{ and }\lim\frac{\alpha_1}{\beta_1}=A\neq1.\text{ then }\alpha{-}\beta{\sim}\alpha_1{-}\beta_1$
		- Conditions for subtractive exchange:**The two subtraction terms are not equal**, A is not equal to 1;
		- For example: $sin2x - tanx$ ~ $2x - x$
	- Addition
		- $\text{ If }\alpha{\sim}\alpha_1,\beta{\sim}\beta_1,\text{ and }\lim\frac{\alpha_1}{\beta_1}=A\neq-1.\text{ then }\alpha{-}\beta{\sim}\alpha_1{+}\beta_1$
		- Subtractive substitution condition: Two additive terms are not equal, A is not equal to -1;

**Common Equivalent Infinitesimals**
- When x approaches 0;
- ${(1+x)^\alpha-1}\sim{\alpha x}$
- $e^{x}-1\sim x$
	- Power refers to the substitution of a function;
- $x\sim\sin x\sim\tan x\sim\arcsin x\sim\arctan x\sim\ln(1+x)\thicksim e^x-1;$
	- Note: For this function, you need to ensure that x tends toward 0 when using it;
	- Variant: $\ln q(x)\sim q(x)-1,q(x)\to1$
- $a^x-1\sim x\ln a,\quad{(1+x)^\alpha-1\sim\alpha x},\quad1-\cos x\sim\frac12x^2$

**Advanced Equivalent Infinitesimal**
- $x-\sin x\sim\frac16x^3$，$\tan x-x\sim\frac13x^3$
- $\arcsin x-x\sim\frac16x^3\quad x-\arctan x\sim\frac13x^3$
- $x-\ln(1+x)\sim\frac12x^2$

### 10.1.3 Method 3: Use rational algorithms to calculate limits
**What is the Rational Operation Rule**
- The addition, subtraction, multiplication, and division of limits can be calculated separately, provided**the limit of each split part must exist**;
$$
\begin{aligned}
\text{If }{\lim f(x)=A}, \quad\mathrm{lim~g(x)=B}, \text{ Then}:
&\lim(f(x)\pm g(x))=\lim f(x)\pm\lim g(x) \\
&\lim(f(x)\cdot g(x))=\lim f(x)\cdot\lim g(x) \\
&\lim\left(\frac{f(x)}{g(x)}\right)=\frac{\lim f(x)}{\lim g(x)}\quad(B\neq0)
\end{aligned}
$$

**Prerequisites for Existence**
- 1. Existence +/- Nonexistence = Nonexistence;
- 2. Not existent +/- Not existent = Not necessarily;
- 3. Exist ×/÷ Not exist = Not necessarily;
	- Can exist, can not exist;
- 4. Not existing ×/÷ Not existing = Not necessarily so;
	- For example: $(-1)^{n}\cdot(-1)^{n}=1$, when two of them are individual, they do not exist, but when multiplied by combination, they exist;

**Rational Operation Rules: Common Conclusions**
- 1. $\lim f(x)=A\neq0\Rightarrow\lim f(x)g(x)=A\lim g(x);$
	- The limit of a nonzero factor can be determined first;
- 2. $\lim\frac{f(x)}{g(x)}$ exists, $\lim g(x)=0\Rightarrow\lim f(x)=0; $
- 3. $\lim\frac{f(x)}{g(x)}=A\neq0,\lim f(x)=0\Rightarrow\lim g(x)=0;$

### 10.1.4 Method 4: Use L'Hôpital's Rule to Find Limits
**Usage Requirements**
- 1. $\lim_{x\to x_0}f(x)=\lim_{x\to x_0}g(x)=0\left(\infty\right);$
- 2. $f$ and $g$ are differentiable in a punctured neighborhood of $x_0$, and $g'(x)\neq0$.
	- L'Hôpital's rule follows from Cauchy's mean value theorem, so these hypotheses are essential.
- 3. $\lim_{x\to x_0}\frac{f^{\prime}(x)}{g^{\prime}(x)}$ exists (or );
- Conditions met: $\lim_{x\to x_0}\frac{f(x)}{g(x)}=\lim_{x\to x_0}\frac{f^{\prime}(x)}{g^{\prime}(x)}.$
	- Note: To determine whether this equality holds true, you need to check whether it exists on the right side of the equation;

**Usage Environment**
- $\frac00;\quad\frac\infty\infty,\quad0\cdot\infty;\quad\infty-\infty;\quad1^\infty;\quad\infty^0;\quad0^0$
- In fact, they are all derived from $\frac00;\quad\frac\infty\infty$:
- Problem-solving approach:
	- $\frac00,\frac\infty\infty\quad\Leftarrow\begin{cases}\quad ∞-∞\\0\cdot\infty\quad\Leftarrow\begin{cases}1^\infty\\\infty^0\\0^0&\end{cases}&\end{cases}$
- $0\cdot\infty\quad$
	- Approach: Place either 0 or infinity on top OR below;
- $1^\infty;\quad\infty^0;\quad0^0$：
	- Approach: All three should be rewritten as 0 times infinity;
	- Method: $[f(x)]^{g(x)}=e^{g(x)\ln f(x)}$; rewrite the expression as an exponential.
	- Core: Find the limit of the exponent $g(x)\ln f(x)$.

**Summary**
- 1. If the assumptions guarantee only two derivatives of $f$, L'Hôpital's rule can be applied at most twice, provided all of its hypotheses remain satisfied.
- 2. N-order differentiable -> n-1 order differentiable can be used;
- 3. If you encounter abstract functions to find limits, you can consider using the definition of derivatives for calculation;

### 10.1.5 Method 5: Use Taylor's Formula to Find Limits
#####**Theorem**: Taylor's Theorem—with the remaining Peano terms
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> 1. Taylor's formula with Peano remainder: Suppose $f(x)$ is differentiable of $n$ order at $x_0$, then $f(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o((x-x_0)^n)$
> Meaning: Write a general function as a general polynomial + remainder
> Where: $$P_n(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$$
> $f(x)$ n Taylor polynomials at $x_{0}$
> 	$$R_n(x)=o((x-x_0)^n)$$
> Disadvantages:
 > 1. Only qualitative descriptions of the remaining items can be given, not quantitative analysis;
> 2. It can only be used when x0 is approaching; it cannot be used from a distance;

**Common Taylor Formulas**
- $$\mathrm{e^x=\sum_{n=0}^\infty\frac1{n!}x^n=1+x+\frac1{2!}x^2+\cdots\in(-\infty,+\infty)}$$
- $$\sin\mathrm{x=\sum_{n=0}^\infty\frac{(-1)^n}{(2n+1)!}x^{2n+1}=x-\frac1{3!}x^3+\frac1{5!}x^5+\cdots,x\in(-\infty,+\infty)}$$
- $$\cos\mathrm{x=\sum_{n=0}^\infty\frac{(-1)^n}{(2n)!}x^{2n}=1-\frac1{2!}x^2+\frac1{4!}x^4+\cdots,x\in(-\infty,+\infty)}$$
- $$\mathrm{ln(1+x)=\sum_{n=0}^\infty\frac{(-1)^n}{n+1}x^{n+1}=x-\frac12x^2+\frac13x^3+\cdots,x\in(-1,1]}$$
- $$\begin{aligned}&\frac1{1-\mathrm{x}}=\sum_{\mathrm{n=0}}^\infty\mathrm{x^n}=1+\mathrm{x+x^2+x^3+\cdots,x\in(-1,1)}\\&\frac1{1+\mathrm{x}}=\sum_{\mathrm{n=0}}^\infty(-1)^\mathrm{n}\mathrm{x}^\mathrm{n}=1-\mathrm{x}+\mathrm{x}^2-\mathrm{x}^3+\cdots,\mathrm{x}\in(-1,1)\end{aligned}$$
- $$\mathrm{(1+x)^a=1+\sum_{n=1}^\infty\frac{a(a-1)\cdots(a-n+1)}{n!}x^n=1+ax+\frac{a(a-1)}{2!}x^2+\cdots,x\in(-1,1)}$$


**$\frac{0}{0}$ Common Methods**
- Equivalent substitution;
- L'Hôpital's rule;
- Taylor's formula;

**How many times is Taylor's Formula used**
- 1.  $\frac{f(x)}{g(x)}.$
	- How to use:
		- 1. Using Taylor expansion, the expansion has the same power index above and below the order;
			- For example: the top and bottom are to the fourth power, and the bottom and top are also expanded to the fourth power;
		- 2. Organize terms, organize terms of the same order together;
- 2. $f(x)-\text{ or }+g(x)$
	- Write about a power exponent of a certain degree and find the lowest degree term to subtract them;

### 10.1.6 Method 6: Use the squeeze principle to find limits
**Example Question**: $\lim_{n\to\infty}\left[\frac1{n^2+n+1}+\frac2{n^2+n+2}+\cdots+\frac n{n^2+n+n}\right]$
- Analysis
	- Reduction: All denominators are reduced to the largest denominator;
	- Enlargement: Convert all denominators to the smallest denominator;
- Analysis
	- $\frac{\frac{1}{2}n(n+1)}{n^{2}+n+n}\leq[\text{ Original form }]\leq\frac{\frac{1}{2}n(n+1)}{n^{2}+n+1}$
	- Both before and after tend to be 1/2, so the original expression = 1/2;
- Question Type: #Principleofsqueezing

**Example Question**: $\lim_{n\to\infty}\sqrt[n]{a_1^n+{a_2}^n+\cdots+{a_m}^n},\quad\text{ where }a_i>0,(i=1,2,\cdots m)$
- Analysis
	- Shrink the largest term to: $\sqrt[u]{ma^{n}}$ the largest term among all current terms
	- How to shrink the smallest term to a result that is also a? Keep only one $a^n$ item: $\sqrt[n]{a^{n}}$
- Analysis
	- In the largest term, since m is a constant, it ultimately converges to a;
	- $\sqrt[n]{a^{n}}\leq\sqrt[n]{a_{1}^{n}+a_{1}^{n}+\cdots+a_{m}^{n}}\leq\sqrt[n]{ma_{0}^{n}}$
- Question Type: #Principleofsqueezing

**Method**: When encountering a finite term in the square root, just find the term that most affects the current total number size, with its limit being the scaling value of the squeeze principle;
- Example: $\lim_{n\to\infty}\sqrt[n]{1^n+x^n+(\frac{x^2}2)^n},{(x>0).}$
- There are three of these in total. Find the one with the largest base: $\max\{1,x,\frac{x^2}2\}$
- When x approaches infinity, $\frac{x^2}2$ has the greatest influence;

### 10.1.7 Method 7: Use the monotone bounded criterion to find limits
**Method**
- Generally divided into two steps:
- 1. Proving the existence of `->` monotonic bounded criterion;
- 2. Take the limits on both sides of the equation;

**Example Question**: $\text{ Let }x_1>0,x_{n+1}=\frac12\Bigg(x_n+\frac1{x_n}\Bigg),n=1,2,\cdots.\text{ Find the limit }\lim_{n\to\infty}x_n$
- Analysis:
	- Inequality conclusion: $2ab\leq a^{2}+b^{2}$
- Analysis
	- Step 1: Prove the existence of limits
		- Since x 1>0, $x_n>0$;
		- $x_{n+1}=\frac12\left(x_n+\frac1{x_n}\right)=\frac12\left[(\sqrt{x_n})^2+(\frac1{\sqrt{x_n}})^2\right]\geq\frac12\cdot2\sqrt{x_n}\cdot\frac1{\sqrt{x_n}}=1$
		- $x_{n+1}-x_{n}=\frac{1}{2}\Bigg(\frac{1}{x_{n}}-x_{n}\Bigg)=\frac{1}{2}\cdot\frac{1-x_{n}^{2}}{x_{n}}\leq0$
		- Because $x_{n+1}-x_{n}<0$ is monotonically decreasing and the function has a lower bound, so the limit exists;
	- Step 2: Take the limits on both sides of the equation and find the limit
		- $\lim_{n\to\infty}x_{n}=a.$
		- $a=\frac12{\left(a+\frac1a\right)}$
		- $\lim_{n\to\infty}x_n=\mathbf{1}.$
- Question Type: #Monotonyandboundedcriteria

**Concept**: Monotonic bounded criterion used in various scenarios
- Mostly used to find recurrence relations $x_{n+1}=f(x_n)$

### 10.1.8 Method 8: Use definite integrals to find limits
**Concept of Definite Integrals**
- Definite integrals sum all terms within an interval (for example, from a to b);
	- Intervals are divided and taken according to patterns;
- N equal divisions between a and b -> Each part is $\frac{b-a}{n}$;

**Example Question**: $\text{ Find the limit }\lim_{n\to\infty}\left[\frac1{n+1}+\frac1{n+2}+\cdots+\frac1{n+n}\right]$
- Analysis
	- This question is very difficult to extract using the squeezing principle;
	- Definite integrals are also "Japanese limits"
- Analysis
	- Step 1: Extract 1/n (Cute Factor~)
		- Original form: $=\lim_{n\to\infty}{\frac1n}{\left[\frac1{1+\frac1n}+\frac1{1+\frac2n}+\cdots+\frac1{1+\frac nn}\right]}$;
	- Step 2: Find the changing part -> Which is the integrand
		- The changing part is the position of the function x, and the range of change is the range of finding definite integrals (from $\frac1n$ to n, where n values range from 0 to 1);
		- Thus, the changed part becomes x: $\int_{0}^{1}\frac{1}{1+x}dx$
	- 1. Where there is change, there is variable;
	- 2. The range of change in X is the range of the interval;
- Question Type: #Definiteintegralsdefinethelimittofindthelimit

**Summary:**n items and questions
- There are two solutions:
- 1. Principle of compression;
- 2. Definition of definite integrals;

## 10.2 Summary of Limit Finding Methods
![Pasted image 20240324233237](/assets/notes/8a35b5f297fc-Pasted-image-20240324233237.png)
