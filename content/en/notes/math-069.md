---
title: "Lecture 61: Introduction to Vector Fields"
slug: math-069
description: "Graduate Entrance Examination Mathematics study notes: Lecture 61: Introduction to Vector Fields. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Multivariable Integral Calculus and Applications"]
---

## 61.1 Directional Derivative
### 61.1.1 Basic Concepts of Directional Derivatives
 #####**Definition**: #Directionalderivative
> <font color="#ccc1d9"> description: </font> $$\frac{\partial f}{\partial l}\Bigg|_{(x_0,y_0)}=\lim_{t\to0^+}\frac{f(x_0+t\cos\alpha,y_0+t\cos\beta)-f(x_0,y_0)}t$$

**Explanation**
- Function:
	- The partial derivation with respect to x and to y reflects the change of the function along the x or y direction;
	- However, if you need to describe the function changing in other directions, you need to use directional derivatives;
- Concept:
	- 1. $\cos \alpha$ and $\cos\beta$ represent the direction of the straight line;
	- 2. $x_0+t\cos\alpha,y_0+t\cos\beta$ represents a point in the direction of a straight line;
	- 3. $\frac{f(x_0+t\cos\alpha,y_0+t\cos\beta)-f(x_0,y_0)}t$: The direction value of a point is minus the function value and then divided by `t`. When `t->0`, the direction derivative of that point is denoted as the directional derivative value;
- Note:
	- `t` can only tend toward `0` upright;

### 61.1.2 Differentiability Judgment of Directional Derivatives
#####**Theorem**: #Determinationoftheexistenceofdirectionalderivatives
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> if $z=f(x,y)$ is differentiable, then this point exists in any directional derivative, and the directional derivative equals two partial derivatives, multiplied by their directional cosine, as shown in the following formula:
> $$\frac{\partial f}{\partial l}=\frac{\partial f}{\partial x}\cos\alpha+\frac{\partial f}{\partial y}\cos\beta $$

**Explanation**: Differentiable `->` Arbitrarily directional;

## 61.2 Gradient
#####**Definition**: #Gradient
> <font color="#ccc1d9"> Description: </font> Suppose $f(x,  y)$ has continuity first-order partial derivative at point $P(x_0,  y_0)$, then: $$\mathrm{grad}u=f_x(x_0, y_0)\mathbf{i}+f_y(x_0, y_0)\mathbf{j}$$

**Explanation**: The meaning of gradients
- Each point has infinite directional derivatives, but**the directional derivative along the gradient direction is the largest**;
- The maximum value of the directional derivative is the**modulus of the gradient**;

## 61.3 Divergence and Curl
#####**Definition**: #Divergence
> <font color="#ccc1d9">Description:</font> For a vector field $\mathbf{A}(x,y,z)=(P,Q,R)$:
> $$\operatorname{div}\mathbf{A}=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}$$

**Explanation**
- Divergence is a number;

#####**Definition**: #Rotateandcross
> <font color="#ccc1d9"> Description: </font> Given a vector field $A(x,y,z)=({P,Q,R})$, then:
> $$\operatorname{curl}\mathbf{A}=\begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\\frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z}\\P&Q&R\end{vmatrix}$$

**Explanation**
- Curl is a vector;
