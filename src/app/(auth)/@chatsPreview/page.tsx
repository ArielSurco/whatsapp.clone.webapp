import { ChatPreview } from '@/chat/components/ChatPreview/ChatPreview'
import { getChatsPreview } from '@/chat/services/getChatsPreview'

async function ChatsPreview() {
  const chatsPreview = await getChatsPreview()

  return (
    <>
      {chatsPreview.map((chatPreview) => (
        <ChatPreview key={chatPreview.id} {...chatPreview} />
      ))}
    </>
  )
}

export default ChatsPreview
