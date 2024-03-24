import type { Message } from './Message'

export interface ChatPreview {
  id: string
  name: string
  isGroup: boolean
  img: string
  lastMessage: Message
}
