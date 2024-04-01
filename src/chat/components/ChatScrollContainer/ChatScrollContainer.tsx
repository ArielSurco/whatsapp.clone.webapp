'use client'

import { ReactNode, useCallback, useEffect, useRef } from 'react'

import { useChat } from '@/chat/context/ChatContext'
import { windowExists } from '@/shared/utils/windowExists'

import { Spinner } from '../icons/Spinner'

interface Props {
  children: ReactNode
}

export const ChatScrollContainer = ({ children }: Props) => {
  const { isLoading, fetchMoreMessages } = useChat()
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(async () => {
    if (!scrollRef.current) return
    const { scrollHeight, scrollTop, offsetHeight } = scrollRef.current

    const isAtTop = scrollHeight + scrollTop === offsetHeight

    if (isAtTop && !isLoading) {
      fetchMoreMessages()
    }
  }, [isLoading])

  useEffect(() => {
    if (!windowExists()) return () => {}

    scrollRef.current?.addEventListener('scroll', handleScroll)

    return () => {
      scrollRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main
      className='flex w-full grow flex-col-reverse overflow-auto bg-chat-pattern px-10 pt-3 scrollbar'
      ref={scrollRef}
    >
      {children}
      {isLoading && (
        <div className='relative -bottom-10 flex w-full justify-center' role='status'>
          <div className='rounded-full bg-primary-525 p-2'>
            <Spinner />
          </div>
        </div>
      )}
    </main>
  )
}
