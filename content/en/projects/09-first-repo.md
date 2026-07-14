---
title: first-repo Git and GitHub Starter Exercise
slug: first-repo
description: A first GitHub repository using small text and Shell files to practice creation, README authoring, commits and pushes.
category: Engineering Foundations
status: Learning repository
date: 2026-07
tags: [Git, GitHub, Shell, README]
repository: https://github.com/jiayu-here/first-repo
---
## Project Overview
This first GitHub learning repository uses a few text and Shell files to record the path from local edits to a remote commit. It is version-control practice, not a complete application.

## Project Goals
- Create a repository and write a useful README.
- Distinguish the working tree, staging area, local commits and remote repository.
- Complete edit, commit, push and browser-verification steps.

## Technology and Environment
Git, GitHub, Markdown, Shell, a command line, a text editor and a regular computer.

## System Architecture
The structure is intentionally minimal: the README states the purpose, three practice files make changes visible, and one Shell file demonstrates executable content and version history.

```architecture
README and practice files -> Working-tree changes -> Staging area -> Local commit -> History
Shell file -> Permission and content changes -> Version diff
```

## Implementation
1. Create the GitHub repository and local directory.
2. Add the README and practice files.
3. Inspect changes with `git status`.
4. Stage, commit and push.
5. Confirm files and history on GitHub.

## Key Commands
```bash
git status
git add README.md file3.txt file4.txt file5.sh
git commit -m "Update practice files"
git push
git diff
git diff --cached
git log --oneline --decorate -5
```

## Debugging and Verification
`git status`, `git log` and the GitHub commit page are compared. Missing files are traced through staging state, target branch and remote address.

## Problems and Solutions
Beginners often confuse saving a file, committing locally and pushing remotely. Running `git status` at every stage, checking the log after commit and confirming the GitHub page after push creates a repeatable mental model.

## Current Result
The public repository contains the README, text files, Shell file and commit history, completing the basic GitHub workflow exercise.

## Summary
Its value is disciplined version-control practice, and it is clearly labeled as a learning repository rather than a full engineering project.

## GitHub Repository
[Open first-repo](https://github.com/jiayu-here/first-repo)
