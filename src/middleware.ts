import type { NextRequest } from 'next/server'

import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })

  console.log(token)

  const response = NextResponse.next()

  response.headers.set('x-pathname', request.nextUrl.pathname)

  return response
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
