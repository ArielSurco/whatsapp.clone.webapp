import { UserSearchResult } from '@/chat/types/UserSearchResult'
import { UserPreview } from '@/user/components/UserPreview/UserPreview'

interface Props {
  users: UserSearchResult[]
}

interface SplittedUsers {
  [key: string]: UserSearchResult[]
}

export const UsersAlphabeticalSplit = ({ users }: Props) => {
  const splittedUsers: SplittedUsers = {}

  users.forEach((user) => {
    const firstLetter = user.username[0].toUpperCase()

    if (!splittedUsers[firstLetter]) {
      splittedUsers[firstLetter] = []
    }

    splittedUsers[firstLetter].push(user)
  })

  return (
    <div>
      {Object.entries(splittedUsers).map(([letter, letterUsers]) => (
        <div key={letter}>
          <h2 className='px-8 py-4 text-base text-success-500'>{letter}</h2>
          {letterUsers.map((letterUser) => (
            <UserPreview
              chatId={letterUser.chatId}
              id={letterUser.id}
              img={letterUser.img}
              key={letterUser.id}
              username={letterUser.username}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
