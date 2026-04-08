"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { BlurFade } from "@/components/ui/blur-fade";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuart,
    },
  },
};

export function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        {/* Section header - asymmetric layout */}
        <div className="grid-editorial mb-16 md:mb-24">
          <div>
            <span className="text-label mb-4 block">Selected Work</span>
            <h2 className="text-headline">
              Projects that
              <br />
              <em className="not-italic accent-text">solve</em> problems
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-body max-w-md">
              A selection of AI automations, content systems, and applications 
              I&apos;ve built to help businesses work smarter.
            </p>
          </div>
        </div>

        {/* Projects grid - editorial staggered entry */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <BlurFade key={project.id} delay={index * 0.1} inView yOffset={20}>
              <article className="group relative">
                <a
                  href={project.live || project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-8 md:py-12 border-t border-border hover:bg-white/5 hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-300 rounded-xl px-6 -mx-6 overflow-hidden glass-card"
                >
                  <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start relative z-10">
                    {/* Number */}
                    <div className="md:col-span-1">
                      <span className="text-small text-foreground-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="md:col-span-4">
                      <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-5">
                      <p className="text-foreground-muted leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="md:col-span-2 flex justify-end">
                      <div className="btn-circle group-hover:bg-foreground group-hover:border-foreground">
                        <ArrowUpRight className="w-4 h-4 group-hover:text-background transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-4 md:mt-6 md:ml-[calc(8.333%+2rem)] flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </article>
            </BlurFade>
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
