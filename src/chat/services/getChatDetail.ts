import { sleep } from '@/shared/utils/services'

import { ChatDetail } from '../types/ChatDetail'

const chatDetail: ChatDetail = {
  id: '1',
  name: 'John Doe',
  img: '',
  members: [],
  isGroup: true,
}

export const getChatDetail = async (_chatId: string): Promise<ChatDetail> => {
  await sleep(1000)

  return chatDetail
}
