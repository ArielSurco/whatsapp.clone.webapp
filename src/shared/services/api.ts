import { apiGet, apiPost } from './apiMethods'

export const api = {
  get: apiGet,
  post: apiPost,
} as const
