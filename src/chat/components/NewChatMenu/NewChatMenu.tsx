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

export const NewChatMenu = async () => {
  const userResults = await getUsers()

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

        <div className='flex w-full flex-col'>
          {userResults.map((user) => (
            <UserPreview
              chatId={user.chatId}
              id={user.id}
              img={user.img}
              key={user.id}
              username={user.username}
            />
          ))}
        </div>
      </SidePanelDrawerContent>
    </SidePanelDrawer>
  )
}
