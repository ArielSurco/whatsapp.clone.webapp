import { notFound } from 'next/navigation'

import { getChatDetail } from '@/chat/adapters/getChatDetail'
import { ChatInput } from '@/chat/components/ChatInput/ChatInput'
import { Message } from '@/chat/components/Message/Message'
import { ProfilePicture } from '@/chat/components/ProfilePicture/ProfilePicture'
import { SendMessage } from '@/chat/components/icons/SendMessage'

export default async function ChatPage({ params }: { params: { id: string } }) {
  if (!params.id) notFound()

  const chatDetail = await getChatDetail(params.id)

  return (
    <section className='flex h-full flex-col bg-primary-950 text-light-100'>
      <header className='flex h-[60px] items-center gap-4 bg-primary-550 px-4 py-[10px]'>
        <ProfilePicture alt='Chat image' size={40} src={chatDetail.img} />
        <p className='text-base font-bold text-light-100'>{chatDetail.name}</p>
      </header>
      <main className='flex grow flex-col bg-chat-pattern px-10 pt-3'>
        <Message
          groupedPosition='first'
          isGroupChat={false}
          isOwnMessage={false}
          message='Ehh sabes que da para verlos de nuevo jajaj'
          sender={{ id: '1', name: 'Juan', img: '' }}
          sentAt='2021-09-01T20:15:00'
        />
        <Message
          groupedPosition='middle'
          isGroupChat={false}
          isOwnMessage={false}
          message='Pero si esta algo salado'
          sender={{ id: '1', name: 'Juan', img: '' }}
          sentAt='2021-09-01T20:15:00'
        />
        <Message
          groupedPosition='last'
          isGroupChat={false}
          isOwnMessage={false}
          message='Mejor no jajaj'
          sender={{ id: '1', name: 'Juan', img: '' }}
          sentAt='2021-09-01T20:15:00'
        />
        <Message
          isGroupChat={false}
          isOwnMessage
          message='Oka'
          sender={{ id: '2', name: 'Ariel', img: '' }}
          sentAt='2021-09-01T20:15:00'
        />
      </main>
      <footer className='flex h-16 items-center gap-4 bg-primary-550 px-4 py-[10px]'>
        <ChatInput />
        <button className='h-fit w-fit'>
          <SendMessage className='text-light-500' height={24} width={24} />
        </button>
      </footer>
    </section>
  )
}
