---
title: "Lecture 17: Common Solutions of Two Systems of Equations"
slug: math-086
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 17: Common Solutions to Two Systems of Equations. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Systems of Linear Equations"]
---

## 17.1 Basic Concepts
#####**Definition**: #Thecommonsolutionoftwosystemsofequations
> <font color="#ccc1d9"> description: </font> homogeneous linear systems $A_{m\times n}x=0$ and $B_{m\times n}x=0$, the common solution satisfies the system $\begin{bmatrix}A\\B\end{bmatrix}x=0$, i.e., simultaneous solutions;
> By analogy, we can find the common solution between $Ax=\alpha$ and $Bx=\beta$;

**Analysis**: Two methods for examining common solutions
- Method 1: When providing the basic solutions of $Ax=0$ and specific expressions for $\xi_1,\xi_2,\cdots,\xi_s$ and $B$;
	- Step 1: First, find the general solution $k_1\xi_1,k_2\xi_2,\cdots,k_s\xi_s$ of $Ax=0$
	- Step 2: Substitute the obtained general solution into $Bx=0$ to find the relationship between $k_i\quad(i=1,2,3...)$
	- Step 3: Substitute the relationship of the obtained $k_i$ into the general solution of $Ax=0$ to obtain the common solution;
- Method 2: Provide the fundamental solution systems $\xi_1,\xi_2,\cdots,\xi_s$ and $\eta_1,\eta_2,\cdots,\eta_1$ of $Ax=0$ and $Bx=0$ respectively;
	- Step 1: Find the common solution and $\gamma=k_{1}\xi_{1}+k_{2}\xi_{2}+\cdots+k_{s}\xi_{s}=l_{1}\eta_{1}+l_{2}\eta_{2}+\cdots+l_{1}\eta_{t}$
	- Step 2: Subtract the solution system and move it to the left to get $k_{1}\xi_{1}+k_{2}\xi_{2}+\cdots+k_{s}\xi_{s}-l_{1}\eta_{1}-l_{2}\eta_{2}-\cdots-l_{t}\eta_{t}=0$
	- Step 3: Find the $\text{}k_{i}\text{ or }l_{j}, i=1,2,\cdots, s; j=1,2,\cdots, t,\text{ and thus can be obtained by chance }\gamma$
