'use server'

import { z } from 'zod'

import { api } from '@/shared/services/api'
import { validateSchema } from '@/shared/utils/services'

interface GetUserTokenParams {
  username: string
  password: string
}

const responseSchema = z.object({
  token: z.string(),
})

type GetUserTokenResponse = z.infer<typeof responseSchema>

export const getUserToken = async ({
  username,
  password,
}: GetUserTokenParams): Promise<GetUserTokenResponse> => {
  const response = await api.post('/user/login', {
    body: {
      username,
      password,
    },
  })

  return validateSchema(responseSchema, response)
}
