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

// Dynamic Figma-style floating multiplayer cursor badges scattered across outer edges:
// Java and Spring Boot are given prime, prominent, unobstructed whitespace placement.
export const floatingBadges = [
  // Prominent Top-Left Margin (Java)
  { name: "Java", color: "#F97316", top: "16%", left: "12%", delay: 0, dx: 12, dy: -12 },
  
  // Prominent Top-Right Margin (Spring Boot)
  { name: "Spring Boot", color: "#22C55E", top: "16%", right: "12%", delay: 0.2, dx: -12, dy: 14 },
  
  // Dynamic Flanks surrounding central portrait & text
  { name: "React", color: "#38BDF8", top: "28%", left: "4%", delay: 0.4, dx: 14, dy: -10 },
  { name: "Docker", color: "#3B82F6", top: "34%", right: "6%", delay: 0.6, dx: -14, dy: -12 },
  { name: "Python", color: "#EAB308", top: "48%", left: "5%", delay: 0.8, dx: 12, dy: 10 },
  { name: "Node.js", color: "#10B981", top: "58%", right: "8%", delay: 1.0, dx: -10, dy: 14 },
  { name: "C++", color: "#6366F1", top: "76%", right: "14%", delay: 1.2, dx: -12, dy: -10 },
  { name: "Redis", color: "#EF4444", bottom: "12%", left: "8%", delay: 1.4, dx: 14, dy: 8 }
];
