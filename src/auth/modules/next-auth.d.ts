import { DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface User extends DefaultUser {
    access_token: string
  }

  interface Session {
    user: User
    id: string
    access_token: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultUser {
    access_token: string
  }
}
