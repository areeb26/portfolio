'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { TestimonialCard } from '@/components/testimonial-card'
import testimonials from '@/data/testimonials.json'

export function TestimonialsSection() {
  const t = useTranslations('testimonials')
  const locale = useLocale()

  return (
    <section className="py-32 bg-gradient-to-b from-brand-purple/5 to-transparent">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <TestimonialCard
                author={locale === 'ur' ? testimonial.author_ur : testimonial.author_en}
                role={locale === 'ur' ? testimonial.role_ur : testimonial.role_en}
                content={
                  locale === 'ur' ? testimonial.content_ur : testimonial.content_en
                }
                rating={testimonial.rating}
                result={testimonial.result}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
