'use client'

import type { Message } from '../types/Message'

import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

import { sleep } from '@/shared/utils/services'

import { sendMessage as sendMessageService } from '../services/sendMessage'
import { ChatDetail } from '../types/ChatDetail'

interface ChatContext {
  messages: Message[]
  chat: ChatDetail | null
  isLoading: boolean
  sendMessage: (message: string) => Promise<void>
  fetchMoreMessages: () => Promise<void>
}

interface ChatProviderProps {
  children: ReactNode
  initialMessages: Message[]
  initialChatDetail: ChatDetail
}

export const ChatContext = createContext<ChatContext | null>(null)

export const ChatProvider = ({
  children,
  initialMessages,
  initialChatDetail,
}: ChatProviderProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [chatDetail] = useState<ChatDetail | null>(initialChatDetail)
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (message: string) => {
    const newMessage = await sendMessageService(chatDetail?.id ?? '', message)

    setMessages((prevMessages) => [...prevMessages, newMessage])
  }

  const fetchMoreMessages = useCallback(async () => {
    if (isLoading) return

    setIsLoading(true)

    await sleep(5000)

    setIsLoading(false)
  }, [isLoading])

  return (
    <ChatContext.Provider
      value={{ messages, chat: chatDetail, isLoading, sendMessage, fetchMoreMessages }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatContext)

  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }

  return context
}
