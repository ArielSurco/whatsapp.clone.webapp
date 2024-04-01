import type { Message } from '../types/Message'

import { z } from 'zod'

import { api } from '@/shared/services/api'
import { getServerUserId } from '@/shared/utils/getServerUserId'
import { validateSchema } from '@/shared/utils/services'

import { DEFAULT_PAGINATION } from '../constants/defaultPagination'
import { Pagination } from '../types/Pagination'

const responseSchema = z.object({
  results: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
      createdAt: z.string(),
      sender: z.object({
        id: z.string(),
        username: z.string(),
      }),
    }),
  ),
  total: z.number(),
})

interface GetChatMessagesResponse {
  messages: Message[]
  pagination: Pagination
}

export const getChatMessages = async (
  chatId: string,
  offset: number = DEFAULT_PAGINATION.offset,
  limit: number = DEFAULT_PAGINATION.limit,
): Promise<GetChatMessagesResponse> => {
  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  })

  const response = await api.get(`/chats/${chatId}/messages?${queryParams.toString()}`)

  const data = await validateSchema(responseSchema, response)

  const userId = await getServerUserId()

  const messages: Message[] = data.results.map((message) => ({
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
  return {
    messages: messages.reverse(),
    pagination: {
      limit,
      offset: offset + limit,
      hasMore: data.total > offset + limit,
    },
  }
}
