import { ENV } from '../constants/environment'

interface GetRequestInit extends Omit<RequestInit, 'method'> {}

const checkResponse = (response: Response) => {
  if (response.status >= 400) {
    throw new Error(response.statusText)
  }
}

const apiGet = async <T>(uri: string, { headers, ...init }: GetRequestInit): Promise<T> => {
  const response = await fetch(`${ENV.API_URL}${uri}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...init,
  })

  checkResponse(response)

  return response.json()
}

interface PostRequestInit extends Omit<RequestInit, 'method' | 'body'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: Record<string, any> | RequestInit['body']
}

const apiPost = async <T>(uri: string, { body, headers, ...init }: PostRequestInit): Promise<T> => {
  const response = await fetch(`${ENV.API_URL}${uri}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...init,
  })

  checkResponse(response)

  return response.json()
}

export const api = {
  get: apiGet,
  post: apiPost,
} as const
