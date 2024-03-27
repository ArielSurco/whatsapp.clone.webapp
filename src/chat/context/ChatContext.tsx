'use client'

import type { Message } from '../types/Message'

import { createContext, ReactNode, useContext, useState } from 'react'

import { sleep } from '@/shared/utils/adapters'
import { getRandomUserName } from '@/shared/utils/mockData'

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
    const userName = getRandomUserName()

    await sleep(1000)

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        sender: {
          id: userName,
          name: userName,
          img: '',
        },
        message,
        sentAt: new Date().toISOString(),
      },
    ])
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
