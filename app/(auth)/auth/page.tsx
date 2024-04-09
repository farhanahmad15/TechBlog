"use client";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RedirectType, redirect } from "next/navigation";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Page() {
  const { data: session } = useSession();
  const [tab, setTab] = useState<string>('signin')
  if (!session) {
    return (
      <>
        <Tabs defaultValue="signin" className="max-w-[400px] mx-auto mt-2" value={tab} onValueChange={(val) => setTab(val)}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign in</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Sign in</CardTitle>
                <CardDescription className="text-center">
                  Sign in to TechBlog
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Button
                    onClick={() => signIn("google")}
                    variant="outline"
                    className="w-full"
                  >
                    <FaGoogle className="mr-3" />
                    Sign in with Google
                  </Button>
                  <Button
                    onClick={() => signIn("github")}
                    variant="outline"
                    className="w-full"
                  >
                    <FaGithub className="mr-3" />
                    Sign in with GitHub
                  </Button>
                  <Button
                    onClick={() => signIn("discord")}
                    variant="outline"
                    className="w-full"
                  >
                    <FaDiscord className="mr-3" />
                    Sign in with Discord
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <span onClick={() => setTab('signup')} className="underline hover:cursor-pointer">
                    Sign up
                  </span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
                <CardDescription className="text-center">
                  Sign up with TechBlog
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Button
                    onClick={() => signIn("google")}
                    variant="outline"
                    className="w-full"
                  >
                    <FaGoogle className="mr-3" />
                    Sign up with Google
                  </Button>
                  <Button
                    onClick={() => signIn("github")}
                    variant="outline"
                    className="w-full"
                  >
                    <FaGithub className="mr-3" />
                    Sign up with GitHub
                  </Button>
                  <Button
                    onClick={() => signIn("discord")}
                    variant="outline"
                    className="w-full"
                  >
                    <FaDiscord className="mr-3" />
                    Sign up with Discord
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <span onClick={() => setTab('signin')} className="underline hover:cursor-pointer">
                    Sign in
                  </span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </>
    );
  } else {
    redirect("/", RedirectType.replace);
  }
}
