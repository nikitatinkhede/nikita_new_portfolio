import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

def build_pdf():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir) if os.path.basename(script_dir) == 'scripts' else script_dir
    pdf_path = os.path.join(project_root, "public", "Nikita_Tinkhede_Resume.pdf")

    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'HeaderTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        alignment=1, # Center
        textColor=colors.HexColor("#0f172a")
    )

    contact_style = ParagraphStyle(
        'ContactLine',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=1,
        textColor=colors.HexColor("#334155")
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor("#1e293b"),
        spaceBefore=8,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor("#334155")
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=12,
        leftIndent=12,
        firstLineIndent=-12,
        textColor=colors.HexColor("#334155")
    )

    story = []

    # Name and Header
    story.append(Paragraph("NIKITA TINKHEDE", title_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("Nagpur, Maharashtra | nikitatinkhede80@gmail.com", contact_style))
    story.append(Paragraph("in LinkedIn | ■ GitHub | ■ Portfolio", contact_style))
    story.append(Spacer(1, 6))

    # Divider
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceBefore=2, spaceAfter=6))

    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    summary_text = (
        "Junior Software Developer with 1.5 years of experience building responsive web applications using "
        "React.js, Next.js, and Material UI (MUI), with expertise integrating REST APIs. Experienced in AI-powered "
        "solutions using LLMs, LangChain, LangGraph, and Retrieval-Augmented Generation (RAG), including single- and multi-agent systems."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 6))

    # Skills
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#e2e8f0"), spaceBefore=2, spaceAfter=4))
    story.append(Paragraph("SKILLS", section_heading))
    skills_text = (
        "<b>Languages:</b> JavaScript, Python, SQL &nbsp;&nbsp;|&nbsp;&nbsp; <b>Frontend:</b> React.js, Next.js, Material UI (MUI)<br/>"
        "<b>Backend & API:</b> FastAPI, REST API &nbsp;&nbsp;|&nbsp;&nbsp; <b>Database:</b> MySQL, PostgreSQL<br/>"
        "<b>AI/ML:</b> LLMs, LangChain, LangGraph, RAG, AI Agents (Single & Multi-Agent Systems)"
    )
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 6))

    # Professional Experience
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#e2e8f0"), spaceBefore=2, spaceAfter=4))
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))
    exp_header = "<b>Junior Software Developer — Valethi Technology Pvt. Ltd.</b> &nbsp;|&nbsp; May 2025 – Present"
    story.append(Paragraph(exp_header, body_style))
    story.append(Paragraph("<i>Nagpur, Maharashtra</i>", body_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Develop and maintain responsive React.js, Next.js, and JavaScript applications, translating UI/UX designs into reusable, production-ready components.", bullet_style))
    story.append(Paragraph("• Integrate REST APIs to fetch, display, and manage dynamic data, ensuring seamless client–backend communication.", bullet_style))
    story.append(Paragraph("• Build consistent, accessible user interfaces with Material UI (MUI); collaborate across teams to debug issues, optimize performance, and deliver features on schedule.", bullet_style))
    story.append(Spacer(1, 6))

    # Projects
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#e2e8f0"), spaceBefore=2, spaceAfter=4))
    story.append(Paragraph("PROJECTS", section_heading))
    
    # Project 1
    p1_header = "<b>AI Test Buddy — Frontend Developer</b> &nbsp;|&nbsp; Aug 2025 – Present"
    story.append(Paragraph(p1_header, body_style))
    story.append(Paragraph("<i>Next.js 14, React 18, TypeScript, Material UI, Axios/REST APIs, Azure DevOps CI/CD</i>", body_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Built an internal AI performance-analytics platform tracking provider usage, prompt-test results, and team productivity.", bullet_style))
    story.append(Paragraph("• Developed analytics dashboards, KPI cards, charts, date filters, prompt comparison/diff views, and CRUD modules for providers, domains, users, and RBAC.", bullet_style))
    story.append(Paragraph("• Implemented SSO, token-expiry handling, role-based access control, and Azure DevOps CI/CD; collaborated in Git feature-branch workflows and improved UI stability/performance.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 2
    p2_header = "<b>AI-Powered Candidate Assessment Agent</b>"
    story.append(Paragraph(p2_header, body_style))
    story.append(Paragraph("<i>Python, FastAPI, LangChain, LangGraph, LangSmith, LLMs, React</i>", body_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Built a multi-agent system that screens candidates by reasoning over resumes and interview responses using LLMs.", bullet_style))
    story.append(Paragraph("• Developed agent orchestration with FastAPI, LangChain, and LangGraph, paired with a React UI for recruiter review of AI-generated assessments.", bullet_style))
    story.append(Spacer(1, 6))

    # Education
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#e2e8f0"), spaceBefore=2, spaceAfter=4))
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(Paragraph("<b>MCA</b> — G.H. Raisoni Amravati University &nbsp;|&nbsp; 2022–2024 &nbsp;|&nbsp; <b>CGPA: 9.54/10</b>", body_style))
    story.append(Paragraph("<b>B.Sc. Information Technology</b> — Prerna College, RTMNU, Nagpur &nbsp;|&nbsp; 2019–2022 &nbsp;|&nbsp; <b>75.00%</b>", body_style))
    story.append(Spacer(1, 6))

    # Certifications
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#e2e8f0"), spaceBefore=2, spaceAfter=4))
    story.append(Paragraph("CERTIFICATIONS", section_heading))
    cert_text = (
        "<b>Frontend Development Internship</b> — Cognifyz Technologies, Nagpur &nbsp;|&nbsp; "
        "<b>Frontend Development Internship</b> — Codetech, Hyderabad<br/>"
        "<b>Web Development Course</b> — Seven Mentors, Pune"
    )
    story.append(Paragraph(cert_text, body_style))

    doc.build(story)
    print(f"Successfully generated {pdf_path}")

if __name__ == "__main__":
    build_pdf()
