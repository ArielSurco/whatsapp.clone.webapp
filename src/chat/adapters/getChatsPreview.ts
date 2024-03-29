import type { ChatPreview } from '../types/ChatPreview'

import { sleep } from '@/shared/utils/services'

const chats: ChatPreview[] = [
  {
    id: '1',
    name: 'John Doe',
    isGroup: false,
    img: '',
    lastMessage: {
      sender: {
        id: '1',
        name: 'John Doe',
        img: '',
      },
      message: 'Hello, World!',
      sentAt: '2024-03-24T12:37:00Z',
    },
  },
  {
    id: '2',
    name: 'Jane Doe',
    isGroup: false,
    img: '',
    lastMessage: {
      sender: {
        id: '2',
        name: 'Jane Doe',
        img: '',
      },
      message: 'Hello, World!',
      sentAt: '2024-03-20T12:00:00Z',
    },
  },
  {
    id: '3',
    name: 'Group Chat',
    isGroup: true,
    img: '',
    lastMessage: {
      sender: {
        id: '1',
        name: 'John Doe',
        img: '',
      },
      message: 'Hello, World!',
      sentAt: '2024-03-13T12:00:00Z',
    },
  },
]

export const getChatsPreview = async (): Promise<ChatPreview[]> => {
  await sleep(3000)

  return chats
}
