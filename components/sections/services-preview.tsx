'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import services from '@/data/services.json'

export function ServicesPreview() {
  const t = useTranslations('services')
  const locale = useLocale()

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" variant="glass">
              {t('viewAll')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
