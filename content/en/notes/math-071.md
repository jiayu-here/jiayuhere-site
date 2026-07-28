---
title: "Lecture 2: Definition and properties of determinants"
slug: math-071
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 2: Definition and Properties of Determinants. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Determinants"]
---

## 2.1 Basic Concepts of Determinants
### 2.1.1 Origin of Determinants
**Origin of Determinants**
- Concept:
	- Matrix:
		- $$\left(\begin{matrix}a_{1}&a_{2}\\b_{1}&b_{2}\end{matrix}\right)=A$$
	- Determinant:
		- $$\begin{vmatrix}\mathrm{a}&\mathrm{b}\\\mathrm{c}&\mathrm{d}\end{vmatrix}=|A|$$
- Relationships:
	- The concept of determinants comes from matrices, which are a**property**of transformations;
	- A matrix is used to**express information**; only when acting on one vector will it act on another;
	- A determinant is a measure of a certain property or feature by placing matrix `A` in;

**Supplement**: The meaning of a determinant in two dimensions
- Concept:
	- The determinant gives the signed area-scaling factor of the linear transformation represented by a matrix;
- Example:
	- For a two-dimensional matrix $A$, $\det(A)=0$ means that the transformation compresses the plane into a line or a point;
	- Consequently, any planar figure transformed by $A$ has area 0;
- Meaning:
	- Thus, checking whether the determinant is `0` tells us whether the transformation collapses the space into a lower dimension; equivalently, the matrix columns are linearly dependent;
- Supplement: Orientation
	- A negative determinant reverses orientation;
- Supplement: Three dimensions
	- In three dimensions, the absolute value of the determinant is the volume-scaling factor of the linear transformation;
	- Therefore, if the determinant of a $3\times3$ matrix is 0, its columns are linearly dependent;

**Concept**: Calculation of second-order determinants
- Formula:
	- $$|A|=|\begin{matrix}a&b\\c&d\end{matrix}|=ad-bc$$
- Main Diagonal:
	- From `a->d` is the main diagonal;
- Subdiagonal:
	- From `b->c` is the secondary diagonal;
- The value of the determinant:
	- It is the product of the main-diagonal entries minus the product of the secondary-diagonal entries;
	- Geometrically, its absolute value measures the area-scaling factor of the corresponding linear transformation;

### 2.1.2 Determinant Knowledge Structure
**Knowledge Structure**
- Basic concepts of determinants:
	- Essential definition
	- Properties
	- Definition using inversion counts
	- Expansion theorem
- Several important determinants: `12+1`
	- Main diagonal determinant
	- Determinant of the subdiagonal
	- Laplace expansion
	- Vandermonde determinant
- Calculation of determinants
	- Concrete type
		- Transform into the basic type
		- Recurrence method
		- Functions and equations represented by determinants
	- Abstract type
		- Apply determinant properties
		- $|AB|=|A||B|$ using the formula
			- Supplement: `AB does not equal BA`
			- But `|AB|` result of the area equals the areas of the determinants A and B, and it is worth multiplying
			- So: `|AB|=|A||B|=|B||A|=|BA|`
- Calculation of cotons and algebraic coders
- Kramer's Law
	- Not important

## 2.2 The first definition of determinants
### 2.2.1 Second-Order Determinant
**Concept**: The concept of second-order determinants
- Concept:
	- $$2 \text{ The steps and rows are arranged in order }D_2=\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}$$
- Explanation:
	- The first subscript of $a_{ij}$ $i$ indicates the number of rows where the element is located, and the second indication $j$ indicates the number of columns `->` the fixed position;
		- $i=1,2,j=1,2$；
	- Thus, there are four elements in this determinant;
- Calculation:
	- $\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}=a_{11}a_{22}-a_{12}a_{21}$
- Geometric meaning:
	- Calculation:
		- $S_D=l*m*\sin(\beta-\alpha)=a_{11}a_{22}-a_{12}a_{21}$
	- Meaning:
		- The second-order determinant is the area value of a parallelogram `->` reflects the measure;
		- `2` A determinant consists of**two `2`-dimensional vectors**, and its (according to the operation rules) result is the area of a parallelogram with these two vectors as adjacent sides. This not only derives the calculation rules for the second-order determinant, but also clearly shows its geometric meaning;

### 2.2.2 Third-Order Determinant
**Concept**: Third-order determinant
- Concept:
	- $$\text{ 3rd order determinant }D_{3}=\begin{vmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{vmatrix}$$
- Explanation:
	- `3`-order determinant consists of three `3`-dimensional vectors $a_1=[a_{11}, a_{12}, a_{13}]$, $a_2=[a_{21}, a_{22}, a_{23}]$, and $a_3=[a_{31}, a_{32}, a_{33}]$;
	- Its (operation rules) result is**the volume of a parallelepiped with these three vectors as adjacent sides**;
- Calculation:
	- Formula $$\begin{vmatrix}a_{11}&a_{12}&a_{13}\\a_{21}&a_{22}&a_{23}\\a_{31}&a_{32}&a_{33}\end{vmatrix}=(a_{11}a_{22}a_{33}+a_{13}a_{21}a_{32}+a_{12}a_{23}a_{31})-(a_{13}a_{22}a_{31}+a_{12}a_{21}a_{33}+a_{11}a_{23}a_{32})$$
	- Manual Calculation Method:
		- Line drawing method `->` draw two lines. The first line starts from `a11->a22->a33`, then based on this line, draw two forks: `a13->a21->a32` and `a12->a23->a31`; Similarly, the second line uses `a13->a22->a31` and then draws two crosses;

### 2.2.3 Essential Definition of an N-Order Determinant
#####**Definition**: #nThe steps and rows are arranged in order
> <font color="#ccc1d9"> description: </font> $$\begin{aligned}&n\text{ The steps and rows are arranged in order }D_n=\begin{vmatrix}a_{11}&\cdots&a_{1n}\\\vdots&&\vdots\\a_{n1}&\cdots&a_{nn}\end{vmatrix}\text{ It was because of this }n\text{ Piece }n\text{ Dimension vector }a_1=\begin{bmatrix}a_{11}&a_{12}&\cdots,a_{1n}\end{bmatrix},\cdots,a_{n}=[a_{n1},a_{n2},\cdots,a_{nn}]\text{ , and its (operation rule) result is given by this }n\text{ The vectors are adjacent sides }n\text{ Dimensional graphical (yes }\\&\text{ Volume. }\end{aligned}$$

**Explanation**
- The determinant is `0`, the set of vectors is linearly dependent, the determinant is not `0`, the set of vectors is linearly independent;

## 2.3 The second definition of the determinant
### 2.3.1 Permutations and Inversions
**Concept**: Permutation
- An ordered arrangement of the numbers `1,2,…,n` is called a permutation of order $n$.
- For example, `23145` and `41352` are permutations of order $5$. There are $n!$ permutations of order $n$.

**Concept**: Inversion
- In a permutation $i_1i_2\cdots i_s\cdots i_t\cdots i_n$, if $s<t$ but $i_s>i_t$, then the pair $(i_s,i_t)$ is called an inversion.

**Concept**: Inversion number
- The total number of inversions in a permutation is its inversion number, denoted by $\tau\left(i_{1}i_{2}\cdots i_{n}\right)$. For example, $\tau(231546)=3$.
- The natural order `12345` has inversion number `0`.

**Concept**: Odd-permutation and even-permutation
- If the reverse order of the permutation is odd, it is called an odd permutation;
- When the reverse order of the permutation is even, it is called an even permutation;

### 2.3.2 The second definition of an n-th-order determinant
#####**Definition**: #nThe steps and rows are arranged in order: The second definition
> <font color="#ccc1d9"> description: </font> $$\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}=\sum_{j_{1}j_{2}\cdots j_{n}}(-1)^{r(j_{1}j_{2}\cdots j_{n})}a_{1j_{1}}a_{2j_{2}}\cdots a_{nj_{n}}.$$

**Explanation**
- Explanation:
	- $\sum_{h_1,h_2,...h_n}$：
		- Represents the sum of all $n$ columns arranged by index, thus summing $n!$ terms;
		- Note that `->` row indexes are arranged in order, while column indexes are arranged in any $n$ level;
	- $(-1)^{\tau(j_1j_2\cdots j_n)}.$：
		- The positive and negative signs for each item depend on $(-1)^{\tau(j_1j_2\cdots j_n)}.$
		- That is: the positive or negative depends on the result of $\tau(j_1j_2\cdots j_n)$, and the reverse order of the column's indices is calculated by permutation;
		- When column indices are arranged odd, a negative sign should be appended; When column indices are even, a positive sign should be appended;
	- $a_{1j_{1}}a_{2j_{2}}\cdots a_{nj_{n}}$：
		- Each term consists of the product of $n$ elements taken from different rows and columns
- Meaning:
	- Expand the `n`-order determinant into `n` factorial term `->` represent the nth-order permutation, a general calculation rule;
- Example:
	- Title:
		- $\text{ Please confirm }a_{12}a_{31}a_{54}a_{43}a_{25}\text{ The positive and negative signs before this expansion item }$
	- Analysis:
		- First, arrange the rows `->` $a_{12}a_{25}a_{31}a_{43}a_{54}$
		- Then look at the $\tau(25134)=4$

## 2.4 The third definition of determinants
**Core Idea**: Downgrade

### 2.4.1 Minors
#####**Definition**: #Minor
> <font color="#ccc1d9">Description:</font> In a determinant of order $n$, delete row $i$ and column $j$ containing $a_{ij}$. The determinant of order $n-1$ formed by the remaining elements is the minor of $a_{ij}$, denoted by $M_{ij}$.
> That is: $$M_{ij}=\begin{vmatrix}a_{11}&\cdots&a_{1,j-1}&a_{1,j+1}&\cdots&a_{1n}\\\vdots&&\vdots&\vdots&&\vdots\\a_{i-1,1}&\cdots&a_{i-1,j-1}&a_{i-1,j+1}&\cdots&a_{i-1,n}\\a_{i+1,1}&\cdots&a_{i+1,j-1}&a_{i+1,j+1}&\cdots&a_{i+1,n}\\\vdots&&\vdots&\vdots&&\vdots\\a_{n1}&\cdots&a_{n,j-1}&a_{n,j+1}&\cdots&a_{nn}\end{vmatrix}.$$

**Explanation**
- Supplement:
	- Minor:
		- A minor is itself a determinant formed from selected rows and columns of the original matrix or determinant.
	- Submatrix:
		- A submatrix is a matrix;
- Explanation:
	- Deleting row $i$ and column $j$ leaves an $(n-1)\times(n-1)$ determinant, namely the minor $M_{ij}$.
- Example:
	- For $\begin{vmatrix}1&2&1\\2&5&7\\-6&4&9\end{vmatrix}$, the minor of the entry in row $2$, column $3$ is $M_{23}=\left|\begin{matrix}1&2\\-6&4\end{matrix}\right|$.

### 2.4.2 Cofactors
#####**Definition**: #Cofactor
> <font color="#ccc1d9">Description:</font> Multiplying the minor $M_{ij}$ by $(-1)^{i+j}$ gives the cofactor of $a_{ij}$, denoted by $A_{ij}$:
> $$A_{ij}=(-1)^{i+j}M_{ij},\qquad M_{ij}=(-1)^{i+j}A_{ij}.$$

**Explanation**
- Concept:
	- A cofactor is a minor with the sign factor $(-1)^{i+j}$.
- Example:
	- $A_{23}=(-1)^{2+3}M_{23}$

### 2.4.3 Determinant Expansion Formula
#####**Theorem**: #Theexpansiontheoremofdeterminants
> <font color="#8db3e2"><font color="#c6d9f0"> Description: </font></font> the value of a determinant equals the value of a certain row (column) element of the determinant, multiply it by its corresponding algebraic coefficient expression, then sum, i.e., $$\left|A\right|=\begin{cases}a_{i1}A_{i1}+a_{i2}A_{i2}+\cdots+a_{in}A_{in}=\sum_{j=1}^{n}a_{ij}A_{ij}\left(i=1,2,\cdots,n\right),\\\\a_{1j}A_{1j}+a_{2j}A_{2j}+\cdots+a_{nj}A_{nj}=\sum_{i=1}^{n}a_{ij}A_{ij}\left(j=1,2,\cdots,n\right).\end{cases}$$

**Explanation**
- Example:
	- Expand:
		- For $|A|_{3\times3}$, expand according to the first line to get $|A|_{3\times3}=a_{11}A_{11}+a_{12}A_{12}+a_{13}A_{13}$
	- Analysis:
		- In the example above, a third-order expression is expanded into second-order, but the trade-off is that the expression becomes three;
		- If at fourth order it is $|A|_{4\times4}=a_{21}A_{21}+a_{22}A_{22}+a_{23}A_{3}+a_{24}A_{24}$
- Purpose:
	- Core Idea `->` Find the value of the determinant after descending the order;
	- Downgrade `n` steps into `n` `n-1` steps
- Principles of Development:
	- The more elements in a row (column) of `0`, the better;

## 2.5 Properties of Determinants
### 2.5.1 Property One
**Property One**: Row and column swaps, with the value unchanged, i.e., $|A|=|A^{\mathrm{T}}|$
- Concept Supplement:
	- Transpose Matrix:
		- If $|A|=|A^{\mathrm{T}}|$, then $A^{\mathrm{T}}$ is called the**transpose matrix**of `A`;
	- Symmetric Matrices:
		- On the basis of $A^{\mathrm{T}}$ is a**transpose matrix**of `A`, if $A=A^{\mathrm{T}}$, then it is called a symmetric matrix;
- Nature Explanation:
	- $|A|=|A^{\mathrm{T}}|$ `->` Even if the current $A^{\mathrm{T}}$ and `A` are not symmetric matrices, their values (the geometric area of the second-order determinant) are the same;
- Conclusion:
	- For determinants, the status of rows and columns is equivalent `->`**can be used for properties on rows, and both can be used with**on columns;

### 2.5.2 Property Two
**Property Two**: If all elements in a determinant are zero, then the determinant is zero
- If in the determinant there is a row `0` `->` means the determinant has been reduced by one dimension `->` Because it cannot be measured, the measure is `0`;
- Similarly, if a column is all zero, then the determinant is zero;

### 2.5.3 Property Three: Multiplication
**Property three**: If a row (column) element in determinant has a common factor `k(k≠0)`, then `k` can be factored out of the determinant, that is:
- Formula:
	- $$\begin{vmatrix}a_{11}&a_{12}&\ldots&a_{1n}\\\vdots&\vdots&&\vdots\\ka_{i1}&ka_{i2}&\ldots&ka_{in}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\ldots&a_{nn}\end{vmatrix}=k\begin{vmatrix}a_{11}&a_{12}&\ldots&a_{1n}\\\vdots&\vdots&&\vdots\\a_{i1}&a_{i2}&\ldots&a_{in}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\ldots&a_{nn}\end{vmatrix}.$$
- Explanation:
	- If understood geometrically: if a second-order determinant is multiplied by `K`, it means it multiplies by `k` in a certain direction, not all (here, all of which are actually two directions), and can only extend one side `->` If multiplied by `K` for all directions, the result is squared;
	- In the process of extracting K by multiplying above, operations from right to left of the equation are called "**multiplication**" properties;
- Example:
	- You can multiply (extract) the number onto a certain line
	- $$\begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}=k\begin{vmatrix}a_{11}&a_{12}\\\frac{a_{21}}{k}&\frac{a_{22}}{k}\end{vmatrix}$$
- Function:
	- Remove the denominator from the determinant;

### 2.5.4 Property Four
**Property 4**: If a certain row (column) element in a determinant is the sum of two elements, it can be split into the sum of two determinants, that is:
- Formula:
	- $$\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\\vdots&\vdots&&\vdots\\a_{i1}+b_{i1}&a_{i2}+b_{i2}&\cdots&a_{in}+b_{in}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}=\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\\vdots&\vdots&&\vdots\\a_{i1}&a_{i2}&\cdots&a_{m}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}+\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\\vdots&\vdots&&\vdots\\b_{i1}&b_{i2}&\cdots&b_{in}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}$$
- Explanation:
	- Single-row detachable (add-on) capability;
	- The equation from right to left is the sum of two determinants. If**the other elements of two determinants correspond to equal and only one row (column) is different**, you can add them. When adding, the other elements remain unchanged, and the rows (columns) of different elements are added accordingly;
- Supplement:
	- Additivity for single lines `->` Different rows in the determinant, but every other line is exactly the same `->` Only then can additions be made;
- Example: When using a second-order determinant
	- $$\begin{vmatrix}a_1&a_2\\b_1&b_2\end{vmatrix}+\begin{vmatrix}a_1&a_2\\c_1&c_2\end{vmatrix}=\begin{vmatrix}a_1&a_2\\c_1+b_1&c_2+b_2\end{vmatrix}$$
- Note:
	- Obviously, by this property we know: $|A|+|B|\neq|A+B|$

### 2.5.5 Property Five: Interchange
**Property Five**: In a determinant, two rows (or columns) are swapped, and the determinant is changed
- Geometric meaning:
	- For example, in a second-order determinant, if the parallelogram drawn and the sides are swapped in order, the resulting area is thus reversed;
- Note:
	- This property is called the "**swap**" property;
	- When swapping, if the value of `->` remains unchanged after even swaps; If the value changes `->` odd times;

### 2.5.6 Property Six
**Property 6**: If two rows (columns) in a determinant are equal or proportional, then the determinant is zero
- Example:
	- $$\vert\begin{matrix}1&2\\2&4\end{matrix}\vert=0$$
- Explanation:
	- If two rows of elements are exactly the same or proportional, then the determinant is zero;
- Geometric Meaning:
	- In a second-order determinant, the two vectors are parallel;
- Note:
	- The negative direction can also be parallel;

### 2.5.7 Property Seven: Multiplication
**Property 7**: In a determinant, the k multiplied by one row (column) to another row (column) remains unchanged
- Example:
	- Multiply the `-2` of the $|1\quad 2|$ in the $\left|\begin{matrix}1&2\\2&3\end{matrix}\right|$ into the $|2\quad 3|$
	- That is: `(1,2)*-2=(-2,-4)` is added to $|2\quad 3|$ `->` `|0，-1|` `->` to get $\left|\begin{matrix}1&2\\0&-1\end{matrix}\right|$
	- and $\left|\begin{matrix}1&2\\0&-1\end{matrix}\right|$ = $\left|\begin{matrix}1&2\\2&3\end{matrix}\right|$
- Explanation:
	- This property is called the "**multiplication**" property `->` It involves multiplying one line and then adding it to another line;
- Function:
	- Transform the `0` in the determinant into `->` to simplify it;

## 2.6 Several Important Determinants
### 2.6.1 Main Diagonal Determinant
#####**Definition**: #Maindiagonaldeterminant
> <font color="#ccc1d9"> description: </font> $$\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\0&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\0&0&\cdots&a_{nn}\end{vmatrix}=\begin{vmatrix}a_{11}&0&\cdots&0\\a_{21}&a_{22}&\cdots&0\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{vmatrix}=\begin{vmatrix}a_{11}&0&\cdots&0\\0&a_{22}&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&a_{nn}\end{vmatrix}=\prod_{i=1}^na_{ii}.$$

**Explanation**: The determinant of the upper (lower) triangle
- The result equals the product of the main diagonal elements;

### 2.6.2 Determinant of the Paradiagonal
#####**Definition**: #Thedeterminantofthesubdiagonal
> <font color="#ccc1d9"> description: </font> $$\begin{aligned}\begin{vmatrix}a_{11}&a_{12}&\cdots&a_{1,n-1}&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2,n-1}&0\\\vdots&\vdots&&\vdots&\vdots\\a_{n1}&0&\cdots&0&0\end{vmatrix}&=\begin{vmatrix}0&\cdots&0&a_{1n}\\0&\cdots&a_{2,n-1}&a_{2n}\\\vdots&&\vdots&\vdots\\a_{n1}&\cdots&a_{n,n-1}&a_{nn}\end{vmatrix}=\begin{vmatrix}0&\cdots&0&a_{1n}\\0&\cdots&a_{2,n-1}&0\\\vdots&&\vdots&\vdots\\a_{n1}&\cdots&0&0\end{vmatrix}\\&=(-1)^{\frac{n(n-1)}{2}}a_{1n}a_{2,n-1}\cdots a_{n1}.\end{aligned}$$

**Explanation**
- The result equals the subdiagonal elements multiplied by the inverse ordinal;

### 2.6.3 Laplace Expansion
#####**Definition**: #LaplaceExpandableStyle
> <font color="#ccc1d9">Description: </font> $$\begin{gathered}
Suppose A is an m-order matrix and B is an n-order matrix, then \\
\begin{vmatrix}A&O\\O&B\end{vmatrix}=\begin{vmatrix}A&C\\O&B\end{vmatrix}=\begin{vmatrix}A&O\\C&B\end{vmatrix}=|A||B|, \\
 \\
\begin{vmatrix}\boldsymbol{O}&\boldsymbol{A}\\\boldsymbol{B}&\boldsymbol{O}\end{vmatrix}=\begin{vmatrix}\boldsymbol{C}&\boldsymbol{A}\\\boldsymbol{B}&\boldsymbol{O}\end{vmatrix}=\begin{vmatrix}\boldsymbol{O}&\boldsymbol{A}\\\boldsymbol{B}&\boldsymbol{C}\end{vmatrix}=(-1)^{mn}|\boldsymbol{A}||\boldsymbol{B}|.
\end{gathered}$$

**Explanation**
- Determinant of a block matrix: $\begin{vmatrix}A&O\\O&B\end{vmatrix}$
	- All `A、B、0` here are matrices;
	- Using several horizontal lines and several vertical lines, divide a matrix into several submatrices. The resulting sub-matrices are chunks of the original matrix. We call this method of matrix representation called a chunking matrix;
	- For example: A can be a third-order matrix $A_{3*3}$, B can be a second-order matrix $B_{2*2}$, so $\begin{vmatrix}A&O\\O&B\end{vmatrix}$ is a fifth-order matrix;
- Meaning of block matrix:
	- Generalize the matrix from a numerical perspective;
- Analysis:
	- $\begin{vmatrix}A&O\\O&B\end{vmatrix}=\begin{vmatrix}A&C\\O&B\end{vmatrix}=\begin{vmatrix}A&O\\C&B\end{vmatrix}=|A||B|$ `<-` Its conclusion can be understood as the main diagonal conclusion;
	- $\begin{vmatrix}\boldsymbol{O}&\boldsymbol{A}\\\boldsymbol{B}&\boldsymbol{O}\end{vmatrix}=\begin{vmatrix}\boldsymbol{C}&\boldsymbol{A}\\\boldsymbol{B}&\boldsymbol{O}\end{vmatrix}=\begin{vmatrix}\boldsymbol{O}&\boldsymbol{A}\\\boldsymbol{B}&\boldsymbol{C}\end{vmatrix}=(-1)^{mn}|\boldsymbol{A}||\boldsymbol{B}|$ `<-` Its conclusion can be understood as a conclusion in the form of a subdiagonal, `mn` is how many times it has changed;

### 2.6.4 Vandermonde Determinant
##### **Definition**: #VandermondeDeterminant
> <font color="#ccc1d9">Description:</font> $$\begin{vmatrix}1&1&\cdots&1\\x_1&x_2&\cdots&x_n\\x_1^2&x_2^2&\cdots&x_n^2\\\vdots&\vdots&&\vdots\\x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}\end{vmatrix}=\prod_{1\leq i<j\leq n}(x_j-x_i),n\geq2.$$

**Explanation**
- Analysis: A third-order Vandermonde determinant is $V_{3}=\begin{vmatrix}1&1&1\\x_{1}&x_{2}&x_{3}\\x_{1}^{2}&x_{2}^{2}&x_{3}^{2}\end{vmatrix}$;
- Calculation for the third-order case:
	- Form all differences $x_j-x_i$ with $j>i$;
	- $V_3=(x_{2}-x_{1})(x_{3}-x_{1})(x_{3}-x_{2})$.
- Note:
	- The last row has a frequency minus one, because the number starts from zero;
- Example:
	- $\begin{vmatrix}1&a&a^{2}\\1&b&b^{2}\\1&c&c^{2}\end{vmatrix}=\begin{vmatrix}1&1&1\\a&b&c^{2}\\a^{2}&b^{2}&c^{2}\end{vmatrix}=$
