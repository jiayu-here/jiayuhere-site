---
title: Knowledge Base: A Reachable Homepage Is Not a Working Flow
slug: knowledge-base-homepage-is-not-full-flow
description: Uses cookie-preserving end-to-end requests to verify login, upload, retrieval, deletion and persistence.
date: 2026-07
projectSlug: personal-knowledge-base
---

**Project:** Personal Knowledge Base and Local Retrieval Application

**Symptom:** Opening the homepage did not prove login, upload, parsing, retrieval, detail, deletion or persistence.

**Hypothesis:** The failure could be in the session cookie, mounted files, parsing pipeline or persistent data rather than the homepage itself.

**Investigation:** Checked Compose and Python syntax, then used cookie-preserving HTTP requests for the complete flow and re-tested SQLite plus uploaded material after restart.

**Root cause:** A single endpoint health check covered no stateful behavior.

**Fix:** Added end-to-end requests for login, upload, questions, detail, deletion and logout, plus persistence verification after restart.

**Lesson:** Web acceptance must follow the real user path and verify persistence.
