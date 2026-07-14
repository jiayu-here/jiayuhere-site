---
title: Origin 2024 锂电池老化与热安全分析
slug: originlab-battery-aging
description: 使用 CSV、Excel、PowerShell COM 与 Origin 2024 组织循环老化、dQ/dV、热响应和 EIS 分析。
category: 数据分析
status: 已生成分析成果
date: 2026-07
tags: [Origin, Excel, PowerShell, Battery, EIS]
repository: https://github.com/jiayu-here/originlab-battery-aging-project
---
## 项目简介
这是一个使用 Origin 2024 完成的锂离子电池循环老化与热安全综合示范项目。仓库包含科研风格的演示数据、Excel 审阅工作簿、Origin COM 自动化脚本、图表预览和已生成的 `.opju` 项目文件。

## 项目目标
- 串联 CSV 导入、工作簿整理、科研作图和结果交付。
- 覆盖容量保持率、dQ/dV、热响应和 EIS Nyquist 分析。
- 让修改 CSV 后能够通过脚本重新生成 Origin 项目。
- 同时提供 Excel 审阅入口和 Origin 正式项目入口。

## 使用技术
Origin 2024、Origin COM Automation、LabTalk 草案、PowerShell、CSV、Excel 工作簿和科研数据可视化。

## 硬件环境
不依赖实验硬件。项目使用合成但接近科研格式的演示数据，需要一台可运行 Windows、Excel 和 Origin 2024 的电脑。

## 软件环境
- Windows PowerShell。
- Origin 2024，用于打开和重新生成 `.opju`。
- Microsoft Excel，用于审阅 `Battery_Aging_Origin_Analysis.xlsx`。
- 脚本入口为 `scripts/run_origin_automation.ps1`。

## 系统架构
`data/` 保存原始和宽表 CSV；PowerShell 读取数值并通过 Origin COM 创建工作簿、设置列类型、执行 `plotxy` 和保存 OPJU；`analysis/` 提供 Excel 汇总；`results/` 保存 Origin 项目和预览图。

```architecture
原始与宽表 CSV -> PowerShell 数据处理 -> Origin COM -> 工作簿与 plotxy -> OPJU 和预览图
分析数据 -> Excel 汇总 -> 容量保持率 EIS 与热响应结果
```

## 功能模块
- 循环容量保持率趋势。
- dQ/dV 峰位移动数据。
- 环境温度与倍率对应的热响应数据。
- 0、250、500 次循环的 EIS Nyquist 数据。
- COM 自动创建工作簿、图页和 OPJU。
- Excel 公式、汇总页和快速预览。

## 实现步骤
1. 生成并整理四类演示 CSV 数据。
2. 构建 Excel 审阅工作簿与图表预览。
3. 将 Origin 所需数据转换为宽表。
4. 编写 COM 函数创建工作簿、写入矩阵和设置列类型。
5. 调用 Origin 命令生成图页并保存 `.opju`。
6. 整理中文操作文档和验收清单。

## 关键代码
### `scripts/build_origin_project_com.ps1`：创建工作簿
脚本通过 Origin COM 创建页面、配置列类型并一次写入数值矩阵：

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

### `scripts/build_origin_project_com.ps1`：生成图页
绘图函数统一处理标题、坐标轴和自动缩放：

```powershell
[void]$Origin.Execute("plotxy [$Book]1!($XCol1Based,$YCol1Based) plot:=200;")
[void]$Origin.Execute("page.longname$ = `"$Title`";")
[void]$Origin.Execute("layer.x.label$ = `"$XLabel`";")
[void]$Origin.Execute("layer.y.label$ = `"$YLabel`";")
[void]$Origin.Execute("rescale;")
```

## 调试过程
先在 Excel 中核对原始表、汇总和预览图，再运行 COM 脚本生成 OPJU。若 Origin 窗口未出现，则检查结果文件修改时间和后台进程；修改数据时先保持列名与结构不变，再验证脚本可重复生成。

## 遇到的问题
- PowerShell 执行策略可能阻止脚本。
- `.opju` 必须由 Origin 打开，Excel 只能查看审阅包。
- 修改列名或增删列后，COM 脚本的列配置会失效。
- 自动化结束后需要确保 Origin 进程正常退出。

## 解决方案
使用进程级 `ExecutionPolicy Bypass` 临时放行；分别提供 OPJU 与 XLSX；把列名和类型集中到脚本参数中；保存后调用 Origin 退出，并通过结果文件和进程状态验收。

## 最终效果
仓库包含可直接打开的 `OriginLab_Battery_Aging_Project.opju`、Excel 分析包、四类数据、预览图和可重复执行的 PowerShell 自动化脚本。

## 项目总结
项目展示了 Origin、Excel 和脚本自动化之间的完整数据工作流。所有电池数据均为合成演示数据，结果用于流程展示，不属于真实实验或安全认证结论。

## GitHub 仓库链接
[访问 originlab-battery-aging-project](https://github.com/jiayu-here/originlab-battery-aging-project)
