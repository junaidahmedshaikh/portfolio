"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiments = [
  {
    title: "Nafex",
    medium: "API Testing Library",
    description:
      "Unified API testing & monitoring with 98% code reduction, security testing, and performance analytics.",
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
      "Real-time messaging, JWT auth, Redis caching, and CI/CD pipeline.",
    span: "col-span-1 row-span-1",
    links: {
      live: "https://bondly1.netlify.app",
      github: "https://github.com/junaidahmedshaikh/bondly",
    },
  },
  {
    title: "SlashRTC",
    medium: "Real-Time Config Platform",
    description:
      "Reduced errors 57% and deployment time 60%. Led test automation reducing defects 50%.",
    span: "col-span-1 row-span-2",
    links: null,
  },
  {
    title: "No-Code CRM",
    medium: "CRM System",
    description:
      "Custom CRM system developed at SlashRTC for streamlined customer management.",
    span: "col-span-1 row-span-1",
    links: null,
  },
  // {
  //   title: "Access Approval System",
  //   medium: "Authorization",
  //   description: "Built access approval system improving efficiency by 50% at SlashRTC.",
  //   span: "col-span-2 row-span-1",
  //   links: null,
  // },
];

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Header slide in from left
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const cards = gridRef.current?.querySelectorAll("article");
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            02 / Experiments
          </span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
            SELECTED WORK
          </h2>
        </div>
        <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Studies across interface design, agent systems, and visual
          computation.
        </p>
      </div>

      {/* Asymmetric grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]"
      >
        {experiments.map((experiment, index) => (
          <WorkCard
            key={index}
            experiment={experiment}
            index={index}
            persistHover={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

function WorkCard({
  experiment,
  index,
  persistHover = false,
}: {
  experiment: {
    title: string;
    medium: string;
    description: string;
    span: string;
    links?: { [key: string]: string } | null;
  };
  index: number;
  persistHover?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    if (!persistHover || !cardRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      });
    }, cardRef);

    return () => ctx.revert();
  }, [persistHover]);

  const isActive = isHovered || isScrollActive;

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden",
        experiment.span,
        isActive && "border-accent/60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <div
        className={cn(
          "absolute inset-0 bg-accent/5 transition-opacity duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {experiment.medium}
        </span>
        <h3
          className={cn(
            "mt-3 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight transition-colors duration-300",
            isActive ? "text-accent" : "text-foreground",
          )}
        >
          {experiment.title}
        </h3>
      </div>

      {/* Description - reveals on hover */}
      <div className="relative z-10">
        <p
          className={cn(
            "font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px]",
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          {experiment.description}
        </p>
        {experiment.links && (
          <div className="mt-3 flex gap-3">
            {Object.entries(experiment.links).map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest text-accent hover:text-accent/80 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Index marker */}
      <span
        className={cn(
          "absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300",
          isActive ? "text-accent" : "text-muted-foreground/40",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Corner line */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>
    </article>
  );
}
