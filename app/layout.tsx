import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amrish Puri Goswami — Generative AI & Machine Learning',
  description: 'Portfolio of Amrish Puri Goswami, a Computer Science student building grounded AI, RAG systems, and practical machine-learning projects.',
  openGraph: {
    title: 'Amrish Puri Goswami — AI / ML Portfolio',
    description: 'Generative AI, retrieval systems, and useful machine-learning products.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amrish Puri Goswami — AI / ML Portfolio',
    description: 'Generative AI, retrieval systems, and useful machine-learning products.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f0e8' },
    { media: '(prefers-color-scheme: dark)', color: '#171b16' },
  ],
}

const themeInitScript = `(() => {
  let savedTheme = null
  try {
    savedTheme = localStorage.getItem('amrish-theme')
  } catch {}
  const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  const root = document.documentElement
  root.classList.toggle('dark', isDark)
  root.dataset.theme = isDark ? 'dark' : 'light'
  document.body.classList.toggle('dark', isDark)
})()`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
