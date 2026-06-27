"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const CALENDLY_URL = "https://calendly.com/itsareebahmedkhan/30min";
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 44, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easeOutExpo },
  },
};

export function BookACall() {
  return (
    <section id="contact" className="section relative overflow-hidden bg-foreground text-background">
      <motion.div
        className="absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-10 blur-[120px]"
        animate={{ scale: [1, 1.16, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={itemVariants}>
            <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Let&apos;s Talk
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-headline mb-6 text-background">
            Ready to automate
            <br />
            the <em className="not-italic text-accent-light">slow parts?</em>
          </motion.h2>

          <motion.p variants={itemVariants} className="mx-auto mb-12 max-w-md text-lg leading-relaxed text-neutral-400">
            Book a free 30-min call. Tell me your problem. I&apos;ll tell you if
            I can solve it.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center">
            <MagneticButton
              href={CALENDLY_URL}
              className="group inline-flex items-center gap-3 bg-background px-10 py-5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors duration-300 hover:bg-accent hover:text-background"
              strength={0.25}
            >
              <Calendar className="h-5 w-5" />
              Book a Free Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-neutral-500 md:flex-row md:gap-8"
          >
            <span>No commitment. No pitch deck. Just a conversation.</span>
            <span className="hidden text-neutral-700 md:block">·</span>
            <span>Usually respond within 24 hours.</span>
            <span className="hidden text-neutral-700 md:block">·</span>
            <a href="mailto:itsareebahmedkhan@gmail.com" className="text-neutral-400 transition-colors hover:text-neutral-200">
              itsareebahmedkhan@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
