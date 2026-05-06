

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
export const experiments = [
  {
    title: "Nafex",
    medium: "API Testing Library",
    description:
      "Nafex is a powerful Node.js library that combines API testing, step execution tracking, and system resource monitoring into one elegant toolkit. This guide covers everything from installation to advanced usage patterns.",
    span: "col-span-2 row-span-2",
    links: {
      github: "https://github.com/junaidahmedshaikh/nafex",
      npm: "https://www.npmjs.com/package/nafex",
    },
  },
  {
    title: "Bondly",
    medium: "Real-Time Social Platform",
    description:
      "A modern, responsive dating and social matching application",
    span: "col-span-1 row-span-1",
    links: {
      live: "https://bondly1.netlify.app",
      github: "https://github.com/junaidahmedshaikh/bondly",
    },
  },
  {
  title: "Trendwise",
  medium: "AI-Powered Analytics Platform",
  description:
    "AI-powered platform for trend analysis and content insights with dashboards, authentication, and scalable Next.js backend.",
  span: "col-span-1 row-span-2",
  links: {
    live: "https://trendwise-omega.vercel.app",
    github: "https://github.com/junaidahmedshaikh/trendwise"
  },
},
{
  title: "3D Solar System ",
  medium: "Interactive 3D Web Experience",
  description:
    "A fully interactive 3D solar system built with Next.js and Three.js, featuring realistic planetary orbits, dynamic speed controls, and smooth WebGL-based animations optimized for performance and responsiveness.",
  span: "col-span-1 row-span-1",
  links: {
    github: "https://github.com/junaidahmedshaikh/Solar-System",
    live: "https://solar-system-seven-eta.vercel.app/"
  },
}
  
  // {
  //   title: "Access Approval System",
  //   medium: "Authorization",
  //   description: "Built access approval system improving efficiency by 50% at SlashRTC.",
  //   span: "col-span-2 row-span-1",
  //   links: null,
  // },
];

// Tech stack categories and skills
export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "C++"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "JWT",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Testing",
    skills: ["Playwright", "Cucumber", "API Testing"],
  },
  {
    title: "Tools",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
];

// Professional achievements
export const achievements = [
  "Built a real-time service configuration platform → reduced configuration errors by 57%, deployment time by 60%, and downtime by 36%",
  "Developed a schema-less no-code CRM engine enabling dynamic workflows and flexible data structures",
  "Led end-to-end test automation using Playwright and Cucumber → reduced regression defects by 50% and QA cycles by 65%",
  "Designed a role-based access approval system with audit trails → improved provisioning efficiency by 50%",
  "Improved system stability by resolving memory leaks, race conditions, and production issues",
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