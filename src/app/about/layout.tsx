import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi sono',
  description:
    'Sono Marco Riformato. Vivo nella campagna elbana, dove sviluppo il futuro.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 