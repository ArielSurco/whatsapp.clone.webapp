import { ReactElement, ReactNode, Suspense } from 'react'

export const withSuspense = <T,>(
  Component: (p: T) => ReactElement | Promise<ReactElement>,
  fallback: ReactNode,
) =>
  function SuspenseWrapper(props: T & JSX.IntrinsicAttributes) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    )
  }
