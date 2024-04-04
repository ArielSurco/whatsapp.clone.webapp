'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '../utils/classNames'

const SidePanelDrawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    data-vaul-no-drag
    direction='left'
    dismissible={false}
    modal={false}
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)

SidePanelDrawer.displayName = 'Drawer'

const SidePanelDrawerTrigger = DrawerPrimitive.Trigger

const SidePanelDrawerPortal = DrawerPrimitive.Portal

const SidePanelDrawerClose = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Close className={cn('text-light-200', className)} ref={ref} {...props}>
    <svg
      enableBackground='new 0 0 24 24'
      height='24'
      preserveAspectRatio='xMidYMid meet'
      version='1.1'
      viewBox='0 0 24 24'
      width='24'
      x='0px'
      y='0px'
    >
      <title>back</title>
      <path d='M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z' fill='currentColor' />
    </svg>
  </DrawerPrimitive.Close>
))

SidePanelDrawerClose.displayName = DrawerPrimitive.Close.displayName

const SidePanelDrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SidePanelDrawerPortal>
    <DrawerPrimitive.Content
      className={cn(
        'text-light-200 fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col bg-primary-700',
        'h-screen w-2/5 min-w-80 max-w-[440px]',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </SidePanelDrawerPortal>
))

SidePanelDrawerContent.displayName = 'SidePanelDrawerContent'

const SidePanelDrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('text-light-200 flex h-28 w-full items-end bg-primary-550 px-5', className)}
    {...props}
  />
)

SidePanelDrawerHeader.displayName = 'SidePanelDrawerHeader'

const SidePanelDrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    className={cn(' text-xl font-medium leading-none', className)}
    ref={ref}
    {...props}
  />
))

SidePanelDrawerTitle.displayName = DrawerPrimitive.Title.displayName

export {
  SidePanelDrawer,
  SidePanelDrawerClose,
  SidePanelDrawerContent,
  SidePanelDrawerHeader,
  SidePanelDrawerPortal,
  SidePanelDrawerTitle,
  SidePanelDrawerTrigger,
}
