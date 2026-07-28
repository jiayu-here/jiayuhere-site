---
title: "Lecture 52: Fourier series"
slug: math-060
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 52: Fourier Series. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-05-16
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Infinite Series"]
---

**Section Overview**
- (1) Fourier coefficients and Fourier series
- (2) Convergence Theorem
- (3) The function expansion is a Fourier series

**Common Question Types and Typical Examples**
- Problem Type 1: Questions about the convergence theorem
- Problem Type 2: Expand a function into a Fourier series
---
## 52.0 Basics
#### Orthogonality of Trigonometric Functions
**Concept**: Orthogonality of trigonometric functions
- Concept: A set of trigonometric functions
	- $(0,1,\sin x,\cos x,\sin 2x,\cos 2x...)$
- Orthogonality:
	- The inner product of two functions, when the integral is 0, denote that the two functions are orthogonal
- Orthogonality of trigonometric functions:
	From the trigonometric function system, take two different functions with range $[-\pi,\pi]$ and perform the inner product, resulting in an integral of 0;
- Example:
	- Different times:
		- $$\int_{-\pi}^{\pi}\sin nx \cos mx \mathrm{d}x =0\quad n\neq m$$
		- $$\int_{-\pi}^{\pi}\sin nx\sin mxdx=0\quad n\neq m$$
	- When Equal:
		- $$\int_{-\pi}^{\pi}\cos nx·\cos nx dx=\pi $$

**Concept**: Fourier expansion of a $2\pi$-periodic function
- The Fourier series has the form
  $$f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\sin nx\right).$$
- In particular,
  $$a_0=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\,dx.$$
- Calculating the coefficient:
	- ![Pasted image 20240904144914](/assets/notes/c4dce0bdb8b9-Pasted-image-20240904144914.png)
	- $$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,dx.$$


## 52.1 Fourier Coefficients and Fourier Series
### 52.1.1 Basic Concepts
#####**Definition**: #Fouriercoefficient
> <font color="#ccc1d9">Description:</font>
> $$\begin{aligned}
> a_n&=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,dx &&(n=0,1,2,\ldots),\\
> b_n&=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin nx\,dx &&(n=1,2,\ldots).
> \end{aligned}$$

**Explanation**
- The above formula can be used to find the coefficients of a given n expression;

#####**Definition**: #Fourierseries
> <font color="#ccc1d9"> Description: </font>`f` Fourier series of $$f(x)\sim\frac{a_0}2+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)$$

**Explanation**
- Concept:
	- Whether the above expression can be expanded depends on whether the `~` in the above expression can be written as an equal sign;
	- Whether it can be expanded requires the use of the convergence theorem;
- Explanation:
	- `~`
		- Means that, except for certain finite points (discontinuities, endpoints), all other points satisfy the properties specified in the formula;
	- $\frac{a_0}2$
		- In the fluctuation, represents the DC component;
	- $(a_n\cos nx+b_n\sin nx)$：
		- In fluctuation, represents the AC component;
		- Note: The expansion of even functions only has cosine terms, while those of odd functions only have sine terms;
- Function:
	- For example:
		- Originally, a signal representing high or low levels can now be approximated using a `sinx`;
		- Adding one `sinx` gives `1 harmonic`, adding three `sinx` gives `3 harmonic`; as you add more and more, the value becomes closer to harmonics;
	- Summary:
		- This example demonstrates the role of Fourier series: using the series expansion of a period to approximate a periodic quantity:
	- Illustration:
		- ![Pasted image 20240517001116](/assets/notes/d2912afd0177-Pasted-image-20240517001116.png)

### 52.1.2 Convergence Theorem
#####**Theorem**: #Dirichlettheorem
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> Suppose $f$ is piecewise smooth on $[-\pi,\pi]$, with only finitely many discontinuities of the first kind and finitely many extrema. Then its Fourier series converges at every point, with:
> $$1)\quad S(x)=f(x)\qquad\text{at every continuity point of }f.$$
> $$2)\quad S(x)=\frac{f(x^-)+f(x^+)}2\qquad\text{at every discontinuity point of }f.$$
> $$3)\quad S(x)=\frac{f((-\pi)^+)+f(\pi^-)}2\quad\text{ when }x=\pm\pi.$$

**Explanation**
- Concept:
	- Core:
		- This theorem reveals the prerequisites for Fourier series to expand: except for convergence to**endpoints**and**a finite number of discontinuities**, all others are convergent**continuous**functions $f(x)$ `->` almost everywhere converge to `f(x)`;
	- Explanation:
		- (1) `->` When consecutive points, the expanded series converges to function `f(x)`;
		- (2) When `->` is a discontinuous point, the expanded series converges to the average of the left and right function values of the discontinuous point;
		- (3) `->` When the left and right endpoints are unfolded, the expanded series converges to the average of the two endpoints;
- Function:
	- Lower requirements for expanding the function into a Fourier series;
	- In power series, functions need to be differentiable and integrable, while in Fourier series, only continuous functions are needed `->` for broader applicability;
- Comparison of applicable scopes:
	- Fourier series `->` mainly used to study periodic quantities, such as wave theory in engineering;
	- Power series `->` Mainly used for numerical calculations, such as in calculus;

## 52.2 Function Expansion as a Fourier Series
**Purpose**: To study the coefficients when the function is expanded to a Fourier series

### 52.2.1 Expansion of Periodic Functions: Special Cases
**Concept Introduction**: Expansion of a function with period $2\pi$
- (1) Expand on $[-\pi,+\pi]$: Expand generally
	- $$\begin{aligned}
	  a_n&=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,dx &&(n=0,1,2,\ldots),\\
	  b_n&=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin nx\,dx &&(n=1,2,\ldots).
	  \end{aligned}$$
- (2) Expansion on $[-\pi,+\pi]$: Expansion of parity functions
	- 1. $f(x)$ is an odd function:
		- $$a_n=0,\qquad b_n=\frac2\pi\int_0^\pi f(x)\sin nx\,dx\quad(n=1,2,\ldots).$$
		- Explanation: Because $\cos x$ is an even function and is in $a_n$, when $f(x)$ is an odd function, ` odd function * even function = odd function `, so $a_n$ becomes 0 and $b_n$ becomes doubled. The same applies in other cases;
	- 2. $f(x)$ is an even function:
		- $$a_n=\frac2\pi\int_0^\pi f(x)\cos nx\,dx\quad(n=0,1,2,\ldots),\qquad b_n=0.$$
- (3) Expand on $[0,+\pi]$: Expand to be a sine or cosine
	- Analysis:
		- This is an expansion over half a cycle, so**extension extension**needs to be done during analysis;
		- Odd function expansion: only the sine term. Because if only $[0,+\pi]$ is given, then if an odd function expansion is needed on $[-\pi,+\pi]$, only the sine term `->`**odd extension**;
		- When expanding to sine levels, theoretically an odd extension is required, but in practice, the expansion of odd functions can be used directly;
		- Analogy even extension extension;
	- 1. Expanded to sine:
		- $$a_n=0,\qquad b_n=\frac2\pi\int_0^\pi f(x)\sin nx\,dx\quad(n=1,2,\ldots).$$
	- 2. Expanded to cosine:
		- $$a_n=\frac2\pi\int_0^\pi f(x)\cos nx\,dx\quad(n=0,1,2,\ldots),\qquad b_n=0.$$

### 52.2.2 Expansion of Periodic Functions: General Case
**Concept Introduction**: Expansion of a function with period $2l$
- (1) Expand on $[-l,+l]$
	- $$a_n=\frac1l\int_{-l}^lf(x)\cos\frac{n\pi x}l\mathrm{d}x\quad\quad n=0,1,2\cdots\quad\quad \\b_n=\frac1l\int_{-l}^lf(x)\sin\frac{n\pi x}l\mathrm{d}x\quad\quad n=1,2\cdots $$
- (2) Expand on $[-l,+l]$: parity functions
	- $$\text{i)}f(x)\text{ is an odd function }.\quad\quad \\a_n=0,n=0,1,2\cdots\quad\quad \\b_n=\frac2l\int_0^lf(x)\sin\frac{n\pi x}l\mathrm{d}x\quad\quad n=1,2\cdots $$
	- $$\begin{aligned}&\text{ii)}f(x)\text{ is an even function }.\\&{a_n}=\frac2l\int_0^lf(x)\cos\frac{n\pi x}l\mathrm{d}x&&n=0,1,2\cdots\\&b_{n}=0&&n=1,2\cdots\end{aligned}$$
- (3) Expand on $[0,l]$: Expand to be a sine or cosine
	- $$\begin{aligned}&\text{ i) Expand to a sine }\\&a_{n}=0,&&n=0,1,2\cdots\\&b_{n}=\frac2l\int_0^lf(x)\sin\frac{n\pi x}l\mathrm{d}x&&n=1,2\cdots\end{aligned}$$
	- $$\begin{aligned}&\text{ ii) Expand to a cosine. }\\&a_{n}=\frac{2}{l}\int_{0}^{l}f(x)\cos\frac{n\pi x}{l}\mathrm{d}x&n=0,1,2\cdots\\&b_{n}=0&n=1,2\cdots\end{aligned}$$

## 52.3 Frequently Tested Question Types

---
### Question Type: #DirichletConvergenceTheorem
#### PART 1: Problem-solving methods
**Problem Type**: Given the functions of $b_n$ and $S(x)$, find the values to which $S(x)$ converges at a certain point
- Concept: Since we need to find the position of the sum function to converge, we first need to use the convergence theorem to determine whether the conditions for the convergence theorem are satisfied;
- Note: If on $(0,l)$ or $(0,\pi)$, pay attention to whether to extend it;

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review


---
### Question Type: #ExpandthefunctionintoaFourierseries
#### PART 1: Problem-solving methods
**Key Point**: Develop the steps for Fourier series
- 1. Find $a_0$, calculate the coefficient, and write its Fourier series: $\frac{a_0}2+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)$;
- 2. Using the convergence theorem, determine where Fourier series can be equated with the original function, and where it cannot converge;

#### PART 2: Typical Example Problems
**Example**: Expand $f(x)=x-1$ `(x<=x<=2)` into a cosine series with period `4`;
- Analysis
	- Because `T=4` `->` $l=2$
- Analysis
	- Step 1: Write out the Fourier series
		- $$a_0=\frac22\int_0^2(x-1)dx=0$$
		- $$a_n=\frac22\int_0^2(x-1)\cos\frac{n\pi x}2dx=\frac2{n\pi}\int_0^2(x-1)d\sin\frac{n\pi x}2=-\frac2{n\pi}\int_0^2\sin\frac{n\pi x}2dx \left.=\frac4{n^2\pi^2}[\left(-1\right)^n-1]=\left\{\begin{matrix}0,&n=2k,\\-\frac8{\left(2k-1\right)^2\pi^2},&n=2k-1\end{matrix}\right.\right.(k=1,2,\cdots).$$
		- $$f(x)=-\frac8{\pi^2}\sum_{n=1}^\infty\frac1{\left(2n-1\right)^2}\cos\frac{(2n-1)\pi x}2$$
- Note:
	- Using the convergence theorem, it is performed on the $(-l,+l)$ function after extension;

#### PART 3: Key Points Review
**Key Point**: Three methods to find the sum of series of constant terms `->`;
- (1) Definition of series of constant terms;
- (2) Power series;
- (3) Fourier series;
