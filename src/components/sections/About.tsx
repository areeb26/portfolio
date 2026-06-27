"use client";

import { motion, type Variants } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const expertiseTags = [
  "n8n",
  "FastAPI",
  "WhatsApp Business API",
  "Claude AI",
  "Supabase",
  "Next.js",
  "Python",
  "Framer Motion",
  "Firebase",
  "Webhooks",
  "Meta Graph API",
  "Postgres",
];

const trustSignals = [
  "✓ 3,000+ automations shipped",
  "✓ 15k+ users served daily",
  "✓ Available for new projects",
];

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.82, rotate: -2 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.42, ease: easeOutExpo, delay: i * 0.04 },
  }),
};

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-background-alt">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,oklch(51%_0.18_32_/_0.12),transparent_55%)]" />
      <div className="container relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
            >
              <span className="text-label mb-6 block">About</span>
              <h2 className="text-headline mb-8">
                I&apos;m <em className="not-italic accent-text">Areeb</em>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
            >
              <p className="mb-6 text-xl font-medium leading-relaxed text-foreground/80 md:text-2xl">
                AI engineer and automation builder. I work with startups and
                businesses to replace slow manual processes with fast, intelligent
                systems.
              </p>
              <p className="text-body">
                I ship fast, I communicate clearly, and I don&apos;t stop until it
                works. Based in Pakistan, building for the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
              className="mt-10 flex flex-col flex-wrap gap-4 border-t border-border pt-10 sm:flex-row"
            >
              {trustSignals.map((signal) => (
                <motion.div
                  key={signal}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="text-sm font-medium text-accent"
                >
                  {signal}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: easeOutExpo }}
            >
              <span className="text-label mb-6 block">Tech Stack</span>
              <div className="flex flex-wrap gap-3">
                {expertiseTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    custom={i}
                    variants={tagVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      backgroundColor: "var(--accent-subtle)",
                      transition: { duration: 0.18 },
                    }}
                    className="tag cursor-default px-4 py-2 text-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
