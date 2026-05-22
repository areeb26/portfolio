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
