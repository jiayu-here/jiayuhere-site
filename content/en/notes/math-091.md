---
title: "Lecture 22: Reducing Quadratic Forms to Standard and Canonical Forms"
slug: math-091
description: "Graduate Entrance Examination Mathematics study notes: Lecture 22: Reducing Quadratic Forms to Standard and Canonical Forms. Original formulas, diagrams, and examples are retained."
category: "Mathematics"
tags: ["Graduate Entrance Examination Mathematics","Linear Algebra","Quadratic Forms"]
---

## 22.1 Inertia Theorem
**Concept**: The inertial theorem
- No matter what kind of invertible linear transformation is chosen, converting quadratic forms into standard or gauge forms, the number of positive terms is `p` and the number of negative terms is `q` unchanged;
- Where `p` is called the positive inertia index;
- Where `q` is called the negative inertia index;
- If a quadratic form has rank $r$, then $r=p+q$. Invertible linear changes of variables preserve the positive and negative inertia indices.

**Concept**: The sufficiency condition for two quadratic (or real-symmetric matrix) contracts
- Concept:
	- Two quadratic forms (or real symmetric matrices) are congruent iff they have the same positive and negative inertia indices. Equivalently, they have the same rank and the same positive (or negative) inertia index.
- Under an orthogonal matrix:
	- Under orthogonal diagonalization, the two matrices have the same numbers of positive and negative eigenvalues.

## 22.1 Differences Between Two Methods for Quadratic Forms
**Summary**: Completing the square versus orthogonal diagonalization
- For the quadratic form $f=x^TAx$, there are two common transformations:
- (1) Completing the square
	- Invertible linear transformation: $x=Cy$;
	- The only requirement on $C$ is that it be invertible.
	- The transformation $x=Cy$ produces a diagonal matrix congruent to $A$.
- (2) Orthogonal transformation method
	- Set $x=Qy$, where $Q$ is orthogonal, so $Q^{-1}=Q^T$.
	- Thus $Q^TAQ=Q^{-1}AQ=\Lambda$.
- Difference between congruence and similarity:
	- When $A$ is symmetric, both changes of variables are invertible.
	- Completing the square does not require $C^{-1}=C^T$, so the columns of $C$ need not be eigenvectors.
	- Orthogonal diagonalization is more restrictive: the columns of $Q$ are orthonormal eigenvectors, and the diagonal entries of $\Lambda$ are the corresponding eigenvalues.
- Note: similarities
	- Both methods yield the same positive and negative inertia indices, so the numbers of positive and negative coefficients are invariant.

**Concept**: Congruent matrices and inertia indices
- Concept:
	- The positive and negative inertia indices are invariants under congruence transformations.
	- Thus $A$ is congruent to $B$ iff $p_A=p_B$ and $q_A=q_B$.
- Symmetry:
	- If two real symmetric matrices are similar, they have the same eigenvalues and therefore the same inertia indices, so they are congruent.

	- The converse is false: congruent matrices need not be similar.
- Conclusion:
	- 1. Similar contracts;
	- 2. Contracts are not necessarily similar;
