'use server'

import { headers } from 'next/headers'

export const getServerToken = async (): Promise<string> => {
  const session = headers()

  const token = session.get('Authorization') ?? ''

  return token
}
