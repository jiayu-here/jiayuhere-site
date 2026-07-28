---
title: "Lecture 19: Eigenvalues and eigenvectors"
slug: math-088
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 19: Eigenvalues and eigenvectors. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Eigenvalues and Eigenvectors"]
---

## 19.1 Definition of Eigenvalues and Eigenvectors
### 19.1.1 Basic Concepts
#####**Definition**: #Eigenvaluesandeigenvectors
> <font color="#ccc1d9"> description: </font> Let $A$ be the $n$ order matrix $,  \lambda$ be a number $, $ If there is a $n$ dimensional non-zero column vector $\xi, $ such that $: $
> $$A\xi=\lambda\xi$$
> is called:
> 1. $\lambda$ is the eigenvalue;
> 2. $\xi$ is the eigenvector of A corresponding to the eigenvalue $\lambda$;

**Explanation**
- Features:
	- React to a property of matrix A;
- Explanation: eigenvalue
	- For example, when A is a matrix, when A acts on a vector, its result can be represented by a number (scaling the vector with a number), and this number is the eigenvalue;
	- Spatially, it can reflect properties such as extremes and similarities within space;
- Concept:
	- A matrix of `n` order will have `n` eigenvalues. By looking at this number, one can know certain characteristics of the `A` matrix;
- Explanation: $\xi$
	- $\xi$ must not be zero;
	- Because if $\xi$ equals 0, it means the current matrix has only a unique zero solution, i.e., `S=r(A)`. Acting A on $\xi$ does not reflect A's effect, because the matrix is still zero on the zero vector, so here $\xi$ is a nonzero vector;
	- Demonstrate the effect, so you can understand the role of eigenvalues;
- Meaning:
	- ![Pasted image 20240701195431](/assets/notes/34927b76a257-Pasted-image-20240701195431.png)

**Analysis**: Analyze the $A\xi=\lambda\xi$
- Steps:
	- `->` $\lambda\xi-A\xi=0$ // $\xi$ is a nonzero vector
	- `->` $(\lambda E-A)\xi=0$ // Extract the common factor
	- `->` $(\lambda E-A)X=0$
		- // Set $\xi$ to be the solution to the current system of equations;
		- // Because `X` is $\xi$, $\xi$ is a nonzero vector, and the current expression equals 0 `->` means the current equation is homogeneous;
		- // Because this homogeneous system has a nonzero solution, the columns of $\lambda E-A$ are linearly dependent `<-` Theorem 4 on linear dependence: [Lecture 11: Linear Dependence of Vectors and Vector Sets](/en/notes/math-080/);
		- // Therefore, $r(\lambda E-A)<n$: the rank of the matrix is less than $n$;
		- // For $n$ column vectors $a_1,a_2,\cdots,a_n$ in $\mathbb{R}^n$, linear dependence is equivalent to $\left|a_1,a_2,\cdots,a_n\right|=0$. Hence $|\lambda E-A|=0$
	- `->` $|\lambda E-A|=0$
		- // Here you can find $\lambda_i(i=1,2,3...)$
- Illustration:
	- ![Drawing 2024-07-01 19.50.31.excalidraw](/assets/notes/e1aaabd35726-Drawing-2024-07-01-19.50.31.excalidraw.png)

#####**Definition**: #Characteristicequations
> <font color="#ccc1d9"> description: </font> $$\begin{vmatrix}\lambda E-A\end{vmatrix}=\begin{vmatrix}\lambda-a_{11}&-a_{12}&\cdots&-a_{1n}\\-a_{21}&\lambda-a_{22}&\cdots&-a_{2n}\\\vdots&\vdots&&\vdots\\-a_{n1}&-a_{n2}&\cdots&\lambda-a_{nn}\end{vmatrix}=0$$

**Explanation**
- $|\lambda E-A|$: called the characteristic equation

### 19.1.2 Geometric Explanation
**Concepts**: Geometric explanation of eigenvalues and eigenvectors
- Concept:
	- After the basis vector is transformed, some transformations correspond only to proportional transformations after and before the solution, while the angular position remains unchanged;
	- The value used to describe the transformation ratio of an eigenvector, called an eigenvalue;
	- Eigenvectors are those vectors that remain on the original line after transformation;
- Illustration:
	- ![Pasted image 20240701194822](/assets/notes/113f80fbed00-Pasted-image-20240701194822.png)

**Concept**: When the eigenvalue is negative
- Illustration:
	- ![Pasted image 20240701195210](/assets/notes/dd3ff05e0e06-Pasted-image-20240701195210.png)

## 19.2 Calculation method
### 19.2.1 Methods for Finding Eigenvalues and Eigenvectors
**Method**: Find eigenvalues
- Step 1: Write the characteristic equation $|\lambda E-A|$
	- $A=\begin{bmatrix}2&2&-2\\2&5&-4\\-2&-4&5\end{bmatrix}$
	- $|\lambda E-A|=\left|\begin{matrix}\lambda-2&-2&2\\-2&\lambda-5&4\\2&4&\lambda-5\end{matrix}\right|$
- Step 2: Calculate the determinant of the characteristic equation to obtain the equation about $\lambda$;
	- In the end, you will definitely get an equation similar to $\lambda^3+a\lambda^2+b\lambda+c=0$, which can then be transformed into a form that finds roots;
- Step 3: Find all eigenvalues (the roots of the characteristic polynomial);

**Method**: Find eigenvectors
- Step 1: For each eigenvalue $\lambda$, substitute it into $(\lambda E-A)x=0$;
- Step 2: Row-reduce $\lambda E-A$ and find a basis for its null space;
	- The eigenspace dimension is $S=n-r(\lambda E-A)$;
		- These `S` vectors solved form the space of understanding. All vectors on this two-dimensional plane are eigenvectors corresponding to the current substituted $\lambda_i$;
		- Except for the zero vector;
	- 2.2 If simplification does not allow for a stepped matrix, you can also determine the current rank by using the ` determinant = 0` for the restriction on rank and the number of irrelevant term vectors in the current matrix $\lambda E-A$, to determine its current rank and obtain its maximally independent group;
- Step 3: According to step two, when you get the current $\lambda=\text{ A certain value }$, you get $\xi=k_1\xi_1+k_2\xi_2$
	- Viewing `k1` and `k2` cannot be 0 at the same time;
- Step 4: If there are other $\lambda_i$, continue using the above steps to find the eigenvector $\xi$;

### 19.2.2 Finding the Root
**Supplement**: Method to find roots
- If there are no constant terms in $\lambda^3+a\lambda^2+b\lambda+c=0$, then $\lambda=0$ is definitely rooted;
- If $\lambda^3+a\lambda^2+b\lambda+c=0$ among them, $a+b+c=0$, then $\lambda =1$ is definitely their root: $(\lambda -1)$
- If the sum of the even-degree terms in $\lambda^3+a\lambda^2+b\lambda+c=0$ equals the sum of odd-degree terms, then $f(-1)=0$, so $-1$ is its root;

**Method**: Root testing method
- Concept:
	- Using the root-finding method to obtain the sum of a given root, using polynomials to obtain codivision with co-division, and using a calculator for quadratic terms;
- Example:
	- $$\begin{aligned}
\lambda^{2}-2\lambda-8 \\
\begin{aligned}\lambda-1\sqrt{\lambda^{3}-3\lambda^{2}-6\lambda+8}\\\frac{\lambda^{3}-\lambda^{2}}{-2\lambda^{2}-6\lambda}\end{aligned} \text{.}  \\
\frac{-2\lambda^{2}+2\lambda}{-8\lambda+8} \\
\frac{-8\lambda+8}{0}
\end{aligned}$$

#####**Theorem**: #PolynomialRoots
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> let the following formula be a polynomial with coefficients $a_i$ both integers: $$f\left(x\right)=1·x^{k}+a_{k-1}x^{k-1}+\cdots+a_{1}x+a_{0}$$
> then the rational roots of $f(x)=0$ are integers, and $a_0$ factor of.

**Explanation**
- The solution to the equation is a factor of $a_0$
- Therefore, its factors can be framed first, and once the factors are known, their range is determined;

## 19.3 Significant Nature and Conclusion
### 19.3.1 Properties and Conclusions of Eigenvalues
**Concept**: Property one
- $$\lambda_0\text{ is an eigenvalue of }A\Leftrightarrow|\lambda_0 E-A|=0.$$
- Similarly, $$\lambda_0\text{ is not an eigenvalue of }A\Leftrightarrow|\lambda_0E-A|\neq0,$$ in which case $\lambda_0E-A$ is invertible and has full rank.
- Supplement:
	- If $|aA+bE|=0$ (equivalently, $aA+bE$ is singular) and $a\neq0$, then $-\frac{b}{a}$ is an eigenvalue of $A$.

**Concept**: Property two
- Nature:
	- If $\lambda_1,\lambda_2,\ldots,\lambda_n$ are the $n$ eigenvalues of $A$, counted with algebraic multiplicity, then:
	- $$\begin{cases}\left|A\right|=\lambda_{1}\lambda_{2}\cdots\lambda_{n},\\\mathrm{tr}\left(A\right)=\lambda_{1}+\lambda_{2}+\cdots+\lambda_{n}.\end{cases}$$
-**Conclusion 1**:
	- 1. There is a matrix with eigenvalue `0`, whose determinant must be `0`
	- 2. $\lambda_{1}+\lambda_{2}+\cdots+\lambda_{n}$ The sum of eigenvalues equals the sum of the main diagonal elements of the current matrix `A` `tr(A)`
-**Conclusion Two**: Based on Conclusions One and Proof
	- From equations (1) and (2), we get:
	- $$\begin{cases}a_{11}+a_{22}+a_{33}=\lambda_{1}+\lambda_{2}+\lambda_{3},\\A_{11}+A_{22}+A_{33}=\lambda_{2}\lambda_{3}+\lambda_{1}\lambda_{3}+\lambda_{1}\lambda_{2},\\\left|A\right|=\lambda_{1}\lambda_{2}\lambda_{3}.\end{cases}$$
	- More generally, the sum of the principal minors of order $k$ equals the $k$th elementary symmetric sum of the eigenvalues.
- Proof for order $3$: expand the characteristic polynomial $|\lambda E-A|$ in two ways.
	- $$\text{Equation (1)}\quad|\lambda E-A|=\begin{vmatrix}\lambda-a_{11}&-a_{12}&-a_{13}\\-a_{21}&\lambda-a_{22}&-a_{23}\\-a_{31}&-a_{32}&\lambda-a_{33}\end{vmatrix}=\lambda^{3}-\left(a_{11}+a_{22}+a_{33}\right)\lambda^{2}+\left(A_{11}+A_{22}+A_{33}\right)\lambda-\left|A\right|$$
	- $$\text{Equation (2)}\quad\left|\lambda E-A\right|=\left(\lambda-\lambda_1\right)\left(\lambda-\lambda_2\right)\left(\lambda-\lambda_3\right)=\lambda^3-(\lambda_1+\lambda_2+\lambda_3)\lambda^2+(\lambda_1\lambda_2+\lambda_1\lambda_3+\lambda_2\lambda_3)\lambda-\lambda_1\lambda_2\lambda_3$$
- Supplement: Principal minors
	- A principal minor uses the same index set for its selected rows and columns.
	- For a $3\times3$ matrix, the three principal minors of order $2$ are $\begin{vmatrix}a_{22}&a_{23}\\a_{32}&a_{33}\end{vmatrix}=A_{11},\begin{vmatrix}a_{11}&a_{13}\\a_{31}&a_{33}\end{vmatrix}=A_{22},\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}=A_{33}$.

### 19.3.2 Properties and Conclusions of Eigenvectors
**Concept**: Property One
- A nonzero vector $\xi$ is an eigenvector of $A$ associated with $\lambda_0$ if and only if $\xi$ is a nonzero solution of $(\lambda_0E-A)x=\mathbf{0}$;

**Concept**: Conclusion One
- An eigenvalue $\lambda$ of algebraic multiplicity `k` has at most `k` linearly independent eigenvectors;

**Concept**: Conclusion two
- If $\xi_1,\xi_2$ are eigenvectors of `A` associated with distinct eigenvalues $\lambda_1,\lambda_2$, then $\xi_1,\xi_2$ are linearly independent;

**Summary**: $\text{For matrix }A,\begin{cases}\lambda_{1}\neq\lambda_{2}\Rightarrow\xi_{1},\xi_{2}\text{ are linearly independent},\\\lambda_{1}=\lambda_{2}\Rightarrow\xi_{1},\xi_{2}\text{ may be linearly dependent or linearly independent}.\end{cases}$

**Concept**: Conclusion three
- If $\xi_1,\xi_2$ are eigenvectors of $A$ associated with the same eigenvalue $\lambda$ and $k_1\xi_1+k_2\xi_2\neq0$, then $k_1\xi_1+k_2\xi_2$ is also an eigenvector associated with $\lambda$ (a common special case has one coefficient, such as $k_2$, equal to `0`);

**Concept**: Conclusion Four
- If $\xi_1,\xi_2$ are eigenvectors of $A$ associated with distinct eigenvalues $\lambda_1,\lambda_2$ and $k_1,k_2\neq0$, then $k_1\xi_1+k_2\xi_2$ is not an eigenvector of $A$ (a common special case is $k_1=k_2=1$);

**Concept**: Conclusion Five
- Let $\lambda_1,\lambda_2$ be distinct eigenvalues of $A$. If $\xi$ is an eigenvector associated with $\lambda_1$, then it cannot also be an eigenvector associated with $\lambda_2$;

### 19.3.3 Common Eigenvalues and Eigenvectors of Matrices
**Summary**: Eigenvalues and eigenvectors of commonly used matrices
- Illustration:
	- ![Pasted image 20240627205621](/assets/notes/82dc5ce0b772-Pasted-image-20240627205621.png)

**Concept**: The matrix is $f(A)$
- Important formula - When `A` is a polynomial equal to `0`
- Formula:
	- $$A\xi=\lambda \xi \rightarrow f(A)\xi=f(\lambda)\xi$$
- Proof:
	- For example: $A^2\xi=\lambda A\xi=\lambda^2\xi$
- Example:
	- When $A^2-2A+3E$ $\lambda$: $\lambda^2-2\lambda+3$
- Note:
	- The equation obtained from the polynomial of $A$ about $\lambda$ only represents the possible values of $\lambda$ under the current polynomial conditions of A (what relation or range they satisfy), and does not represent the different $\lambda$ of the current characteristic equation;

**Concept**: The matrix is $A^*$
- Formula:
	- When the matrix is $A^*$, its eigenvalue equals $\frac{|A|}{\lambda}$;
	- And since $|A|=\lambda_1\lambda_2\lambda_3$, so $\frac{|A|}{\lambda}=\lambda_1\lambda_2\text{ or }\lambda_1\lambda_3\text{ or }\lambda_2\lambda_3$

**Supplement**: $P^{-1}AP$, its eigenvalues do not change `->` similar; but the eigenvectors change: $P^{-1}\xi$;

**Concept**: The conclusion of a rank 1 matrix
- When `r(A)=1`, matrix $A_{n*n}$ can definitely be reduced to two nonzero determinants: $\alpha\beta^{T}$ product of the two;
- And: $\lambda_1=\lambda_2=\lambda_3=...=\lambda_{n-1}=0$
- And: $\lambda_n=tr(A)=\beta^T\alpha$
