import type { Message } from '../types/Message'

import { sleep } from '@/shared/utils/adapters'

const messages: Message[] = [
  {
    sender: {
      id: '1',
      name: 'John Doe',
      img: '',
    },
    message: 'Hello, World!',
    sentAt: '2024-03-24T12:37:00Z',
  },
  {
    sender: {
      id: '2',
      name: 'Jane Doe',
      img: '',
    },
    message: 'Hello, World!',
    sentAt: '2024-03-20T12:00:00Z',
  },
  {
    sender: {
      id: '1',
      name: 'John Doe',
      img: '',
    },
    message: 'Hello, World!',
    sentAt: '2024-03-13T12:00:00Z',
  },
]

export const getChatMessages = async (_chatId: string): Promise<Message[]> => {
  await sleep(3000)

  return messages
}
