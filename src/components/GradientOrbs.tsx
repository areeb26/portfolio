"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion, useIsMobile } from "@/hooks/useMediaQuery";

export function GradientOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth parallax
  const springConfig = { stiffness: 50, damping: 30 };
  const orbX = useSpring(mouseX, springConfig);
  const orbY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize to -1 to 1 range
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      mouseX.set(x * 30); // Max 30px movement
      mouseY.set(y * 20); // Max 20px movement
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion, isMobile]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Main blue orb - top right */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full opacity-60"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* Violet orb - bottom left */}
      <motion.div
        style={{ 
          x: useSpring(mouseX, { stiffness: 30, damping: 40 }), 
          y: useSpring(mouseY, { stiffness: 30, damping: 40 }) 
        }}
        className="absolute -bottom-[150px] -left-[150px] w-[500px] h-[500px] rounded-full opacity-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* Teal accent orb - center */}
      {!isMobile && (
        <motion.div
          style={{ 
            x: useSpring(mouseX, { stiffness: 40, damping: 35 }), 
            y: useSpring(mouseY, { stiffness: 40, damping: 35 }) 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(20, 184, 166, 0.3) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
