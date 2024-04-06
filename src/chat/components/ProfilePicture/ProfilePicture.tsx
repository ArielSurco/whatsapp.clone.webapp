import type { ComponentProps } from 'react'

import Image from 'next/image'

import { cn } from '@/shared/utils/classNames'

import { DefaultAvatar } from '../icons/DefaultAvatar'

interface Props extends Pick<ComponentProps<typeof Image>, 'src' | 'alt' | 'className'> {
  size: number
}

export const ProfilePicture = ({ className, src, size, alt }: Props) => {
  return src ? (
    <Image
      alt={alt}
      className={cn('rounded-full', className)}
      height={size}
      src={src}
      width={size}
    />
  ) : (
    <DefaultAvatar height={size} width={size} />
  )
}
