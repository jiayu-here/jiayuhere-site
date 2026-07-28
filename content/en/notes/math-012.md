---
title: "Lecture 4: Foundations of Limits"
slug: math-012
description: "Graduate Entrance Examination Mathematics study notes: Lecture 4: Foundations of Limits. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-02-28
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Functions, Limits, and Continuity"]
---

## 4.1 Basic Concepts of Limits
- Mainly two types
	- 1. Sequence limits;
	- 2. Function limit;

### 4.1.1 Limits of Sequences
#####**Definition**: #Sequencelimit
> <font color="#ccc1d9">Description:</font> $\lim_{n\to\infty}x_n=a$ iff, for every $\varepsilon>0$, there is an $N$ such that $n>N$ implies $|x_n-a|<\varepsilon$.

**Explanation**
- $\varepsilon>0$: The proximity of the function;
- Geometric meaning: $x_n$ within a small area before and after $\varepsilon$;
- $N$: whenever $n>N$, every term satisfies $|x_n-a|<\varepsilon$; only finitely many terms precede $N$.
	- Finite terms are always bounded;
	- The limit of sequence $\left\{x_n\right\}$ is independent of the previous finite term;

**Concept**: Conclusion 1
- $$\lim_{n\to\infty}x_n=a\Leftrightarrow\lim_{k\to\infty}x_{2k-1}\overset{\color{red}{}}{\operatorname*{=}}\lim_{k\to\infty}x_{2k}=a.$$
-**If a sequence has a limit, then all its subsequences have a limit**;

**Concept**: Conclusion 2
- 1. $$\text{ If }\lim_{n\to\infty}x_n=a,\text{ then }\lim_{n\to\infty}\lvert x_n\rvert=\lvert a\rvert,\text{ But the opposite is not true }$$
- 2. $$\lim_{n\to\infty}x_n=0\text{ The necessary and sufficient condition for this is: }\lim_{n\to\infty}|x_n|=\mathbf{0}$$

**Concept**: Conclusion 3
- If the subsequence of a sequence satisfies the following two conditions, the value of the complete sequence can be derived:
	- 1. All values in the subsequence are equal;
	- 2. Several subsequences have taken all possible scenarios from the original sequence;
