import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '@/styles/globals.css'

// Note: Using system fonts for build.
// In production, replace with Google Fonts: Inter, Space Grotesk, JetBrains Mono

export const metadata: Metadata = {
  title: 'Areeb Ahmed Khan - AI Automation Architect',
  description:
    'AI automation architect, product builder, and problem solver. Building intelligent systems that save time and scale operations.',
  keywords: [
    'AI automation',
    'n8n',
    'WhatsApp automation',
    'vector search',
    'pgvector',
    'automation architect',
  ],
  authors: [{ name: 'Areeb Ahmed Khan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://areebkhan.com',
    title: 'Areeb Ahmed Khan - AI Automation Architect',
    description: 'Building intelligent automation systems that save time and scale operations.',
    siteName: 'Areeb Ahmed Khan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areeb Ahmed Khan - AI Automation Architect',
    description: 'Building intelligent automation systems that save time and scale operations.',
  },
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      dir={locale === 'ur' ? 'rtl' : 'ltr'}
      className="dark"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
