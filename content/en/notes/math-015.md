---
title: "Lecture 7: Criteria for the Existence of a Limit"
slug: math-015
description: "Graduate Entrance Examination Mathematics study notes: Lecture 7: Criteria for the Existence of a Limit. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-03-01
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 7.1 Basic Concepts of the Criterion of Limit Existence
### 7.1.1 Criteria for the existence of sequence limits
#####**Theorem**: #Squeezingcriterionforsequencelimits
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> If exists $N, $ when $n>N$, $x_n\leq y_n\leq z_n$, $\lim_{n\to\infty}x_n=\lim_{n\to\infty}z_n=a, $ then $\lim_{n\to\infty}y_n=a$

**Usage Scenario**: n items and
- Example: $\lim_{n\to\infty}\left[\frac n{n^2+1}+\frac n{n^2+2}+\cdots+\frac n{n^2+n}\right]$
- Magnify: $\frac n{n^2+n}$
- Shrink: $\frac n{n^2+1}$
- Usage: $\frac{n^2}{n^2+n}\leq\left[\frac n{n^2+1}+\frac n{n^2+2}+\cdots+\frac n{n^2+n}\right]\leq\frac{n^2}{n^2+1}$

**Usage**: floor function
- Example: $\lim_{x\to0^+}x[\frac1x]$
- Size: $\frac1x-1<[\frac1x]\leq\frac1x$

#####**Theorem**: #Themonotonicboundedcriterionforsequences
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> monotonically bounded sequences must have limits;
> 1. Sequences with monotonic increasing or upper bounds must have limits;
> 2. Sequences with monotone subtraction or lower bounds must have limits;
