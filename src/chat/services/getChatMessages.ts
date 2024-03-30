import type { Message } from '../types/Message'

import { z } from 'zod'

import { api } from '@/shared/services/api'
import { getServerUserId } from '@/shared/utils/getServerUserId'
import { validateSchema } from '@/shared/utils/services'

const responseSchema = z.array(
  z.object({
    id: z.string(),
    text: z.string(),
    createdAt: z.string(),
    sender: z.object({
      id: z.string(),
      username: z.string(),
    }),
  }),
)

export const getChatMessages = async (chatId: string): Promise<Message[]> => {
  const response = await api.get(`/chats/${chatId}/messages`)

  const data = await validateSchema(responseSchema, response)

  const userId = await getServerUserId()

  const messages: Message[] = data.map((message) => ({
    id: message.id,
    message: message.text,
    sentAt: message.createdAt,
    sender: {
      id: message.sender.id,
      name: message.sender.username,
      img: '',
    },
    isOwn: userId === message.sender.id,
  }))

  // Reverse the messages to show the latest messages at the bottom us
  return messages.reverse()
}
