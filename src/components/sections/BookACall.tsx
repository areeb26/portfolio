"use client";

import { motion, Variants } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const CALENDLY_URL = "https://calendly.com/itsareebahmedkhan/30min";

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
