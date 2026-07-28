---
title: "Lecture 22: L’Hôpital’s Rule"
slug: math-030
description: "Graduate Entrance Examination Mathematics study notes: Lecture 22: L’Hôpital’s Rule. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2023-12-27
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Mean Value Theorems and Applications of Derivatives"]
---

## 1.1 What Is L'Hôpital's Rule?
### 1.1.1 Basic Concepts of L'Hôpital's Rule
**Why L'Hôpital's Rule Is Needed**
-**Using derivatives to calculate limits with indeterminate forms**, mainly used for calculating indeterminate forms in fractional form;
	- Informally, L'Hôpital's rule allows certain limits of the forms $0/0$ and $\infty/\infty$ to be evaluated through $\lim_{x\to x_0}\frac{f(x)}{g(x)}=\lim_{x\to x_0}\frac{f^{\prime}(x)}{g^{\prime}(x)}$, provided the rule's hypotheses are satisfied.
- Its main advantage is that it can reduce certain quotient limits to simpler limits involving derivatives.

**More Accessible Explanation**
Simply put, the essence of finding a limit is to compare the numerator and denominator with the order—to see who is faster.
Just like the numerator and denominator race toward zero or infinity on the track, we observers want to figure them out
1. Who won? (Is the limit greater than one or less than one?) ）
2. Did they cross the finish line at the same time, or did the leader reach the finish line several lengths ahead? (Same level or higher rank?) How much difference is there between crossing the line at the same time? (If they cross the line at the same level, what is the actual limit?) ）
- The problem is
	- Our visual judgment is limited: we know only how two quantities behave near a point. L'Hôpital's rule says that, under specific hypotheses, comparing their derivatives can reveal the limiting ratio of the original quantities.
	- Each time you calculate the direction, the camera is half as slow; as it slows down, the process of crossing the finish line becomes increasingly clear;
	- This slow-motion analogy has limits: L'Hôpital's rule cannot be used if the functions are not differentiable in the required punctured neighborhood, if the derivative ratio has no usable limit, or if the original expression is not of type $0/0$ or $\infty/\infty$.

#####**Theorem**: L'Hôpital's Rule
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if the following conditions are met:
> 1）$\lim_{x\to x_0}f(x)=\lim_{x\to x_0}g(x)=0;$
> 2) $f(x)$ and $g(x)$ are differentiable within $\overset{\circ}{\operatorname*{U}}(x_0,  \delta)$, and $g^{\prime}(x)\neq0; $
> 3) $\lim_{x\to x_0}\frac{f^{\prime}(x)}{g^{\prime}(x)}$ exists (or $\infty)$
> If the above conditions are met, then: $\lim_{x\to x_0}\frac{f(x)}{g(x)}=\lim_{x\to x_0}\frac{f^{\prime}(x)}{g^{\prime}(x)}$

**Explanation**
- In short, it's the limit of the 0/0 type;

**Proof**: Use Cauchy's mean value theorem
- $\lim_{x\to x_{0}}\frac{f(x)}{f(x)}=\lim_{x\to x_{0}}\frac{f(x)-f(x_{0})}{g(x)-g(x_{0})}=\lim_{x\to x_{0}}\frac{f^{\prime}(\xi)}{g(\xi)}$
- Therefore, it equals $\lim_{x\to x_0}\frac{f^{\prime}(x)}{g^{\prime}(x)}$

**Inference 1**: Some secondary conclusions
- $x-\sin x\sim\frac{1}{6}x^{3}$
- ${\tan-x\sim\frac13x^3}$

**Corollary 2**: When x approaches infinity, the growth rate is: $\log_{a}x\ll x^{\alpha}\ll a^{\alpha}$

### 1.1.2 Example Problems
**Example Question**: $\text{ Find the limit }\lim_{x\to0}\frac{x^2+2\cos x-2}{\left(e^x-1\right)^2\ln(1+x^2)}$
- Analysis
	- When the original expression is complex, the first consideration should be how to simplify it;
- Analysis
	- Because $\begin{aligned}&\mathrm{e^x-1\sim x}\\&{\ln(1+x^2)\sim x^2}\end{aligned}$
	- So the original expression = $\lim_{x\to x_0}\frac{x^{2}+2\cos x-2}{x^{4}}$
	- Differentiate the numerator and denominator to obtain $\operatorname*{lim}_{x\rightarrow0}\frac{2x-2\sin x}{4x^{3}}=\frac{1}{2}\operatorname*{lim}_{x\rightarrow0}\frac{x-\sin x}{x^{3}}$.
	- At this point:
		- You can use L'Hôpital's rule.
		- You can choose to substitute with equivalent value;
	- Use equivalent substitution at this point. The final result is 1/12;

**Example**: $\text{Find }\lim_{x\to+\infty}\frac{\log_ax}{x^\alpha}\text{ and }\lim_{x\to+\infty}\frac{x^\alpha}{a^x}.\ (a>1,\alpha>0)$
- Analysis
	- Both limits compare logarithmic, polynomial, and exponential growth rates.
	- L'Hôpital's rule can be applied.
- Analysis
	- 1. Applying L'Hôpital's rule once to the first limit gives $\lim_{x\to\infty}\frac{\frac{1}{x\ln a}}{\alpha x^{\alpha-1}}=\lim_{x\to\infty}\frac{1}{\alpha\ln a\,x^\alpha}=0$.
	- 2. Rewrite the second limit as $\lim_{x\to+\infty}\frac{x^\alpha}{e^{x\ln a}}=0$. If using L'Hôpital's rule, differentiate repeatedly until the power in the numerator is negative.
- Conclusion
	- As $x\to\infty$, the growth rates satisfy $\log_{a}x\ll x^{\alpha}\ll a^{x}$.

**Example**: $\text{Find }\lim_{x\to0}\left[\frac1{\ln(1+x)}-\frac1x\right].$
- Analysis
	- This is an $\infty-\infty$ indeterminate form. Combining the terms produces a $\frac00$ form to which L'Hôpital's rule applies.
- Analysis
	- $\lim_{x\to0}\frac{x-\ln(1+x)}{x\ln(1+x)}$
	- Applying L'Hôpital's rule twice gives
	  $$\lim_{x\to0}\frac{1-\frac1{1+x}}{\ln(1+x)+\frac{x}{1+x}}
	  =\lim_{x\to0}\frac{\frac1{(1+x)^2}}{\frac1{1+x}+\frac1{(1+x)^2}}
	  =\frac12.$$
- Conclusion
	- For**infinity minus infinity**problems, if there is a denominator, you can consider dividing by**infinity by infinity**type;

**Example Question**: $\lim_{x\to0^+}(x)^{\sin x}$
- Analysis
	- Analysis process: Since the problem is**zero to the power of zero**, at this point
	- Transform into an exponential function**with base e**, then only count the exponent part and find the exponent's limit;
	-
- Analysis
	- Solution process: Derived from the original expression = $\lim_{x\to0^+}e^{\sin x\ln x}$
	- Then find the exponent limit: $\lim_{x\to0^+}\sin x\ln x$, then use equivalent substitution to change sinx~x;
		- $\lim_{x\to0^{+}}x\ln x=\lim_{x\to0^{+}}\frac{\log x}{\frac{1}{x}}=\lim_{x\to0^{+}}\frac{\frac{1}{x}}{-\frac{1}{x^{2}}}=0$
- Conclusion
	- 1.**Zero to the power of zero**(including 1 to the power of infinite), convert it into**exponential function with base e**, find the limit of the exponent part;
	- 2.**0 × infinity**type, converts the 0 part into a denominator, then inverts it to become a denominator, making infinity a comparison to infinity;

## 1.2 Situations Where L'Hôpital's Rule Is Used
### 1.2.1 Usage Scenarios
**Usage Analysis**: $\frac00;\quad\frac\infty\infty;\quad0\cdot\infty;\quad\infty-\infty;\quad1^\infty;\quad\infty^0;\quad0^0$;
- The forms $\frac00$ and $\frac\infty\infty$ can be handled directly when the other hypotheses of L'Hôpital's rule hold.
- The forms $0\cdot\infty$, $\infty-\infty$, $1^\infty$, $\infty^0$, and $0^0$ must first be transformed into a quotient of type $\frac00$ or $\frac\infty\infty$.

**Conversion Rules**:
- $\mathbf{0}\cdot\infty\quad\Leftarrow\begin{cases}\mathbf{1}^{\infty}\\\infty^{0}\\\mathbf{0}^{0}&\end{cases}$
- $\frac00,\frac\infty\infty\quad\Leftarrow\begin{cases}0\cdot\infty&\Leftarrow\begin{cases}1^\infty\\\infty^0\\0^0&\end{cases}&\end{cases}$
- ![Pasted image 20240111174212](/assets/notes/b5abe1b07464-Pasted-image-20240111174212.png)

### 1.2.2 Notes
- 1. It needs to be simplified first
	- By using equivalent substitution, it is replaced with a simpler form;
- 2. Note Condition 3
	- $\lim_{x\to x_0}\frac{f^{\prime}(x)}{g^{\prime}(x)}$ exists (or $\infty)$
	- For example, $\lim_{x\to+\infty}\frac{1-\cos x}{1+\cos x}$ does not exist because the expression oscillates and is unbounded near points where $1+\cos x=0$; L'Hôpital's rule does not apply.
