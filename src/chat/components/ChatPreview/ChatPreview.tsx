import type { ChatPreview as IChatPreview } from '@/chat/types/ChatPreview'

import { ChatLink } from '../ChatLink/ChatLink'
import { ProfilePicture } from '../ProfilePicture/ProfilePicture'

import { getSentAtLabel } from './ChatPreviewUtils'

interface Props extends IChatPreview {}

export const ChatPreview = ({ id, name, lastMessage, img, isGroup }: Props) => {
  const message = isGroup
    ? `~${lastMessage.sender.name}: ${lastMessage.message}`
    : lastMessage.message

  return (
    <ChatLink chatId={id} className='flex h-[74px] w-full gap-3 px-4 py-3'>
      <div className='basis-[50px]'>
        <ProfilePicture alt={name} size={50} src={img} />
      </div>
      <div className='flex w-1 grow flex-col justify-center'>
        <div className='flex items-end justify-between gap-2'>
          <p className='truncate align-bottom text-base text-light-100'>{name}</p>
          <span className='text-xs leading-6'>{getSentAtLabel(lastMessage.sentAt)}</span>
        </div>
        <p className='truncate text-sm'>{message}</p>
      </div>
    </ChatLink>
  )
}
