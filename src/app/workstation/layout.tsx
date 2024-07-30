import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Login Informática - Workstation',
  description: 'Workstation profissional de alta performance',
  keywords:
    'workstation, computador, desktop, profissional, alta performance, computador para trabalho',
}

export default function CorporateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={montserrat.className}>{children}</div>
}
