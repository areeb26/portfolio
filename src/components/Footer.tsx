"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";

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
    <footer className="py-12 border-t border-border relative">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left */}
          <div>
            <div className="text-lg font-medium mb-1">Areeb Ahmed Khan</div>
            <p className="text-sm text-foreground-muted">
              © 2026 · All rights reserved
            </p>
          </div>

          {/* Center - Nav */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors link-hover"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right - Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:bg-accent transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
