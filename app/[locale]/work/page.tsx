'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { CaseStudyCard } from '@/components/case-study-card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import caseStudies from '@/data/case-studies.json'

export default function WorkPage() {
  const t = useTranslations('work')
  const locale = useLocale()
  const [filter, setFilter] = useState('all')

  const filteredStudies =
    filter === 'all'
      ? caseStudies
      : caseStudies.filter((study) => study.outcomes.includes(filter))

  return (
    <div className="py-32">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case Studies"
          subtitle="Real problems solved with intelligent automation"
          align="center"
          className="mb-16"
        />

        <Tabs defaultValue="all" className="mb-12" onValueChange={setFilter}>
          <TabsList className="mx-auto w-fit">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="time_saved">Time Saved</TabsTrigger>
            <TabsTrigger value="support_reduction">Support Reduction</TabsTrigger>
            <TabsTrigger value="conversion_increase">Conversion Lift</TabsTrigger>
          </TabsList>

          <TabsContent value={filter} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CaseStudyCard
                    slug={study.slug}
                    title={locale === 'ur' ? study.title_ur : study.title_en}
                    shortDesc={
                      locale === 'ur' ? study.shortDesc_ur : study.shortDesc_en
                    }
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
