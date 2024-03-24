import { ChatPreview } from '@/chat/components/ChatPreview/ChatPreview'

export default function ChatsPreview() {
  console.log('algoo')

  return (
    <>
      <ChatPreview
        chat={{ id: 'cibersecurity', name: 'CIBERSEGURIDAD K3011', isGroup: true }}
        img=''
        // img='https://imgs.search.brave.com/1GO1LD8B4a8uk8pi-HJGrYNDmqEcr5QuXCjnzsXXqvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZiL1doYXRzQXBw/LnN2Zw.svg'
        lastMessage={{
          message: 'Dio 5 minutos de descanso, pero ya volvió',
          sender: 'Gonzalo Benavente',
          sentAt: '2024-03-23',
        }}
        // isActive
      />
      <ChatPreview
        chat={{ id: 'matias', name: 'Matias', isGroup: false }}
        img=''
        // img='https://imgs.search.brave.com/1GO1LD8B4a8uk8pi-HJGrYNDmqEcr5QuXCjnzsXXqvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZiL1doYXRzQXBw/LnN2Zw.svg'
        lastMessage={{
          message: 'Chee, pinta ir al cine el finde?',
          sender: 'Matias',
          sentAt: '2024-03-22',
        }}
        // isActive
      />
    </>
  )
}
