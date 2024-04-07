import type { NextAuthOptions } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
    error: '/error'
  },
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
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
            uid: credentials?.email,
            password: credentials?.password,
          },
        });
        if (user) {
          console.log(user)
          return user;
        } else {
          throw new Error('User not found, Please Sign Up!')
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github") {
        const userDB = await prisma.user.upsert({
          where: { uid: user.email + "_" + user.id },
          update: {},
          create: {
            email: user.email,
            uid: user.email + "_" + user.id,
            role: "User",
            name: user.name,
            image: user.image,
            provider: "Github",
          },
        });
      } else if (account?.provider === "google") {
        const userDB = await prisma.user.upsert({
          where: { uid: user.email + "_" + user.id },
          update: {},
          create: {
            email: user?.email,
            uid: user.email + "_" + user.id,
            role: "User",
            name: user.name,
            image: user.image,
            provider: "Google",
          },
        });
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // add the user role to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role; // add the user role to the session
      return session;
    },
  },
};
