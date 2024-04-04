'use client'
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RedirectType, redirect } from "next/navigation";

export default function Page() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <>
        <Card className="mx-auto mt-20 max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">Login to TechBlog</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button onClick={() => signIn('github')} variant="outline" className="w-full">
                <FaGithub className="mr-3" />Login with GitHub
              </Button>
              <Button onClick={() => signIn('google')} variant="outline" className="w-full">
                <FaGoogle className="mr-3" />Login with Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </>
    );
  }
  else {
    redirect('/', RedirectType.replace)
  }
}
