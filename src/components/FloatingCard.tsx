"use client";

import { motion } from "framer-motion";
import { floatingCard, levitate } from "@/lib/animations";
import { useReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";

interface FloatingCardProps {
  name: string;
  tagline: string;
  color: string;
  index: number;
  rotation?: number;
}

export function FloatingCard({ name, tagline, color, index, rotation = 0 }: FloatingCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  
  const shouldAnimate = !prefersReducedMotion && !isMobile;

  return (
    <motion.div
      custom={index}
      variants={floatingCard}
      initial="hidden"
      animate="visible"
      className="relative"
      style={{ 
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <motion.div
        animate={shouldAnimate ? levitate : undefined}
        style={{ 
          animationDelay: `${index * 0.5}s`,
        }}
        className="glass glass-hover rounded-xl px-5 py-4 min-w-[140px]"
      >
        {/* Accent line */}
        <div 
          className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-60"
          style={{ background: color }}
        />
        
        {/* Content */}
        <div className="flex items-center gap-3">
          <div 
            className="w-2 h-2 rounded-full"
            style={{ background: color, boxShadow: `0 0 10px ${color}` }}
          />
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-[var(--muted-foreground)]">{tagline}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FloatingCards() {
  const cards = [
    { name: "n8n", tagline: "Workflow automation", color: "#EA4B71", rotation: 2 },
    { name: "Claude AI", tagline: "Intelligent agents", color: "#D97757", rotation: -1 },
    { name: "Supabase", tagline: "Real-time database", color: "#3FCF8E", rotation: 1.5 },
    { name: "Vercel", tagline: "Edge deployment", color: "#FFFFFF", rotation: -2 },
    { name: "Next.js", tagline: "React framework", color: "#FFFFFF", rotation: 1 },
  ];

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      {cards.map((card, index) => (
        <FloatingCard
          key={card.name}
          {...card}
          index={index}
        />
      ))}
    </div>
  );
}
