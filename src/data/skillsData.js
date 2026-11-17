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

export const floatingBadges = [
  { name: "React", color: "#38BDF8", top: "18%", left: "14%", delay: 0, dx: 12, dy: -14 },
  { name: "Spring Boot", color: "#22C55E", top: "28%", right: "12%", delay: 0.2, dx: -10, dy: 16 },
  { name: "Python", color: "#EAB308", top: "42%", left: "8%", delay: 0.4, dx: 14, dy: 10 },
  { name: "Docker", color: "#3B82F6", top: "54%", right: "10%", delay: 0.6, dx: -14, dy: -12 },
  { name: "Node.js", color: "#10B981", top: "68%", left: "16%", delay: 0.8, dx: 10, dy: -16 },
  { name: "C++", color: "#6366F1", top: "72%", right: "18%", delay: 1.0, dx: -12, dy: 12 },
  { name: "Redis", color: "#EF4444", top: "84%", left: "24%", delay: 1.2, dx: 14, dy: 8 },
  { name: "PostgreSQL", color: "#F59E0B", top: "86%", right: "26%", delay: 1.4, dx: -10, dy: -14 }
];
