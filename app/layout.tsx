import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechBlog",
  description: "A Tech Blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <SessionProvider session={session}>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
          
            <Header/>
            {children}
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
