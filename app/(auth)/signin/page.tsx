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

export default function Page() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Card className="mx-auto max-w-sm md:mt-2">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Login</CardTitle>
            <CardDescription className="text-center">
              Login to TechBlog
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
                Login with Google
              </Button>
              <Button
                onClick={() => signIn("github")}
                variant="outline"
                className="w-full"
              >
                <FaGithub className="mr-3" />
                Login with GitHub
              </Button>
              <Button
                onClick={() => signIn("discord")}
                variant="outline"
                className="w-full"
              >
                <FaDiscord className="mr-3" />
                Login with Discord
              </Button>
             

            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </>
    );
  } else {
    redirect("/", RedirectType.replace);
  }
}
