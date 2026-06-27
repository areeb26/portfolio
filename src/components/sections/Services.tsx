"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { ArrowUpRight, Bot, Code2, Rss, Smartphone } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/itsareebahmedkhan/30min";
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    id: 1,
    icon: Bot,
    title: "AI Automation Systems",
    tagline: "Replace manual work with intelligent workflows",
    features: ["n8n Pipelines", "API Integrations", "Scheduled Jobs"],
  },
  {
    id: 2,
    icon: Smartphone,
    title: "WhatsApp Business Bots",
    tagline: "Booking, support, sales — all on WhatsApp",
    features: ["Meta Business API", "Booking Flows", "Payment Links"],
  },
  {
    id: 3,
    icon: Code2,
    title: "Full-Stack AI Apps",
    tagline: "From idea to deployed product in weeks",
    features: ["Next.js", "FastAPI", "Claude AI"],
  },
  {
    id: 4,
    icon: Rss,
    title: "Content Automation",
    tagline: "AI-powered content pipelines at scale",
    features: ["Social Auto-Post", "Script Generation", "Reel Clipping"],
  },
];

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
}

function MagneticCard({ children, className = "" }: MagneticCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((event.clientX - rect.left - rect.width / 2) * 0.08);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.08);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotate: -1, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

export function Services() {
  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,var(--background-alt),transparent)]" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="grid-editorial mb-16 md:mb-24"
        >
          <div>
            <span className="text-label mb-4 block">Services</span>
            <h2 className="text-headline">
              What I can
              <br />
              <em className="not-italic accent-text">build</em> for you
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-body max-w-md">
              From intelligent automations to production-ready AI apps — solutions
              that transform how your business operates.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <MagneticCard className="h-full">
                  <article className="group relative flex h-full min-h-[280px] flex-col overflow-hidden border border-[var(--border)] bg-[oklch(98%_0.01_72_/_0.72)] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-[var(--foreground)]">
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20" />
                    <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="relative z-10 mb-7 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center border border-[var(--border)] bg-[var(--accent-subtle)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-6xl leading-none tracking-[-0.06em] text-[var(--neutral-300)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="relative z-10 mb-2 text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]">
                      {service.title}
                    </h3>
                    <p className="relative z-10 mb-6 flex-1 text-foreground-muted">
                      {service.tagline}
                    </p>

                    <div className="relative z-10 mb-7 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="tag">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground-muted transition-colors hover:text-[var(--accent)]"
                    >
                      Book a Call
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </article>
                </MagneticCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
