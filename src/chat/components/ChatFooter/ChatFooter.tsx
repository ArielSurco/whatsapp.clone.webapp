'use client'

import { useState } from 'react'

import { useChat } from '@/chat/context/ChatContext'

import { ChatInput } from '../ChatInput/ChatInput'
import { SendMessage } from '../icons/SendMessage'

export const ChatFooter = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const { sendMessage } = useChat()

  const handleSendMessage = () => {
    if (inputValue) {
      sendMessage(inputValue)
    }
  }

  return (
    <footer className='flex h-16 items-center gap-4 bg-primary-550 px-4 py-[10px]'>
      <ChatInput onChange={(event) => setInputValue(event.target.value)} />
      <button className='h-fit w-fit' onClick={handleSendMessage}>
        <SendMessage className='text-light-500' height={24} width={24} />
      </button>
    </footer>
  )
}
