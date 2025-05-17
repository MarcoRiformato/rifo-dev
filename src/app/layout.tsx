import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Marco Riformato',
    default:
      'Marco Riformato - Sviluppatore web, project manager e consulente digitale',
  },
  description:
    'Sono Marco Riformato, sviluppatore web e consulente digitale. Porto online idee di business con metodo e velocità, facendo salire il traffico e trasformando i click in clienti. Do visibilità alle attività locali su Google e sulle mappe.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
