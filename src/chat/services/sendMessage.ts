import type { Message } from '../types/Message'

import { z } from 'zod'

import { api } from '@/shared/services/api'
import { getServerUserId } from '@/shared/utils/getServerUserId'
import { validateSchema } from '@/shared/utils/services'

const responseSchema = z.object({
  id: z.string(),
  text: z.string(),
  sender: z.object({
    id: z.string(),
    username: z.string(),
  }),
  createdAt: z.string(),
})

export const sendMessage = async (chatId: string, message: string): Promise<Message> => {
  const response = await api.post(`/chats/${chatId}/messages`, {
    body: {
      text: message,
    },
  })

  const data = await validateSchema(responseSchema, response)

  const userId = await getServerUserId()

  const newMessage: Message = {
    id: data.id,
    message: data.text,
    sentAt: data.createdAt,
    sender: {
      id: data.sender.id,
      name: data.sender.username,
      img: '',
    },
    isOwn: userId === data.sender.id,
  }

  return newMessage
}
