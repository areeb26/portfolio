"use client";

import { motion } from "framer-motion";

const technologies = [
  "n8n", "Claude AI", "Gemini", "Next.js", "TypeScript", 
  "Python", "Supabase", "Vercel", "OpenAI", "ChromaDB",
  "Remotion", "FastAPI", "TailwindCSS", "Framer Motion"
];

export function TechMarquee() {
  // Two copies for a clean 0% to -50% animation
  const repeatedTech = [...technologies, ...technologies];
  
  return (
    <div className="w-full overflow-hidden bg-background py-16 border-y border-border relative">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex items-center"
        >
          {repeatedTech.map((tech, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-display text-neutral-300 hover:text-accent transition-colors cursor-default px-8 md:px-12"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
