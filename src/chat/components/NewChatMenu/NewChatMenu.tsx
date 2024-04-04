'use client'

import {
  SidePanelDrawer,
  SidePanelDrawerClose,
  SidePanelDrawerContent,
  SidePanelDrawerHeader,
  SidePanelDrawerTitle,
  SidePanelDrawerTrigger,
} from '@/shared/components/SidePanelDrawer'

import { NewChat } from '../icons/NewChat'

export const NewChatMenu = () => {
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
      </SidePanelDrawerContent>
    </SidePanelDrawer>
  )
}
