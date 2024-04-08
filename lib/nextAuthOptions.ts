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
  debug: true,
  providers: [
    GithubProvider({
      profile(profile: GithubProfile) {
        return {
          uid: profile.email + "_" + profile.id,
          email: profile.email || "No Email Provided",
          name: profile.login,
          role: "User",
          provider: "Github",
          image: profile.avatar_url,
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      profile(profile: GoogleProfile) {
        return {
          uid: profile.email + "_" + profile.sub,
          email: profile.email || "No Email Provided",
          name: profile.name,
          role: "User",
          provider: "Google",
          image: profile.picture,
          id: Number(profile.sub)
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
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
        token.role = user.role
        token.provider = user.provider
        token.uid = user.uid
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role
        session.user.provider = token.provider
        session.user.uid = token.uid
      } // add the user role to the session
      return session;
    },
  },
};
