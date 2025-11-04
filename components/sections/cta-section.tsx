'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity. Starter automations take 1-2 weeks, Growth stacks take 3-5 weeks, and Enterprise AI systems take 6-10 weeks. We provide detailed timelines during discovery calls.',
  },
  {
    question: 'What tools do you work with?',
    answer:
      'Primary stack includes n8n, WhatsApp Business API, Postgres with pgvector, Firebase, Qdrant, and various AI APIs (OpenAI, Anthropic, DeepInfra). I choose tools based on your specific needs and constraints.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. All packages include initial support (2-12 weeks depending on tier). I also offer monthly maintenance plans for ongoing updates, monitoring, and improvements.',
  },
  {
    question: 'Can you work with our existing systems?',
    answer:
      'Absolutely. Most projects involve integrating with existing tools, databases, and APIs. I ensure smooth integration without disrupting current operations.',
  },
]

export function CTASection() {
  const t = useTranslations('cta')

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">{t('title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="xl" className="group">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('button')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/work">
                <Button size="xl" variant="glass">
                  View Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
