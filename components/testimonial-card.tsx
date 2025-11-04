'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  author: string
  role: string
  content: string
  rating: number
  result: string
}

export function TestimonialCard({
  author,
  role,
  content,
  rating,
  result,
}: TestimonialCardProps) {
  return (
    <Card className="glass h-full">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>

        <p className="text-sm leading-relaxed">{content}</p>

        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{author}</p>
              <p className="text-xs text-muted-foreground">{role}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-primary">{result}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
