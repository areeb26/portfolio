"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Plus, ArrowUpRight, Bot, Smartphone, Code2, Rss } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/itsareebahmedkhan/30min";
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

interface ServiceItem {
  id: number;
  number: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: 1,
    number: "01",
    icon: Bot,
    title: "AI Automation Systems",
    tagline: "Replace manual work with intelligent workflows",
    description:
      "End-to-end automation pipelines that handle repetitive workflows, connect your tools, and run 24/7 without supervision. Built on n8n with custom logic for your exact use case.",
    features: ["n8n Pipelines", "API Integrations", "Scheduled Jobs"],
  },
  {
    id: 2,
    number: "02",
    icon: Smartphone,
    title: "WhatsApp Business Bots",
    tagline: "Booking, support, sales — all on WhatsApp",
    description:
      "Custom WhatsApp experiences that handle customer conversations automatically — from lead capture and booking to payment collection and support escalation via Meta Business API.",
    features: ["Meta Business API", "Booking Flows", "Payment Links"],
  },
  {
    id: 3,
    number: "03",
    icon: Code2,
    title: "Full-Stack AI Apps",
    tagline: "From idea to deployed product in weeks",
    description:
      "Production-ready web applications with AI capabilities baked in. Database design, API architecture, frontend — delivered as a complete, deployable product that scales.",
    features: ["Next.js", "FastAPI", "Claude AI"],
  },
  {
    id: 4,
    number: "04",
    icon: Rss,
    title: "Content Automation",
    tagline: "AI-powered content pipelines at scale",
    description:
      "Automated pipelines that generate, schedule, and post content across platforms. Viral script generation, automated reel clipping, and analytics-driven scheduling.",
    features: ["Social Auto-Post", "Script Generation", "Reel Clipping"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
};

export function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="section bg-[var(--background-alt)]">
      <div className="container">
        {/* Header */}
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

        {/* Accordion list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-[var(--border)]"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = open === service.id;

            return (
              <motion.div
                key={service.id}
                variants={rowVariants}
                className="border-b border-[var(--border)]"
              >
                {/* Row trigger */}
                <button
                  onClick={() => setOpen(isOpen ? null : service.id)}
                  className="w-full flex items-center gap-6 md:gap-10 py-7 md:py-9 text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span className="text-number shrink-0 w-14 select-none transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {service.number}
                  </span>

                  {/* Icon + title + tagline */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <Icon className="w-4 h-4 text-[var(--foreground-muted)] shrink-0" />
                      <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-meta hidden md:block">{service.tagline}</p>
                  </div>

                  {/* Deliverable count */}
                  <span className="hidden md:block text-meta shrink-0">
                    {service.features.length} deliverables
                  </span>

                  {/* Toggle */}
                  <div className="btn-circle shrink-0 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: easeOutExpo }}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                {/* Expandable content — grid-template-rows for perf */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div className="pb-10 pl-[5.5rem] md:pl-[6.5rem] pr-4 md:pr-[5rem]">
                      <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-2">
                        <p className="text-body flex-1">{service.description}</p>
                        <div className="shrink-0 flex flex-col gap-5">
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((f) => (
                              <span key={f} className="tag">{f}</span>
                            ))}
                          </div>
                          <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-arrow text-sm font-medium"
                          >
                            Book a call{" "}
                            <ArrowUpRight className="w-4 h-4 shrink-0" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
