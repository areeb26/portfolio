"use client";

import { motion, type Variants } from "framer-motion";
import { Bot, Link2, Mic, Scissors, Smartphone, Users } from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

const CALENDLY_URL = "https://calendly.com/itsareebahmedkhan/30min";
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

const bentoItems: BentoItem[] = [
  {
    title: "Certificate Automation System",
    description:
      "FastAPI + n8n pipeline generates personalised certificates, uploads to Cloudinary, and delivers verified URLs — 12 seconds per cert, 3,000 certs processed.",
    icon: <Bot />,
    status: "400 hrs saved",
    meta: "3,000+ certificates · 400 hrs eliminated",
    tags: ["FastAPI", "Postgres", "n8n", "Cloudinary"],
    cta: "Book a similar build",
    ctaHref: CALENDLY_URL,
    colSpan: 2,
  },
  {
    title: "WhatsApp AI Education Bot",
    description:
      "Arabic grammar Q&A bot for SarfKiDunya and NahwKiDunya. Matches questions across 5,000+ records, summarises with AI, served reliably at scale.",
    icon: <Users />,
    status: "15,000+ daily users",
    meta: "15k users · live daily",
    tags: ["n8n", "Claude AI", "WhatsApp API"],
    cta: "Build mine",
    ctaHref: CALENDLY_URL,
    colSpan: 1,
  },
  {
    title: "WhatsApp Service Booking Bot",
    description:
      "Full end-to-end booking on WhatsApp — browse services, select workers, receive payment URLs. No app download needed.",
    icon: <Smartphone />,
    status: "End-to-end flow",
    meta: "Bookings · Payments · Notifications",
    tags: ["Meta WhatsApp API", "n8n", "Firebase"],
    cta: "Book a call",
    ctaHref: CALENDLY_URL,
    colSpan: 1,
  },
  {
    title: "LinkedIn Outreach Automation",
    description:
      "Personalised connection + follow-up sequences on LinkedIn. 12 pilot users running it daily, saving hours every week.",
    icon: <Link2 />,
    status: "12 pilots live",
    meta: "5–10 hrs/week saved per user",
    tags: ["n8n", "Webhooks", "Claude AI"],
    cta: "Book a call",
    ctaHref: CALENDLY_URL,
    colSpan: 1,
  },
  {
    title: "Conversational AI Voice Agent",
    description:
      "Open-source ElevenLabs alternative — custom prompts, live call switching, conversation logs, and webhook integrations. Fully self-hosted.",
    icon: <Mic />,
    status: "Open source",
    meta: "FastAPI · Claude AI · Webhooks",
    tags: ["FastAPI", "Claude AI", "Python"],
    cta: "Discuss a project",
    ctaHref: CALENDLY_URL,
    colSpan: 1,
  },
  {
    title: "AI Video Clipper Tool",
    description:
      "Feed a YouTube link or video file — Whisper AI identifies the best moments, cuts viral-ready clips, and applies captions automatically. Minutes, not hours.",
    icon: <Scissors />,
    status: "In production",
    meta: "Video → reels in minutes",
    tags: ["Python", "Whisper AI", "FFmpeg", "n8n"],
    cta: "Build for my content",
    ctaHref: CALENDLY_URL,
    colSpan: 3,
  },
];

export function Projects() {
  return (
    <section id="work" className="section relative overflow-hidden">
      <div className="absolute inset-x-0 top-24 h-56 bg-[radial-gradient(circle_at_center,oklch(51%_0.18_32_/_0.12),transparent_55%)]" />
      <div className="container relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid-editorial mb-16 md:mb-24"
        >
          <div>
            <span className="text-label mb-4 block">Selected Work</span>
            <h2 className="text-headline">
              Projects that
              <br />
              <em className="not-italic accent-text">deliver</em> results
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-body max-w-md">
              Real automations and AI systems built for real businesses — each
              with metrics to prove it.
            </p>
          </div>
        </motion.div>

        <BentoGrid items={bentoItems} />
      </div>
    </section>
  );
}
