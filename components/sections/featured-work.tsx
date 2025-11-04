'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { CaseStudyCard } from '@/components/case-study-card'
import caseStudies from '@/data/case-studies.json'

export function FeaturedWork() {
  const t = useTranslations('work')
  const locale = useLocale()

  const featured = caseStudies.filter((study) => study.featured)

  return (
    <section className="py-32 bg-gradient-to-b from-transparent to-brand-purple/5">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CaseStudyCard
                slug={study.slug}
                title={locale === 'ur' ? study.title_ur : study.title_en}
                shortDesc={locale === 'ur' ? study.shortDesc_ur : study.shortDesc_en}
                headlineMetric={
                  locale === 'ur' ? study.headlineMetric_ur : study.headlineMetric
                }
                stack={study.stack}
                image={study.image}
                locale={locale}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/work">
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
