"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/areebkhan", icon: LinkedinIcon },
  { name: "GitHub", href: "https://github.com/areeb26", icon: GithubIcon },
  { name: "Instagram", href: "https://instagram.com/AreebNarrates", icon: InstagramIcon },
];

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="mb-1 text-lg font-medium">Areeb Ahmed Khan</div>
            <p className="text-sm text-foreground-muted">
              Copyright 2026 / All rights reserved
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="link-hover text-sm text-foreground-muted transition-colors hover:text-foreground">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted transition-colors hover:text-foreground"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-colors duration-300 hover:bg-accent"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
