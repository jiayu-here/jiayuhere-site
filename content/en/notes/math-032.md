---
title: "Lecture 24: Monotonicity, Convexity, and Inflection Points"
slug: math-032
description: "Postgraduate Entrance Exam Mathematics study notes: Lecture 24: Monotonicity, Convexity, and Inflection Points. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
date: 2024-01-13
tags: ["Graduate Entrance Examination Mathematics", "Advanced Mathematics", "Mean Value Theorems and Applications of Derivatives"]
---

## 1.1 Determining Monotonicity

### 1.1.1 Derivatives and Monotonicity

- Geometric illustration:
  - ![Relationship between the derivative and monotonicity](/assets/notes/4e2a62d3de45-Pasted-image-20240113174945.png)

##### **Theorem**: #derivatives-and-monotonicity

Let $f$ be continuous on $[a,b]$ and differentiable on $(a,b)$.

1. If $f'(x)\ge0$, then $f$ is nondecreasing on $[a,b]$.
2. If $f'(x)\le0$, then $f$ is nonincreasing on $[a,b]$.
3. If $f'(x)>0$, then $f$ is strictly increasing; if $f'(x)<0$, then $f$ is strictly decreasing.

The condition $f'(x)\ge0$ together with only finitely many zeros of $f'$ is also sufficient for strict increase; the decreasing case is analogous. More generally, strict monotonicity follows if $f'$ is not identically zero on any subinterval.

### 1.1.2 Examples

**Example 1: Determine the monotonic intervals of $f(x)=e^x-x-1$**

$$
f'(x)=e^x-1.
$$

- For $x<0$, $f'(x)<0$, so $f$ is strictly decreasing on $(-\infty,0)$.
- For $x>0$, $f'(x)>0$, so $f$ is strictly increasing on $(0,+\infty)$.

**Example 2: Prove that $x-\frac{x^3}{6}<\sin x<x$ for $x>0$**

- Let $F(x)=x-\sin x$. Since $F(0)=0$ and $F'(x)=1-\cos x\ge0$, we have $F(x)>0$ for $x>0$, hence $\sin x<x$.
- Let $G(x)=\sin x-x+\frac{x^3}{6}$. Then $G(0)=G'(0)=G''(0)=0$ and

$$
G'''(x)=1-\cos x\ge0.
$$

Applying monotonicity successively gives $G''(x)>0$, $G'(x)>0$, and $G(x)>0$ for $x>0$. Therefore $x-\frac{x^3}{6}<\sin x$.

## 1.2 Convexity and Inflection Points

### 1.2.1 Definitions and the Second-Derivative Test

##### **Definition**: #convexity

Let $f$ be continuous on an interval $I$. For any distinct $x_1,x_2\in I$:

1. If

$$
f\left(\frac{x_1+x_2}{2}\right)
<
\frac{f(x_1)+f(x_2)}{2},
$$

then $f$ is strictly convex on $I$.

2. If the inequality is reversed, then $f$ is strictly concave on $I$.

**Geometric meaning**

- Convex: each chord lies above the graph, and the slope increases.
  - ![Convex curve](/assets/notes/ff516b6bdb93-Pasted-image-20240113182849.png)
- Concave: each chord lies below the graph, and the slope decreases.
  - ![Concave curve](/assets/notes/9a5688f060e1-Pasted-image-20240113182901.png)

##### **Theorem**: #second-derivative-test

Let $f$ be continuous on $[a,b]$ and twice differentiable on $(a,b)$.

- If $f''(x)>0$, then $f$ is convex on the interval.
- If $f''(x)<0$, then $f$ is concave on the interval.

The sign of the first derivative determines monotonicity; the sign of the second derivative determines convexity or concavity.

### 1.2.2 Inflection Points

##### **Definition**: #inflection-point

An inflection point is a point on a continuous curve where the curve changes from convex to concave or from concave to convex.

Candidate abscissas satisfy one of the following:

1. $f''(x_0)=0$;
2. $f''(x_0)$ does not exist, but $f$ is continuous at $x_0$.

A candidate is not automatically an inflection point. The convexity must actually change across $x_0$.

### 1.2.3 Examples

**Example 1: Determine the convexity of $y=x^3$**

$$
y'=3x^2,\qquad y''=6x.
$$

- On $(-\infty,0)$, $y''<0$, so the curve is concave.
- On $(0,+\infty)$, $y''>0$, so the curve is convex.
- Convexity changes across $x=0$, so $(0,0)$ is an inflection point.

- Original illustration:
  - ![Inflection point of a cubic function](/assets/notes/48abac8b1ee4-Pasted-image-20240113184015.png)

**Example 2: Find the convexity intervals and inflection point of $h(x)=\sqrt[3]{x}$**

For $x\ne0$,

$$
\begin{aligned}
h'(x)&=\frac{1}{3}x^{-2/3},\\
h''(x)&=-\frac{2}{9}x^{-5/3}
=-\frac{2}{9x^{5/3}}.
\end{aligned}
$$

- For $x<0$, $h''(x)>0$, so the curve is convex.
- For $x>0$, $h''(x)<0$, so the curve is concave.
- Although $h''(0)$ does not exist, $h$ is continuous at $0$ and the convexity changes there. Thus $(0,0)$ is an inflection point.

## 1.3 Common Question Types

### Question Type 1: #convexity-and-inflection-points

1. Compute $f''(x)$.
2. Find the points where $f''(x)=0$ or $f''(x)$ does not exist.
3. Use these candidates to divide the domain and determine the sign of $f''$ on each interval.
4. A candidate is an inflection point only if the convexity changes across it.

### Question Type 2: #number-of-roots

- Existence: if $f$ is continuous on $[a,b]$ and $f(a)f(b)<0$, the Intermediate Value Theorem guarantees at least one zero in $(a,b)$.
- Uniqueness: if $f$ is strictly monotone on an interval, it has at most one zero there.
- Rolle's theorem helps bound the number of roots: if $f$ has two distinct zeros, then $f'$ has at least one zero between them.

### Question Type 3: #proving-inequalities

- Move all terms to one side, define an auxiliary function, and use its derivative to establish monotonicity.
- The Lagrange Mean Value Theorem is useful for differences of function values.

For example, prove that for $x>0$,

$$
\frac{x}{1+x}<\ln(1+x)<x.
$$

Let $F(x)=\ln(1+x)-\frac{x}{1+x}$. Then

$$
F'(x)=\frac{x}{(1+x)^2}>0,\qquad F(0)=0,
$$

so $F(x)>0$. Next let $G(x)=x-\ln(1+x)$. Then

$$
G'(x)=\frac{x}{1+x}>0,\qquad G(0)=0,
$$

so $G(x)>0$. The desired inequality follows.
