import { redirect } from 'next/navigation'

import { RegisterForm } from '@/auth/components/RegisterForm'
import { createUser } from '@/auth/services/createUser'

export default function RegisterPage() {
  const handleSubmit = async (formData: FormData) => {
    'use server'

    await createUser({
      username: formData.get('username')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      password: formData.get('password')?.toString() ?? '',
    })

    redirect('/login')
  }

  return (
    <div className='grid h-screen w-full place-items-center bg-primary-700 p-5'>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  )
}
