import type { NextAuthOptions } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
    error: "/error",
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
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    
  ],

  callbacks: {
    async signIn({ user, account }) {
      console.log(user);
      console.log(account);
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
      } else if (account?.provider === "discord") {
        const userDB = await prisma.user.upsert({
          where: { uid: user.email + "_" + user.id },
          update: {},
          create: {
            email: user?.email,
            uid: user.email + "_" + user.id,
            role: "User",
            name: user.name,
            image: user.image,
            provider: "Discord",
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
