'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Input } from '@/shared/components/Input'

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

interface FormValues {
  username: string
  email: string
  password: string
}

type FormField = keyof FormValues

const fieldStyle = 'w-full flex flex-col gap-1 text-light-300'

export const RegisterForm = ({ onSubmit }: Props) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (field: FormField) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  return (
    <form
      className='flex w-full min-w-[400px] max-w-[500px] flex-col gap-3 rounded-xl bg-primary-550 p-4 text-light-100'
      onSubmit={onSubmit}
    >
      <h1 className='text-center text-2xl font-semibold text-light-100'>Create your account</h1>
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
        <span>Email</span>
        <Input
          name='email'
          onChange={handleChange('email')}
          placeholder='Enter your email'
          type='email'
          value={values.email}
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
        <button className='bg-success-500 w-fit rounded-full px-6 py-[10px] font-bold text-light-100'>
          Register
        </button>

        <div className='flex gap-2'>
          <span>Have an account?</span>
          <Link className='text-success-300' href='/login'>
            Log in now
          </Link>
        </div>
      </div>
    </form>
  )
}
