export const portfolioData = {
  personalInfo: {
    name: "Nikita Tinkhede",
    role: "Frontend & AI Solutions Developer",
    location: "Nagpur, Maharashtra",
    email: "nikitatinkhede80@gmail.com",
    experienceYears: "1.5 Years",
    availability: "Available for Opportunities",
    summary:
      "Software Developer with 1.5 years of experience building responsive web applications using React.js, Next.js, and Material UI (MUI), with expertise integrating REST APIs. Experienced in AI-powered solutions using LLMs, LangChain, LangGraph, and Retrieval-Augmented Generation (RAG), including single- and multi-agent systems.",
    links: {
      email: "mailto:nikitatinkhede80@gmail.com",
      resume: "/Nikita_Tinkhede_Resume.pdf",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    }
  },
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "SQL"],
      color: "from-amber-500/20 to-orange-500/20",
      accent: "text-amber-500 dark:text-amber-400",
      border: "hover:border-amber-500/50"
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Material UI (MUI)"],
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-500 dark:text-cyan-400",
      border: "hover:border-cyan-500/50"
    },
    {
      category: "Backend & API",
      items: ["FastAPI", "REST API"],
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-500 dark:text-emerald-400",
      border: "hover:border-emerald-500/50"
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL"],
      color: "from-purple-500/20 to-indigo-500/20",
      accent: "text-purple-500 dark:text-indigo-400",
      border: "hover:border-indigo-500/50"
    },
    {
      category: "AI & Machine Learning",
      items: [
        "LLMs",
        "LangChain",
        "LangGraph",
        "RAG (Retrieval-Augmented Generation)",
        "AI Agents (Single & Multi-Agent Systems)"
      ],
      color: "from-violet-500/20 to-fuchsia-500/20",
      accent: "text-violet-500 dark:text-violet-400",
      border: "hover:border-violet-500/50",
      highlight: true
    }
  ],
  experience: [
    {
      role: "Junior Software Developer",
      company: "Valethi Technology Pvt. Ltd.",
      period: "May 2025 – Present",
      location: "Nagpur, Maharashtra",
      type: "Full-Time",
      description: [
        "Develop and maintain responsive React.js, Next.js, and JavaScript applications, translating UI/UX designs into reusable, production-ready components.",
        "Integrate REST APIs to fetch, display, and manage dynamic data, ensuring seamless client–backend communication.",
        "Build consistent, accessible user interfaces with Material UI (MUI); collaborate across teams to debug issues, optimize performance, and deliver features on schedule."
      ],
      technologies: ["React.js", "Next.js", "JavaScript", "Material UI (MUI)", "REST APIs"]
    }
  ],
  projects: [
    {
      id: "ai-test-buddy",
      title: "AI Test Buddy",
      subtitle: "Internal AI Performance-Analytics Platform",
      role: "Frontend Developer",
      period: "Aug 2025 – Present",
      technologies: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "Material UI",
        "Axios/REST APIs",
        "Azure DevOps CI/CD"
      ],
      highlights: [
        "Built an internal AI performance-analytics platform tracking provider usage, prompt-test results, and team productivity.",
        "Developed analytics dashboards, KPI cards, charts, date filters, prompt comparison/diff views, and CRUD modules for providers, domains, users, and RBAC.",
        "Implemented SSO, token-expiry handling, role-based access control, and Azure DevOps CI/CD; collaborated in Git feature-branch workflows and improved UI stability/performance."
      ],
      tags: ["Enterprise AI", "Analytics", "Role-Based Access", "CI/CD"]
    },
    {
      id: "ai-candidate-assessment",
      title: "AI-Powered Candidate Assessment Agent",
      subtitle: "Multi-Agent Candidate Screening & Reasoning Engine",
      role: "AI & Full-Stack Developer",
      period: "Recent Project",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "LangGraph",
        "LangSmith",
        "LLMs",
        "React"
      ],
      highlights: [
        "Built a multi-agent system that screens candidates by reasoning over resumes and interview responses using LLMs.",
        "Developed agent orchestration with FastAPI, LangChain, and LangGraph, paired with a React UI for recruiter review of AI-generated assessments."
      ],
      tags: ["Multi-Agent System", "LLM Reasoning", "LangGraph", "FastAPI"]
    }
  ],
  education: [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "G.H. Raisoni Amravati University",
      period: "2022 – 2024",
      score: "CGPA: 9.54 / 10",
      status: "First Class with Distinction",
      icon: "GraduationCap"
    },
    {
      degree: "B.Sc. Information Technology",
      institution: "Prerna College, RTMNU, Nagpur",
      period: "2019 – 2022",
      score: "75.00%",
      status: "First Class",
      icon: "BookOpen"
    }
  ],
  certifications: [
    {
      title: "Frontend Development Internship",
      issuer: "Cognifyz Technologies",
      location: "Nagpur",
      icon: "Award"
    },
    {
      title: "Frontend Development Internship",
      issuer: "Codetech",
      location: "Hyderabad",
      icon: "Code"
    },
    {
      title: "Web Development Course",
      issuer: "Seven Mentors",
      location: "Pune",
      icon: "FileCheck"
    }
  ],
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]
};
