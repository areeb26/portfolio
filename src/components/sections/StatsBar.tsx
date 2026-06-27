"use client";

import { motion } from "framer-motion";
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
    <section className="relative overflow-hidden bg-foreground py-12 text-background">
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/2 bg-[linear-gradient(90deg,transparent,oklch(51%_0.18_32_/_0.24),transparent)]"
        animate={{ x: ["-100%", "220%"] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="mb-1 font-display text-4xl font-normal tracking-tight text-background md:text-5xl">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2.2} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
