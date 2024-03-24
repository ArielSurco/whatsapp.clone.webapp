import { notFound } from 'next/navigation'

import { sleep } from '@/shared/utils/adapters'

export default async function ChatPage({ params }: { params: { id: string } }) {
  if (!params.id) notFound()

  await sleep(5000)

  return <div className='text-light-100'>Chat {params.id}</div>
}
