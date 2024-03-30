'use server'

import { headers } from 'next/headers'

export const getServerUserId = async (): Promise<string> => {
  const headersList = headers()

  const userId = headersList.get('x-user-id') ?? ''

  return userId
}
