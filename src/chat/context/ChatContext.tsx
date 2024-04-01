'use client'

import type { Message } from '../types/Message'

import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

import { getChatMessages } from '../services/getChatMessages'
import { sendMessage as sendMessageService } from '../services/sendMessage'
import { ChatDetail } from '../types/ChatDetail'
import { Pagination } from '../types/Pagination'

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
  initialPagination: Pagination
}

export const ChatContext = createContext<ChatContext | null>(null)

export const ChatProvider = ({
  children,
  initialMessages,
  initialChatDetail,
  initialPagination,
}: ChatProviderProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [chatDetail] = useState<ChatDetail | null>(initialChatDetail)
  const [isLoading, setIsLoading] = useState(false)
  const [pagination, setPagination] = useState<Pagination>(initialPagination)

  const sendMessage = async (message: string) => {
    const newMessage = await sendMessageService(chatDetail?.id ?? '', message)

    setMessages((prevMessages) => [...prevMessages, newMessage])
  }

  const fetchMoreMessages = useCallback(async () => {
    if (!pagination.hasMore) return

    setIsLoading(true)

    const response = await getChatMessages(
      chatDetail?.id ?? '',
      pagination.offset,
      pagination.limit,
    )

    setMessages((prevMessages) => [...response.messages, ...prevMessages])
    setPagination(response.pagination)

    setIsLoading(false)
  }, [chatDetail?.id, pagination])

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
