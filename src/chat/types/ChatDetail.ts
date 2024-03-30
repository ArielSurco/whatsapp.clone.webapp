interface GroupChatMember {
  id: string
  name: string
}

interface BaseChat {
  id: string
  name: string
  img: string
  members: GroupChatMember[]
  isGroup: boolean
}

// interface PrivateChat extends BaseChat {
//   phone: string
//   isGroup: false
// }

// interface GroupChat extends BaseChat {
//   members: GroupChatMember[]
//   isGroup: true
// }

export type ChatDetail = BaseChat
