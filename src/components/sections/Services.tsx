"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { BlurFade } from "@/components/ui/blur-fade";

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        {/* Header */}
        <div className="grid-editorial mb-16 md:mb-24">
          <BlurFade delay={0.1} inView>
            <div>
              <span className="text-label mb-4 block">Services</span>
              <h2 className="text-headline">
                What I can
                <br />
                <em className="not-italic accent-text">do</em> for you
              </h2>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView className="flex items-end">
            <div>
              <p className="text-body max-w-md">
                From intelligent automations to production-ready applications—solutions 
                that transform how your business operates.
              </p>
            </div>
          </BlurFade>
        </div>

        {/* Services grid - 2 columns with numbers */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <BlurFade key={service.id} delay={0.1 + index * 0.1} inView yOffset={15}>
                <article className="group">
                  <div className="flex gap-6">
                    {/* Number */}
                    <div className="text-5xl font-light text-neutral-300 leading-none group-hover:text-accent transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-medium mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-foreground-muted leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features as inline list */}
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="tag">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </BlurFade>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <h3 className="text-xl font-medium mb-2">Have a project in mind?</h3>
            <p className="text-foreground-muted">Let&apos;s discuss how I can help.</p>
          </div>
          <a href="#contact" className="btn btn-primary group">
            Get in touch
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
