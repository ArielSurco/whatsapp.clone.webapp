import { getUsers } from '@/chat/services/getUsers'
import {
  SidePanelDrawer,
  SidePanelDrawerClose,
  SidePanelDrawerContent,
  SidePanelDrawerHeader,
  SidePanelDrawerTitle,
  SidePanelDrawerTrigger,
} from '@/shared/components/SidePanelDrawer'
import { UsersAlphabeticalSplit } from '@/shared/components/UsersAlphabeticalSplit'

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

        <UsersAlphabeticalSplit users={userResults} />
      </SidePanelDrawerContent>
    </SidePanelDrawer>
  )
}
