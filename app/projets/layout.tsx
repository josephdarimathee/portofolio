import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/projets',
  },
}

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
