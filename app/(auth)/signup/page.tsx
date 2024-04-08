"use client";
import { signIn, useSession } from "next-auth/react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RedirectType, redirect } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Page() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <Card className="mx-auto max-w-sm md:mt-2">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
          <CardDescription className="text-center">
            Sign up with TechBlog
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button
              onClick={() => signIn("github")}
              variant="outline"
              className="w-full"
            >
              <FaGithub className="mr-3" />
              Sign up with GitHub
            </Button>
            <Button
              onClick={() => signIn("google")}
              variant="outline"
              className="w-full"
            >
              <FaGoogle className="mr-3" />
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/signin" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    redirect("/", RedirectType.replace);
  }
}
