'use client'

import { windowExists } from '@/shared/utils/windowExists'

import { EventsListener, Listener } from '../types/EventsListener'

const suscribe: EventsListener['suscribe'] = (eventType, callback) => {
  if (windowExists()) {
    const listener: Listener = (event) => {
      callback(event.detail)
    }

    window.addEventListener(eventType, listener)

    return listener
  }

  return () => {}
}
const unsuscribe: EventsListener['unsuscribe'] = (event, listener: Listener) => {
  if (windowExists()) {
    window.removeEventListener(event, listener)
  }
}

const dispatch: EventsListener['dispatch'] = (eventType, detail) => {
  if (windowExists()) {
    const event = new CustomEvent(eventType, { detail })

    window.dispatchEvent(event)
  }
}

export const LocalEventsListener: EventsListener = {
  suscribe,
  unsuscribe,
  dispatch,
}
