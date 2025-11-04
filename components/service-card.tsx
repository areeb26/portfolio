'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ServiceCardProps {
  name: string
  tier: string
  shortDesc: string
  priceRange: string
  timeline: string
  outcomes: string[]
  bestFor: string
}

export function ServiceCard({
  name,
  tier,
  shortDesc,
  priceRange,
  timeline,
  outcomes,
  bestFor,
}: ServiceCardProps) {
  const isEnterprise = tier === 'enterprise'

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card
        className={`h-full flex flex-col ${
          isEnterprise
            ? 'border-primary/50 shadow-lg shadow-primary/10 bg-gradient-to-br from-primary/5 to-transparent'
            : 'glass'
        } hover:border-primary/30 transition-all`}
      >
        <CardHeader>
          {isEnterprise && (
            <Badge variant="purple" className="w-fit mb-2">
              Most Popular
            </Badge>
          )}
          <CardTitle className="text-2xl font-heading">{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{shortDesc}</p>
        </CardHeader>
        <CardContent className="flex-1 space-y-6">
          <div>
            <div className="text-3xl font-bold">{priceRange}</div>
            <div className="text-sm text-muted-foreground">{timeline}</div>
          </div>

          <div className="space-y-3">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex gap-2">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{outcome}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">Best for</p>
            <p className="text-sm mt-1">{bestFor}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={isEnterprise ? 'default' : 'glass'}>
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
