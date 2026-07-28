---
title: "Lecture 5: Inverse Matrices"
slug: math-074
description: "Graduate Entrance Examination Mathematics study notes: Lecture 5: Inverse Matrices. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Matrices"]
---

## 5.1 Definition of Inverse Matrices
#####**Definition**: #Inversematrix
> <font color="#ccc1d9"> description: </font>`A` and `B` are `n`-order square matrices, `E` are `n`-order identity matrices; If `AB=BA=E`, then `A` is called an invertible matrix, and `B` is called the inverse of `A`, and the inverse is unique, denoted as $A^{-1}$

**Explanation**
- The product of a matrix and its inverse matrix equals the identity matrix;

#####**Definition**: #Thenecessaryandsufficientconditionfortheinversematrix
> <font color="#ccc1d9"> Description: </font>A A sufficient and necessary condition for reversibility is that $|A|$ is not equal to `0`;

**Explanation**
- If the measure of the matrix is not equal to `0`, then there is an inverse matrix;
- Because $a^{-1}=\frac{1}{a}$ and the denominator cannot be zero, the necessary and sufficient condition for the inverse matrix is that the measure is not zero;

#####**Definition**: #andopposedeachother
> <font color="#ccc1d9"> Description: </font> first stage: $$A^{-1}A=E$$

**Explanation**

## 5.2 Properties and Important Formulas of Inverse Matrices
**Properties**: Properties of inverse matrices
- 1. $(A^{-1})^{-1}=A$
- 2. If k is not equal to 0, then $(kA)^{-1}=\frac{1}{k}A^{-1}$
	- When transposing matrices: $(kA)^T=kA^T$
	- When transposing matrices: $|kA|=k^n|A|$
- 3. `AB` is also invertible, and $(AB)^{-1}=B^{-1}A^{-1}$
- 4. $A^{\mathrm{T}}$ is also invertible, and $(A^{\mathrm{T}})^{-1}=(A^{-1})^{\mathrm{T}}$.
- 5. $\left|A^{-1}\right|=|A|^{-1}$
	- Because: $|A^{-1}A|=|E|\rightarrow|E|=|A^{-1}||A|$ that is: $|A^{-1}|$ and $|A|$ are reciprocals of each other;

**Note**: $A+B$ need not be invertible, and in general $\left(A+B\right)^{-1}\neq A^{-1}+B^{-1}$.
- $\left(A+B\right)^{T}=A^{T}+B^{T}$
- $\vert A+B\vert$ is not equal to $\vert A\vert+\vert B\vert$

**Supplement**: Inverse matrix and block matrix conclusions
- $$\left.\left(\begin{matrix}a&0\\0&b\end{matrix}\right.\right)^{-1}=\left(\begin{matrix}a&-1&0\\0&b^{-1}\end{matrix}\right)\left(\begin{matrix}A&0\\0&B\end{matrix}\right)^{-1}=\left(\begin{matrix}A&-1&0\\0&B^{-1}\end{matrix}\right)\\\left(\begin{matrix}0&a\\b&0\end{matrix}\right)^{-1}=\left(\begin{matrix}0&b^{-1}\\a^{-1}&0\end{matrix}\right)\left(\begin{matrix}0&A\\B&0\end{matrix}\right)^{-1}=\left(\begin{matrix}0&B^{-1}\\A^{-1}&0\end{matrix}\right)$$

## 5.3 Using the Definition Method to Find the Inverse of an Invertible Matricus
### 5.3.1 Method One: Definition Method
**Method**: Define and solve it, that is, find a matrix `B` such that `AB=E`, then `A` is invertible and $A^{-1}=B$

### 5.3.2 Method 2: Multiplication Method
**Method**: Divide `A` into the product of several invertible matrices. Since the product of two invertible matrices is still invertible, that is, if `A=BC`, where `B、C` are invertible, then `A` is invertible, and:
- $$A^{-1}=(BC)^{-1}=C^{-1}B^{-1}$$
