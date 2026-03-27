import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/skill',
  },
}

export default function SkillLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
