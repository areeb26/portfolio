"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
};

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 md:py-32 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/15 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-500/8 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="container flex-1 flex flex-col justify-center relative z-10">
        {/* Label */}
        <BlurFade delay={0.25} yOffset={8}>
          <div className="mb-6 md:mb-8">
            <span className="text-label">AI Automation Expert</span>
          </div>
        </BlurFade>

        {/* Main headline - editorial large type */}
        <BlurFade delay={0.3} yOffset={8}>
          <h1 className="text-display mb-8 md:mb-12 max-w-[14ch]">
            I build systems that{" "}
            <span className="accent-underline">work</span> while you{" "}
            <em className="not-italic accent-text">sleep</em>
          </h1>
        </BlurFade>

        {/* Subtext + CTA row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          <BlurFade delay={0.35} yOffset={8}>
            <p className="text-body max-w-md">
              Full-stack developer specializing in n8n automations, AI agents, 
              and intelligent systems that scale your business without scaling your team.
            </p>
          </BlurFade>
          
          <BlurFade delay={0.4} yOffset={8}>
            <div className="flex items-center gap-6">
              <a href="#work" className="btn btn-primary group">
                View my work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#about" className="btn btn-outline">
                About me
              </a>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Bottom - scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="container flex justify-between items-end"
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
        
        <div className="text-small text-foreground-muted hidden md:block">
          © 2024
        </div>
      </motion.div>
    </section>
  );
}
