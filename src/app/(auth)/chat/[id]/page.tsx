import { notFound } from 'next/navigation'

import { ChatFooter } from '@/chat/components/ChatFooter/ChatFooter'
import { ChatMessages } from '@/chat/components/ChatMessages/ChatMessages'
import { ProfilePicture } from '@/chat/components/ProfilePicture/ProfilePicture'
import { ChatProvider } from '@/chat/context/ChatContext'
import { getChatDetail } from '@/chat/services/getChatDetail'

export default async function ChatPage({ params }: { params: { id: string } }) {
  if (!params.id) notFound()

  const chatDetail = await getChatDetail(params.id)

  return (
    <ChatProvider initialChatDetail={chatDetail} initialMessages={[]}>
      <section className='flex h-full max-h-screen flex-col bg-primary-950 text-light-100'>
        <header className='flex h-[60px] items-center gap-4 bg-primary-550 px-4 py-[10px]'>
          <ProfilePicture alt='Chat image' size={40} src={chatDetail.img} />
          <p className='text-base font-bold text-light-100'>{chatDetail.name}</p>
        </header>
        <main className='flex grow flex-col overflow-auto bg-chat-pattern px-10 pt-3'>
          <ChatMessages />
        </main>
        <ChatFooter />
      </section>
    </ChatProvider>
  )
}
