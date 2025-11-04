'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface CaseStudyCardProps {
  slug: string
  title: string
  shortDesc: string
  headlineMetric: string
  stack: string[]
  image?: string
  locale?: string
}

export function CaseStudyCard({
  slug,
  title,
  shortDesc,
  headlineMetric,
  stack,
  image,
}: CaseStudyCardProps) {
  return (
    <Link href={`/work/${slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card className="h-full glass hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all group overflow-hidden">
          {image && (
            <div className="h-48 bg-gradient-to-br from-primary/20 to-brand-cyan/20 relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
            </div>
          )}
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                {title}
              </h3>
              <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{shortDesc}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-2xl font-bold text-primary">{headlineMetric}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="glass" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {stack.length > 4 && (
                <Badge variant="glass" className="text-xs">
                  +{stack.length - 4}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
