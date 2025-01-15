import { v4 as uuid } from "uuid";
import { encode as defaultEncode } from "next-auth/jwt";

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "./prisma";
import { authFormSchema } from "./auth-schema";

const adapter = PrismaAdapter(prisma)

export const { auth, handlers, signIn } = NextAuth({ 
  adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validateCredentails = authFormSchema.parse(credentials);

        const user = await prisma.user.findFirst({
          where: {email: validateCredentails.email, password: validateCredentails.password },
        });

        if (!user){
          throw new Error("Invalid Credentials");
        }

        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, account}) {
      if (account?.provider === "credentials"){
        token.credentials = true;
      }
      return token;
    }
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error("No user ID found in token");
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        });

        if (!createdSession) {
          throw new Error("Failed to create session");
        }

        return sessionToken;
      }
      return defaultEncode(params);
    },
  },
})