'use client'

import type { Message as IMessage } from '@/chat/types/Message'

import { useChat } from '@/chat/context/ChatContext'

import { Message } from '../Message/Message'

const getGroupedPosition = (
  messages: IMessage[],
  index: number,
): 'first' | 'middle' | 'last' | undefined => {
  const message = messages[index]

  // messages[index + 1] is the previous message because the messages are reversed
  const isPreviousMessageFromSameSender = messages[index + 1]?.sender.id === message.sender.id

  // messages[index - 1] is the next message because the messages are reversed
  const isNextMessageFromSameSender = messages[index - 1]?.sender.id === message.sender.id

  if (!isPreviousMessageFromSameSender && isNextMessageFromSameSender) {
    return 'first'
  }

  if (isPreviousMessageFromSameSender && isNextMessageFromSameSender) {
    return 'middle'
  }

  if (isPreviousMessageFromSameSender && !isNextMessageFromSameSender) {
    return 'last'
  }

  return undefined
}

export const ChatMessages = () => {
  const { messages, chat } = useChat()

  return messages.map((message, index) => (
    <Message
      groupedPosition={getGroupedPosition(messages, index)}
      isGroupChat={Boolean(chat?.isGroup)}
      isOwnMessage={message.isOwn}
      key={message.id}
      message={message.message}
      sender={message.sender}
      sentAt={message.sentAt}
    />
  ))
}
