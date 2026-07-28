---
title: "Lecture 27: Indefinite Integrals and Integration by Substitution"
slug: math-035
description: "Graduate Entrance Examination Mathematics study notes: Lecture 27: Indefinite Integrals and Integration by Substitution. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-01-15
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Mean Value Theorems and Applications of Derivatives"]
---

## 1.1 Basic Concepts of Curvature
**What is Curvature**
- Literal meaning: Using limits to describe the degree of curvature at a certain point of a curve;
	- Related to the point where it is located;
- Essence: describes the change in tangent angle between a curve at different points;
	- ![Pasted image 20240115203921](/assets/notes/7a9cc4a537b7-Pasted-image-20240115203921.png)

#####**Definition**: #Curvature
> <font color="#ccc1d9"> Description: The absolute value of the ratio of the tangent angle $\Delta\alpha$ of </font> arc $MM^{\prime}$ to the arc length $\Delta s$ is called the average curvature of the arc, denoted as: $\overline{K}=\begin{vmatrix}\frac{\Delta\alpha}{\Delta s}\end{vmatrix}$
> When $M^{\prime}$ tends toward M along the curve L, if the limit of the average curvature of arc $\overline{MM^{\prime}}$ exists, this limit is called the curvature of the curve L at point M, denoted as K, that is:
>  $K=\lim_{M^{'}\rightarrow M}\left|\frac{\Delta\alpha}{\Delta s}\right|\text{ or }K=\lim_{\Delta s\rightarrow0}\left|\frac{\Delta\alpha}{\Delta s}\right|=\left|\frac{d\alpha}{ds}\right|$
> is: $K=\frac{|y^{\prime\prime}|}{(1+{y^{\prime}}^2)^{\frac32}}$


**Explanation**
- Using limits to describe the degree of curvature at a certain point in a curve;
- Curvature: $$K=\frac{|y^{\prime\prime}|}{(1+{y^{\prime}}^2)^{\frac32}}$$
- Radius of curvature: $$R=\frac1K$$

## 1.2 Common Situations of Curvature
**Straight Line**
- The curvature of a straight line is 0;
- Because the change in slope angle is 0;

**Circle**
- The curvature of a circle is: 1 / radius
