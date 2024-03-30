import { Sender } from './Sender'

export interface Message {
  id: string
  sentAt: string
  message: string
  sender: Sender
  isOwn: boolean
}
