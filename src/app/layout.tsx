import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://areebkhan.dev"),
  title: {
    default: "Areeb Khan | AI Automation & Full-Stack",
    template: "%s | Areeb Khan",
  },
  description:
    "I build AI systems that work while you sleep. n8n automations, AI agents, and full-stack applications.",
  keywords: [
    "AI Automation",
    "n8n",
    "Full-Stack Developer",
    "AI Agents",
    "Claude AI",
    "Next.js",
    "Workflow Automation",
    "Areeb Khan",
  ],
  authors: [{ name: "Areeb Khan", url: "https://areebkhan.dev" }],
  creator: "Areeb Khan",
  publisher: "Areeb Khan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://areebkhan.dev",
    siteName: "Areeb Khan",
    title: "Areeb Khan | AI Automation & Full-Stack",
    description:
      "I build AI systems that work while you sleep.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Areeb Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Areeb Khan | AI Automation & Full-Stack",
    description: "I build AI systems that work while you sleep.",
    images: ["/og-image.svg"],
    creator: "@AreebNarrates",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased noise">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
