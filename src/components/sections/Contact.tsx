"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setIsSubmitted(true);
      toast.success("Message sent! I'll get back to you soon.");
      
      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/areebkhan", icon: LinkedinIcon },
    { name: "GitHub", href: "https://github.com/areebkhan", icon: GithubIcon },
    { name: "Instagram", href: "https://instagram.com/AreebNarrates", icon: InstagramIcon },
  ];

  return (
    <section id="contact" className="section bg-foreground text-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-6 block">
              Contact
            </span>
            <h2 className="text-headline text-background mb-8">
              Let&apos;s build
              <br />
              something <em className="not-italic text-accent-light">great</em>
            </h2>
            
            <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-md">
              Have a project in mind? I&apos;d love to hear about it. 
              Drop me a message and let&apos;s make it happen.
            </p>

            {/* Social links */}
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block">
                Connect
              </span>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-neutral-700 flex items-center justify-center hover:bg-background hover:border-background transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5 text-neutral-400 group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-neutral-700 py-3 text-background placeholder:text-neutral-600 focus:border-background focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-neutral-700 py-3 text-background placeholder:text-neutral-600 focus:border-background focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="text-xs font-semibold tracking-widest uppercase text-neutral-500 block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full bg-transparent border-b border-neutral-700 py-3 text-background placeholder:text-neutral-600 focus:border-background focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 font-medium text-sm hover:bg-neutral-200 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
