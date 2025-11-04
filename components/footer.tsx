import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'
import navigation from '@/data/navigation.json'
import social from '@/data/social.json'

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
}

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">{t('tagline')}</p>
            <div className="flex gap-3">
              {social.map((item) => {
                const Icon = iconMap[item.icon]
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label_en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{t('resources')}</h3>
            <ul className="space-y-2">
              {navigation.slice(4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label_en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">{t('connect')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>areeb@example.com</li>
              <li>+92 300 1234567</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Areeb Ahmed Khan. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
