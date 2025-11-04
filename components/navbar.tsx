'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSwitch } from '@/components/language-switch'
import { cn } from '@/lib/utils'
import navigation from '@/data/navigation.json'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('nav')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLabelForLocale = (item: any) => {
    return locale === 'ur' ? item.label_ur : item.label_en
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {getLabelForLocale(item)}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                // Command palette trigger
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                  ctrlKey: true,
                })
                document.dispatchEvent(event)
              }}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
            <LanguageSwitch />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-primary' : 'text-foreground/80'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {getLabelForLocale(item)}
                </Link>
              )
            })}
            <div className="flex items-center gap-2 pt-2">
              <LanguageSwitch />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
