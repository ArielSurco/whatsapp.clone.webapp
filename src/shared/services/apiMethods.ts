'use server'

import { ENV } from '../constants/environment'
import { getServerToken } from '../utils/getServerToken'

interface GetRequestInit extends Omit<RequestInit, 'method'> {}

const checkResponse = async (response: Response) => {
  if (response.status >= 400) {
    throw new Error(response.statusText)
  }
}

export const apiGet = async <T>(
  uri: string,
  { headers, ...init }: GetRequestInit = {},
): Promise<T> => {
  const jwt = await getServerToken()

  const response = await fetch(`${ENV.API_URL}${uri}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: jwt ? `Bearer ${jwt}` : '',
      ...headers,
    },
    ...init,
  })

  await checkResponse(response)

  return response.json()
}

interface PostRequestInit extends Omit<RequestInit, 'method' | 'body'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: Record<string, any> | RequestInit['body']
}

export const apiPost = async <T>(
  uri: string,
  { body, headers, ...init }: PostRequestInit,
): Promise<T> => {
  const jwt = await getServerToken()

  const response = await fetch(`${ENV.API_URL}${uri}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: jwt ? `Bearer ${jwt}` : '',
      ...headers,
    },
    ...init,
  })

  await checkResponse(response)

  return response.json()
}
