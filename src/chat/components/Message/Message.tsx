import { cva } from 'class-variance-authority'
import moment from 'moment'

import { Message as IMessage } from '@/chat/types/Message'
import { cn } from '@/shared/utils/classNames'

import { ProfilePicture } from '../ProfilePicture/ProfilePicture'

interface Props extends IMessage {
  groupedPosition?: 'first' | 'middle' | 'last'
  isGroupChat: boolean
  isOwnMessage: boolean
}

const msgContainerStyles = cva(['flex gap-[10px] mb-3'], {
  variants: {
    groupedPosition: {
      first: 'mb-[2px]',
      middle: 'mb-[2px] pl-[38px]',
      last: 'mb-3 pl-[38px]',
    },
    isGroupChat: {
      false: 'pl-0',
    },
    isOwnMessage: {
      true: 'justify-end',
      false: 'justify-start',
    },
  },
})

const bubbleStyles = cva(
  ['relative flex flex-col gap-[2px] ', 'w-fit max-w-[400px] p-2', 'rounded-lg'],
  {
    variants: {
      groupedPosition: {
        first: '',
        middle: '',
        last: '',
      },
      isOwnMessage: {
        true: 'bg-success-700',
        false: 'bg-primary-550',
      },
    },
    compoundVariants: [
      {
        isOwnMessage: true,
        groupedPosition: 'first',
        class: 'rounded-tr-none',
      },
      {
        isOwnMessage: false,
        groupedPosition: 'first',
        class: 'rounded-tl-none',
      },
      {
        isOwnMessage: true,
        groupedPosition: undefined,
        class: 'rounded-tr-none',
      },
      {
        isOwnMessage: false,
        groupedPosition: undefined,
        class: 'rounded-tl-none',
      },
    ],
  },
)

const messageTailStyles = cva(['absolute top-0 block h-3 w-2'], {
  variants: {
    isOwnMessage: {
      false: 'message-tail -left-2 rounded-tl-sm bg-primary-550',
      true: 'message-tail-reverse bg-success-700 -right-2 rounded-tr-sm',
    },
  },
})

export const Message = ({
  message,
  sender,
  sentAt,
  groupedPosition,
  isGroupChat,
  isOwnMessage,
}: Props) => {
  const [time, meridiem] = moment(sentAt).format('HH:mm A').split(' ')
  const formattedMeridiem = meridiem.toLocaleLowerCase().replace('m', '. m.')

  const isGroupedMessage = Boolean(groupedPosition)

  const notGroupedOrFirst = !isGroupedMessage || groupedPosition === 'first'

  return (
    <div className={cn(msgContainerStyles({ groupedPosition, isGroupChat, isOwnMessage }))}>
      {!isOwnMessage && isGroupChat && notGroupedOrFirst && (
        <ProfilePicture alt={sender.name} size={28} src={sender.img} />
      )}
      <div className={cn(bubbleStyles({ groupedPosition, isOwnMessage }))}>
        {notGroupedOrFirst && <span className={messageTailStyles({ isOwnMessage })} />}
        {!isOwnMessage && isGroupChat && notGroupedOrFirst && (
          <span className='text-xs'>~ {sender.name}</span>
        )}
        <p className='text-sm text-light-100'>{message}</p>
        <span className='self-end text-[10px] font-extralight text-white'>
          {time} {formattedMeridiem}
        </span>
      </div>
    </div>
  )
}
