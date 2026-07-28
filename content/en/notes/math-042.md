---
title: "Lecture 34: Application of Definite Integrals"
slug: math-042
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 34: Application of Definite Integrals. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-01-24
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Definite and Improper Integrals"]
---

## Common Question Types and Typical Example Questions
**Frequently Tested Contents**
- (1) Geometric applications
- (2) Physical applications

**Common Question Types and Typical Examples**
- Problem Type 1: Geometric Applications
- Question Type 2: Physics Applications

## 1.1 Concept Introduction
**What Problems Are Suitable to Be Solved Using Definite Integrals**
- 1) Non-uniform continuous distribution in $[a,b]$
- 2) The quantity to be obtained is additive to the interval

**Method**
- First, find the scope
- Find the smallest value of its derivative within a tiny range (approximate value, find the differential element)
- Perform the integral and find the integral of the function on the range a to b

## 1.2 Geometric applications
### 1.2.1 Area of Plane Figures
#### 1.2.1.2 Basic Concepts
**Concept**
- Scenario 1: Plane coordinates
	- If the plane field $D$ is enclosed by curves $y=f(x),y=g(x)(f(x)\geq g(x))$ and $x=a,\quad x=b\quad(a<b)$, then:
	- $$S=\int_{a}^{b}[f(x)-g(x)]dx$$
	- Find a region D on the plane,
- Scenario 2: Polar coordinates
	- If the plane field $D$ is enclosed by curve $\rho=\rho(\theta),\theta=\alpha,\theta=\beta(\alpha<\beta)$, then:
	- $$S=\frac 12\int_\alpha^\beta\rho^2 (\theta)\mathrm{d}\theta$$

**More General Formulas**
- Formula:
	- $$S=\int\int_{D}^{S}1db$$
- Example: Using double integrals, x first, then y
	- $\text{ Let }D\text{ It is based on curves }xy+1=0\text{ and a straight line }$ $y+x=0\text{ and }y=2\text{ The bounded area enclosed is }D\text{ The area of is }$
	- Solution: $\begin{aligned}S&=\int_{0}^{1}db\\&=\int_{1}^{2}dy\int_{0}^{-\frac{1}{y}}dx\end{aligned}=\int_{1}^{2}(y-\frac{1}{y})dy=(\frac{1}{2}y^{2}-2,y)|_{1}^{2}$


#### 1.2.1.2 Example problems
**Example Problem**: Find the area enclosed by curves $y^2=x$ and $y=x^2$.
- Analysis
	- ![Pasted image 20240131142232](/assets/notes/97772b994909-Pasted-image-20240131142232.png)
	- Can be performed on x points
	- It can also be integrated with y
- Analysis 1: Integral with x
	- Step 1: Find the scope
		- ![Pasted image 20240131142306](/assets/notes/fbaaef2d4558-Pasted-image-20240131142306.png)
	- Part Two: Searching for Weiyuan
		- x and x+dx
		- ![Pasted image 20240131142332](/assets/notes/c6e80b9ce051-Pasted-image-20240131142332.png)
	- Step 3: Points
		- Score from 0-1
		- $\delta=\int_{0}^{1}\left(dx-x^{2}\right)dx=\frac{2}{3}-\frac{1}{3}=\frac{1}{3}$
- Question Type: #Geometricapplicationsofdefiniteintegrals

**Example Question**: $\text{ Find the cardioid line }\rho=a(1+\cos\theta)\left(a>0\right)\text{ The surrounding area }.$
- Analysis
	- Polar coordinate question types; Geometric shapes are given using polar coordinates;
	- Step 1: Its range; It is ![Pasted image 20240131150018](/assets/notes/86669d54a8c5-Pasted-image-20240131150018.png)
	- Step 2: Find the corresponding area for the corresponding figure over a tiny interval:
		- ![Pasted image 20240131150049](/assets/notes/f974e9ceede3-Pasted-image-20240131150049.png)
		- A sector shape can be approximated;
		- Micro Yuan:
			- ![Pasted image 20240131150113](/assets/notes/1b49a7ce912f-Pasted-image-20240131150113.png)
	- Step 3: Find the integral
		- ![Pasted image 20240131150129](/assets/notes/5bc854126c2e-Pasted-image-20240131150129.png)
- Analysis
	- Step one: Define the scope
		- You can draw the drawing first - > When drawing, you need to draw some**special points**first;
		- ![Pasted image 20240131150311](/assets/notes/1155e331d60d-Pasted-image-20240131150311.png)
		- Because of the characteristics of conx;
		- Determine the range: from 0 to π
			- Since the bottom half is the same as the top half, just Find the top half and multiply by 2;
			- ![Pasted image 20240131150353](/assets/notes/41f0e0225046-Pasted-image-20240131150353.png)
			- ![Pasted image 20240131150416](/assets/notes/7fbcc9288c72-Pasted-image-20240131150416.png)
	- Step 3: Solve the definite integral
		- ![Pasted image 20240131150658](/assets/notes/39066e2f6ba6-Pasted-image-20240131150658.png)
		- Since directly finding conx from 0 to PI cannot be found, but finding 0 to half PI is simple, a definite integral substitution is performed:
			- Establishment:
			- ![Pasted image 20240131150652](/assets/notes/8ad073c39bbf-Pasted-image-20240131150652.png)
		- Therefore:
			- ![Pasted image 20240131150832](/assets/notes/a8e6224f7fd8-Pasted-image-20240131150832.png)
- Question Type: #Geometricapplicationsofdefiniteintegrals

### 1.2.2 Volume of a Rotating Body
#### 1.2.2.1 Basic Concepts
**Illustration**
- Illustration: Rotate around the X-axis
	- ![Pasted image 20240131151121](/assets/notes/165df4bfaca3-Pasted-image-20240131151121.png)

#####**Theorem**: #Formulaforthevolumeofasolidrotatingbodywithdefiniteintegrals
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> 1. When rotating around the X-axis: $$V_{x}=\pi\int_{a}^{b}f^{2}(x)\operatorname{d}x$$
> 2. When rotating around the Y-axis: $$V_y=2\pi\int_a^bxf(x)\operatorname{d}x$$

**Explanation**
- Can only calculate its coordinate axes and cannot solve other problems;
- Step 1: Substitute into the formula from the original expression
- Step 2: Substitute both y and x into the formula using formulas related to t to convert them into definite integrals related to t

**More General Cases**
- Situation:
	- Any plane $D$ $ax+b^y+c=0$ around any line
- Double integral formula:
	- This is a more general formula. For the volume problem of a solid of revolution, this formula can be used at any time:
	- $$V=2\pi\int\int_{D}r(x,y)db$$
- $V_{x}=\pi\int_{a}^{b}f^{2}(x)\operatorname{d}x$ and $V_y=2\pi\int_a^bxf(x)\operatorname{d}x$ are special cases of this formula;

**Formula Selection**
- If winding around X or Y, you can use $V_{x}=\pi\int_{a}^{b}f^{2}(x)\operatorname{d}x$ and $V_y=2\pi\int_a^bxf(x)\operatorname{d}x$
- If you are traveling around any axis, you can use $V=2\pi\int\int_{D}r(x,y)db$


#### 1.2.2.2 Example problems
**Examples**: Calculate the volume of a body of revolution formed by the shape enclosed by $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ rotating once around the X-axis;
- Analysis
	- Shapes of ovals
		- You only need to calculate half of the above;
		- Not only that, you only need to calculate a quarter of the amount;
		- ![Pasted image 20240131152357](/assets/notes/e7d6f432590b-Pasted-image-20240131152357.png)
- Analysis
	- The formula for y derived from the original expression:
		- ![Pasted image 20240131152437](/assets/notes/dee2746800cc-Pasted-image-20240131152437.png)
	- According to the volume formula:
		- $V_{x}=\pi\int_{a}^{b}f^{2}(x)\operatorname{d}x$
	- And, because only a quarter is required
		- Therefore, only the $[0,a]$ range of the area it rotates is required
	- Therefore, substituting in:
		- ![Pasted image 20240131152648](/assets/notes/75f2ba96611f-Pasted-image-20240131152648.png)
- Question Type: #Geometricapplicationsofdefiniteintegrals

**Examples**: Calculate the volume of the solid of revolution measured by cycloidal lines $\begin{cases}x=a(t-\sin t)\\y=a(1-\cos t)&\end{cases}(0\leq t\leq2\pi)$ and X figures around the X-axis and Y-axis respectively;
- Analysis
	- Step 1: Substitute into the formula from the original expression
	- Step 2: Substitute both y and x into the formula using formulas related to t to convert them into definite integrals related to t
- Analysis: Find X
	- Finding the volume formula for a solid of revolution shows:
		- Since the process of turning y into a function of y and x is troublesome, in the following changes, y and x are directly converted into expressions of t and t, and the following changes are taken in:
		- ![Pasted image 20240131153411](/assets/notes/9020088aec14-Pasted-image-20240131153411.png)
	- Continue solving by letting u = t/2
		- ![Pasted image 20240131153609](/assets/notes/5a9bc9f40dc7-Pasted-image-20240131153609.png)
- Question Type: #Geometricapplicationsofdefiniteintegrals

### 1.2.3 Arc Length of Plane Curves
#### 1.2.3.1 Basic Concepts
#####**Definition**: #Arclength
> <font color="#ccc1d9"> description: </font> $$s_n=\sum_{i=1}^n\left\|\overline{M_{i-1}M_i}\right\|$$

**Explanation**
- $s_n=\sum_{i=1}^n\left\|\overline{M_{i-1}M_i}\right\|$
	- ![Pasted image 20240131160512](/assets/notes/c52e94b31be8-Pasted-image-20240131160512.png)
	- Summing many small segments
- Arc length limit: $s=\lim_{\lambda\to0}s_n=\lim_{\lambda\to0}\sum_{i=1}^n\left\|\overline{M_{i-1}M_i}\right\|$

#####**Theorem**: #Calculationofarclength
> <font color="#ccc1d9">Description: </font> $$\begin{aligned}
&1)C:y=y(x),\quad a\leq x\leq b,\quad s=\int_a^b\sqrt{1+{y^{\prime}}^2}dx \\
&2)C:\begin{cases}x=x(t)\\y=y(t)\end{cases}\alpha\leq t\leq\beta.\quad s=\int_\alpha^\beta\sqrt{x^{\prime2}+y^{\prime2}}dt \\
&3)C:\rho=\rho(\theta),\alpha\leq\theta\leq\beta.\quad s=\int_{\alpha}^{\beta}\sqrt{\rho^{2}+{\rho^{\prime}}^{2}}d\theta
\end{aligned}$$

**Explanation**
- Arc lengths are all arc differential integrals

#### 1.2.3.2 Example Problems
**Example**: $\text{ Calculate the arch of the cycloidal line }\quad x=a(t-\sin t),y=a(1-\cos t)\quad(0\leq t\leq2\pi)$ arc length
- Analysis
	- This type of question is the second form:
		- ![Pasted image 20240131162204](/assets/notes/501c25b88d93-Pasted-image-20240131162204.png)
- Analysis
	- Bring the function in:
	- ![Pasted image 20240131162350](/assets/notes/469fee3793f5-Pasted-image-20240131162350.png)
- Question Type: #Geometricapplicationsofdefiniteintegrals


### 1.2.4 Lateral Area of a Rotating Body
#####**Theorem**: #Calculationofthesideareaofarotatingbody
> 1 $S=2\pi\int_{a}^{b}f(x)\sqrt{1+f^{\prime2}(x)}dx$

**Explanation**
- Illustration:
	- ![Pasted image 20240415204510](/assets/notes/e940c3c3ad8a-Pasted-image-20240415204510.png)

## 1.3 Physical Applications
### 1.3.1 Work Done by a Variable Force
**Core**
- For water at different depths, the work done by the pump = displacement × force = displacement × density × $g$ × $dv$
- Force = density × $g$ × $dv$
- Integrating this expression gives the total work.

**Example Analysis**: The inner surface of a container is formed by rotating the curve in the figure once around the $y$-axis. The curve consists of $$x^{2}+y^{2}=2y\quad(y\geq\frac{1}{2})\qquad\text{and}\qquad x^{2}+y^{2}=1\quad(y\leq\frac{1}{2}).$$
- Questions: (1) Find the volume of the container; (II) If you want to pump all the water from the top of the container, how much work is required at least?
- Illustration:
	- ![Pasted image 20240415213032](/assets/notes/d83575448e89-Pasted-image-20240415213032.png)
- Explanation: First question
	- The volumes of the upper and lower circles are the same, so only one circle needs to be calculated by its rotation around its axis;
	- Find the area differential of the lower half of the circle:
		- Slice a thin disk from $y$ to $y+dy$. Its cross-sectional area is $\pi x^2$;
		- Multiplying by the thickness $dy$ gives the volume element $\pi x^2\,dy$;
	- Integrate this volume element from $-1$ to $\frac12$:
		- $\pi\int_{-1}^{\frac{1}{2}}x^{2}\operatorname{d}y$
	- Multiply by 2 and substitute $x^2=1-y^2$:
		- $V=2\pi\int_{-1}^{\frac{1}{2}}x^{2}\mathrm{d}y=2\pi\int_{-1}^{\frac{1}{2}}(1-y^{2})\mathrm{d}y=\frac{9\pi}{4}$
- Explanation: Second question
	- Since the magnitude of the force does not change, work = force × displacement
		- The weight of each thin layer varies with its volume, so the work must be integrated over the height;
		- The weight of a layer equals its volume times the density times $g$;
	- Displacement: $2-y$
	- $W=10^3\int_0^{\frac12}\pi(1-y^2)(2-y)g\,\operatorname{d}y+10^{3}\int_{\frac{1}{2}}^{2}\pi(2y-y^{2})(2-y)g\,\operatorname{d}y$
- Core:
	- The work done by a thin layer of water is equal to displacement × force = displacement × g × density × $dv$
	- g × density × $dv$ = force

### 1.3.2 Stress Issues
**Pressure Issues**
- Formula: Pressure $${p}=g\cdotρ\cdot h$$
- Formula: Pressure $$P=p\cdot A$$
	- Where: p is the pressure, A is the area

**Example Analysis**: The shape and size of a certain gate are shown in the figure, where the y-axis is the axis of symmetry, the upper part of the gate is rectangular ABCD, DC=2 m, and the lower part is enclosed by a secondary parabola and segment 4B. When the water surface is level with the upper end of the gate, to make the ratio of the water pressure on the rectangular part of the gate to the water pressure on the lower part of the gate 5:4, what should the height h of the rectangular part of the gate be?
- Illustration:
	- ![Pasted image 20240415215603](/assets/notes/d92ee3235ee3-Pasted-image-20240415215603.png)
- Analysis:
	- Subtle changes in depth:
		- Pressure: p = gρ(h + 1 - y)
		- Pressure: p = gρ(h + 1 - y) 2 dy
	- Equation: upper part:
		- $$P_1=2\int_1^{h+1}\rho g(h+1-y)\operatorname{d}y=2\rho g\biggl[(h+1)y-\frac{y^2}2\biggr]_1^{h+1}=\rho gh^2$$
	- Second half:
		- $p=gp(h+1-y)$
	- Formula: Lower part:
		- $$P_{2}=2\int_{0}^{1}\rho g(h+1-y)\sqrt{y}\mathrm{d}y=2\rho g\biggl[\frac{2}{3}(h+1)y^{\frac{3}{2}}-\frac{2}{5}y^{\frac{5}{2}}\biggr]_{0}^{1}$$
