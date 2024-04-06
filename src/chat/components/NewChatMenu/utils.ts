import { UserSearchResult } from '@/chat/types/UserSearchResult'

interface SplittedUsers {
  [key: string]: UserSearchResult[]
}

export const splitUsersByFirstLetter = (
  users: UserSearchResult[],
): Record<string, UserSearchResult[]> => {
  const splittedUsers: SplittedUsers = {}

  users.forEach((user) => {
    const firstLetter = user.username[0].toUpperCase()

    if (!splittedUsers[firstLetter]) {
      splittedUsers[firstLetter] = []
    }

    splittedUsers[firstLetter].push(user)
  })

  return splittedUsers
}
