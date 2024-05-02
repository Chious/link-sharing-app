import { connectToDatabase } from '@/lib/db';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../../lib/auth';
import { JWT } from 'next-auth/jwt';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error('No User!');
        }

        const isValid = verifyPassword(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Could not log in !');
        }

        client.close();

        return { id: user['_id'] };
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      const sanitizedToken = Object.keys(token).reduce((p, c) => {
        // strip unnecessary properties
        if (c !== 'iat' && c !== 'exp' && c !== 'jti' && c !== 'apiToken') {
          return { ...p, [c]: token[c] };
        } else {
          return p;
        }
      }, {});
      return { ...session, user: sanitizedToken, apiToken: token.apiToken };
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (typeof user !== 'undefined') {
        // user has just signed in so the user object is populated
        return user as JWT;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
