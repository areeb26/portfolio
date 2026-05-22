"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
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

  // Parallax: orbs drift slower on scroll
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

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href={CALENDLY_URL}
                className="btn btn-primary group animate-pulse-idle flex items-center gap-3"
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

      {/* Z3: Floating stat chips */}
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
