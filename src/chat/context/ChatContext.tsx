'use client'

import type { Message } from '../types/Message'

import { createContext, ReactNode, useContext, useState } from 'react'

import { sendMessage as sendMessageService } from '../services/sendMessage'
import { ChatDetail } from '../types/ChatDetail'

interface ChatContext {
  messages: Message[]
  chat: ChatDetail | null
  sendMessage: (message: string) => Promise<void>
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

  const sendMessage = async (message: string) => {
    const newMessage = await sendMessageService(chatDetail?.id ?? '', message)

    setMessages((prevMessages) => [...prevMessages, newMessage])
  }

  return (
    <ChatContext.Provider value={{ messages, chat: chatDetail, sendMessage }}>
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
