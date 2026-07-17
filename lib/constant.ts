

// Navigation items for side navigation
export const navItems = [
  { id: "hero", label: "Index" },
  { id: "signals", label: "Signals" },
  { id: "work", label: "Experiments" },
  // { id: "principles", label: "Principles" },
  { id: "experience", label: "Experience" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "colophon", label: "Contact" },
];

// Work experiments/projects
export interface Project {
  title: string;
  subtitle?: string;
  medium: string;
  tagline: string;
  role: string;
  description: string;
  span: string;
  technologies: string[];
  features: string[];
  challenge: {
    problem: string;
    solution: string;
  };
  links: {
    github?: string;
    npm?: string;
    live?: string;
  } | null;
}

export const experiments: Project[] = [
  {
    title: "Nafex",
    subtitle: "Unified API Testing & System Performance Monitoring Library",
    medium: "Developer Tooling",
    tagline: "A zero-dependency TypeScript npm package combining API testing, system monitoring, and concurrency profiling.",
    role: "Lead Creator & Maintainer",
    description: "Nafex is an open-source testing library designed to unify functional API test cases, real-time CPU/heap monitoring, and concurrent performance metrics into a single test runner. Built to eliminate the bloat of installing multiple separate test packages in CI pipelines, Nafex runs with zero runtime dependencies.",
    span: "col-span-2 row-span-2",
    technologies: ["TypeScript", "Node.js", "Vitest", "ESBuild", "Axios", "npm"],
    features: [
      "Boilerplate Reduction: Abstracts test configuration setups, reducing typical test file length from 200 lines to just 5 lines (98% reduction).",
      "Multi-Scenario Concurrency Tester: Simulates concurrent traffic loads via asynchronous execution, supporting load, stress, spike, and soak testing profiles.",
      "Statistical Performance Analysis: Automatically compiles raw latency times into p50, p95, and p99 latency distribution metrics.",
      "Dynamic Security Audit Module: Audits endpoints for common vulnerabilities, including HTTPS enforcement, CORS wildcard leaks, authorization bypass, XSS reflections, and SQL injections.",
      "Low-Overhead Process Resource Monitor: Tracks memory allocations and CPU usage trends in parallel with running test suites to catch leaks early."
    ],
    challenge: {
      problem: "Measuring latency with sub-millisecond precision without local system clock resolution interference (since standard JavaScript clock tools like Date.now() are capped at 1ms–15ms intervals depending on the OS).",
      solution: "Refactored the latency hooks to utilize high-resolution timestamps (performance.now()), separating asynchronous event loop queuing latency from network response latency to return true networking metrics."
    },
    links: {
      github: "https://github.com/junaidahmedshaikh/nafex",
      npm: "https://www.npmjs.com/package/nafex",
    }
  },
  {
    title: "OneProfile",
    subtitle: "AI-Powered Multi-Tenant Digital Identity SaaS Platform",
    medium: "SaaS Platform",
    tagline: "An end-to-end portfolio and digital identity creation engine powered by Next.js, OpenAI, and Stripe.",
    role: "Full-Stack Developer",
    description: "OneProfile is a multi-tenant SaaS platform that allows professionals and small businesses to generate SEO-optimized portfolio landing pages in under 5 minutes. The application leverages AI for content generation and implements strict payment and session security.",
    span: "col-span-2 row-span-1",
    technologies: ["Next.js", "Redux Toolkit", "Express.js", "MongoDB", "OpenAI API", "Stripe Webhooks", "Zod", "npm workspaces"],
    features: [
      "Multi-Tenant Architecture: Logically isolates tenant portfolios and settings to ensure fast page serving and search engine discoverability.",
      "Secure Token Lifecycle: Employs JWT access and refresh token exchange, secure HttpOnly cookie rotation with automatic reuse detection, and SHA-256 OTP verification.",
      "Stripe Webhook Pipeline: Listens to Stripe events to automate subscription states, tier upgrades, and feature-gating limits.",
      "AI Content Generation: Connects to the OpenAI API using structured prompts validated via Zod schemas to generate bios and project copy.",
      "Monorepo Design: Organized using npm workspaces to share TypeScript interfaces and Zod validation models between client and server."
    ],
    challenge: {
      problem: "Preventing webhook spoofing and payment bypass attempts where attackers send mock success events to the server's subscription routes.",
      solution: "Implemented cryptographic signature verification on the raw incoming request payload using Stripe’s webhook signing secrets, alongside database state checks to ensure event IDs are processed uniquely."
    },
    links: {
      github: "https://github.com/junaidahmedshaikh/oneprofile",
      live: "https://oneprofile.in",
    }
  },
  {
    title: "3D Solar System",
    subtitle: "Interactive 3D Celestial Simulation & WebGL Rendering Engine",
    medium: "Interactive 3D Web Experience",
    tagline: "An interactive, high-performance 3D celestial simulation built using Next.js, Three.js, and WebGL.",
    role: "Creative Developer",
    description: "A fully interactive 3D Solar System simulation designed to render realistic planetary orbits, celestial scales, and high-fidelity planetary textures directly in the browser. Built using React Three Fiber (Three.js wrapper) and optimized for low-end hardware through progressive asset loading and custom vertex shaders.",
    span: "col-span-1 row-span-1",
    technologies: ["Next.js", "Three.js", "WebGL", "GSAP", "React Three Fiber", "Tailwind CSS"],
    features: [
      "Dynamic Orbit Simulation: Real-time orbital calculations allowing users to speed up, slow down, or reverse planetary revolutions dynamically.",
      "High-Fidelity WebGL Textures: Maps high-resolution 2K/4K planetary surface textures and bump/normal maps for realistic lighting reflection and bump shading.",
      "Orbital Path Rendering: Renders lightweight, mathematically calculated vector ring orbits to guide spatial awareness without GPU overhead.",
      "Interactive Focus & Zoom: Smooth camera tracking and cinematic transition effects that center and inspect individual planets upon selection.",
      "Responsive Viewport Scaling: Dynamic aspect-ratio adjustments that preserve visual proportions and rendering performance across mobile and desktop."
    ],
    challenge: {
      problem: "Rendering multiple high-resolution textures and orbital paths concurrently causes frame drops (below 30 FPS) on mobile devices due to massive GPU memory allocations.",
      solution: "Implemented progressive texture resolution loading (rendering 1K textures for mobile and lazy-loading 4K textures for desktop) along with instanced mesh rendering for orbital lines, restoring a stable 60 FPS across all viewports."
    },
    links: {
      github: "https://github.com/junaidahmedshaikh/Solar-System",
      live: "https://solar-system-seven-eta.vercel.app/"
    }
  },
  {
    title: "Bondly",
    subtitle: "Real-Time Social Matching & Peer Messaging Web Application",
    medium: "Real-Time Social Platform",
    tagline: "A modern, responsive dating and social matching application built with React, Redux Toolkit, and Socket.io.",
    role: "Frontend Developer",
    description: "A single-page web application offering a swipe-based profile discovery system, interest-based compatibility matching, and instant messaging interfaces. Built on React 19 and Centralized Redux state management, featuring smooth transitions and low-latency websocket connections.",
    span: "col-span-1 row-span-1",
    technologies: ["React", "Redux Toolkit", "Socket.io Client", "Tailwind CSS", "React Router DOM", "Vite"],
    features: [
      "Swipe-to-Match Interface: An intuitive gesture-based swiping card component built for match discovery and smooth animation feedback.",
      "Centralized State Management: Uses Redux Toolkit to sync user profiles, connection requests, and real-time chat histories across different page contexts.",
      "Low-Latency Live Chat: Dual-channel instant messaging built with Socket.io client, featuring message typing indicators, dynamic read states, and history fetching.",
      "Multi-Step Profile Customization: Multi-step registration wizard with client-side form validation, custom interest tagging, and secure profile picture uploading.",
      "Compatibility Metric Engine: Automatically calculates compatibility scores based on overlapping interest indexes and proximity filters."
    ],
    challenge: {
      problem: "Keeping active chat history synchronized across multiple router pages without causing continuous database polling or socket disconnection-reconnection spikes.",
      solution: "Integrated a persistent Redux middleware layer that holds the Socket.io connection in memory and buffers incoming websocket packets, dispatching clean state updates to client modules as needed."
    },
    links: {
      github: "https://github.com/junaidahmedshaikh/bondly",
      live: "https://bondly1.netlify.app"
    }
  }
];

// Tech stack categories and skills
export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "C++",
      "Java (DSA)",
      "Python",
      "PHP"
    ]
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Microservices",
      "MongoDB",
      "MySQL",
      "Redis (Caching & Session Store)",
      "BullMQ",
      "Event-Driven Architecture",
      "WebSockets (Socket.io)",
      "RESTful API Design"
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Styled Components",
      "Shadcn UI",
    ]
  },
  {
    title: "Testing, DevOps & Cloud",
    skills: [
    "Jest",
      "Playwright",
      "Cucumber",
      "API Testing",
      "System Resource & Performance Tracking",
      "Docker",
      "AWS (EC2, S3)",
      "GitHub Actions (CI/CD Pipelines)"
    ]
  },
  {
    title: "AI & Integrations",
    skills: [
      "OpenAI API",
      "AI Agents",
      "Stripe Webhook Integrations"
    ]
  },
  {
    title: "Computer Science Fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Database Management Systems (DBMS)",
      "Computer Networks (CN)",
      "System Design Basics"
    ]
  }
];

// Key responsibilities at SlashRTC
export const responsibilities = [
  "Collaborated on backend feature design and real-time database schema tuning for call center signaling applications.",
  "Automated integration test suites for real-time WebRTC communications and dialer platform queues.",
  "Participated in microservices version upgrades and production database scaling.",
];

// Professional achievements at SlashRTC
export const achievements = [
  {
    metric: "56% Reduction in Configuration Errors",
    description: "Built a MERN-based configuration management interface with runtime feature flags and granular RBAC, preventing unauthorized modifications across 110+ enterprise configurations."
  },
  {
    metric: "Onboarding Down from 3 Days to 1 Day",
    description: "Co-developed an event-driven CRM database routing engine powered by Redis and BullMQ to schedule lead scoring, reducing client onboarding wait times."
  },
  {
    metric: "50% Defect Reduction",
    description: "Automated dialer regression test runs using Playwright and Cucumber, preventing regression issues from reaching production dialers."
  },
  {
    metric: "67.6% System Uptime",
    description: "Diagnosed and resolved critical production bottlenecks, including Redis connection leaks, MySQL pool exhaustion, and WebRTC Socket.io signaling race conditions during a legacy Node.js runtime upgrade."
  }
];


// Core principles
export const principles = [
  {
    number: "01",
    titleParts: [
      { text: "PERFORMANCE", highlight: true },
      { text: " FIRST", highlight: false },
    ],
    description: "Scalability and efficiency at the core. Every system designed for growth and optimization.",
    align: "left",
  },
  {
    number: "02",
    titleParts: [
      { text: "REAL-TIME", highlight: true },
      { text: " SYSTEMS", highlight: false },
    ],
    description: "Building responsive applications with WebSockets and low-latency architectures.",
    align: "right",
  },
  {
    number: "03",
    titleParts: [
      { text: "CODE ", highlight: false },
      { text: "QUALITY", highlight: true },
    ],
    description: "Testing, automation, and clean architecture. Reducing bugs through precision engineering.",
    align: "left",
  },
  {
    number: "04",
    titleParts: [
      { text: "DEVELOPER ", highlight: false },
      { text: "EXPERIENCE", highlight: true },
    ],
    description: "Building tools and libraries that make developers' lives easier. Intuitive APIs matter.",
    align: "right",
  },
];

// Glyphs for scramble text animation
export const GLYPHS = "!@#$%^&*()_+-=<>?/\\[]{}Xx";