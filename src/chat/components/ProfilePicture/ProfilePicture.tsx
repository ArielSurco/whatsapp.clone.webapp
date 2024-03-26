import type { ComponentProps } from 'react'

import Image from 'next/image'

import { DefaultAvatar } from '../icons/DefaultAvatar'

interface Props extends Pick<ComponentProps<typeof Image>, 'src' | 'alt'> {
  size: number
}

export const ProfilePicture = ({ src, size, alt }: Props) => {
  return src ? (
    <Image alt={alt} className='rounded-full' height={size} src={src} width={size} />
  ) : (
    <DefaultAvatar height={size} width={size} />
  )
}
