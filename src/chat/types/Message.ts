import { Sender } from './Sender'

export interface Message {
  sentAt: string
  message: string
  sender: Sender
}
