import type { ChatPreview } from '../types/ChatPreview'

import { z } from 'zod'

import { api } from '@/shared/services/api'
import { validateSchema } from '@/shared/utils/services'

const responseSchema = z.array(
  z.object({
    name: z.string(),
    id: z.string(),
    isGroup: z.boolean(),
    lastMessage: z
      .object({
        id: z.string(),
        text: z.string(),
        createdAt: z.string(),
        sender: z.object({
          id: z.string(),
          username: z.string(),
        }),
      })
      .nullable(),
  }),
)

export const getChatsPreview = async (): Promise<ChatPreview[]> => {
  const response = await api.get('/chats')

  const data = await validateSchema(responseSchema, response)

  const adaptedData: ChatPreview[] = data.map((chat) => ({
    id: chat.id,
    img: '',
    isGroup: chat.isGroup,
    name: chat.name,
    lastMessage: {
      message: chat.lastMessage?.text ?? '',
      sentAt: chat.lastMessage?.createdAt ?? '',
      sender: {
        id: chat.lastMessage?.sender.id ?? '',
        img: '',
        name: chat.lastMessage?.sender.username ?? '',
      },
    },
  }))

  return adaptedData
}
