"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

interface ProjectCard3DProps {
  project: Project;
  index: number;
}

function ProjectCard3D({ project, index }: ProjectCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [-60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const rotateXSpring = useSpring(rotateX, { stiffness: 80, damping: 20 });
  const translateZSpring = useSpring(translateZ, { stiffness: 80, damping: 20 });

  return (
    <div ref={ref} className="perspective-container">
      <motion.article
        style={{
          rotateX: rotateXSpring,
          translateZ: translateZSpring,
          opacity,
        }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: easeOutExpo } }}
        className="glass-card rounded-2xl overflow-hidden group cursor-pointer h-full"
      >
        <a
          href={project.live || project.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 h-full flex flex-col"
        >
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs text-foreground-muted font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="btn-circle group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 group-hover:text-background transition-colors" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-foreground-muted leading-relaxed text-sm mb-5 flex-1">
            {project.description}
          </p>

          {/* Metric badge */}
          {project.metric && (
            <div className="metric-badge mb-5 self-start">{project.metric}</div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </a>
      </motion.article>
    </div>
  );
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

export function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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

        {/* 3D Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard3D key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
