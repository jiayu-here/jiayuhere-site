---
title: "Lecture 28: Indefinite integrals"
slug: math-036
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 28: Indefinite Integrals. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
date: 2024-01-17
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Indefinite Integrals"]
---

## Common Question Types and Typical Examples in This Chapter
**Exam Content**
- (1) The concept and properties of indefinite integrals
- (2) Basic formulas for indefinite integrals
- (3) Three main integration methods
- (4) Integrals of three common integrable functions

**Frequently Tested Question Types**
- Finding indefinite integrals (substitution, division)

## 1.1 What is an indefinite integral?
**Knowledge Points Distribution**
- 2+3+3
- 2: Two concepts `->` 1. antiderivative; 2. Indefinite integral;
- 3: Three methods: two types of substitution + distribution;
- 3: Three types of common integrals

**Key Point**: Three methods `->` Two types of substitution + distribution;

**Scope**: Master the basic methods for evaluating indefinite integrals.

### 1.1.1 Basic Concepts
**antiderivative**
- Concept:
	- $F^{\prime}(x)=f(x)$
	- $G^{\prime}(x)=f(x)$
- Therefore, $G(x)-F(x)=C$.

#####**Definition**: #Variablepoints
> <font color="#ccc1d9"> description: </font> is a function. The indefinite integral (or antiderivative) of $f(x)$ is a derivative function equal to $f(x)$. $F(x)$, that is, $F′(x) = f (x)$, or written as $[F (x)+c]^{\prime}=f (x)$
> $\int f(x)\,dx=F(x)+C$.

**Explanation**
- Concept:
	- An indefinite integral represents the full family of antiderivatives of $f(x)$.
- Example:
	- For example, in $\int f_{(x)}dx=F_{(x)}+C$:
	- Let $F(x)$ be one antiderivative of $f(x)$.
	- Call all antiderivative $F(x)+C$ of function $f(x)$ the indefinite integral of function $f(x)$, also called the antiderivative of function $f(x)$;
- Symbol:
	- $\int$: Integral sign;
	- $f(x)$: integrand;
	- $dx$: Integral variable;
	- $f(x)\,dx$: the integrand together with the differential
	- $C$: constant of integration;

**Geometric Meaning of Indefinite Integrals**
- A family of curves that differ only by a vertical translation.
### 1.1.2 Existence of antiderivatives
#####**Theorem**: #Theoriginalfunctionexistsbytheorem
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> 1. If $f(x)$ is continuous on interval $I$, then $f(x)$ must have an antiderivative on interval $I$;
> 2. If $f(x)$ has the first type of discontinuity point on the interval $I$, then $f(x)$ has no antiderivative on the interval $I$;

**Explanation**
- Relationships:
	- For continuous functions, there must be an antiderivative;
	- Continuous `->` exists with an antiderivative;
	- There exists an antiderivative `-X>` continuous;
- Conclusion:
	- A discontinuous function may still have an antiderivative, but derivatives satisfy the intermediate value property and cannot have discontinuities of the first kind.

**Examples**
- $g(x)=\operatorname{sgn}x=\begin{cases}-1, &x<0, \\0, &x=0, \\1, &x>0.&\end{cases}$ has jump discontinuities `->` belongs to the first type of discontinuities `->` has no antiderivative;
- The natural candidate $|x|+C$ is not differentiable at $x=0$.

### 1.1.3 Basic Properties of Indefinite Integrals
**Nature 1**:
- $(\int f(x)\mathrm{d}x)^{\prime}=f(x)$
- $\mathrm{d}\int f(x)\mathrm{d}x=f(x)\mathrm{d}x$

**Property 2**:
- $\int f^{\prime}(x)\operatorname{d}x=f(x)+C$
- $\int\operatorname{d}f(x)=f(x)+C$

**Nature 3**:
- $\int[f(x)\pm g(x)]\operatorname{d}x=\int f(x)\operatorname{d}x\pm\int g(x)\operatorname{d}x$

**Property 4**:
- $\int kf(x)\operatorname{d}x=k\int f(x)\operatorname{d}x$



## 1.2 Common Integral Formulas
### 1.2.1 Integral Formula
$1、\int adx=ax+C\:,\:a$ is a constant
$2、\int x^{a}dx=\frac{x^{a+1}}{a+1}+C$, where a is a constant and $a\neq-1$
$3、\int\frac{1}{x}dx=\ln|x|+C$
$4、\int e^{x}dx=e^{x}+C$
$5、\int a^{x}dx=\frac{1}{\ln a}a^{x}+C$, where $a>0$ and $a\neq1$.
$6、\int\sin xdx=-\cos x+C$
7、$\int\cos xdx=\sin x+C$
$8、\int\sec^{2}xdx=\tan x+C$
$9、\int\csc^{2}xdx=-\cot x+C$
$10、\int\tan xdx=-\ln|\cos x|+C$
$11、\int\cot xdx=\ln\lvert\sin x\rvert+C$
$12、\int\sec xdx=\ln\lvert\sec x+\tan x\rvert+C$
$13、\int\csc xdx=-\ln\lvert\csc x+\cot x\rvert+C$
$14、\int\frac{dx}{1+x^2}=\arctan x+C$
$15、\int\frac1{\sqrt{a^2-x^2}}dx=\arcsin\frac xa+C$
$16、\int\frac1{x^2-a^2}dx=\frac1{2a}\ln\left|\frac{x-a}{x+a}\right|+C$
$17、\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C$
$18、 \int\frac 1{a^2+x^2}dx=\frac 1 a\arctan\frac xa+C$
$19、\int\frac{dx}{\sqrt{x^2+a^2}}=\ln (x+\sqrt{x^2+a^2})+C$
$20、\int\frac{dx}{\sqrt{x^2-a^2}}=\ln\left|x+\sqrt{x^2-a^2}\right.|+C$

**Common "Unable to Accumulate" Functions**
- $\begin{aligned}&\int\mathrm{e}^{x^2}\mathrm{d}x\\&\int\frac{\sin x}x\mathrm{d}x\\&\int\frac{\cos x}x\mathrm{d}x\end{aligned}$

### 1.2.2 Trigonometric Function Summary
**Basics of Trigonometric Functions**
- Reciprocal relationship:
	- $$\tan\alpha\cot\alpha=1、\sin\alpha\csc\alpha=1、\cos\alpha\sec\alpha=1$$
- Quotient relationship:
	- $$\tan\alpha=\frac{\sin\alpha}{\cos\alpha}、\cot\alpha=\frac{\cos\alpha}{\sin\alpha}$$
- Square relation:
	- $$ \sin^{2}\alpha+\cos^{2}\alpha=1、1+\tan^{2}\alpha=\sec^{2}\alpha、1+\cot^{2}\alpha=\csc^{2}\alpha$$
- Double angle formula:
	- $$\sin2\alpha=2\sin\alpha\cos\alpha$$
	- $$\cos2\alpha=2\cos^2\alpha-1=1-2\sin^2\alpha$$
	- $$\tan2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}=\frac{2\cot\alpha}{\cot^2\alpha-1}=\frac{2}{\cot\alpha-\tan\alpha}$$
- Lowering formula:
	- $$\cos^{2}\alpha=\frac{1+\cos2\alpha}{2},\quad\sin^{2}\alpha=\frac{1-\cos2\alpha}{2},\quad\tan^2\alpha=\frac{1-\cos2\alpha}{1+\cos2\alpha}$$
- Inverse trigonometric function:
	- If $x=a\sin t$, then $t=\arcsin\frac{x}{a}$.
	- If $x=a\sec t$, then $t=\arccos\frac{a}{x}$.

**Collection of Trigonometric Differentiations**
- Sine and Cosine:
	- $$(\sin x)^{\prime}=\cos x,\qquad(\cos x)^{\prime}=-\sin x$$
- tan、cot、sec、csc：
	- $$\begin{aligned}(\tan x)^{\prime}&=\sec^2x&(\cot x)^{\prime}&=-\csc^2x\\\\(\sec x)^{\prime}&=\sec x\tan x&(\csc x)^{\prime}&=-\csc x\cot x\end{aligned}$$
- Inverse trigonometric function:
	- $$\begin{aligned}&(\arcsin x)^{\prime}=\frac1{\sqrt{1-x^2}}&&(\arccos x)^{\prime}=-\frac1{\sqrt{1-x^2}}\\&(\arctan x)^{\prime}=\frac1{1+x^2}&&(\operatorname{arccot}x)^{\prime}=-\frac1{1+x^2}\end{aligned}$$

**Common Trigonometric Integrals**
- Corresponding one-to-one with differentiation:
- $$\int\sin xdx=-\cos x+C、\int\cos xdx=\sin x+C$$
- $$\int\tan xdx=-\ln|\cos x|+C、\int\cot xdx=\ln\lvert\sin x\rvert+C$$
- $$\int\sec xdx=\ln\lvert\sec x+\tan x\rvert+C、\int\csc xdx=-\ln\lvert\csc x+\cot x\rvert+C$$
- $$\int\sec^{2}xdx=\tan x+C、\int\csc^{2}xdx=-\cot x+C$$
- $$\int\tan x secx=\sec x+C、\int{\cot x\,\csc x}\,dx=-csc x+C$$

**Common Inverse Trigonometric Integrals**
- $$\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C$$
- $$\int\frac1{\sqrt{a^2-x^2}}dx=\arcsin\frac xa+C$$
- $$\int\frac{dx}{1+x^2}=\arctan x+C$$
- $$\int\frac 1{a^2+x^2}dx=\frac 1 a\arctan\frac xa+C$$

## 1.3 Three Common Types of Integrable Functions
**1. Rational Function Integral**
- Points: $\int R(x)\operatorname{d}x$
- Rational function: $R(x)$
- (1) General method (partial fraction method);
- (2) Special method (additive and subtractive terms + square differential square)
	- Examples of adding, detracting, and splitting items:
		- $\int\frac1{t^2-1}\cdot\frac1{t+1}\mathrm{d}t.$
		- Get: $\int\frac1{(t^2-1)(t+1)}\mathrm{d}t=\frac12\int\frac{(t+1)-(t-1)}{(t^2-1)(t+1)}\mathrm{d}t=\frac14\ln\left|\frac{t-1}{t+1}\right|+\frac1{2(t+1)}+C$

**2. Trigonometric Rational Integral**
- Points: $\int R(\sin x,\cos x)\mathrm{d}x$
- Explanation: Represents $\sin x$ and $\cos x$ obtained through rational operations;
- General method: universal replacement
	- Ling $\tan\frac x2=t$
	- $\int R(\sin x,\cos x)\operatorname{d}x=\int R(\frac{2t}{1+t^2},\frac{1-t^2}{1+t^2})\frac2{1+t^2}dt$
- Special methods (triangle deformation, substitution, division)
	- 1. $\text{ If }R(-\sin x,\cos x)=-R(\sin x,\cos x)$, then let $u=\cos x$
	- 2. $\text{ If }R(\sin x,-\cos x)=-R(\sin x,\cos x)$, then let $u=\sin x$
	- 3. $\text{ If }R(-\sin x,-\cos x)=R(\sin x,\cos x)$, then let $u=\tan x$
- Example:
	- Special method: $\int\frac{\operatorname{d}x}{1+\sin x}=\int\frac{1-\sin x}{\cos^2x}\mathrm{d}x=\tan x-\frac1{\cos x}+C.$
	- General method: Let $\tan\frac x2=t$, then $\begin{aligned}\text{ Original form }& =\int\frac 1{1+\frac{2 t}{1+t^2}}\cdot{\frac 2{1+t^2}dt}  \\&=\int\frac{2 dt}{\left (1+t\right)^2}=-\frac 2{1+t}+C\end{aligned}$

**3. Simple Irrational Integral**
- Scoring Method:
	- $$\int R(x,\sqrt[n]{\frac{ax+b}{cx+d}})\operatorname{d}x$$
- Explanation:
	- Example: In the two functions of $\int\frac{dx}{(2-x)\sqrt{1-x}}$:
	- 1. General function part: $(2-x)$
	- 2. Radical function: $\sqrt{1-x}$
- General Method:
	- $$\text{ Order }\sqrt[n]{\frac{ax+b}{cx+d}}=t$$
- Example:
	- $\int\frac1x\sqrt{\frac{x+1}x}dx$
	- $\text{ Order }\sqrt{\frac{x+1}x}=t\text{ , then }\quad x=\frac1{t^2-1},dx=-\frac{2t}{\left(t^2-1\right)^2}dt,\int\frac1x\sqrt{\frac{x+1}x}dx=\int(t^2-1)t\frac{-2t}{(t^2-1)^2}dt=-2\int\left(1+\frac1{t^2-1}\right)dt$

## 1.4 Frequently Tested Question Types
### Question Type: #Findthereplacementoftheindefiniteintegral. Sections
#### PART 1: Problem-solving methods
**About the Two Types of Substitution Methods**
- Many problems can be solved using the first type of substitution method and the derivative method of multiplication, as well as the second type of substitution method and the t-composite function;
- When the first type of substitution method is available, the first type of substitution method is prioritized;

**On Piecewise Functions for Calculating Indefinite Integrals**
- Note: At point 0, whether the segmental function can be differentiated and observe its continuity;
	- Discontinuous -> non-differentiable -> incorrect antiderivative;
- Method:
	- 1. For piecewise functions to find indefinite integrals, first find the indefinite integral normally, then write $C1、C2$ when writing C;
	- 2. Solve the**with C results**of the two functions at the segmentation points;
	- 3. According to the requirement of continuous boundary points, the two functions with C must have the same result, so find the relationship between C1 and C2;
	- 4. Bring C1, C 2 into antiderivative in the form of C;
- Supplement: an implicit premise
	- As long as the integrand is a piecewise continuous function, as long as continuity is ensured, differentiability can also be guaranteed;

**Multiplying Two Different Functions**
- When multiplying two different types of functions, the**Distributed Integral Method**can be considered;
- Incorporate the easy-to-get parts into the DX;

**Given the antiderivative problem**
- When the question is a known antiderivative, find the content of $f(x)$ in the indefinite integral, and there is a derivative in the indefinite integral, you can directly extract the derivative into dx, thus directly bringing the differentiated result of the antiderivative;

#### PART 2: Typical Example Problems
**Example Question**: $\text{ Let }f(x)=\begin{cases}&e^x,&x\geq0,\\&\cos x,&x<0,&\end{cases}\text{ then }\int f(x)dx=$
- Analysis
	- $\left.\int f(x)dx=\left\{\begin{array}{l}{{e^{x}+c_{1}},}&{{{x\geq0}}}\\{{\sin^{\prime}x+c_{2}^{\prime}}}&{{x<0}}\\\end{array}\right.\right.$
	- At this point, as x tends toward positive 0 and negative 0 respectively, we get: $1+C_1=C_2$
	- Therefore, let $C_1=C$, then $C_2=1+C$, substitute it into the original form;
	- $\left.\int f(x)dx=\left\{\begin{array}{ll}{{e^{x}+c,\quad x\geq0}}\\{{sinx+1+c.\quad x<0}}\\\end{array}\right.\right.$
- Analysis
- Question Type: #

**Example Question**: $\text{ Calculation }\int\frac{x^2}{\sqrt{a^2-x^2}}dx(a>0).$
- Analysis
	- Summary: When $x=a\sin t$, $\sin t\cos t=\frac{x}{a}\sqrt{1-\frac{x^{2}}{a^{2}}}$.
	- Where $\frac{x}{a}$ is $\sin t$, $\sqrt{1-\frac{x^{2}}{a^{2}}}$ is given by $\sin^{2}t+\cos^{2}t=1$.
- Analysis
- Question Type: #

**Example**: Given $\frac{\sin x}x$ is an antiderivative of f(x), find $\int x^3f^{\prime}(x)\operatorname{d}x$
- Analysis
	- Directly set $\int x^{3}f'(x)\mathsf{d}x=\int x^{3}df(x)$ and then directly divide into parts;
	- $=x^3f(x)-3\int x^2\mathrm{d}\left(\frac{\sin x}x\right)$
- Analysis
- Question Type: #
#### PART 3: Key Points Review
Summary:
- When $x=a\sin t$, $\sin t\cos t=\frac{x}{a}\sqrt{1-\frac{x^{2}}{a^{2}}}$.
- Where $\frac{x}{a}$ is $\sin t$, $\sqrt{1-\frac{x^{2}}{a^{2}}}$ is given by $\sin^{2}t+\cos^{2}t=1$.
