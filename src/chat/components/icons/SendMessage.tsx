import type { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'svg'> {}

export const SendMessage = (props: Props) => {
  return (
    <svg
      enableBackground='new 0 0 24 24'
      height='24'
      preserveAspectRatio='xMidYMid meet'
      version='1.1'
      viewBox='0 0 24 24'
      width='24'
      x='0px'
      y='0px'
      {...props}
    >
      <title>send</title>
      <path
        d='M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z'
        fill='currentColor'
      />
    </svg>
  )
}
