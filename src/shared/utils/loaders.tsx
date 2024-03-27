import { ReactElement, ReactNode, Suspense } from 'react'

export const withSuspense = <T,>(
  Component: (p: T) => ReactElement | Promise<ReactElement>,
  fallback: ReactNode,
) =>
  function SuspenseWrapper(props: T) {
    return (
      <Suspense fallback={fallback}>
        {/*
          Necessary casting to use withSuspense on parallel routes
          because currently doesn't work the loading.tsx file on parallel routes
        */}
        <Component {...(props as T & JSX.IntrinsicAttributes)} />
      </Suspense>
    )
  }
