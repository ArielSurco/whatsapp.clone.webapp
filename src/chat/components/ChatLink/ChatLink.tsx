'use client'

import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ComponentPropsWithoutRef, useMemo } from 'react'

import { cn } from '@/shared/utils/classNames'

interface Props extends Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> {
  chatId: string
}

const linkStyles = cva(['text-light-700 bg-primary-700 hover:bg-primary-550'], {
  variants: {
    isActive: {
      true: 'text-light-300 bg-primary-400 hover:bg-primary-400',
    },
  },
})

const getActiveChatId = (path: string): string => {
  const isChatPath = path.startsWith('/chat/')

  const chatId = isChatPath ? path.split('/')[2] : ''

  return chatId
}

export const ChatLink = ({ children, chatId, className, ...props }: Props) => {
  const pathname = usePathname()
  const isActive = useMemo<boolean>(() => getActiveChatId(pathname) === chatId, [pathname, chatId])

  return (
    <Link className={cn(linkStyles({ isActive }), className)} href={`/chat/${chatId}`} {...props}>
      {children}
    </Link>
  )
}
