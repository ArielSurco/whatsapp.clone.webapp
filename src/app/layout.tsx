import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Inter } from 'next/font/google'

import { cn } from '@/shared/utils/classNames'

import { GlobalProviders } from './GlobalProviders'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Whatsapp Clone',
  description: 'An attempt of creating a whatsapp clone using Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-primary-700')}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  )
}
