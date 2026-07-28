---
title: "Lecture 7: Elementary Transformations and Elementary Matrices"
slug: math-076
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 7: Elementary Transformations and Elementary Matrices. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Matrices"]
---

## 7.1 Elementary Transformations
### 7.1.1 Definition
#####**Definition**: #Elementarytransformation
> <font color="#ccc1d9"> description: </font>
>(1) Multiplication: A row (column) of a nonzero constant multiplied by a matrix;
  (2) Swap: the positions of two rows (columns) in the swap matrix;
  (3) Multiply: Multiply a row (column) of a matrix by k times to another row (column).
  These three transformations are called elementary row (column) transformations of matrices, and are respectively called multiplication, swap, and multiplication elementary row (column) transformations;

**Explanation**
- All three of these transformations are called**same-solution transformations**`<-` No matter how you transform, you must ensure they are the same-solution;

**Essence**: The rank of the matrix does not change, but the determinant changes;

### 7.1.2 Supplement: The Essence of Linear Transformations
**Concept**: What is transformation?
- Explanation:
	- A transformation is essentially a fancy way to put it in a "function": it takes a vector and outputs the result of a vector transformation;
- Transformation:
	- Using the word 'transformation' implies that you are thinking from the perspective of "movement";

**Concept**: What is linear transformation?
- A linear transformation requires the following two properties:
	- 1. After further transformation, the line remains straight without bending;
	- 2. The origin must remain fixed;
- What is a linear transformation:
	- Linear transformation is a means of manipulating spaces; it keeps grid lines parallel and evenly spaced, keeps the origin fixed, and can be clearly described by matrices;

**Concept**: How to describe the transformed vector space
- Only the base variable needs to be transformed;
- Because: Suppose the current vector is represented by two basis vectors:
	- $$\vec{\mathbf{v}}=-1\hat{i}+2\hat{j}$$
	- Even if the basis vector is transformed, the above linear relationship will not change;
	- Therefore, the transformed `v` can be inferred solely from the transformed `i` and `j` caps;
	- Where i is a two-dimensional vector composed of two coordinate values, and j is another two-dimensional vector formed by two coordinate values;
- Introducing the matrix:
	- Combining basis vectors `i` and basis vectors `j` together forms a `2*2` matrix:

**Concept**: The meaning of the matrix
- Meaning:
	- Given any initial vector, linear transformation can be performed using two bases to obtain the result after linear transformation;
	- $$\begin{aligned}\begin{bmatrix}3&2\\-2&1\end{bmatrix}&\underbrace{{\left[\begin{array}{c}5\\7\end{array}\right]}}\\&\text{Any ol' vector}\\&\text{ Any initial vector }\end{aligned}$$
- Example:
	- $$\begin{aligned}\begin{bmatrix}3&2\\-2&1\end{bmatrix}{{\left[\begin{array}{c}5\\7\end{array}\right]}}\end{aligned}=5\bigg[\begin{array}{c}3\\-2\end{array}\bigg]+7\bigg[\begin{array}{c}2\\1\end{array}\bigg]\leftarrow\text{ This is equivalent to adding the scaling base vector again }$$
- Formula: 2D
	- $$\left.\left[\begin{array}{cc}a&b\\c&d\end{array}\right.\right]\left[\begin{array}{c}x\\y\end{array}\right]=x\left[\begin{array}{c}a\\c\end{array}\right]+y\left[\begin{array}{c}b\\d\end{array}\right]=\left[\begin{array}{c}ax+by\\cx+dy\end{array}\right]$$

## 7.2 Elementary Matrices
### 7.2.1 Definition of Elementary Matrices
#####**Definition**: #Definitionofelementarymatrices
> <font color="#ccc1d9"> description: </font> a matrix obtained from a unit matrix through a primary transformation is called an**elementary matrix**. Taking a 3x3 matrix as an example: $E_{2}\left(k\right)=\left[\begin{matrix}1&0&0\\0&k&0\\0&0&1\end{matrix}\right]$
> Multiply the `2` th row (or column 2) of E by `k` times the multiplication of the elementary matrix;
>
> Definition: $E_i(k)(k\neq 0)$ represents the elementary matrix obtained by multiplying the positive $i$-th row (or $j$-th column) of the identity matrix by the nonzero constant $k$

**Explanation**
- Supplement: The role of the unit matrix
	- The characteristic of a unit matrix is that when acting on any matrix, it has no substantial effect;
	- i: `EA=A`
- Note:
	- Transformations must be suitable for both rows and columns;
- Concept:
	- Left multiplication: performs transformation on the left side of the vector `->` Left read line transformation;
	- Right multiplication: transforms on the right side of a vector `->` transforms right-read columns;
		- The object of study is positioned to its right; `(x)g`
- Function:
	- When a set of vectors is transformed using an elementary matrix,

#####**Theorem**: #Leftrowandrightcolumntheorem
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> perform an elementary row transformation on the `n` th order matrix `A`, equivalent to multiplying the left side of matrix A by the corresponding elementary matrix;
> Similarly, performing an elementary transformation on `A` is equivalent to multiplying the right side of matrix `A` by the corresponding elementary matrix;

**Explanation**

### 7.2.2 Interchange Elementary Matrices
#####**Definition**: #Interchangeelementarymatrices
> <font color="#ccc1d9"> description: </font> $E_{12}=\begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix}$, the 1st and 2nd rows (or columns 1 and 2) of E are swapped, called the swap elementary matrix;
> Definition: $$E_{ij}\text{ represents the unit matrix }E\text{ Exchange No }i\text{ and was granted a residence }j\text{ Alright }(\text{ or exchange residences }i\text{ and ranked among the top ranks }j\text{ List })\text{ The resulting elementary matrix }$$

**Explanation**
- Concept:
	- Perform row transformation: move to the left side
		- $\left.\left(\begin{matrix}0&1\\1&0\end{matrix}\right.\right)\left(\begin{matrix}1&2\\3&4\end{matrix}\right)=\left(\begin{matrix}3&4\\1&2\end{matrix}\right)$
	- Column transformation: Move to the right side
		- $\left.\left(\begin{matrix}1&2\\3&4\end{matrix}\right.\right)\left(\begin{matrix}0&1\\1&0\end{matrix}\right)=\left(\begin{matrix}2&1\\4&3\end{matrix}\right)$
- Example:
	- $$\begin{pmatrix}1&2&-4\\2&3&2\\-1&-2&0\end{pmatrix}\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}=\begin{pmatrix}1&-4&2\\2&3&3\\-1&0&-2\end{pmatrix}$$
	- Since the elementary matrix is on the right, column transformations are performed;
	- Because the second and third columns of the elementary matrix are swapped, the second and third columns of $\begin{pmatrix}1&2&-4\\2&3&2\\-1&-2&0\end{pmatrix}$ are swapped;

### 7.2.3x Elementary Matrix
#####**Definition**: #Multiplytheelementarymatrix
> <font color="#ccc1d9"> description: </font> $E_{31}\left(k\right)=\left[\begin{matrix}1&0&0\\0&1&0\\k&0&1\end{matrix}\right]$, the k multiplied by the 1st row of E to the 3rd row (or the k multiplied by the k of the 3rd column to the 1st column) is called the multiplication elementary matrix;
> Definition: $E_{ij}(k)$ represents the elementary matrix obtained by multiplying the $j$ th row of the identity matrix $E$ by multiplying $k$ to the $i$ th row (or $k$ of the $i$ th column to the $j$ th column);

**Explanation**

## 7.3 Properties of Elementary Matrices
**Property One**: The transpose of an elementary matrix is still an elementary matrix
- $E_{ij}^{T}=E_{ij}$
- $E_{i}^{T}\left(k\right)=E_{i}\left(k\right)$
- $E_{ij}^{T}\left(k\right)=E_{ji}\left(k\right)$

**Property Two**: Determinants, Inverse Matrices, and Elementary Matrices
- Because $\left|E_{i}\left(k\right)\right|=k\neq0,\left|E_{ij}\right|=-1\neq0,\left|E_{ij}\left(k\right)\right|=1\neq0$
- Therefore, elementary matrices are all invertible matrices, and $\left[E_{i}\left(k\right)\right]^{-1}=E_{i}\left(\frac{1}{k}\right),E_{ij}^{-1}=E_{ij},\left[E_{ij}\left(k\right)\right]^{-1}=E_{ij}\left(-k\right)$ their inverses are still elementary matrices of the same type;

**Property 3**: If `A` is an invertible matrix, then `A` can be expressed as the product of a finite number of elementary matrices, i.e., $A=P_{1}P_{2}\cdots P_{s},\text{ where }P_{1},P_{2},\cdots,$ $P_s$ is an elementary matrix;
- If A is an invertible matrix, then matrix A can definitely be factored into the product of several elementary matrices;
- So: an elementary matrix is actually a composition of multiple matrices, for example $A\alpha=p_{1}p_{2}\cdots p_{s}\alpha$;
- If $A=P_{1}P_{2}\cdots P_{s}$, both sides are inverse matrices multiplied by P, then the right side is `E`;
	- Get: $P_{S}^{-1}\cdots P_{2}^{-1}P_{1}^{-1}A=P_{S}^{-1}\cdots P_{2}^{-1}P_{1}^{-1}P_{1}P_{2}\cdots P_{S}$
	- Get: $\theta_{5}\cdots\theta_{2}\theta_{1}E=A^{-1}$
- Formula:
	- $\begin{aligned}Q_{5}\cdots Q_{2}Q_{1}\cdot A=E\\Q_{5}\cdots Q_{2}Q_{1}E=A^{-1}\end{aligned}$
- Conclusion:
	- $(A|E)\xrightarrow{\text{ Alright }}(E|A^{-1})$
	- Give A an E and perform a row transformation, resulting in the inverse matrix A;

**Property Four**: Performing an elementary row transformation on `n`-order matrix `A` is equivalent to multiplying the left side of matrix `A` by the corresponding elementary matrix; Similarly, performing an elementary column transformation on `A` is equivalent to multiplying the right side of matrix `A` by the corresponding elementary matrix;


## 7.4 Row Ladder Matrix and Row Simplest Step Matrix
### 7.4.1 Row Ladder Matrices
#####**Definition**: #Rowladdermatrix
> <font color="#ccc1d9"> description: A matrix </font> the following characteristics is called a rowed ladder matrix:
> (1) If there is a zero line (i.e., a row with all elements zero), then all zero rows are below the non-zero row;
> (2) For each nonzero row, the column indicator for the first nonzero element from the left is a strictly increasing `->` solution from top to bottom;

**Explanation**
- Objectives:
- Concept:
	- Transforms the system of equations, but only performs isosolution transformations;
	- Because the lower row definitely has more zeros than the upper row `->` The number of independent variables in the lower row is smaller;
- Example:
	- $$\rightarrow\begin{bmatrix}1&1&0&-3&-1\\0&-2&2&2&1\\0&0&0&3&-1\\0&0&0&0&0\end{bmatrix}=B$$
- Pedestal base:
	- The leftmost element of each step is called the base `->` reduce it to its simplest form;

**Example**: Find the general solution for homogeneous linear systems: $\begin{cases}x_{1}+x_{2}-3x_{4}-x_{5}=0,\\x_{1}-x_{2}+2x_{3}-x_{4}=0,\\4x_{1}-2x_{2}+6x_{3}+3x_{4}-4x_{5}=0,\\2x_{1}+4x_{2}-2x_{3}+4x_{4}-7x_{5}=0\end{cases}$

### 7.4.2 Row of the Simplest Stepped Trapezoidal Matrices
#####**Definition**: #Thesimpleststeppedtrapezoidalmatrixisused
> <font color="#ccc1d9"> description: </font> a row of stepped matrices is called the simplest row ladder matrix if the first nonzero element in a nonzero row is `1`, and all other elements in the column containing these nonzero elements are `0`;

**Explanation**
- Difference from determinant: $\text{ The first nonzero element of its nonzero line is }1$
- Features:
	- 1. If there are zero lines, they are all below;
	- 2. For each nonzero row, the column index for the first nonzero element from the left is strictly increasing from top to bottom
	- 3. The elements at the base must be `1`;
	- 4. The elements directly above the stage leg must be `0`;
- Function:
	- Serving the solution of systems of equations;
	- Generally, it can be converted to a row ladder matrix;

**Supplement**: For any nonzero matrix `A`, it can always be transformed into row-step ladder matrices and row-simplest ladder matrices through finite elementary row transformations;
- The identity matrix is the most standard row ladder matrix;
- Systems of linear equations can always be substituted by elimination;
- Generally, it can be converted to a row ladder matrix;

## 7.5 Using Elementary Transformations to Find Inverse Matrices
#####**Theorem**: #Useelementarytransformationstofindtheinversematrix
> <font color="#8db3e2"><font color="#c6d9f0"> description: </font></font> $$\begin{bmatrix}A\vdots E\end{bmatrix}\xrightarrow{\text{ Elementary line transformation }}\begin{bmatrix}E\vdots A^{-1}\end{bmatrix},\\\begin{bmatrix}A\\E\end{bmatrix}\xrightarrow{\text{ Elementary column transformation }}\begin{bmatrix}E\\A^{-1}\end{bmatrix}.$$

**Example Problem**: When $A=\begin{bmatrix}0&2&-1\\1&1&2\\-1&-1&-1\end{bmatrix}$, find $A^{-1}$
- Analysis
	- $\left.\left(A|E\right)=\left(\begin{matrix}0&2&-1&1&0&0\\1&1&2&0&1&0\\-1&-1&-1&-1&0&0&1\end{matrix}\right.\right)$
	- Then, in matrices A and E, the first and second rows are swapped in position
	- Then the first line is added to the third: $\left.\left(\begin{matrix}1&1&2&1&0\\0&2&-1&1&1&0&0\\0&0&1&0&1&1\end{matrix}\right.\right)->\begin{bmatrix}1&1&0&-3&-1\\0&1&-1&-1&-\frac{1}{2}\\0&0&0&1&-\frac{1}{3}\\0&0&0&0&0\end{bmatrix}$
	- Finally, form the $(E|A^{-1})$
- Analysis

## 7.6 Inverse of Simple Block Matrices
#####**Definition**: #Theinverseofasimpleblockmatrix
> <font color="#ccc1d9"> description: </font> $$\begin{bmatrix}A&O\\O&B\end{bmatrix}^{-1}=\begin{bmatrix}A^{-1}&O\\O&B^{-1}\end{bmatrix},\begin{bmatrix}O&A\\B&O\end{bmatrix}^{-1}=\begin{bmatrix}O&B^{-1}\\A^{-1}&O\end{bmatrix}$$

**Explanation**
- Note:
	- $\begin{bmatrix}O&A\\B&O\end{bmatrix}^{-1}$ After finding the inverse matrix, swap it;
- Proof:
	- $\left.\left(\begin{matrix}0&A\\B&0\end{matrix}\right.\right)\left(\begin{matrix}0&B^{-1}\\A^{-1}&0.\end{matrix}\right)=E$

**Supplement**: To find block matrices on the subdiagonal, the following generalization can be made
- When writing the main diagonal, do not write it backwards; for the secondary diagonal, write it backwards:
- $$A=\begin{bmatrix}&&&A_{1}\\&&A_{2}\\&&\cdots\\A_{s}\end{bmatrix}\xrightarrow{\text{ }}A_{i}(i=1,2,\cdots,s)\text{ invertible }\Rightarrow A\text{ invertible, and }A^{-1}=\begin{bmatrix}&&&&A_s^{-1}\\&&&\ddots\\&&A_2^{-1}&&\\A_1^{-1}&&&&\end{bmatrix}$$

**Supplement**: Block triangular matrices
- Example: $\text{Let }A=\begin{bmatrix}B&O\\D&C\end{bmatrix},\text{ where }B\text{ is an invertible }r\times r\text{ matrix and }C\text{ is an invertible }s\times s\text{ matrix. Prove that }A\text{ is invertible and find }A^{-1}.$
	- $|A|=|\begin{matrix}B&0\\D&C\end{matrix}|=|B||C|\neq0$
	- Definition: $\begin{pmatrix}B&0\\D&C\end{pmatrix}\begin{pmatrix}X&Y\\Z&W\end{pmatrix}=\begin{pmatrix}E&0\\0&E\end{pmatrix}$
- Conclusion:
	- The inverse is $\begin{pmatrix}B&0\\D&C\end{pmatrix}^{-1}=\begin{pmatrix}B^{-1}&0\\-C^{-1}DB^{-1}&C^{-1}\end{pmatrix}$.
- Supplement:
	- The upper right triangle is similar, with $B^{-1}DC^{-1}$ in the upper right corner
	- The lower right triangle is similar; its `B` and `C` need to be reversed, then the upper left corner is $C^{-1}DB^{-1}$
	- The lower left triangle is similar; its `B` and `C` need to be reversed, then the lower right corner is $B^{-1}DC^{-1}$
