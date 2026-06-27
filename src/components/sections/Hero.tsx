"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowDown, ArrowRight, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const CALENDLY_URL = "https://calendly.com/itsareebahmedkhan/30min";

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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutExpo, delay: 0.75 + i * 0.12 },
  }),
};

function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasEl = canvas;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context = ctx;

    let frame = 0;
    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles = Array.from({ length: 44 }, (_, i) => ({
      x: (i * 97) % 1000,
      y: (i * 211) % 700,
      vx: Math.sin(i * 1.7) * 0.22,
      vy: Math.cos(i * 1.2) * 0.18,
      r: 1 + (i % 3) * 0.45,
    }));

    function resize() {
      width = canvasEl.clientWidth;
      height = canvasEl.clientHeight;
      canvasEl.width = Math.floor(width * dpr);
      canvasEl.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(185, 52, 24, 0.55)";
      context.strokeStyle = "rgba(38, 25, 18, 0.12)";
      context.lineWidth = 1;

      particles.forEach((p, index) => {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        } else {
          p.x = ((index * 97) % 1000) / 1000 * width;
          p.y = ((index * 211) % 700) / 700 * height;
        }

        context.beginPath();
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            context.globalAlpha = (1 - dist / 150) * 0.55;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }
      context.globalAlpha = 1;

      frame += 1;
      if (!reduceMotion || frame < 2) raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-60" aria-hidden="true" />;
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const chipY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const panelRotate = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const panelTilt = useTransform(springY, [-0.5, 0.5], [8, -8]);

  return (
    <section
      ref={containerRef}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      className="relative min-h-[100dvh] overflow-hidden bg-[var(--background)] pt-28 pb-14 md:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,oklch(82%_0.11_28_/_0.5),transparent_30rem),linear-gradient(135deg,var(--background),var(--background-alt))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(20%_0.02_70_/_0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(20%_0.02_70_/_0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_84%)]" />
      <SignalField />

      <motion.div
        style={{ y: heroY }}
        className="container relative z-10 grid min-h-[calc(100dvh-10rem)] items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]"
      >
        <motion.div variants={containerVariants} initial={false} animate="visible" className="max-w-5xl">
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="text-label">Full-Stack AI Engineer</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-display mb-8 max-w-[15ch] md:mb-12">
            Your idea <span className="accent-text">→</span> working AI product in{" "}
            <em className="not-italic accent-underline">2 weeks</em>
          </motion.h1>

          <div className="grid items-end gap-8 md:grid-cols-2 md:gap-16">
            <motion.p variants={itemVariants} className="text-body max-w-md">
              Full-stack AI engineer. Automation systems. WhatsApp bots. Real results.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href={CALENDLY_URL}
                className="btn btn-primary group flex items-center gap-3"
                strength={0.28}
              >
                <Calendar className="h-4 w-4" />
                Book a Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <a href="#work" className="btn btn-outline">
                See my work
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: panelY, rotateY: panelRotate, rotateX: panelTilt, transformPerspective: 900 }}
          initial={false}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: easeOutExpo }}
          className="relative hidden will-change-transform lg:block"
        >
          <div className="absolute -inset-6 bg-[var(--accent)] opacity-10 blur-3xl" />
          <div className="relative border border-[var(--foreground)] bg-[oklch(98%_0.01_72_/_0.82)] p-7 shadow-[18px_18px_0_var(--foreground)] backdrop-blur-sm">
            <div className="mb-8 flex items-center justify-between border-b border-[var(--border-strong)] pb-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
              <span>Launch console</span>
              <span>00:14:29</span>
            </div>
            <div className="space-y-5">
              {statChips.map((chip, index) => (
                <motion.div
                  key={chip}
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 + index * 0.14, ease: easeOutExpo }}
                  className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-5 last:border-b-0"
                >
                  <span className="font-display text-4xl leading-none tracking-[-0.05em] text-[var(--accent)]">
                    {index === 0 ? "3k+" : index === 1 ? "15k+" : "400+"}
                  </span>
                  <span className="max-w-40 text-right text-sm font-semibold uppercase tracking-[0.1em] text-[var(--foreground)]">
                    {chip.replace(/^[^ ]+ /, "")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: chipY }}
        className="container relative z-20 mt-6 lg:absolute lg:right-0 lg:bottom-28"
      >
        <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
          {statChips.map((chip, i) => (
            <motion.div
              key={chip}
              custom={i}
              variants={chipVariants}
              initial={false}
              animate="visible"
              className="stat-chip"
            >
              <span className="stat-chip-dot" />
              {chip}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="container relative z-10 mt-8 flex items-end justify-between"
      >
        <div className="text-small hidden text-foreground-muted md:block">
          Based in Pakistan · Available worldwide
        </div>
        <a href="#work" className="text-small link-hover flex items-center gap-2" aria-label="Scroll to work section">
          <span className="hidden md:inline">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-float" />
        </a>
        <div className="text-small hidden text-foreground-muted md:block">© 2026</div>
      </motion.div>
    </section>
  );
}
