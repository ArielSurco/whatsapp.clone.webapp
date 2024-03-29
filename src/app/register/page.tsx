import { RegisterForm } from '@/auth/components/RegisterForm'

export default function RegisterPage() {
  const handleSubmit = async () => {
    'use server'
  }

  return (
    <div className='grid h-screen w-full place-items-center bg-primary-700 p-5'>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  )
}
