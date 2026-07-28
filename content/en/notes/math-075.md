---
title: "Lecture 6: Adjugate Matrices"
slug: math-075
description: "Graduate Entrance Examination Mathematics study notes: Lecture 6: Adjugate Matrices. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Matrices"]
---

## 6.1 Definition of adjugate matrices
### 6.1.1 Definition
#####**Definition**: #AdjugateMatrix
> <font color="#ccc1d9">Description:</font> The adjugate matrix $A^*$ is the transpose of the cofactor matrix of $A$: $$A^*=\begin{bmatrix}A_{11}&A_{21}&\cdots&A_{n1}\\A_{12}&A_{22}&\cdots&A_{n2}\\\vdots&\vdots&&\vdots\\A_{1n}&A_{2n}&\cdots&A_{nn}\end{bmatrix}.$$
> It satisfies $$AA^{*}=A^{*}A=\left|A\right|E.$$

**Explanation**
- Concept:
	- The formation of the adjoint matrix comes from multiplying one row of dots by the product of one column;
	- From $A^*=\left(\begin{matrix}A_{11}&A_{21}\\A_{12}&A_{22}\end{matrix}\right)\rightarrow A=\left(\begin{matrix}a_{11}a_{12}\\a_{21}a_{22}\end{matrix}\right)$
	- So: $AA^{*}=\left(\begin{matrix}|A|&0\\0&|A|\end{matrix}\right)=\left(\begin{matrix}1&0\\0&1\end{matrix}\right)|A|=E|A|$
- Calculation: Second order
	- Find $A^*$ from matrix A
		- Core:**Main switched, secondary code change#
		- Example: $A=\begin{bmatrix}a&b\\c&d\end{bmatrix}\rightarrow A^*=\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$
		- Conclusion: At the second order, $(A^*)^*=A$
	- Find $A^{-1}$ from $A^*$
		- Example: $\frac{1}{|A|}A^{*}=\frac{1}{ad-bc}(\begin{matrix}a&-b\\-c&a\end{matrix})=A^{-1}$
- Calculation: Third order
	- Find $A^*$ from matrix A:
		- Honestly calculate the remaining equations of each algebraic term;
	- Find $A^{-1}$ from $A^*$
		- $A^{-1}=\frac{1}{A}A^{*}$

### 6.1.2 adjugate matrices and Invertible Matrices
**Summary**: Commutative matrices
- $$\begin{aligned}&A\cdot kE=kE\cdot A\\&AA^{-1}=A^{-1}A=E\\&AA^{*}=A^{*}A=|A|E\end{aligned}$$

**Inference**: $$A^{*}=|A|A^{-1}$$
- Meaning: obtained the relationship between the adjugate matrix and the invertible matrix;

**Inference**: $AA^{*}A^{-1}=|A|EA^{-1}\rightarrow A^{*}=|A|A^{-1}$

**Conclusion**: A method for finding reversibility:
- Method:
	- When `A` is invertible, $A^{*}\text{ and }A^{-1}$ is only one nonzero multiple apart;
- Meaning:
	- Given adjunctions, think of**invertible matrices**`->` That is, from the perspective of vectors, adjugate and invertible matrices are merely scaling `->` The properties of adjugate and invertible matrices are consistent;


## 6.2 Properties and Formulas of adjugate matrices
**Concept**: Summary of operations
- There are four operations: determinant, inverse, transpose, and adjugate;
- The following properties are the interactions, combinations, and exchanges of these properties;

**Property 1**: For any $n$-order square matrix $A$, there is an adjoint matrix A $^{*}$, and the formula is: $$AA^{*}=A^{*}A=\left|A\right|E,\left|A^{*}\right|=\left|A\right|^{n-1}$$

**Property Two**: When $|A|\neq0 A^{*}=\left|A\right|A^{-1},  A^{-1}=\frac{1}{\left|A\right|}A^{*},  A=\left|A\right|\left(A^{*}\right)^{-1}; $
- Premise: A has a measure of 0;
- First find the determinant, then the adjugate matrix, and finally the $\frac{1}{{|A|}}A^*$

**Property 3**: $(kA)(kA)^{*}=\left|kA\right|E$

**Nature Four**: $(A^T)^*=(A^*)^T$

**Nature Five**: $A^{-1}\left(A^{-1}\right)^{*}=\left|A^{-1}\right|E$

**Nature Six**: $A^*\left(A^*\right)^*=\left|A^*\right|E$
- Reason: $\left(A^*\right)^*=|A|^{n-2}A$

**Nature 7**:(Principle of Putting on and Doff) $\left(AB\right)^{*}=B^{*}A^{*}$

**Supplement**: About multiplication exchange
- $$\begin{aligned}&|kA|=k^{n}|A|\\&(kA)^{T}=kA^{T}\\&(kA)^{-1}=\frac{1}{k}A^{-1}\\&(kA)^{*}=k^{n-1}A^{*}\end{aligned}$$

**Supplement**: Summary - The auto-operation of the operation
- $$\begin{aligned}&|A^{-1}|=|A|^{-1}&&(A^{*})^{-1}=(A^{-1})^{*}\\&(A^{-1})^{T}=(A^{T})^{-1}&&|A^{*}|=|A|^{n-1}\\&|A^{T}|=|A|^{T}\\&(A^{*})^{T}=(A^{T})^{*}\end{aligned}$$

**Supplement**: Summary - Stacking Operations
- $$\begin{aligned}&||A||=|A|\\&(A^{T})^{T}=A\\&(A^{-1})^{-1}=A\\&(A^{*})^{*}=|A|^{n-2}A\end{aligned}$$
**Additional note**: Principles for putting on and taking off
- $$\begin{aligned}&|AB|=|B||A|\\&(AB)^{T}=B^{T}A^{T}\\&(AB)^{-1}=B^{-1}A^{-1}\\&(AB)^{*}=B^{*}A^{*}\end{aligned}$$
- Note: $\left(A+B\right)^{*}\neq A^{*}+B^{*}$
- Others: $\begin{aligned}&|A+B|\neq|A|+|B|\\&(A+B)^{-1}\neq A^{-1}+B^{-1}\\&(A+B)^{T}=A^{T}+B^{T}\end{aligned}$

## 6.3 Using Adjoint Matrices to Find the Inverse of an Invertible Matrice
#####**Theorem**: #Findtheinverseoftheinvertiblematrixasitisadjoined
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$A^{-1}=\frac{1}{\left|A\right|}A^{*}=\frac{1}{\left|A\right|}\begin{bmatrix}A_{11}&A_{21}&\cdots&A_{n1}\\A_{12}&A_{22}&\cdots&A_{n2}\\\vdots&\vdots&&\vdots\\A_{1n}&A_{2n}&\cdots&A_{nn}\end{bmatrix}$$

**Explanation**
- Steps:
	- Step 1: First, find the value of the determinant of the current matrix to see if it equals `0`; if it equals zero, you cannot continue calculating;
	- Step 2: Find the adjugant of A;
	- Step 3: Find $A^{-1}=\frac{1}{|A|}A^{*}$
- Note:
	- $\text{ Note }A_{ij}\text{ Position and positive and negative signs }$

## 6.4 Methods for Finding Adjoint Matrices
**Method One**: Definition method. First find $A_{ij}$, then assemble into $A^*$

**Method 2**: Use the formula; If A is invertible, then $A^*=|A|A^{-1}$
- When encountering calculations related to adjoint matrices, first consider whether there is a formula, simplify it, perform some calculations on the formula, and then begin calculation;
