from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "assets" / "files"
FONT_REGULAR = Path(r"C:\Windows\Fonts\msyh.ttc")
FONT_BOLD = Path(r"C:\Windows\Fonts\msyhbd.ttc")

INK = colors.HexColor("#24292f")
MUTED = colors.HexColor("#57606a")
LINE = colors.HexColor("#d0d7de")
SOFT = colors.HexColor("#f6f8fa")
BLUE = colors.HexColor("#0969da")
WHITE = colors.white


def register_fonts():
    pdfmetrics.registerFont(TTFont("ResumeRegular", str(FONT_REGULAR), subfontIndex=0))
    pdfmetrics.registerFont(TTFont("ResumeBold", str(FONT_BOLD), subfontIndex=0))


def styles():
    return {
        "name": ParagraphStyle(
            "Name", fontName="ResumeBold", fontSize=22, leading=26, textColor=WHITE, spaceAfter=4
        ),
        "role": ParagraphStyle(
            "Role", fontName="ResumeRegular", fontSize=9.5, leading=13, textColor=colors.HexColor("#d0d7de")
        ),
        "contact": ParagraphStyle(
            "Contact", fontName="ResumeRegular", fontSize=7.5, leading=11, textColor=WHITE, alignment=TA_RIGHT
        ),
        "section": ParagraphStyle(
            "Section", fontName="ResumeBold", fontSize=10.4, leading=13, textColor=INK, spaceBefore=2, spaceAfter=7
        ),
        "label": ParagraphStyle(
            "Label", fontName="ResumeBold", fontSize=7, leading=9, textColor=BLUE, spaceAfter=1
        ),
        "body": ParagraphStyle(
            "Body", fontName="ResumeRegular", fontSize=7.3, leading=9.8, textColor=MUTED, spaceAfter=5
        ),
        "body_tight": ParagraphStyle(
            "BodyTight", fontName="ResumeRegular", fontSize=7.1, leading=9.2, textColor=MUTED, spaceAfter=3
        ),
        "entry_title": ParagraphStyle(
            "EntryTitle", fontName="ResumeBold", fontSize=8.7, leading=11, textColor=INK, spaceAfter=2
        ),
        "entry_meta": ParagraphStyle(
            "EntryMeta", fontName="ResumeRegular", fontSize=6.8, leading=9, textColor=BLUE, spaceAfter=3
        ),
        "footer": ParagraphStyle(
            "Footer", fontName="ResumeRegular", fontSize=6.7, leading=8, textColor=MUTED
        ),
    }


def p(text, style):
    return Paragraph(text, style)


def section(title, content, style_map):
    rule = Table([["", p(title, style_map["section"])]], colWidths=[3 * mm, None])
    rule.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, 0), BLUE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (0, 0), 0),
                ("RIGHTPADDING", (0, 0), (0, 0), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("LEFTPADDING", (1, 0), (1, 0), 6),
            ]
        )
    )
    return [rule, *content, Spacer(1, 4)]


def fact(label, value, style_map):
    return [p(label, style_map["label"]), p(value, style_map["body"])]


def project(title, meta, summary, details, status, style_map):
    rows = [
        p(title, style_map["entry_title"]),
        p(meta, style_map["entry_meta"]),
        p(summary, style_map["body_tight"]),
        p("<br/>".join(f"- {item}" for item in details), style_map["body_tight"]),
        p(f"<font color='#0969da'><b>{status}</b></font>", style_map["body_tight"]),
        Spacer(1, 4),
    ]
    return rows


def draw_footer(canvas, doc, language):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 12 * mm, A4[0] - doc.rightMargin, 12 * mm)
    canvas.setFont("ResumeRegular", 6.6)
    canvas.setFillColor(MUTED)
    footer = "Jiayu Lab | www.jiayuhere.com | Privacy-safe public resume" if language == "en" else "Jiayu Lab | www.jiayuhere.com | 隐私保护版公开简历"
    canvas.drawString(doc.leftMargin, 8 * mm, footer)
    canvas.drawRightString(A4[0] - doc.rightMargin, 8 * mm, str(doc.page))
    canvas.restoreState()


def build(language):
    s = styles()
    is_en = language == "en"
    if is_en:
        s["section"].fontSize = 9.8
        s["section"].leading = 11.2
        s["section"].spaceAfter = 5
        s["body"].fontSize = 6.7
        s["body"].leading = 8.3
        s["body"].spaceAfter = 4
        s["body_tight"].fontSize = 6.5
        s["body_tight"].leading = 8
        s["body_tight"].spaceAfter = 2
        s["entry_title"].fontSize = 8.1
        s["entry_title"].leading = 9.5
        s["entry_meta"].fontSize = 6.2
        s["entry_meta"].leading = 7.5
        s["entry_meta"].spaceAfter = 2
    output = OUTPUT_DIR / f"zhao-jiayu-resume-{language}.pdf"
    doc = SimpleDocTemplate(
        str(output),
        pagesize=A4,
        leftMargin=14 * mm,
        rightMargin=14 * mm,
        topMargin=12 * mm,
        bottomMargin=17 * mm,
        title="JiaYu Zhao Resume" if is_en else "赵家瑜个人简历",
        author="JiaYu Zhao",
        subject="Privacy-safe public resume",
    )
    content_width = A4[0] - doc.leftMargin - doc.rightMargin

    if is_en:
        name = "JiaYu Zhao"
        role = "Electronic Information Engineering | FPGA, Embedded Systems and Communications"
        contact = (
            "<a href='mailto:jiayuhere@gmail.com' color='#ffffff'>jiayuhere@gmail.com</a><br/>"
            "<a href='https://github.com/jiayu-here' color='#ffffff'>github.com/jiayu-here</a><br/>"
            "<a href='https://www.jiayuhere.com/en/' color='#ffffff'>www.jiayuhere.com</a> | WeChat: jiayu_here"
        )
        left = []
        left += section("EDUCATION", [
            *fact("UNIVERSITY", "Harbin University of Science and Technology", s),
            *fact("DEGREE", "B.Eng. in Electronic Information Engineering", s),
            *fact("DATES", "2021 - 2025", s),
            *fact("COURSEWORK", "Signals and Systems, Digital Circuits, Analog Electronics, C Programming, Microcontrollers", s),
        ], s)
        left += section("CAREER FOCUS", [
            p("FPGA and embedded systems, electronic hardware development, communications and DSP roles.", s["body"]),
        ], s)
        left += section("AWARDS AND CREDENTIALS", [
            p("<b>University Scholarship</b><br/>Awarded during undergraduate study.", s["body"]),
            p("<b>Second Prize in Mathematical Modeling</b><br/>Accurate localization of multiple rocket debris objects.", s["body"]),
            p("<b>CET-4</b><br/>Technical reading and English knowledge-base practice.", s["body"]),
        ], s)
        left += section("LEADERSHIP", [
            p("<b>Youth Volunteer Association | Team Captain</b>", s["body_tight"]),
            p("2022.01 - 2023.12", s["entry_meta"]),
            p("Coordinated event support, marathon operations and elder-care volunteering; developed task ownership and teamwork.", s["body"]),
        ], s)
        left += section("TECHNICAL STACK", [
            p("<b>FPGA:</b> Verilog, Quartus, ModelSim, TimeQuest, DDS, QPSK, UART, I2C", s["body"]),
            p("<b>Embedded:</b> C, STM32 HAL, FreeRTOS, PWM, ADC, DMA, encoders, PID, Flash", s["body"]),
            p("<b>DSP:</b> MATLAB, BER, FFT, sampling, spectra, filtering, features", s["body"]),
            p("<b>Circuits:</b> Altium Designer, Multisim, PCB design and soldering, Keil", s["body"]),
            p("<b>Software:</b> Python, OpenCV, NumPy, data structures, Git, Linux, Docker, SQLite/MySQL, CMake, documentation", s["body"]),
        ], s)
        left += section("STRENGTHS", [
            p("- Connect theory, implementation and verification in engineering work.<br/>- Develop and debug in Windows and Linux environments.<br/>- Document technical work and share reusable knowledge.<br/>- Interested in photography and knowledge sharing.", s["body_tight"]),
        ], s)
        left += section("PUBLIC CONTACT", [
            p("No phone number, age, gender, salary expectation, preferred city or previous email is included in this public version.", s["body"])
        ], s)

        right = []
        right += section("PROFILE", [
            p("Electronic information engineering graduate building practical workflows across communications, DSP, FPGA RTL, STM32/FreeRTOS and Python. Projects retain source, tests, constraints, build evidence, scripts, documentation and known limits.", s["body"]),
            p("- Break systems into independently verifiable algorithm, timing, interface and presentation layers.<br/>- Debug from waveforms, logs, serial data, scripts and build reports.<br/>- Separate simulation, compilation, timing closure and physical verification claims.", s["body_tight"]),
        ], s)
        projects = []
        projects += project(
            "FPGA QPSK Baseband Link and Visualization",
            "Verilog | UART | Python | Cyclone IV E",
            "PRBS7, Gray mapping, discrete phase channel, hard decisions, BER counting and UART/CSV telemetry with Python constellation and I/Q views.",
            ["Resolved pipeline alignment, signed widths and UART throughput limits.", "ModelSim and CSV paths pass; Quartus timing checks produce a .sof image."],
            "Compilation and simulation complete; physical UART confirmation pending.", s,
        )
        projects += project(
            "Multi-Function FPGA DDS Signal and Measurement System",
            "DDS | I2C | PCF8591 AD/DA | 74HC595",
            "Four-waveform DDS, ADC/DAC access, sample statistics and a six-digit display in one synthesizable Cyclone IV E design.",
            ["Implemented a 32-bit phase accumulator, 256-entry LUT, I2C state machine and exponential average.", "ModelSim passes; Quartus synthesis, fitting, assembly and TimeQuest complete."],
            "Compilation and simulation complete; analog board measurement pending.", s,
        )
        projects += project(
            "STM32F103 FreeRTOS Multi-Mode Smart Car",
            "C | FreeRTOS | PID | Encoders | C8T6/RCT6",
            "Dual-wheel PID, odometry, line following, avoidance, Flash parameters, safety protection and Bluetooth command firmware.",
            ["Seven task areas around a 10 ms control loop with diagnostics and watchdog protection.", "Both targets cross-build; PID and protocol host tests pass; ELF/HEX/BIN/MAP artifacts produced."],
            "Software build complete; vehicle electrical, mechanical and calibration tests pending.", s,
        )
        projects += project(
            "Mathematical Modeling: Accurate Localization of Multiple Rocket Debris Objects",
            "Mathematical Modeling | Localization Analysis | Second Prize",
            "Modeled and analyzed the accurate localization of multiple rocket debris objects.",
            ["Translated the real-world positioning problem into solvable constraints and completed the competition submission."],
            "Competition project; Second Prize in Mathematical Modeling.", s,
        )
        projects += project(
            "<a href='https://github.com/jiayu-here/TemperatureInspector_STM32F103C8T6' color='#24292f'>STM32F103 Dual-Channel Temperature Monitoring and Alarm System</a>",
            "STM32 | DS18B20 | PT100 | OLED | FatFs",
            "Samples a DS18B20 and PT100 module voltage, with OLED display, threshold alarms, SD CSV logging, serial configuration and persistent Flash thresholds.",
            ["Non-blocking periodic scheduling coordinates acquisition, alarms, display, storage and serial tasks.", "Includes HAL, Keil/CubeMX, FatFs, documentation and a flashable HEX; ESP-01S cloud flow is disabled by default."],
            "Independent development | 2024.05 - 2024.06 | Public repository packaged 2026.07", s,
        )
        projects += project(
            "<a href='https://github.com/jiayu-here/stm32-vision-robot-arm-sorter' color='#24292f'>STM32 Vision-Guided Robotic Arm Sorter</a>",
            "STM32 | FreeRTOS | OpenCV | Inverse Kinematics",
            "Vision-guided sorting with color detection, four-point calibration, CRC16 UART, inverse kinematics and FSR grasp confirmation.",
            ["Simulator, 14 automated tests and GUI smoke test pass; firmware cross-build produces ELF/HEX/BIN/MAP.", "Five PWM channels, four RTOS tasks, workspace checks, smooth motion, E-stop and retry handling."],
            "Team member 2023.05 - 2023.06 | Public repository packaged 2026.07 | Hardware validation pending", s,
        )
        right += section("SELECTED PROJECTS", projects, s)
        right += section("ENGINEERING METHOD", [
            p("- Define acceptance criteria before implementation.<br/>- Verify modules independently with waveforms, logs, scripts and build reports.<br/>- Package source, constraints, results and known limits for reproducible handoff.", s["body_tight"])
        ], s)
    else:
        name = "赵家瑜"
        role = "电子信息工程 | FPGA、嵌入式与通信系统方向"
        contact = (
            "<a href='mailto:jiayuhere@gmail.com' color='#ffffff'>jiayuhere@gmail.com</a><br/>"
            "<a href='https://github.com/jiayu-here' color='#ffffff'>github.com/jiayu-here</a><br/>"
            "<a href='https://www.jiayuhere.com/' color='#ffffff'>www.jiayuhere.com</a> | 微信: jiayu_here"
        )
        left = []
        left += section("教育经历", [
            *fact("学校", "哈尔滨理工大学", s),
            *fact("专业与学历", "电子信息工程 | 本科", s),
            *fact("时间", "2021 - 2025", s),
            *fact("核心课程", "信号与系统、数字电路、模拟电子技术、C 语言、单片机", s),
        ], s)
        left += section("求职方向", [
            p("FPGA 与嵌入式系统开发、电子硬件开发、通信与数字信号处理相关岗位。", s["body"]),
        ], s)
        left += section("奖项与证书", [
            p("<b>学校奖学金</b><br/>在校期间获得学校奖学金。", s["body"]),
            p("<b>数学建模二等奖</b><br/>围绕多个火箭残骸的准确定位完成建模与分析。", s["body"]),
            p("<b>大学英语四级</b><br/>具备技术资料阅读与技术英语知识库积累基础。", s["body"]),
        ], s)
        left += section("组织经历", [
            p("<b>青年志愿者协会 | 队长</b>", s["body_tight"]),
            p("2022.01 - 2023.12", s["entry_meta"]),
            p("组织活动维护、马拉松流程安排和敬老院志愿服务，积累现场协调、责任分工与团队协作经验。", s["body"]),
        ], s)
        left += section("技术栈", [
            p("<b>FPGA:</b> Verilog、Quartus、ModelSim、TimeQuest、DDS、QPSK、UART、I2C", s["body"]),
            p("<b>嵌入式:</b> C、STM32 HAL、FreeRTOS、PWM、ADC、DMA、编码器、PID、Flash", s["body"]),
            p("<b>通信与 DSP:</b> MATLAB、BER、FFT、采样、频谱、滤波、特征提取", s["body"]),
            p("<b>电路工具:</b> Altium Designer、Multisim、PCB 设计与焊接、Keil", s["body"]),
            p("<b>软件交付:</b> Python、OpenCV、NumPy、数据结构、Git、Linux、Docker、SQLite/MySQL、CMake、技术文档", s["body"]),
        ], s)
        left += section("个人优势", [
            p("- 重视理论、实现和验证之间的衔接。<br/>- 熟悉 Windows 与 Linux 环境下的开发和调试。<br/>- 习惯整理技术过程并分享可复用知识。<br/>- 爱好摄影与知识分享。", s["body_tight"]),
        ], s)
        left += section("公开联系方式", [
            p("本公开版不包含手机号、年龄、性别、期望薪资、求职城市和旧邮箱。", s["body"])
        ], s)

        right = []
        right += section("个人概述", [
            p("电子信息工程专业背景，持续实践通信、数字信号处理、FPGA RTL、STM32/FreeRTOS 与 Python 工具链。项目尽量保留源码、测试、约束、编译证据、脚本、文档和已知限制。", s["body"]),
            p("- 将系统拆分为可独立验证的算法、时序、接口和展示模块。<br/>- 使用波形、日志、串口数据、测试脚本和编译报告定位问题。<br/>- 区分仿真、编译、时序与实物验证，不把规划提前写成结果。", s["body_tight"]),
        ], s)
        projects = []
        projects += project(
            "FPGA QPSK 数字基带链路与可视化系统",
            "Verilog | UART | Python | Cyclone IV E",
            "实现 PRBS7、Gray 映射、离散相位信道、硬判决、BER 统计和 UART/CSV 遥测，并用 Python 显示星座图与 I/Q。",
            ["解决流水线对齐、有符号位宽和 UART 吞吐量问题。", "ModelSim 与 CSV 链路通过，Quartus 时序检查完成并生成 .sof。"],
            "已完成编译与仿真；板级 UART 待实物确认。", s,
        )
        projects += project(
            "FPGA 多功能 DDS 信号发生与测量系统",
            "DDS | I2C | PCF8591 AD/DA | 74HC595",
            "在 Cyclone IV E 上集成四种波形 DDS、ADC/DAC、采样统计和六位数码管显示。",
            ["实现 32 位相位累加器、256 点查找表、I2C 状态机和指数平均。", "ModelSim 通过，Quartus 完成综合、布局布线、汇编和 TimeQuest。"],
            "已完成编译与仿真；模拟接口待板级测量。", s,
        )
        projects += project(
            "STM32F103 FreeRTOS 多模式智能小车",
            "C | FreeRTOS | PID | 编码器 | C8T6/RCT6",
            "构建双轮 PID、里程计、循迹避障、Flash 参数、安全保护和蓝牙命令的多任务固件。",
            ["七类任务围绕 10 ms 控制周期运行，并加入诊断和看门狗保护。", "双目标交叉编译、PID 与协议主机测试通过，生成 ELF/HEX/BIN/MAP。"],
            "软件构建完成；实车电气、机械与标定待验证。", s,
        )
        projects += project(
            "数学建模：多个火箭残骸的准确定位",
            "数学建模 | 定位分析 | 二等奖",
            "围绕多个火箭残骸的准确定位问题完成建模与结果分析。",
            ["将实际定位问题整理为可求解的约束关系，并形成完整竞赛成果。"],
            "竞赛项目；数学建模二等奖。", s,
        )
        projects += project(
            "<a href='https://github.com/jiayu-here/TemperatureInspector_STM32F103C8T6' color='#24292f'>STM32F103 双路温度检测与报警系统</a>",
            "STM32 | DS18B20 | PT100 | OLED | FatFs",
            "同时采集 DS18B20 数字温度与 PT100 模块电压，完成显示、报警、SD CSV 记录、串口调参和 Flash 阈值保存。",
            ["非阻塞周期调度采样、报警、显示、存储和串口任务。", "包含 HAL、Keil/CubeMX、FatFs、完整文档和可烧录 HEX；ESP-01S 云服务默认关闭。"],
            "独立开发 | 2024.05 - 2024.06 | 2026.07 完成公开仓库整理", s,
        )
        projects += project(
            "<a href='https://github.com/jiayu-here/stm32-vision-robot-arm-sorter' color='#24292f'>STM32 视觉机械臂自动分拣系统</a>",
            "STM32 | FreeRTOS | OpenCV | 逆运动学",
            "实现颜色识别、四点标定、CRC16 串口、逆运动学和 FSR 抓取确认的视觉分拣闭环。",
            ["仿真器、14 项自动测试和 GUI 冒烟测试通过；固件生成 ELF/HEX/BIN/MAP。", "实现 5 路 PWM、RTOS 四任务、工作空间检查、平滑运动、急停和失败重试。"],
            "小组成员 2023.05 - 2023.06 | 2026.07 完成公开仓库整理 | 实机待验证", s,
        )
        right += section("代表项目", projects, s)
        right += section("工程方法", [
            p("- 实现前先定义验收结果。<br/>- 使用波形、日志、脚本和编译报告独立验证模块。<br/>- 整理源码、约束、结果和已知限制，形成可复现交付。", s["body_tight"])
        ], s)

    header_left = [p(name, s["name"]), p(role, s["role"])]
    header_right = [p(contact, s["contact"])]
    header = Table([[header_left, header_right]], colWidths=[content_width * 0.62, content_width * 0.38])
    header.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), INK),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (0, 0), 14),
                ("RIGHTPADDING", (0, 0), (0, 0), 8),
                ("LEFTPADDING", (1, 0), (1, 0), 8),
                ("RIGHTPADDING", (1, 0), (1, 0), 14),
                ("TOPPADDING", (0, 0), (-1, -1), 12),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
            ]
        )
    )

    body = Table([[left, "", right]], colWidths=[content_width * 0.31, content_width * 0.03, content_width * 0.66])
    body.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (0, 0), SOFT),
                ("LEFTPADDING", (0, 0), (0, 0), 10),
                ("RIGHTPADDING", (0, 0), (0, 0), 10),
                ("TOPPADDING", (0, 0), (0, 0), 10),
                ("BOTTOMPADDING", (0, 0), (0, 0), 8),
                ("LEFTPADDING", (1, 0), (1, 0), 0),
                ("RIGHTPADDING", (1, 0), (1, 0), 0),
                ("LEFTPADDING", (2, 0), (2, 0), 0),
                ("RIGHTPADDING", (2, 0), (2, 0), 0),
                ("TOPPADDING", (2, 0), (2, 0), 10),
                ("BOTTOMPADDING", (2, 0), (2, 0), 8),
            ]
        )
    )

    story = [header, Spacer(1, 8), body]
    doc.build(
        story,
        onFirstPage=lambda canvas, current_doc: draw_footer(canvas, current_doc, language),
        onLaterPages=lambda canvas, current_doc: draw_footer(canvas, current_doc, language),
    )
    return output


if __name__ == "__main__":
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    register_fonts()
    for locale in ("zh", "en"):
        print(build(locale))
