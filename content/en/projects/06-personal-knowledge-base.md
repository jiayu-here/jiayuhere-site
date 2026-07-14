---
title: Personal Knowledge Base and Local Document Search
slug: personal-knowledge-base
description: A Dockerized personal knowledge base with authentication, document upload, local search and optional AI answers.
category: Web Application
status: Locally verified
date: 2026-07
tags: [Python, SQLite, Docker, Search, Web]
repository: https://github.com/jiayu-here/personal-knowledge-base
---
## Project Overview
This personal knowledge base runs locally. After signing in, users can upload TXT, Markdown, PDF and DOCX files. The service extracts and chunks text, builds a local index and returns relevant passages for a question. With an OpenAI API key, it can also generate an answer grounded in those passages.

## Project Goals
- Consolidate scattered documents in a locally controlled library.
- Support login, upload, search, details, deletion and persistent data.
- Keep local retrieval useful when no external API is configured.
- Simplify startup, migration and backup through Docker Compose.

## Technology and Environment
Python HTTP service, SQLite, HTML/CSS/JavaScript, document extraction, local hash vectors, cosine similarity, cookie sessions, Docker and Compose. It runs on a normal Windows computer with Docker Desktop and is available at `http://localhost:8010`.

## System Architecture
The browser calls a Python service for authentication, parsing, chunking, indexing and question answering. SQLite stores document metadata, chunks and vectors. `data/` is a persistent mount, front-end assets are separate from backend logic, and secrets are read from `.env`.

```architecture
Browser -> Python service -> Authentication and document API -> Retrieval and Q&A -> Results
Uploaded file -> Parsing and chunking -> SQLite metadata and index -> Persistent data directory
```

## Functional Modules
- Password login, session cookie and protected endpoints.
- TXT, Markdown, PDF and DOCX extraction.
- Overlapping chunks, local indexing, similarity search and optional AI answers.
- File list, passage preview, detail and deletion.
- Docker image, Compose startup and a persistent data directory.

## Implementation
1. Create a minimal Python service and static front end.
2. Add login, cookies and protected routes.
3. Parse four file formats and create overlapping chunks.
4. Store documents, chunks and local vectors in SQLite.
5. Implement similarity retrieval and optional model answers.
6. Mount persistent data through Compose and verify the complete HTTP flow.

## Key Code
Chunk overlap reduces the chance that important context falls exactly on a boundary:

```python
def chunk_text(text):
    clean = re.sub(r"\s+", " ", text).strip()
    chunks = []
    start = 0
    while start < len(clean):
        chunk = clean[start:start + CHUNK_SIZE].strip()
        if chunk:
            chunks.append(chunk)
        start += CHUNK_SIZE - CHUNK_OVERLAP
    return chunks
```

Questions are embedded locally and the five chunks with the highest cosine similarity are returned.

## Debugging and Verification
`docker compose config` and Python syntax were checked before startup. Cookie-preserving HTTP requests then tested login, upload, question, detail, deletion and logout, followed by a container restart to verify persistence.

## Problems and Solutions
A heavyweight vector database would raise local deployment cost, while secrets and uploaded documents must not enter a public repository. A single Python service, SQLite and lightweight local vectors keep the stack small. `.env` stores secrets and an ignored mounted directory stores user data. End-to-end cookie tests verify more than the homepage alone.

## Current Result
At `localhost:8010`, the application supports login, upload, retrieval, previews and deletion. With an API key it generates answers from retrieved passages; without one it still returns relevant source text. Dockerfile, Compose, environment examples and complete source are included.

## Summary
The design prioritizes simple personal deployment, migration and offline retrieval. The local vector method is suitable for personal documents and demonstrations, not presented as a commercial vector database or general AI platform.

## GitHub Repository
[Open personal-knowledge-base](https://github.com/jiayu-here/personal-knowledge-base)
