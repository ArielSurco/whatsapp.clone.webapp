'use client'

import { ReactNode, useEffect, useRef } from 'react'

import { useChat } from '@/chat/context/ChatContext'
import { windowExists } from '@/shared/utils/windowExists'

interface Props {
  children: ReactNode
}

export const ChatScrollContainer = ({ children }: Props) => {
  const { isLoading, fetchMoreMessages } = useChat()
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = async () => {
    if (!scrollRef.current) return
    const { scrollHeight, scrollTop, offsetHeight } = scrollRef.current

    const isAtTop = scrollHeight + scrollTop === offsetHeight

    if (isAtTop) {
      fetchMoreMessages()
    }
  }

  useEffect(() => {
    if (!windowExists()) return () => {}

    scrollRef.current?.addEventListener('scroll', handleScroll)

    return () => {
      scrollRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main
      className='scrollbar flex w-full grow flex-col-reverse overflow-auto bg-chat-pattern px-10 pt-3'
      ref={scrollRef}
    >
      {children}
      {isLoading && <p className='relative flex w-full justify-center'>Loading...</p>}
    </main>
  )
}
