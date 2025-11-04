import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { ArrowLeft, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import caseStudies from '@/data/case-studies.json'
import { locales } from '@/lib/i18n/request'

export async function generateStaticParams() {
  const params = []
  for (const locale of locales) {
    for (const study of caseStudies) {
      params.push({ locale, slug: study.slug })
    }
  }
  return params
}

export default function CaseStudyPage({ params }: { params: { slug: string; locale: string } }) {
  setRequestLocale(params.locale)

  const study = caseStudies.find((s) => s.slug === params.slug)
  const locale = params.locale

  if (!study) {
    notFound()
  }

  const title = locale === 'ur' ? study.title_ur : study.title_en
  const problem = locale === 'ur' ? study.problem_ur : study.problem_en
  const solution = locale === 'ur' ? study.solution_ur : study.solution_en
  const results = locale === 'ur' ? study.results_ur : study.results_en

  return (
    <div className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/work">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Button>
          </Link>

          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="purple">{study.industry}</Badge>
                <Badge variant="cyan">{study.client}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold">{title}</h1>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Timeline:</span> {study.timeline}
                </div>
              </div>
            </div>

            {/* Headline Metric */}
            <div className="glass p-8 rounded-lg text-center">
              <div className="text-5xl font-heading font-bold text-primary mb-2">
                {locale === 'ur' ? study.headlineMetric_ur : study.headlineMetric}
              </div>
              <div className="text-sm text-muted-foreground">Key Result</div>
            </div>

            {/* Problem */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{problem}</p>
            </div>

            {/* Solution */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{solution}</p>
            </div>

            {/* Stack */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <Badge key={tech} variant="glass" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold">Results</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{results}</p>
            </div>

            {/* CTA */}
            <div className="glass p-8 rounded-lg text-center space-y-4">
              <h3 className="text-2xl font-heading font-bold">
                Ready to automate your operations?
              </h3>
              <p className="text-muted-foreground">
                Book a discovery call to discuss your automation needs
              </p>
              <Link href="/contact">
                <Button size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
