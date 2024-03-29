'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const GlobalProviders = ({ children }: Props) => {
  return <SessionProvider session={null}>{children}</SessionProvider>
}
