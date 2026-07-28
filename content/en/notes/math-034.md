---
title: "Lecture 26: Drawing Function Graphs"
slug: math-034
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 26: Drawing Function Graphs. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
date: 2024-01-15
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Mean Value Theorems and Applications of Derivatives"]
---

## 1.1 Steps to Describe Function Graphs
**Specific Steps**
- 1. Determine the domain of function $y= f(x)$, and consider its parity and periodicity;
- 2. Find the first and second derivatives, and find the points where the first and second derivatives are 0 or if they do not exist `->` Find extremals, inflection points, intervals of increase and decrease, and concave-convex intervals;
- 3. Lists distinguish increases and decreases and concave-convex intervals to find extremes and inflection points;
- 4. Find the asymptote;
- 5. Identify key points and sketch the graph.

### 1.1.1 Basic Concepts of Asymptotes
#####**Definition**: #Theasymptoteofthecurve
> <font color="#ccc1d9"> description: </font>
> 1) Horizontal asymptote: if $\lim_{x\to+\infty}f(x)=A$ or $\lim_{x\to-\infty}f(x)=A$, then $y=A$ is a horizontal asymptote of $y=f(x)$ in the corresponding direction.
> 2) Vertical asymptote: if $\lim_{x\to x_0^-}f(x)=\pm\infty$ or $\lim_{x\to x_0^+}f(x)=\pm\infty$, then $x=x_0$ is a vertical asymptote.
> 3) Oblique asymptote: if
> $$a=\lim_{x\to\pm\infty}\frac{f(x)}x,\qquad b=\lim_{x\to\pm\infty}(f(x)-ax)$$
> are finite, then $y=ax+b$ is an oblique asymptote in that direction.

**Explanation**
- When d ``->`` 0, it is called the asymptote;
	- ![Pasted image 20240115194536](/assets/notes/09a0ceae69f0-Pasted-image-20240115194536.png)

### 1.1.2 Example Problems
**Example Problem**: Find the asymptote of curve $y=\frac{(x-1)e^x}{e^x-1}$;
- Analysis
	- First, analyze whether there is a horizontal asymptote;
	- Then analyze whether there are vertical asymptotes;
- Analysis
	- Level
		- When x`->` -infinity, the ex on the numerator approaches zero, and the denominator is also infinite times 0, making it difficult to determine;
		- $\operatorname*{lim}_{x\rightarrow\infty}xe^{x}=\operatorname*{lim}_{x\rightarrow\infty}\frac{x}{e^{-x}}=\operatorname*{lim}_{x\rightarrow\infty}\frac{1}{-e^{-x}}$
	- Vertical
		- Because: $\lim_{x\to 0}y=\infty$
		- Therefore, $x=0$ is its vertical asymptote;
	- Slanting
		- $\lim_{x\to\infty}\frac{y}{x}=\lim_{x\to\infty}\frac{(x-1)e^{x}}{x(e^{x}-1)}=\lim_{x\to+\infty}\frac{1-\frac{1}{x}}{1-\frac{1}{x}}=1=a$
		- Oblique asymptote is $y=x-1$;
- Question Type: #Findtheasymptote

**Example**: Let $y=\frac{x^3+4}{x^2}$. Find (1) its intervals of increase and decrease and its extrema; (2) its intervals of concavity and inflection points; (3) its asymptotes; and (4) sketch its graph.
- Analysis
	- Solve in the order in which the figures are drawn;
- Analysis
	- 1. Find the domain:
		- $\text{Domain: }(-\infty,0)\cup(0,+\infty).\text{ When }x=-\sqrt[3]{4},\ y=0.$
	- 2. Find critical points and points where the derivative is undefined:
		- $y^{\prime}=1-\frac8{x^3}$, so the critical point is $x=2$.
		- $y^{\prime}(0)$ is undefined, but $x=0$ is not in the domain.
		- The function is increasing on $(-\infty,0)$ and $(2,+\infty)$, decreasing on $(0,2)$, and has a local minimum $y=3$ at $x=2$.
	- 3. Determine concavity:
		- $y^{\prime\prime}=\frac{24}{x^4}>0$
		- The graph is concave upward on both $(-\infty,0)$ and $(0,+\infty)$ and has no inflection point.
	- 4. Find the asymptote;
		- It has no horizontal asymptote
		- There are vertical asymptotes
			- $\lim_{x\to0}\frac{x^3+4}{x^2}=+\infty\quad\color{red}{x=0}$
		- Oblique asymptote
			- $\lim_{x\to\infty}\frac yx=\lim_{x\to\infty}\frac{x^3+4}{x^3}=1=a,\quad\lim_{x\to\infty}(y-ax)=\lim_{x\to\infty}\frac4{x^2}=0=b$
			- Therefore, the oblique asymptote is $y=x$.
	- 5. Drawing
		- 1. Start by drawing an asymptote
		- 2. Starting from $-\infty$, reach the asymptote line, add or remove the change points, then keep moving toward x`->` $\infty$; Draw all the images;
		- ![Pasted image 20240115201603](/assets/notes/17085ce4a882-Pasted-image-20240115201603.png)
- Question Type: #Functiongraphdrawing

### Question Type: #Findtheasymptote
#### PART 1: Problem-solving methods
**Determining if a curve has an asymptote**
- 1. Determine the horizontal asymptote `->` When x `->` is infinite, y tends toward a finite value;
- 2. Determine the vertical asymptote `->` When x `->` a certain point (finite value), y approaches infinity;
- 3. Determine the oblique asymptote
	- `->` $\lim_{x\to\infty}\frac{f(x)}x=a$ Finite value;
	- `->` $\lim_{x\to\infty}(f(x)-ax)=b$ exist
	- At this time, there is an oblique asymptote;

**Quick Assessment Method**
- Inference:
	- The relationship between oblique asymptotes and functions: When x `->` is infinite, the distance between $y=f(x)$ and $y=ax+b$ approaches zero;
		- ![Pasted image 20240326174937](/assets/notes/b3f664326b6a-Pasted-image-20240326174937.png)
	- When x `->` is infinite, when the infinitesimal α(x) `->` 0 in $y=ax+b+α(x)$, then this equals the oblique asymptote $y=ax+b$, so the oblique asymptote exists;
- Summary
	- When the function is of $y=ax+b+α(x)$, where α(x) `->` 0, then the function has an oblique asymptote;


#### PART 2: Typical Example Problems

#### PART 3: Key Points Review
**Note**: When calculating the number of asymptote lines and considering horizontal asymptotes, besides considering x `->` negative infinity, you also need to consider x `->` positive infinity;

**Note**: When analyzing intervals (such as concave-convex, increment/subtraction), be sure to pay attention to the current defined range of the function and whether there are any defined points;
- 1. Zero cannot be used as the denominator;
- 2. Pay attention to the scope of $Inx$;
- 3. Pay attention to the scope of $e^x$;
