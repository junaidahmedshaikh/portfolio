"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SignalsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current)
      return;

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
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Content fade in
      gsap.fromTo(
        contentRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="signals"
      ref={sectionRef}
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          01 / About
        </span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          ABOUT ME
        </h2>
      </div>

      {/* About content */}
      <div ref={contentRef} className="max-w-3xl">
        <p className="font-mono text-sm leading-relaxed text-foreground/80">
          I'm a{" "}
          <span className="text-accent font-semibold">Software Developer</span>{" "}
          based in <span className="text-accent font-semibold">Mumbai</span>. I
          build backend systems, real-time applications, and developer tools and
          I tend to think about them in terms of{" "}
          <span className="text-accent font-semibold">
            architecture and failure modes
          </span>{" "}
          before I think about features.
        </p>

        <p className="font-mono text-sm leading-relaxed text-foreground/80 mt-6">
          The work I'm most proud of is work that{" "}
          <span className="text-accent font-semibold">
            scales without drama
          </span>{" "}
          and that another engineer can pick up without a long explanation.
          That's the standard I hold my code to.
        </p>
      </div>
    </section>
  );
}
