import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : '',
        className
      )}
    >
      {eyebrow && (
        <div className="inline-block">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground text-balance">{subtitle}</p>
      )}
    </div>
  )
}
