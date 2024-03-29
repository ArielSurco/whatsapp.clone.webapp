'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useCallback, useState } from 'react'

import { Input } from '@/shared/components/Input'

interface FormValues {
  username: string
  password: string
}

type FormField = keyof FormValues

const fieldStyle = 'w-full flex flex-col gap-1 text-light-300'

export const LoginForm = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  })

  const router = useRouter()

  const handleChange = (field: FormField) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  const handleSubmit = useCallback(async () => {
    await signIn('credentials', {
      username: values.username,
      password: values.password,
      redirect: false,
    })

    router.push('/')
  }, [values, router])

  return (
    <form
      className='flex w-full min-w-[400px] max-w-[500px] flex-col gap-3 rounded-xl bg-primary-550 p-4 text-light-100'
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <h1 className='text-center text-2xl font-semibold text-light-100'>Log in</h1>
      <label className={fieldStyle}>
        <span>Username</span>
        <Input
          name='username'
          onChange={handleChange('username')}
          placeholder='Enter your username'
          value={values.username}
        />
      </label>

      <label className={fieldStyle}>
        <span>Password</span>
        <Input
          name='password'
          onChange={handleChange('password')}
          placeholder='Enter your password'
          type='password'
          value={values.password}
        />
      </label>

      <div className='mt-2 flex items-center justify-between gap-2'>
        <button
          className='bg-success-500 w-fit rounded-full px-6 py-[10px] font-bold text-light-100'
          type='submit'
        >
          Log in
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
