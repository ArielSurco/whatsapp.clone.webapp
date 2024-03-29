'use server'

import { z } from 'zod'

import { api } from '@/shared/services/api'
import { validateSchema } from '@/shared/utils/services'

interface GetUserInfoParams {
  token: string
}

const responseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
})

type GetUserInfoResponse = z.infer<typeof responseSchema>

export const getUserInfo = async ({ token }: GetUserInfoParams): Promise<GetUserInfoResponse> => {
  const response = await api.get('/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return validateSchema(responseSchema, response)
}
