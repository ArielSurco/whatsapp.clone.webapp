import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  response.headers.set('x-pathname', request.nextUrl.pathname)

  return response
  // return NextResponse.next({
  //   request: {
  //     // Attach the pathname of the next request to the headers
  //     // So can be accessed with the headers() function
  //     'x-pathname': request.nextUrl.pathname,
  //   },
  // })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
