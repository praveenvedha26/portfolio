export const skillsPillars = [
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Core Foundations & Systems Logic",
    icon: "Code2",
    accent: "#FF4522",
    skills: [
      { name: "Java", level: "Advanced", note: "Enterprise OOP, Spring Boot Services, REST APIs" },
      { name: "Python", level: "Advanced", note: "DSA, Automation, Scripting" },
      { name: "C++", level: "Advanced", note: "STL, Memory Management, Competitive DSA" },
      { name: "JavaScript (ES6+)", level: "Advanced", note: "Async/Await, Modern Web APIs" },
      { name: "SQL", level: "Proficient", note: "Complex Joins, Indexing, Transactions" }
    ],
    highlight: "Primary focus on Java enterprise patterns backed by daily C++ and Python algorithmic problem solving."
  },
  {
    id: "backend",
    title: "Backend & Databases",
    subtitle: "Enterprise APIs & High-Concurrency Systems",
    icon: "Server",
    accent: "#10B981",
    skills: [
      { name: "Spring Boot", level: "Advanced", note: "Enterprise REST APIs, Spring Security, JPA, Hibernate" },
      { name: "Node.js", level: "Advanced", note: "Event-driven runtime, Non-blocking I/O" },
      { name: "Express.js", level: "Advanced", note: "RESTful architecture, Middleware pipeline" },
      { name: "PostgreSQL", level: "Proficient", note: "ACID transactions, Relational design" },
      { name: "MySQL", level: "Proficient", note: "Normalized schemas, Query optimization" },
      { name: "MongoDB Atlas", level: "Proficient", note: "Document modeling, Aggregation" },
      { name: "Redis", level: "Proficient", note: "In-memory caching, 10-min TTL seat locking" }
    ],
    highlight: "Enterprise Spring Boot microservices and robust database architectures with distributed concurrency controls."
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Fluid Interfaces & Motion Design",
    icon: "Layout",
    accent: "#38BDF8",
    skills: [
      { name: "React.js", level: "Advanced", note: "Hooks, Custom State, Component Trees" },
      { name: "Tailwind CSS", level: "Advanced", note: "Utility-first, Responsive, Dark Mode" },
      { name: "HTML5", level: "Expert", note: "Semantic Structure, WCAG Accessibility" },
      { name: "CSS3", level: "Advanced", note: "Flexbox, Grid, Custom Keyframes, Transitions" },
      { name: "Framer Motion", level: "Proficient", note: "LayoutId Morphing, Spring Physics, Parallax" }
    ],
    highlight: "Crafting editorial dark-mode experiences with zero layout shifts and micro-interactions."
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    subtitle: "Containerization, Security & Versioning",
    icon: "Cpu",
    accent: "#F59E0B",
    skills: [
      { name: "Docker", level: "Proficient", note: "Multi-container compose, Isolated environments" },
      { name: "Git", level: "Advanced", note: "Branching strategies, Rebase, Clean commit lineage" },
      { name: "GitHub", level: "Advanced", note: "Open-source collaboration, Actions, Repositories" },
      { name: "REST APIs", level: "Advanced", note: "RESTful contracts, Rate-limiting, Status codes" },
      { name: "JWT Auth", level: "Advanced", note: "Stateless tokens, Role-based claims, bcrypt" }
    ],
    highlight: "Containerizing end-to-end full stack web applications with isolated network bridges."
  }
];

// Reference Screenshot Matching Figma Cursors:
export const floatingBadges = [
  // 1. React (Cyan) - right next to cheek/ear
  { name: "React", color: "#38BDF8", top: "31%", right: "32%", delay: 0, dx: 8, dy: -8, icon: "⚛" },

  // 2. React (Green) - on top-right letter 'O' of PORTFOLIO
  { name: "React", color: "#22C55E", top: "24%", right: "9%", delay: 0.2, dx: -6, dy: 6, icon: "⌘" },

  // 3. Docker (Blue) - beside right shoulder/neck
  { name: "Docker", color: "#3B82F6", top: "39%", right: "17%", delay: 0.3, dx: -10, dy: 8, icon: "🐳" },

  // 4. Spring Boot (Green) - outer right under 'O'
  { name: "Spring Boot", color: "#22C55E", top: "45%", right: "4%", delay: 0.4, dx: -8, dy: -10, icon: "⏻" },

  // 5. Python (Yellow) - mid-right flank
  { name: "Python", color: "#EAB308", top: "53%", right: "19%", delay: 0.5, dx: 10, dy: 8, icon: "🐍" },

  // 6. Node.js (Emerald) - over left collar/lapel
  { name: "Node.js", color: "#10B981", top: "58%", left: "41%", delay: 0.6, dx: -6, dy: 6, icon: "⬡" },

  // 7. C++ (Indigo) - over right shoulder/coat
  { name: "C++", color: "#6366F1", top: "67%", right: "24%", delay: 0.7, dx: 8, dy: -6, icon: "++" },

  // 8. Resv / Client (Sky Blue) - lower left chest
  { name: "Resv", color: "#38BDF8", top: "73%", left: "42%", delay: 0.8, dx: 6, dy: -8, icon: "⚡" },

  // 9. Redis (Red) - lower right coat
  { name: "Redis", color: "#EF4444", top: "81%", right: "22%", delay: 0.9, dx: -8, dy: 8, icon: "❖" }
];
