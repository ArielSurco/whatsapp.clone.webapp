import NextAuth, { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { getUserInfo } from '@/auth/services/getUserInfo'
import { getUserToken } from '@/auth/services/getUserToken'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access_token = user.access_token
        token.id = user.id
      }

      return token
    },
    async session({ session, token }) {
      session.access_token = token.access_token
      session.id = token.id

      return session
    },
  },
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { token } = await getUserToken({
            username: credentials?.username ?? '',
            password: credentials?.password ?? '',
          })

          const user = await getUserInfo({ token })

          return {
            id: user.id,
            name: user.username,
            email: user.email,
            access_token: token,
          }
        } catch (err) {
          return null
        }
      },
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
