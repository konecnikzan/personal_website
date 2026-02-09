import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { WEBSITE_URL } from '@/lib/constants'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Žan Konečnik',
    template: '%s | Žan Konečnik',
  },
  description:
    'Custom-built web solutions paired with data-backed digital marketing — designed to get results, not just clicks.',
  keywords: [
    'web development',
    'digital marketing',
    'freelance developer',
    'Slovenia',
    'web design',
    'SEO',
  ],
  authors: [{ name: 'Žan Konečnik', url: WEBSITE_URL }],
  creator: 'Žan Konečnik',
  openGraph: {
    type: 'website',
    url: WEBSITE_URL,
    siteName: 'Žan Konečnik',
    title: 'Žan Konečnik — Web Development & Digital Marketing',
    description:
      'Custom-built web solutions paired with data-backed digital marketing — designed to get results, not just clicks.',
    locale: 'en',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Žan Konečnik — Web Development & Digital Marketing',
    description:
      'Custom-built web solutions paired with data-backed digital marketing — designed to get results, not just clicks.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Add when you have them: google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Žan Konečnik',
  url: WEBSITE_URL,
  description:
    'Custom-built web solutions paired with data-backed digital marketing — designed to get results, not just clicks.',
  jobTitle: 'Web Developer & Digital Marketing',
  knowsAbout: ['Web Development', 'Digital Marketing', 'Web Design', 'SEO'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="apple-mobile-web-app-title" content="Žan Konečnik" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>

          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
