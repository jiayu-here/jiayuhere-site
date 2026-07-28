---
title: "Lecture 5: The concept of function limits"
slug: math-013
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 5: The Concept of Function Limits. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-02-29
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 5.1 Limits of functions
### 5.1.1 Case 1: The independent variable tends toward infinity
#####**Definition**: #Functionstendtowardpositiveinfinity
> <font color="#ccc1d9">Description:</font> $\lim_{x\to+\infty}f(x)=A$ iff, for every $\varepsilon>0$, there is an $X>0$ such that $x>X$ implies $|f(x)-A|<\varepsilon$.

**Explanation**
- The limit of a function as x approaches positive infinity and the relationship between the function approaching infinity:

**The Relationship Between Function Limits and Sequence Limits**
- ${\lim_{x\to+\infty}f(x)=A}{\rightarrow}{\operatorname*{}}\quad\lim_{u\to\infty}f(u)=A$
- From the**function limit, the value of the sequence's limit**can be derived; the sequence limit cannot be reversed, proving the value of the function's limit;
- The limit of a sequence is a special value of the function's limit: the limit starts from 0 and takes a positive number, then approaches infinity (tending toward positive infinity);

#####**Definition**: #Functionstendtowardnegativeinfinity
> <font color="#ccc1d9">Description:</font> $\lim_{x\to-\infty}f(x)=A$ iff, for every $\varepsilon>0$, there is an $X>0$ such that $x<-X$ implies $|f(x)-A|<\varepsilon$.

#####**Definition**: #Functionstendtowardinfinity
> <font color="#ccc1d9">Description:</font> $\lim_{x\to\infty}f(x)=A$ iff, for every $\varepsilon>0$, there is an $X>0$ such that $|x|>X$ implies $|f(x)-A|<\varepsilon$.

**Explanation**
- Meaning: the absolute value of x tends toward infinity;

#####**Theorem**: #Therelationshipbetweenfunctioninfinityandpositiveandnegativeinfinity
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $\boxed{\lim_{x \to \infty}f (x)=A\begin{cases} \lim\limits_{x \to +\infty}f (x)=A\\ \lim\limits_{x \to -\infty}f (x)=A\\ \end{cases}}$

**Explanation**
- Only when the positive and negative of $f(x)$ are infinitely equal can $\lim_{x \to \infty}f (x)$ be proven;
- Notes:
	- In the limit of a sequence, x approaches infinity = x approaches positive infinity;
	- In the function limit, x tends to infinity = the absolute value of x approaches infinity;

### 5.1.2 Case 2: Independent variables tend toward finite values
#####**Definition**: #Theindependentvariabletendstowardthelimitoffinitevalues
> <font color="#ccc1d9">Description:</font> $\lim_{x\to x_0}f(x)=A$ iff, for every $\varepsilon>0$, there is a $\delta>0$ such that $0<|x-x_0|<\delta$ implies $|f(x)-A|<\varepsilon$.

**Explanation**
- x tends toward neighborhoods near $x_0$: $A-\varepsilon<f (x)<A+\varepsilon$;
- Note: x tends toward 0 and $f(x)$ approaches 0;
	- $x\to x_0,\text{ But }x\neq x_0$
	- But for $f(x)$, sometimes it is $f(x)\rightarrow A$, sometimes $f(x)=A$, depending on the nature of the point;
	- For example, $\lim_{x\to0}\frac{\sin x}x=1$, x cannot be 0, but f(x) approaches 0 and then equals 1;

**Conclusion**
- The limit of the function at $x_0$ point is independent of the function's $f(x_0)$;
- $\lim_{x\to x_0}f(x)$ is independent of $f(x_0)$; it depends only on the values of $f$ in a punctured neighborhood of $x_0$.

## 5.2 Single-Sided Limit
### 5.2.1 Left- and Right-Hand Limits
#####**Definition**: #Leftlimitandrightlimit
> <font color="#ccc1d9"> description: </font> 1. Left limit: $\lim_{x\to x_0^-}f(x)=f(x_0^-)=f(x_0-0)$; 2. Right limit: $\lim_{x\to x_0^+}f(x)=f({x_0}^+)=f(x_0+0)$

- Left limit
$$
\lim_{x \to x_{0}^{-}}f(x) = A \Leftrightarrow\begin{cases} \hspace{1em} \forall \xi >0, \exists \delta>0, x_{0}-\delta <x<x_{0} \ \text{whenever}, \\ \hspace{1em} \lvert f(x) - A\rvert < \xi \\ \end{cases}
$$
- Right limit
$$
\lim_{x \to x_{0}^{+}}f(x) = A \Leftrightarrow\begin{cases} \hspace{1em} \forall \xi >0, \exists \delta>0, x_{0}<x<x_{0}+\delta \ \text{whenever}, \\ \hspace{1em} \lvert f(x) - A\rvert < \xi \\ \end{cases}
$$

![Pasted image 20240302002004](/assets/notes/69c7585bfb13-Pasted-image-20240302002004.png)
#####**Theorem**: #Therelationshipbetweenlimitsandonesidedlimits
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $\lim_{x\to x_0}f(x)=A\Leftrightarrow\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=A$

**Explanation**
- Limit existence = both left and right limits exist;
- Both left and right limits exist**and equal**= limit exists;

**Three Common Situations Where Left and Right Limits Need to Be Distinguished**
- 1. The limit of the piecewise function at the**boundary point**(on either side of the boundary point, the function expressions differ);
- 2. $e^{\infty}$ Type Limit ($\lim_{x\to0}e^{\frac1x},\lim_{x\to\infty}e^x,\lim_{x\to\infty}e^{-x}$)
	- The exponent of e tends to infinity;
	- Example:
		- (1) $\lim_{x\to\infty}e^x$
			- $\begin{aligned}\lim_{x\to\infty}e^x&=+\infty\\\lim_{x\to-\infty}e^x&=0\end{aligned}$
		- (2)  $\lim_{x\to0}e^{\frac1x}$
			- $\lim_{x\to 0^+}e^{\frac 1 x}=+\infty$
			- $\lim_{x\to0^{-}}e^{\frac{1}{x}}=0$
	- When the e exponent is infinite, be sure to pay attention to whether it is positive or negative, and separately discuss the right limit;
		- Because $\begin{aligned}e^{+\infty}&=+\infty\\e^{-\infty}&=0\end{aligned}$
- 3. $\arctan(\infty)$ Type Limit
	- $\lim_{x\to0}\arctan\frac{1}{x}$
	- Example: Given $\lim_{x\to0}\left[a\arctan\frac1x+\left(1+|x|\right)^{\frac1x}\right]$, find the value of a;
		- Because $arctan \infty$ appears, and also the absolute value of x (piecewise function), we discuss it directly by splitting left and right;
		- $\begin{aligned}&\lim_{k\to0^+}\left[\arctan\frac1k+(1+x)^{\frac1k}\right]=\frac\pi2a+e\\&\lim_{k\to0^-}\left[\arctan\frac1k+(1-x)^{\frac kk}\right]=-\frac\pi2a+e^{-1}\end{aligned}$
		- So $\begin{aligned}&\color{red}{\frac\pi2}\color{red}{a+e}\\&\color{red}{||}\\&\color{red}{-\frac\pi2}\color{red}{a+e^{-1}}\end{aligned}$
		- The value of a can be solved;

**Supplement: Definition of $\arctan$**
- $\tan(\arctan x)= x$
- Illustration
	- ![Pasted image 20240301003959](/assets/notes/e995786322df-Pasted-image-20240301003959.png)
- Table
	- ![Pasted image 20240301004243](/assets/notes/993039c9a7c6-Pasted-image-20240301004243.png)
