---
title: first-repo: Saving Locally Did Not Change GitHub
slug: first-repo-save-is-not-push
description: Explains save, stage, commit and push as four separate steps in the Git workflow.
date: 2026-07
projectSlug: first-repo
---

**Project:** first-repo Git and GitHub Introductory Exercise

**Symptom:** A saved file did not appear on GitHub.

**Hypothesis:** The file may not have been staged or committed, or the commit may not have been pushed to the intended branch.

**Investigation:** Checked `git status`, `git log`, the current branch, remote URL and the GitHub commit page.

**Root cause:** Save, local commit and remote push were treated as one action.

**Fix:** Established the explicit save, stage, commit and push sequence with a status or log check at each boundary.

**Lesson:** Git does not update a remote merely because a file was saved.
