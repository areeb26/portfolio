'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function LanguageSwitch() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ur' : 'en'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    document.documentElement.dir = newLocale === 'ur' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLocale
    router.push(newPath)
  }

  return (
    <Button variant="ghost" size="sm" onClick={switchLanguage}>
      {locale === 'en' ? 'اردو' : 'EN'}
    </Button>
  )
}
