'use client'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '../utils/classNames'

interface Props extends ComponentPropsWithoutRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, ...restProps } = props

  return (
    <div className={cn('w-full rounded-lg bg-primary-400 px-3 py-2', className)}>
      <input
        className='h-6 w-full bg-inherit text-base text-light-300 outline-none placeholder:font-extralight'
        ref={ref}
        {...restProps}
      />
    </div>
  )
})

Input.displayName = 'Input'
