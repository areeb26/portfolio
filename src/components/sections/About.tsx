"use client";

import { motion, Variants } from "framer-motion";

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
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOutExpo, delay: i * 0.04 },
  }),
};

export function About() {
  return (
    <section id="about" className="section bg-background-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Bio */}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            >
              <p className="text-xl font-medium text-foreground/80 md:text-2xl leading-relaxed mb-6">
                AI engineer and automation builder. I work with startups and
                businesses to replace slow manual processes with fast, intelligent
                systems.
              </p>
              <p className="text-body">
                I ship fast, I communicate clearly, and I don&apos;t stop until it
                works. Based in Pakistan, building for the world.
              </p>
            </motion.div>

            {/* Trust signals strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
              className="flex flex-col sm:flex-row gap-4 mt-10 pt-10 border-t border-border flex-wrap"
            >
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="text-sm font-medium text-accent"
                >
                  {signal}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Expertise tags */}
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
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="tag cursor-default text-sm px-4 py-2"
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
