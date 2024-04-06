"use client";
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
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";


const initialState = {
  message: '',
}


function signin(prevState:any,formData: FormData){
 try {
    signIn('credentials',{
      email: formData.get('email'),
      password: formData.get('password'),
      callbackUrl: '/'
    })
    return{message: 'Signin Success'}
 } catch (error) {
    return {message: `${error}`}
 }
}

export default function Page() {
  const {pending} = useFormStatus()
  const [state, formAction] = useFormState(signin, initialState)
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <Card className="mx-auto mt-2 max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Login to TechBlog
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
                Login with GitHub
              </Button>
              <Button
                onClick={() => signIn("google")}
                variant="outline"
                className="w-full"
              >
                <FaGoogle className="mr-3" />
                Login with Google
              </Button>

              <hr />

              {/* credentials */}

              <form action={formAction} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
                <Button type="submit" variant="outline" className="w-full" disabled={pending}>
                  Login
                </Button>
                <h1 className="">{state?.message}</h1>
              </form>
            </div>
            <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="underline">
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
