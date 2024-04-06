import { z } from 'zod'

import { api } from '@/shared/services/api'
import { validateSchema } from '@/shared/utils/services'

import { UserSearchResult } from '../types/UserSearchResult'

export const responseSchema = z.array(
  z.object({
    id: z.string(),
    username: z.string(),
    chatId: z.string().optional(),
  }),
)

export const getUsers = async (): Promise<UserSearchResult[]> => {
  const response = await api.get('/user')

  const data = await validateSchema(responseSchema, response)

  return data.map((result) => ({
    id: result.id,
    username: result.username,
    img: '',
    chatId: result.chatId ?? null,
  }))
}
