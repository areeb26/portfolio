import { Variants, TargetAndTransition } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════════
// ANIMATION VARIANTS - Based on Emil Kowalski's design engineering principles
// ═══════════════════════════════════════════════════════════════════════════

// Standard easing curves
export const easings = {
  outQuart: [0.25, 1, 0.5, 1] as const,
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutQuart: [0.77, 0, 0.175, 1] as const,
};

// ═══════════════════════════════════════════════════════════════════════════
// FADE VARIANTS
// ═══════════════════════════════════════════════════════════════════════════

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easings.outQuart },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.outQuart },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.outQuart },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// SCALE VARIANTS
// ═══════════════════════════════════════════════════════════════════════════

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easings.outQuart },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE VARIANTS
// ═══════════════════════════════════════════════════════════════════════════

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easings.outQuart },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easings.outQuart },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// STAGGER CONTAINER
// ═══════════════════════════════════════════════════════════════════════════

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.outQuart },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// HERO TEXT WORD-BY-WORD
// ═══════════════════════════════════════════════════════════════════════════

export const heroTextContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.outExpo },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// FLOATING ANIMATION (for tech cards)
// ═══════════════════════════════════════════════════════════════════════════

export const floatingCard: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: easings.outQuart,
    },
  }),
};

export const levitate: TargetAndTransition = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════════════

export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easings.outQuart,
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// PROJECT CARD HOVER
// ═══════════════════════════════════════════════════════════════════════════

export const cardHover = {
  rest: {
    y: 0,
    transition: { duration: 0.3, ease: easings.outQuart },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: easings.outQuart },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGE LOADER
// ═══════════════════════════════════════════════════════════════════════════

export const pageLoaderVariants: Variants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: easings.outQuart },
  },
};

export const logoReveal: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: easings.outExpo },
  },
  exit: {
    scale: 1.1,
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: easings.outQuart },
  },
};
