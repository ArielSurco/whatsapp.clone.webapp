import { cva } from 'class-variance-authority'
import Image from 'next/image'
import Link from 'next/link'

import { DefaultAvatar } from '../icons/DefaultAvatar'

import { getSentAtLabel } from './ChatPreviewUtils'

interface Message {
  sentAt: string
  message: string
  sender: string
}

interface Chat {
  id: string
  name: string
  isGroup: boolean
}

interface Props {
  img: string
  chat: Chat
  lastMessage: Message
  isActive?: boolean
}

const containerStyles = cva(
  ['text-light-500 bg-primary-700 hover:bg-primary-550', 'w-full h-[74px] flex', 'gap-3 px-4 py-3'],
  {
    variants: {
      isActive: {
        true: 'text-light-300 bg-primary-400 hover:bg-primary-400',
      },
    },
  },
)

export const ChatPreview = ({ img, chat, lastMessage, isActive }: Props) => {
  const message = chat.isGroup
    ? `~${lastMessage.sender}: ${lastMessage.message}`
    : lastMessage.message

  return (
    <Link className={containerStyles({ isActive })} href={`/chat/${chat.id}`}>
      <div className='basis-[50px]'>
        {img ? (
          <Image alt='Chat Icon' className='rounded-full' height={50} src={img} width={50} />
        ) : (
          <DefaultAvatar height={50} width={50} />
        )}
      </div>
      <div className='flex w-1 grow flex-col justify-center'>
        <div className='flex items-end justify-between gap-2'>
          <p className='truncate align-bottom text-base text-light-100'>{chat.name}</p>
          <span className='text-xs leading-6'>{getSentAtLabel(lastMessage.sentAt)}</span>
        </div>
        <p className='truncate text-sm'>{message}</p>
      </div>
    </Link>
  )
}
