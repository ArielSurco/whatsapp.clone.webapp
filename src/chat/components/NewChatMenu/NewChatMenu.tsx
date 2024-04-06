import { getUsers } from '@/chat/services/getUsers'
import {
  SidePanelDrawer,
  SidePanelDrawerClose,
  SidePanelDrawerContent,
  SidePanelDrawerHeader,
  SidePanelDrawerTitle,
  SidePanelDrawerTrigger,
} from '@/shared/components/SidePanelDrawer'
import { UserPreview } from '@/user/components/UserPreview/UserPreview'

import { NewChat } from '../icons/NewChat'

import { splitUsersByFirstLetter } from './utils'

export const NewChatMenu = async () => {
  const userResults = await getUsers()

  const splittedUsers = splitUsersByFirstLetter(userResults)

  return (
    <SidePanelDrawer>
      <SidePanelDrawerTrigger>
        <NewChat />
      </SidePanelDrawerTrigger>
      <SidePanelDrawerContent>
        <SidePanelDrawerHeader className='gap-7'>
          <div className='flex h-16 grow items-center'>
            <SidePanelDrawerClose className='basis-14'>X</SidePanelDrawerClose>
            <SidePanelDrawerTitle className='grow'>New chat</SidePanelDrawerTitle>
          </div>
        </SidePanelDrawerHeader>

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
      </SidePanelDrawerContent>
    </SidePanelDrawer>
  )
}
