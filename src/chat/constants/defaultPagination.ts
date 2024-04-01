import { Pagination } from '../types/Pagination'

export const DEFAULT_PAGINATION = {
  limit: 11,
  offset: 0,
  hasMore: false,
} as const satisfies Pagination
