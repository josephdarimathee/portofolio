import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/cv',
  },
}

export default function CvLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
