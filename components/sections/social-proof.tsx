'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

const clients = [
  'Sarf Ki Dunya',
  'Nahw Ki Dunya',
  'Seerat Ki Dunya',
  'EdTech Platform',
  'Service Marketplace',
]

export function SocialProof() {
  const t = useTranslations('socialProof')

  return (
    <section className="py-20 border-y border-border/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            {t('title')}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {clients.map((client, index) => (
              <div
                key={client}
                className="text-lg md:text-xl font-heading font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {client}
              </div>
            ))}
          </motion.div>

          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </section>
  )
}
