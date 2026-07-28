---
title: "Lecture 12: Maximal Linearly Independent Sets and Rank"
slug: math-081
description: "Graduate Entrance Examination Mathematics study notes: Lecture 12: Maximal Linearly Independent Sets and Rank. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Vector Sets"]
---

## 12.1 Maximally Linear Independent Groups
### 12.1.1 Basic Concepts of Maximally Linear Independent Groups
#####**Definition**: #Maximallylinearindependentgroup
> <font color="#ccc1d9"> description: </font> $$\text{ In the set of vectors }a_1,a_2,\cdots,a_s\text{ If there are subgroups, }a_{i_1},a_{i_2},\cdots,a_{i_r}\text{ Satisfaction }:$$
> $$1.a_{i_1},a_{i_2},\cdots,a_{i_r}\text{ linearly independent }$$
> $$2. \text{ Any vector in a set of vectors } a_i \text{ is the maximal linearly independent set of the original vector set }$$
> is called $$a_{i_1},a_{i_2},\cdots,a_{i_r}\text{ is a maximal linearly independent set of the protovector group }$$

**Explanation**
- Concept:
	- Maximally linearly independent sets of vector sets are generally**not unique**;
	- A set of vectors composed of only one zero vector does not have a maximally linear-irrelevant group; the maximally linearly independent group of a linearly independent group is the set itself;
- $a_{i_1},a_{i_2},\cdots,a_{i_r}$
	- From the original vector set;
	- Select some groups from the vectors: $i_r$ come out;
- Note:
	- Maximally linearly independent sets are not unique;
	- Zero vectors are not studied;

### 12.1.2 Equivalent Vector Sets
#####**Definition**: #Equivalencevectorset
> <font color="#ccc1d9"> description: In </font> $\text{ Let there be two sets of vectors: (I) }\alpha_1,\alpha_2,\cdots,\alpha_s,(II)\beta_1,\beta_2,\cdots,\beta_i.\text{ If every vector in (I). }\alpha_i(i=1,2,\cdots,s)\text{ All can be passed through }$ (II), vectors are represented linearly, so the set of vectors (1) can be represented linearly by the set of vectors (II); If sets (I) and (II) can be represented linearly with each other, then the set of vectors (I) and (I) are called equivalent sets of vectors, denoted as (I) similar to (II).

**Explanation**
- Concept:
	- Represents**multiple vectors can be represented by multiple vectors**;
	- Equivalence vector sets are not maximally linearly independent groups; there may be "lying flat" sets of vectors;
	- So it's not "equal," but rather called**equivalent**;
- Purpose:
	- Essentially, it means:**The space formed by the set of equivalent vectors is consistent**;
- Explanation:
	- A and B are equivalent `<->` A can be represented by B + B can be represented by `<->` `r(A)=r(B)=r(A|B)`


**Supplement**: Conditions for fulfillment
- $r(\alpha_{1}\alpha_2,\cdots,\alpha_s)=r(\beta_1,\beta_2,\cdots,\beta_i).$
- Proof:
	- Not goodthere is/are:$r(\alpha_{1}\alpha_2,\cdots,\alpha_s,\beta_1,\beta_2,\cdots,\beta_i)=r(\beta_1,\beta_2,\cdots,\beta_i)=r(\alpha_{1}\alpha_2,\cdots,\alpha_s)$
	- then it means: $\alpha_{1}\alpha_2,\cdots,\alpha_s$ can be represented by $\beta_1,\beta_2,\cdots,\beta_i$;
	- Also means: $\beta_1,\beta_2,\cdots,\beta_i$ can also be represented by $\alpha_{1}\alpha_2,\cdots,\alpha_s$;
- Sufficient conditions for a set of equivalence vectors `<-` Equivalence of three ranks:
	- $$r(\alpha_{1}\alpha_2,\cdots,\alpha_s,\beta_1,\beta_2,\cdots,\beta_i)=r(\beta_1,\beta_2,\cdots,\beta_i)=r(\alpha_{1}\alpha_2,\cdots,\alpha_s)$$
	- Meaning: Transform it into**the problem of whether their ranks are the same**;

**Note**: Candidates should pay attention to the differences between equivalence matrices and equivalence vector sets;
- Matrix equivalence must be isomorphic: `A,B` Equivalence `->` `r(A)=r(B)`.
	- Example: $(\begin{matrix}1\\0\end{matrix})\text{ and }(\begin{matrix}0\\1\end{matrix})$
-**Satisfactory**condition for an equivalence set of vectors: $r(A|B)=r(B)=r(A)$

## 12.2 Rank of a set of vectors
### 12.2.1 Basic Concepts of Rank in sets of vectors
#####**Definition**: #Therankofthevectorset
> <font color="#ccc1d9"> description: </font> $$r(\alpha_{1},\alpha_{2},\cdots,\alpha_{s})=r$$
> Equivalence vector sets have equal ranks; the opposite may not hold

**Explanation**
- The dimensionality of the space for a maximally independent group;

### 12.2.2 Important Theorems and Formulas Related to Rank
#####**Theorem**: #Threeranksareequal
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> `r(A) (matrix rank) = row rank of A (rank of A's row vector set) = column rank of A (rank of A's column vector set) `

**Explanation**
- The ranks of sets of vectors viewed vertically and horizontally are the same;

#####**Theorem**: #AArrivedBofElementary line transformation
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> if elementary row transformation is performed from `A` to `B`, then:
> 1. The row vector sets of `A` and `B` are equivalence vector sets;
> 2. Any corresponding subcolumn vector sets of `A` and `B` have the same linear dependence;

**Explanation**
- 1. The row vector sets of `A` and `B` are equivalent vector sets `<-` $r(A|B)=r(B)=r(A)$
- 2. Any corresponding subcolumn vector sets of `A` and `B` have the same linear dependence;
	- Not only are the properties identical, but the final solution is also the same;

#####**Theorem**: #Alinearrepresentationofasetofvectors
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if the set of vectors `A` can be represented by `B`, then $r(A)<=r(B)$

### 12.2.3 Problem Solving: Find a maximal linear independent set
**Method**: Steps to find a maximal linear independent set
- 1. Perform an elementary**row**transformation on the matrix formed by column vectors, convert it into a row ladder matrix, and determine the `r(A)`;
- 2. Find a submatrix of rank `r(A)` by column, which is a maximal linearly independent group;

### 12.2.4 Conclusion
**Conclusion One**: `r(AB)≤min{r(A),r(B)`

**Conclusion Two**: `r(A+B)≤r([A, B]≤r(A)+r(B)`

**Conclusion 3**: Let A be a `n (n≥2)`-order matrix, $A^*$ be the adjoint matrix of $A$, then:
- $$r\left(A^{*}\right)=\begin{cases}n,&r\left(A\right)=n,\\1,&r\left(A\right)=n-1,\\0,&r\left(A\right)<n-1.\end{cases}$$
