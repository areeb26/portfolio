'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { MessageSquare, Workflow, Database, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'

const systems = [
  {
    icon: MessageSquare,
    titleKey: 'system1Title',
    descKey: 'system1Desc',
  },
  {
    icon: Workflow,
    titleKey: 'system2Title',
    descKey: 'system2Desc',
  },
  {
    icon: Database,
    titleKey: 'system3Title',
    descKey: 'system3Desc',
  },
  {
    icon: Search,
    titleKey: 'system4Title',
    descKey: 'system4Desc',
  },
]

export function Systems() {
  const t = useTranslations('systems')

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((system, index) => {
            const Icon = system.icon
            return (
              <motion.div
                key={system.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full glass hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-heading">
                      {t(system.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t(system.descKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
