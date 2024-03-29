import { LoginForm } from '@/auth/components/LoginForm'

export default function LoginPage() {
  const handleSubmit = async (formData: FormData) => {
    'use server'
  }

  return (
    <div className='grid h-screen w-full place-items-center bg-primary-700 p-5'>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}
