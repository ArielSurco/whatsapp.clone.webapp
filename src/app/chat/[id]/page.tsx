import { notFound } from 'next/navigation'

import { Message } from '@/chat/components/Message/Message'
import { sleep } from '@/shared/utils/adapters'

export default async function ChatPage({ params }: { params: { id: string } }) {
  if (!params.id) notFound()

  await sleep(1000)

  return (
    <section className='flex h-full flex-col bg-primary-950 text-light-100'>
      <header className=' h-[60px] bg-primary-550 px-4 py-[10px]'>Chat name</header>
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
      <footer className='h-16 bg-primary-550'>Input</footer>
    </section>
  )
}
