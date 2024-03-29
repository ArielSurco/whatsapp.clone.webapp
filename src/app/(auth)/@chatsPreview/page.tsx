import { ChatPreview } from '@/chat/components/ChatPreview/ChatPreview'
import { getChatsPreview } from '@/chat/services/getChatsPreview'
import { withSuspense } from '@/shared/utils/loaders'

import Loading from './loading'

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

export default withSuspense(ChatsPreview, <Loading />)
