"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Bot, Smartphone, Code2, Rss } from "lucide-react";

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
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.06,
      y: (e.clientY - rect.top - rect.height / 2) * 0.06,
    });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

export function Services() {
  return (
    <section id="services" className="section">
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

        {/* Magnetic Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <MagneticCard className="h-full">
                  <article className="glass-card rounded-2xl p-8 group hover:-translate-y-1 hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground-muted mb-5 leading-relaxed flex-1">
                      {service.tagline}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((f) => (
                        <span key={f} className="tag">{f}</span>
                      ))}
                    </div>

                    {/* Micro CTA */}
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-sm font-medium text-foreground-muted hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      → Book a Call
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
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
