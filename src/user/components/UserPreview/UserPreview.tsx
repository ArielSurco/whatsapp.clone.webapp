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
      className='flex h-[72px] w-full gap-4 p-3 text-start hover:bg-primary-550'
      onClick={handleClick}
    >
      <ProfilePicture alt='' size={50} src={img} />
      <div>
        <p className='text-base font-semibold text-light-100'>{username}</p>
        {/* TODO: Add status to User model in backend */}
        <p className='text-sm text-light-700'>Hey there! I am using WhatsApp.</p>
      </div>
    </button>
  )
}
