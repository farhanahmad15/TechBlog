"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export default function Page() {
  const { data: session } = useSession();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      {/* <div className="m-2">
                <center>
                    <Image className="rounded-full" src={session?.user?.image ?? "https://dummyimage.com/40x40"} alt={session?.user?.name ?? "User Name"} height={100} width={100} />
                    <p className="font-bold m-2 text-2xl">Welcome, {session?.user?.name ?? "User Name"}</p>
                </center>
            </div> */}
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-3xl font-semibold">Settings</h1>
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav className="grid gap-4 text-sm text-muted-foreground">
              <Link href="#" className="font-semibold text-primary">
                General
              </Link>
              <Link href="#">Basic</Link>
              <Link href="#">Personal Information</Link>
              <Link href="#">Posts</Link>
              <Link href="#">Advanced</Link>
            </nav>
            <div className="grid gap-6">
              <center>
                <Image
                  className="rounded-full"
                  src={session?.user?.image ?? "https://dummyimage.com/40x40"}
                  alt={session?.user?.name ?? "User Name"}
                  height={100}
                  width={100}
                />
                <p className="font-bold m-2 text-2xl">
                  Welcome, {session?.user?.name ?? "User Name"}
                </p>
              </center>
              <Card>
                <CardHeader>
                  <CardTitle>Store Name</CardTitle>
                  <CardDescription>
                    Used to identify your store in the marketplace.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <Input placeholder="Store Name" />
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plugins Directory</CardTitle>
                  <CardDescription>
                    The directory within your project, in which your plugins are
                    located.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-4">
                    <Input
                      placeholder="Project Name"
                      defaultValue="/content/plugins"
                    />
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include" defaultChecked />
                      <label
                        htmlFor="include"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Allow administrators to change the directory.
                      </label>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
