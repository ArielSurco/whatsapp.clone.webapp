import type { NextRequest } from 'next/server'

import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

const AUTH_ROUTES = ['/login', '/register']

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const pathname = request.nextUrl.pathname
  const isAuth = Boolean(token)

  if (!isAuth && !AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isAuth && AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const response = NextResponse.next()

  response.headers.set('x-pathname', pathname)

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
