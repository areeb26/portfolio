import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/sections/hero'
import { SocialProof } from '@/components/sections/social-proof'
import { Systems } from '@/components/sections/systems'
import { FeaturedWork } from '@/components/sections/featured-work'
import { ServicesPreview } from '@/components/sections/services-preview'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <SocialProof />
      <Systems />
      <FeaturedWork />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
