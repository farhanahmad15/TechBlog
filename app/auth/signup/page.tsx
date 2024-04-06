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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RedirectType, redirect } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signup } from "@/app/(actions)/signup";
import { useFormStatus } from "react-dom";

export default function Page() {
  const { data: session } = useSession();
  const {pending} = useFormStatus()
  if (!session) {
    return (
      <Card className="mx-auto mt-2 max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form className="grid gap-4" onSubmit={signup}>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    required
                    name="firstName"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  name="email"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" />
              </div>
              <Button type="submit" className="w-full" disabled={pending} >
                Create an account
              </Button>
            </form>
            <Button
              onClick={() => signIn("github")}
              variant="outline"
              className="w-full"
            >
              <FaGithub className="mr-3" />
              Signup with GitHub
            </Button>
            <Button
              onClick={() => signIn("google")}
              variant="outline"
              className="w-full"
            >
              <FaGoogle className="mr-3" />
              Signup with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="underline">
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
