import { Whatsapp } from '@/chat/components/icons/Whatsapp'

export default function ChatLoading() {
  return (
    <div className='grid h-screen w-full place-items-center'>
      <div className='flex flex-col items-center'>
        <Whatsapp className='text-light-900 mb-10' />
        <div
          className='mb-5 h-1 w-80 animate-pulse rounded-full bg-success-300'
          role='progressbar'
        />
        <p className='text-base text-light-100'>Loading Messages</p>
      </div>
    </div>
  )
}
