"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { achievements, responsibilities } from "@/lib/constant";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current)
      return;

    const ctx = gsap.context(() => {
      // Header slide in
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Content fade in with stagger
      const bullets = contentRef.current?.querySelectorAll("li");
      if (bullets) {
        gsap.from(bullets, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
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
      id="experience"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          03 / Experience
        </span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          PROFESSIONAL
        </h2>
      </div>

      {/* Experience content */}
      <div ref={contentRef} className="max-w-3xl">
        {/* Role & Company */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
            <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight">
              Jr. Software Developer
            </h3>
            <span className="font-mono text-xs text-accent">SlashRTC</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              Aug 2025 – Apr 2026
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Mumbai, MH
            </span>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="mb-12">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Key Responsibilities
          </h4>
          <ul className="space-y-4">
            {responsibilities.map((resp, index) => (
              <li
                key={index}
                className="flex gap-4 text-foreground/80 leading-relaxed font-mono text-sm"
              >
                <span className="text-accent/60 mt-1 shrink-0 font-semibold">▪</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements & Impact */}
        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Achievements & Impact
          </h4>
          <ul className="space-y-6">
            {achievements.map((ach, index) => (
              <li
                key={index}
                className="flex gap-4 text-foreground/80 leading-relaxed"
              >
                <span className="font-mono text-xs text-accent font-semibold mt-1 shrink-0">
                  ▪
                </span>
                <span className="font-mono text-sm">
                  <span className="text-accent font-semibold">{ach.metric}</span>
                  <span className="text-muted-foreground font-semibold"> → </span>
                  <span className="text-foreground/80">{ach.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
