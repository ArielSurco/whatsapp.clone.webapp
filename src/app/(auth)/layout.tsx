import type { ReactNode } from 'react'

import { getServerSession } from 'next-auth'

import { NewChatMenu } from '@/chat/components/NewChatMenu/NewChatMenu'
import { ProfilePicture } from '@/chat/components/ProfilePicture/ProfilePicture'

interface Props {
  children: ReactNode
  chatsPreview: ReactNode
}

export default async function AuthLayout({ children, chatsPreview }: Props) {
  const session = await getServerSession()

  return (
    <div className='flex min-h-screen w-screen'>
      <section className='border-r-light-700 h-screen w-2/5 min-w-80 max-w-[440px] border-r border-opacity-25 bg-primary-700'>
        <header className='flex h-[60px] w-full items-center justify-between gap-2 bg-primary-550 px-4 py-[10px] text-light-300'>
          <ProfilePicture alt='User profile picture' size={40} src={session?.user?.image ?? ''} />
          <div className='flex text-light-500'>
            <NewChatMenu />
          </div>
        </header>
        {chatsPreview}
      </section>
      <main className='grow bg-primary-525'>{children}</main>
    </div>
  )
}
