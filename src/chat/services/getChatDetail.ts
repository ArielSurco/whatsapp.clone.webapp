import { z } from 'zod'

import { api } from '@/shared/services/api'
import { getServerUserId } from '@/shared/utils/getServerUserId'
import { validateSchema } from '@/shared/utils/services'

import { ChatDetail } from '../types/ChatDetail'

const responseSchema = z.object({
  id: z.string(),
  name: z.string(),
  members: z.array(
    z.object({
      id: z.string(),
      username: z.string(),
    }),
  ),
  isGroup: z.boolean(),
})

export const getChatDetail = async (chatId: string): Promise<ChatDetail> => {
  const response = await api.get(`/chats/${chatId}`)
  const userId = await getServerUserId()

  const data = await validateSchema(responseSchema, response)

  const chatDetail: ChatDetail = {
    id: data.id,
    name: data.isGroup
      ? data.name
      : data.members.find((member) => member.id !== userId)?.username ?? '',
    img: '',
    members: data.members.map((member) => ({ id: member.id, name: member.username })),
    isGroup: data.isGroup,
  }

  return chatDetail
}
