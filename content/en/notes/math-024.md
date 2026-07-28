---
title: "Lecture 16: Basic Concepts of Derivatives"
slug: math-024
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 16: Basic Concepts of Derivatives. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2023-12-13
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Derivatives and Differentials"]
---

## Common Question Types and Typical Examples in This Chapter
**Exam Content**
 - 1. Concepts of Derivatives and Differentials (Difficult Points)
 - 2. Derivative formulas and differentiation rules (Key Points)
 - 3. Higher-Order Derivatives (Difficult Point)

**Typical Example Problems**
- Problem Type 1: Definition of Derivatives (Difficult Point)
- Problem Type 2: Composite Functions, Implicit Functions, and Differentiation of Parametric Equations (Key Focus)
- Problem Type 3: Advanced Derivatives (Difficult Point)
- Problem Type 4: Derivative Applications

---
## 1.1 Definition of Derivatives
### 1.1.1 Basic Concepts
**Why Derivatives Are Needed**
At a point, the derivative is the limit of the ratio between the change in the dependent variable and the change in the independent variable. It describes **the instantaneous rate at which the dependent variable changes with the independent variable**.
- A derivative is a special limit of average rates of change as the interval approaches zero.

#####**Definition**: #Whatisaderivative
> <font color="#ccc1d9">Description:</font> If $\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$ exists, then $f$ is differentiable at $x_0$.
> Another form: $f^{\prime}(x_0)=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}$
> Form One: $f^{\prime}(x_0)=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$
> Form 2: $f^{\prime}(x_0)=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}$

**Explanation**
- Equivalent form:
	- Because $x_0+\Delta x=x\quad\Delta x=x-x_0.$
	- So $f^{\prime}(x_0)=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}$
	- Other forms: $f^{\prime}(x_0)=y^{\prime}|_{x=x_0}=\frac{dy}{dx}|_{x=x_0}$
- Note:
	- 1. The derivative of a point is related to $f(x_0)$;
	- 2. $f(x_0)$ is a fixed point, $f(x)$ is a moving point;
	- 3. If the limit does not exist, then $f(x)$ is said to be non-differentiable at $x_{0}$;
	- 4. If the limit is infinite, then $f(x)$ is called the derivative at $x_{0}$ that the derivative is infinite (the derivative is infinite and is non-differentiable).

**What is differentiability**
- $\frac{dy}{dx}=k$ 。 That is, the ratio of $\Delta y$ to $\Delta x$;
- If the value can be found, it is differentiable; if not, it is non-differentiable.

**Derivation**: Suppose the current distance function is $d(s)=t^3$, the current derivative is $v(t)$, let $t=3$
- Derivation of rate of change near a point: $\begin{gathered}\text{Derivative}\\\frac{ds}{dt}(t)=\underbrace{\frac{s(t+dt)-s(t)}{dt}}_{dt\to0}\end{gathered}$
- Suppose at point $t=2$, find the tangent at this point: $\begin{aligned}\frac{ds}{dt}(2)=\frac{\left(2+dt\right)^3-\left(2\right)^3}{dt}\end{aligned}$
- Now expand $(2+dt)^3$ to get: $\begin{aligned}\frac{2^3+3(2)^2dt+3(2)(dt)^2+(dt)^3-2^3}{dt}\end{aligned}$
- Dividing it by $dt$ gives the $3(2)^2+3(2)(dt)+(dt)^2$
- At this point, as $dt$ approaches infinite hours, we get: $\frac{ds}{dt}(2)=3(2)^2=12$
- If $t=2$ in it is changed to a general expression $t=t$, we get: $\frac{ds}{dt}(t)=3(t)^2$

#####**Definition**: #Leftderivativeandrightderivative
> <font color="#ccc1d9"> description: </font> $\begin{aligned}&\text{ Left derivative: }f_0^{\prime}(x_0)=\lim_{\Delta x\to0^-}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{x\to x_0^-}\frac{f(x)-f(x_0)}{x-x_0}\\&\text{ Right derivative: }{f_0^{\prime}(x_0)}=\lim_{\Delta x\to0^+}\frac{f(x_0+\Lambda x)-f(x_0)}{\Delta x}=\lim_{x\to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}\end{aligned}$

**Explanation**
- The function of the left derivative should be marked with a minus sign below
- For the function of the right derivative, add a positive sign below it

#####**Theorem**: #Therelationshipbetweenleftrightderivativesandderivatives
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $f^{\prime}(x_0)=a\Leftrightarrow f_-^{\prime}(x_0)=f_+^{\prime}(x_0)=a$

**Explanation**
- The relationship between the left and right derivatives: differentiable `<-->`**The left and right derivatives exist and are equal**;

#####**Definition**: #Theintervalcanbeguided
> <font color="#ccc1d9"> Description: </font> differentiable on the interval = every point on the interval has a derivative;
> 1. $(a,b)$: Every point on the interval is differentiable;
> 2. $[a,b]$: Every point on the interval is differentiable, and point a is differentiable to the right and point b to the left;


## 1.2 Definition and Proof of Derivatives
**Guided on the Interval**
Each point within an interval has a derivative, which is called in-interval differentiable;
The function formed by this derivative is called the derivative of the function;

**Derivative Functions**
$f^{\prime}(x)\quad x\in I$

### 1.2.1 Prove the derivative of a function
**Title:**$\left(a^x\right)^{\prime}=a^x\ln a\left(a>0,a\neq1\right)$
- Proof process:
	- $\lim_{\Delta x\to0}\frac{a^{x+\Delta x}-a^x}{\Delta x}=\lim_{\Delta x\to0}\frac{a^x\left[a^{\Delta x}-1\right]}{\Delta x}=a^x\ln a$
- Here, step two directly becomes a step of LNA because there is an equivalent limit: $\lim_{x\to0}\frac{a^x-1}{x}=\ln a$

**Question**: $(\sin x)^{\prime}=\cos x$
- Proof process:
	- $\lim_{\Delta x\to0}\frac{\sin(x+\Delta x)-\sin x}{\Delta x}=\lim_{\Delta x\to0}\frac{2\sin\frac{\Delta x}{2}\cos\frac{2x+\Delta x}{2}}{4x}$
- Because sinx~x, so:
	- $\operatorname*{lim}_{\Delta x\rightarrow0}\frac{2-\frac{\Delta x}{2}\sin\frac{2x+\Delta x}{2}}{\Delta x}=\cos x$

### 1.2.2 Geometric Meaning of Derivatives
**Derivative Functions and Tangents**
- Definition:
	- derivative $f^{\prime}(x_0)$ Geometrically, expressed as the slope of the tangent line to the curve $y=f(x)$ at the point $\left(x_0,  f(x_0)\right)$
- Tangents and Normals:
	- Tangent equation: $y-y_{0}=f^{\prime}(x_{0})(x-x_{0})$
	- Normal equation: $y-y_0=-\frac1{f^{\prime}(x_0)}(x-x_0)$
- Illustration:
	- ![Pasted image 20240314175211](/assets/notes/8d18c940abd3-Pasted-image-20240314175211.png)

**Derivatives and Tangents**
- differentiability must have tangents;
- Having tangents does not necessarily mean differentiability;

## 1.3 Frequently Tested Question Types

### Question Type: #Piecewisefunctionsdiscussdifferentiabilityattheboundarypoint
**Question Type 1**: Does the left-right derivative exist?
- For example, in piecewise functions, analyze whether left and right derivatives exist at a certain point;
- Method: Use definitions
- A point left derivative exists: $f_0^{\prime}(x_0)=\lim_{\Delta x\to0^-}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=\lim_{x\to x_0^-}\frac{f(x)-f(x_0)}{x-x_0}$
	- After substituting $x_0$ points, calculate the limit of this point, then check whether its value equals the derivative and whether the derivative value exists;

**Note**: For piecewise functions, when finding the derivative with value, you need to bring the value to the point where the point is defined. For example, x = 1 is the dividing point. Among the values less than or equal to 1 and greater than 1, the part of the function less than or equal to 1 can be carried in the value;


### Question Type: #Definitionofderivatives
#### PART 1: Problem-solving methods
**Features**: Similar forms such as $f^{\prime}(x_0)=-1$ point derivative exist, which often test the definition of a point derivative;

**Core Idea**: Rounding the current derivative into a form similar to the definition of a derivative;
- Form: $f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}$.
- The numerator in division has one dynamic and one definite, so this form must be formed;
- Supplement: Condition analysis
	- When $x=0$ is differentiable and $f(0)=0$ appears, the definition of derivative at 0 point must be used;

**Similar Question Type**: Derivative zero deciding problem
- Example: $\text{ Among the following functions, }x=\mathbf{0}\text{ Could it be settled? }\text{ What can be derivated is: }$
- Common conclusion: Let $f(x)=A(x)x-a$, where $A(x)$ is continuous at x=a, then the necessary and sufficient condition for $f(x)$ to be differentiable at x=a is: $A(x)=0$

**Related problem type**: An expression such as $\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}{h}$ is used to test differentiability at a point.
- Method: write the increment as $h$. The derivative exists only if the difference-quotient limits as $h\to0^+$ and $h\to0^-$ both exist and are equal.

#### PART 2: Typical Example Problems
**Example Question**: $\text{ Known }f^{\prime}(x_0)=-1,\text{ then }\lim_{x\to0}\frac x{f(x_0-2x)-f(x_0-x)}=？$
- Analysis
	- Form the form of the derivative definition;
	- You can also use concrete functions to substitute the evaluation (since it's a fill-in-the-blank question);
- Analysis
	- $\lim_{x\to0}\frac{f(x_{0}-2x)-f(x_{0}-x)}{x}=\lim_{x\to0}\frac{f(x_{0}-2x)-f(x_{0})}{-2x}\cdot\frac{-2x}{x}-\lim_{x\to0}\frac{f(x_{0}-x)-f(x_{0})}{-x}\cdot\frac{-x}{x}$
- Question Type: #Definitionofderivatives

**Example**: It is known that $f(x)$ is differentiable at $x=0$, and $f(0)=0, $ then $\quad\lim_{x\to0}\frac{x^2f(x)-2f(x^3)}{x^3}$ =?
- Analysis
- Analysis
- Question Type: #

#### PART 3: Key Points Review
**Note**: A derivative exists at a point iff the corresponding two-sided difference-quotient limit exists.
- If the derivative is known to exist, the limit in the derivative definition may be used directly.
- To prove differentiability, prove that the two-sided difference-quotient limit exists, or that the left and right limits both exist and are equal.

### Question Type: #Derivativeapplication
#### PART 1: Problem-solving methods
**Question Type 1**: The geometric meaning of derivatives
- Find the slope of the tangent: $k_{\text{ Tch }}=\frac{dy}{dx}$
- Find the slope of the normal: $k_{\text{ Law }}=-\frac1{k_{\text{ Tch }}}$

**Question Type 2**: Correlation Change Rate
- 1. Establishing relationships between related quantities;
- 2. Derivative of both sides of the equation with respect to t;

#### PART 2: Typical Example Problems
**Example Question**: The normal equation at the point of $\left.\text{ Curve }\left\{\begin{aligned}x&=\arctan t,\\y&=\ln\sqrt{1+t^2},\end{aligned}\right.\text{ The above corresponds }{t=1}\right.$
- Analysis
- Analysis
- Question Type: #

## 1.4 Derivative Derivatives
**Examples of Distance and Speed**
- s is $s(t)$
- Distance and speed relationship
	- ![Pasted image 20240324194344](/assets/notes/7e59f48dbce8-Pasted-image-20240324194344.png)
- Amount of change:
	- ![Pasted image 20240324194646](/assets/notes/f604f8755a5f-Pasted-image-20240324194646.png)
- Derivation of rate of change near a point: $\begin{gathered}\text{Derivative}\\\frac{ds}{dt}(t)=\underbrace{\frac{s(t+dt)-s(t)}{dt}}_{dt\to0}\end{gathered}$
- Suppose at point $t=2$, find the tangent at this point: $\begin{aligned}\frac{ds}{dt}(2)=\frac{\left(2+dt\right)^3-\left(2\right)^3}{dt}\end{aligned}$
- Now expand $(2+dt)^3$ to get: $\begin{aligned}\frac{2^3+3(2)^2dt+3(2)(dt)^2+(dt)^3-2^3}{dt}\end{aligned}$
- Dividing it by $dt$ gives the $3(2)^2+3(2)(dt)+(dt)^2$
- At this point, as $dt$ approaches infinite hours, we get: $\frac{ds}{dt}(2)=3(2)^2=12$
- If $t=2$ in it is changed to a general expression $t=t$, we get: $\frac{ds}{dt}(t)=3(t)^2$
