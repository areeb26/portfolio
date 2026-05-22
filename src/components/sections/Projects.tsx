"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
};

export function Projects() {
  return (
    <section id="work" className="section">
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

        {/* Editorial numbered list */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-b border-[var(--border)]"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <a
                href={project.live || project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 md:gap-10 py-7 md:py-9 border-t border-[var(--border)] transition-all duration-300 hover:bg-[var(--neutral-100)] hover:-mx-5 hover:px-5 md:hover:-mx-8 md:hover:px-8 lg:hover:-mx-12 lg:hover:px-12"
              >
                {/* Index number */}
                <span
                  className="text-number shrink-0 w-14 select-none transition-colors duration-300 group-hover:text-[var(--accent)]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title + metric + description */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1.5">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.metric && (
                      <span className="metric-badge shrink-0">{project.metric}</span>
                    )}
                  </div>
                  <p className="text-meta hidden md:block line-clamp-1">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags — desktop only */}
                <div className="hidden lg:flex flex-wrap gap-2 shrink-0 max-w-[260px] justify-end">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                {/* Arrow circle */}
                <div className="btn-circle shrink-0 ml-2 group-hover:bg-[var(--foreground)] group-hover:border-[var(--foreground)] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:text-[var(--background)] transition-colors duration-300" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
