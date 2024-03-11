import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login Informática - Corporate',
  description: 'Um mundo de tecnologia para sua empresa.',
}

export default function CorporateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
