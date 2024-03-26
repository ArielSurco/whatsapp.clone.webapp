import { ComponentPropsWithoutRef } from 'react'

interface Props extends Pick<ComponentPropsWithoutRef<'input'>, 'value' | 'onChange'> {}

export const ChatInput = ({ value, onChange }: Props) => {
  return (
    <div className='w-full rounded-lg bg-primary-400 px-3 py-2'>
      <input
        className='h-6 w-full bg-inherit text-base text-light-300 outline-none'
        onChange={onChange}
        type='text'
        value={value}
      />
    </div>
  )
}
