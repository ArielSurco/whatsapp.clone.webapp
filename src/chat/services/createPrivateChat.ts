import { z } from 'zod'

import { api } from '@/shared/services/api'
import { getServerUserId } from '@/shared/utils/getServerUserId'
import { validateSchema } from '@/shared/utils/services'

const responseSchema = z.object({
  message: z.string(),
  chatId: z.string(),
})

type CreatePrivateChatResponse = z.infer<typeof responseSchema>

export const createPrivateChat = async (
  newChatUserId: string,
): Promise<CreatePrivateChatResponse> => {
  const userId = await getServerUserId()

  const response = await api.post('/chats', {
    body: {
      name: '',
      members: [userId, newChatUserId],
      isGroup: false,
    },
  })

  const data = validateSchema(responseSchema, response)

  return data
}
