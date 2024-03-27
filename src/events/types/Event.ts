import { NewMessageEvent } from './NewMessageEvent'
import { UserTypingEvent } from './UserTypingEvent'

export type Event = {
  'new-message': NewMessageEvent
  'user-typing': UserTypingEvent
}

export type EventType = keyof Event
