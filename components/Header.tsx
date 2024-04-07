"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import Notifications from "./Notifications";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const notifications = [
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
  {
    name: "Notification",
    description:
      "RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST RESTTEST ",
    date: new Date(),
  },
];
function Header() {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <header className="bg-background text-text body-font border-b-gray-300 border-b-[1px]">
      {/* mobile */}
        <div className="flex justify-between items-center md:hidden">
          <Link
            href="/"
            className="flex items-center text-center justify-center h-full title-font font-medium text-text"
          >
            <span className="m-2  text-xl font-bold transition-all hover:scale-105">
              Blog
            </span>
          </Link>
          <Sheet>
            <SheetTrigger className="m-3">
            <RxHamburgerMenu />
            </SheetTrigger>
            <SheetContent>
            <nav className="mt-5 float-right flex flex-col  text-base justify-center">
            <Link
              href="/"
              className="m-4 text-text font-semibold transition-all hover:brightness-75"
            >
              Home
            </Link>
            <Link
              href="/"
              className="m-4 text-text font-semibold transition-all hover:brightness-75"
            >
              Posts
            </Link>
            <Link
              href="/"
              className="m-4 text-text font-semibold transition-all hover:brightness-75"
            >
              About
            </Link>
            {session ? (
              <></>
            ) : (
              <Link
                href="/"
                onClick={() => signIn()}
                className="m-4 text-text font-semibold transition-all hover:brightness-75"
              >
                Login
              </Link>
            )}
          </nav>
            </SheetContent>
          </Sheet>
        </div>

          {/* large screens */}
        <div className="hidden container mx-auto flex-wrap p-5 flex-col md:flex-row items-center md:flex">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-text mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-bold transition-all hover:scale-105">
              Blog
            </span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="mr-5 text-text font-semibold transition-all hover:brightness-75"
            >
              Home
            </Link>
            <Link
              href="/"
              className="mr-5 text-text font-semibold transition-all hover:brightness-75"
            >
              Posts
            </Link>
            <Link
              href="/"
              className="mr-5 text-text font-semibold transition-all hover:brightness-75"
            >
              About
            </Link>
            {session ? (
              <></>
            ) : (
              <Link
                href="/"
                onClick={() => signIn()}
                className="mr-5 text-text font-semibold transition-all hover:brightness-75"
              >
                Login
              </Link>
            )}
          </nav>

          {session ? (
            <>
              {/* NOTIFICATION MENU*/}
              <DropdownMenu>
                <DropdownMenuTrigger className={"mx-2"}>
                  <IoNotifications className="size-6 text-text" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <ScrollArea className="h-80">
                    {notifications.map((notification, index) => (
                      <Notifications
                        key={index}
                        title={notification.name}
                        description={notification.description}
                        date={notification.date}
                      />
                    ))}
                  </ScrollArea>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* THEME SWITCH */}
              <ThemeSwitcher />
              {/* SETTINGS */}
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DropdownMenu>
                  <DropdownMenuTrigger className="mx-2">
                    <Avatar className="size-7">
                      <AvatarImage src={session?.user?.image ?? ""} />
                      <AvatarFallback>
                        {session?.user?.name ?? ""}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/account">My Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/">My Posts</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DialogTrigger asChild >
                      <DropdownMenuItem>
                        <span
                          className="text-red-600 m-1 hover:cursor-pointer"
                        >
                          Logout
                        </span>
                      </DropdownMenuItem>
                    </DialogTrigger>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are You Sure You want to Logout?</DialogTitle>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant={"default"} onClick={() => setModalOpen(false)}>No</Button>
                    <Button variant={"destructive"} onClick={() => signOut()}>Yes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          ) : (
            <ThemeSwitcher />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
