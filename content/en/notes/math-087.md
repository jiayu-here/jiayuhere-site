---
title: "Lecture 18: Equivalent Systems of Linear Equations"
slug: math-087
description: "Graduate Entrance Examination Mathematics study notes: Lecture 18: Equivalent Systems of Linear Equations. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Systems of Linear Equations"]
---

## 18.1 Basic Concepts
#####**Definition**: #Solvethesystemofequationstogether
> <font color="#ccc1d9"> Description: </font> systems $A_{m*n}x=0$ and $B_{s*n}x=0$ have exactly the same solutions, they are called homosolvable systems;
> Thus: `Ax=0,Bx=0` is a system of homosolvable equations;

**Explanation**
- Meaning:
	- Proof `r(A)<r(B)` `->` using sets of vectors;
	- Proof `r(A)=r(B)` `->` Use a system of equations to prove `->` is the same solution;
- Concept:
	- Solution substitution:
		- The solution of `Ax=0` satisfies `Bx=0`, and the solution of `Bx=0` satisfies `Ax=0` (simply substitute the solution into each other to get the result)
	- Method:
		- `r(A)=r(B)`, and the solution of `Ax=0` satisfies `Bx=0` (or the solution of `Bx=0` satisfies `Ax=0`)
	- Sanji is the same:
		- $r\left(A\right)=r\left(B\right)=r\left(\left[\begin{matrix}A\\\\B\end{matrix}\right]\right)$
- Explanation:
	- `Ax=0` and `Bx=0` are the same
	- `<->` The equivalence of two sets of vectors is: $\xi_1,\xi_2,\cdots,\xi_s=\eta_{1},\eta_{2}\cdots\eta_{s}$
	- `<->` $r(\xi_1,\xi_2,\cdots,\xi_s)=r(\eta_{1},\eta_{2}\cdots\eta_{s})$ and the first set of vectors can be represented linearly by the second set;
	- `<->` `r(A)=r(B)=r(A|B)`
	- `<->` `r(A)=r(B)` and the solution of `Ax=0` is a solution of `Bx=0`;
	- `<->` $r\left(A\right)=r\left(B\right)=r\left(\left[\begin{matrix}A\\\\B\end{matrix}\right]\right)$
- Conclusion:
	- $r(AA^{T})=r(A^{T})=r(A)=r(A^{T}A)$
