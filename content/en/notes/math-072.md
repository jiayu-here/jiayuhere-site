---
title: "Lecture 3: Calculation of Determinants"
slug: math-072
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 3: Calculation of Determinants. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Determinants"]
---

**Category**: Based on the perspective of the exam question
- 1. Regular determinants:
	- `n` order, `n` is very likely because it follows a pattern, so it can be solved, and can be solved using formulas;
- 2. Irregular determinants:
	- All are mainly three-tier, with occasional fourth-tier ones;
	- Use properties and transform them into `12+1` types;

## 3.1 Calculation of Concrete Determinants
**Methods**: Three methods
- Geometry: Almost impossible
- Properties: Properties 1-7
- Inverse ordinal method: generally used to study a specific term
- Expansion formula:
	- Preparation:
		- `->` Use properties, expand determinants as much as possible to 0s;
		- `->` Use properties to make the determinant**into the basic form**, then you can write the answer directly
			- Approach to finding the basics: 1. Find a trade with similar differences 2. Find patterns;
	- Expand
- Induction/Recursion method;

### 3.1.1 Convert to the basic type
#### 3.1.1.1 The shape of the claw is equal to the sum of the rows
**Approach**: Convert determinants into basic forms
- Method:
	- If the form is met, use the method directly (e.g., the claw-shaped determinant form)
	- If the format does not match, then replace it with a row with similar differences;

**Concept**: Claw-shaped determinant
- Transformation `->` Similar to trigonometric determinants;
- Approach: Use diagonal entries to eliminate the other entries in each row or column;
- Explanation:
	- Apply Property 7: add a multiple of one row or column to another to eliminate entries and reduce the determinant to triangular form;

##### **Definition**: #DeterminantWithEqualRowSums
> <font color="#ccc1d9">Description:</font> $$D_n=\begin{vmatrix}a&b&b&\cdots&b\\b&a&b&\cdots&b\\b&b&a&\cdots&b\\\vdots&\vdots&\vdots&&\vdots\\b&b&b&\cdots&a\end{vmatrix}\quad\quad\quad\quad D_{n}=(a+(n-1)b)\begin{vmatrix}1&b&b\cdots b\\1&a&b\cdots b\\\vdots&\vdots&\vdots\\1&b&b\cdots a\end{vmatrix}=[a+(n-1)b](a-b)^{n-1}$$

**Explanation**
- Proof process:
	- Step 1: Since the row sum is equal, add all columns to the first column;
	- Step 2: Factor out the common factor `[a+(n-1)b]`;
	- Step 3: Add `-1` times the first row to each remaining row;
	- Step 4: Calculate the result to obtain $D_n=[a+(n-1)b](a-b)^{n-1}$

**Supplement One**
- Determinant:
	- When $a=0$ and $b=1$:
		- $$\begin{vmatrix}0&1&1&\cdots&1\\1&0&1&\cdots&1\\1&1&0&\cdots&1\\\vdots&\vdots&\vdots&&\vdots\\1&1&1&\cdots&0\end{vmatrix}_{n\times n}=(n-1)(-1)^{n-1}$$
- Explanation:
	- The main diagonal entries are 0 and all other entries are 1. Set `a=0` and `b=1` in the equal-row-sum determinant formula, then substitute them into $[a+(n-1)b](a-b)^{n-1}$;

**Supplementary Two**
- Determinant:
	- When $a=2$ and $b=1$:
		- $$\begin{vmatrix}2&1&1&\cdots&1\\1&2&1&\cdots&1\\1&1&2&\cdots&1\\\vdots&\vdots&\vdots&&\vdots\\1&1&1&\cdots&2\end{vmatrix}=n+1$$

**Supplementary Three**: When $a$ is on the anti-diagonal
- Determinant:
	- $$G_n=\begin{vmatrix}b&b&\cdots&b&a\\b&b&\cdots&a&b\\\vdots&\vdots&&\vdots&\vdots\\b&a&\cdots&b&b\\a&b&\cdots&b&b\end{vmatrix}=(-1)^{\frac{n(n-1)}2}\begin{vmatrix}a&b&\cdots&b&b\\b&a&\cdots&b&b\\\vdots&\vdots&&\vdots&\vdots\\b&b&\cdots&a&b\\b&b&\cdots&b&a\end{vmatrix}=\left(-1\right)^{\frac{n\left(n-1\right)}{2}}\left[a+\left(n-1\right)b\right]\left(a-b\right)^{n-1}$$

#### 3.1.1.2 Type X
**Examples**
- Determinant:
	- $$D_4=\begin{vmatrix}a_1&0&0&b_1\\0&a_2&b_2&0\\0&b_3&a_3&0\\b_4&0&0&a_4\end{vmatrix}=(a_{1}a_{4}-b_{1}b_{4})(a_{2}a_{3}-b_{2}b_{3}).$$
- Analysis:
	- First interchange rows and columns to group the zeros together, then apply Laplace expansion.

#### 3.1.1.3 Vandermonde Type
**Examples**
- $$\begin{vmatrix}a&b&c\\a^{2}&b^{2}&c^{2}\\b+c&a+c&a+b\end{vmatrix}=\left(a+b+c\right)\left|\begin{matrix}1&1&1\\a&b&c\\a^{2}&b^{2}&c^{2}\end{matrix}\right|=\left(a+b+c\right)\left(c-a\right)\left(c-b\right)\left(b-a\right)$$
- Apply determinant properties to transform it into Vandermonde form.

### 3.1.2 Recurrence Method
**Concepts**: Recurrence and induction
- Relationships:
	- Recursion and induction are two different approaches;
	- The recurrence method starts from order n and pushes downward to `n-1` and `n-2`
	- Induction starts from order `1` to find patterns, then pushes up to `n-1` and `n`
- Basic Approach:
	- 1. The distribution patterns of elements are the same;
	- 2. $D_{n-1}$ One step less than $D_n$;

**Example**: Wide diagonal determinant
- Determinant: Recursion
	- $$D_4=\begin{vmatrix}1-a&a&0&0\\-1&1-a&a&0\\0&-1&1-a&a\\0&0&-1&1-a\end{vmatrix}=(-1)^{4+1}\cdot(-a)\cdot a^{3}+D_{3}=a^{4}+\left(-a^{3}\right)+D_{2}=a^{4}+(-a^{3})+a^{2}+D_{1}=a^{4}-a^{3}+a^{2}-a+1$$
- Analysis:
	- Where the above $D_4$ is the calculation of the coprime formula;
	- The inductive method can also be used above

### 3.1.3 Functions and Equations Represented by Determinants
**Supplement**: The determinant element $a_{ij}$ in these questions is often not a specific numerical value but a function containing $x$ or $\lambda$, which may bring new difficulties and troubles beyond calculation to examinees, naturally providing new perspectives for question setters, so it is important to pay attention to research on such problems;

**Examples**
- Problem: $\text{Let }f\left(x\right)=\begin{vmatrix}1&0&x\\1&2&x^{2}\\1&3&x^{3}\end{vmatrix}.\text{ Find }f\left(x+1\right)-f\left(x\right).$
- Solution: $f(x+1)-f(x)=\left|\begin{matrix}1&0&x+1\\1&2&(x+1)^{2}\\1&3&(x+1)^{3}\end{matrix}\right|-\left|\begin{matrix}1&0&x\\1&2&x^{2}\\1&3&x^{3}\end{matrix}\right|=\left.\left|\begin{matrix}1&0&1\\1&2&2x+1\\1&3&3x^{2}+3x+1\end{matrix}\right.\right|=\left|\begin{matrix}1&0&0\\1&2&0\\1&3&3x^{2}\end{matrix}\right|=6x^2$

**Examples**
- Title: $\text{ Establish the equation }\begin{vmatrix}\lambda-1&-2&3\\1&\lambda-4&3\\-1&a&\lambda-5\end{vmatrix}=0\text{ There are double roots, find the parameters }a\text{ The value }$
- Analysis: This is an expression about $f(\lambda)$, and since there is a $\lambda$ on the main diagonal, there must be a cube of $\lambda$
- Explanation:
	- Find the determinant: $f\left(\lambda\right)=\left|\begin{matrix}\lambda-2&-\lambda+2&0\\1&\lambda-4&3\\-1&a&\lambda-5\end{matrix}\right|=\begin{vmatrix}\lambda-2&0&0\\1&\lambda-3&3\\-1&a-1&\lambda-5\end{vmatrix}=\left(\lambda-2\right)\left|\begin{matrix}\lambda-3&3\\a-1&\lambda-5\end{matrix}\right|=(\lambda-2)(\lambda^{2}-8\lambda+18-3a)=0$
	- Discussion of double roots: in $(\lambda-2)(\lambda^{2}-8\lambda+18-3a)=0$ types
		- 1. If $\lambda =2$ is a double root: $(\lambda^{2}-8\lambda+18-3a)|_{\lambda=2}=0$ `->` $4-16+18-39=0$, then `a=2`
		- 2. If $\lambda =2$ is not a double root: discuss $\Delta=0$, find $a=\frac{2}{3}$, so $\lambda =4$

## 3.2 Calculation of Abstract Determinants
**Core**: Method
- 1. Use nature;
- 2. $|AB|=|A||B|$ with the formula
	- First, use `B` to transform `C`, then use `A` to transform `BC`: `ABC`
	- Its result equals the result of the two measures of the change respectively

### 3.2.1 Abstract Type: General Method - Combining Properties
**Example**: $\text{Given the fourth-order determinants }|\alpha_{1},\alpha_{2},\alpha_{3},\beta|=a\text{ and }|\beta+\gamma,\alpha_{2},\alpha_{3},\alpha_{1}|=b,\text{ find }|\alpha_{2}+\alpha_{3},\alpha_{1},\alpha_{3},\gamma|.$
- Analysis: What is abstract type? The elements are abstract symbols, but their specific values are unknown;
- Solution strategy:
	- Express the target columns in terms of the given abstract column vectors.
	- Apply the linearity and alternating properties of determinants.

### 3.2.2 Abstraction: Point Accumulation Method
**Core**: Multiply the matrix of two squares, and the determinant equals $|AB|=|A||B|$

**Example Question**: $\text{ Let }\alpha_1,\alpha_2,\alpha_3\text{ All are as follows }3\text{ Dimension vector },\text{ Known }$:$A=[\alpha_{1},\alpha_{2},\alpha_{3}],B=[\alpha_{1}-\alpha_{2}+2\alpha_{3},2\alpha_{1}+3\alpha_{2}-5\alpha_{3},\alpha_{1}+2\alpha_{2}-\alpha_{3}],\text{ and }|A|=2,\text{ then }|B-A|=$
- Key Points
	- Although $\alpha_1$ is a three-dimensional vector, as long as it is represented by the symbol $\alpha_1$, it exists as a whole `->` Essentially, it is a block matrix. As long as a matrix is split into a block matrix, the block matrix is treated as an element;
	- Conclusion: The block matrix is treated as an element for calculation;
- Analysis
	- $B-A=(-\alpha_{2}+2\alpha_{3},2\alpha_{1}+2\alpha_{2}-5\alpha_{3},\alpha_{1}+2\alpha_{2}-2\alpha_{3})$
		- $(\alpha_{1},\alpha_{2},\alpha_{3})\left(\begin{matrix}0&2&1\\-1&2&2\\2&5&-2\end{matrix}\right) \leftarrow (\alpha_{1},\alpha_{2},\alpha_{3})\left(\begin{matrix}0\\-1\\2\end{matrix}\right)\left(\begin{matrix}2\\2\\-5\end{matrix}\right)\left(\begin{matrix}1\\2\\-2\end{matrix}\right)$
	- Where $(\alpha_{1},\alpha_{2},\alpha_{3})$ is the benchmark, so calculate its benchmark-based representation:
		- $0\alpha_{1}-\alpha_{2}+2\alpha_{3}=[\alpha_{1},\alpha_{2},\alpha_{3}]\begin{bmatrix}0\\-1\\2\end{bmatrix},2\alpha_{1}+2\alpha_{2}-5\alpha_{3}=[\alpha_{1},\alpha_{2},\alpha_{3}]\begin{bmatrix}2\\2\\-5\end{bmatrix},a_{1}+2a_{2}-2a_{3}=\left[a_{1},a_{2},a_{3}\right]\left[\begin{matrix}1\\2\\-2\end{matrix}\right]$
	- Get: $B-A=(-\alpha_{2}+2\alpha_{3},2\alpha_{1}+2\alpha_{2}-5\alpha_{3},\alpha_{1}+2\alpha_{2}-2\alpha_{3})$ d The calculation result is: $(\alpha_{1},\alpha_{2},\alpha_{3})\left(\begin{matrix}0&2&1\\-1&2&2\\2&5&-2\end{matrix}\right)$
		- So $|B-A|=|A|\left|\begin{matrix}0&2&1\\-1&2&2\\2&5&-2\end{matrix}\right|$
	- Calculation result: $|B-A|=|A|\left|\begin{matrix}0&2&1\\-1&2&2\\2&5&-2\end{matrix}\right|=2*5=10$

### 3.2.3 Linear Combinatorial Calculations of Residual and Algebraic Coenzyme Expressions
#####**Theorem**: #Linearcombinatorialcalculationofcoconexpressionsandalgebraiccoenzymeexpressions
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> by $a_{i1}A_{i1}+a_{i2}A_{i2}+\cdots+a_{in}A_{in}=\begin{vmatrix}*\\a_{i1}&a_{i2}&\cdots&a_{in}\\*&\end{vmatrix}$
> then $k_{1}A_{i1}+k_{2}A_{i2}+\cdots+k_{n}A_{in}=\begin{vmatrix}&&*&&\\k_{1}&&k_{2}&\cdots&k_{n}\\&&*&&\end{vmatrix}$

**Explanation**
- Explanation:
	- Expanded method:
		- Essentially a degraded operation;
		- Any calculation of a determinant can be expanded for a particular row (column): $|a_{i_{1}}\cdots a_{i_{n}}|=a_{i_{1}}A_{i_{1}}+\cdots+a_{i_{n}}A_{i_{n}}$
	- Linear combinations of algebraic coenzymes:
		- Essentially, it is the inverse process of the expansion method;
		- Example: $A_{{11}}-2A_{{12}}+A_{{13}}=M_{11}+2M_{12}+M_{13}$
			- Because $M_{ij}=(-1)^{i+j}A_{j}$
- Method:
	- Core:
		- Large `A` paired with small `a`, reverse expansion form;
		- Large `A` paired with small `k`, `k` eat small `a`;
	- Example: Given $|A|=\begin{vmatrix}1&-2&1\\1&0&0\\0&1&0\end{vmatrix}$, find $A_{11}-2A_{12}+A_{13}$
		- From `A` knows: expand by line 1: $|A|=1\cdot A_{11}+(-2)A_{12}+1A_{13}=1$

## 3.3 Kramer's Law
#####**Theorem**: #KramersLaw
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> a system of nonhomogeneous linear equations `n` unknowns (this is the premise) for an equation: $$\begin{cases}a_{11}x_{1}+a_{12}x_{2}+\cdots+a_{1n}x_{n}=b_{1},\\a_{21}x_{1}+a_{22}x_{2}+\cdots+a_{2n}x_{n}=b_{2},\\\cdots\cdots\\a_{n1}x_{1}+a_{n2}x_{2}+\cdots+a_{nn}x_{n}=b_{n},\end{cases}$$
> If the determinant of the coefficient is $$D=\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}\neq0$$, then the system has the only solution to the right, and the solution is: $x_{i}=\frac{D_{i}}{D},i=1,2,\cdots,n$, where $D_i\text{ It is derived from the constant term }b_1,b_2,\cdots,b_n\text{ Replace }D\text{ and passed the imperial examination }i\text{ The determinant obtained from the column element }$
>

**Explanation**
- Requirements:
	- It must be a square matrix, and it has requirements for coefficients, so it's hard to use;
- Example:
	- $\begin{cases}x_{1}-2x_{2}+x_{3}=1\\x_{1}+0x_{2}+0x_{3}=2\\0x_{1}+x_{2}+0x_{3}=5\end{cases}$
	- If the determinant:$|A|=|\begin{smallmatrix}1&-2&1\\0&0&0\\1&0\end{smallmatrix}|\neq0$ is not equal to `0`, then its solution is $x_{i}=\frac{D_{i}}{D},i=1,2,\cdots,n$
	- Then $x_{1}=\frac{D_{1}}{D}=\frac{\left|\begin{matrix}1&-2&1\\2&0&0\\5&1&0\end{matrix}\right|}{1}$ (replace the first column with a free term, the second and third columns remain unchanged)
	- Calculate $x_2$ Similarly, replace the second column with a free term; Similarly, the third column;
	- So $x_1x_2x_3$ are 2, 5, and 9 respectively
- Function:
	- Kramer's Law provides a procedural solution;

#####**Theorem**: #HomogeneoustimeKramersrule
> <font color="#8db3e2"><font color="#c6d9f0"> Description: When </font></font> is in sync: $$\begin{cases}a_{11}x_{1}+a_{12}x_{2}+\cdots+a_{1n}x_{n}=0,\\a_{21}x_{1}+a_{22}x_{2}+\cdots+a_{2n}x_{n}=0,\\\cdots\cdots\\a_{n1}x_{1}+a_{n2}x_{2}+\cdots+a_{nn}x_{n}=0,\end{cases}$$
> $\text{ If }D\neq0,\text{ then the system of homogeneous equations has only zero solutions };\text{ If }D=0,\text{ then the system of homogeneous equations has nonzero solutions }$

**Explanation**
