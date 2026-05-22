"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CursorGlowProps {
  color?: string;
  size?: number;
  opacity?: number;
}

export function CursorGlow({
  color = "var(--accent)",
  size = 400,
  opacity = 0.06,
}: CursorGlowProps) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden="true"
    >
      <motion.div
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          opacity,
          filter: "blur(80px)",
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </motion.div>
  );
}
