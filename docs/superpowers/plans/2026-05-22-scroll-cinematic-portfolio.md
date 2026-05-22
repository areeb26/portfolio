# Scroll Cinematic Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform portfolio into a jaw-drop scroll-cinematic experience targeting startup founders and freelance clients, converting them to book a Calendly call.

**Architecture:** Hybrid upgrade — keep OKLch tokens, Instrument fonts, glassmorphism classes. Rebuild Hero with 3-layer parallax. Add StatsBar with animated counters. Replace project list with 3D rotating card grid. Replace Contact with BookACall conversion section. Inject 21st.dev-style magnetic + cursor-glow interactions via custom Framer Motion components.

**Tech Stack:** Next.js 16 App Router, React 19, Framer Motion 12, Tailwind CSS 4, 21st.dev Magic MCP (API key set in env)

---

## File Map

### Create
- `src/components/ui/magnetic-button.tsx` — cursor-tracking magnetic wrapper
- `src/components/ui/animated-counter.tsx` — count-up on scroll-enter
- `src/components/ui/cursor-glow.tsx` — radial glow follows cursor globally
- `src/components/sections/StatsBar.tsx` — new dark strip, 5 animated stats
- `src/components/sections/BookACall.tsx` — cinematic conversion section (replaces Contact)

### Modify
- `src/data/projects.ts` — replace 5 old projects with 6 new metric-backed entries
- `src/components/sections/Hero.tsx` — full rebuild: 3 depth layers, new headline, stat chips, magnetic CTA
- `src/components/sections/Projects.tsx` — replace list with 3D rotate-in card grid
- `src/components/sections/Services.tsx` — wrap cards in magnetic effect + micro-CTAs
- `src/components/sections/About.tsx` — new bio, stagger tags, trust signals strip
- `src/components/Footer.tsx` — back-to-top button, updated name + year
- `src/app/page.tsx` — wire StatsBar + BookACall, remove Contact
- `src/app/globals.css` — add perspective, pulse-idle keyframes, stat-chip styles

---

## Task 1: Update Projects Data

**Files:**
- Modify: `src/data/projects.ts`

- [ ] **Step 1: Replace projects array**

```typescript
export const projects = [
  {
    id: 1,
    title: "Certificate Automation System",
    description: "Automated certificate generation for 3 learning apps. FastAPI + n8n pipeline generates, uploads to Cloudinary, and delivers cert URLs in 12 seconds flat.",
    metric: "3,000+ certs · 400 hrs saved",
    tech: ["FastAPI", "Postgres", "n8n", "Cloudinary"],
    featured: true,
    github: "https://github.com/areeb26",
    live: "#",
  },
  {
    id: 2,
    title: "WhatsApp Service Booking Bot",
    description: "End-to-end booking system on WhatsApp. Customers browse services, select nearby workers, and receive payment URLs — all via Meta Business API.",
    metric: "Full end-to-end booking flow",
    tech: ["Meta WhatsApp API", "n8n", "Webhooks", "Firebase"],
    featured: true,
    github: "https://github.com/areeb26",
    live: "#",
  },
  {
    id: 3,
    title: "LinkedIn Outreach Automation",
    description: "Automated personalized connection + follow-up sequence on LinkedIn. 12 pilot users running it daily with dramatically reduced manual effort.",
    metric: "5–10 hrs/week saved · 12 pilots",
    tech: ["n8n", "Webhooks", "Claude AI"],
    featured: false,
    github: "https://github.com/areeb26",
    live: "#",
  },
  {
    id: 4,
    title: "Conversational AI Voice Agent",
    description: "Full-stack voice agent inspired by ElevenLabs but built entirely on open-source tools. Supports custom prompts, call switching, conversation logs, and webhook integrations.",
    metric: "Open-source ElevenLabs alternative",
    tech: ["FastAPI", "Claude AI", "Python", "Webhooks"],
    featured: true,
    github: "https://github.com/areeb26",
    live: "#",
  },
  {
    id: 5,
    title: "WhatsApp AI Education Bot",
    description: "AI-powered Arabic grammar Q&A bot for SarfKiDunya and NahwKiDunya apps. Matches questions to 5000+ Q&A records, summarizes with AI, serves 15k+ daily users.",
    metric: "15,000+ daily users",
    tech: ["n8n", "Google Sheets", "Claude AI", "WhatsApp API"],
    featured: false,
    github: "https://github.com/areeb26",
    live: "#",
  },
  {
    id: 6,
    title: "AI Video Clipper Tool",
    description: "Feed it a YouTube link or video file — it identifies the best moments, cuts viral-ready clips, and applies AI-selected captions automatically.",
    metric: "Video → reels in minutes",
    tech: ["Python", "Whisper AI", "FFmpeg", "n8n"],
    featured: false,
    github: "https://github.com/areeb26",
    live: "#",
  },
];

export type Project = (typeof projects)[number];
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```
Expected: no errors related to `projects.ts`

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.ts
git commit -m "feat: update projects data with metric-backed entries"
```

---

## Task 2: Build MagneticButton Component

**Files:**
- Create: `src/components/ui/magnetic-button.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
  as?: "button" | "a";
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * strength,
      y: (e.clientY - rect.top - rect.height / 2) * strength,
    });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.1 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/magnetic-button.tsx
git commit -m "feat: add MagneticButton cursor-tracking component"
```

---

## Task 3: Build AnimatedCounter Component

**Files:**
- Create: `src/components/ui/animated-counter.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/animated-counter.tsx
git commit -m "feat: add AnimatedCounter count-up on scroll component"
```

---

## Task 4: Build CursorGlow Component

**Files:**
- Create: `src/components/ui/cursor-glow.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CursorGlowProps {
  color?: string;
  size?: number;
  opacity?: number;
}

export function CursorGlow({
  color = "var(--accent)",
  size = 400,
  opacity = 0.06,
}: CursorGlowProps) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden="true"
    >
      <motion.div
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          opacity,
          filter: "blur(80px)",
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </motion.div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/cursor-glow.tsx
git commit -m "feat: add CursorGlow global cursor tracking component"
```

---

## Task 5: Add CSS — Perspective + Pulse Keyframes + Stat Chip

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Append new utility classes at the end of globals.css**

Add before the final closing of the file (after `.noise::before`):

```css
/* ═══════════════════════════════════════════════════════════════════════════
   3D PERSPECTIVE
   ═══════════════════════════════════════════════════════════════════════════ */

.perspective-container {
  perspective: 1200px;
  transform-style: preserve-3d;
}

/* ═══════════════════════════════════════════════════════════════════════════
   STAT CHIP
   ═══════════════════════════════════════════════════════════════════════════ */

.stat-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  color: var(--foreground);
  white-space: nowrap;
}

.stat-chip-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}

/* ═══════════════════════════════════════════════════════════════════════════
   PULSE IDLE (for CTA button)
   ═══════════════════════════════════════════════════════════════════════════ */

@keyframes pulse-idle {
  0%, 100% { box-shadow: 0 0 0 0 transparent; }
  50% { box-shadow: 0 0 0 8px var(--accent-subtle); }
}

.animate-pulse-idle {
  animation: pulse-idle 3s ease-in-out infinite;
}

/* ═══════════════════════════════════════════════════════════════════════════
   METRIC BADGE
   ═══════════════════════════════════════════════════════════════════════════ */

.metric-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  background: var(--accent-subtle);
  color: var(--accent);
  border-radius: 4px;
}
```

- [ ] **Step 2: Verify no CSS syntax errors by running dev server briefly**

```bash
cd "D:/Download/portfolio" && npx next build 2>&1 | head -20
```
Expected: no CSS parse errors

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add perspective, stat-chip, pulse-idle, metric-badge CSS utilities"
```

---

## Task 6: Rebuild Hero Section

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Replace Hero.tsx entirely**

```tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const CALENDLY_URL = "https://calendly.com/itsareebahmedkhan";

const statChips = [
  "3,000+ certificates automated",
  "15k+ daily users served",
  "400+ hours eliminated",
];

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo, delay: 0.8 + i * 0.15 },
  }),
};

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax: orbs drift slower, chips drift slightly faster
  const orbY = useTransform(scrollY, [0, 600], [0, -90]);
  const chipY = useTransform(scrollY, [0, 600], [0, -40]);
  const orbYSpring = useSpring(orbY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center py-20 md:py-32 relative overflow-hidden"
    >
      {/* Z1: Background orbs (parallax slow) */}
      <motion.div style={{ y: orbYSpring }} className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.18)" }}
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4"
          style={{ backgroundColor: "rgba(139, 92, 246, 0.15)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-[100px] rounded-full"
          style={{ backgroundColor: "rgba(20, 184, 166, 0.08)" }}
        />
      </motion.div>

      {/* Z2: Main content */}
      <div className="container flex-1 flex flex-col justify-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="text-label">Full-Stack AI Engineer</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-display mb-8 md:mb-12 max-w-[16ch]">
            Your idea{" "}
            <span className="accent-text">→</span>{" "}
            working AI product in{" "}
            <em className="not-italic accent-underline">2 weeks</em>
          </motion.h1>

          {/* Subtext + CTA */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
            <motion.p variants={itemVariants} className="text-body max-w-md">
              Full-stack AI engineer. Automation systems. WhatsApp bots. Real results.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <MagneticButton
                href={CALENDLY_URL}
                className="btn btn-primary group animate-pulse-idle"
                strength={0.3}
              >
                <Calendar className="w-4 h-4" />
                Book a Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <a href="#work" className="btn btn-outline">
                See my work
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Z3: Floating stat chips (parallax slightly) */}
      <motion.div
        style={{ y: chipY }}
        className="container relative z-20 mt-12 md:mt-0 md:absolute md:bottom-32 md:right-0"
      >
        <div className="flex flex-wrap md:flex-col gap-3 md:items-end">
          {statChips.map((chip, i) => (
            <motion.div
              key={chip}
              custom={i}
              variants={chipVariants}
              initial="hidden"
              animate="visible"
              className="stat-chip"
            >
              <span className="stat-chip-dot" />
              {chip}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="container flex justify-between items-end relative z-10 mt-8 md:mt-0"
      >
        <div className="text-small text-foreground-muted hidden md:block">
          Based in Pakistan · Available worldwide
        </div>
        <a
          href="#work"
          className="flex items-center gap-2 text-small link-hover"
          aria-label="Scroll to work section"
        >
          <span className="hidden md:inline">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-float" />
        </a>
        <div className="text-small text-foreground-muted hidden md:block">© 2026</div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: rebuild Hero with 3D depth layers, outcome headline, magnetic CTA, stat chips"
```

---

## Task 7: Build StatsBar Section

**Files:**
- Create: `src/components/sections/StatsBar.tsx`

- [ ] **Step 1: Create StatsBar.tsx**

```tsx
"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
  { label: "Certificates Automated", target: 3000, suffix: "+" },
  { label: "Daily Users Served", target: 15000, suffix: "+" },
  { label: "Hours Eliminated", target: 400, suffix: "+" },
  { label: "Projects Shipped", target: 10, suffix: "+" },
  { label: "Pilot Clients", target: 12, suffix: "" },
];

export function StatsBar() {
  return (
    <section className="py-12 bg-foreground text-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-normal tracking-tight mb-1 text-background">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={2.2}
                />
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/StatsBar.tsx
git commit -m "feat: add StatsBar with animated count-up counters"
```

---

## Task 8: Rebuild Projects Section (3D Cards)

**Files:**
- Modify: `src/components/sections/Projects.tsx`

- [ ] **Step 1: Replace Projects.tsx entirely**

```tsx
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

interface ProjectCard3DProps {
  project: Project;
  index: number;
}

function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const rotateXSpring = useSpring(rotateX, { stiffness: 80, damping: 20 });
  const translateZSpring = useSpring(translateZ, { stiffness: 80, damping: 20 });

  return (
    <div ref={ref} className="perspective-container">
      <motion.article
        style={{
          rotateX: rotateXSpring,
          translateZ: translateZSpring,
          opacity,
          transitionDelay: `${index * 0.05}s`,
        }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: easeOutExpo } }}
        className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
      >
        <a
          href={project.live || project.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 h-full"
        >
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs text-foreground-muted font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="btn-circle group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 group-hover:text-background transition-colors" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-foreground-muted leading-relaxed text-sm mb-5">
            {project.description}
          </p>

          {/* Metric badge */}
          {project.metric && (
            <div className="metric-badge mb-5">{project.metric}</div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </a>
      </motion.article>
    </div>
  );
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

export function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-editorial mb-16 md:mb-24"
        >
          <div>
            <span className="text-label mb-4 block">Selected Work</span>
            <h2 className="text-headline">
              Projects that
              <br />
              <em className="not-italic accent-text">deliver</em> results
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-body max-w-md">
              Real automations and AI systems built for real businesses — each
              with metrics to prove it.
            </p>
          </div>
        </motion.div>

        {/* 3D Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard3D key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Projects.tsx
git commit -m "feat: rebuild Projects with 3D rotate-in cards and metric badges"
```

---

## Task 9: Rebuild Services Section (Magnetic Cards)

**Files:**
- Modify: `src/components/sections/Services.tsx`

- [ ] **Step 1: Replace Services.tsx entirely**

```tsx
"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Bot, Smartphone, Code2, Rss } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/itsareebahmedkhan";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    id: 1,
    icon: Bot,
    title: "AI Automation Systems",
    tagline: "Replace manual work with intelligent workflows",
    features: ["n8n Pipelines", "API Integrations", "Scheduled Jobs"],
  },
  {
    id: 2,
    icon: Smartphone,
    title: "WhatsApp Business Bots",
    tagline: "Booking, support, sales — all on WhatsApp",
    features: ["Meta Business API", "Booking Flows", "Payment Links"],
  },
  {
    id: 3,
    icon: Code2,
    title: "Full-Stack AI Apps",
    tagline: "From idea to deployed product in weeks",
    features: ["Next.js", "FastAPI", "Claude AI"],
  },
  {
    id: 4,
    icon: Rss,
    title: "Content Automation",
    tagline: "AI-powered content pipelines at scale",
    features: ["Social Auto-Post", "Script Generation", "Reel Clipping"],
  },
];

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
}

function MagneticCard({ children, className = "" }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.06,
      y: (e.clientY - rect.top - rect.height / 2) * 0.06,
    });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="grid-editorial mb-16 md:mb-24"
        >
          <div>
            <span className="text-label mb-4 block">Services</span>
            <h2 className="text-headline">
              What I can
              <br />
              <em className="not-italic accent-text">build</em> for you
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-body max-w-md">
              From intelligent automations to production-ready AI apps — solutions
              that transform how your business operates.
            </p>
          </div>
        </motion.div>

        {/* Magnetic Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <MagneticCard>
                  <article className="glass-card rounded-2xl p-8 group hover:-translate-y-1 hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground-muted mb-5 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((f) => (
                        <span key={f} className="tag">{f}</span>
                      ))}
                    </div>

                    {/* Micro CTA */}
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-sm font-medium text-foreground-muted hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      → Book a Call
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </article>
                </MagneticCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Services.tsx
git commit -m "feat: rebuild Services with magnetic cards, icons, micro-CTAs"
```

---

## Task 10: Rebuild About Section

**Files:**
- Modify: `src/components/sections/About.tsx`

- [ ] **Step 1: Replace About.tsx entirely**

```tsx
"use client";

import { motion, Variants } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const expertiseTags = [
  "n8n",
  "FastAPI",
  "WhatsApp Business API",
  "Claude AI",
  "Supabase",
  "Next.js",
  "Python",
  "Framer Motion",
  "Firebase",
  "Webhooks",
  "Meta Graph API",
  "Postgres",
];

const trustSignals = [
  "✓ 3,000+ automations shipped",
  "✓ 15k+ users served daily",
  "✓ Available for new projects",
];

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOutExpo, delay: i * 0.04 },
  }),
};

export function About() {
  return (
    <section id="about" className="section bg-background-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
            >
              <span className="text-label mb-6 block">About</span>
              <h2 className="text-headline mb-8">
                I&apos;m <em className="not-italic accent-text">Areeb</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            >
              <p className="text-xl font-medium text-foreground/80 md:text-2xl leading-relaxed mb-6">
                AI engineer and automation builder. I work with startups and
                businesses to replace slow manual processes with fast, intelligent
                systems.
              </p>
              <p className="text-body">
                I ship fast, I communicate clearly, and I don&apos;t stop until it
                works. Based in Pakistan, building for the world.
              </p>
            </motion.div>

            {/* Trust signals strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
              className="flex flex-col sm:flex-row gap-4 mt-10 pt-10 border-t border-border"
            >
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="text-sm font-medium text-accent flex items-center gap-2"
                >
                  {signal}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Expertise tags */}
          <div className="lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: easeOutExpo }}
            >
              <span className="text-label mb-6 block">Tech Stack</span>
              <div className="flex flex-wrap gap-3">
                {expertiseTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    custom={i}
                    variants={tagVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="tag cursor-default text-sm px-4 py-2"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/About.tsx
git commit -m "feat: rebuild About with new bio, stagger tags, trust signals"
```

---

## Task 11: Build BookACall Section

**Files:**
- Create: `src/components/sections/BookACall.tsx`

- [ ] **Step 1: Create BookACall.tsx**

```tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const CALENDLY_URL = "https://calendly.com/itsareebahmedkhan";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

export function BookACall() {
  return (
    <section id="contact" className="section bg-foreground text-background overflow-hidden relative">
      {/* Background accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: "rgba(180, 60, 30, 0.08)" }}
      />

      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Label */}
          <motion.div variants={itemVariants}>
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 block">
              Let&apos;s Talk
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-headline text-background mb-6"
          >
            Ready to automate
            <br />
            the <em className="not-italic text-accent-light">slow parts?</em>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-md mx-auto"
          >
            Book a free 30-min call. Tell me your problem. I&apos;ll tell you if
            I can solve it.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <MagneticButton
              href={CALENDLY_URL}
              className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 font-semibold text-sm tracking-wide uppercase hover:bg-accent hover:text-white transition-colors duration-300 animate-pulse-idle"
              strength={0.25}
            >
              <Calendar className="w-5 h-5" />
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>

          {/* Reassurance */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-neutral-500"
          >
            <span>No commitment. No pitch deck. Just a conversation.</span>
            <span className="hidden md:block text-neutral-700">·</span>
            <span>Usually respond within 24 hours.</span>
            <span className="hidden md:block text-neutral-700">·</span>
            <a
              href="mailto:itsareebahmedkhan@gmail.com"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              itsareebahmedkhan@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/BookACall.tsx
git commit -m "feat: add BookACall cinematic conversion section with Calendly CTA"
```

---

## Task 12: Update Footer

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace Footer.tsx entirely**

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/areebkhan", icon: LinkedinIcon },
  { name: "GitHub", href: "https://github.com/areeb26", icon: GithubIcon },
  { name: "Instagram", href: "https://instagram.com/AreebNarrates", icon: InstagramIcon },
];

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left */}
          <div>
            <div className="text-lg font-medium mb-1">Areeb Ahmed Khan</div>
            <p className="text-sm text-foreground-muted">
              © 2026 · All rights reserved
            </p>
          </div>

          {/* Center - Nav */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors link-hover"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right - Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd "D:/Download/portfolio" && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: update Footer with back-to-top button, 2026 copyright, full name"
```

---

## Task 13: Wire Everything in page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx**

```tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { BookACall } from "@/components/sections/BookACall";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/ui/cursor-glow";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CursorGlow />
      <Navbar />
      <Hero />
      <StatsBar />
      <TechMarquee />
      <Projects />
      <About />
      <Services />
      <BookACall />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Verify full build succeeds**

```bash
cd "D:/Download/portfolio" && npx next build 2>&1
```
Expected: `✓ Compiled successfully` with no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: wire StatsBar, BookACall, CursorGlow into main page"
```

---

## Task 14: Visual Verification

**Files:** none (read-only verification)

- [ ] **Step 1: Start dev server**

```bash
cd "D:/Download/portfolio" && npm run dev
```
Expected: server starts on `http://localhost:3000`

- [ ] **Step 2: Check each section renders correctly**

Open `http://localhost:3000` and verify:
1. Hero: outcome headline visible, stat chips animate in, magnetic "Book a Call" button present
2. StatsBar: dark strip, 5 counters count up on scroll
3. TechMarquee: unchanged, still running
4. Projects: 3D cards visible, rotate-in on scroll, metric badges show
5. About: new bio text, stagger tags, trust signals strip
6. Services: magnetic cards, icons, micro-CTAs
7. BookACall: dark section, large CTA button
8. Footer: back-to-top button, © 2026 Areeb Ahmed Khan

- [ ] **Step 3: Check mobile (375px viewport)**

Resize browser to 375px wide and verify:
- Stat chips stack vertically or wrap cleanly in Hero
- StatsBar shows 2 columns (not 5)
- Project cards stack to single column
- Services cards stack to single column
- BookACall text and button centered and readable

- [ ] **Step 4: Check reduced motion**

In browser DevTools → Rendering → Emulate prefers-reduced-motion → verify animations don't play, content still visible

- [ ] **Step 5: Final commit if any hotfixes needed**

```bash
git add -p && git commit -m "fix: visual verification hotfixes"
```

---

## Task 15: Update Calendly URL

> **Note:** Replace placeholder Calendly URL with real booking link before going live.

- [ ] **Step 1: Find all CALENDLY_URL occurrences**

```bash
cd "D:/Download/portfolio" && grep -rn "calendly.com/itsareebahmedkhan" src/
```

- [ ] **Step 2: Replace with real Calendly link**

In each file found (`Hero.tsx`, `Services.tsx`, `BookACall.tsx`):
- Replace `"https://calendly.com/itsareebahmedkhan"` with actual Calendly booking URL

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx src/components/sections/Services.tsx src/components/sections/BookACall.tsx
git commit -m "feat: set real Calendly booking URL"
```
