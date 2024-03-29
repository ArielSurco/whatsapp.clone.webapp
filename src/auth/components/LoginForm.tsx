import Link from 'next/link'

import { Input } from '@/shared/components/Input'

interface Props {
  onSubmit: (event: FormData) => Promise<void>
}

const fieldStyle = 'w-full flex flex-col gap-1 text-light-300'

export const LoginForm = ({ onSubmit }: Props) => {
  return (
    <form
      action={onSubmit}
      className='flex w-full min-w-[400px] max-w-[500px] flex-col gap-3 rounded-xl bg-primary-550 p-4 text-light-100'
    >
      <h1 className='text-center text-2xl font-semibold text-light-100'>Log in</h1>
      <label className={fieldStyle}>
        <span>Username</span>
        <Input name='username' placeholder='Enter your username' />
      </label>

      <label className={fieldStyle}>
        <span>Password</span>
        <Input name='password' placeholder='Enter your password' type='password' />
      </label>

      <div className='mt-2 flex items-center justify-between gap-2'>
        <button
          className='bg-success-500 w-fit rounded-full px-6 py-[10px] font-bold text-light-100'
          type='submit'
        >
          Register
        </button>

        <div className='flex gap-2'>
          <span>Don&apos;t have an an account?</span>
          <Link className='text-success-300' href='/register'>
            Sign up
          </Link>
        </div>
      </div>
    </form>
  )
}
