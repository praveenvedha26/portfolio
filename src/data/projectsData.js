export const projectsData = [
  {
    id: "bookinstant",
    number: "01",
    title: "BookInstant",
    tagline: "Containerized Movie Ticket Booking Engine with Distributed Seat Locking",
    category: "Distributed Systems & Full-Stack",
    featuredBadge: "High Concurrency",
    githubUrl: "https://github.com/praveenvedha26/BookInstant",
    techStack: ["Java", "Spring Boot", "Docker", "PostgreSQL", "Redis", "React"],
    summary:
      "Enterprise full-stack online movie ticket booking engine built with Java, Spring Boot, and React, containerized via Docker. Features a PostgreSQL relational schema for shows, theaters, and bookings, paired with a high-concurrency Redis 10-minute temporary seat-locking pipeline to prevent double-booking race conditions during checkout.",
    architecture: {
      type: "Distributed Enterprise Backend & In-Memory Locking",
      diagram: [
        { layer: "Frontend Client", tech: "React SPA", desc: "Interactive seat grid matrix with real-time optimistic seat reservation feedback" },
        { layer: "Backend Service Core", tech: "Java / Spring Boot", desc: "Enterprise RESTful controllers managing booking workflows, seat reservations, and transactional safety" },
        { layer: "Distributed In-Memory Lock", tech: "Redis (Key-TTL)", desc: "10-minute atomic temporary lock per seat with auto-expiration to resolve checkout contention" },
        { layer: "Relational Storage", tech: "PostgreSQL Database", desc: "ACID-compliant transactions recording confirmed tickets, auditoriums, and user history" },
        { layer: "Container Orchestration", tech: "Docker Compose", desc: "Isolated network bridges linking client, backend, Redis broker, and PostgreSQL daemon" }
      ],
      highlights: [
        "Eliminated race conditions via atomic Redis SETNX operations with 10-minute TTL expiration.",
        "ACID database transactions in Spring Boot rolling back seat statuses if payment pipeline times out.",
        "Zero-dependency local setup facilitated by multi-stage Docker Compose orchestration."
      ]
    },
    keyFeatures: [
      "Dynamic interactive seat map rendering live availability state",
      "Distributed concurrency control preventing multiple users booking identical seats",
      "Automated reservation timeout releasing locked seats back to public pool",
      "PostgreSQL relational schema modeling theaters, screens, showtimes, and booking receipts",
      "Fully containerized local multi-container development environment"
    ],
    metrics: [
      { label: "Backend Core", value: "Spring Boot" },
      { label: "Race Prevention", value: "100%" },
      { label: "Deployment", value: "Dockerized" }
    ]
  },
  {
    id: "skillgap-analyzer",
    number: "02",
    title: "SkillGap Analyzer",
    tagline: "Full-Stack Career Readiness & Skill Assessment Platform",
    category: "Enterprise Full-Stack & Analytics",
    featuredBadge: "Spring Boot",
    githubUrl: "https://github.com/praveenvedha26/skill-gap-analyzer",
    techStack: ["Java", "Spring Boot", "MySQL", "React.js", "REST API", "JWT"],
    summary:
      "Enterprise-structured skill evaluation web application built with Java Spring Boot and React.js. Uses secure JWT authentication and RESTful APIs backed by MySQL to benchmark candidate technical profiles against target job descriptions and highlight actionable skill gaps.",
    architecture: {
      type: "Layered Enterprise Architecture (Spring Boot)",
      diagram: [
        { layer: "Presentation UI", tech: "React.js / Tailwind", desc: "Visual radar charts and skill breakdown comparison dashboards" },
        { layer: "Security Filter Chain", tech: "Spring Security + JWT", desc: "Stateless bearer token validation on every protected API endpoint" },
        { layer: "Business Logic Tier", tech: "Spring Service Layer", desc: "Algorithmic comparison engine matching candidate keywords against industry benchmarks" },
        { layer: "Persistence Layer", tech: "Spring Data JPA / Hibernate", desc: "Object-relational mapping to MySQL schemas with optimized query indices" }
      ],
      highlights: [
        "Role-based access control protecting student evaluations vs recruiter benchmark criteria.",
        "Normalized MySQL relational schema tracking competencies, industry roles, and gaps.",
        "Clean decoupling between React client state and Spring Boot service controllers."
      ]
    },
    keyFeatures: [
      "Secure stateless authentication powered by JSON Web Tokens (JWT)",
      "Automated gap analysis highlighting missing technical and domain competencies",
      "Targeted learning path recommendations based on target job roles",
      "Interactive candidate profile builder with skills categorization",
      "Exportable readiness scorecards and career growth trajectory tracker"
    ],
    metrics: [
      { label: "Backend Core", value: "Spring Boot" },
      { label: "Auth Model", value: "Stateless JWT" },
      { label: "Storage", value: "MySQL RDBMS" }
    ]
  },
  {
    id: "medisense",
    number: "03",
    title: "MediSense",
    tagline: "Intelligent Healthcare Insights & Symptom Companion",
    category: "Healthcare UI & API Integration",
    featuredBadge: "React & Health APIs",
    githubUrl: "https://github.com/praveenvedha26/mediSense",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    summary:
      "Responsive healthcare web application engineered with modular React.js components and Tailwind CSS. Integrates real-time medical insight REST APIs with a clean, accessible UI to help users explore health information and structured clinical guidance quickly.",
    architecture: {
      type: "Client-Side Health Intelligence Client",
      diagram: [
        { layer: "Client Interface", tech: "React.js Component Tree", desc: "Accessible search, category filters, and clinical guidance drawers" },
        { layer: "State Management", tech: "React Custom Hooks", desc: "Local caching of frequent search queries and symptom lookups" },
        { layer: "Integration Layer", tech: "REST API Gateway", desc: "Asynchronous medical endpoints fetching evidence-based health guidance" }
      ],
      highlights: [
        "Debounced input handling reducing unnecessary external API roundtrips.",
        "High-contrast accessible theme built according to modern medical web guidelines.",
        "Modular UI architecture enabling rapid extension with new clinical endpoints."
      ]
    },
    keyFeatures: [
      "Real-time symptom lookup with categorized triage recommendations",
      "Fast response rendering through client-side query caching and debounce controls",
      "High-contrast accessible UI design conforming to WCAG standards",
      "Comprehensive emergency contact directory and preventive guidance cards",
      "Mobile-first responsive interface tailored for quick reference under urgency"
    ],
    metrics: [
      { label: "UI Framework", value: "React.js" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Integration", value: "Live REST" }
    ]
  },
  {
    id: "notevault",
    number: "04",
    title: "NoteVault",
    tagline: "AI-Powered Full-Stack MERN Notes Workspace",
    category: "AI Full-Stack / MERN",
    featuredBadge: "Groq AI Powered",
    githubUrl: "https://github.com/praveenvedha26/notevault",
    techStack: ["MongoDB Atlas", "Express.js", "React", "Node.js", "Groq API", "JWT"],
    summary:
      "Modern full-stack MERN notes application featuring Groq API integration for instant automated AI text summarization, secure JWT authentication, persistent dark mode, tagging, and a soft-delete trash recovery system.",
    architecture: {
      type: "MERN Stack + High-Speed LLM Inference",
      diagram: [
        { layer: "Client Workspace", tech: "React SPA + Rich Editor", desc: "Markdown-capable note editor with instant AI summarize action trigger" },
        { layer: "API Server", tech: "Express.js / Node.js", desc: "RESTful endpoints managing user collections and AI proxy requests" },
        { layer: "AI Inference Engine", tech: "Groq Cloud API (Llama-3)", desc: "Ultra-fast sub-second token generation for note summaries and bullet extraction" },
        { layer: "Cloud Database", tech: "MongoDB Atlas", desc: "Document collection with indexing on user ownership and soft-delete states" }
      ],
      highlights: [
        "Sub-second AI summarization latency powered by Groq's high-speed inference engine.",
        "Two-stage deletion lifecycle protecting users against accidental data loss with soft trash bin.",
        "Granular tag indexing enabling multi-tag filtering across large note collections."
      ]
    },
    keyFeatures: [
      "Sub-second AI note summarization and action-item generation via Groq API",
      "Stateless JWT user authentication with encrypted password hashing (bcrypt)",
      "Soft-delete safety net with 30-day trash recovery and permanent purge controls",
      "Tag-based taxonomic filtering and fast full-text note search",
      "Persistent dark mode styling with sleek minimalist typography"
    ],
    metrics: [
      { label: "AI Latency", value: "< 400ms" },
      { label: "Database", value: "Mongo Atlas" },
      { label: "AI Model", value: "Llama-3 (Groq)" }
    ]
  },
  {
    id: "100-days-dsa",
    number: "05",
    title: "100 Days of DSA",
    tagline: "Structured 100-Day Data Structures & Algorithms Mastery Repository",
    category: "Algorithms & Core CS",
    featuredBadge: "100 Days Streak",
    githubUrl: "https://github.com/praveenvedha26/100-Days-of-DSA-Challenges",
    techStack: ["C++", "Python", "Algorithms", "Data Structures", "Complexity Analysis"],
    summary:
      "Comprehensive daily coding archive documenting 100 consecutive days of solving core Data Structures and Algorithms problems—covering Arrays, Trees, Graphs, Dynamic Programming, Sliding Window, and Recursion with clean, optimal implementations.",
    architecture: {
      type: "Systematic Algorithmic Taxonomy",
      diagram: [
        { layer: "Day 01 - 25", tech: "Linear Structures", desc: "Arrays, Strings, Two Pointers, Sliding Window, Linked Lists" },
        { layer: "Day 26 - 55", tech: "Non-Linear Structures", desc: "Binary Trees, BSTs, Heaps, Priority Queues, Graph BFS/DFS" },
        { layer: "Day 56 - 80", tech: "Advanced Algorithms", desc: "Dynamic Programming (1D/2D), Dijkstra, Disjoint Set Union (DSU)" },
        { layer: "Day 81 - 100", tech: "Competitive & System Prep", desc: "Tries, Bit Manipulation, Segment Trees, Hard Graph Traversal" }
      ],
      highlights: [
        "100 consecutive days of production-grade C++ and Python algorithmic implementations.",
        "Explicit time and space complexity annotations included for every single problem.",
        "Optimal asymptotic solutions prioritized over brute-force baselines."
      ]
    },
    keyFeatures: [
      "100 curated problem implementations categorized by fundamental pattern",
      "Rigorous Time Complexity: O(N), O(N log N), O(V + E) breakdown in code headers",
      "Dual implementations in modern C++ (STL) and idiomatic Python 3",
      "Edge-case verification covering empty collections, integer overflow, and cyclic states",
      "Clear commit lineage demonstrating steady daily discipline and algorithmic growth"
    ],
    metrics: [
      { label: "Problems Solved", value: "100+" },
      { label: "Discipline", value: "100 Days" },
      { label: "Languages", value: "C++ / Python" }
    ]
  },
  {
    id: "algorithmic-vault",
    number: "06",
    title: "Algorithmic Problem Vault",
    tagline: "Curated LeetCode Solutions & Optimal Pattern Handbook",
    category: "Problem Solving & Optimization",
    featuredBadge: "Optimal Patterns",
    githubUrl: "https://github.com/praveenvedha26/-leetcode-solutions",
    techStack: ["Java", "C++", "Python", "LeetCode", "Problem Solving", "Time & Space Optimization"],
    summary:
      "Organized collection of optimal LeetCode problem solutions implemented primarily in Java, alongside C++ and Python, categorized by algorithmic patterns (Two Pointers, Binary Search, Backtracking, DP, Greedy), complete with clean code and time/space complexity breakdowns.",
    architecture: {
      type: "Pattern-Oriented Problem Solving Matrix",
      diagram: [
        { layer: "Pattern Categorization", tech: "Algorithmic Paradigms", desc: "Sliding Window, Fast & Slow Pointers, Monotonic Stacks, Top K Elements" },
        { layer: "Optimization Pipeline", tech: "Time & Space Tuning", desc: "Refining naive recursive algorithms to memoized and bottom-up DP" },
        { layer: "Language Idioms", tech: "Java, C++ STL & Python", desc: "Utilizing Java Collections framework, C++ STL, custom comparators, priority queues, and bitmasking" }
      ],
      highlights: [
        "Pattern handbook structure allowing instant lookup of recurring interview motifs.",
        "Deep focus on space optimization: converting O(N) auxiliary space DP to O(1) state variables.",
        "Real-world application notes mapping graph problems to network routing and caching."
      ]
    },
    keyFeatures: [
      "Categorized by standard engineering interview patterns (Two Pointers, Monotonic Stack, Backtracking)",
      "Zero-overhead Java and C++ implementations with optimal memory utilization",
      "Detailed markdown explanations explaining WHY an algorithm is optimal",
      "Side-by-side comparison of naive vs optimal solutions for challenging DP problems",
      "Comprehensive handbook serving as a ready-reference for technical screening"
    ],
    metrics: [
      { label: "Core Language", value: "Java / C++" },
      { label: "Efficiency", value: "Top Percentile" },
      { label: "Profile", value: "LeetCode Active" }
    ]
  }
];
