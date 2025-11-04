import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CommandPalette } from '@/components/command-palette'

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <div className="noise fixed inset-0 pointer-events-none z-0" />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <CommandPalette />
      </div>
    </div>
  )
}
