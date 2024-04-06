import { IntroLogo } from '@/shared/components/icons/IntroLogo'

export default function Home() {
  return (
    <div className='grid h-full w-full place-items-center p-7'>
      <div className='flex flex-col gap-10'>
        <IntroLogo />

        <div className='flex flex-col gap-4 text-center'>
          <h1 className='text-3xl font-light text-light-100'>WhatsApp Clone</h1>
          <p className='text-sm font-normal text-light-700'>
            Send and receive messages with this simple clone app
          </p>
        </div>
      </div>
    </div>
  )
}
