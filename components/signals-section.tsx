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
          I am a <span className="text-accent font-semibold">Full-Stack Developer</span> with strong expertise in both frontend and backend development, focused on building scalable, secure, and high-performance web applications. My experience spans designing{" "}
          <span className="text-accent font-semibold">clean user experiences</span> on the client and architecting{" "}
          <span className="text-accent font-semibold">robust backend systems</span> on the server. I work across the stack with{" "}
          <span className="text-accent font-semibold">React, Next.js, Node.js, Express.js, and TypeScript</span>, utilizing databases like{" "}
          <span className="text-accent font-semibold">MongoDB and MySQL</span>.
        </p>

        <p className="font-mono text-sm leading-relaxed text-foreground/80 mt-6">
          To ensure performance and reliability, I implement microservices, caching, session stores with{" "}
          <span className="text-accent font-semibold">Redis</span>, and message queues. I leverage{" "}
          <span className="text-accent font-semibold">WebSockets</span> for real-time capabilities and deploy applications using{" "}
          <span className="text-accent font-semibold">Docker, AWS, and automated CI/CD pipelines</span>. Additionally, I integrate AI capabilities, automation tools, and modern developer tools to solve real-world problems with clean, maintainable code. My goal is to build reliable products that deliver{" "}
          <span className="text-accent font-semibold">excellent user experiences and scale seamlessly as they grow</span>.
        </p>
      </div>
    </section>
  );
}
