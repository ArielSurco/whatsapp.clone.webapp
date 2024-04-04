'use client'

import { useState } from 'react'

import { useChat } from '@/chat/context/ChatContext'
import { Input } from '@/shared/components/Input'

import { SendMessage } from '../icons/SendMessage'

export const ChatFooter = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const { sendMessage } = useChat()

  const handleSendMessage = async () => {
    if (inputValue) {
      await sendMessage(inputValue)
      setInputValue('')
    }
  }

  return (
    <footer className='flex h-16 items-center gap-4 bg-primary-550 px-4 py-[10px]'>
      <Input onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
      <button className='h-fit w-fit' onClick={handleSendMessage}>
        <SendMessage className='text-light-700' height={24} width={24} />
      </button>
    </footer>
  )
}
