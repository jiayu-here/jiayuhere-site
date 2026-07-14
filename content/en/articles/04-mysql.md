---
title: Why MySQL Did Not Use the Index: A Structured Debugging Path
slug: mysql-index-debug-path
description: Diagnose missing index use through query shape, selectivity, type conversion, statistics and measured execution plans.
category: Databases
date: 2026-07-08
tags: [MySQL, Index, SQL, EXPLAIN]
---
## Preserve a Reproducible Query
Record the full SQL, parameters, schema, index definitions, MySQL version and approximate data volume. The same SQL can have different selectivity and plans with different values. In production also record concurrency, lock waits and cache state; a slow request may be storage jitter, contention or connection-pool delay rather than an index issue.

```sql
SHOW CREATE TABLE orders;
SHOW INDEX FROM orders;
SELECT VERSION();
```

## Start with EXPLAIN
Inspect `possible_keys`, the chosen `key`, access `type`, estimated `rows`, `filtered` and `Extra`. A non-empty key is not proof of efficiency: an index scan can still read many entries to return few rows.

```sql
EXPLAIN FORMAT=TREE
SELECT id, created_at, total_amount
FROM orders
WHERE user_id = 1001 AND status = 'PAID'
ORDER BY created_at DESC
LIMIT 20;
```

## Use EXPLAIN ANALYZE Carefully
Supported versions can execute the query and report actual rows and timings. Because it really runs the statement, assess risk before using it on expensive or side-effecting work, especially during peak traffic.

## Check Implicit Type Conversion
Compare a `VARCHAR` phone column with a quoted string, not a numeric literal. Join keys should agree on type, length, character set and collation. Converting the indexed column can prevent ordered lookup.

## Keep Functions Off Indexed Columns
Rewrite `DATE(created_at) = '2026-07-14'` as a half-open timestamp range. Generated columns or functional indexes may help recurring expressions, but a sargable predicate is the first option.

```sql
WHERE created_at >= '2026-07-14 00:00:00'
  AND created_at <  '2026-07-15 00:00:00'
```

## Respect the Leftmost Prefix
An index on `(user_id, status, created_at)` begins with `user_id`. It does not generally provide the same access for queries using only `status` or `created_at`. Equality filters often precede range columns, but actual filter and order patterns must determine the final sequence.

## Understand Range Conditions
After a range column, later columns may still participate in index condition pushdown but may not further narrow the scanned key interval. Test candidate orders with actual plans rather than asking whether all columns merely appear in the index.

## A Table Scan Can Be Correct
Boolean or low-cardinality values may match most rows. Scanning a secondary index and then repeatedly accessing the clustered index can cost more than a sequential table scan. Optimizer avoidance is not automatically a bug.

## Use Covering Indexes Selectively
Adding a small set of returned columns can reduce clustered-index lookups, but increases index size, write cost and buffer pressure. Do not try to cover `SELECT *` with a huge secondary index.

## Include ORDER BY and LIMIT
One composite index may filter and return rows in order, avoiding a separate sort. Still, `Using filesort` is not automatically an error; judge it from scanned rows, result size and LIMIT.

## Know the Limits of LIKE
`LIKE 'STM32%'` can use a B-tree prefix range, while `LIKE '%STM32%'` has no known start. Large body searches belong in full-text or dedicated search systems.

## Analyze OR and JOIN Branches
Run each `OR` branch separately to find the broad predicate. `UNION ALL` can enable different indexes but changes duplicate semantics and is not a universal template. For joins, inspect table order, filtered driver rows, indexed join keys and matching types.

## Refresh Stale Statistics
Large imports, deletes or distribution changes can invalidate cardinality estimates. `ANALYZE TABLE orders` refreshes statistics. Highly skewed columns may benefit from histograms, but their maintenance must be documented.

## Treat FORCE INDEX as a Last Resort
Hints can bypass a bad plan today and become wrong after data changes. First correct types and predicates, design the composite index, update statistics and compare actual execution. Only then consider a controlled hint with evidence across parameter values.

## Measure the Tradeoff
Every index consumes disk and buffer space and adds work to INSERT, UPDATE and DELETE. A complete before/after record includes SQL, parameters, plans, actual rows, latency distribution, index size, write impact and regression checks on other queries.

## Recommended Sequence
1. Distinguish execution time from lock or connection wait.
2. Save SQL, parameters, schema and indexes.
3. Run `EXPLAIN`, then safe `EXPLAIN ANALYZE` when appropriate.
4. Inspect type conversion, column functions and rewrites.
5. Inspect composite order, range predicates, ordering and coverage.
6. Compare estimated and actual rows; refresh statistics if needed.
7. Repeat comparable tests and regress other workloads.

## Acceptance Checklist
- Query, parameters and data distribution are reproducible.
- Access type, scanned rows and filtering are explained.
- Comparison and join types match without accidental conversion.
- Composite order matches real filtering and sorting.
- Read gains are weighed against write and space costs.
- Before/after tests use the same conditions more than once.
- `FORCE INDEX` is not the default solution.
