---
title: "Lecture 53: Vector Algebra"
slug: math-061
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 53: Vector Algebra. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Vector Algebra and Analytic Geometry in Space"]
---

## 53.1 Quantity Product
#####**Theorem**: #Theproductofvectoralgebra
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> $$1\text{ ) Geometric representation: }\mathbf{a}\cdot\mathbf{b}=\mid\mathbf{a}\mid\mid\mathbf{b}\mid\cos\alpha $$
> $$2\text{ ) Algebraic representation: }\quad\mathbf{a}\cdot\mathbf{b}=\mathbf{a}_xb_x+\mathbf{a}_yb_y+\mathbf{a}_zb_z$$
> $$3\text{ ) Calculation Pattern: }\quad \text{ Commutative law }:\,\mathbf{a}\cdot\mathbf{b}=\mathbf{b}\cdot\mathbf{a} \quad \text{ Distributive Law: }\mathbf{a\cdot(b+c)=a\cdot b+a\cdot c}$$
> $$4\text{ ) Geometric applications: }\quad \text{Norm: }|\mathbf{a}|=\sqrt{\mathbf{a}\cdot\mathbf{a}} \quad \text{Angle: }\cos\alpha=\frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}\quad \text{Orthogonality: }\mathbf{a}\perp\mathbf{b}\Leftrightarrow\mathbf{a}\cdot\mathbf{b}=0$$

## 53.2 Vector Product
#####**Theorem**: #Thevectorproductofvectoralgebra
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> $1. \text{ Geometric representation: }\quad\mathbf{a}\times\mathbf{b}\text{ It is a vector }.\quad\text{ Model }:\mid\mathbf{a}\times\mathbf{b}\mid=\mid\mathbf{a}\mid\mid\mathbf{b}\mid\sin\alpha$
> $2. \text{ Algebraic representation: }\quad{\mathbf{a}\times\mathbf{b}}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\a_x&a_y&a_z\\b_x&b_y&b_z\end{vmatrix}$
> $3. i) a\times b= - ( b\times a) \quad ii)\text{ Distribution law }:\,a\times(b+c)=a\times b+a\times c$
> $4. \text{ Calculation rules }:\,i)\text{ Find the simultaneous perpendicular to } a \text{ and } b \text{ vector }: a×b\quad ii)\text{ Seek it } a \text{ and } b \text{ is the area of the parallelogram of the adjacent side }:S=|a×b|\quad iii)\text{ Determine that two vectors are parallel }:\,\mathbf{a//b}\Leftrightarrow\mathbf{a\times b}=0$

**Explanation**
- Geometric representation `->` right-hand rule `->` a line perpendicular to $a,b$ vector;
- Note:
	- The product of quantities satisfies the commutative law, while the vector product does not;

## 53.3 Mixed Product
#####**Theorem**: #Mixedproductofvectoralgebra
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font>
> Basic expression: $\left[ abc \right] = (a \times b) \cdot c$
> Definition: $$\ a = a_xi + a_yj + a_zk \\ b = b_xi + b_yj + b_zk \\ c = c_xi + c_yj + c_zk$$
> Properties:
> （1）$$(a\times b)\cdot c = a\cdot(b\times c) = b \cdot (c\times a)$$
> $$\text{ Rotation symmetry }:\,(abc)=(bca)=(cab)\quad \text{ Swap and change numbers }:\,(\mathbf{abc})=-(\mathbf{acb})$$
> （2）$$\begin{aligned}(a\times b)\cdot c=-(b\times a)\cdot c\\(a\times b)\cdot c=-(c\times b)\cdot a\\(a\times b)\cdot c=-(a\times c)\cdot b\end{aligned}$$
> (3) $$\mathbf{a},\mathbf{b},\mathbf{c}\text{ are coplanar }\Leftrightarrow[\mathbf{a}\mathbf{b}\mathbf{c}]=0.$$
> Geometric Meaning:
> 1. The absolute value of the mixed product $[abc]=(a\times b)\cdot c$ of vectors numerically equals the volume of parallelepiped with vectors a, b, and c as edges
> 2. $V_\text{ Parallelepiped }=|\mathrm{(abc)}|$
