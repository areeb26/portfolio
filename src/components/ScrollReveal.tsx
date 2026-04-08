"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, scaleIn, slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useMediaQuery";

type AnimationType = "fadeUp" | "scaleIn" | "slideInLeft" | "slideInRight" | "stagger" | "staggerItem";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  once?: boolean;
}

const variants = {
  fadeUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  stagger: staggerContainer,
  staggerItem,
};

export function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const selectedVariant = variants[animation];

  return (
    <motion.div
      ref={ref}
      variants={selectedVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger wrapper for multiple children
interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
}

export function StaggerReveal({ children, className = "", once = true }: StaggerRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
