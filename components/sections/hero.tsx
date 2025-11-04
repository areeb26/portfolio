'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Metric } from '@/components/metric'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            {/* Greeting */}
            <div className="text-muted-foreground">{t('greeting')}</div>

            {/* Name Lockup */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold">
              <span className="bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-purple bg-clip-text text-transparent animate-glow">
                {t('name')}
              </span>
            </h1>

            {/* Taglines */}
            <div className="text-xl md:text-2xl lg:text-3xl space-y-2 text-muted-foreground">
              <p>{t('tagline1')}</p>
              <p>{t('tagline2')}</p>
              <p>{t('tagline3')}</p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="xl" className="group">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('ctaPrimary')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/work">
                <Button size="xl" variant="glass">
                  {t('ctaSecondary')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16"
            >
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary">
                  500+
                </div>
                <div className="text-sm text-muted-foreground mt-2">{t('metric1Sub')}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary">
                  100+
                </div>
                <div className="text-sm text-muted-foreground mt-2">{t('metric2Sub')}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary">
                  15k+
                </div>
                <div className="text-sm text-muted-foreground mt-2">{t('metric3Sub')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
