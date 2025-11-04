'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import services from '@/data/services.json'

const faqs = [
  {
    question: 'How do I choose the right package?',
    answer:
      'Start with a discovery call. We\'ll discuss your goals, pain points, and constraints. If you have a single repetitive task, Starter is perfect. For systematic automation across multiple workflows, Growth is ideal. Enterprise is for AI-powered systems with retrieval and intelligence.',
  },
  {
    question: 'What\'s included in support?',
    answer:
      'Support includes bug fixes, minor adjustments, monitoring, and guidance on using the system. It does not include new features or major scope changes. Extended support plans are available for ongoing maintenance.',
  },
  {
    question: 'Can I upgrade later?',
    answer:
      'Absolutely. Many clients start with Starter and upgrade to Growth or Enterprise as their needs evolve. We design systems to be scalable and extensible.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. Most work is done remotely with async communication and scheduled calls. I work with clients globally across different time zones.',
  },
  {
    question: 'What if I already have automation in place?',
    answer:
      'Perfect. I can audit your current setup, optimize existing workflows, or extend them with new capabilities. Many projects involve improving or scaling existing automation.',
  },
]

export default function ServicesPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  return (
    <div className="py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help"
          subtitle="Packaged offerings designed for impact. All packages include discovery, implementation, testing, documentation, and support."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ServiceCard
                name={locale === 'ur' ? service.name_ur : service.name_en}
                tier={service.tier}
                shortDesc={locale === 'ur' ? service.shortDesc_ur : service.shortDesc_en}
                priceRange={service.priceRange}
                timeline={service.timeline}
                outcomes={locale === 'ur' ? service.outcomes_ur : service.outcomes_en}
                bestFor={locale === 'ur' ? service.bestFor_ur : service.bestFor_en}
              />
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
