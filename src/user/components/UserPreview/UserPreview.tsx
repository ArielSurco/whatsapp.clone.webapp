'use client'

import { useRouter } from 'next/navigation'

import { ProfilePicture } from '@/chat/components/ProfilePicture/ProfilePicture'
import { createPrivateChat } from '@/chat/services/createPrivateChat'
import { UserSearchResult } from '@/chat/types/UserSearchResult'

interface Props extends UserSearchResult {}

export const UserPreview = ({ id, username, img, chatId }: Props) => {
  const router = useRouter()
  const handleClick = async () => {
    let newChatId: string = chatId ?? ''

    if (!chatId) {
      const response = await createPrivateChat(id)

      newChatId = response.chatId
    }

    router.push(`/chat/${newChatId}`)
  }

  return (
    <button
      className='flex h-[72px] w-full items-center gap-4 px-3 text-start hover:bg-primary-550'
      onClick={handleClick}
    >
      <ProfilePicture alt='' className='py-3' size={50} src={img} />
      <div className='flex h-full grow flex-col justify-center border-t border-light-700 border-opacity-15 hover:border-none'>
        <p className='text-base font-semibold text-light-100'>{username}</p>
        {/* TODO: Add status to User model in backend */}
        <p className='text-sm text-light-700'>Hey there! I am using WhatsApp.</p>
      </div>
    </button>
  )
}
