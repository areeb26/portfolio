"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageLoaderVariants, logoReveal } from "@/lib/animations";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Show loader for first visit
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={pageLoaderVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "var(--background)" }}
        >
          <motion.div
            variants={logoReveal}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center gap-4"
          >
            {/* Logo */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-violet)] flex items-center justify-center shadow-2xl shadow-[var(--accent-blue)]/30">
              <span className="text-white font-bold text-2xl">AK</span>
            </div>
            
            {/* Loading bar */}
            <div className="w-32 h-1 rounded-full bg-[var(--muted)] overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-violet)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
