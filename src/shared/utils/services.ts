import { z } from 'zod'

import { ENV } from '../constants/environment'

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const validateSchema = async <T>(schema: z.ZodType<T>, data: unknown) => {
  try {
    return schema.parse(data)
  } catch (error) {
    if (ENV.NODE_ENV === 'development' && error instanceof z.ZodError) {
      throw new Error(error.errors.map((err) => err.message).join('\n'))
    }

    throw new Error('Something went wrong')
  }
}
