import type { ReactNode } from 'react'

import { getServerSession } from 'next-auth'

import { ProfilePicture } from '@/chat/components/ProfilePicture/ProfilePicture'

interface Props {
  children: ReactNode
  chatsPreview: ReactNode
}

export default async function AuthLayout({ children, chatsPreview }: Props) {
  const session = await getServerSession()

  return (
    <div className='flex min-h-screen w-screen'>
      <section className='h-screen w-2/5 min-w-80 max-w-[440px] border-r border-r-light-500 border-opacity-25 bg-primary-700'>
        <div className='flex h-[60px] w-full items-center gap-2 bg-primary-550 px-4 py-[10px] text-light-300'>
          <ProfilePicture alt='User profile picture' size={40} src={session?.user?.image ?? ''} />
          {session?.user?.name}
        </div>
        {chatsPreview}
      </section>
      <main className='grow bg-primary-525'>{children}</main>
    </div>
  )
}
