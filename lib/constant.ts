

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
  title: "Ellebeo",
  subtitle: "Enterprise Multi-Sided Beauty Marketplace & CRM Ecosystem",
  medium: "Enterprise SaaS / Marketplace",
  tagline:
    "A multi-platform beauty and medical aesthetics ecosystem connecting clients, technicians, doctors, and administrators through intelligent booking, clinical compliance, and financial workflows.",
  role: "Full-Stack Software Developer",
  description:
    "Ellebeo is an enterprise-grade marketplace and unified CRM platform developed at Mathionix Technologies. Built using an npm workspace monorepo, it brings together five frontend applications and a centralized NestJS backend. The ecosystem supports consumer bookings, technician operations, doctor consultations, medical aesthetics compliance, bridal and commercial production management, and administrative workflows across web and mobile.",
  span: "col-span-2 row-span-2",
  technologies: [
    "NestJS",
    "Next.js 16",
    "React 19",
    "React Native",
    "Expo",
    "TypeScript",
    "Prisma ORM",
    "PostgreSQL",
    "Redis",
    "BullMQ",
    "Socket.io",
    "Stripe Connect",
    "Docker",
    "Traefik",
    "PgBouncer",
    "AWS S3",
    "Firebase Cloud Messaging",
    "Twilio",
    "npm Workspaces"
  ],
  features: [
    "Multi-Application Monorepo: Unified architecture powering the consumer portal, technician CRM, doctor CRM, admin portal, and React Native mobile application.",
    "Multi-Role Authentication & RBAC: JWT-based authentication, refresh token rotation, secure HTTP-only cookies, role-based permissions, and server-side session revocation.",
    "Advanced Booking Engine: Real-time availability, appointment scheduling, calendar conflict validation, booking lifecycle management, and payment integration.",
    "Medical Aesthetics Compliance: Doctor consultation workflows, digital Injectable Cards, prescription authorization, and practitioner eligibility checks.",
    "Bridal & Commercial Production: Multi-artist team management, visual scheduling, dynamic quotation generation, timesheets, and milestone-based payment workflows.",
    "Financial Infrastructure: Stripe Connect integration, payment processing, specialist onboarding verification, and payout lifecycle management.",
    "Real-Time Communication: Socket.io messaging, Redis-backed WebSocket synchronization, and live booking status updates.",
    "Background Processing: BullMQ-powered asynchronous notifications, OTP delivery, scheduled jobs, retries, and automated communication workflows.",
    "Cross-Platform Mobile Experience: Unified Expo application supporting client, technician, doctor, and Growth Studio roles.",
    "Production Infrastructure: Docker-based deployments, Traefik reverse proxy, PgBouncer connection pooling, and Blue-Green deployment workflows.",
    "Session & Form Resilience: Asynchronous useEnquiryDraft persistence with debouncing, automatic recovery, 14-day expiration, and clean submission handling.",
    "Platform Security: DTO validation, parameterized database queries, webhook signature verification, rate limiting, and secure data erasure."
  ],
  challenge: {
    problem:
      "Engineering a complex multi-sided marketplace across five frontend applications and a centralized backend introduced challenges around session consistency, database connection exhaustion during deployments, payment race conditions, medical authorization workflows, and cross-platform feature parity.",
    solution:
      "Contributed to a modular monorepo architecture with shared TypeScript contracts, centralized authentication and authorization, Redis-backed infrastructure, PgBouncer transaction pooling, Stripe account verification, reusable validation schemas, and automated Blue-Green deployment workflows."
  },
  links: null
},
{
  title: "Golden Guide",
  subtitle: "Offline-First Senior Care, Medication Management & Emergency Response Platform",
  medium: "Healthcare Technology / Full-Stack SaaS",
  tagline:
    "A cross-platform senior care ecosystem combining intelligent medication reminders, caregiver monitoring, offline synchronization, and one-tap emergency response.",
  role: "Lead Full-Stack Software Engineer",
  description:
    "Golden Guide is a cross-platform healthcare and senior-care platform designed to connect seniors with their caregivers through reliable medication management, wellness tracking, and emergency assistance. Built using React Native CLI, NestJS, PostgreSQL, and React, the platform prioritizes offline resilience, native notification reliability, accessibility, and secure multi-persona experiences. It enables caregivers to monitor linked seniors, manage medication schedules, receive wellness alerts, and respond to emergencies through a centralized care ecosystem.",
  span: "col-span-2 row-span-1",
  technologies: [
    "React Native CLI",
    "TypeScript",
    "React 19",
    "Vite",
    "NestJS",
    "Node.js 22",
    "PostgreSQL",
    "TypeORM",
    "TanStack Query",
    "AsyncStorage",
    "Notifee",
    "Firebase Authentication",
    "Firebase Cloud Messaging",
    "Razorpay",
    "react-native-iap",
    "i18next",
    "NetInfo",
    "JWT",
    "Tailwind CSS"
  ],
  features: [
    "Dual-Persona Session Management: Enables caregivers to securely switch into a linked senior's application view without logging out or creating separate accounts.",
    "Offline-First Synchronization: Implements a persistent AsyncStorage outbox that queues user actions during network outages and synchronizes them idempotently when connectivity returns.",
    "Native Medication Reminders: Uses Notifee and native timestamp-based scheduling to deliver medication reminders independently of JavaScript timer execution.",
    "One-Tap & Shake-to-SOS: Integrates GPS location, accelerometer-based shake detection, a cancellation countdown, Firebase push alerts, and native phone dialer fallback.",
    "Caregiver Monitoring Dashboard: Provides visibility into medication adherence, missed reminders, wellness check-ins, and emergency notifications.",
    "Wellness & Mood Tracking: Supports daily morning, afternoon, and evening check-ins with automated priority flags for caregiver attention.",
    "Family Subscription Management: Integrates monthly, annual, and family subscription plans with Razorpay and Apple In-App Purchases.",
    "Secure Multi-Provider Authentication: Supports Firebase Phone OTP, Google, and Apple authentication alongside scoped backend JWT sessions.",
    "Multi-Language & RTL Support: Implements dynamic localization for English, Hindi, Urdu, and Arabic with automatic right-to-left layout adaptation.",
    "Cross-Platform Architecture: Connects a React Native mobile application and React web dashboard to a centralized NestJS API.",
    "Payment Webhook Reliability: Implements HMAC SHA-256 signature verification, idempotent event processing, and subscription entitlement reconciliation.",
    "Accessibility-Focused UI: Uses senior-friendly design principles, large touch targets, simplified navigation, and consistent design tokens."
  ],
  challenge: {
    problem:
      "Building a dependable senior-care application required solving multiple interconnected engineering challenges: medication reminders had to survive mobile operating system background restrictions, user actions needed to persist during network outages, caregivers required secure persona switching, and simultaneous API requests could trigger refresh-token rotation conflicts.",
    solution:
      "Developed a native notification scheduling engine using Notifee, a persistent offline outbox with idempotent synchronization, a dual-persona session manager, and an in-flight promise deduplication mechanism for JWT refresh requests. Combined these with verified payment webhooks, scoped authorization, and direction-aware localization to improve platform reliability."
  },
  links: null
},
  {
    title: "Nafex",
    subtitle: "Unified API Testing & System Performance Monitoring Library",
    medium: "Developer Tooling",
    tagline: "A zero-dependency TypeScript npm package combining API testing, system monitoring, and concurrency profiling.",
    role: "Lead Creator & Maintainer",
    description: "Nafex is an open-source testing library designed to unify functional API test cases, real-time CPU/heap monitoring, and concurrent performance metrics into a single test runner. Built to eliminate the bloat of installing multiple separate test packages in CI pipelines, Nafex runs with zero runtime dependencies.",
    span: "col-span-1 row-span-1",
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
    span: "col-span-1 row-span-1",
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



  // {
  //   title: "Smash Burger",
  //   subtitle: "Gourmet Burger E-Commerce Platform & Interactive 450°F Builder",
  //   medium: "Full-Stack E-Commerce",
  //   tagline: "A production-grade food ordering platform with a real-time burger customizer, cart engine, live order tracking, and an admin dispatch dashboard.",
  //   role: "Full-Stack Developer",
  //   description: "Smash Burger is an end-to-end gourmet burger e-commerce application spanning storefront, customization lab, checkout, and kitchen ops. It includes an interactive SVG blueprint hero, a layer-by-layer burger builder with live calorie, temperature, and price calculation, server-validated coupons, polled order tracking, and an administrative command center for inventory and dispatch.",
  //   span: "col-span-1 row-span-1",
  //   technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB", "JWT", "Zod", "npm workspaces"],
  //   features: [
  //     "450°F Burger Lab: Real-time layer-by-layer customizer with live calorie, temperature, and price calculation.",
  //     "Gourmet Storefront: Category filtering, spice-level indicators, and modifier selection across burgers, chicken, sides, and shakes.",
  //     "Cart & Promo Engine: Slide-over cart with free-shipping progress and server-validated coupons (FIRSTBITE20, SMASHD100).",
  //     "Live Order Tracking: Stage stepper with auto-polling from kitchen sear through delivery.",
  //     "Admin Command Center: Financial telemetry, revenue charts, live kitchen dispatch, and menu inventory controls.",
  //     "Zero-Trust Checkout: Server-enforced pricing, JWT auth with HTTP-only cookies, and shared Zod validation across web and API."
  //   ],
  //   challenge: {
  //     problem: "Client-side cart totals and coupon discounts can be tampered with before checkout, creating a trust gap between the storefront UI and what the kitchen should charge.",
  //     solution: "Moved pricing, modifiers, and coupon evaluation to the Express API with shared Zod schemas, so the server is the source of truth for line items, discounts, and order totals regardless of what the client sends."
  //   },
  //   links: {
  //     github: "https://github.com/junaidahmedshaikh/smash-burger",
  //     live: "https://smash-burger-two.vercel.app/",
  //   }
  // },
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