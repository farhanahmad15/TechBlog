import type {NextAuthOptions} from 'next-auth'
import GithubProvider, {GithubProfile} from "next-auth/providers/github"
import GoogleProvider, {GoogleProfile} from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions:NextAuthOptions = {
    providers: [
        GithubProvider({
            profile(profile: GithubProfile){
                return{
                    ...profile,
                    role: profile.role ?? 'User',
                    id: profile.id.toString(),
                    image: profile.avatar_url
            }
            },
          clientId: process.env.GITHUB_ID!,
          clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            profile(profile: GoogleProfile){
                return{
                    ...profile,
                    role: profile.role ?? 'User',
                    id: profile.sub,
                    image: profile.picture
                }
            },
          clientId: process.env.GOOGLE_ID!,
          clientSecret: process.env.GOOGLE_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "email",
                    placeholder: "john@doe.com"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "1", email: "farhan@gmail.com", password: "admin", role:"Admin" }

                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
      ],
        pages:{
          signIn: '/auth/signin'
        },
        callbacks: {
            async jwt({ token, user }) {
              if(user) token.role = user.role
              return token
            },
            async session({ session, token }) {
              if(session?.user) session.user.role = token.role
              return session
            }
          }
}