import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { cn } from '@/shared/utils/classNames'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Whatsapp Clone',
  description: 'An attempt of creating a whatsapp clone using Next.js',
}

export default function RootLayout({
  children,
  // chatsPreview,
}: Readonly<{
  children: React.ReactNode
  chatsPreview: ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'bg-primary-700')}>
        <div className='flex min-h-screen w-screen'>
          {/* <section className='h-screen w-2/5 min-w-80 max-w-[440px] border-r border-r-light-500 border-opacity-25 bg-primary-700'>
            <div className='flex h-[60px] w-full items-center gap-2 bg-primary-550 px-4 py-[10px] text-light-300'>
              <ProfilePicture alt='User profile picture' size={40} src='' />
              Usuario
            </div>
            {chatsPreview}
          </section> */}
          <main className='grow bg-primary-525'>{children}</main>
        </div>
      </body>
    </html>
  )
}
