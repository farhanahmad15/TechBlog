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
import Sidebar from "@/components/Sidebar";

export default function Page({
  params,
}: {
  params: { accountsettings: string };
}) {
  const { data: session } = useSession();
  if (!session) {
    redirect("/api/auth/signin");
  }
  const path =
    params.accountsettings !== undefined
      ? params.accountsettings.toString()
      : "general";
  let content: React.ReactNode;
  if (path == "general") {
    content = (
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
      </div>
    );
  } else if (path == "privacy") {
    content = <h1>Welcome to privacy page</h1>;
  } else if (path == "advanced") {
    content = <h1>Welcome to advanced page</h1>;
  }
  return (
    <>
      <Sidebar
        links={[
          { name: "General", link: "/account/general" },
          { name: "Privacy", link: "/account/privacy" },
          { name: "Advanced", link: "/account/advanced" },
        ]}
      >
        {content}
      </Sidebar>
    </>
  );
}
