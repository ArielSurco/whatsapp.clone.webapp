import type { Event, EventType } from './Event'

export type EventCallback<T extends EventType> = (detail: Event[T]) => void

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Listener = (event: any) => void

export interface EventsListener {
  suscribe: <T extends EventType>(eventType: T, callback: EventCallback<T>) => Listener
  unsuscribe: <T extends EventType>(eventType: T, callback: Listener) => void
  dispatch: <T extends EventType>(eventType: T, detail: Event[T]) => void
}
