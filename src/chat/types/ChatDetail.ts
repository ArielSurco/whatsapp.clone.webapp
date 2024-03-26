interface BaseChat {
  id: string
  name: string
  img: string
  isGroup: boolean
}

interface PrivateChat extends BaseChat {
  phone: string
  isGroup: false
}

interface GroupChatMember {
  id: string
  name: string
  phone: string
}

interface GroupChat extends BaseChat {
  members: GroupChatMember[]
  isGroup: true
}

export type ChatDetail = PrivateChat | GroupChat
