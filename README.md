# Nikita Tinkhede — Developer Portfolio

A bespoke, high-performance developer portfolio built for **Nikita Tinkhede**, Software Developer with 1.5 years of industry experience specializing in **React.js**, **Next.js**, **Material UI (MUI)**, **FastAPI**, and **Agentic AI systems** (**LLMs, LangChain, LangGraph, RAG**).

---

## 🚀 Live Demo & Deployment

- **Primary Application Framework**: Vite + React
- **Styling**: Tailwind CSS with custom glassmorphism and design tokens
- **Animations**: Framer Motion
- **3D Environment**: Three.js interactive canvas with neural constellation mesh and mouse parallax
- **Icons**: Lucide React
- **Deployment Platform**: Vercel

---

## 📁 Repository Structure

```
nikita-portfolio/
├── public/
│   ├── favicon.svg                   # Custom NT brand favicon
│   └── Nikita_Tinkhede_Resume.pdf    # Official generated resume document
├── src/
│   ├── assets/                       # Static branding assets
│   ├── components/
│   │   ├── common/
│   │   │   ├── Background3D.jsx      # Three.js 3D floating wireframes & particles
│   │   │   ├── CustomCursor.jsx      # Spring-damped dual-ring desktop cursor
│   │   │   └── Footer.jsx            # Branding, footer navigation & back-to-top
│   │   ├── navigation/
│   │   │   └── Navbar.jsx            # Glassmorphic header, theme toggle & mobile drawer
│   │   └── sections/
│   │       ├── HeroSection.jsx       # Hero headline, metric cards & interactive code terminal
│   │       ├── AboutSection.jsx      # Bento Grid narrative, contact cards & competencies
│   │       ├── SkillsSection.jsx     # Filterable categories with contextual skill data
│   │       ├── ExperienceSection.jsx # Valethi Technology timeline & impact breakdown
│   │       ├── ProjectsSection.jsx   # AI Test Buddy & Candidate Assessment Agent showcases
│   │       ├── EducationSection.jsx  # MCA (9.54 CGPA) & B.Sc. IT degrees
│   │       └── ContactSection.jsx    # Resend email form (api/edata.js), social links & resume preview
│   ├── context/
│   │   └── ThemeContext.jsx          # Light/Dark mode provider with localStorage sync
│   ├── data/
│   │   └── portfolioData.js          # Single source of truth from verified resume
│   ├── App.jsx                       # Root layout & component assembly
│   ├── index.css                     # Tailwind base, utilities & glassmorphic styles
│   └── main.jsx                      # React 19 root entry
├── index.html                        # SEO, OpenGraph & Google Fonts
├── package.json                      # Dependencies & build scripts
├── postcss.config.js                 # PostCSS setup
├── tailwind.config.js                # Tailwind CSS custom themes & animations
├── vercel.json                       # Vercel SPA routing & cache headers
└── generate_resume_pdf.py            # ReportLab script to build resume PDF
```

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Python**: 3.10+ (for optional PDF generation script)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) to view the portfolio.

### 4. Build for Production
```bash
npm run build
```
This compiles the application into the optimized `dist/` bundle.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Deployment to Vercel

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nikita Tinkhede developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/nikita-portfolio.git
   git push -u origin main
   ```

2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `nikita-portfolio` repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## 🔒 Verified Information Source

All biographical information, career dates, company roles, educational scores, and project specifications are strictly verified from Nikita Tinkhede's official resume:
- **Title**: Software Developer
- **Company**: Valethi Technology Pvt. Ltd. (May 2025 – Present)
- **Education**: MCA, G.H. Raisoni Amravati University (CGPA: 9.54/10) | B.Sc. IT (75.00%)
- **Email**: `nikitatinkhede80@gmail.com`
- **Location**: Nagpur, Maharashtra
