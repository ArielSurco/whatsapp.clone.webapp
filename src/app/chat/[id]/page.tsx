import { notFound } from 'next/navigation'

export default function ChatPage({ params }: { params: { id: string } }) {
  if (!params.id) notFound()

  return <div className='text-light-100'>Chat {params.id}</div>
}
