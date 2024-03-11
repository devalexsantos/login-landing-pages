import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Login Informática - Landing Pages',
  description: 'Páginas promocionais da Login Informática.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={lato.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
