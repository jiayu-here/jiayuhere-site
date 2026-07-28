---
title: "Lecture 1: Course Introduction"
slug: math-070
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 1: Course Introduction. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Determinants"]
---

## 1.1 Outline Introduction
**Introduction**
- Basic Content:
	- Determinant
	- Matrix
- Theme:
	- sets of vectors
	- System of equations
- Application:
	- Eigenvalues;
		- At least five points;
	- quadratic form;
		- With eigenvalues, quadratic forms can be analyzed;
		- To study shapes in space, quadratic techniques are needed `->` maximum and minimum values in graphs `->` minimum value problems;

## 1.2 Course Introduction
### 1.2.1 Direction, Tools, and Means
**Concept**: Research directions and tools
- Research Directions:
	- The research content is**vector**: `Vector`
	- The number of vectors equals their dimensions;
	- Determinant:
		- $$\begin{vmatrix}\mathrm{m}&&\mathrm{n}\\\mathrm{a}&&\mathrm{b}\end{vmatrix}=\mathrm{mb}-\mathrm{an}$$
- Research Tools:
	- 1. Linear Operations `->` Multiplication and Addition;
	- 2. Point product operations `->` In linear algebra, point product operations are essentially still linear operations;
		- $(a_{1}a_{2})(\begin{matrix}b_{1}\\b_{2}\end{matrix})=a_1b_1+a_2b_2$
		- $(a_1a_2)\begin{pmatrix} b_1 & c_1 \\ b_2 & c_2 \end{pmatrix}=(a_{1}b_{1}+a_{2}b_{2},a_{1}c_{1}+a_{2}c_{2})$
		- $\begin{pmatrix} a_1 & a_2 \\ b_1 & b_2 \end{pmatrix}(c_1c_2)=\begin{pmatrix} a_1c_1+a_2c_2  \\ b_1c_1+b_2c_2 \end{pmatrix}$

**Concept**: Research methods
- Concept:
	- Core `->` linear transformation;
	- Matrix `->` Represents system information
		- Data in the matrix cannot be manipulated arbitrarily, otherwise system information will be corrupted;
- Linear transformation:
	- Analysis:
		- $(\begin{matrix}1&0\\0&-1\end{matrix})(\begin{matrix}1\\1\end{matrix})=(\begin{matrix}1\\-1\end{matrix})$
		- Where $(\begin{matrix}1&0\\0&-1\end{matrix})$ is a matrix, corresponding to the function `f` in advanced mathematics
		- Where $(\begin{matrix}1\\1\end{matrix})$ represents the variable, corresponding to `x` in advanced mathematics;
		- Where $(\begin{matrix}1\\-1\end{matrix})$ corresponds to the junction, corresponding to the `y` in advanced mathematics;
		- The input is a vector;
	- Example:
		- Example: Symmetric transformation
			- Matrix: $(\begin{matrix}1&0\\0&-1\end{matrix})$
		- Example: Scaling transformation
			- Matrix: Scale to the right $(\begin{matrix}2&0\\0&1\end{matrix})$
			- Matrix: Scaling upward $(\begin{matrix}1&0\\0&2\end{matrix})$
		- Example: Shear transformation
			- Matrix: $(\begin{matrix}1&-1\\0&1\end{matrix})$
			- Matrix: $(\begin{matrix}-1&1\\0&1\end{matrix})$

### 1.2.2 Analysis: Systems of Equations and Linear Transformations
**Analysis**: Systems of equations and linear transformations
- Example: $\begin{cases}x_{1}+2x_{2}=3\\4x_{1}+7x_{2}=10\end{cases}$
- Traditional method: Elimination method
- Linear transformation:
	- Because $x_{1}+2x_{2}$ and $4x_{1}+7x_{2}=10$ `->` are the result of dot products;
	- So it can be transformed into a linear transformation: $\left.\left(\begin{matrix}1&2\\4&7\end{matrix}\right.\right)\left(\begin{matrix}x_{1}\\x_{2}\end{matrix}\right)=\left(\begin{matrix}3\\10\end{matrix}\right)$
	- Therefore, based on this linear transformation, find the $x_1x_2$ of it
	- Solution: Multiply both sides of the equivalence by the inverse of the matrix. Assume $A=(\begin{matrix}1&2\\4&7\end{matrix})$, then multiply both sides by $A^{-1}$
	- So we get $Ax=B$ `->` $AA^{-1}x=BA^{-1}$ `->` $x=BA^{-1}$
	- That is, the solution for `x` can be obtained;

## 1.3 Supplement: dot accumulation
**Concept**: What is dot product?
- Linear transformation angle:
	- Formula:
		- $$\overbrace{\begin{bmatrix}1&-2\end{bmatrix}}^{\text{Transform}}\underbrace{\begin{bmatrix}4\\3\end{bmatrix}}_{\begin{array}{c}\text{Vector}\\\text{}\end{array}}=4\cdot1+3\cdot-2$$
	- Illustration:
		- ![Pasted image 20240629190435](/assets/notes/520e195dfb4a-Pasted-image-20240629190435.png)
