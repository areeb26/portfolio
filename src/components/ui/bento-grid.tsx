"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  ctaHref?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoCardProps {
  item: BentoItem;
  index: number;
}

function BentoCard({ item, index }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-8, 8]);
  const rotateX = useTransform(sy, [0, 1], [8, -8]);
  const spotlightX = useTransform(sx, (value) => `${value * 100}%`);
  const spotlightY = useTransform(sy, (value) => `${value * 100}%`);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 46, rotateX: 10, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((event.clientX - rect.left) / rect.width);
        y.set((event.clientY - rect.top) / rect.height);
      }}
      onMouseLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      className={cn(
        "group relative min-h-[320px] cursor-pointer overflow-hidden border border-[var(--border)] bg-[oklch(98%_0.01_72_/_0.76)] p-6 shadow-[0_1px_0_oklch(10%_0.01_70_/_0.08)] backdrop-blur-sm will-change-transform md:p-8",
        "transition-colors duration-300 hover:border-[var(--foreground)]",
        item.colSpan === 2 && "md:col-span-2",
        item.colSpan === 3 && "md:col-span-3",
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${spotlightX} ${spotlightY}, oklch(51% 0.18 32 / 0.18), transparent 32%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,oklch(100%_0_0_/_0.28),transparent)] opacity-0 transition-opacity duration-300 group-hover:animate-[shimmer_1.4s_ease-out_1] group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--accent-subtle)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110 [&>svg]:h-4 [&>svg]:w-4">
            {item.icon}
          </div>
          {item.status && <span className="metric-badge text-right">{item.status}</span>}
        </div>

        <h3
          className={cn(
            "mb-2 font-medium tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]",
            item.colSpan === 2 ? "text-2xl md:text-3xl" : "text-xl",
          )}
        >
          {item.title}
        </h3>

        {item.meta && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            {item.meta}
          </p>
        )}

        <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--foreground-muted)] md:text-base">
          {item.description}
        </p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {item.tags?.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {item.cta && (
            <a
              href={item.ctaHref || "#"}
              target={item.ctaHref?.startsWith("http") ? "_blank" : undefined}
              rel={item.ctaHref?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--accent)]"
              onClick={(event) => event.stopPropagation()}
            >
              {item.cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-3", className)}>
      {items.map((item, index) => (
        <BentoCard key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}
