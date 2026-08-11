# 👨🏽‍💻 Tsepo Khoza — Developer Portfolio

A modern, responsive personal portfolio website built to showcase my software development skills, technical experience, projects, and professional journey.

The portfolio presents my work across **frontend development, backend development, databases, cloud deployment, and IT support**, with a focus on building practical solutions to real-world problems.

---

## 🌐 Live Portfolio

🚀 **Portfolio:**
https://portfolio-three-hazel-70.vercel.app

🐙 **GitHub:**
https://github.com/khoza-tb

💼 **LinkedIn:**
https://www.linkedin.com/in/khoza-tb/

---

## ✨ Features

* 🏠 Modern developer-focused home page
* 👨🏽‍💻 About Me section
* 🛠️ Technical Skills & Tools section
* 💼 Projects / Work showcase
* 📩 Contact and professional profiles
* 🌙 Dark / Light mode
* 📱 Fully responsive design
* 🎨 Modern UI with Tailwind CSS
* ✨ Smooth animations using Framer Motion
* 🧭 Client-side navigation with React Router
* 📄 Downloadable CV
* 📋 Copy email and phone contact information
* 🔗 Live project and GitHub links
* ⬆️ Back-to-top functionality
* 📱 Mobile navigation menu

---

# 🎨 Design

The portfolio uses a clean, modern developer-focused design with a responsive layout.

### Theme

The application supports both **Dark Mode** and **Light Mode**.

The selected theme is stored in the browser using `localStorage`, allowing the user's preference to persist between visits.

### Primary UI

* Blue accent color
* Slate-based dark theme
* Clean white/light theme
* Rounded cards
* Responsive layouts
* Hover animations
* Smooth page transitions
* Glass / backdrop-blur navigation

---

# 🛠️ Tech Stack

## Frontend

* **React 19**
* **JavaScript**
* **HTML5**
* **CSS**
* **Tailwind CSS 4**
* **React Router DOM**
* **Framer Motion**

## UI & Icons

* **Lucide React**
* **React Icons**

## Build Tools

* **Vite**
* **ESLint**

## Deployment

* **Vercel**

## Version Control

* **Git**
* **GitHub**

---

# 📄 Portfolio Pages

The application contains five main pages.

## 🏠 Home

The home page introduces me as a **Full-Stack Software Developer** and provides quick access to:

* My work
* CV download
* GitHub
* LinkedIn
* Developer toolkit
* Frontend technologies
* Backend and database technologies
* Cloud and deployment technologies

---

## 👨🏽‍💻 About

The About page provides information about my development approach and professional mindset.

It highlights four principles:

* **Build** — Turning requirements into reliable applications
* **Think** — Breaking technical problems into practical solutions
* **Collaborate** — Working effectively with teams and Git workflows
* **Improve** — Continuously developing technical skills

It also presents my development approach:

```text
01 · Understand
        ↓
02 · Build
        ↓
03 · Improve
```

---

## 🛠️ Skills

The Skills page organizes my technical skills into six categories.

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Tailwind CSS
* shadcn/ui
* Framer Motion
* Responsive Design

### Backend

* Node.js
* Express.js
* PHP
* RESTful APIs
* Authentication
* API Integration

### Databases

* MySQL
* SQL
* MongoDB
* Mongoose
* Database Design

### Cloud & Deployment

* Vercel
* Render
* MongoDB Atlas
* GitHub

### Tools & Workflow

* Git
* GitHub
* Vite
* Postman
* MySQL Workbench
* phpMyAdmin
* XAMPP

### Systems & IT

* Windows
* Linux
* macOS
* IT Troubleshooting
* User Support
* Software Development Life Cycle (SDLC)

---

# 💼 Featured Projects

The Work section currently showcases six projects.

## 01 — GadgetHub

### E-Commerce Storefront

A responsive electronics storefront featuring product categories, shopping cart functionality, quantity controls, and WhatsApp ordering.

**Technologies:**

* HTML
* CSS
* JavaScript
* LocalStorage
* Vercel

🔗 **Live Demo:**
https://gadgethub-khoza-tbs-projects.vercel.app

🐙 **GitHub:**
https://github.com/khoza-tb/gadgethub

---

## 02 — Erisn Clock-In System

### Full-Stack Application

A workforce clock-in and attendance management system built to help teams record employee attendance and manage weekly work reports through a modern web interface.

**Technologies:**

* React
* Node.js
* Express
* MongoDB
* Vercel

🔗 **Live Demo:**
https://erisn-clock-in-frontend.vercel.app/

🐙 **GitHub:**
https://github.com/khoza-tb

---

## 03 — Quiz Application

### Interactive Web Application

A responsive quiz application that allows users to test their knowledge through an interactive interface.

**Technologies:**

* React
* JavaScript
* CSS

🔗 **Live Demo:**
https://quizapplication-rho.vercel.app

🐙 **GitHub:**
https://github.com/khoza-tb/Application-Quiz

---

## 04 — Portfolio Website

### Personal Developer Website

The portfolio website you're currently viewing, designed to showcase my projects, skills, experience, and professional contact information.

**Technologies:**

* React
* Vite
* Tailwind CSS
* Framer Motion
* React Router DOM

🔗 **Live Demo:**
https://portfolio-three-hazel-70.vercel.app

🐙 **GitHub:**
https://github.com/khoza-tb/PORTFOLIO

---

## 05 — JobFindr

### Job Portal

A job-focused web application concept designed to help users discover employment opportunities through a clean and user-friendly experience.

**Technologies:**

* React
* JavaScript
* CSS

🐙 **GitHub:**
https://github.com/khoza-tb

---

# 📁 Project Structure

```text
PORTFOLIO/
│
├── public/
│   ├── images/
│   │   └── background.jpg
│   ├── favicon.svg
│   ├── vite.svg
│   └── Tsepo-Khoza-CV.pdf
│
├── src/
│   │
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Work.jsx
│   │   └── Connect.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

# 🧩 Application Architecture

The application uses a simple React component-based structure.

```text
App
│
├── Navbar
│
├── React Router
│   │
│   ├── Home
│   ├── About
│   ├── Skills
│   ├── Work
│   └── Connect
│
└── Footer
```

The application also uses a shared `ThemeContext` to manage Dark / Light mode throughout the website.

---

# 🌙 Theme System

The portfolio includes a custom React theme context.

The theme:

* Defaults to dark mode
* Can be switched between dark and light
* Uses browser `localStorage`
* Persists the user's theme preference

```text
Dark Mode
    ↕
Light Mode
```

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/khoza-tb/PORTFOLIO.git
```

Navigate into the project:

```bash
cd PORTFOLIO
```

Install the project dependencies:

```bash
npm install
```

---

# 🚀 Development

Start the Vite development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

# 🔍 Linting

Run ESLint:

```bash
npm run lint
```

This helps identify potential JavaScript and React code issues.

---

# ☁️ Deployment

The portfolio is designed to be deployed with **Vercel**.

The GitHub repository can be connected to Vercel so that changes pushed to the `main` branch can automatically trigger a new production deployment.

### Deployment flow

```text
Local Development
       ↓
     Git
       ↓
    GitHub
       ↓
    Vercel
       ↓
 Production Website
```

---

# 🔄 Git Workflow

To update the portfolio after making changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Update portfolio"
```

Push the changes:

```bash
git push
```

---

# 📄 CV

A downloadable CV is included in the project's `public` directory:

```text
public/Tsepo-Khoza-CV.pdf
```

The Home page provides a button that allows visitors to download the CV directly from the portfolio.

---

# 📞 Contact

I am open to:

* Software development opportunities
* Junior developer roles
* Internships
* Freelance projects
* Collaboration
* Technology discussions

### Contact Details

📧 **Email:**
[tsepokhoza266@gmail.com](mailto:tsepokhoza266@gmail.com)

📱 **Phone:**
076 979 6577

💼 **LinkedIn:**
https://www.linkedin.com/in/khoza-tb/

🐙 **GitHub:**
https://github.com/khoza-tb

---

# 🎯 Goals

My goal is to continue developing as a software developer by:

* Building more full-stack applications
* Improving my backend development skills
* Expanding my database knowledge
* Learning more cloud technologies
* Improving application security
* Building scalable APIs
* Working on real-world software projects
* Continuously improving my UI/UX development skills

---

# 📌 Repository Information

**Repository:** `khoza-tb/PORTFOLIO`

**Branch:** `main`

**Application:** React + Vite

**Language:** JavaScript

**Deployment:** Vercel

---

# ⭐ Acknowledgements

This portfolio was built using modern open-source technologies including:

* React
* Vite
* Tailwind CSS
* Framer Motion
* React Router DOM
* Lucide React
* React Icons

---

# 📜 License

This portfolio is a personal project created by **Tsepo Bonginkosi Khoza**.

© 2026 Tsepo Bonginkosi Khoza. All rights reserved.
