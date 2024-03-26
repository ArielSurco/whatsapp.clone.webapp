import { sleep } from '@/shared/utils/adapters'

import { ChatDetail } from '../types/ChatDetail'

const chatDetail: ChatDetail = {
  id: '1',
  name: 'John Doe',
  img: '',
  phone: '1234567890',
  isGroup: false,
}

export const getChatDetail = async (_chatId: string): Promise<ChatDetail> => {
  await sleep(1000)

  return chatDetail
}
