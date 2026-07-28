---
title: "Lecture 16: Systems of Nonhomogeneous Linear Equations"
slug: math-085
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 16: Systems of Nonhomogeneous Linear Equations. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Systems of Linear Equations"]
---

## 16.1 Systems of Nonhomogeneous Linear Equations
### 16.1.1 Basic Concepts
#####**Definition**: #Nonhomogeneouslinearequations
> <font color="#ccc1d9"> description: </font> $\begin{cases}a_{11}x_{1}+a_{12}x_{2}+\cdots+a_{1n}x_{n}=b_{1},\\a_{21}x_{1}+a_{22}x_{2}+\cdots+a_{2n}x_{n}=b_{2},\\\cdots\cdots\\a_{m1}x_{1}+a_{m2}x_{2}+\cdots+a_{mn}x_{n}=b_{m}\end{cases}$

**Explanation**
- Concept:
	- It is called `m` equations and `n` systems of nonhomogeneous linear equations with unknown values;
	- Therefore, we also get an extra column, which is the augmented matrix;
- Explanation:
	- Basically, it's turning $x_{1}\alpha_{1}+x_{2}\alpha_{2}+\cdots+x_{n}\alpha_{n}=0$ into $x_{1}\alpha_{1}+x_{2}\alpha_{2}+\cdots+x_{n}\alpha_{n}=b$

### 16.1.2 Systems of Nonhomogeneous Linear Equations
**Concept**: Conditions for solutions
- If $r(A)\neq r([A,b])$, equivalently $\boldsymbol{b}$ cannot be represented as a linear combination of the columns $\alpha_1,\alpha_2,\cdots,\alpha_n$, then system (II) has no solution;
	- `->` Adding the column vector `b` increases the rank, so `b` is not in the column space of `A`;
	- `->` Therefore, `Ax=b` is inconsistent;
- If $r(A)=r([A,b])=n$, the columns $a_1,a_2,\cdots,a_n$ are linearly independent while $a_1,a_2,\cdots,a_n,b$ are linearly dependent, and system (II) has a unique solution;
	- `->` The rank equals the number of unknowns, so the coefficient matrix has full column rank;
	- `->` No free variables remain, so the solution is unique;
- If $r\left(A\right)=r\left(\left[A,b\right]\right)=r<n\quad$, then system (II) has infinitely many solutions.
	- `->` Degrees of freedom > the number of true constraints, so there are infinitely many solutions;

**Concept**: The property of solutions
- Let $\eta_1,\eta_2,\eta$ be solutions of the nonhomogeneous system $Ax=b$, and let $\xi$ be a solution of the corresponding homogeneous system $Ax=0$;
- (1) $\eta_1-\eta_2$ is a solution of `Ax=0` `->` the difference of any two solutions of the nonhomogeneous system is a solution of the homogeneous system;
- (2) $k\xi+\eta$ is a solution of `Ax=b` for any scalar $k$;

## 16.2 Solution Methods and Steps
**Method**: Method for solving nonhomogeneous linear equations
- Step 1:
	- Write the derived system `Ax=0` of `Ax=b` and find the general solution of `Ax=0`: $k_{1}\xi_{1}+k_{2}\xi_{2}+\cdots+k_{n-r}\xi_{n-r}$
	- That is: first, as with homogeneous linear equations, find its general solution;
- Step 2:
	- Find a particular solution $\eta$ for `Ax=b`
	- That is, find one particular solution of the current nonhomogeneous system;
	- Note: This particular solution is not unique;
- Step 3:
	- The general solution of $Ax=b$ is $k_{1}\xi_{1}+k_{2}\xi_{2}+\cdots+k_{n-r}\xi_{n-r}+\eta$, where $k_{1},k_{2},\cdots,k_{n-r}$ are arbitrary constants;
	- `general solution of a nonhomogeneous system = general solution of the corresponding homogeneous system + one particular solution of the nonhomogeneous system`;

**Supplement**: Conditions for solutions of nonhomogeneous systems `->` Matrix rank
- Premise: Matrix $A_{m*n}$
- Full row rank: `m=r(A)`
	- If $A$ has full row rank, its column space is all of $\mathbb{R}^m$, so $Ax=b$ is consistent for every $b\in\mathbb{R}^m$;
- Listed as full rank: `n=r(A)`
	- If it is a homogeneous equation: the number of unknown variables equals the number of proper constraints;
	- But in nonhomogeneous degrees, since it is `r(A)=r(A|b)=n`, it is not necessarily so;
- The condition for a system of equations to have infinitely many solutions: `r(A)=r(A|b)<n`

**Conclusion**: Regarding the solution to $A^{T}Ax=A^{T}b$
- If $A^{T}x=b$ has no solution `->` $A^{T}Ax=A^{T}b$ find the best approximate solution;

**Conclusion**: $r(A)=r(A^T)=r(AA^T)=r(A^TA)$
