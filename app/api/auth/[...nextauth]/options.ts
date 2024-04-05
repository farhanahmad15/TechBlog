import type { NextAuthOptions } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "john@doe.com",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },

      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = await prisma.user.findMany({
          where: {
            email: credentials?.email,
            password: credentials?.password,
            provider: 'Credentials'
          },
        });

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'github'){
        const userDB = await prisma.user.upsert({
          where: { uid: user.email+'_'+user.id },
          update: {},
          create: {
            email: user.email,
            uid:  user.email+'_'+user.id,
            role: "User",
            name: user.name,
            image: user.image,
            provider:'Github'
          }
        })
      }
      else if (account?.provider === 'google'){
        const userDB = await prisma.user.upsert({
          where: { uid: user.email+'_'+user.id },
          update: {},
          create: {
            email: user?.email,
            uid: user.email+'_'+user.id,
            role: "User",
            name: user.name,
            image: user.image,
            provider:'Google'
          }
        })
      }
      return true;

    },
  },
};
