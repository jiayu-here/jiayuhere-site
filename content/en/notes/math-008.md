---
title: "Advanced Mathematics - Mind Map"
slug: math-008
description: "Postgraduate Entrance Exam Mathematics Study Notes: Advanced Mathematics - Mind Map. Original formulas, diagrams, and example problems are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Mathematics Summary","Formula Collection"]
---

# Advanced Mathematics

## Differentiation

### Differential Calculus of Single-variable Functions
- Function
    - The concept of functions
        - Function definition:
                           If for each number $x\in D$, the variable $x$ always corresponds to a certain $y$ according to certain rules, then $x$ is called a function of $y$, denoted as $y=f(x)$; x is often called the independent variable, $y$ the dependent variable, and $D$ domain.
        - Composite function:
                           Suppose the domain of $y=f(u)$ is $D_f, u=g(x)$, the domain is $D_g$, and the value domain is $R_{s}$; if $D_f\cap R_g\neq\phi, $, then the function $y=f[g(x)]$ is called the composite function of functions $y=f(u)$ and $u=g(x)$. Its domain is $\left\{x|x\in D_g, g(x)\in D_f\right\}$
        - Inverse function:
                           Let the domain of function $y=f(x)$ be ${D}$, and the range be $\underline{R}_{\underline{\nu}}$. If for any $y\in R_y$, there exists a unique and determined $x\in D$ such that $y=f(x)$, then it is denoted as $x=f^{-1}(y)$, and called the inverse of function $y=f(x)$
    - The properties of functions
        - Monotonicity
        - Parity:
            - Common odd functions: $\sin x,\tan x,\arcsin x,\arctan x,\ln\frac{1-x}{1+x},{\ln(x+\sqrt{1+x^2})},\frac{e^x-1}{e^x+1},f(-x)=-f(x)$
            - Common even functions: $x^2,|x|,\cos x,f(x)=f(-x)$
        - Periodicity
        - Boundedness
- Limit
    - The nature of limits
        - Properties of the limit of sequences
            - Boundedness: $\text{ If the sequence is }\left\{x_n\right\}\text{ Convergence, then the sequence }\left\{x_n\right\}\text{ There must be boundaries }$
            - Number preservation;
        - Limit properties of functions
            - Local boundedness: if $\lim_{x\to x_0}f(x)$ exists, then $f(x)$ is in a punctured neighborhood of $x_0$
            - Number preservation
    - Function limit
        - Functions tend toward infinite values
            - Functions and infinity:
                              $\lim_{x\to\infty}f(x)=A$ iff, for every $\varepsilon>0$, there is an $X>0$ such that $|x|>X$ implies $|f(x)-A|<\varepsilon$.
            - The function tends toward negative infinity:
                               $\lim_{x\to-\infty}f(x)=A$ iff, for every $\varepsilon>0$, there is an $X>0$ such that $x<-X$ implies $|f(x)-A|<\varepsilon$.
            - The function tends toward positive infinity:
                               $\lim_{x\to+\infty}f(x)=A$ iff, for every $\varepsilon>0$, there is an $X>0$ such that $x>X$ implies $|f(x)-A|<\varepsilon$.
        - The function tends toward finite values
            - $\lim_{x\to x_0}f(x)=A$ iff, for every $\varepsilon>0$, there is a $\delta>0$ such that $0<|x-x_0|<\delta$ implies $|f(x)-A|<\varepsilon$.
        - Unilateral limit
            - left limit: $\lim_{x \to x_{0}^{-}}f(x) = A \Leftrightarrow \begin{cases} \hspace{1em} \forall \xi >0, \exists \delta>0, x_{0}-\delta <x<x_{0} \ \mbox{whenever}, \\ \hspace{1em} \lvert f(x) - A\rvert < \xi \\ \end{cases}$
            - Right limit: $\lim_{x \to x_{0}^{+}}f(x) = A \Leftrightarrow \begin{cases} \hspace{1em} \forall \xi >0, \exists \delta>0, x_{0}<x<x_{0}+\delta \ \mbox{whenever}, \\ \hspace{1em} \lvert f(x) - A\rvert < \xi \\ \end{cases}$
            - Relationship between limit and unilateral limit:
                             $\lim_{x\to x_0}f(x)=A\Leftrightarrow\lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=A$
    - Limit of the sequence
        - Definition of sequence limits:
                          $\lim_{n\to\infty}x_n=a$ iff, for every $\varepsilon>0$, there is an $N$ such that $n>N$ implies $|x_n-a|<\varepsilon$.
        - Criteria for the existence of sequence limits:
                          If there is $N, $ when $n>N$, $x_n\leq y_n\leq z_n$, $\lim_{n\to\infty}x_n=\lim_{n\to\infty}z_n=a, $ then $\lim_{n\to\infty}y_n=a$
    - Find the limit
        - Eight methods for finding limits
    - Infinity and infinitesimal
        - Infinitesimal
            - Definition of infinitesimal: If the function $f(x)$ has zero limit at $x\to x_0($ or $x\to\infty)$, then $f(x)$ is called an infinitesimal at $x\to x_0($ or $x\to\infty)$.
            - Comparison of infinitesimals:
                -**Iso-order**infinitesimal: $\alpha(x)\text{ and }\beta(x)$ The result of division is**constant C**(C is not equal to 0);
                -**Equivalent**infinitesimal: $\alpha(x)\text{ and }\beta(x)$ divide by**constant 1**;
                - Higher-order infinitesimal: $\alpha(x)\text{ and }\beta(x)$ divide by 0; can be denoted as: $\alpha(x)=o(\beta(x))$
                - Low-order infinitesimals: $\alpha(x)\text{ and }\beta(x)$ divide by the opposite order is infinite;
                - $\text{ If }\lim\frac{\alpha (x)^{\color{red}{}}}{\left[\beta (x)\right]^{k}\color{red}}=C\neq 0,\text{ Said }$ α is the k-th order infinitesimal of β;
            - Properties of infinitesimals:
                -**Property 1:****The sum of infinitesimals**is still infinitesimal;
                -**Property 2:****The product of finite**infinitesimals is still infinitesimal;
                -**Property 3:**The product of infinitesimals and**bounded quantities**is infinitesimal;
        - Infinity
            - Definition of infinity:
                            If the function $f(x)$ infinite at $x\to x_0($ or $x\to\infty)$, then $f(x)$ is called an infinite quantity at $x\to x_0($ or $x\to\infty)$.
            - Properties of infinity:
                -**Property 1:**The sum of finite positive infinity is infinity;
                -**Property 2:**The**product**of finite infinity is still infinite;
                -**Property 3:**The sum of infinite quantities and bounded variables remains infinitely large;
- Continuous
    - Definition of continuity
        - Left continuous
        - Right continuous
        - Definition:
                       Let function $y=f(x)$ be defined in a neighborhood of point $x_{0}$. If when $x\to x_0$, the limit of function $y=f(x)$ exists and equals the value of function $f(x_0)$ at $x_{0}$, i.e., $\lim_{x\to x_0}f(x)=f(x_0)$, then function $y=f(x)$ is said to be continuous at point $x_{0}$.
    - The nature of continuity
        - Properties of continuity functions on closed intervals:
            - Boundedness: $\text{ If f(x) is continuous on [a,b], then f(x) is bounded on [a,b]. }$
            - Maximum value theorem: If $f(x)$ is continuous on $[a,b]$, then $f(x)$ must have a maximum and minimum value on $[a,b]$;
            - Intermediate Value Theorem: If $f(x)$ is continuity on $[a, b]$, and $f(a)\neq f(b)$, then for any number $\mathbf{C}, $ between $f(a)$ and $f(b)$ there is at least one $\xi\in(a,  b), $ such that $f(\xi){=}C.$
            - Zero point theorem
        - The computational properties of continuity
    - Breakpoints
        - Definition of discontinuity points:
        - Several types of discontinuities
- Derivative
    - Definition of derivatives
        - What is a derivative?
        - Left derivative and right derivative
        - The geometric meaning of the derivative
    - The rule for derivative differentiation
        - Differentiation rule for sum and product quotient
        - The rule for differentiating inverse functions
        - Derivative rule of composite functions
        - Derivative of commonly used conclusions
        - Logarithmic differentiation method
    - Higher-order derivatives
        - Definition of higher-order derivatives
        - Common formulas for finding higher-order derivatives
    - Implicit function
    - Parametric equations
    - Derivative application
        - Interpreting the monotonicity of functions
        - Judgment of convexity
        - Inflection points
        - Extrema and extrema of a function
        - Asymptote
            - Horizontal asymptote
            - Vertical asymptote
- Differential
    - Definition of differential:
        - $f(x)$ is said to be differentiable at $x _0$ if $f(x_0+\Delta x)-f(x_0)=A\Delta x+o(\Delta x); $
    - Relationships among differentiable, differentiable, and continuity
        - ![Pasted image 20240317192744](/assets/notes/fdce7bdf7363-Pasted-image-20240317192744.png)
    - Mean value theorem for differential calculation
        - Rolle's Theorem:
            - If three conditions are met:
            - 1) $f$ continuous on $[a,b]$;
            - 2)$f$ is differentiable within $(a, b)$;
            - 3）f (a)=f (b)
            - So, it can be known: $\text{ then }\exists\xi\in(a,b)\text{ , to use }f^{\prime}(\xi)=0$
            - Derivation conclusion: There is a tangent line at a point parallel to the line connecting points ab `->` Lagrange theorem;
        - Lagrange mean value theorem:
            - If the following conditions are met: 1) $f$ is continuously on $[a,b]$ 2) $f$ is differentiable within ($a,b)$;
            - Therefore, there exists $\xi\in(a,b)$ such that $f(b)-f(a)=f^{\prime}(\xi)(b-a)$;
        - Cauchy Mean Value Theorem:
            - If the following conditions are met:
            - 1) $f,  F$ on $[a,  b]$ continuity $; $
            - 2) $f,  F$ is differentiable within $(a,  b)$, and $\forall x\in(a,  b),  F^{\prime}(x)\neq0$
            - Therefore, there exists $\xi\in(a,b)$ such that $\frac{f(b)-f(a)}{F(b)-F(a)}=\frac{f^{\prime}(\xi)}{F^{\prime}(\xi)}$;

### Multivariable Differential Calculus
- Basic concepts of multivariable functions
    - Limits of multivariable functions
    - Continuity of multivariable functions
    - Partial derivative
        - Definition of partial derivatives
        - The geometric meaning of partial derivatives
        - Higher-order partial derivative
    - Total derivative
        - Definition of the total differential
        - A necessary condition for differentiability of multivariable functions
        - Sufficient condition for differentiability of multivariable functions
    - Multivariable function analysis
        - Judgments of differentiable, differentiable, continuous, and partially diverging continuous
        - The relationship among differentiable, differentiable, continuous, and partially differentiated continuity
- Multivariable function differentiation
    - Multivariable Composite Function Differential
        - Differentiation rule for multivariable composite functions
        - Full-differential form invariance
    - Multivariable implicit function differential
        - Multivariable function implicit function definition
        - The existence theorem of implicit functions in multivariable functions
- Extrema and extrema of multivariable functions
    - Definition of extremum of multivariable functions
        - The necessary condition for the existence of extremals in multivariable functions
    - Unconditional extremum
    - Conditional extremums
        - Lagrange multiplier method
        - Definition of conditional extremums

## Integral Calculus

### Integral Calculus of Single-Variable Functions
- Indefinite integral
    - The concept of indefinite integrals
        - Definition of indefinite integrals:
                      An antiderivative of a function $f(x)$ is a function $F(x)$ whose derivative equals $f(x)$, that is, $F'(x)=f(x)$. The indefinite integral is the family $F(x)+C$.
                      Or: $\int f(x)dx=F(x)+C$
        - Existence of antiderivatives:
    - Basic properties of indefinite integrals
        - $(\int f(x)\mathrm{d}x)^{\prime}=f(x)$
        - $\mathrm{d}\int f(x)\mathrm{d}x=f(x)\mathrm{d}x$
    - Calculation of indefinite integrals
        - Basic formula
        - First type of substitution method
        - The second type of substitution method
        - Integration by parts
- Definite integral
    - The concept of definite integrals
        - Definition of definite integrals:
                      $f(x)$ is bounded on $[a,b]$, arbitrarily insert a node on $[a,b]$, divide it into n small intervals $\Delta x_{1}\Delta x_{2}\cdots\Delta x_{n}$, and take any point $\xi_i$, resulting in: $\int_{a}^{b}f(x)\,dx=\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_{i})\Delta x_{i}$.
            - Where: $\lambda=\max\{\Delta x_{1},\cdots,\Delta x_{n}\}$.
        - Fundamental theorems of calculus
    - Calculation of definite integrals
        - Newton-Leibniz formula
        - Substitution of definite integrals
        - Integral by Parts of Definite Integrals
        - Properties of definite integrals
    - Limit the points
        - Method 1: Formula calculation
        - Method 2: Extract x
        - Method 3: Substitution method
    - Improper integral
        - Definition of improper integrals
        - Two types of improper integrals
            - Improper integrals over an infinite interval
            - Improper integrals on infinite functions
        - Determine the divergence of improper integrals
            - Method 1: Definition method
            - Method 2: Comparative Discrimination
            - Method 3: P integration
    - Application of definite integrals
        - Area of a plane figure
        - The volume of a rotating body
        - The arc length of a plane curve
        - Lateral area of a rotating body

### Multivariable Function Integral Calculus
- Multiintegrals
    - Double integral
        - Definition of double integrals
        - Properties of double integrals
        - Calculation of double integrals
            - Double integral calculation based on the Cartesian coordinate system
            - Double integral calculation based on polar coordinate systems
            - Utilizing parity and symmetry
    - Triple integral
- Linear area division
    - Line integration
    - By area
- Points application

## Differential Equations

### First-Order Differential Equations
- Separable variables
- First-order homogeneous equation
- First-order linear equation

### Second-Order Differential Equations
- Second-order homogeneous differential equations with constant coefficients
- Second-order constant coefficient nonhomogeneous differential equation

### Higher-Order Differential Equations
- Reduced-order linear differential equations
- Concept of higher-order differential equations

## Infinite Series

### Series of Constant Terms
- Basic concepts
    - Definition of a series of constant terms
    - Definition of convergence of series of constant terms: $\lim_{n\to+\infty}S_{n}=\sum_{n=1}^\infty u_n$
    - Basic properties of series
- Constant-sign series
    - Positive term series
        - Convergence of a positive-term series: $\sum_{n=1}^\infty u_n\text{ converges }\Leftrightarrow \{s_n\}\text{ is bounded above}$
        - Comparison test
        - Limit comparison test
        - Ratio method
        - Root test
        - Integral test
- Sign-changing series
    - Alternating series
        - Definition of alternating series: $\sum_{n=1}^\infty(-1)^{n-1}u_n,u_n>0$
        - Leibniz test
    - General series
        - Concepts of absolute convergence and conditional convergence
        - Convergence tests for general series

### Power series
- Basic concepts of power series
    - Definition of a power series
        - $\sum_{n=0}^\infty a_n(x-x_0)^n=a_0+a_1(x-x_0)+\cdots+a_n(x-x_0)^n+\cdots$
    - Convergence of power series
        - The concepts of convergence points and divergence points
        - Abel's theorem
        - Convergence interval
        - Convergence domain
    - Radius of convergence
        - Radius of Convergence Determination Method One: Limit Ratio
        - Radius of Convergence Determination Method 2: Based on radicals
    - Operations on power series
        - Properties of rational operations
        - Analytical nature
- The function is expanded into a power series
    - Basic concepts
        - The power series expansion of a function
        - Convergence of Taylor's series
    - The function expansion is a power series
        - Direct expansion method
        - Indirect development method
    - Common Development

### Fourier series
- Basic concepts of Fourier series
    - Fourier coefficient
    - Fourier series
    - Convergence
        - Dirichlet theorem
- The function expansion is a Fourier series
    - Expansion of periodic functions: special cases
    - Expansion of periodic functions: general case

## Analytic Geometry in Space

### Vector Algebra

### Spatial Planes and Straight Lines

### Surface and Spatial Curves

### Applications of Multivariable Differentials in Geometry
