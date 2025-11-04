'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface MetricProps {
  value: string | number
  label: string
  suffix?: string
  duration?: number
}

export function Metric({ value, label, suffix = '', duration = 2000 }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  const numericValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(numericValue * progress))
        requestAnimationFrame(animateCount)
      } else {
        setCount(numericValue)
      }
    }

    requestAnimationFrame(animateCount)
  }, [isInView, numericValue, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
  )
}
