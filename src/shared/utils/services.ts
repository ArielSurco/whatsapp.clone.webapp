import { z } from 'zod'

import { ENV } from '../constants/environment'

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const validateSchema = async <T>(schema: z.ZodType<T>, data: unknown) => {
  try {
    const validatedData = await schema.parse(data)

    return validatedData
  } catch (error) {
    if (ENV.NODE_ENV === 'development' && error instanceof z.ZodError) {
      const errorMessages = error.issues
        .map((issue) => `${issue.path}: ${issue.message}`)
        .join('\n')

      throw new Error(errorMessages)
    }

    throw new Error('Something went wrong')
  }
}
