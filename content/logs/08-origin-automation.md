---
title: Origin 自动化：脚本受执行策略阻止
slug: origin-automation-execution-policy-block
description: 以输出文件、时间戳和进程状态验收 Origin COM 自动化任务。
date: 2026-07
projectSlug: originlab-battery-aging
---

**项目：** Origin 2024 锂电池老化与热安全分析

**问题现象：** 运行 PowerShell COM 自动化脚本时，脚本可能无法执行或没有生成预期的 OPJU 文件。

**初步判断：** 先检查 PowerShell 执行策略，再检查 Origin 后台进程、结果文件修改时间和输入表结构。

**排查过程：** 先在 Excel 中核对原始表、汇总和预览图；运行脚本后同时观察进程状态与输出文件，而不是只看 Origin 窗口是否出现。

**最终原因：** PowerShell 执行策略会阻止未放行脚本，且 COM 自动化可能在后台运行，不能把可见窗口作为唯一成功标准。

**解决方法：** 仅在当前进程使用 `ExecutionPolicy Bypass`，保存后显式退出 Origin，并通过 OPJU 修改时间和进程状态验收。

**经验总结：** 自动化任务应以输出文件和进程状态为验收依据，临时放行脚本时不修改整台机器的永久策略。
