import createMiddleware from 'next-intl/middleware'
import { locales } from './lib/i18n/request'

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})

export const config = {
  matcher: ['/', '/(en|ur)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
