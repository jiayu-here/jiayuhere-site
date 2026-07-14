---
title: Origin 2024 Battery Aging and Thermal Safety Analysis
slug: originlab-battery-aging
description: A workflow using CSV, Excel, PowerShell COM and Origin 2024 for cycle aging, dQ/dV, thermal response and EIS analysis.
category: Data Analysis
status: Analysis artifacts generated
date: 2026-07
tags: [Origin, Excel, PowerShell, Battery, EIS]
repository: https://github.com/jiayu-here/originlab-battery-aging-project
---
## Project Overview
This Origin 2024 demonstration covers lithium-ion cycle aging and thermal-safety analysis. It includes research-style synthetic data, an Excel review workbook, Origin COM automation, preview figures and a generated `.opju` project.

## Project Goals
- Connect CSV import, workbook organization, scientific plots and deliverables.
- Cover capacity retention, dQ/dV, thermal response and EIS Nyquist analysis.
- Regenerate the Origin project from scripts after CSV changes.
- Provide both an Excel review package and the formal Origin project.

## Technology and Environment
Origin 2024, Origin COM Automation, a LabTalk draft, PowerShell, CSV, Excel and scientific visualization. No laboratory hardware is required; Windows, Excel and Origin 2024 are needed to reproduce the workflow.

## System Architecture
`data/` stores source and wide-form CSV. PowerShell reads numeric data and uses Origin COM to create workbooks, set column types, execute `plotxy` and save OPJU. `analysis/` contains the Excel summary, while `results/` contains the Origin project and previews.

```architecture
Source and wide CSV -> PowerShell processing -> Origin COM -> Workbooks and plotxy -> OPJU and previews
Analysis data -> Excel summary -> Capacity, EIS and thermal results
```

## Functional Modules
- Capacity-retention trends over cycles.
- dQ/dV peak movement.
- Thermal response by ambient temperature and C-rate.
- EIS Nyquist data at 0, 250 and 500 cycles.
- Automated Origin workbooks, graph pages and OPJU output.
- Excel formulas, summaries and quick previews.

## Implementation
1. Generate and organize four synthetic CSV datasets.
2. Build the Excel review workbook and preview charts.
3. Convert data into the wide shape required by Origin.
4. Create workbooks, matrices and column metadata through COM.
5. Run Origin commands for graph pages and save `.opju`.
6. Document the Chinese operating and acceptance steps.

## Key Code
The automation creates an Origin page, configures columns and writes the complete matrix in one operation:

```powershell
$book = $Origin.CreatePage(2, $BookName)
$wks = $Origin.FindWorksheet($book)
$wks.Name = $SheetName
$wks.Cols = $data.ColCount
for ($i = 0; $i -lt $Columns.Count; $i++) {
    $col = $wks.Columns.Item([byte]$i)
    $col.Type = $Types[$i]
    $col.LongName = $Columns[$i]
}
$wks.SetData($data.Matrix, 0, 0)
```

## Debugging and Verification
The source tables, summaries and previews were checked in Excel before generating OPJU. If the Origin window did not appear, result timestamps and the background process were inspected. CSV edits retained the column contract before regeneration.

## Problems and Solutions
PowerShell policy may block scripts, `.opju` requires Origin, changing column names breaks COM mappings, and Origin must exit cleanly. A process-scoped execution-policy bypass, separate OPJU/XLSX deliverables, centralized column configuration and explicit save-and-exit checks address these points.

## Current Result
The repository provides `OriginLab_Battery_Aging_Project.opju`, an Excel analysis package, four datasets, preview figures and repeatable PowerShell automation.

## Summary
This project demonstrates an end-to-end workflow across Origin, Excel and automation. All battery data is synthetic demonstration data and does not represent a real experiment or safety certification.

## GitHub Repository
[Open originlab-battery-aging-project](https://github.com/jiayu-here/originlab-battery-aging-project)
