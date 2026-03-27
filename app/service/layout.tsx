import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/service',
  },
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
