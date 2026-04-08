"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";

const stats = [
  { value: "50+", label: "Automations Built" },
  { value: "3+", label: "Years Experience" },
  { value: "24/7", label: "Systems Running" },
];

const expertise = [
  "n8n Workflows",
  "Claude AI",
  "Gemini AI",
  "Next.js",
  "Supabase",
  "TypeScript",
  "Python",
  "API Integration",
];

export function About() {
  return (
    <section id="about" className="section bg-background-alt">
      <div className="container">
        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="text-label mb-6 block">About</span>
              <h2 className="text-headline mb-8">
                I&apos;m <em className="not-italic">Areeb Khan</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-6"
            >
              <TextReveal className="!relative !h-auto !py-0 !sticky-none">
                Also known as Khan Sahib. I'm an AI Automation Expert and Full-Stack Developer based in Pakistan, working with clients worldwide. I specialize in building intelligent systems that automate workflows, generate content, and scale businesses—without requiring more people.
              </TextReveal>
              
              <p className="text-body mt-8">
                Every system I build is designed to be reliable and invisible. The best 
                automation is the one you forget exists, because it just works.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-medium tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Expertise */}
          <div className="lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className="text-label mb-6 block">Expertise</span>
              
              <div className="space-y-4">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + index * 0.05,
                      ease: [0.25, 1, 0.5, 1] 
                    }}
                    className="flex items-center justify-between p-4 border border-white/5 rounded-xl glass-card group"
                  >
                    <span className="text-lg font-medium group-hover:text-accent transition-colors">
                      {skill}
                    </span>
                    <span className="text-xs text-foreground-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
