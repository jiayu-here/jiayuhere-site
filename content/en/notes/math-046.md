---
title: "Lecture 37: Homogeneous Linear Differential Equations with Constant Coefficients"
slug: math-046
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 37: Homogeneous Differential Equations with Constant Coefficients. Retain the original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-02-01
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Differential Equations"]
---

## 38.1 Homogeneous differential equations with second-order constant coefficients
#####**Definition**: #Secondorderhomogeneousdifferentialequationswithconstantcoefficients
> <font color="#ccc1d9"> description: </font>
> 1. Structure: $$y^{\prime\prime}+q +py^{\prime}+qy=0$$
> 2. Characteristic equation: $$r^2+pr+q=0$$

**Explanation**
- Constant coefficients and variable coefficients:
	- Concept:
		- The coefficients of an unknown function, if constant, are constant-coefficient equations; otherwise, they are variable coefficients (for example, if the coefficients include $p(x)$)
	- Constant coefficients:
		- Structure:
			- $y^{\prime\prime}+py^{\prime}+qy=0$
	- Variable coefficients:
		- Structure:
			- $y^{\prime\prime}+p(x)y^{\prime}+q(x)y=0$
		- Explanation:
			- General solution: $y=C_1y_1(x)+C_2y_2(x)$;
			- $y_1$ and $y_2$ are linearly independent;
			- $y_1/y_2$ is not a constant;
- Characteristic Equations:
	- Concept:
		- The roots of characteristic equations are closely related to the solutions of differential equations;
	- For distinct real roots $r_1\neq r_2$:
		- $y=C_1e^{r_1x}+C_2e^{r_2x}$;
	- For a repeated real root $r_{1}=r_{2}=r$:
		- $y=e^{rx}(C_1+C_2x)$;
	- For conjugate complex roots $r_{1,2}=\alpha\pm i\beta$:
		- $y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$;
	- Note:
		- These formulas apply to second-order equations;
- Third-order equations:
	- Method:
		- Construct one solution component for each characteristic root, accounting for multiplicity, and add the components;
	- Example: For $r^{3}-2r^{2}+r-2=0$:
		- The characteristic roots are $r_1=2,r_{2,3}=\pm i$;
		- Therefore, $y=C_{1}e^{2x}+C_{2}\cos x+C_{3}\sin x$;

**Method**
- Step 1: Write the characteristic equation
- Step 2: Find the characteristic roots;
- Step 3: Write the corresponding general solution:
	- Distinct real roots: $y=C_1e^{r_1x}+C_2e^{r_2x}$;
	- A repeated real root: $y=e^{rx}(C_1+C_2x)$;
	- Conjugate complex roots: $y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$.
