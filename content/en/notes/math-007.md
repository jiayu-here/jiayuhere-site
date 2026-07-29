---
title: "Advanced Mathematics - Collection of Formulas"
slug: math-007
description: "Postgraduate Entrance Exam Mathematics Study Notes: Advanced Mathematics - Formula Collection. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Mathematics Summary","Formula Collection"]
updated: 2026-07-29
split: chapters
---

# Chapter 0: Mathematical Fundamentals
## 0.1 Function operations
### 0.1.1 Trigonometric Functions
**`secx` and `cscx`**
- range：$(-\infty,-1]\cup[1,+\infty)$
- Value: Calculate using the reciprocals of $\cos x$ and $\sin x$
- Image:
	- ![Pasted image 20240528170409](/assets/notes/89a5bddfbff1-Pasted-image-20240528170409.png)
	- ![Pasted image 20240528170424](/assets/notes/cd8fad2dffea-Pasted-image-20240528170424.png)

**Inverse Trigonometric Functions**
- Concept:
	- Note:
		- The inverse sine function is not the inverse function of $y=\sin x$ across the entire domain; note the range of $y=\arctan x$;
		- It is merely the inverse function of $y=\sin x$ on $\left[-\frac\pi2,\frac\pi2\right]$; solving inverse functions over other intervals requires the identity transformation to translate onto $\left[-\frac\pi2,\frac\pi2\right]$ to be represented. The inverse cosine function is similar;
	- Relationship: `arcsinx` and `sinx`
		- At $\left[-\frac\pi2,\frac\pi2\right]$, from the inverse function $f^{-1}[f(x)]=x$, we know: $arc\sin(\sin x)=x$
		- At $\left[-\frac\pi2,\frac\pi2\right]$, from the inverse function $f[f^{-1}(x)]=x$, we know: $\sin(\arcsin x)\equiv x$
	- Example: Using the identity transformation to translate x:
		- Find $\arcsin (\sin x),x\in(\frac{3}{4}\pi,\pi)$
		- Use the identity $\sin x=\sin(\pi-x)$, which moves the angle into $(0,\frac{\pi}{4})$, where the inverse-function identity applies.
		- Get $$\arcsin (\sin x)=\arcsin(\sin(\pi-x))=\pi-x, x\in (\frac{3}{4}\pi,\pi)$$
- `arcsinx`：
	- range：$\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$
	- ![Pasted image 20240528170558](/assets/notes/50b75870a43d-Pasted-image-20240528170558.png)
- `arccosx`：
	- range：$[0,\pi]$
	- ![Pasted image 20240528170623](/assets/notes/a8528b1f601f-Pasted-image-20240528170623.png)

**Supplement: Definition of $\arctan$**
- $\tan(\arctan x)= x$
- Illustration
	- ![Pasted image 20240301003959](/assets/notes/e995786322df-Pasted-image-20240301003959.png)
- Table
	- ![Pasted image 20240301004243](/assets/notes/993039c9a7c6-Pasted-image-20240301004243.png)

**Basics of Trigonometric Functions**
- Sum and Difference Formula:
	- Formula:
		- $$\begin{aligned}&\sin\left(x\pm y\right)=\sin x\cos y\pm\cos x\sin y\\&\cos\left(x\pm y\right)=\cos x\cos y\mp\sin x\sin y\\&\tan\left(x\pm y\right)=\frac{\tan x\pm\tan y}{1\mp\tan x\tan y}.\end{aligned}$$
	- Common conclusions:
		- $$\sin x+\cos x=\sqrt{2}\sin\left(x+\frac{\pi}{4}\right)$$
		- $$\sin(n\pi+\alpha)=(-1)^n\sin\alpha$$
	- Induction formula:
		- ![Pasted image 20240825180254](/assets/notes/924c00b9f3ce-Pasted-image-20240825180254.png)
- Reciprocal relationship:
	- $$\tan\alpha\cot\alpha=1、\sin\alpha\csc\alpha=1、\cos\alpha\sec\alpha=1$$
- Quotient relationship:
	- $$\tan\alpha=\frac{\sin\alpha}{\cos\alpha}、\cot\alpha=\frac{\cos\alpha}{\sin\alpha}$$
- Square relation:
	- $$ \sin^{2}\alpha+\cos^{2}\alpha=1、1+\tan^{2}\alpha=\sec^{2}\alpha、1+\cot^{2}\alpha=\csc^{2}\alpha$$
- Double angle formula:
	- $$\sin2\alpha=2\sin\alpha\cos\alpha$$
	- $$\cos2\alpha=\cos^2\alpha-\sin^2\alpha=2\cos^2\alpha-1=1-2\sin^2\alpha$$
	- $$\tan2\alpha=\frac{2\tan\alpha}{1-\tan^2\alpha}=\frac{2\cot\alpha}{\cot^2\alpha-1}=\frac{2}{\cot\alpha-\tan\alpha}$$
- half-angle formula:
	- $$\begin{aligned}
&\sin{\frac{\alpha}{2}}=\pm{\sqrt{\frac{1-\cos\alpha}{2}}} \\
&\cos{\frac{\alpha}{2}}=\pm\sqrt{\frac{1+\cos\alpha}{2}} \\
&\tan{\frac{\alpha}{2}}={\frac{\sin\alpha}{1+\cos\alpha}}={\frac{1-\cos\alpha}{\sin\alpha}}=\pm{\sqrt{\frac{1-\cos\alpha}{1+\cos\alpha}}} \\
&\cot{\frac{\alpha}{2}}={\frac{1+\cos\alpha}{\sin\alpha}}={\frac{\sin\alpha}{1-\cos\alpha}}=\pm{\sqrt{\frac{1+\cos\alpha}{1-\cos\alpha}}}
\end{aligned}$$
- Demotion and promotion
	- Lowering formula:
		- $$\cos^{2}\alpha=\frac{1+\cos2\alpha}{2},\quad\sin^{2}\alpha=\frac{1-\cos2\alpha}{2},\quad\tan^2\alpha=\frac{1-\cos2\alpha}{1+\cos2\alpha}$$
	- Promotion formula:
		- $$1+\cos2\alpha=2\cos^2\alpha,1-\cos2\alpha=2\sin^2\alpha, 1\pm\sin2\alpha=\left(\sin\alpha\pm\cos\alpha\right)^2$$
	- $\cos x$ $1$ Characteristics:
		- Example: $$1-\cos x=1-(\cos 2*\frac{x}{2})=1-(1-2\sin^2 \frac{x}{2})=2\sin^2 \frac{x}{2}$$
- Inverse trigonometric function:
	- If $x=a\sin t$, then $t=\arcsin\frac{x}{a}$.
	- If $x=a\sec t$, then $t=\arccos\frac{a}{x}$.

**Collection of Trigonometric Differentiations**
- Sine and Cosine:
	- $$(\sin x)^{\prime}=\cos x、(\cos x)^{\prime}=-\sin x$$
- `tan、cot、sec、csc`：
	- $$\begin{aligned}(\tan x)^{\prime}&=\sec^2x&(\cot x)^{\prime}&=-\csc^2x\\\\(\sec x)^{\prime}&=\sec x\tan x&(\csc x)^{\prime}&=-\csc x\cot x\end{aligned}$$
- Inverse trigonometric function:
	- $$\begin{aligned}&(\arcsin x)^{\prime}=\frac1{\sqrt{1-x^2}}&&(\arccos x)^{\prime}=-\frac1{\sqrt{1-x^2}}\\&(\arctan x)^{\prime}=\frac1{1+x^2}&&(\operatorname{arccot}x)^{\prime}=-\frac1{1+x^2}\end{aligned}$$

### 0.1.2 Polar Coordinates
**Basic Concepts of Polar Coordinates**
- Transformation:
	- $$\left\{\begin{array}{c}x=r\cos\theta\\y=r\sin\theta\end{array}\right.\Leftrightarrow\left\{\begin{array}{c}r=\sqrt{x^2+y^2}\\\theta=\operatorname{atan2}(y,x)\end{array}\right.$$
	- Note: The above conversion method is limited to the case where the two origins are the same, and the polar coordinates reference system and the $x$ axis direction of the Cartesian coordinates are the same;

**Common Forms of Polar Coordinates Functions**
- Ray `y=kx`, its polar coordinate equation: $\theta=\theta_0$
- A circle with center at the origin and radius `a`: $r=a$
- A circle with center `(a,0)` and radius `a`: $r=2a\cos\theta$
- A circle with center `(0,a)` and radius `a`: $r=2a\sin\theta$

### 0.1.3 Parametric Equations
**Parametric Equations**
- Straight line:
	- Format:
		- $y=k(x-x_{0})+y_{0}$
	- Parametric Equations:
		- $\begin{cases}x=x_0+t\cos\alpha\\y=y_0+t\sin\alpha\end{cases}$
	- Illustration:
		- ![Pasted image 20240531042042](/assets/notes/e342e774ead7-Pasted-image-20240531042042.png)
- Circle:
	- Format:
		- $(x-a)^2+(y-b)^2=r^2$
	- Parametric Equations:
		- $\begin{cases}x=a+r\cos t\\y=b+r\sin t\end{cases}$
	- Illustration:
		- ![Pasted image 20240531042219](/assets/notes/4626464d3f4b-Pasted-image-20240531042219.png)

**Common Parametric Equations in Elementary Mathematics**
$$
\begin{aligned}
&\text{Circle: } \left\{\begin{array}{l}x=r\cos t\\y=r\sin t\end{array}\right. \\
&\text{Ellipse: }\begin{cases}x=a\cos t\\y=b\sin t&\end{cases} \\
&\text{Hyperbola: }\left\{\begin{array}{l}x=a\sec t\\y=b\tan t\end{array}\right. \\
&\text{Parabola: }\left\{\begin{array}{l}x=2ct\\y=t^2\end{array}\right. \\
&\text{spiral: } \left\{\begin{matrix}x=t\cos lt\\y=t\sin lt\end{matrix}\right. \\
&\text{Cycloid: } \left\{\begin{array}{l}x=r\cdot(t-\sin t)\\y=r\cdot(1-\cos t)\end{array}\right.
\end{aligned}
$$

**Common Parametric Equations and Their Graphs**
- Star line
	- General formula $$x^{\frac23}+y^{\frac23}=a^{\frac23}$$
	- Parametric equations $$\begin{cases}x=a\cos^3\theta\\y=a\sin^3\theta\end{cases}$$
	- Image:
		- ![Pasted image 20240825155755](/assets/notes/2e0697748501-Pasted-image-20240825155755.png)
- Cycloid
	- $$\text{ Parametric equations }\begin{cases}x=a (\theta-\sin\theta)\\y=a (1-\cos\theta)\end{cases}.$$
	- ![Pasted image 20240825155730](/assets/notes/8100fb99828f-Pasted-image-20240825155730.png)
- Logarithmic threads:
	- $$\rho=a\mathrm{e}^{\theta}$$
	- ![Pasted image 20240825155838](/assets/notes/275dc8a92e94-Pasted-image-20240825155838.png)
- Double twisted wire
	- ![Pasted image 20240825155711](/assets/notes/e116a50df3f8-Pasted-image-20240825155711.png)

### 0.1.4 Logarithm and Exponent
**Logarithmic Operation Rules**
- $$log_a(mn)=log_am+log_an$$
	- Note: $\log_2(m+n)$ cannot be split into a sum or product of $\log_2m$ and $\log_2n$; only products and quotients can be expanded using the rules above.
- $$log_am^n=nlog_am$$
- $$log_a\left(\frac{m}{n}\right)=log_am-log_an$$
- $$log_a\sqrt[n]{m}=\frac{1}{n}log_am$$
- $$\log_ab=\frac{\log_cb}{\log_ca}$$
- $$u^v=\mathrm{e}^{v\ln u}\left(u>0\right)$$


**Exponential Operation Rules**
- $$\begin{gathered}
a^{0}=1\left(a\neq0\right) \quad\quad\quad\quad a^{r}\cdot a^{s}=a^{r+s} \\
(a^{r})^{s}=a^{rs} \quad\quad\quad\quad \frac{a^{r}}{a^{s}}=a^{r-s}(a\neq0) \\
\left(ab\right)^{r}=a^{r}b^{r} \quad\quad\quad\quad a^{-r}=\frac{1}{a^{r}}(a\neq0)
\end{gathered}$$

**Logarithmic and Exponential Operations**
- Take logarithms on both sides of the equation:
	- Function: Take logarithms at the same time, eliminate the exponents, and get the logarithms
	- $$y=(x+1)^{3}(x-2)^{2}\rightarrow lny=3ln(x+1)+2ln(x-2)$$
- Taking exponents on both sides of the equation:
	- Function: At the same time, take the index, eliminate the logarithm, and get the index
	- $$y=\ln\left(x+{\sqrt{x^{2}+1}}\right)\rightarrow e^y=x+\sqrt{x^2+1}$$

### 0.1.5 Elementary Functions
**Square, Cube, Multiple Formulas**
- The sum of the three terms:
	- $$\left(a+b+c\right)^2=a^2+b^2+c^2+2ab+2ac+2bc$$
- Perfect cube sum and difference:
	- $$\begin{aligned}\left(a+b\right)^3&=a^3+b^3+3a^2b+3ab^2\\\left(a-b\right)^3&=a^3-b^3-3a^2b+3ab^2\end{aligned}$$
- Binomial Theorem:
	- $$\begin{aligned}&\left(a+b\right)^{n}=\sum_{k=0}^{n}\mathrm{C}_{n}^{k}a^{n-k}b^{k}=a^n+\mathrm{C}_n^1a^{n-1}b+\cdots+\mathrm{C}_n^{n-1}ab^{n-1}+b^n\end{aligned}$$

**Rationalizing Numerators and Denominators**
- Physics and chemistry `->` Remove radicals from the numerator or denominator
- numerators have physical chemistry:
	- Multiply the numerator and denominator by the conjugate radical of its numerator;
	- Example: $$f(x)=\frac{\sqrt{x+1}-\sqrt{x-1}}{x}=\frac{(\sqrt{x+1}-\sqrt{x-1})*(\sqrt{x+1}+\sqrt{x-1})}{x(\sqrt{x+1}+\sqrt{x-1})}=\frac{2}{x\cdot(\sqrt{x+1}+\sqrt{x-1})}$$
	- Here $\sqrt{x+1}+\sqrt{x-1}$ is the conjugate of $\sqrt{x+1}-\sqrt{x-1}$.
- Rationalizing the denominator:
	- The method is the same as the rationalization of the numerator, multiply the numerator and denominator by the conjugate radical of its denominator;
- Rationalizing both the numerator and denominator:
	- First multiply by the conjugate of the radical in the numerator, then by the conjugate of the radical in the denominator.

**Partial-Fraction Decomposition**
- Method:
	- Step 1: Express the fraction as a sum of simpler fractions with unknown coefficients such as $A$ and $B$.
	- Step 2: Put the fractions over a common denominator and expand the numerator.
	- Step 3: Compare coefficients with the original numerator and solve for $A$ and $B$.
- Example:
	- $$\text{Decompose }\quad\frac{x}{x^2-5x+6}.$$
	- $$\frac{x}{x^2-5x+6}=\frac{x}{(x-2)(x-3)},\qquad \text{let }\frac{x}{(x-2)(x-3)}=\frac{A}{x-2}+\frac{B}{x-3}.$$
	- Combining the fractions gives $$\frac{\text{A}(x-3)+\text{B}(x-2)}{(x-2)(x-3)}=\frac{(\text{A+B})x-3\text{A}-2\text{B}}{(x-2)(x-3)}.$$
	- Comparing coefficients gives $$\left.\left\{\begin{array}{c}\left(1\right)\mathrm{A}+\mathrm{B}=1\\\left(2\right)\mathrm{3A}+2\mathrm{B}=0\end{array}\right.\right.$$
	- Thus `B=3` and `A=-2`, so $$\frac{x}{x^2-5x+6}=-\frac{2}{x-2}+\frac{3}{x-3}.$$
- Example 2:
	- ![Pasted image 20241127124659](/assets/notes/f8815d9b615d-Pasted-image-20241127124659.png)

**Add, Subtract, Split**
- Purpose:
	- Simplifying polynomial fractions;
- Method:
	- Perform polynomial division from the highest-degree term downward until the degree of the remainder is less than the degree of the denominator.

**Quadratic Equations in One Variable**
- To $ax^2+bx+c=0\left(a\neq0\right)$:
	- $\triangle = b^2- 4ac> 0\Leftrightarrow$ The equation has two distinct real roots;
	- $\triangle = b^2- 4ac= 0\Leftrightarrow$ The equation has two equal real roots;
	- $\bigtriangleup=b^2-4ac<0\Leftrightarrow$ The equation has a pair of conjugate roots
- Root Formula:
	- $$x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$

**Solving the cubic equation**
- Step 1: Rewrite the equation in the form of $x^3+bx^2+cx+d=0$;
- Step 2: Guess the roots, and based on `d`, guess which product of the three numbers it can be decomposed into;
- Step 3: Organize and factorize `->` first organize it into $(x-x_0)\left(x^2+px+q\right)=0$, solve $x^2+px+q=0$, and get two more roots;

**Conclusion**
- arctangent function:
	- $$\arctan x+\arctan\frac1x\equiv\frac\pi2(x>0).$$
- The following index is written directly:
	- $$(-1)^{2n}=1\quad\quad(-1)^{2n-1}=-1$$
	- As $n\to\infty$, $(-1)^{n-3}=(-1)^{n-1}$.
	- $$x^n-1=(x-1)(x^{n-1}+x^{n-2}+\cdots+x+1)$$

## 0.2 Geometric Foundations
### 0.2.1 Straight Line
**Common Forms of Straight Lines**
- Point-slope form: $$y-y_0=k\left(x-x_0\right)$$
- Two-point form: $$y-y_1=\frac{y_2-y_1}{x_2-x_1}\left(x-x_1\right)\rightarrow \frac{y-y_1}{y_2-y_1}=\frac{x-x_1}{x_2-x_1}.$$
- Standard form: $$Ax+By+C=0$$

**Formula for the distance from point to straight line**
- Distance formula:
	- $$d=\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}$$

**Normal, Tangent**
- Tangent equation: $y-y_{0}=f^{\prime}(x_{0})(x-x_{0})$
- Normal equation: $y-y_0=-\frac1{f^{\prime}(x_0)}(x-x_0)$

### 0.2.2 Circles and Ellipses
**Circles and Their Standard Forms**
- Standard form: $$(x-a)^2+(y-b)^2=R^2$$
- Perimeter: $$2\pi R$$
- Area: $$\pi R^2$$
- Surface area of a sphere: $$S=4\pi R^2$$
- Volume of a sphere: $$\frac{4}{3}\pi R^3$$

**Volume of the Cone**
- S is the base area of the cone, H is the height of the cone, then:
- $$V_{\text{cone}}=\frac{1}{3}SH$$
- If the radius of the base of the cone is R, then:
- $$V_{\text{cone}}=\frac{\pi}{3}R^2H$$

**Ellipses and Their Areas**
- Elliptic equation: $$\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$$
- Eccentric ellipse equation:
	- Shift m along the x-axis, shift n along the y-axis
	- $$\frac{\left(x-m\right)^2}{a^2}+\frac{\left(y-n\right)^2}{b^2}=1$$
- Elliptical area: $$S=\pi ab$$

### 0.2.3 Area of a triangle
**Concept**: Two formulas for the area of a triangle
- Let `x`, `y`, and `z` be the three side lengths, let `y` be the chosen base, let `h` be the corresponding height, and let the perimeter be `2p`.
- $$S=\sqrt{p(p-x)(p-y)(p-z)}=\frac12yh$$

### 0.2.4 Volume
**Concept**
- Tetrahedral volume:
	- $$V_{\text{tetrahedron}}=\frac{1}{3}S_{\text{base}}h$$

## 0.3 Sequences and Mathematical Induction
### 0.3.1 Summing Sequences
**Arithmetic and Geometric Sequences**
- Summation of arithmetic sequences: $$s_n=\frac{(a_1+a_n)n}{2}$$
- Summing geometric sequences: $$s_n=\begin{cases}na_1,\quad(q=1),\\\frac{a_1(1-q^n)}{1-q},\quad(q\neq1).\end{cases}$$

**Common Summation Conclusions**
- $$\sum_{k=1}^{1}\frac{1}{4k^{2}-1}=\frac{1}{2}\sum_{k=1}^{n}(\frac{1}{2k-1}-\frac{1}{2k+1})=\frac{1}{2}(1-\frac{1}{2k+1})$$
- $$\sum_{k=1}^{n}k=\frac{1}{2}n(n+1)$$
- $$\sum_{k=1}^{n}k^{2}=\frac{1}{6}n(n+1)(2n+1)$$

### 0.3.2 Mathematical Induction
**First Mathematical Induction**
- The first mathematical induction method is suitable for propositions involving recurrence that only involve $a_1$ and $a_n$ terms, with the following steps:
- (1) Verify that the proposition is correct when `n=1` is valid;
	- Substitute `n=1` into the left and right sides of the equation to see if it holds;
- (2) Assume the proposition is correct when `n=k`;
	- Set up any number `k`, and assume the current `k` is `n`, then substitute it into the left and right sides of the expression;
- (3) Prove that the proposition is correct at `n=k+1`
	- Take `n=k+1`, substitute it into the left side (summation expression) and the right side of the equation, and organize it into the form of an equation `n=k+1`;

**Second Mathematical Induction**
- Example:
	- Let $D_n= 2aD_{n- 1}- a^{2}D_{n- 2}$, $D_{1}= 2a$, $D_2=3a^2\left(a\neq0\right)$, and use mathematical induction to prove: $D_n=\left(n+1\right)a^n.$
- The second mathematical induction method is suitable for recursive propositions involving $a_{n-1}$, $a_n$, and $a_{n+1}$, with the following steps:
- (1) Verify that the propositions at `n=1` and `n=2` are correct;
	- When $n=1$ $D_1=2a=\left(1+1\right)a^{1}$,
	- When $n=2$, $D_2= ( 2+ 1) a^2$, the proposition holds,
- (2) Assume the proposition is correct when `n<k`;
	- Assume $n<k$ and that $D_n=(n+1)a^n$ holds.
- (3) Proving that the proposition is correct when `n=k` is proven;
	- Then when `n=k`, $\begin{aligned}&D_k=2aD_{k-1}-a^2D_{k-2}=2a\left(ka^{k-1}\right)-a^2\left[\left(k-1\right)a^{k-2}\right]\end{aligned}=\begin{pmatrix}k+1\end{pmatrix}a^k.$
	- It can be determined by mathematical induction;

## 0.4 Other Knowledge
### 0.4.1 Complex Numbers
**Concept**
- Complex number: for real numbers $x$ and $y$, $z=x+iy$ is a complex number.
- Basic relation: $$i^2=-1,\qquad i\text{ is the imaginary unit}.$$
- Example: $\sqrt{-4}=2\sqrt{-1}=2i$

### 0.4.2 Physical Application

### 0.4.3 Common inequalities
**Basic Inequalities**
- Multiplication and square root principles:
	- $$(\text{ Multiplication rule })a>b>0\Rightarrow a^{n}>b^{n}(n\in N,\text{ and }n>1) ;$$
	- $$\\(\text{ Opening the rules })a>b>0\Rightarrow\sqrt[n]{a}>\sqrt[n]{b}(n\in N,\text{ and }n>1)$$
- Basic inequalities:
	- $$a^2+b^2\geq2ab,\qquad\text{with equality iff }a=b.$$
	- $$\frac{a+b+c}3\geq\sqrt[3]{abc} (a,b,c\in R^+)$$

**Common Inequalities in Advanced Mathematics**
- Absolute value inequality:
	- $$-|x|\leqslant x\leqslant|x|$$
	- $$|a|-|b|\leq|a\pm b|\leq|a|+|b|$$
	- $$|\sin x|\leqslant1$$
- Common Other Inequalities:
	- $$\begin{aligned}&(1)\ |\sin x|\leq |x|,\quad \forall x\in\mathbb{R},\ \text{with equality at }x=0;\\&(2)\ |x|\leq|\tan x|,\quad \forall x\in\left(-\frac{\pi}{2},\frac{\pi}{2}\right),\ \text{with equality at }x=0;\\&(3)\ \frac{x}{1+x}\leq\ln(1+x)\leq x,\quad \forall x\geq0.\end{aligned}$$
	- $$\ln n<\sqrt n$$
- Integral inequality:
	- $$f(x){\leqslant}g(x)\text{ , then }\int_a^bf(x)dx{\leqslant}\int_a^bg(x)dx .$$
	- $$\left|\int_a^bf(x)dx\right|\leqslant\int_a^b\left|f(x)\right|dx(a<b)$$
	- $\text{ Let }M\text{ and }m\text{ They are functions }f(x)\text{ In the interval }[a,b]\text{ The maximum and minimum values on the \_ }$
		- $$\\m(b-a)\leqslant\int_a^bf(x)dx\leqslant M(b-a)(a<b)\text{ (Integral Valuation Theorem) }$$

# Chapter 1: Functions, Limits, Continuity
## 1.1 Basic Properties of Functions
**Basic Elementary Functions**
- Power functions, exponents, logarithms, trigonometric functions, inverse trigonometric functions;

**Elementary Functions**
- 1. Constants and five classes of basic elementary functions;
- 2. Addition, subtraction, multiplication, division, and combination;
- 3. The resulting function expressed by an analytical expression;

**Inverse and Composite Functions**
- Scenario One: $f^{-1}[f(x)]=x$
- Scenario 2: $f[f^{-1}(x)]=x$

**Parity**
- Parity Judgment:
	- Common odd functions: $\sin x, \tan x, \arcsin x, \arctan x, \ln\frac{1-x}{1+x}, {\ln(x+\sqrt{1+x^2})}, \frac{e^x-1}{e^x+1}, $$f(-x)=-f(x)$
	- Common even functions: $x^2, |x|, \cos x, f(x)=f(-x)$
- Operation rules:
	- odd function + odd function =**odd function**
	- even function + even function = even function
	- odd function + even function =**neither odd nor even**
	- Odd function × odd function =**Even function**
	- Even function × even function = even function
	- odd function × even function = odd function
- composite function:
	- What is odd inside is the same outside, what is even inside is even.
	- If the inner function is an odd function, the parity of the composite function is the same as that of the outer function;
	- If the inner function is an even function, then the composite function is an even function;
- derivative relationship:
	- Derivatives of odd functions: even functions;
	- Derivatives of even functions: odd functions;

**Periodic**
- 1.  $\sin x,\cos x\text\text{ The period is }2\pi;\,\sin2x,|\sin x|\text\text{ The period is }\pi$
- 2. $\text{ If }f(x)\textit{\text{ With }}T\text\text{ This is the cycle },\text{ then }f(a\text{x}+b)\textit{ \text{ With }}\frac T{|a|}\text{ This is the cycle }.$

## 1.2 limit, continuity
**Infinitesimal**
- **Same-order** infinitesimals: $\frac{\alpha(x)}{\beta(x)}\to C$, where $C\neq0$.
- **Equivalent** infinitesimals: $\frac{\alpha(x)}{\beta(x)}\to1$.
- Higher-order infinitesimal: $\frac{\alpha(x)}{\beta(x)}\to0$; equivalently, $\alpha(x)=o(\beta(x))$.
- Lower-order infinitesimal: $\left|\frac{\alpha(x)}{\beta(x)}\right|\to\infty$.
- $$\text{ If }\lim\frac{\alpha (x)^{\color{red}{}}}{\left[\beta (x)\right]^{k}\color{red}}=C\neq 0,\text{ α is called the k-th order infinitesimal of β; }$$

**continuity**
- Definition:
	- Definition 1: $y=f(x)$ is continuous at $x_0$ if $\lim_{\Delta x\to0}[f(x_0+\Delta x)-f(x_0)]=0$.
	- Definition 2: $y=f(x)$ is continuous at $x_0$ if $\lim_{x\to x_0}f(x)=f(x_0)$.
- $f(x)$ Necessary and sufficient conditions for continuity: $f(x)$**left continuity and right continuity**,**left and right continuity are equal**;

**Discontinuity**
- 1. The first type of discontinuity point: both left and right limits exist;
	- Can remove discontinuous points: and left limit = right limit;
	- Jump break point: left limit is not equal to right limit;
- 2. The second type of discontinuity point: at least one of the left and right limits does not exist;
	- Infinite discontinuity point: for example, in $1/x$, when x=0;
	- Oscillation discontinuity point: For example, when x tends to 0, $sin1/x$ is the oscillation discontinuity point;
	- Infinity and oscillation are two common types in the second category, but they are not necessarily the only two types, and it may be neither infinity nor oscillation;
- Common situations where it is necessary to divide left and right limits:
	- 1. Piecewise function dividing point;
	- 2. E infinity: $e^{\infty}$;
	- 3. Arctan infinity;

## 1.3 Method to find limit
### 1.3.1 Use basic limit to find limit
**Commonly used basic limit**
- $$\lim_{x\to0}\frac{\sin x}x=1;$$

**Power exponent and root**
- $$\lim_{x\to0}(1+x)^{\frac1x}=e;$$
	- It is of type $1^\infty$, and the base of the power in the brackets is greater than 0;
	- $\lim_{x\to0}(1+\frac{1}{x})^{x}$ does not exist, because when x tends to 0, it can also tend to be negative toward 0;
	- Common mistakes: Note that the following limits do not equal `a`; $$\lim_{n\to \infty} a(\frac{n}{{n+1}})^n=\frac{a}{e}$$
- $\lim_{x\to0^+}(1+\frac{1}{x})^{x}=1$
- $\lim_{x\to\infty}(1+\frac1x)^x=e;$
	- It is of type $1^\infty$, and the base of the power in the brackets is greater than 0
	- $\lim_{x\to\infty}(1+x)^{\frac{1}{x}}$
- $\lim_{x\to+\infty}(1+x)^{\frac{1}{x}}=1$
- $\lim_{x\to0}\frac{a^x-1}x=\ln a;$
- $\lim_{n\to\infty}\sqrt[n]{n}=1.$
	- Note that here is n, so it tends to positive infinity;
- $\lim_{n\to\infty}\sqrt[n]{a}=1,(a>0).$
	- Note that here is n, so it tends to positive infinity;

**piecewise function**
- $\left.\lim_{{x\to\infty}}\frac{a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0}{{b}_mx^m+b_{m-1}x^{m-1}+\cdots+b_1x+b_0}=\left|\begin{array}{ll}\frac{a_n}{b_m},&n=m,\\0,&n<m,\\\infty,&n>m.\end{array}\right.\right.$
	- With so many terms in the numerator and denominator, the result mainly depends on the largest number (the highest degree);
	- Note that x goes to infinity.
	- When x tends to 0, the value of the function should depend on the smallest number (lowest degree);
- $\lim_{{n\to\infty}}x^n=\begin{cases}0,&|x|<1,\\1,&x=1,\\+\infty,&x>1,\\\text{does not exist},&x\leq-1.\end{cases}$
- $\lim_{n\to\infty}e^{{nx}}=\begin{cases}0,&x<0,\\+\infty,&x>0\\1,&x=0.&\end{cases}$

**1 to the power of infinity**
- For $1^{\infty}$, the result is an infinitive, not necessarily equal to 1;
- $\text{ If }\lim\alpha(x)=0,\lim\beta(x)=\infty,\text{ and }\lim\alpha(x)\beta(x)=A.\text{ then }\lim(1+\alpha(x))^{\beta(x)}=e^A$
	- that is, the core is in $\lim\alpha(x)\beta(x)=A$, see if it is established;
- Method Trilogy
	- 1. Written in standard form: Original form $=\mathbf{lim}[1+\alpha(x)]^{\beta(x)}$;
	- 2. Find limit: $\lim\alpha(x)\beta(x)=A; $
	- 3. Write the result: Original $=e^A.$

### 1.3.2 equivalent infinitesimal substitution
**Principle of equivalent substitution**
- 1. Multiplication and division relationships can be exchanged
	- $\text{ If }\alpha\sim\alpha_1,\beta\sim\beta_1,\text{ then }\lim\frac\alpha\beta=\lim\frac{\alpha_1}\beta=\mathbf{lim}\frac\alpha{\beta_1}=\mathbf{lim}\frac{\alpha_1}{\beta_1}$
- 2. Addition and subtraction relationships can be exchanged under certain conditions
	- Subtraction
		- $\text{ If }\alpha{\sim}\alpha_1,\beta{\sim}\beta_1,\text{ and }\lim\frac{\alpha_1}{\beta_1}=A\neq1.\text{ then }\alpha{-}\beta{\sim}\alpha_1{-}\beta_1$
		- Conditions for subtraction and substitution:**Two subtraction terms are not equivalent**, A is not equal to 1;
		- For example: $sin2x - tanx$ ~ $2x - x$
	- Addition
		- $\text{ If }\alpha{\sim}\alpha_1,\beta{\sim}\beta_1,\text{ and }\lim\frac{\alpha_1}{\beta_1}=A\neq-1.\text{ then }\alpha{-}\beta{\sim}\alpha_1{+}\beta_1$
		- Conditions for subtraction and substitution: two addition terms are not equivalent, A is not equal to -1;

**commonly equivalent infinitesimal**
- when x tends to 0;
- ${(1+x)^\alpha-1}\sim{\alpha x}$
- $e^{x}-1\sim x$
	- Substitution of power exponential functions;
- $$x\sim\sin x\sim\tan x\sim\arcsin x\sim\arctan x\sim\ln(1+x)\thicksim e^x-1;$$
	- Variant: $\ln q(x)\sim q(x)-1, q(x)\to1$
- $$a^x-1\sim x\ln a,\quad{(1+x)^\alpha-1\sim\alpha x},\quad1-\cos x\sim\frac12x^2$$

**Higher order equivalent infinitesimal**
- $x-\sin x\sim\frac16x^3$,\,$\tan x-x\sim\frac13x^3$
- $\arcsin x-x\sim\frac16x^3\quad x-\arctan x\sim\frac13x^3$
- $x-\ln(1+x)\sim\frac12x^2$

**More general form of two equivalent infinitesimal**
- $\log^{a}(1+2x)\sim(2x)^{a}=2^{a}x^{a}$
- $(1-ax)^{\frac{1}{\alpha}}\sim(\frac{1}{2}x^{2})^{\frac{1}{\alpha}}$

### 1.3.3 evaluating limits by algebraic manipulation
**Calculation premise**
- The addition, subtraction, multiplication and division operations of limit can be calculated separately, provided that:**The limit of each split part needs to exist**;

**Operation Rules**
- Rules:
	- $$lim(f(x)\pm g(x))=\lim f(x)\pm\lim g(x) \\\quad\quad\quad\quad\quad\quad
lim(f(x)\cdot g(x))=\lim f(x)\cdot\lim g(x) \\\quad\quad\quad\quad\quad\quad
lim\left(\frac{f(x)}{g(x)}\right)=\frac{\lim f(x)}{\lim g(x)}\quad(B\neq0)
$$
- Addition:
	- presence + presence: detachable
	- presence + absence: not removable
	- does not exist + does not exist: not necessarily


**Common conclusions**
- 1. $\lim f(x)=A\neq0\Rightarrow\lim f(x)g(x)=A\lim g(x);$
	- The limit of non-zero factors can be found first;
- 2. $\lim\frac{f(x)}{g(x)}$ exists, $\lim g(x)=0\Rightarrow\lim f(x)=0; $
- 3. $\lim\frac{f(x)}{g(x)}=A\neq0,\lim f(x)=0\Rightarrow\lim g(x)=0;$

### 1.3.4 L'Hôpital's rule
**L'Hôpital's rule**
- $$\lim_{x\to x_0}\frac{f(x)}{g(x)}=\lim_{x\to x_0}\frac{f^{\prime}(x)}{g^{\prime}(x)}$$

**Prerequisites**
- 1. $\lim_{x\to x_0}f(x)=\lim_{x\to x_0}g(x)=0\left(\infty\right)$
- 2. $f(x)$ and $g(x)$ are differentiable in a punctured neighborhood of $x_0$, and $g'(x)\neq0$.
- 3. $\lim_{x\to x_0}\frac{f^{\prime}(x)}{g^{\prime}(x)}$ exists;
	- Example: If the condition is that the function f (x) is second-order differentiable, use L'Hôpital's rule to use at most first-order derivatives

**Usage environment**
- Type: $$\frac00;\quad\frac\infty\infty,\quad0\cdot\infty;\quad\infty-\infty;\quad1^\infty;\quad\infty^0;\quad0^0$$
- Solution idea: $\frac00, \frac\infty\infty\quad\Leftarrow\begin{cases}\quad ∞-∞\\0\cdot\infty\quad\Leftarrow\begin{cases}1^\infty\\\infty^0\\0^0&\end{cases}&\end{cases}$
- Conversion method:
	- $0\cdot\infty\quad$
		- Idea: Put one of 0 or infinity above (numerator) `OR` below (denominator);
	- $1^\infty;\quad\infty^0;\quad0^0$:\,
		- Idea: All three must be rewritten as 0 times infinity;
		- Method: rewrite $[f(x)]^{g(x)}$ as $e^{g(x)\ln f(x)}$.
		- Core: Find the infinity of the multiplied part above e;

### 1.3.5 Taylor's formula
**Commonly used Taylor's formula**
- $$\mathrm{e^x=\sum_{n=0}^\infty\frac1{n!}x^n=1+x+\frac1{2!}x^2+\cdots\in(-\infty,+\infty)}$$
- $$\sin\mathrm{x=\sum_{n=0}^\infty\frac{(-1)^n}{(2n+1)!}x^{2n+1}=x-\frac1{3!}x^3+\frac1{5!}x^5+\cdots,x\in(-\infty,+\infty)}$$
- $$\cos\mathrm{x=\sum_{n=0}^\infty\frac{(-1)^n}{(2n)!}x^{2n}=1-\frac1{2!}x^2+\frac1{4!}x^4+\cdots,x\in(-\infty,+\infty)}$$
- $$\mathrm{ln(1+x)=\sum_{n=0}^\infty\frac{(-1)^n}{n+1}x^{n+1}=x-\frac12x^2+\frac13x^3+\cdots,x\in(-1,1]}$$
- $$\begin{aligned}&\frac1{1-\mathrm{x}}=\sum_{\mathrm{n=0}}^\infty\mathrm{x^n}=1+\mathrm{x+x^2+x^3+\cdots,x\in(-1,1)}\\&\frac1{1+\mathrm{x}}=\sum_{\mathrm{n=0}}^\infty(-1)^\mathrm{n}\mathrm{x}^\mathrm{n}=1-\mathrm{x}+\mathrm{x}^2-\mathrm{x}^3+\cdots,\mathrm{x}\in(-1,1)\end{aligned}$$
- $$\mathrm{(1+x)^a=1+\sum_{n=1}^\infty\frac{a(a-1)\cdots(a-n+1)}{n!}x^n=1+ax+\frac{a(a-1)}{2!}x^2+\cdots,x\in(-1,1)}$$

**Taylor's formula -Expand conclusion**
- Formula:
	- $$\begin{aligned}
&\sin x=x-\frac1{3!}x^3+o\left(x^3\right) \\
&\arcsin x=x+\frac16x^3+o\left(x^3\right) \\
&\tan x=x+\frac13x^3+o\left(x^3\right) \\
&\arctan x=x-\frac13x^3+o\left(x^3\right) \\
&\cos x=1-\frac1{2!}x^2+\frac1{4!}x^4+o\left(x^4\right) \\
&\mathrm{e}^x=1+x+\frac1{2!}x^2+\frac1{3!}x^3+o\left(x^3\right) \\
&\ln\left(1+x\right)=x-\frac12x^2+\frac13x^3+o\left(x^3\right) \\
&\begin{aligned}\left(1+x\right)^\alpha=1+\alpha x+\frac{\alpha\left(\alpha-1\right)}{2!}x^2+\end{aligned}\frac{\alpha(\alpha-1)(\alpha-2)}{3!}x^3+o\left(x^3\right)
\end{aligned}$$
- Recitation skills:
	- Explanation:
		- Change: Change symbol, `+ - + - + -`
		- order: factorial, such as `3`
	- Formula:
		- sin: variable order 135
		- cox: level change 124
		- arcsin: positive 13 with 6
		- tanx: Positive 13
		- arctanx: change 135
		- ex: factorial 123
		- In (1+x): starting from x, changes to 123


### 1.3.6 definite integral definition
![Pasted image 20241028004344](/assets/notes/cd7558e8969f-Pasted-image-20241028004344.png)

# Chapter 2: Derivatives and Differentials
## 2.1 derivative
**derivative definition**
- Definition:
	- If $\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$ exists, then $f$ is differentiable at $x_0$.
- Alternative form:
	- $f^{\prime}(x_0)=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}$
- Form 1: $f^{\prime}(x_0)=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$
- Form 2: $f^{\prime}(x_0)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}$

**left and right derivative**
- The relationship between the left and right derivatives: differentiable `<-->`**The left and right derivatives exist and are equal**;

## 2.2 differentiate
### 2.2.1 Method 1: sum, difference, product, and quotient rules
**algebraic manipulation law**
Assume that $u(x), \nu(x)$ can all be imported, then
- $(u\pm v)^{\prime}=u^{\prime}\pm v^{\prime}$
- $(uv)^{\prime}=u^{\prime}v+uv^{\prime}$
- $(\frac\mu\nu)^{\prime}=\frac{\mu^{\prime}\nu-\nu^{\prime}\mu}{\nu^2}\quad(\nu\neq0)$

### 2.2.2 Method 2: inverse-function differentiation rule
**inverse function differentiate**
- Formula:
	- $$(f^{-1})^{\prime}(x)=\frac1{f^{\prime}(y)}\quad\frac{dy}{dx}=\frac1{dx}$$
- Meaning:
	- function and inverse function are two functions, but they are the same curve;
	- Therefore**when the function is continuity and monotonic, it can be known that its inverse function is also differentiable**;

### 2.2.3 Method three: chain rule
**Chain Rule**
- Suppose $u=g(x)$ is differentiable at $x$ and $y=f(u)$ is differentiable at the corresponding $u$, then $y=f[g(x)]$ is differentiable at x.
- then: $\frac{dy}{dx}=f^{\prime}(u)g^{\prime}(x)$
- Other forms:
	- $$\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$$


### 2.2.4 Method 4: differentiate conclusion
**basic elementary functions**
- Basic
	- $\begin{aligned}&\quad(C)^{\prime}=0\quad&\quad(x^\alpha)^{\prime}=\alpha x^{\alpha-1}\\&\quad(a^x)^{\prime}=a^x\ln a\quad&\quad(e^x)^{\prime}=e^x\\&\quad(\log_ax)^{\prime}=\frac1{x\ln a}\quad&\quad(\ln|x|)^{\prime}=\frac1x\end{aligned}$
- trigonometric functions
	- $(\sin x)'=\cos x\qquad(\cos x)'=-\sin x$
	- $\begin{aligned}(\tan x)^{\prime}&=\sec^2x&(\cot x)^{\prime}&=-\csc^2x\\\\(\sec x)^{\prime}&=\sec x\tan x&(\csc x)^{\prime}&=-\csc x\cot x\end{aligned}$
- inverse function derivative
	- $\begin{aligned}&(\arcsin x)'=\frac1{\sqrt{1-x^2}}&&(\arccos x)'=-\frac1{\sqrt{1-x^2}}\\&(\arctan x)'=\frac1{1+x^2}&&(\operatorname{arccot}x)'=-\frac1{1+x^2}\end{aligned}$

### 2.2.5 Method 5: logarithmic differentiation
**Example**: Let $y=(1+\sin x)^x$. Find $\mathrm{d}y\big|_{x=\pi}$.
- Analysis
	- This is an exponent function type, logarithmic differentiation can be used;
- Analysis
	- Logarithm first: $\ln y=x\ln(1+\sin x)$
	- Differentiate both sides: $\frac{y'}{y}=\ln(1+\sin x)+\frac{x\cos x}{1+\sin x}$.
	- Propose $y^{\prime}$, get the derivative function
	- bring in x=Π;

**IMPORTANT CONCLUSION**
- $(\ln|x|)^{\prime}=\frac{1}{x}$

**Applicable occasions**
- 1. Power exponential function;
- 2. Continuous multiplication, continuous division, multiplication, square root;

## 2.3 higher-order derivative
**Commonly find n-order derivative**
- Index
	- $(e^{x})^{(n)}=e^{x}$
- trigonometric functions
	- $(\sin x)^{(n)}=\sin(x+n\frac\pi2)$
	- $(\cos x)^{(n)}=\cos(x+n\frac{\pi}{2})$
- `In` function
	- $(\ln(1+x))^{(n)}=(-1)^{n-1}\frac{(n-1)!}{(1+x)^n}$
- Addition
	- $(u\pm v)^{(n)}=u^{(n)}\pm v^{(n)}$
- Multiplication
	- Leibniz formula
	- $(uv)^{(n)}=\sum_{k=0}^n\binom{n}{k}u^{(k)}v^{(n-k)}$

## 2.4 Differential
**Differential Definition**
- If $f(x_0+\Delta x)-f(x_0)=A\Delta x+o(\Delta x)$, then $f(x)$ is said to be differentiable at $x _0$ point $; $
- $A\Delta x$ is called the derivative of $f(x)$ at the $x_0$ point
	- The first part is the main part of the function change
	- The second part is higher-order infinitesimal, which is the secondary part

**The relationship between differentiability, differentiability, and continuity**
![Pasted image 20240317192744](/assets/notes/fdce7bdf7363-Pasted-image-20240317192744.png)

## 2.5 Taylor's formula
**Formula**: Taylor's formula with Peano remainder
- Suppose $f(x)$ is differentiable in $n$ order at $x_0$, then:
- $$f(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o((x-x_0)^n)$$
- $$f\left(x\right)=\frac{f\left(x_{0}\right)}{0!}+\frac{f^{\prime}\left(x_{0}\right)}{1!}(x-x_{0})+\frac{f^{\prime\prime}\left(x_{0}\right)}{2!}(x-x_{0})^{2}+\ldots+\frac{f^{\left(n\right)}\left(x_{0}\right)}{n!}(x-x_{0})^{n}+o((x-x_0)^n)$$
- The remainder involving $f^{(n+1)}(\xi)$ is the Lagrange form of the remainder; a remainder written as $o\!\left((x-x_0)^n\right)$ is the Peano form.

**Formula**: Taylor's formula with `Peano` remainder - Taylor expansion of zero points
- $$\begin{gathered}\text{If }x_0=0,\text{ then}\\f(x)=f(0)+f^{\prime}(0)x+\frac{f^{\prime\prime}(0)}{2!}x^2+\cdots+\frac{f^{(n)}(0)}{n!}x^n+\frac{f^{(n+1)}(\theta x)}{(n+1)!}x^{n+1},\quad0<\theta<1.\\\text{This is the Maclaurin formula for }f(x).\end{gathered}$$


**Formula**: Taylor's formula with ` Lagrangian remainder `
- where $\xi$ is between $x$ and $x_0$, so
- $$f(x)=f(a)+f^{\prime}(a)(x-a)+\frac{f^{\prime\prime}(a)}{2!}(x-a)^2+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_{0})^{n+1}$$

# Chapter 3: mean value theorems
## 3.1 Three major theorems
**Rolle's theorem**
- Definition:
	- If three conditions are met:
	- 1)$f$ on $[a, b]$ continuity;
	- 2)$f$ is differentiable within $(a, b)$;
	- 3)f (a)=f (b)
	- So, it can be known: $$\text{ then }\exists\xi\in(a,b)\text{ , to use }f^{\prime}(\xi)=0$$
- diagram:
	- ![Pasted image 20231225142739](/assets/notes/fe8f6ba1d4ba-Pasted-image-20231225142739.png)

**Lagrange's mean value theorem**
- Definition:
	- If the following conditions are met:
	- 1)$f$ on $[a, b]$ continuity
	- 2)$f$ is differentiable within ($a, b)$
	- Therefore, there exists $\xi\in(a,b)$ such that $$f(b)-f(a)=f^{\prime}(\xi)(b-a).$$
- diagram:
	- ![Pasted image 20231225143547](/assets/notes/ec28e6c99536-Pasted-image-20231225143547.png)

**Cauchy's mean value theorem**
- Definition:
	- If the following conditions are met:
	- 1) $f,  F$ on $[a,  b]$ continuity $; $
	- 2) $f,  F$ is differentiable within $(a,  b)$, and $\forall x\in(a,  b),  F^{\prime}(x)\neq0$
	- Therefore, there exists $\xi\in(a,b)$ such that $$\frac{f(b)-f(a)}{F(b)-F(a)}=\frac{f^{\prime}(\xi)}{F^{\prime}(\xi)}.$$
- diagram:
	- ![Pasted image 20240520005038](/assets/notes/03979197c8b7-Pasted-image-20240520005038.png)

**Relationship of three major theorems**
![Pasted image 20240322225640](/assets/notes/297b431916fb-Pasted-image-20240322225640.png)

## 3.2 derivative application
**Convexity**
- Definition:
	- Let the function $f(x)$ be continuity on the interval $I$, if for any two points on $I x_1, x_2$
	- 1. If $f\left(\frac{x_1+x_2}{2}\right)<\frac{f(x_1)+f(x_2)}{2}$ for every $x_1,x_2\in I$, then $f$ is strictly convex on $I$.
	- 2. If $f\left(\frac{x_1+x_2}{2}\right)>\frac{f(x_1)+f(x_2)}{2}$ for every $x_1,x_2\in I$, then $f$ is strictly concave on $I$.
- Method:
	- Use the positive and negative values of the first derivative `->` determine the monotonicity of the function;
	- Use the positive and negative values of the second derivative `->` determine the concavity of the function;
- Test:
	- Suppose $f$ is continuous on $[a,b]$ and twice differentiable on $(a,b)$.
	- 1) If $f''(x)>0$ on $(a,b)$, then $f$ is convex (concave upward).
	- 2) If $f''(x)<0$ on $(a,b)$, then $f$ is concave (concave downward).

**Inflection Point**
- Definition:
	- A point on a continuous curve where its concavity changes.
- Possible value points:
	- 1. ${f^{\prime\prime}(x_0)=0}$；
	- 2. Points where the second derivative does not exist;

**Asymptotes**
- Definition:
	- 1) Horizontal asymptote: if $\lim_{x\to+\infty}f(x)=A$ or $\lim_{x\to-\infty}f(x)=A$, then $y=A$ is a horizontal asymptote in the corresponding direction.
	- 2) Vertical asymptote: if a one-sided limit of $f(x)$ at $x_0$ is $\pm\infty$, then $x=x_0$ is a vertical asymptote.
	- 3) Oblique asymptote: if $a=\lim_{x\to\pm\infty}\frac{f(x)}x$ and $b=\lim_{x\to\pm\infty}(f(x)-ax)$ are finite, then $y=ax+b$ is an oblique asymptote in that direction.
- Method:
	- 1. Determine the horizontal asymptote `->` When x `->` is infinite, y tends toward a finite value;
	- 2. Determine the vertical asymptote `->` When x `->` a certain point (finite value), y approaches infinity;
	- 3. Determine the oblique asymptote
		- `->` $\lim_{x\to\infty}\frac{f(x)}x=a$ Finite value;
		- `->` $\lim_{x\to\infty}(f(x)-ax)=b$ exist
		- At this time, there is an oblique asymptote;

# Chapter 4: Indefinite Integrals
## 4.1 Fundamentals of Indefinite Integrals
### 4.1.1 Basic Concepts
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

### 4.1.2 Basic Formulas
**Basic Formulas**
$$1、\int adx=ax+C\:,\:a\text{ This is a constant }$$
$$2、\int x^{a}dx=\frac{x^{a+1}}{a+1}+C,\,\text{ where } a \text{ is a constant, and } a\neq-1$$
$$3、\int\frac{1}{x}dx=\ln|x|+C$$
$$4、\int e^{x}dx=e^{x}+C$$
$$5.\quad\int a^{x}dx=\frac{a^x}{\ln a}+C,\qquad a>0,\ a\neq1$$
$$6、\int\sin xdx=-\cos x+C$$
$$7、\int\cos xdx=\sin x+C$$
$$8、\int\sec^{2}xdx=\tan x+C$$
$$9、\int\csc^{2}xdx=-\cot x+C$$
$$10、\int\tan xdx=-\ln|\cos x|+C$$
$$11、\int\cot xdx=\ln\lvert\sin x\rvert+C$$
$$12、\int\sec xdx=\ln\lvert\sec x+\tan x\rvert+C$$
$$13、\int\csc xdx=-\ln\lvert\csc x+\cot x\rvert+C$$
$$14、\int\frac{dx}{1+x^2}=\arctan x+C$$
$$15、\int\frac1{\sqrt{a^2-x^2}}dx=\arcsin\frac xa+C$$
$$16、\int\frac1{x^2-a^2}dx=\frac1{2a}\ln\left|\frac{x-a}{x+a}\right|+C$$
$$17、\int\frac{dx}{\sqrt{1-x^2}}=\arcsin x+C$$
$$18、 \int\frac 1{a^2+x^2}dx=\frac 1 a\arctan\frac xa+C$$
$$19、\int\frac{dx}{\sqrt{x^2+a^2}}=\ln (x+\sqrt{x^2+a^2})+C$$
$$20、\int\frac{dx}{\sqrt{x^2-a^2}}=\ln\left|x+\sqrt{x^2-a^2}\right.|+C$$

**Trigonometric Function Collection**
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


## 4.2 Solving Indefinite Integrals
### 4.2.1 Method One: First Type of Substitution Integral
**First Type of Substitution Integral Method**
- Definition:
	- Also known as the convergent differential method;
	- If $\int f(u)\mathrm{d}u=F(u)+C$, $\text{ then }\int f[\varphi(x)]\varphi^{\prime}(x)\operatorname{d}x=\int f[\varphi(x)]\operatorname{d}\varphi(x)=F[\varphi(x)]+C$

**Summary of Differential Forms for Combining Differentials**: Common functions
- 1. $$\int f( ax+ b) dx= \frac 1a\int f( ax+ b)d( ax+ b)$$
- 2. $$\int x^mf( ax^{m+ 1}+ b)dx=\frac 1{( m+ 1) a}\int f( ax^{m+ 1}+ b)d(ax^{m+1}+ b)\quad\quad\quad ( m\neq- 1) $$
- 3. $$\int f( \sqrt {x}) \frac {\mathrm{d} x}{\sqrt {x}}= 2\int f( \sqrt {x})d( \sqrt x)$$
- 4. $$\int f( e^x) \mathrm{e} ^xdx= \int f( \mathrm{e} ^x)d(\mathrm{e} ^x)$$
- 5. $$\int f(\ln x)\:\frac{1}{x}\mathrm{d}x=\int f(\ln x)\mathrm{d}(\ln x)$$

**Summary of Differential Forms**: Common Trigonometric Functions
- 1. $$\int f(\sin x)\cos\:x\mathrm{d}x=\int f(\sin x)\mathrm{d}(\sin x)$$
- 2. $${\int}f(\cos x)\sin x\mathrm{d}x=-{\int}f(\cos x)\mathrm{d}(\cos x)$$
- 3. $$\int f(\tan x)\:\frac{1}{\cos^{2}x}\mathrm{d}x=\int f(\tan x)\mathrm{d}(\tan x)$$
- 4. $${\int}f(\arcsin x)\:\frac{1}{\sqrt{1-x^2}}\mathrm{d}x=\int f(\arcsin x)\mathrm{d}(\arcsin x)$$
- 5. $${\int}f(\arctan x)\:\frac1{1+x^2}\mathrm{d}x=\int f(\arctan x)\mathrm{d}(\arctan x)$$


### 4.2.2 Method Two: Second Type of Substitution Integral
**Second Type of Substitution Integral Method**
- Definition:
	- $$\int f(x)\mathrm{d}x=\int f[\varphi(t)]\varphi^{\prime}(t)\mathrm{d}t=F(t)+C=F[\varphi^{-1}(x)]+C$$
- Method:
	- The key is choosing a substitution: express $x$ in terms of a new variable, integrate, and then substitute back.

**Form Summary**
 - The following three forms: $$\begin{aligned}&\sqrt{a^2-x^2} \\&\sqrt{a^2+x^2} \\&\sqrt{x^2-a^2}\end{aligned}$$
- Standard substitutions are: $$\begin{aligned}x&=a\sin t&&\text{for }\sqrt{a^2-x^2},\\\\x&=a\tan t&&\text{for }\sqrt{a^2+x^2},\\\\x&=a\sec t&&\text{for }\sqrt{x^2-a^2}.\end{aligned}$$

- Purpose: eliminate the radical and simplify the integrand.

### 4.2.3 Method 3: Integration by Parts
**Integration by Parts**
- Definition:
	- Let $u(x),\nu(x)$ have consecutive first-order derivatives, then $\int udv=uv-\int vdu$
- Method:
	- Suitable for**multiplying two different functions**;

**Usage Scenarios**
- Multinomial function × Exponent|Trigonometry:
	- 1. $\int p_n(x)e^{ax}\operatorname{d}x$
		- Score the index
	- 2. $\int p_n(x)\sin ax\operatorname{d}x$
		- Triangle Together
	- 3. $\int p_n(x)\cos axdx$
		- Triangle Together
- Multinomial Functions × Logarithm | Inverse Triangle:
	- 4. $\int P_n(x)\ln xdx$
		- Fill in polynomials
	- 5. $\int P_n(x)\arctan xdx$
		- Fill in polynomials
	- 6. $\int P_n(x)\arcsin xdx$
		- Fill in polynomials
- Exponential × Trigonometric Function
	- 7. $\int e^{\alpha x}\sin\beta xdx$
		- Either factor can be chosen first when applying integration by parts.
	- 8. $\int e^{\alpha x}\cos\beta xdx$
		- Either factor can be chosen first when applying integration by parts.

# Chapter 5: Definite and Improper Integrals
## 5.1 Concept of Definite Integrals
**Definite Integral Definition**
- Definition:
	- $f(x)$ is bounded on $[a,b]$, arbitrarily insert a node on $[a,b]$, divide into n small intervals $\Delta x_{1}\Delta x_{2}\cdots\Delta x_{n}$, take any point i, and have: $$\int_{a}^{b}f(x)dx=\lim_{λ\to0}\sum_{x=1}^{n}f(\xi_{i})\Delta x_{i}$$
	- Where: $$\lambda=\max\{\Delta x_{1}\cdots\Delta x_{n}\}$$
- Existence of definite integrals:
	- Condition 1: $f(x)$ is continuously `->` integrable on $[a,b]$;
	- Condition 2: $f(x)$ is bounded on $[a,b]$ and has a finite number of discontinuities `->` integrable;
	- Condition 3: $f(x)$ There are only a finitely many Type I discontinuities on $[a,b]$;
- Summary:
	- Being bounded is a necessary condition for the existence of definite integrals;
	- An integrable integral is a sufficient condition for the existence of definite integrals;

**Properties of Definite Integrals**
- 1. $$\int_{a}^{b}(\alpha f(x)+\beta g(x))dx=\alpha\int_{a}^{b}f(x)dx+\beta\int_{a}^{b}g(x)dx$$
- 2. $$\int_{a}^{b}f\left(x\right)dx=-\int_{b}^{a}f\left(x\right)dx$$
- 3. When $a<c<b$: $$\int_{a}^{b}f\left(x\right)dx=\int_{a}^{c}f\left(x\right)dx+\int_{c}^{b}f\left(x\right)dx$$

## 5.2 Upgraded Limit Points
**Fundamental Theorem of Calculus**
- Definition:
	- If $f(x)$ continuity is on $[a,  b]$, then: $\int_a^xf(t)\mathrm{d}t$ is differentiable on $[a,  b]$, and there is $$(\int_a^xf(t)\mathrm{d}t)^{\prime}=f(x)$$
- Other conclusions:
	- $$(\int_{\varphi(x)}^{\psi(x)}f(t)dt)^{\prime}=f(\psi(x))\psi^{\prime}(x)-f(\varphi(x))\varphi^{\prime}(x)$$

**Parity of Integral Upper Limit Functions**
- 1. If f(x) is an odd function, then $\int_0^xf(t)dt$ is even;
- 2. If f(x) is an even function, then $\int_0^xf(t)dt$ is an odd function;

**Three Major Methods to Limit Points for Upgrades**
- Method 1: Formula calculation
	- Example: $$(\int_{e^{x}}^{x^{2}}f(t)dt)^{\prime}=f(x^{2})\cdot2x-f(e^{x})e^{x}$$
- Method 2: Extract x
	- Example: $$\int_{0}^{x}(x-t)f(t)dt;=x\int_{0}^{x}f(t)dt-\int_{0}^{x}tf(t)dt$$
	- The integral domain and the integrand contain x;
	- When x can be proposed: split the terms and extract x;
- Method 3: Substitution method
	- Example: $$\int_{0}^{x}cos(x-t)^{2}dt\frac{x-t=u}{}\int_{0}^{x}cos u^{2}du$$
	- The integral domain and the integrand contain x;
	- When x cannot be proposed: substitute;
		- Note: When substituting a substitution, x is a constant, and t and u are the integrand variables;
	- Example: When there is no x in both upper and lower limits, but x is present in the integral, you need to replace x and substitute it into the upper and lower limits;
		- After $x+t=u$: $$\int_{1}^{2}f(x+t)dt=\int_{x+1}^{x+2}f(u)du$$

## 5.3 Calculation of Definite Integrals
### 5.3.1 Method One: Newton-Leibniz Formula
**Calculation Basics**: Newton-Leibniz formula
- Definition:
	- Let $F(x)$ be an antiderivative of the continuous function $f(x)$ on $[a,  b]$, then: $\int_{a}^{b}f(x)dx=F(b)-F(a)$, also called the basic formula of calculus;

### 5.3.1 Method Two: Substitution of Definite Integrals
**Official**
- $$\int_{a}^{b}f(x)\operatorname{d}x=\int_{\alpha}^{\beta}f(\varphi(t))\varphi^{\prime}(t)\operatorname{d}t$$

### 5.3.2 Method 3: Integration by Parts of Definite Integrals
**Official**
- $$\int_{a}^{b}u\operatorname{d}v=uv\bigg|_{a}^{b}-\int_{a}^{b}v\operatorname{d}u$$

### 5.3.3 Method 4: Properties of Definite Integrals
**Method One:**Use parity and periodicity
- $$\int_{-a}^af(x)\operatorname{d}x=\begin{cases}0,&f(x)&\text{ is the odd function, }\\2\int_0^af(x)\operatorname{d}x,&f(x)&\text{ is an even function }.\end{cases}$$
- $$\int_a^{a+T}f(x)\operatorname{d}x=\int_0^Tf(x)\operatorname{d}x.$$

**Method 2:**Use existing formulas
- $$\begin{aligned}(1)&\int_0^{\frac\pi2}\sin^nx\operatorname{d}x=\int_0^{\frac\pi2}\cos^nx\operatorname{d}x=\begin{cases}\frac{n-1}n\frac{n-3}{n-2}\cdots\frac12\frac\pi2,&n\text{ Sorry }\\\frac{n-1}n\frac{n-3}{n-2}\cdots\frac23,&n\text{ Strange }&\end{cases}\\(2)&\int_0^{\pi}x\cdot f(\sin x)\operatorname{d}x=\frac\pi2\int_0^{\pi}f(\sin x)\operatorname{d}x\end{aligned}$$

**Method 3**: Common conclusions
- 1. $$\int_{0}^{a}\sqrt{a^{2}-x^{2}}dx=\frac{\pi a^{2}}{4}(a>0)$$
- 2. $$\int_{0}^{a}\sqrt{2ax-x^{2}}dx=\frac{\pi}{4}a^{2}$$
- 3. $$\int_{0}^{2a}\sqrt{2ax-x^{2}}dx=\frac{\pi}{2}a^{2}$$


## 5.4 Improper Integral
**Two Types of Improper Integrals**
- Improper integrals over an infinite interval:
	- $$\int_{a}^{+\infty}f(x)dx=\lim_{t\to+\infty}\int_{a}^{t}f(x)dx$$
	- $$\int_{-\infty}^{b}f(x)dx=\lim_{t\to-\infty}\int_{t}^{b}f(x)dx$$
- Improper integrals of infinite functions:
	- $$\int_a^bf(x)dx=\lim_{t\to a^+}\int_t^bf(x)dx$$
	- $$\int_{a}^{b}f(x)dx=\lim_{t\to b^{-}}\int_{a}^{t}f(x)dx.$$
	- $$\int_{a}^{b}f(x)dx=\int_{a}^{c}f(x)dx+\int_{c}^{b}f(x)dx$$

**Question Type 1**: Determine the convergence and divergence of anomalous integrals
- 1. Definition method;
	- Find an antiderivative of the integrand and evaluate its limit at the improper endpoint to determine convergence.
- 2. Comparative discriminant;
	- Comparative law;
	- The limit form of the comparative method;
- 3. P Integral;
	- Improper integrals of infinity
		- $$\int_{a}^{+\infty}\frac{1}{x^{P}}dx\begin{cases}P>1&\text{ Convergence }\\P\leq1&\text{ Diverges }\end{cases}(a>0)$$
		- Convergence at `->` $P>1$, divergence at $P<1$
	- Improper integral of unbounded functions
		- $$\int_a^b\frac1{\left(x-a\right)^P}dx,\int_a^b\frac1{\left(b-x\right)^P}dx\quad\begin{cases}{P}<1&\text{ Convergence }\\P\geq1&\text{ Diverges }\end{cases}$$
		- Convergence at `->` $P<1$, divergence at $P>1$
- Use whichever is most convenient;

**Problem Type 2**: Calculation of Improper Integrals
- Calculate a definite integral + calculate a limit;
- Method 1: Substitution method
- Method 2: Partial Method

## 5.5 Application of Definite Integrals
**Area of Plane Figures**
- Scenario 1: Plane coordinates
	- If the plane field $D$ is enclosed by curves $y=f(x),y=g(x)(f(x)\geq g(x))$ and $x=a,\quad x=b\quad(a<b)$, then:
	- $$S=\int_{a}^{b}[f(x)-g(x)]dx$$
- Scenario 2: Polar coordinates
	- If the plane field $D$ is enclosed by curve $\rho=\rho(\theta),\theta=\alpha,\theta=\beta(\alpha<\beta)$, then:
	- $$S=\frac 12\int_\alpha^\beta\rho^2 (\theta)\mathrm{d}\theta$$

**Volume of a Rotating Body**
- 1. When rotating around the X-axis: $$V_{x}=\pi\int_{a}^{b}f^{2}(x)\operatorname{d}x$$
- 2. When rotating around the Y-axis: $$V_y=2\pi\int_a^bxf(x)\operatorname{d}x$$
- 3.![Pasted image 20241028004801](/assets/notes/a9dde9afbd29-Pasted-image-20241028004801.png)

**Calculation of Arc Length**
- $$\begin{aligned}
&1)C:y=y(x),\quad a\leq x\leq b,\quad s=\int_a^b\sqrt{1+{y^{\prime}}^2}dx \\
&2)C:\begin{cases}x=x(t)\\y=y(t)\end{cases}\alpha\leq t\leq\beta.\quad s=\int_\alpha^\beta\sqrt{x^{\prime2}+y^{\prime2}}dt \\
&3)C:\rho=\rho(\theta),\alpha\leq\theta\leq\beta.\quad s=\int_{\alpha}^{\beta}\sqrt{\rho^{2}+{\rho^{\prime}}^{2}}d\theta
\end{aligned}$$
![Pasted image 20241028004817](/assets/notes/e81c061c281f-Pasted-image-20241028004817.png)
# Chapter 6: Differential Equations
## 6.1 First-Order Differential Equations
**Question Type 1**: Separable variables
- Format:
	- $$y^{\prime}=f(x)g(y)$$
- Method:
	- $\frac{dy}{dx}=f(x)g(y)$ can be separated as $\frac{dy}{g(y)}=f(x)\,dx$; this is a separable differential equation.
	- Solutions of separable variables: Two-sided integral $$\int\frac{dy}{g(y)}=\int f(x)dx$$

**Problem Type 2**: First-order homogeneous equations
- Format:
	- $$\frac{dy}{dx}=\varphi(\frac{y}{x})$$
- Method:
	- Step zero: Organize into homogeneous equations with only $\frac{dy}{dx}$ on the left, i.e., $\frac{dy}{dx}=\varphi(\frac{y}{x})$;
	- Step one: Write down the $u=\frac{y}{x}$
	- Step 2: Since $y=xu$, after taking the derivative of y, we get $\frac{dy}{dx}=u+x\frac{du}{dx}$, which is the expression for $y^{\prime}=\frac{dy}{dx}=u+x\frac{du}{dx}=u+xu^{\prime}$;
	- Step 3: Substitute into the original differential equation to obtain $u+x\frac{du}{dx}=\varphi(u)$, which is separable.
		- That is: turn it into a separable variable and solve;

**Problem Type 3**: First-order linear equations
- Format:
	- $$y^{\prime}+P(x)y=Q(x)$$
- Method:
	- Organize into standard form with general solution formulas
	- $$y=e^{-\int p(x)dx}\left[\int Q(x)e^{\int p(x)dx}dx+C\right]$$

## 6.2 Second-Order Differential Equations
**Problem Type 4**: Second-order constant coefficient homogeneous equation
- Format:
	- $$y^{\prime\prime}+py^{\prime}+qy=0$$
- Method:
	- Step 1: Write the characteristic equation
	- Step 2: Find the characteristic roots.
	- Step 3: Write the corresponding general solution.
		- For two distinct real roots:
			- General solution: $y=C_1e^{r_1x}+C_2e^{r_2x}$
		- For a repeated real root:
			- General solution: $y=e^{rx}(C_1+C_2x)$
		- For conjugate complex roots $r_{1,2}=\alpha\pm i\beta$:
			- General solution: $y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$

**Problem Type 5**: Second-order linear nonhomogeneous equations with constant coefficients
- Format:
	- Equation: $$y^{\prime\prime}+py^{\prime}+qy=f(x)$$
	- Two non-homogeneous terms:
		- 1. $$f(x)=e^{\lambda x}P_m(x)$$
		- 2. $$f (x)=e^{\alpha x}\left\lfloor P_{l}^{(1)}(x)\cos\beta x+P_{n}^{(2)}(x)\sin\beta x\right\rfloor$$
**Summary**: Method
- 1. Split the forcing term into components when necessary and find a particular solution for each component.
- 2. Find the general solution of the associated homogeneous equation.
	- Step 1: Write the characteristic equation
	- Step 2: Find the characteristic roots.
	- Step 3: Write the corresponding general solution.
		- Note:
			- In homogeneous general solutions, $e$ is $e^{r x}$, not $e^{\lambda x}$
			- Here $r$ denotes a characteristic root; it is distinct from the parameter $\lambda$ in the forcing term.
		- For a single real root:
			- General solution: $y=C_1e^{r_1x}$
		- For two distinct real roots:
			- General solution: $y=C_1e^{r_1x}+C_2e^{r_2x}$
		- For a repeated real root:
			- General solution: $y=e^{rx}(C_1+C_2x)$
		- For conjugate complex roots $r_{1,2}=\alpha\pm i\beta$:
			- Here $\beta$ is the magnitude of the imaginary part of the roots.
			- General solution: $y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$
- 3. Choose a trial particular solution $y^{*}$:
	- For each component, use a trial form such as $y^{*}=x^{k}Q_{m}(x)e^{\lambda x}$ or $y^{*}=x^{k}e^{\alpha x}\bigl[R_{m}^{(1)}(x)\cos\beta x+R_{m}^{(2)}(x)\sin\beta x\bigr]$.
- 4. Determine each part of the trial particular solution:
	- $e^{\lambda x}$ or $e^{\alpha x}$
		- `->` Directly taken from the original expression `->` and also set the value of this $\lambda$ or $\alpha$;
	- $Q_m(x)$
		- Based on the $P(x)$ situation, analyze:
		- If $P(x)$ is in case 1: $P_{m}(x)$
			- Observe the $P_{m}(x)$ of the original form
			- If it is a constant term, set to $a$;
			- If it is a linear term, set to $ax+b$;
			- If it is quadratic, set to $ax^2+bx+c$;
		- If $P(x)$ is case two: $\bigl[R_{m}^{(1)}(x)\cos\beta x+R_{m}^{(2)}(x)\sin\beta x\bigr]$
			- If both cos and sin exist:
				- Take the highest term between $P_{l}^{(1)}(x)$ and $P_{n}^{(2)}(x)$ in the original expression;
					- The original formula is $f (x)=e^{\alpha x}\left\lfloor P_{l}^{(1)}(x)\cos\beta x+P_{n}^{(2)}(x)\sin\beta x\right\rfloor$
				- If it is a constant term, set to $A\sin x+B\cos x$;
				- If it is a linear term, set it to $(Ax+B)\sin x+(Cx+D)\cos x$ similar to this form;
			- If only one of the sine or cosine terms appears:
				- Use its polynomial degree as the maximum degree, but include both sine and cosine terms in the trial solution.
	- $x^{k}$
		- Determine the $k$ of $x^{k}$:
		- If it's case one:
			- The value of $k$ is the multiplicity of $\lambda$ as a root of the characteristic equation of the associated homogeneous equation.
			- Example: If the characteristic roots are $r_1=3$ and $r_2=1$, while $\lambda=2$, then $\lambda$ is not a characteristic root, so $k=0$.
		- If it's case two:
			- Set $k$ equal to the multiplicity of $\alpha+i\beta$ as a characteristic root.
				- $\alpha$ from $e^{\alpha x}$, $\beta$ from trigonometric functions in $P_{l}^{(1)}(x)\cos\beta x+P_{n}^{(2)}(x)\sin\beta x$;
			- If $\alpha+i\beta$ is not a characteristic root, $k=0$; if it is a simple root, $k=1$; if it is a double root, $k=2$.
			- Note:
				- If $r_{1,2}=\pm1$, then $1$ and $-1$ are two distinct simple roots; the $\pm$ notation does not indicate a repeated root.
- 5. Determine the coefficient and any constant
	- (1) Determine the coefficients in the trial particular solution.
		- After setting the components of $y^{*}$ earlier, since there are still coefficients to be determined in $y^{*}$, replace the original equation with the set function, compare the coefficients of the same power at both ends, and then obtain the result of $y^{*}$;
		- If the current equation is $y^{\prime\prime}+y=\sin x$, you need to substitute $y({*})$ and $y^{\prime\prime}(*)$ into the original equation, then compare the coefficients of the power at both ends to obtain the results of each coefficient in $y^{*}$;
	- (2) Determine the arbitrary constants $C_1$ and $C_2$.
		- Use the two initial or boundary conditions supplied in the problem, for example $f(0)=0$ and $f^{\prime}(0)=1$.
		- Substitute them into the complete general solution $y=y_h+y_p$ and solve for the constants.
- 6. For differential equations of order 3 or above, combine them as follows
	- ![Pasted image 20240815124753](/assets/notes/2de21b80bc72-Pasted-image-20240815124753.png)
- 7. To obtain the solution satisfying specified initial or boundary conditions, substitute those conditions into the general solution and determine $C_1$ and $C_2$.
- Supplement:
	- 1. The difference of any two solutions of the same nonhomogeneous equation is a solution of the associated homogeneous equation.
	- 2. Solutions to nonhomogeneous terms are superpositional;

**Problem Type 6**: $y^{\prime\prime}=f(x,y^{\prime})$ type descending equation
- Format:
	- $$y^{\prime\prime}=f(x,y^{\prime})$$
- Method:
	- Order: ${y^{\prime}=P,y^{\prime\prime}=\frac{dP}{dx}}$
	- Get: $\frac{dp}{dx}=f(x,p)$ First-order equations for p and x, then separate the variables;

**Problem Type 7**: $y"=f(y,y^{\prime})$ descending equation
- Format:
	- $$y"=f(y,y^{\prime})$$
- Method:
	- Set: $y^{\prime}=P$, $y^{\prime\prime}=\frac{dp}{dy}P$;
	- Become a first-order equation with only y and p and no x, then use the method of separating variables;

# Chapter 7: Multivariable Differential Calculus
## 7.1 Fundamentals of Multivariable Functions
**Definition**: Limits of multivariable functions
- $$\lim_{(x,y)\to(x_0,y_0)}f(x,y)=A$$

**Definition**: Continuity of multivariable functions
- $$\lim_{(x,y)\to(x_0,y_0)}f(x,y)=f(x_0,y_0)$$

**Definition**: Partial derivative
- Against X:
	- $$\lim_{\Delta x\to0}\frac{f\left(x_{0}+\Delta x,y_{0}\right)-f\left(x_{0},y_{0}\right)}{\Delta x}$$
	- Other forms: $$\frac{\partial f(x,y)}{\partial x}$$
- For Y:
	- $$lim_{\Delta y\to0}\frac{f(x_{0},y_{0}+\Delta y)-f(x_{0},y_{0})}{\Delta y}$$
	- Other forms:
		- $$\frac{\partial f(x,y)}{\partial y}$$

**Definition**: The geometric meaning of partial derivatives
- Curved surfaces $Z=f(x,y)$
- 1. $f_x(x_0,y_0)$ represents the tangent line to $y=f(x)$ on the $y=f(x)$ line, $x_0$;
- 2. $f_y(x_0,y_0)$ represents the tangent line to $x=f(y)$ on the $x=f(y)$ line, $x_0$;

**Definition**: Higher-order partial derivative
- $$\frac{\partial}{\partial x}\biggl(\frac{\partial z}{\partial x}\biggr)=\frac{\partial^{2}z}{\partial x^{2}}=f_{xx}^{\prime\prime}\quad\frac{\partial}{\partial y}\biggl(\frac{\partial z}{\partial x}\biggr)=\frac{\partial^{2}z}{\partial x\partial y}=f_{xy}^{\prime\prime}$$
- $$\frac{\partial}{\partial x}\Bigg(\frac{\partial z}{\partial y}\Bigg)=\frac{\partial^{2}z}{\partial y\partial x}=f_{yx}^{\prime\prime}\quad\frac{\partial}{\partial y}\Bigg(\frac{\partial z}{\partial y}\Bigg)=\frac{\partial^{2}z}{\partial y^{2}}=f_{yy}^{\prime\prime}$$

- And: $$\frac{\partial^2z}{\partial x\partial y}=\frac{\partial^2z}{\partial y\partial x}$$

**Definition**: The total differential of a multivariable function
- If $\Delta z=f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)=A\Delta x+B\Delta y+o(\rho)$, then the function $z=f(x,y)$ is called differentiable at point $(x_0,y_0)$;
- That is: $$dz=A\Delta x+B\Delta y$$

**Theorem**: A necessary condition for differentiability
- If $z=f(x,y)$ is differentiable at $(x_0,y_0)$, then both partial derivatives exist there and $\mathrm{d}z=\frac{\partial z}{\partial x}\mathrm{d}x+\frac{\partial z}{\partial y}\mathrm{d}y$.
- Differentiable `->` Differentiable;
- Differentiable `-x>` Differentiable;
- First-order partial derivative continuous `->` differentiable;
- Differentiable `-x>` First partial derivative continuous;

**Theorem**: A sufficient condition for differentiability
- If both first-order partial derivatives of $z=f(x,y)$ are continuous at $(x_0,y_0)$, then $z$ is differentiable at that point.

**Problem Solving**: Judgments of differentiable, differentiable, continuous, and partial differentiations of continuity
- Determining whether differentiable:
	- 1. Definition:
		- Step 1: Determine whether $f_{x}(x_{0},  y_{0})$ and $f_{y}(x_{0},  y_{0})$ both exist;
		- Step 2: Use the following definitions to determine whether a double limit exists;
			- Formula: $$\lim_{(\Delta x,\Delta y)\to(0,0)}\frac{\Delta z-[f_{x}(x_{0},y_{0})\Delta x+f_{y}(x_{0,}y_{0})\Delta y]}{\sqrt{\left(\Delta x\right)^{2}+\left(\Delta y\right)^{2}}}$$
- Determining whether it is differentiable:
	- 1. Definition method: Find the partial derivative of x and y separately, use partial derivatives to define and analyze whether the univariate function derivative corresponding to the partial derivative exists;
		- Formula (X partial derivative): $$\lim_{\Delta x\to0}\frac{f\left(x_{0}+\Delta x,y_{0}\right)-f\left(x_{0},y_{0}\right)}{\Delta x}$$
	- 2. Bring first, ask later:
- Determining continuity:
	- 1. Definition:
		- (1) Prove continuity: Whether the function value at a certain point equals the limit value of that function; if equal, then continuous;
		- (2) Proving discontinuity: same;
	- 2. Special `y` Value Method:
		- Substitute a fixed y function into a function, often used to prove discontinuity;
		- Common Forms:
			- $y=kx$
			- $y=0$
- Determining whether the partial derivative is continuous:
	- Note:
		- Multivariable function continuous `≠` Multivariable function partial derivative continuous;
		- Whether the partial derivative is continuous refers to whether the**partial derivative of the derivative with respect to X or Y**is continuous;
	- 1. Definition method: Use partial derivative functions with respect to X or Y to solve:
		- If the following formula does not hold, the partial derivative is discontinuous;
		- Formula (partial derivative function with respect to X): $$\lim_{x\to0,y\to0}f_{x}(x,y)=f_{x}(0,0)$$

## 7.2 Multivariable Differential Methods
Problems in multivariable function differentiation:
- (1) Differential method for composite functions;
- (2) Implicit function differentiation;

**Theorem**: The differentiation rule for multivariable composite functions
- Let $u=u(x,y)$ and $v=v(x,y)$ have first-order partial derivatives, and let $z=f(u,v)$ have continuous first-order partial derivatives. Then the composite function $z=f(u(x,y),v(x,y))$ has:
- $$\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x},\qquad\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial y}$$

**Theorem**: Invariance of the form of the whole differential
- Let functions $z=f(u,v),\quad u=u(x,v)$ and $\nu=\nu(x,y)$ have continuous first-order partial derivatives, then the total differential invariance of the composite function $z=f[u(x,y),v(x,y)]$:
	- $$\mathrm{d}z=\frac{\partial z}{\partial x}\mathrm{d}x+\frac{\partial z}{\partial y}\mathrm{d}y=\frac{\partial z}{\partial u}\mathrm{d}u+\frac{\partial z}{\partial v}\mathrm{d}v.$$
- Multivariable functions also have the invariance of differential forms;
	- Therefore: $$\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x},\qquad\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial y}.$$

**Definition**: Multivariable function implicit function
- The implicit function $y=(x)$ determined by equation $F(x, y)=0$ gives:
- $$y^{\prime}=-\frac{F_{x}^{\prime}}{F_{y}^{\prime}}$$

**Theorem**: The existence theorem of implicit functions
- 1. $F(x,y)$ Continuously partial differentiable within the neighborhood of point $M_0(x_0,y_0)$;
- 2. $F(x_0,y_0)=0$；
- 3. $F_y\:\prime(x_0,y_0)\neq0$
- Then function $F(x,y)$ in the $M_{0}$ neighborhood uniquely determines a continuous differentiable function $y=f(x)$ to $y_0=f(x_0)$
- then: $$\frac{dy}{dx}=-\frac{F_{x}'}{F_{y}'}$$

**Theorem**: The existence of a theorem for multivariable implicit functions
- $F(x,y,z)$ is continuously differentiable in the $M_{0}(x_{0},y_{0},z_{0})$ neighborhood, and $F(x_{0},y_{0},z_{0})=0,F_{z}\:{\prime}(x_{0},y_{0},z_{0})\neq0$ is uniquely determined by $F(x,y,z)=0$ in the $M_{0}$ neighborhood of a continuous differentiable function $z=\varphi(x,y)$ and $z_0=\varphi(x_0,y_0)$
- Therefore, $$\frac{\partial z}{\partial x}=-\frac{F_{x}^{\prime}}{F_{z}^{\prime}},\qquad\frac{\partial z}{\partial y}=-\frac{F_{y}^{\prime}}{F_{z}^{\prime}}.$$
## 7.3 Extrema and Extrema of Multivariable Functions
**Definition**: Extremum of multivariable functions
- In a neighborhood, the maximum or minimum value of the multivariable function;
- If the inequality always holds in a neighborhood of point $(x_0,y_0)$: $$f(x,y)\leq f(x_0,y_0)\quad(f(x,y)\geq f(x_0,y_0))$$
- Then $f$ has a local maximum (minimum) at $(x_0,y_0)$, and $(x_0,y_0)$ is called a local maximum (minimum) point.
- The maximum and minimum are collectively called extremums, while the maximum and minimum points are collectively called extremum points;

**Definition**: The dwell point of a multivariable function
- The point where the partial derivative of a multivariable function equals zero is called the stationary point of the multivariable function;

**Theorem**: A necessary condition for the existence of extrema in multivariable functions
- If $z=f(x,y)$ has a partial derivative at point $(x_0,y_0)$ and takes an extremum at $(x_0,y_0)$, then there is: $$f_{x}^{\prime}(x_{0},y_{0})=0,\,f_{y}^{\prime}(x_{0},y_{0})=0$$

**Theorem**: Sufficient condition for an extremum
**Determining the Extreme Value of Static Points in Multivariable Functions**
- When $z=f(x,y)$ has a second-order continuous partial derivative in a neighborhood of point $P_0(x_0,y_0)$, and $f_x^{\prime}(x_0,y_{0})=f_y^{\prime}(x_0,y_{0})=0$, $A=f_{xx}^{\prime\prime}(x_{0},y_{0})\quad\quad B=f_{xy}^{\prime\prime}(x_{0},y_{0})\quad\quad C=f_{yy}^{\prime\prime}(x_{0},y_{0})$;
- 1. If it is $AC-B^{2}>0$, then there are extremes
	- 1. A<0 is the maximum;
	- 1. A>0 is the minimum value;
- 1. If it is $AC-B^{2}<0$, then there is no extreme value
- 2. If it is $AC-B^{2}=0$, then it can only be determined by definition

**Definition**: Conditional extremum
- Given $z=f(x,y)$, its extremum is under the condition $\varphi(x,y)=0$, find its extremum as the conditional extremum;

**Theorem**: Lagrange multiplier method
- (1) For a single constraint: let $F(x,y,\lambda)=f(x,y)+\lambda\varphi(x,y)$
	- Then the necessary condition for obtaining the extremum is: $$\begin{cases}F_x=f_x^{\prime}(x,y)+\lambda\varphi_x^{\prime}(x,y)=0,\\F_y=f_y^{\prime}(x,y)+\lambda\varphi_y^{\prime}(x,y)=0,\\F_\lambda=\varphi(x,y)=0,\end{cases}$$
- (2) When multiple constraints: the extremum of the condition under $f(x,y,z)\text{ In terms of conditions }\varphi(x,y,z)=0,\psi(x,y,z)=0$
	- Ling $F(x,y,z,\lambda,\mu)=f(x,y,z)+\lambda\varphi(x,y,z)+\mu\psi(x,y,z)$

# Chapter 8: Multiple Integrals
## 8.1 Double Integral
**Definition**: Double integral
- If $f(x,y)$ is a bounded function on region D, divide region D arbitrarily into n regions: $\sigma_{1}$, $\sigma_{2}$... $\sigma_{n}$, take any point $(\xi_{i},\eta_{i})$ on each $\sigma_{n}$ and do $f(\xi,\eta_{i})\Delta\sigma_{i}$, when $\lambda\to0$:
- The following expression is called a double integral: $$\lim_{\lambda\to0}\sum_{i=1}^{n}\Delta\sigma_{i}f\left(\xi_{i},\eta_{i}\right)=\int\int_{D}f(x,y)d\sigma $$

**Theorem**: Properties of double integrals
- （1）
	- If on D, $f(x,y)\leq g(x,y)$, then there is an inequality:
	- $$\int\int_Df(x,y)d\sigma\leq\int\int_Dg(x,y)d\sigma $$
- （2）
	- If there is a $m\leq f(x,y)\leq M$ on $D$, then:
	- $$mS\leq\iint_Df(x,y)\mathrm{d}\sigma\leq MS$$
- （3）
	- The absolute value of an integral, which is less than the absolute value
	- $$\left|\iint_Df(x,y)\mathrm{d}\sigma\right|\leq\iint_D\left|f(x,y)\right|\mathrm{d}\sigma.$$
- （4）
	- If $f(x,y)$ on region `D` is always equal to `1`, then its double integral is:
	- $$\int\int_{D}\left(1)  d\sigma=\sigma\times1\right.$$

**Theorem**: The mean value theorem for double integrals
- Let the function $f(x,y)$ be continuous on the closed region `D`, `S` be the area of region `D`, then there is at least a bit of $(\xi,\eta)$ on `D`, such that $$\iint_Df(x,y)\mathrm{d}\sigma=f(\xi,\eta)\cdot S$$

## 8.2 Calculation of Double Integrals
**Suitable for polar coordinates**
- (1) Integrands suitable for polar coordinates calculations
	- Formula:
		- $$f(x^2+y^2),f(\sqrt{x^2+y^2}),f(\frac yx),f(\frac xy)$$
	- Cause:
		- $\sqrt{x^2+y^2}$ is more complex in the Cartesian coordinate system, but represents `ρ` in polar coordinates
		- $\frac yx$ In polar coordinates, it represents an angle
- (2) Integration fields suitable for polar coordinates
	- $$x^{2}+y^{2}\leq R^{2};\quad\quad\quad r^{2}\leq x^{2}+y^{2}\leq R^{2};\quad\quad\quad\\x^{2}+y^{2}\leq2ax;\quad\quad\quad x^{2}+y^{2}\leq2by;$$
	- Note:
		- When the center is not at the origin, $x-x_0$ can be set to $\rho\sin\theta$, and similarly, $y-y_0$
- If (1) and (2) have a conflict, (1) takes precedence

**Theorem**: Double integral calculation based on rectangular coordinate systems
- (1) First `Y` `X`: $$\int\int_D{f(x,y)d\sigma = \int_{a}^{b}[\int_{y_{1}(x)}^{y_{2}(x)}f(x,y)dy]dx}$$
	- Area: $\begin{aligned}\varphi_1(x)&\leq y\leq\varphi_2(x)\cdot\\a&\leq x\leq b\end{aligned}$
	- Where $\varphi_1(x)\leq y\leq\varphi_2(x)$ represents the range of x values, which is the function of x with respect to y, and $\varphi_1(x)$ is the actual value of y equal;
- (2) First `X` `Y`: $$\iint_Df(x,y)\mathrm{d}\sigma=\int_c^ddy\int_{\psi_1(y)}^{\psi_2(y)}f(x,y)dx$$
	- Area: $\begin{aligned}\Psi(y)&\leq X\leq\Psi_2(y)\\c&\leq y\leq d\end{aligned}$
- Setting the points limit;
	- When Y comes first, then X:
		- `dy` upper and lower integral limits `->` Draw a ray from bottom to top, with the lower end of the ray being `dy` the lower limit of the integral and the upper end of the ray being the upper limit of the integral of dy;
		- `dx` upper and lower limits of integration `->` Observe the graph to see the range of x values;
	- When X comes first, then Y:
		- `dx` upper and lower integral limits `->` Draw a ray from left to right, with the left end of the ray being the `dx` lower limit and the upper end of the ray being the `dx` lower limit;
		- `dy` upper and lower limits of integration `->` Observe the image and see the range for `y`;

**Theorem**: Double integral calculation based on polar coordinates
- $$\text{ First }\rho\text{ Afterwards }\theta\quad\iint_Df (x, y)\mathrm{d}\sigma=\int_\alpha^\beta d\theta\int_{\varphi_1 (\theta)}^{\varphi_2 (\theta)}f (\rho\cos\theta,\rho\sin\theta)\rho d\rho$$
- Area: $\begin{aligned}\varphi_1(0)&\leq p\leq\varphi_2(0)\\\alpha&\leq\theta\leq\beta.\end{aligned}$

**Theorem**: Parity
- If the integral `D` relation `Y` axial symmetry, then the function is parity with respect to `X`:
	- $$\iint\limits_{D}f(x,y)d\sigma=\begin{cases}2\iint\limits_{D_{x\geq0}}f(x,y)\mathrm{d}\sigma;&f(-x,y)=f(x,y)\\0;&f(-x,y)=-f(x,y)\end{cases}$$
- If the integral `D` relation `X` axial symmetry, then the function is parity with respect to `Y`:
	- $$\iint\limits_{D}f(x,y)d\sigma=\begin{cases}2\iint\limits_{D_{y_{z_0}}}f(x,y)\mathrm{d}\sigma&f(x,-y)=f(x,y)\\0&f(x,-y)=-f(x,y)\end{cases}$$

**Theorem**: Symmetry
- $$\text{ If }D\text{ About }y=x\text{ Symmetric, then }\quad\iint_Df(x,y)\mathrm{d}\sigma=\iint_Df(y,x)\mathrm{d}\sigma $$
- Or:
	- $$\int\int_{D(x,y)} f(x,y)\mathrm{d}x\mathrm{d}y=\int\int_{D(u,v)} f(u,v)\mathrm{d}u\mathrm{d}v=\int\int_{D(y,x)} f(y,x)\mathrm{d}y\mathrm{d}x$$

## 8.3 Triple Integral
**Definition**: Triple points
- $\iiint_{\Omega}f(x,y,z)\mathrm{d}\mathbf{v}=\lim_{\lambda\to0}\sum_{k=1}^{n}f(\xi_{k},\eta_{k},\xi_{k})\Delta\nu_{k}$
- A ternary function integrating into a spatial field $\Omega$;
- $\Delta\nu_{k}$ is the volume of the geometric solid in the k-th region;

**Calculation**: Cartesian coordinates
- Method 1: First one, then two, $$\iiint_{\Omega}f(x,y,z)\mathrm{dv}=\iint_{D_{xy}}d\sigma\int_{z_{1}(x,y)}^{z_{2}(x,y)}f(x,y,z)dz$$
- Method 2: Put two first, then one, $$\iiint_{\Omega}f(x,y,z)\mathrm{d}\mathbf{v}=\int_{c_{1}}^{c_{2}}dz\iint_{D_{c}}f(x,y,z)dxdy$$

**Calculation**: Cylindrical coordinates
- Definition: Cylindrical coordinates
	- $$\begin{cases}x=r\cos\theta,&\quad0\leq r<+\infty,\\y=r\sin\theta,&\quad0\leq\theta\leq2\pi,\\z=z,&\quad-\infty<z<+\infty.\end{cases}$$
- Illustration:
	- ![Pasted image 20240521035217](/assets/notes/fb4663a3483a-Pasted-image-20240521035217.png)
- Calculation:
	- Volume microyuan: $dv=\rho d\rho d\theta dz$
	- $$\iiint_\Omega f(x,y,z)d\nu=\iiint_{\Omega}f(\rho\cos\theta,\rho\sin\theta,z)r\operatorname{d}r\operatorname{d}\theta\operatorname{d}z$$

**Calculation**: Spherical coordinates
- Definition: Spherical coordinates
	- $$\begin{cases}x=r\sin\varphi\cos\theta,&\quad0\leq r<+\infty,\\y=r\sin\varphi\sin\theta,&\quad0\leq\varphi\leq\pi,\\z=r\cos\varphi,&\quad0\leq\theta\leq2\pi.\end{cases}$$
- Illustration:
	- ![Pasted image 20240521040109](/assets/notes/389e35889ff4-Pasted-image-20240521040109.png)
- Calculation:
	- Volume microyuan: $dv=r^{2}\sin\varphi drd\varphi d\theta$
	- $$\iiint_{\Omega}f(x,y,z)d\nu =\iiint_\Omega f (r\sin\varphi\cos\theta, r\sin\varphi\sin\theta, r\cos\varphi) r^2\sin\varphi\operatorname{d}r\operatorname{d}\varphi\operatorname{d}\theta$$
- Applicable to: The integrand can be written as $f(\sqrt{x^2+y^2+z^2})$ or as a sphere, sphere, hemispherical, or curved cone centered at the origin `->` spherical coordinates are suitable

# Chapter 9: Infinite Series
## 9.1 Series of Constant Terms
**Problem-Solving Steps**
- Step 1: Determine the type of series
	- Positive, interleaved, arbitrary terms
- Step 2: Choose the method based on the number of levels
	- Series of positive terms `->` Five types of criteria for convergence and dispersion are used for judgment;
	- alternating series `->` a method;
	- Any term series `->` one method;
- Step 3: If a determination cannot be made, you can use definitions and properties to make a judgment
	- Definitions and properties apply to all types of series;

### 9.1.1 Basic Concepts
**Definition**: Convergence of series of constant terms
- $u_{1}, u_{2},\cdots u_{n},\cdots$ represents the constant term, $S_{n}=u_{1}+u_{2}+\cdots+u_{n}$ represents the sum of the first `n` terms;
- If the finite limit
  $$S=\lim_{n\to+\infty}S_n$$
  exists, then the series $\sum_{n=1}^{\infty}u_n$ converges to $S$; otherwise it diverges.

**Nature**
- 1. If $\sum_{n=1}^{\infty}u_n=S$, then $\sum_{n=1}^{\infty}k u_n=kS$.
- 2. If $\sum_{n=1}^{\infty}H_n=h$ and $\sum_{n=1}^{\infty}U_n=u$, then $\sum_{n=1}^{\infty}(H_n\pm U_n)=h\pm u$.
- 3. Adding, removing, or changing finitely many terms does not affect convergence, although it may change the sum.
- 4. Grouping finitely many consecutive terms of a convergent series preserves convergence and its sum.
- 5. A necessary condition for convergence is
  $$\sum_{n=1}^\infty u_n\text{ converges }\Longrightarrow\lim_{n\to\infty}u_n=0.$$

**Common Conclusions**
- $$\sum_{n=1}^{\infty}|b_n|\text{ converges }\Longrightarrow \sum_{n=1}^{\infty}b_n^2\text{ converges}.$$

### 9.1.2 Series of Positive Terms
**Definition**: Convergence of positive term series
- A positive-term series $\sum u_n$ converges if and only if its partial sums $\{S_n\}$ are bounded above:
  $$\sum_{n=1}^\infty u_n\text{ converges }\Longleftrightarrow \{S_n\}\text{ is bounded above}.$$
**Methods**: Five types of methods for positive term series
- Method Classification:
	- 1. Comparative Method of Careful Convergence
	- 2. The limit form of the comparative method
	- 3. Ratio method
	-4. root test
	- 5. Integral Discrimination Method
- Method Selection:
	- First category: Method `1、2`
		- The current general term needs to be compared with other known general terms;
		- Advantages:
			- Broader applicability;
			- As long as methods 3 and 4 can make a judgment, method `1、2` can definitely make a judgment, though it may be more inconvenient to do;
		- Disadvantages:
			- Inconvenient to use;
	- Category Two: Method `3、4`
		- Concept:
			- Only need to make judgments on their own;
		- Advantages:
			- Easy to use, no need for other levels, you can judge by yourself;
		- Disadvantages:
			- Sometimes, the series is clearly divergent but difficult to prove with methods;
			- That is: narrow scope of application;
- Steps to solve the problem:
	- 1. First, observe whether the convergence and divergence `->` law can be directly seen;
	- 2. When judging methods, first consider the `3、4` of the method used;
	- 3. If a determination cannot be made, then consider `1、2`;
- Pattern:
	- Big Three: $$a^n\quad n!\quad n^n$$
	- If at least one of these three giants appears, the method `3、4` is usually used;
	- If none of the three giants appear, the most common forms are $n^p$ or $In{n}$, and then the method is `1、2`;

**Method One**: Comparative Convergence Method
- If $\sum U_n$ and $\sum V_n$ are positive series and $u_n<v_n$:
- $$\sum_{n=1}^\infty\nu_n\text{ Convergence }\Rightarrow\sum_{n=1}^\infty u_n\text{ Convergence }$$
- $$\sum_{n=1}^\infty u_n\text{ Diverges }\Rightarrow\sum_{n=1}^\infty\nu_n\text{ Diverges }$$
- Summary:
	- Large convergence, small convergence converges;
	- Small things diverge, big ones definitely diverge;
	- The reverse is not allowed;
- How to use:
	- Make a preliminary judgment before use;
	- If the preliminary judgment is that it is convergent, magnify it;
	- If preliminarily judged to be divergent, it will be reduced;
- Common Grade One:
	- $$\sum_{n=1}^\infty\frac1{n^p}\quad\text{converges for }p>1\text{ and diverges for }p\leq1.$$
	- Note:
		- `P=1` `->` Harmonic Series: $\sum\frac{1}{n}\quad \text{ It will definitely diverge }$
		- Why is `P=1` divergent?
	- The Nature of Convergence:
		- Whether a series converges does not depend on whether the summation term is infinite, nor even on the size of the sum, but on the speed at which the common term in the sum approaches zero;
		- Velocity comparison cannot determine whether a series diverges or converges, but velocity changes bring about fundamental changes;
- Common Grade Two:
	- $$\sum_{n=1}^\infty aq^n\left(a>0,q>0\right)\quad\text{converges when }q<1\text{ and diverges when }q\geq1.$$
	- Whether a geometric series converges depends solely on the value of its `q`, i.e., the common ratio determines its convergence and divergence;

**Method Two**: The limit form of the comparative method
- Set $$\lim_{n\to\infty}\frac{u_n}{v_n}=l\left(0\leq l\leq+\infty\right)$$
- If:
	- 1. $$\text{If }0<l<+\infty,\text{ then }\sum_{n=1}^{\infty}u_{n}\text{ and }\sum_{n=1}^{\infty}\nu_{n}\text{ either both converge or both diverge}.$$
	- 2. $$\text{If }l=0,\quad \sum_{n=1}^\infty\nu_n\text{ converges }\Rightarrow\sum_{n=1}^\infty u_n\text{ converges, and }\sum_{n=1}^\infty u_n\text{ diverges }\Rightarrow\sum_{n=1}^\infty\nu_n\text{ diverges}.$$
	- 3. $$\text{If }l=+\infty,\quad \sum_{n=1}^\infty\nu_n\text{ diverges }\Rightarrow\sum_{n=1}^\infty u_n\text{ diverges, and }\sum_{n=1}^\infty u_n\text{ converges }\Rightarrow\sum_{n=1}^\infty\nu_n\text{ converges}.$$

**Method 3**: Ratio Convergence Method
- If $\sum U_n$ is a positive series, then if $$\lim_{n\to\infty}\frac{u_{n+1}}{u_{n}}=\rho$$
- If $\rho <1$, then $\sum U_n$ converges;
- If $\rho >1$, then $\sum U_n$ diverges;
- If $\rho =1$, $\sum U_n$ cannot be determined, please use other methods;

**Method 4**: root test
- $$\text{ Let }\lim_{n\to\infty}\sqrt[n]{u_n}=\rho\text{ , then }\sum_{n=1}^\infty u_n\begin{cases}\text{ Convergence },&\rho<1,\\\\\text{ Diverges },&\rho>1,\\\\\text{ Not necessarily },&\rho=1,\end{cases}$$

**Method 5**: Points Discrimination Method
- Let $f(x)$ decrease monotonically on $[1,  +\infty), $ is a non-negative continuous function $, $ and $a_{n}=f(n), $ then $\sum_{n=1}^{\infty}a_{n}$ has the same convergence or divergence as $\int_{1}^{+\infty}f(x)dx$
-**Example Problems**:
	- Proof:
		- Series $\sum_{i=1}^\infty\frac1{n^p}$ Converges when $p>1$ and diverges when $p\leq1$;
	- Analysis
		- Set $a_{n}=\frac{1}{n^{p}}=f(u),f(x)=\frac{1}{x^{p}}$
		- So the score is obtained: $\int_{1}^{+\infty}\frac{dx}{x^{p}}$

### 9.1.3 alternating series
**Definition**: Alternating series
- $$\sum_{n=1}^\infty(-1)^{n-1}u_n,u_n>0$$
- $u_{1}-u_{2}+u_{3}-u_{4}+u_{5}-u_{6}+\cdots$；
- $-u_{1}+u_{2}-u_{3}+u_{4}-u_{5}+u_{6}\cdots$；


**Note**
- If the number of terms is infinite,**parentheses cannot be arbitrarily added, and**order cannot be arbitrarily changed**;
- For example:
	- $1-1+1-1+1-1+1-1+1-1+1-1+1......$
	- If it is an odd term ->, the result is 1;
	- If the even term -> is 0;
- If you add parentheses
	- $(1-1)+(1-1)+(1-1)+(1-1)+......$
	- Adding parentheses to the infinite term like this may cause problems because it is unclear whether it is an odd or even term;


**Theorem**: #Leibnizprinciple
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


### 9.1.4 Arbitrary Term Series
**Concept of Arbitrary Term Series**
- Features:
	- There are positive terms and negative terms;
	- And both positive and negative terms must be infinite;
- Any term: $u_{1}+u_{2}+u_{3}+u_{4}+\cdots$, and the positive or negative of $u_n$ is unknown;
- Positive term series: $|u_{1}|+|u_{2}|+|u_{3}|+|u_{4}|+\cdots$, each term takes an absolute value;
	- This is an absolute series;

**How to Judge**
-**Principle**: Convert new problems into old problems `->` convert a variant series into a positive term series `->` Add an absolute value to the general term `->` When this new positive term series converges, any term series also converges;


**Definition**: #Absoluteconvergenceandconditionalconvergence
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

**Theorem**: #Absoluteconvergenceofanytermseries
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if each term is summed with absolute value $\sum_{n=1}^{+\infty}|u_{n}|$, it converges, then its original series $\sum_{n=1}^{+\infty}u_{n}$ is also convergent;

**Explanation**
- Simpler understanding:
	- If all numbers are positive (plus absolute value), it should converge even more;

**Theorem**: #Judgmentfordivergenceandconvergenceofanytermseries
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if $\sum_{n=1}^{+\infty}u_{n}=u_{1}+u_{2}+u_{3}+\cdots$ is an arbitrary series and $\lim_{n\to+\infty}\left|\frac{u_{n+1}}{u_{n}}\right|=l$
> 1) When $l$ < 1, $\sum u_n$ converges absolutely;
> 2) When $L>1(+\infty)$, $\sum u_n$ diverges;
> 3) When L = 1, it cannot be determined;

**Explanation**
- If L>1, then the original series is divergent;

## 9.2 Power Series
### 9.2.1 Basic Concepts of Power Series
**Sequence**: Each term is only related to n
- Sequence: $u_{1},u_{2},\cdots,u_{n}$
- Infinite series: $u_{1}+u_{2}+\cdots+u_{n}+\cdots$

**Function Sequences**: Each term is related to n and $x$
- Assume x lies on interval $I$;
- Function sequence: $u_{1}(x), u_{2}(x), u_{n}(x),\cdots$
- Infinite series of function terms: $u_{1}(x)+u_{2}(x)+\cdots+u_{n}(x)+\cdots$

**Definition**: #Powerseries
> <font color="#ccc1d9"> description: </font>
> Common form: $$\sum_{n=0}^\infty a_nx^n=a_0+a_1x+a_2x^2+\cdots+a_nx^n+\cdots $$
> General form: $$\sum_{n=0}^\infty a_n(x-x_0)^n=a_0+a_1(x-x_0)+\cdots+a_n(x-x_0)^n+\cdots $$

**Explanation**
- Concept:
	- A power series contains nonnegative integer powers of $x$: $a_0+a_1x+a_2x^2+\cdots+a_nx^n+\cdots$.
	- Power series are actually the simplest type of function term series; $x^{n}$ is a function of x, $a_n$ is a sequence of numbers;
	- $a_0,a_1,a_2...a_n$ called the coefficient;
- Supplement:
	- General study of common forms, because general forms can be $x-x_0=t$ into common forms;

**Definition**: #Convergencepointanddivergencepoint
> <font color="#ccc1d9"> description: </font>
> 1. If $x_{0}\in I$ and $u_{1}(x)+u_{2}(x)+\cdots+u_{n}(x)+\cdots$ converges, $x_o$ is called the convergence point; if it is an interval, it is called the convergence domain;
> 2. If $x_{0}\in I$ and $u_{1}(x)+u_{2}(x)+\cdots+u_{n}(x)+\cdots$ diverges, $x_o$ is called the divergence point; if it is an interval, it is called the divergence domain;
> 3. $S\left (x\right)=u\left (x\right)+u_{2\left (x\right)}+\cdots+u_{n}\left (x\right)+\cdots$ Called the sum function, $\lim_{n\to\infty}S_n(x)=S\left(x\right)$;

**Explanation**
- Generally, the problem is to solve two questions: What is the convergence domain? What is the sum function?

**Examples**
- $1+x+x^{2}+x^{3}+\cdots+x^{n}+\cdots$
- At this point:
	- When $|x|<1$, the interval of convergence is $(-1,1)$ and the sum is $\frac{1}{1-x}$.
	- When $|x|\geq1$, the series diverges; the divergence set is $(-\infty,-1]\cup[1,+\infty)$.

### 9.2.2 Power Series Expansion
**Theorem**: #Abelstheorem
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> If $\sum_{n=0}^{\infty}a_nx_0^n$ converges, then $\sum_{n=0}^{\infty}a_nx^n$ converges absolutely for $|x|<|x_0|$.
> If $\sum_{n=0}^{\infty}a_nx_0^n$ diverges, then $\sum_{n=0}^{\infty}a_nx^n$ diverges for $|x|>|x_0|$.

**Explanation**
- Function of the theorem:
	- Reveals the structure of the convergent and divergent fields of current power series `->` Converts the problem of finding the convergent domain into the problem of finding the general length of the entire interval `->` that is, finding the radius of convergence `R`;
- Absolute Convergence:
	- At $|x|<|x_0|$, all points in this interval also converge `->` and points closer to the origin converge;
- Divergence:
	- For $|x|>|x_0|$, points farther from the origin are divergence points.
- Summary:
	- 1. The boundary point between the convergence point and the divergence point `->` is the**radius of convergence R**
	- 2. The series $\sum_{n=0}^{\infty}a_n(x+2)^n$ and $\sum_{n=0}^{\infty}a_n(x-3)^n$ have the same radius of convergence when their coefficients $a_n$ are the same.
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
	- The series $\sum_{n=0}^{\infty}a_n(x+2)^n$ and $\sum_{n=0}^{\infty}a_n(x-3)^n$ have the same radius of convergence $R$ because they have the same coefficients.
- Concept:
	- Convergence interval:
		- For $\sum_{n=0}^{\infty}a_n(x+2)^n$, the center is $x_0=-2$. If $R=2$, the open interval of convergence is:
		- $$\text{Interval of convergence}:\ (x_0-R,x_0+R)=(-2-2,-2+2)=(-4,0).$$
	- Endpoint Convergence Invariance:
		- Corresponding endpoints have the same convergence behavior after translating the center.

**Theorem**: #Theconvergenceofpowerseries
> A power series $\sum_{n=0}^{\infty}a_nx^n$ has exactly one of the following three convergence behaviors:
> (1) Convergence for any x belonging to $(-\infty ,+\infty)$;
> (2) Converges only at $x=0$;
> (3) There exists a positive number `R` When $|x| < R$ is absolute convergence, when $|x|>R$ diverges;
> Note: if $\sum_{n=0}^{\infty}a_nx^n$ converges conditionally at $x=x_0$, then $x_0$ is an endpoint of the interval of convergence $(-R,R)$.

**Theorem**: #Determiningtheradiusofconvergence
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\text{ If }\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_{n}}\right|=\rho,\,\text{ then } R = \frac{1}{{\rho}}$$
> That is: there are three situations at this time: $$R=\begin{cases}\frac{1}{\rho},&\rho\neq0\\+\infty,&\rho=0\\0,&\rho=+\infty\end{cases}$$

**Explanation**
- Note:
- 1. This theorem can only be applied in one direction;
- 2. The convergence interval is endpoint-independent, i.e., $(-R,R)$


**Theorem**: #Determiningtheradiusofconvergence: Based on radicals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\text{ If }\lim_{n\to\infty}\sqrt[n]{|a_n|}=\rho,\text{ then }\quad R=\frac1\rho $$

**Explanation**
- Derived using the root test.

**Properties**: Rational operations on power series
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

**Properties**: The analytical properties of power series
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

**Problem Type**: Find the radius of convergence
- Two methods:
	- Method 1: Use the radius of convergence determination method
	- Method 2: use the root test to find the radius of convergence.
- Note: When items are missing
	- Missing item: $x^{2n-1}$, not $x^n$
	- When missing terms, you cannot directly use the formula. If it is $x^{2n+b}$, then the `R` calculated by the root-value method must be taken to the $\frac{1}{2}$ power;

**Problem Type**: Find the convergence interval
- Method:
	- To find the convergence interval, first find the radius of convergence;

**Question Type**: Find the convergence of endpoints
- Method:
	- Substitute each endpoint into the series to obtain its general term. Then apply the appropriate positive-term, alternating-series, or general-series convergence test.

**Question Type**: Judge the convergence of any point
- Method:
	- First, find the radius of convergence of the current power series (often using Abel's theorem), then, based on the convergence interval, determine whether any point lies within the interval to obtain convergence;

### 9.2.3 Expanding Functions into Power Series
**Why Expansion into Power Series Is Necessary**
- Cause:
	- Some functions have no elementary antiderivative; for example, $e^{x^2}$ cannot be integrated in elementary terms.
	- At this point, consider expanding it into a power series, since each term of a power series is simple and can be processed;
- Example: For instance, we need to find what $e^{0.2}$ equals
	- Directly calculating is very difficult;
	- But using the expanded power series, the calculation is very simple: $e^{x}=1+x+\frac{x^{2}}{2!}+\frac{x^{3}}{3!}+\cdots+\frac{x^{n}}{n!}+$
	- The subsequent terms can be approximated; generally, three or four terms are sufficient;


**Theorem**: #Thepowerseriesexpansionofthefunction
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> If the function $f(x)$ is on interval $(x_0-R,x_0+R)$ and can be expanded to a power series of $x-x_0$ $f(x)=\sum_{n=0}^{+\infty} a_n(x-x_0)^n$ then its expansion is unique;
> and call it the $f(x)$ at $x=x_0$ the**Taylor series**:$$\sum_{n=0}^\infty\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$

**Explanation**
- If $\sum_{n=0}^\infty\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$ can converge to $f(x)$, then it is said to be expandable;


**Theorem**: #ConvergenceofTaylorseries
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> Let $f(x)$ be arbitrarily differentiable at $x=x_0$, then:
> $\sum_{n=0}^\infty\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$ converges on $(x_0-R,  x_0+R)$ to $f(x)\Leftrightarrow\lim_{n\to\infty} R_n(x)=0.$
> Here $R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}$ is the Lagrange remainder in Taylor's formula at $x_0$: $f(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+R_n(x)$.
> Therefore, when $R_n(x)$ `->` `0`, $f(x)$ tends toward the Taylor series: $\sum_{n=0}^\infty\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$, that is, converges to a unique series;

**Supplement**: Several commonly used expansion forms
- Direct Expansion Method:
	- （1）$$\frac1{1-x}=1+x+x^2+\cdots+x^n+\cdots =\sum^{\infty}\limits_{n=0}x^n\quad (-1<x<1)$$
	- （2）$$\frac1{1+x}=\sum_{n=0}^\infty(-1)^nx^n,|x|<1$$
	- （3）$$\sin x=x-\frac{x^3}{3!}+\cdots+\frac{(-1)^{n}x^{2n+1}}{(2n+1)!}+\cdots=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}x^{2n+1} \quad(-\infty<x<+\infty)$$
		- Note: The sum index starts from 0, `(-1)` is the exponent `n`;
	- （4） $$e^x=1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}+\cdots \quad (-\infty<x<+\infty)=\sum^{\infty}\limits_{n=0}\frac{x^n}{n！}$$
- Indirect Expansion Method:
	- (1) The expansion of `cosx` is derived from the derivative of the expansion of `sinx`: $$\cos x=1-\frac{x^2}{2!}+\cdots+\frac{(-1)^{n-1}x^{2n}}{(2n)!}+\cdots=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n)!}x^{2n}   \quad(-\infty<x<+\infty)$$
	- (2) The expansion of `In(1+x)`: $$\ln(1+x)=x-\frac{x^2}2+\cdots+\frac{(-1)^{n+1}x^n}n+\cdots=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}x^{n}\quad(-1<x\leq1)$$
	- (3) ` the expansion of the α power ` of (1+X), which is also indirectly obtained: $$\left(1+x\right)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots+\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n+\cdots \quad(-1<x<1)$$
	- (4) $$\sum_{n=1}^{\infty}\frac{x^{n}}n=-\ln(1-x)\quad(-1\leq x<1)$$
- Note:
	- About subscripts: except for `In(1+x)`, which starts from `n=1`, all others start from `n=0`;
	- About $(-1)^{n}$ and $(-1)^{n+1}$: only `In(1+x)` is `n+1`, the rest are from `n`;
	- About the factorial: except for `In(1+x)`, where the denominator is non-factorial, all others with denominators are also factorials, and the factorial part matches the ideographic part;
	- Regarding convergent fields: trigonometric functions and $e^{x}$ are from negative infinity to positive infinity, others are `-1` to `+1`, and `In(1+x)` is less than or equal to `+1`;


## 9.3 Fourier Series

**Definition**: #Fouriercoefficient
> <font color="#ccc1d9"> description: </font> $$a_{n}=\frac1\pi\int_{-\pi}^xf(x)\cos nx\mathrm{d}x\quad n=0,1,2\cdots\quad\quad\\b_{n}=\frac1\pi\int_{-\pi}^xf(x)\sin nx\mathrm{d}x\quad\quad n=1,2\cdots $$

**Explanation**
- The above formula can be used to find the coefficients of a given n expression;

**Definition**: #Fourierseries
> <font color="#ccc1d9"> Description: </font> `f` Fourier series of $$f(x)\sim\frac{a_0}2+\sum_{n=1}^\infty(a_n\cos nx+b_n\sin nx)$$

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


**Theorem**: #Dirichlettheorem
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> Suppose $f$ is piecewise smooth on $[-\pi,\pi]$, with only finitely many discontinuities of the first kind and finitely many extrema. Then its Fourier series converges at every point, with:
> $$1)\quad S(x)=f(x)\qquad\text{at every continuity point of }f.$$
> $$2)\quad S(x)=\frac{f(x^-)+f(x^+)}2\qquad\text{at every discontinuity point of }f.$$
> $$3)\quad S(x)=\frac{f((-\pi)^+)+f(\pi^-)}2\quad\text{ when }x=\pm\pi.$$

**Concept Introduction**: Expansion of a function with period $2\pi$
- (1) Expand on $[-\pi,+\pi]$: Expand generally
	- $$\begin{aligned}a_n&=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos nx\,dx&&(n=0,1,2,\ldots),\\b_n&=\frac1\pi\int_{-\pi}^{\pi}f(x)\sin nx\,dx&&(n=1,2,\ldots).\end{aligned}$$
- (2) Expansion on $[-\pi,+\pi]$: Expansion of parity functions
	- 1. $f(x)$ is an odd function:
		- $$a_{n}=0\quad n=0,1,2\cdots\quad\quad\\b_{n}=\frac2\pi\int_{0}^xf(x)\sin nx\mathrm{d}x\quad\quad n=1,2\cdots $$
		- Explanation: Because $cosx$ is an even function and is in $a_n$, when $f(x)$ is an odd function, ` odd function * even function = odd function `, so $a_n$ becomes 0 and $b_n$ becomes doubled. The same applies in other cases;
	- 2. $f(x)$ is an even function:
		- $$a_{n}=\frac2\pi\int_{0}^xf(x)\cos nx\mathrm{d}x\quad n=0,1,2\cdots\quad\quad\\b_{n}=0\quad\quad n=1,2\cdots $$
- (3) Expand on $[0,+\pi]$: Expand to be a sine or cosine
	- Analysis:
		- This is an expansion over half a cycle, so**extension extension**needs to be done during analysis;
		- Odd function expansion: only the sine term. Because if only $[0,+\pi]$ is given, then if an odd function expansion is needed on $[-\pi,+\pi]$, only the sine term `->`**odd extension**;
		- When expanding to sine levels, theoretically an odd extension is required, but in practice, the expansion of odd functions can be used directly;
		- Analogy even extension extension;
	- 1. Expanded to sine:
		- $$a_{n}=0\quad n=0,1,2\cdots\quad\quad\\b_{n}=\frac2\pi\int_{0}^xf(x)\sin nx\mathrm{d}x\quad\quad n=1,2\cdots $$
	- 2. Expanded to cosine:
		- $$a_{n}=\frac2\pi\int_{0}^xf(x)\cos nx\mathrm{d}x\quad n=0,1,2\cdots\quad\quad\\b_{n}=0\quad\quad n=1,2\cdots $$

**Concept Introduction**: Expansion of a function with period $2l$
- (1) Expand on $[-l,+l]$
	- $$a_n=\frac1l\int_{-l}^lf(x)\cos\frac{n\pi x}l\mathrm{d}x\quad\quad n=0,1,2\cdots\quad\quad \\b_n=\frac1l\int_{-l}^lf(x)\sin\frac{n\pi x}l\mathrm{d}x\quad\quad n=1,2\cdots $$
- (2) Expand on $[-l,+l]$: parity functions
	- $$\text{i)}f(x)\text{ is an odd function }.\quad\quad \\a_n=0,n=0,1,2\cdots\quad\quad \\b_n=\frac2l\int_0^lf(x)\sin\frac{n\pi x}l\mathrm{d}x\quad\quad n=1,2\cdots $$
	- $$\begin{aligned}&\text{ii)}f(x)\text{ is an even function }.\\&{a_n}=\frac2l\int_0^lf(x)\cos\frac{n\pi x}l\mathrm{d}x&&n=0,1,2\cdots\\&b_{n}=0&&n=1,2\cdots\end{aligned}$$
- (3) Expand on $[0,l]$: Expand to be a sine or cosine
	- $$\begin{aligned}&\text{ i) Expand to a sine }\\&a_{n}=0,&&n=0,1,2\cdots\\&b_{n}=\frac2l\int_0^lf(x)\sin\frac{n\pi x}l\mathrm{d}x&&n=1,2\cdots\end{aligned}$$
	- $$\begin{aligned}&\text{ ii) Expand to a cosine. }\\&a_{n}=\frac{2}{l}\int_{0}^{l}f(x)\cos\frac{n\pi x}{l}\mathrm{d}x&n=0,1,2\cdots\\&b_{n}=0&n=1,2\cdots\end{aligned}$$

# Chapter 10: Vector Algebra and Spatial Geometry
## 10.1 Vector Algebra
### 10.1.1 Dotting Products
**Theorem**: #Theproductofvectoralgebra
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> $$1\text{ ) Geometric representation: }\mathbf{a}\cdot\mathbf{b}=\mid\mathbf{a}\mid\mid\mathbf{b}\mid\cos\alpha $$
> $$2\text{ ) Algebraic representation: }\quad\mathbf{a}\cdot\mathbf{b}=\mathbf{a}_xb_x+\mathbf{a}_yb_y+\mathbf{a}_zb_z$$
> $$3\text{ ) Calculation Pattern: }\quad \text{ Commutative law }:\,\mathbf{a}\cdot\mathbf{b}=\mathbf{b}\cdot\mathbf{a} \quad \text{ Distributive Law: }\mathbf{a\cdot(b+c)=a\cdot b+a\cdot c}$$
> $$4\text{ ) Geometric applications: }\quad \text{Norm: }|\mathbf{a}|=\sqrt{\mathbf{a}\cdot\mathbf{a}} \quad \text{Angle: }\cos\alpha=\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\quad \text{Orthogonality: }\mathbf{a}\perp\mathbf{b}\Leftrightarrow\mathbf{a}\cdot\mathbf{b}=0$$

### 10.1.2 Vector Product
**Theorem**: #Thevectorproductofvectoralgebra
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> $1. \text{ Geometric representation: }\quad\mathbf{a}\times\mathbf{b}\text{ It is a vector }.\quad\text{ Model }:\mid\mathbf{a}\times\mathbf{b}\mid=\mid\mathbf{a}\mid\mid\mathbf{b}\mid\sin\alpha$
> $2. \text{ Algebraic representation: }\quad{\mathbf{a}\times\mathbf{b}}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\a_x&a_y&a_z\\b_x&b_y&b_z\end{vmatrix}$
> $3. i) a\times b= - ( b\times a) \quad ii)\text{ Distribution law }:\,a\times(b+c)=a\times b+a\times c$
> $4. \text{ Calculation rules }:\,i)\text{ Find the simultaneous perpendicular to } a \text{ and } b \text{ vector }: a×b\quad ii)\text{ Seek it } a \text{ and } b \text{ is the area of the parallelogram of the adjacent side }:S=|a×b|\quad iii)\text{ Determine that two vectors are parallel }:\,\mathbf{a//b}\Leftrightarrow\mathbf{a\times b}=0$

**Explanation**
- Geometric representation `->` right-hand rule `->` a line perpendicular to $a,b$ vector;
- Note:
	- The product of quantities satisfies the commutative law, while the vector product does not;

### 10.1.3 Mixed Product
**Theorem**: #Mixedproductofvectoralgebra
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> Basic expression: $\left[ abc \right] = (a \times b) \cdot c$
> Definition: $$\ a = a_xi + a_yj + a_zk \\ b = b_xi + b_yj + b_zk \\ c = c_xi + c_yj + c_zk$$
> Properties:
> （1）$$(a\times b)\cdot c = a\cdot(b\times c) = b \cdot (c\times a)$$
> $$\text{ Rotation symmetry }:\,(abc)=(bca)=(cab)\quad \text{ Swap and change numbers }:\,(\mathbf{abc})=-(\mathbf{acb})$$
> （2）$$\begin{aligned}(a\times b)\cdot c=-(b\times a)\cdot c\\(a\times b)\cdot c=-(c\times b)\cdot a\\(a\times b)\cdot c=-(a\times c)\cdot b\end{aligned}$$
> (3) $$\mathbf{a},\mathbf{b},\mathbf{c}\text{ are coplanar }\Leftrightarrow[\mathbf{a}\mathbf{b}\mathbf{c}]=0.$$
> Geometric Meaning:
> 1. The absolute value of the mixed product $[abc]=(a\times b)\cdot c$ of vectors numerically equals the volume of parallelepiped with vectors a, b, and c as edges
> 2. $V_\text{ Parallelepiped }=|\mathrm{(abc)}|$

## 10.2 Spatial Planes and Straight Lines

### 10.2.1 Plane Equations
**Definition**: #Planeequations
> <font color="#ccc1d9"> description: </font>
> $1\text{ ) General formula: }\quad Ax+By+Cz+D=0.\quad\mathbf{n}=\{A,B,C\}$
> $2\text{ ) Point French: }\quad A(x-x_0)+B(y-y_0)+C(z-z_0)=0$
> $3\text{ ) Intercept type: }\quad\frac xa+\frac yb+\frac zc=1$

### 10.2.2 Line Equations
**Definition**: #Alinearequation
> <font color="#ccc1d9"> description: </font>
> $$1)\text{ General formula: }\quad\begin{cases}A_1x+B_1y+C_1z+D_1=0\\A_2x+B_2y+C_2z+D_2=0\end{cases}$$
> $$2)\text{ Symmetric Formula: }\quad\frac{x-x_0}l=\frac{y-y_0}m=\frac{z-z_0}n$$
> $$3)\text{ Parametric expression }:\,x=x_0+lt,y=y_0+mt,z=z_0+nt.$$

### 10.2.3 Distance Relations
**Core**: Plane `->` Normal Vector; Straight Line `->` Direction Vector

**Concept**: The distance from point to surface
- The distance from point $(x_0,y_0,z_0)$ to plane $Ax+By+Cy+D=0$
- $$d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}$$

**Concept**: Point-to-line distance
- $\text{ Point }({x_0,y_0,z_0})\text{ To a straight line }\frac{x-x_1}l=\frac{y-y_1}m=\frac{z-z_1}n$
- $$d=\frac{|\{x_1-x_0,y_1-y_0,z_1-z_0\}\times\{l,m,n\}|}{\sqrt{l^2+m^2+n^2}\quad J}$$

## 10.3 Surface and Space Curves
### 10.3.1 Basic Concepts

**Definition**: #Spatialsurfaces
> <font color="#ccc1d9"> description: </font> $$F(x,y,z)=0\quad\text{ or }z=f(x,y)$$

**Example**: $x+y+z=1$
- Illustration:
	- ![Pasted image 20240523230111](/assets/notes/38e5fe90a9d6-Pasted-image-20240523230111.png)
**Definition**: #Spacecurves
> <font color="#ccc1d9"> description: </font> $$\text{ i) Parameter: }\quad\begin{cases}x=x(t)\\y=y(t)\\z=z(t)\end{cases}\quad\text{ ii) General formula: }\begin{cases}F(x,y,z)=0\\G(x,y,z)=0\end{cases}$$

**Supplement**: Why do spatial surfaces require only one equation to be determined, while space curves need two?
- Core:
	- One equation reduces one degree of freedom;
	- A surface has two degrees of freedom, while a curve has only one;
	- Therefore, the general formula of a space curve consists of two equations about `xyz`;

### 10.3.2 Common Surface Surfaces
**Surface One**: ` Rotation Surface ` `->` A plane curve rotates around a straight line on the plane
- Let $L$ be a curve on the $yoz$ plane, with the equation $\begin{cases}f({y},z)=0\\x=0\end{cases}$
- (1) Rotating $L$ about the $y$-axis gives
  $$f\left(y,\pm\sqrt{x^2+z^2}\right)=0.$$
- (2) Rotating $L$ about the $z$-axis gives
  $$f\left(\pm\sqrt{x^2+y^2},z\right)=0.$$

**Surface Two**: Cylindrical surface `->` The trajectory formed by line L that is parallel to a fixed line and moves along the curve;
- If the directrix is $\Gamma:\begin{cases}f(x,y)=0\\z=0,\end{cases}$ and the generators are parallel to the $z$-axis, then the cylinder is $f(x,y)=0$.
- More generally, if eliminating $z$ from $\begin{cases}F(x,y,z)=0\\G(x,y,z)=0\end{cases}$ gives $H(x,y)=0$, then $H(x,y)=0$ is the cylinder parallel to the $z$-axis through the projected directrix.
- Illustration: The conical surface $z=\sqrt{x^{2}+y^{2}}$ on the area of the cylinder $x^{2}+y^{2}\le2x$:
	- Cone:
		- ![Pasted image 20240523231234](/assets/notes/9eba24051fca-Pasted-image-20240523231234.png)
	- Cylindrical Surface:
		- ![Pasted image 20240523231044](/assets/notes/0c8a093bcf8c-Pasted-image-20240523231044.png)
	- 3D:
		- ![Pasted image 20240523231108](/assets/notes/55293b40d098-Pasted-image-20240523231108.png)


**Surface Three**: Quadratic surface
- $$\text{ Elliptical conical surface }\frac{x^2}{a^2}+\frac{y^2}{b^2}=z^2;$$
- $$\text{ Ellipsoidal surface }\quad\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1;$$
- (3) Single-leaf hyperboloid $$\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}-\frac{z^{2}}{c^{2}}=1$$
- (4) Double-leaf hyperboloid $$\frac {x^{2}}{a^{2}}- \frac {y^{2}}{b^{2}}- \frac {z^{2}}{c^{2}}= 1$$
- (5) Ellipse-parabolic $$\text{ Elliptical parabola }\quad\frac{x^2}{a^2}+\frac{y^2}{b^2}=z;$$
**Surface Four**: Spatial Surface Projection
- The equation of the $q$ curve $\Gamma:  \begin{cases}F(x, y, z)=0\\G(x, y, z)=0\end{cases}$ projected onto the $xoy$ surface is $:  \begin{cases}H(x, y)=0\\z=0\end{cases}$


# Chapter 11: Multivariable Integral Calculus and Its Applications
## 11.1 Curve Integrals of the First Kind
### 11.1.1 Curve Integral with Respect to Arc Length
**Definition**: #Thelineintegralofthearclengthontheplane
> <font color="#ccc1d9"> description: </font> $$\int_{L}f(x,y)ds=\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_{i},\eta_{i})\Delta s_{i}$$

**Explanation**
- A binary function integrating along a two-dimensional curve segment;
- Divide the curve into n small ends, multiply the curve's function value by the length of the small arc segment, sum each segment and take the limit. If this limit exists, then the line integral exists;

**Theorem**: #Propertiesoflineintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{L(AB)}f(x,y)ds=\int_{L(BA)}f(x,y)ds$$

**Explanation**
- Meaning: Line integral is unrelated to the direction of the path;

**Inference**
- 1.  $\int_{L_{1}+L_{2}}f(x,y)ds=\int_{L_{1}}f(x,y)ds+\int_{L_{2}}f(x,y)ds$；
- 2. $\int_{L}[df(x,y)+\beta g(x,y)]ds=\alpha\int_{L}f(x,y)ds+\beta\int_{L}g(x,y)ds$；
- 3. $\int_{C}f(x,y)ds=\int_{C_{1}}f(x,y)ds+\int_{C_{2}}f(x,y)ds$；
- 4. $f(x,y)<=g(x,y) ; \int_{L}f(x,y)ds\leq\int_{L}g(x,y)ds$

### 11.1.2 Calculation of Curve Integrals
**Theorem**: #Thefirsttypecalculatescurveintegrals: Direct method
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> assume the parameter equation of L is $\begin{cases}x=\varphi(t),\\y=\psi(t),&\end{cases}(\alpha\leqslant t\leqslant\beta)$, then: $$\int_{L}f(x,y)\mathrm{d}s=\int_{\alpha}^{\beta}f(\varphi(t),\psi(t))\sqrt{\varphi'(t)^2+\psi'(t)^2}\mathrm{d}t$$

**Explanation**
- Note:
	- `ds` is the arc derivative of the curve;
	- The upper and lower limits are arc lengths from small to large;

**Theorem**: Line integrals of the first kind in Cartesian coordinates
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $\text{ If }C:y=y(x),\quad a\leq x\leq b$, then:
> $$\int_{}f(x,y)\mathrm{d}s=\int_{a}^{b}f(x,y(x))\sqrt{1+y'^2(x)}\mathrm{d}x$$

**Explanation**
- Equivalent to treating `x` as a parameter;

**Theorem**: #Thefirsttypecalculatescurveintegrals: Polar coordinate equation
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $\text{ If }C:\rho=\rho (\theta)\quad\alpha\leq\theta\leq\beta$, then:
> $$\int_{C}f(x,y)ds=\int_{\alpha}^{\beta}f(\rho(\theta)\cos\theta,\rho(\theta)\sin\theta)\sqrt{\rho^{2}(\theta)+\rho^{\prime2}(\theta)}d\theta $$

**Theorem**: #Parityoftheintegralcurve
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{C}f(x,y)\mathrm{d}s=\begin{cases}2\int_{C_{x>4}}f(x,y)\mathrm{d}s,&f(-x,y)=f(x,y)\\0,&f(-x,y)=-f(x,y)\end{cases}$$

**Theorem**: #Symmetry
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> General situation: $\int_{c}f(x,y)\mathrm{d}s=\int_{c}f(y,x)\mathrm{d}s$
> Special: $\int_Cf(x)ds=\int_Cf(y)ds$

## 11.2 Curve Integrals of the Second Kind
**Explanation**: Method selection
- Closed Section:
	- Green's formula
- Non-closed interval:
	- Check: Check whether it is independent of the path `->` Use partial derivatives to see if they are equal
	- It is path-independent
		- Change the path
		- Use a potential function.
	- The integral is path-dependent.
		- Direct calculation is convenient `->` Direct calculation
		- Direct calculations are inconvenient `->` Supplement Green

### 11.2.1 Basic Concepts
**Definition**: #Thesecondtypeiscurveintegrals
> <font color="#ccc1d9"> description: </font> $$\int_{L}P(x,y)dx+Q(x,y)dy=\lim_{\lambda\to0}\sum_{i=1}^{n}[P(\xi_{i},\eta_{i})\Delta x_{i}+Q(\xi_{i},\eta_{i})\Delta y_{i}]$$

**Explanation**
- Divide the curve arbitrarily into n small ends, and multiply the projection of each directional small arc segment on the x-axis

**Properties**: Curves have direction; changing direction can alter symbols
- $$\int_{L(AB)}Pdx+Qdy=-\int_{L(BA)}Pdx+Qdy$$
### 11.2.2 Calculation Methods
**Method One: Direct Method**
**Theorem**: #Thesecondtypecalculatescurveintegrals
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> If $L$ is parametrized by $\begin{cases}x=\varphi(t)\\y=\psi(t)\end{cases}$ and $t$ runs from $\alpha$ at the initial point $A$ to $\beta$ at the terminal point $B$, then $$\int_{L}P(x,y)\,dx+Q(x,y)\,dy = \int_{\alpha}^{\beta}[P(\varphi(t),\psi(t))\varphi^{\prime}(t)+Q(\varphi(t),\psi(t))\psi^{\prime}(t)]\,dt.$$

**Explanation**
- Concept:
	- Write out the parameter equations, carry them in, and convert them into definite integral calculations;
- Note:
	- The upper and lower limits are calculated from the starting point parameter `->` the endpoint parameters, rather than by size;

**Method 2: Green's Formula**
- On a double integral of a closed region `D` in a plane, can only the value difference on the boundary curve `L` be found without calculating the values of all points on the surface?
- This function is achieved by Green's formula;

**Definition**: #Singleconnectedarea
> <font color="#ccc1d9">Description:</font> A plane region $D$ is simply connected if every simple closed curve in $D$, together with its interior, lies entirely in $D$. Otherwise, the region is multiply connected.


**Theorem**: #Greensformula
> <font color="#8db3e2"><font color="#c6d9f0">Description:</font></font> Let the closed region $D$ be bounded by a piecewise smooth, positively oriented curve $L$. If $P(x,y)$ and $Q(x,y)$ have continuous first-order partial derivatives on $D$, then:
>     $$\iint_{D}\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}\sigma =\oint_{L}Pdx+Qdy$$


**Explanation**
- Note:
	- The range of Green's theorem used `->` must be on a closed region: that is, the curve is closed;
	- The positive and negative directions are relative to the current area;
- Where:
	- `L` is the positive boundary curve of region `D`;

**Supplement**: Closing an open path before applying Green's theorem
- For an open path, add a convenient auxiliary segment to form a closed curve, apply Green's theorem, and then subtract the integral over the auxiliary segment.

**Theorem**: #Usinglineintegralsisindependentofthepath
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> $\text{ i) Determination: }\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x} (\text{ Region }D\text{ Simply connected }))$
> $ii)\text{ Calculation }:$
> (a) Change path: First, change to a simpler path (usually along the coordinate axis).
> (b) Using a potential function: $\int_{(x_{1},y_{1})}^{(x_{2},y_{2})}P\mathrm{d}x+Q\mathrm{d}y=F(x_{2},y_{2})-F(x_{1},y_{1})$
> Methods for finding the potential function: 1. Integrate one partial derivative and determine the remaining function; 2. Complete the total differential.

### 11.2.3 The Relationship Between Two Classes of Line Integrals
**Theorem**: #Theconnectionbetweenthetwotypesoflineintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{L}P\mathbf{d}x+Q\mathbf{d}y=\int_{L}(P\cos\alpha+Q\cos\beta)\mathbf{d}s$$

### 11.2.4 Calculation Method: Space
#### 11.2.4.1 Direct Method
**Theorem**: #Secondspatialcalculationsforcurvedareafractions
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $\text{ Let }L:x=x(t),y=y(t),z=z(t),\quad t\in[\alpha,\beta]$
> $$\int_{L}P(x,y,z)dx+Q(x,y,z)dy+R(x,y,z)dz\\=\int_{a}^{\beta}\{P[x(t),y(t),z(t)]x^{\prime}(t)+Q[x(t),y(t),z(t)]y^{\prime}(t)+\\R[x(t),y(t),z(t)]z^{\prime}(t)\}dt$$

#### 11.2.4.2 Stokes Formula
**Theorem**: #Stokesformula
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\int_{L}P(x,y,z)\mathrm{d}x+Q(x,y,z)\mathrm{d}y+R(x,y,z)dz=$$ ![Pasted image 20240521214413](/assets/notes/f7f6cb8cc62a-Pasted-image-20240521214413.png)

**Explanation**
- When planar: choose the first method
- Other times: choose the second option

## 11.3 Category I Curvaturous Area Partitions
### 11.3.1 Surface Integrals of the First Kind
**Example**: Given that a curved surface component has a continuous surface density ρ(x, y, z), find its mass M;
- Illustration
	- ![Pasted image 20240212143059](/assets/notes/ad52d081b939-Pasted-image-20240212143059.png)
- Multiply the density on each small area by its area, then sum them all to get the complete mass: $M=\lim_{\lambda\to0}\sum_{k=1}^n\rho(\xi_k,\eta_k,\zeta_k){\Delta S_k}$

**Definition**: #Thefirstcategoryistheareaofcurves
> <font color="#ccc1d9"> description: </font> $\text{ Let }\sum\text{ It is a smooth curved surface },f(x,y,z)\text{ It is defined as }\sum\text{ The first one }\text{ If }\Sigma\text{ Perform arbitrary segmentation and arbitrary local area point selection },$ can be obtained
> Product sum limit: $\lim_{\lambda\to0}\sum_{k=1}^nf\left(\xi_k,\eta_k,\zeta_k\right)\Delta S_k$ exists in both cases, then this limit is called the function $f(x,y,z)$ the area component of the surface $\Sigma$ over the surface;
> Written as: $$\iint_{\Sigma}f(x,y,z)dS=\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_{i},\eta_{i},\zeta_{i})\Delta S_{i}$$

**Explanation**
- Concept:
	- $ds$ Area equivalent to a small curved surface;
	- $f(x,y,z)$ Density equivalent to the surface of the surface;
	- $f(x,\gamma,z)\operatorname{d}S$ represents the mass of a small piece;
	- $\iint_{\Sigma}f(x,\gamma,z)\operatorname{d}S$ represents the sum limit for each small piece on the entire face;
	- $\Sigma$ Called the integration surface;
- Explanation:
	- Multiply each function value by the area of its small surface element, sum, and take the limit. This first-kind surface integral is independent of orientation.
- Nature:
	- 1. Integration surface independence: $$\iint_{\Sigma}f(x,y,z)dS=\iint_{-\Sigma}f(x,y,z)dS$$
	- 2. Existence of the surface part of the surface area: $\text{ If } f(x,y,z)\text{ On smooth curved surfaces }\sum\text{ Continuous on the upper stage }$, then the area component of the area of curvature exists;
	- 3. Additivity to the integration domain: If $\sum$ is smooth in shards, then $\iint_{\Sigma}f(x,y,z)\operatorname{d}S=\iint_{\Sigma_{1}}f(x,y,z)\operatorname{d}S+\iint_{\Sigma_{2}}f(x,y,z)\operatorname{d}S$
	- 4. Linear properties of integration: $$\begin{aligned}\iint_{\Sigma}[k_1f(x,y,z)\pm k_2g(x,y,z)]&\operatorname{d}S=k_1\iint_{\Sigma}f(x,y,z)\operatorname{d}S\pm k_2\iint_{\Sigma}g(x,y,z)\operatorname{d}S\end{aligned}$$

### 11.3.2 Calculation of Curvature Integrators of Area
#### 11.3.2.1 Direct Method
**Theorem**: #Calculationofthefirsttypeofcurvedareaanalysis
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> There is a smooth surface with $\Sigma:  z=z(x,  y),  (x,  y)\in D_{xy},  f(x,  y,  z)$ continuity on $\sum$
> then surface integral $\iint_{\Sigma}f(x,  y,  z)dS$ exists $, $ and has:
> $$\iint_{\Sigma}f(x,y,{z}){\mathrm{d}S}=\iint_{D_{xy}}f(x,y,z(x,y))\sqrt{1+{z_x}^2(x,y)+{z_y}^2(x,y)}\mathrm{d}x\mathrm{d}y$$

**Explanation**
- Essence:
	- Project the hard-to-find surface area onto a plane double integral on x and y to complete the calculation;
	- That is, project the surface $\sum$ onto $D_{xy}$ and convert it into a double integral on `D`;
	- ${\text{ If a surface is defined by the equation }x}=x(y,z){\text{ or }\operatorname*{y}}=y(z,x)\text{ Given , it can similarly differentiate the area of a given area into corresponding parts }\text{ The double integral }$；
- Conversion:
	- Substitute z with the expression about xy to get the double integral;
- Note:
	- When a form like $x^2+y^2=1$ appears, where the central axis is the `z` axis, it cannot be done directly;
	- At this point, $y=y(x,z)$ `->` $\iint_{\Sigma}f(x,y,{z}){\mathrm{d}S}=\iint_{D_{xy}}f(x,y=y(x,z),z)\sqrt{1+{z_x}^2(x,z)+{z_z}^2(x,z)}\mathrm{d}x\mathrm{d}z$ should be used
	- Similarly, for $x=x(y,z)$ form;

#### 11.3.2.1 Parity and Symmetry
**Theorem**: #Theparityofthefirsttypeofsurfacefraction
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> if the surface $\sum$ is symmetric about $xoy$, then:
> $$\iint_{\Sigma}f(x,y,z)\mathrm{d}S=\begin{cases}2\iint_{\sum_{z>0}} f(x,y,z)\mathrm{d}S,&f(x,y,-z)=f(x,y,z)\\0&f(x,y,-z)=-f(x,y,z)\end{cases}$$


**Key Point**: Symmetry
- $x^2+y^2+z^2=1$ Good symmetry;
- Therefore, symmetry can be used to simplify the calculation: $\iint_{\Sigma}(x^2+y^2)ds=(\frac{2}{3})\iint (x^2+y^2+z^2)ds=(\frac{2}{3})\iint 1ds=\frac{2}{3}4\pi$

## 11.4 Surface Integrals of the Second Kind
### 11.4.1 Projection toward surfaces and surface elements
**The surface specified on the side is called a directed surface, whose direction is represented by the direction of the normal vector**
![Pasted image 20240212153621](/assets/notes/68f43fccddef-Pasted-image-20240212153621.png)
- Let $\Sigma$ be the directed surface $, $ and the projection of its surface element $\Delta S$ on the $xOy$ surface is denoted as $\left(\Delta S\right)_{xy}$

### 11.4.2 Surface Integrals with Respect to Coordinates
**Definition**: #Thesecondcategoryisthecurvatureareaclassification
> <font color="#ccc1d9"> description: </font> $$\iint_{\Sigma}R(x,y,z)dxdy=\lim_{\lambda\to0}\sum_{i=1}^nR(\xi_i,\eta_i,\zeta_i)(\Delta S_i)_{xy}$$

**Explanation**
- Note: The second type of curved area has direction
- Concept: What is the orientation of a surface?
	- The direction of a surface is the lateral direction of the surface: if the normal direction is up, then the side faces up; if the normal direction is downward, then the side faces down;
- Explanation:
	- The function value of a point $R(\xi_i,\eta_i,\zeta_i)$ multiplied by its projection on `xy`: $(\Delta S_i)_{xy}$
	- If it is $dxdy$ `->` projection on `xy`;
	- If it is $dzdx$ `->` projection on `xz`;
- Properties: Related to the direction of the integrating surface
	- Change the direction of the surface, with opposite values;
	- $$\iint_{\Sigma}Pdydz+Qdzdx+Rdxdy=-\iint_{-\Sigma}Pdydz+Qdzdx+Rdxdy$$

### 11.4.3 Calculating Surface Integrals of the Second Kind
#### 11.4.3.1 Direct Method
**Theorem**: #Calculationofthesecondtypeofcurvedareafraction
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> Let the integrands be continuous on the smooth surface $\Sigma$.
> 1. If $\Sigma:z=z(x,y)$ over $D_{xy}$, then
> $$\iint_{\Sigma}R\,dx\,dy=\pm\iint_{D_{xy}}R(x,y,z(x,y))\,dx\,dy.$$
> 2. If $\Sigma:x=x(y,z)$ over $D_{yz}$, then
> $$\iint_{\Sigma}P\,dy\,dz=\pm\iint_{D_{yz}}P(x(y,z),y,z)\,dy\,dz.$$
> 3. If $\Sigma:y=y(z,x)$ over $D_{zx}$, then
> $$\iint_{\Sigma}Q\,dz\,dx=\pm\iint_{D_{zx}}Q(x,y(z,x),z)\,dz\,dx.$$

**Explanation**
- Explanation:
	- Convert the surface integral to a double integral over the appropriate projection domain.
- Selection of positive and negative signs:
	- If projecting onto `xy`:
		- Make the integral `->` positive sign on the upper side;
		- Score the `->` minus sign on the lower side;
	- If projecting onto `yz`:
		- The front side of `yoz` `->` positive sign;
		- The `->` minus sign behind `yoz`;
	- If projecting onto `xz`:
		- `xoz` `->` to the right of the positive sign;
		- The left side of `xoz` `->` minus;
- Note:
	- If at `z=f(x,y)`:
	- If `x` is a constant `->` the projected field is a line, then the integral equals `0`;
	- If `y` is a constant `->` the projection field is also a line, then the integral equals `0`;

#### 11.4.3.2 Gaussian Formula
**Theorem**: #Gausssformula
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\oint\oint_{\Sigma_{\text{ Outside }}}P\mathrm{d}y\mathrm{d}z+Q\mathrm{d}zdx+R\mathrm{d}x\mathrm{d}y=\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)\mathrm{d}V$$

**Explanation**
- Concept:
	- Establish the relationship between the quadrilateral area of a closed surface and the threefold integral of the spatial body on the region enclosed by the surface;
	- In fact, it is a conclusion completely similar to Green's formula in the integral of curves;
	- Green's theorem establishes the relationship between the line integral of a closed curve in a plane and the double integral on the region enclosed by the closed curve;

**Supplement**: Use the Gaussian formula to cover the surface
- When the surface is not closed, add a face using the Gaussian formula;
- Then, the result calculated using Gauss's formula `-` is added to the added part;

### 11.4.4 The Relationship Between Two Types of Curvature Divisions
**Concept**: The relationship between two types of curved area fractions
- Formula: $$\iint_{\Sigma}(P\cos\alpha+Q\cos\beta+R\cos\gamma)\mathrm{d}S=\iint_{\Sigma}(P\mathrm{d}y\mathrm{d}z+Q\mathrm{d}z\mathrm{d}x+R\mathrm{d}x\mathrm{d}y)$$
- Explanation:
	- The right end is a type II area unit;
	- The left end is a type I area partition;
	- $(\cos\alpha,\cos\beta,\cos\gamma)$ are the direction cosines of the surface normal at that point.

# Chapter 12: Determinants and Matrices
![Pasted image 20241028005929](/assets/notes/c9ecce3933b2-Pasted-image-20241028005929.png)
![Pasted image 20241028005942](/assets/notes/04af5a5e9ea2-Pasted-image-20241028005942.png)
![Pasted image 20241028010002](/assets/notes/c600346bcb41-Pasted-image-20241028010002.png)
![Pasted image 20241028010026](/assets/notes/0b39d3ffc702-Pasted-image-20241028010026.png)
![Pasted image 20241028010047](/assets/notes/b446ca1f9110-Pasted-image-20241028010047.png)
![Pasted image 20241028010128](/assets/notes/e510c001a19b-Pasted-image-20241028010128.png)
![Pasted image 20241028010222](/assets/notes/e898ab83b5f5-Pasted-image-20241028010222.png) ![Pasted image 20241028010231](/assets/notes/fa8ad0b32721-Pasted-image-20241028010231.png)
![Pasted image 20241028010337](/assets/notes/62874108cf57-Pasted-image-20241028010337.png)
![Pasted image 20241028010359](/assets/notes/abf68aaadb12-Pasted-image-20241028010359.png)
![Pasted image 20241028010446](/assets/notes/8e215f95e101-Pasted-image-20241028010446.png)
![Pasted image 20241028010454](/assets/notes/0b8669d01e89-Pasted-image-20241028010454.png)

# Chapter 13: Vectors
![Pasted image 20241028010547](/assets/notes/1457e0c54953-Pasted-image-20241028010547.png) ![Pasted image 20241028010551](/assets/notes/5578840c20ab-Pasted-image-20241028010551.png) ![Pasted image 20241028010559](/assets/notes/6028a884a5ca-Pasted-image-20241028010559.png) ![Pasted image 20241028010611](/assets/notes/02c0bf476925-Pasted-image-20241028010611.png) ![Pasted image 20241028010617](/assets/notes/0c766c0728b9-Pasted-image-20241028010617.png)
![Pasted image 20241028010632](/assets/notes/047952454dcc-Pasted-image-20241028010632.png)
![Pasted image 20241028010648](/assets/notes/4100edce3e7d-Pasted-image-20241028010648.png)

# Chapter 14: Systems of Linear Equations
![Pasted image 20241028010708](/assets/notes/f7adfa294b6d-Pasted-image-20241028010708.png)
![Pasted image 20241028010718](/assets/notes/4a0325844810-Pasted-image-20241028010718.png)
![Pasted image 20241028010727](/assets/notes/58599a8df908-Pasted-image-20241028010727.png)
![Pasted image 20241028010744](/assets/notes/de0aa27eb851-Pasted-image-20241028010744.png)
![Pasted image 20241028010754](/assets/notes/b8ff024e8cb0-Pasted-image-20241028010754.png)
![Pasted image 20241028010800](/assets/notes/68f603a9d2cb-Pasted-image-20241028010800.png)
![Pasted image 20241028010812](/assets/notes/faa32564849a-Pasted-image-20241028010812.png)
![Pasted image 20241028010820](/assets/notes/60c7105115b5-Pasted-image-20241028010820.png)
![Pasted image 20241028010847](/assets/notes/2115c87000d6-Pasted-image-20241028010847.png)

# Chapter 15: Similarity
![Pasted image 20241028010922](/assets/notes/b206080a8c97-Pasted-image-20241028010922.png)
![Pasted image 20241028010927](/assets/notes/0f552dc02864-Pasted-image-20241028010927.png)
![Pasted image 20241028010934](/assets/notes/025a9dc8f2b7-Pasted-image-20241028010934.png)
![Pasted image 20241028010942](/assets/notes/cbc86215541b-Pasted-image-20241028010942.png)
![Pasted image 20241028010953](/assets/notes/f5ad58956ecc-Pasted-image-20241028010953.png)
![Pasted image 20241028011050](/assets/notes/f0eeee29cfa8-Pasted-image-20241028011050.png)

# Chapter 16: quadratic forms
![Pasted image 20241028011113](/assets/notes/cefdefe49b62-Pasted-image-20241028011113.png)
![Pasted image 20241028011124](/assets/notes/723edf4a95d8-Pasted-image-20241028011124.png)
![Pasted image 20241028011216](/assets/notes/ecb424b338fb-Pasted-image-20241028011216.png)
![Pasted image 20241028011226](/assets/notes/07a9b37078e5-Pasted-image-20241028011226.png)
![Pasted image 20241028011241](/assets/notes/3ba3c8b83caa-Pasted-image-20241028011241.png)
![Pasted image 20241028011251](/assets/notes/1680f3fceb13-Pasted-image-20241028011251.png)

# Chapter 17: Random Variables
![Pasted image 20241029194839](/assets/notes/c62c7e4c8608-Pasted-image-20241029194839.png)
![Pasted image 20241029194946](/assets/notes/fa3a623c31c2-Pasted-image-20241029194946.png)
![Pasted image 20241029194957](/assets/notes/b812aa1e7679-Pasted-image-20241029194957.png)
![Pasted image 20241029195005](/assets/notes/b3c377b1a7a7-Pasted-image-20241029195005.png)
![Pasted image 20241029195037](/assets/notes/50f5f0eae383-Pasted-image-20241029195037.png)
![Pasted image 20241029195044](/assets/notes/124142ba5842-Pasted-image-20241029195044.png)
![Pasted image 20241029195052](/assets/notes/4186554d25ce-Pasted-image-20241029195052.png)
![Pasted image 20241029195105](/assets/notes/73db7deda0d9-Pasted-image-20241029195105.png)
![Pasted image 20241029195115](/assets/notes/d204c46e9455-Pasted-image-20241029195115.png)
![Pasted image 20241029195125](/assets/notes/c58f88bf21a4-Pasted-image-20241029195125.png)
![Pasted image 20241029195133](/assets/notes/7ca31bf6f945-Pasted-image-20241029195133.png)
![Pasted image 20241029195149](/assets/notes/9522a4ab2de8-Pasted-image-20241029195149.png)
![Pasted image 20241029195202](/assets/notes/429a82b9a6c2-Pasted-image-20241029195202.png)
![Pasted image 20241029195216](/assets/notes/88a76b658952-Pasted-image-20241029195216.png)
![Pasted image 20241029195224](/assets/notes/63cb2748c824-Pasted-image-20241029195224.png)
![Pasted image 20241029195233](/assets/notes/940888962598-Pasted-image-20241029195233.png)
![Pasted image 20241029195255](/assets/notes/ba71802cb99d-Pasted-image-20241029195255.png)
![Pasted image 20241029195313](/assets/notes/5dc020477664-Pasted-image-20241029195313.png)

# Chapter 18: One-dimensional random variables
![Pasted image 20241029195357](/assets/notes/f79bf1869304-Pasted-image-20241029195357.png)
![Pasted image 20241029195405](/assets/notes/f14522737918-Pasted-image-20241029195405.png)
![Pasted image 20241029195415](/assets/notes/4442d7bdc2d3-Pasted-image-20241029195415.png)
![Pasted image 20241029195434](/assets/notes/139e2dd88fc9-Pasted-image-20241029195434.png)
![Pasted image 20241029195446](/assets/notes/1d7f5bfa10e9-Pasted-image-20241029195446.png)
![Pasted image 20241029195454](/assets/notes/058655c40ba1-Pasted-image-20241029195454.png)
![Pasted image 20241029195502](/assets/notes/4ccc2bf26a71-Pasted-image-20241029195502.png)
![Pasted image 20241029195516](/assets/notes/031795a0c446-Pasted-image-20241029195516.png)
![Pasted image 20241029195523](/assets/notes/df121c644eb3-Pasted-image-20241029195523.png)
![Pasted image 20241029195530](/assets/notes/454271b655d9-Pasted-image-20241029195530.png)
![Pasted image 20241029195545](/assets/notes/5e1732e2d196-Pasted-image-20241029195545.png)
![Pasted image 20241029195557](/assets/notes/28c2a6702cf5-Pasted-image-20241029195557.png)
![Pasted image 20241029195604](/assets/notes/6d0a78ec314f-Pasted-image-20241029195604.png)
![Pasted image 20241029195614](/assets/notes/ccab5e67de0f-Pasted-image-20241029195614.png)
![Pasted image 20241029195632](/assets/notes/4afc476b23f8-Pasted-image-20241029195632.png)
![Pasted image 20241029195642](/assets/notes/10a91d6e5a8c-Pasted-image-20241029195642.png)
![Pasted image 20241029195653](/assets/notes/5388137421b9-Pasted-image-20241029195653.png)
![Pasted image 20241029195719](/assets/notes/5870db8dc447-Pasted-image-20241029195719.png)
![Pasted image 20241029195730](/assets/notes/0b21f9eeceff-Pasted-image-20241029195730.png)

![Pasted image 20241029195756](/assets/notes/c6207593c679-Pasted-image-20241029195756.png)

# Chapter 19: Two-Dimensional Distribution Functions
![Pasted image 20241029195844](/assets/notes/af72c547c350-Pasted-image-20241029195844.png)
![Pasted image 20241029195850](/assets/notes/4707c0fe7053-Pasted-image-20241029195850.png)
![Pasted image 20241029195857](/assets/notes/74ed9a662427-Pasted-image-20241029195857.png)
![Pasted image 20241029195925](/assets/notes/66fd71412574-Pasted-image-20241029195925.png)
![Pasted image 20241029195932](/assets/notes/d7e838ccda0d-Pasted-image-20241029195932.png)
![Pasted image 20241029200000](/assets/notes/488bac13d85e-Pasted-image-20241029200000.png)
![Pasted image 20241029200010](/assets/notes/9d1c3a167a26-Pasted-image-20241029200010.png)
![Pasted image 20241029200018](/assets/notes/da98cab0c40c-Pasted-image-20241029200018.png)
![Pasted image 20241029200031](/assets/notes/f1de1804582e-Pasted-image-20241029200031.png)
![Pasted image 20241029200114](/assets/notes/884ae912dc8e-Pasted-image-20241029200114.png)
![Pasted image 20241029200122](/assets/notes/6c9a741b2f05-Pasted-image-20241029200122.png)
![Pasted image 20241029200130](/assets/notes/47cda541c3b1-Pasted-image-20241029200130.png)
![Pasted image 20241029200136](/assets/notes/ad4960094436-Pasted-image-20241029200136.png)
![Pasted image 20241029200146](/assets/notes/ef7654f56846-Pasted-image-20241029200146.png)
![Pasted image 20241029200153](/assets/notes/fc6ce0963642-Pasted-image-20241029200153.png)
![Pasted image 20241029200258](/assets/notes/d7ab5396ad51-Pasted-image-20241029200258.png)
![Pasted image 20241029200308](/assets/notes/d0e30604588f-Pasted-image-20241029200308.png)
![Pasted image 20241029200322](/assets/notes/10335d57880b-Pasted-image-20241029200322.png)
![Pasted image 20241029200328](/assets/notes/2a888795cf00-Pasted-image-20241029200328.png)

# Chapter 20: Digital Characteristics
![Pasted image 20241029200356](/assets/notes/1742e968eae6-Pasted-image-20241029200356.png)
![Pasted image 20241029200403](/assets/notes/259324246525-Pasted-image-20241029200403.png)
![Pasted image 20241029200409](/assets/notes/5c575c8bc2c6-Pasted-image-20241029200409.png)
![Pasted image 20241029200417](/assets/notes/70fed9f53989-Pasted-image-20241029200417.png)
![Pasted image 20241029200427](/assets/notes/793b223829f8-Pasted-image-20241029200427.png)
![Pasted image 20241029200443](/assets/notes/9457d445cba6-Pasted-image-20241029200443.png)
![Pasted image 20241029200452](/assets/notes/9848449577d7-Pasted-image-20241029200452.png)
![Pasted image 20241029200459](/assets/notes/cfd0d24a0a3f-Pasted-image-20241029200459.png)
![Pasted image 20241029200509](/assets/notes/861f33751ad1-Pasted-image-20241029200509.png)
![Pasted image 20241029200517](/assets/notes/fb26f9011963-Pasted-image-20241029200517.png)
![Pasted image 20241029200526](/assets/notes/70e555a1b614-Pasted-image-20241029200526.png)
![Pasted image 20241029200551](/assets/notes/b1ec4ca1edaf-Pasted-image-20241029200551.png)
![Pasted image 20241029200555](/assets/notes/5a76b937ac57-Pasted-image-20241029200555.png)
![Pasted image 20241029200608](/assets/notes/7ca3ea1b8c6d-Pasted-image-20241029200608.png)
![Pasted image 20241029200618](/assets/notes/efd82660b7b6-Pasted-image-20241029200618.png)
![Pasted image 20241029200627](/assets/notes/6f918b4c0818-Pasted-image-20241029200627.png)
![Pasted image 20241029200635](/assets/notes/4f6a4517c6a0-Pasted-image-20241029200635.png)
![Pasted image 20241029200641](/assets/notes/2eb3e08d9a1a-Pasted-image-20241029200641.png)
![Pasted image 20241029200658](/assets/notes/6853014ecab4-Pasted-image-20241029200658.png)
![Pasted image 20241029200708](/assets/notes/6f1dbac2c7fb-Pasted-image-20241029200708.png)
![Pasted image 20241029200719](/assets/notes/1e2fa824df44-Pasted-image-20241029200719.png)
![Pasted image 20241029200726](/assets/notes/c03f10660237-Pasted-image-20241029200726.png)
![Pasted image 20241029200738](/assets/notes/5606d089dd93-Pasted-image-20241029200738.png)

# Chapter 21: Mathematical Statistics
![Pasted image 20241029200808](/assets/notes/a257637a5ff6-Pasted-image-20241029200808.png)
![Pasted image 20241029200818](/assets/notes/92cf4aa3231c-Pasted-image-20241029200818.png)
![Pasted image 20241029200834](/assets/notes/2d37ec3df54c-Pasted-image-20241029200834.png)
![Pasted image 20241029200842](/assets/notes/6b4a24187e8a-Pasted-image-20241029200842.png)
![Pasted image 20241029200904](/assets/notes/187fdcc0876f-Pasted-image-20241029200904.png)
![Pasted image 20241029200918](/assets/notes/f0506bbbae41-Pasted-image-20241029200918.png)
![Pasted image 20241029200927](/assets/notes/6e21b7cbae02-Pasted-image-20241029200927.png)
![Pasted image 20241029200939](/assets/notes/840f0a51ea04-Pasted-image-20241029200939.png)
![Pasted image 20241029200945](/assets/notes/0e43982969c0-Pasted-image-20241029200945.png)
![Pasted image 20241029200955](/assets/notes/7a909b548fcc-Pasted-image-20241029200955.png)
![Pasted image 20241029201006](/assets/notes/63f1cc00518b-Pasted-image-20241029201006.png)

# Chapter 22: Parameter Estimation and Hypothesis Testing
![Pasted image 20241029201039](/assets/notes/0e833d126eb5-Pasted-image-20241029201039.png)
![Pasted image 20241029201102](/assets/notes/5081aeb43f01-Pasted-image-20241029201102.png)
![Pasted image 20241029201111](/assets/notes/b348d384d98c-Pasted-image-20241029201111.png)
![Pasted image 20241029201117](/assets/notes/c79a9e81f08d-Pasted-image-20241029201117.png)
![Pasted image 20241029201129](/assets/notes/7455e11f6976-Pasted-image-20241029201129.png)
![Pasted image 20241029201143](/assets/notes/8b641be2be4c-Pasted-image-20241029201143.png)
![Pasted image 20241029201151](/assets/notes/61378742046d-Pasted-image-20241029201151.png)
![Pasted image 20241029201157](/assets/notes/bf200b06ee7b-Pasted-image-20241029201157.png)
![Pasted image 20241029201212](/assets/notes/d2f470382b9d-Pasted-image-20241029201212.png)
![Pasted image 20241029201226](/assets/notes/b20f2270b0e5-Pasted-image-20241029201226.png)
![Pasted image 20241029201231](/assets/notes/9a4991cb2265-Pasted-image-20241029201231.png)
![Pasted image 20241029201238](/assets/notes/52d49a4a7669-Pasted-image-20241029201238.png)
![Pasted image 20241029201246](/assets/notes/4b700c92f387-Pasted-image-20241029201246.png)
![Pasted image 20241029201254](/assets/notes/c4988cfae1fd-Pasted-image-20241029201254.png)
