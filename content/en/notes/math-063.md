---
title: "Lecture 55: Surfaces and Space Curves"
slug: math-063
description: "Postgraduate Entrance Exam Mathematics Study Notes: Lecture 55: Surfaces and Space Curves. Retain original formulas, diagrams, and example problems."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Advanced Mathematics","Vector Algebra and Analytic Geometry in Space"]
---

## 55.1 Surface and Space Curves
#####**Definition**: #SurfacesInSpace
> <font color="#ccc1d9"> description: </font> $$F(x,y,z)=0\quad\text{ or }z=f(x,y)$$

**Example**: $x+y+z=1$
- Illustration:
	- ![Pasted image 20240523230111](/assets/notes/38e5fe90a9d6-Pasted-image-20240523230111.png)
#####**Definition**: #Spacecurves
> <font color="#ccc1d9"> description: </font> $$\text{ i) Parameter: }\quad\begin{cases}x=x(t)\\y=y(t)\\z=z(t)\end{cases}\quad\text{ ii) General formula: }\begin{cases}F(x,y,z)=0\\G(x,y,z)=0\end{cases}$$

**Supplement**: Why is one equation usually enough for a surface, while a space curve usually needs two?
- Core:
	- One equation reduces one degree of freedom;
	- A surface has two degrees of freedom, while a curve has only one;
	- Therefore, the general formula of a space curve consists of two equations about `xyz`;

### 55.2 Common Surfaces
**Surface One**: Surface of revolution `->` A plane curve rotates about a line in its plane.
- Let $L$ be a curve on the $yoz$ plane, with the equation $\begin{cases}f({y},z)=0\\x=0\end{cases}$
- (1) Rotating $L$ about the $y$-axis gives
  $$f\left(y,\pm\sqrt{x^2+z^2}\right)=0.$$
- (2) Rotating $L$ about the $z$-axis gives
  $$f\left(\pm\sqrt{x^2+y^2},z\right)=0.$$

**Surface Two**: Cylindrical surface `->` The surface traced by a straight line (the generator) that remains parallel to a fixed direction while moving along a fixed curve (the directrix).
- If the directrix is $\Gamma:\begin{cases}f(x,y)=0\\z=0,\end{cases}$ and the generators are parallel to the $z$-axis, then the cylinder is $f(x,y)=0$.
- More generally, if eliminating $z$ from $\begin{cases}F(x,y,z)=0\\G(x,y,z)=0\end{cases}$ gives $H(x,y)=0$, then $H(x,y)=0$ is the cylinder parallel to the $z$-axis through the projected directrix.
- Illustration: The conical surface $z=\sqrt{x^{2}+y^{2}}$ on the area of the cylinder $x^{2}+y^{2}\le2x$:
	- Cone:
		- ![Pasted image 20240523231234](/assets/notes/9eba24051fca-Pasted-image-20240523231234.png)
	- Cylindrical Surface:
		- ![Pasted image 20240523231044](/assets/notes/0c8a093bcf8c-Pasted-image-20240523231044.png)
	- 3D:
		- ![Pasted image 20240523231108](/assets/notes/55293b40d098-Pasted-image-20240523231108.png)


**Surface Three**: Quadric surfaces
- Elliptic cone: $$\frac{x^2}{a^2}+\frac{y^2}{b^2}=z^2.$$
- Ellipsoid: $$\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1.$$
- Hyperboloid of one sheet: $$\frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}-\frac{z^{2}}{c^{2}}=1.$$
- Hyperboloid of two sheets: $$\frac {x^{2}}{a^{2}}- \frac {y^{2}}{b^{2}}- \frac {z^{2}}{c^{2}}= 1.$$
- Elliptic paraboloid: $$\frac{x^2}{a^2}+\frac{y^2}{b^2}=z.$$

**Surface Four**: Projection of a space curve
- If the space curve is $\Gamma:\begin{cases}F(x,y,z)=0\\G(x,y,z)=0,\end{cases}$ and eliminating $z$ gives $H(x,y)=0$, then its projection onto the $xOy$ plane is $\begin{cases}H(x,y)=0\\z=0.\end{cases}$

### 55.3 Frequently Tested Question Types

---
### Question Type: #Establishtheequationsforthecylindricalandrotationalsurfaces
#### PART 1: Problem-solving methods

#### PART 2: Typical Example Problems

#### PART 3: Key Points Review
