'use server'

import { z } from 'zod'

import { api } from '@/shared/services/api'
import { validateSchema } from '@/shared/utils/services'

interface CreateUserParams {
  username: string
  email: string
  password: string
}

const responseSchema = z.object({
  message: z.string(),
})

export const createUser = async ({ username, email, password }: CreateUserParams) => {
  const response = await api.post('/user/register', {
    body: {
      username,
      email,
      password,
    },
  })

  validateSchema(responseSchema, response)

  return response
}
