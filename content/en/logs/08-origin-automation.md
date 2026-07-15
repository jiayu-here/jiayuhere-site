---
title: Origin Automation: Script Blocked by Execution Policy
slug: origin-automation-execution-policy-block
description: Validates Origin COM automation from output artifacts, timestamps and process state.
date: 2026-07
projectSlug: originlab-battery-aging
---

**Project:** Origin 2024 Battery Aging and Thermal Safety Analysis

**Symptom:** PowerShell automation did not run or no expected OPJU file appeared.

**Hypothesis:** Check execution policy first, then the background Origin process, output timestamps and input-table structure.

**Investigation:** Checked source tables and previews, execution policy, result timestamps and the background Origin process.

**Root cause:** Policy blocked the script and COM execution was not always visible.

**Fix:** Used process-scoped policy bypass, explicitly saved and exited Origin, and verified the output timestamp plus process state.

**Lesson:** Validate automation from artifacts, not only a visible window, and avoid permanent machine-wide policy changes for one script.
