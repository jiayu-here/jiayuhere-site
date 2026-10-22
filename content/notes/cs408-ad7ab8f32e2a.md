---
title: Lecture 7：贝叶斯决策论
slug: cs408-ad7ab8f32e2a
description: 408 学习笔记：Lecture 7：贝叶斯决策论。保留原有知识内容、公式与图示；有对应原件时提供查看和下载入口。
category: 408 计算机
noteMajor: 408 计算机
noteCourse: 复试扩展
noteChapter: 机器学习
order: 137
contentFormat: obsidian408
date: 2026-08-14
tags: [408, 复试扩展]
sourceAsset: /assets/408/originals/95dd4fe7afc8.pdf
sourceName: Lecture 7：贝叶斯决策论.pdf
sourceOriginal: 05_复试常考科目/01_机器学习/Lecture 7：贝叶斯决策论.pdf
---

> 描述：本节从贝叶斯定理与最小期望风险出发，整理朴素贝叶斯的条件独立假设、生成式与判别式模型、频率主义与贝叶斯主义、最大似然估计，以及离散和连续属性的概率估计。

## 7.1 问题设定

假设训练集

$$
T=
\{(\boldsymbol{x}_1,y_1),
(\boldsymbol{x}_2,y_2),
\ldots,
(\boldsymbol{x}_N,y_N)\}
$$

由联合分布 $P(X,Y)$ 独立同分布地产生。

+ $Y$ 是类别随机变量，取值为

$$
y_i=c_k,\qquad k=1,2,\ldots,K.
$$

+ 输入含 $d$ 个属性：

$$
\boldsymbol{x}
=(x^{(1)},x^{(2)},\ldots,x^{(d)}).
$$

分类目标是对新输入 $\boldsymbol{x}$ 估计

$$
P(Y=c_k\mid X=\boldsymbol{x}),
$$

并据此选择类别。

## 7.2 朴素贝叶斯

### 7.2.1 需要学习的概率

朴素贝叶斯需要估计：

+ 类别先验

$$
P(Y=c_k),\qquad k=1,\ldots,K.
$$

+ 类条件概率

$$
P(X=\boldsymbol{x}\mid Y=c_k).
$$

直接估计完整联合属性条件概率

$$
P(X^{(1)}=x^{(1)},\ldots,X^{(d)}=x^{(d)}
\mid Y=c_k)
$$

需要指数级数量的参数，有限样本下容易出现组合爆炸和样本稀疏。

### 7.2.2 条件独立假设

朴素贝叶斯假设：给定类别后，各属性相互条件独立：

$$
\begin{aligned}
P(X=\boldsymbol{x}\mid Y=c_k)
&=
P(X^{(1)}=x^{(1)},\ldots,X^{(d)}=x^{(d)}
\mid Y=c_k)\\
&=
\prod_{j=1}^{d}
P(X^{(j)}=x^{(j)}\mid Y=c_k).
\end{aligned}
$$

+ “朴素”指的正是这一强条件独立假设。
+ 该假设大幅降低参数数量，使估计和分类变得简单。
+ 现实特征往往并不完全独立，因此假设可能牺牲部分准确率；但即使概率估计不完美，类别排序仍可能有效。
+ 朴素贝叶斯学习了类别如何生成特征的概率机制，因此属于生成式模型。

## 7.3 后验概率与分类规则

由贝叶斯定理，

$$
P(Y=c_k\mid X=\boldsymbol{x})
=
\frac{
P(X=\boldsymbol{x}\mid Y=c_k)
P(Y=c_k)
}{
\sum_{r=1}^{K}
P(X=\boldsymbol{x}\mid Y=c_r)
P(Y=c_r)
}.
$$

代入条件独立假设：

$$
P(Y=c_k\mid X=\boldsymbol{x})
=
\frac{
P(Y=c_k)
\prod_{j=1}^{d}
P(X^{(j)}=x^{(j)}\mid Y=c_k)
}{
\sum_{r=1}^{K}
P(Y=c_r)
\prod_{j=1}^{d}
P(X^{(j)}=x^{(j)}\mid Y=c_r)
}.
$$

分类时，对所有类别都相同的分母不会影响最大值，因此

$$
h_{\mathrm{nb}}(\boldsymbol{x})
=
\mathop{\arg\max}_{c\in\mathcal Y}
P(c)
\prod_{j=1}^{d}
P(x^{(j)}\mid c).
$$

+ 实现时通常比较对数得分，避免许多小概率连乘造成数值下溢：

$$
\log P(c)
+\sum_{j=1}^{d}\log P(x^{(j)}\mid c).
$$

## 7.4 后验最大化等价于 0-1 风险最小化

采用 0-1 损失：

$$
L(Y,f(X))
=
\begin{cases}
1,&Y\neq f(X),\\
0,&Y=f(X).
\end{cases}
$$

期望风险为

$$
R_{\mathrm{exp}}(f)
=\mathbb E[L(Y,f(X))].
$$

对给定输入 $X=\boldsymbol{x}$，若预测为 $y$，条件风险为

$$
\sum_{k=1}^{K}
L(c_k,y)
P(c_k\mid X=\boldsymbol{x}).
$$

在 0-1 损失下，

$$
\begin{aligned}
f(\boldsymbol{x})
&=
\mathop{\arg\min}_{y\in\mathcal Y}
\sum_{k=1}^{K}
L(c_k,y)
P(c_k\mid X=\boldsymbol{x})\\
&=
\mathop{\arg\min}_{y\in\mathcal Y}
\left[
1-P(Y=y\mid X=\boldsymbol{x})
\right]\\
&=
\mathop{\arg\max}_{y\in\mathcal Y}
P(Y=y\mid X=\boldsymbol{x}).
\end{aligned}
$$

+ 因而把样本分到后验概率最大的类别，就是在 0-1 损失下使条件期望风险最小。
+ 若不同误判代价不同，最优规则应最小化带代价的条件风险，不一定选择后验最大类。

## 7.5 判别式模型与生成式模型

### 7.5.1 判别式模型

+ 直接对后验概率 $P(c\mid\boldsymbol{x})$ 或决策边界建模。
+ 关注如何把不同类别区分开。
+ 源资料列举的代表包括决策树、BP 神经网络和 SVM。

### 7.5.2 生成式模型

+ 先对联合分布 $P(\boldsymbol{x},c)$ 或类条件分布 $P(\boldsymbol{x}\mid c)$ 与先验 $P(c)$ 建模。
+ 再通过

$$
P(c\mid\boldsymbol{x})
=
\frac{
P(\boldsymbol{x},c)
}{
P(\boldsymbol{x})
}
$$

求后验概率。
+ 贝叶斯分类器和朴素贝叶斯属于生成式模型。

| 对比 | 判别式 | 生成式 |
| --- | --- | --- |
| 直接目标 | $P(c\mid\boldsymbol{x})$ 或边界 | $P(\boldsymbol{x},c)$ 或 $P(\boldsymbol{x}\mid c)$ |
| 主要问题 | 类别如何区分 | 数据如何按类别生成 |
| 分类方式 | 直接输出类别/后验 | 由联合或类条件分布推后验 |

## 7.6 频率主义与贝叶斯主义

假设数据服从带未知参数的高斯分布。

### 7.6.1 频率主义

+ 参数被看作固定但未知的真实量。
+ 样本是从由该固定参数决定的分布中随机抽取的。
+ 学习任务是利用样本对参数作点估计。
+ 源资料以 SVM 一类统计学习方法作为频率主义语境下的代表。

### 7.6.2 贝叶斯主义

+ 未知参数也被当作随机变量，用概率分布描述不确定性。
+ 训练前给出参数先验，观察数据后得到参数后验。
+ 学习结果可以是完整参数后验分布，而不只是一个点。
+ 预测时可对参数后验积分，综合参数不确定性。

+ 二者区别不在“是否使用贝叶斯公式”，而在于如何解释未知参数和概率。

## 7.7 最大似然估计

先假设类条件分布具有由参数 $\theta_c$ 决定的形式。对类别 $c$ 的样本集合 $D_c$，若样本条件独立，则似然为

$$
P(D_c\mid\theta_c)
=
\prod_{\boldsymbol{x}\in D_c}
P(\boldsymbol{x}\mid\theta_c).
$$

连乘容易数值下溢，通常使用对数似然：

$$
LL(\theta_c)
=
\log P(D_c\mid\theta_c)
=
\sum_{\boldsymbol{x}\in D_c}
\log P(\boldsymbol{x}\mid\theta_c).
$$

极大似然估计为

$$
\hat\theta_c
=
\mathop{\arg\max}_{\theta_c}
LL(\theta_c).
$$

+ 基本思路是选择使已观察训练样本出现概率最大的参数。
+ “先假设分布形式，再估计参数”中的分布假设如果错误，极大似然估计也可能产生系统偏差。

## 7.8 朴素贝叶斯分类器的参数估计

### 7.8.1 类别先验

令 $D_c$ 为类别 $c$ 的样本集合，则频率估计为

$$
P(c)
=
\frac{|D_c|}{|D|}.
$$

### 7.8.2 离散属性

令 $D_{c,x_i}$ 表示 $D_c$ 中第 $i$ 个属性取值为 $x_i$ 的样本集合，则

$$
P(x_i\mid c)
=
\frac{|D_{c,x_i}|}{|D_c|}.
$$

+ 若某个训练组合未出现，直接频率估计可能给出 $0$，使整类连乘得分归零；实践中常用拉普拉斯平滑，但源资料本节未展开其公式。

### 7.8.3 连续属性

对连续属性，可假设随机变量在给定类别后的条件分布为高斯分布：

$$
X^{(i)}\mid Y=c
\sim
\mathcal N(\mu_{c,i},\sigma_{c,i}^2),
$$

其密度为

$$
p(x_i\mid c)
=
\frac{1}{\sqrt{2\pi}\sigma_{c,i}}
\exp
\left[
-\frac{(x_i-\mu_{c,i})^2}
{2\sigma_{c,i}^2}
\right].
$$

## 7.9 源资料中的西瓜分类示例

待分类样本为：

$$
(\text{青绿，稍蜷，浊响，清晰}).
$$

训练集中好瓜 $8$ 个、坏瓜 $9$ 个，因此

$$
P(\text{好瓜})=\frac{8}{17},
\qquad
P(\text{坏瓜})=\frac{9}{17}.
$$

对应条件概率为：

| 属性取值 | 好瓜 | 坏瓜 |
| --- | ---: | ---: |
| 青绿 | $3/8$ | $3/9$ |
| 稍蜷 | $3/8$ | $4/9$ |
| 浊响 | $6/8$ | $4/9$ |
| 清晰 | $7/8$ | $2/9$ |

好瓜未归一化得分：

$$
\frac{8}{17}
\times\frac{3}{8}
\times\frac{3}{8}
\times\frac{6}{8}
\times\frac{7}{8}.
$$

坏瓜未归一化得分：

$$
\frac{9}{17}
\times\frac{3}{9}
\times\frac{4}{9}
\times\frac{4}{9}
\times\frac{2}{9}.
$$

前者更大，因此分类为好瓜。因为两类共享的 $P(\boldsymbol{x})$ 相同，无需显式计算后验分母。

## 7.10 易错点

+ 条件独立是“给定类别后属性独立”，不是所有属性无条件独立。
+ 朴素贝叶斯是生成式模型，因为它估计 $P(c)$ 与 $P(\boldsymbol{x}\mid c)$。
+ 分类比较时可以去掉对所有类别相同的贝叶斯分母，但若要报告归一化概率仍需计算分母。
+ 后验最大化等价于期望风险最小化只在 0-1 等代价损失下直接成立；误判代价不同时要比较条件风险。
+ 离散属性用概率质量，连续属性用概率密度；连续点的密度值可以大于 $1$，不能把它误当作区间概率。
+ 许多小概率直接连乘容易下溢，应改为对数求和。
+ 未见取值会导致零频率问题，需要平滑。
+ 频率主义把未知参数视为固定量，贝叶斯主义把参数不确定性也用分布描述。

## 相关知识

+ **科目导航**：[复试常考科目导航](/notes/cs408-53cbe59d76f3/)
+ **阅读顺序**：[上一篇：支持向量机](/notes/cs408-3815c94d76d9/) · [下一篇：集成学习](/notes/cs408-a42ee6cb57ff/)

## 7.11 本节复盘

+ 朴素贝叶斯利用类别先验和类条件概率，通过贝叶斯公式估计后验。
+ 条件独立假设把 $P(\boldsymbol{x}\mid c)$ 分解为各属性条件概率的乘积，缓解组合爆炸。
+ 在 0-1 损失下，选择后验概率最大的类别等价于最小化条件期望风险。
+ 判别式模型直接学习后验或边界，生成式模型先学习联合或类条件分布。
+ 最大似然估计选择使训练数据出现概率最大的参数，实际常优化对数似然。
+ 离散属性可用频数比估计，连续属性可使用高斯类条件密度。
+ 西瓜示例中，好瓜的先验与四个条件概率连乘大于坏瓜，因此判为好瓜。
