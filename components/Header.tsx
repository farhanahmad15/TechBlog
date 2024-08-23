"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession, signIn, signOut } from "next-auth/react";
import { v4 as uuid } from 'uuid'

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
} from "@/components/ui/sheet";
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
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <header className="body-font border-b-[1px] border-b-gray-300 bg-background  text-text dark:border-b-blue-950">
        {/* mobile */}
        <div className="flex items-center justify-between md:hidden">
          <Link
            href="/"
            className="title-font flex h-full items-center justify-center text-center font-medium text-text"
          >
            <span className="m-2  text-xl font-bold transition-all hover:scale-105">
              Blog
            </span>
          </Link>
          <div>
            <div className="flex">
              {session ? (
                <div className="flex">
                  {/* NOTIFICATION MENU*/}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="mx-2">
                      <IoNotifications className="size-4 text-text" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent asChild>
                      <ScrollArea className="m-4 h-96 w-3/4 md:h-80">
                        {notifications.map((notification, index) => (
                          <Notifications
                            key={uuid()}
                            title={notification.name}
                            description={notification.description}
                            date={notification.date}
                          />
                        ))}
                      </ScrollArea>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/* THEME SWITCH */}
                  <ThemeSwitcher className="mx-2 my-1" />
                  {/* SETTINGS */}
                </div>
              ) : (
                <ThemeSwitcher />
              )}
              <Sheet>
                <SheetTrigger className="m-3">
                  <RxHamburgerMenu />
                </SheetTrigger>
                <SheetContent>
                  {session ? (
                    <>
                      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="mx-2">
                            <Avatar className="size-10">
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
                            <DialogTrigger asChild>
                              <DropdownMenuItem>
                                <span className=" text-red-600 hover:cursor-pointer">
                                  Sign out
                                </span>
                              </DropdownMenuItem>
                            </DialogTrigger>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Are You Sure You want to Sign out?
                            </DialogTitle>
                          </DialogHeader>
                          <DialogFooter>
                            <Button
                              variant={"default"}
                              onClick={() => setModalOpen(false)}
                              className="w-10"
                            >
                              No
                            </Button>
                            <Button
                              variant={"destructive"}
                              onClick={() => signOut()}
                              className="w-10"
                            >
                              Yes
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : (
                    <></>
                  )}
                  <nav className="mt-5 flex w-full flex-col  justify-center text-base">
                    <Link
                      href="/"
                      className="h-full  w-full rounded p-4 font-semibold text-text shadow-sm transition-all focus:bg-accent"
                    >
                      Home
                    </Link>
                    <Link
                      href="/"
                      className="h-full  w-full rounded p-4 font-semibold text-text shadow-sm transition-all focus:bg-accent"
                    >
                      Posts
                    </Link>
                    <Link
                      href="/about"
                      className="h-full  w-full rounded p-4 font-semibold text-text shadow-sm transition-all focus:bg-accent"
                    >
                      About
                    </Link>
                    {session ? (
                      <></>
                    ) : (
                      <Link
                        href="/"
                        onClick={() => signIn()}
                        className="h-full  w-full rounded p-4 font-semibold text-text shadow-sm transition-all focus:bg-accent"
                      >
                        Login
                      </Link>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* large screens */}

        <div className="container mx-auto hidden flex-col flex-wrap items-center p-5 md:flex md:flex-row">
          <Link
            href="/"
            className="title-font mb-4 flex items-center font-medium text-text md:mb-0"
          >
            <span className="ml-3 text-xl font-bold transition-all hover:scale-105">
              Blog
            </span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <Link
              href="/"
              className="mr-5 font-semibold text-text transition-all hover:brightness-75"
            >
              Home
            </Link>
            <Link
              href="/"
              className="mr-5 font-semibold text-text transition-all hover:brightness-75"
            >
              Posts
            </Link>
            <Link
              href="/about"
              className="mr-5 font-semibold text-text transition-all hover:brightness-75"
            >
              About
            </Link>
            {session ? (
              <></>
            ) : (
              <Link
                href="/"
                onClick={() => signIn()}
                className="mr-5 font-semibold text-text transition-all hover:brightness-75"
              >
                Sign in
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
                        key={uuid()}
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
                    <DialogTrigger asChild>
                      <DropdownMenuItem className="group">
                        <span className=" text-red-600 group-hover:cursor-pointer">
                          Sign out
                        </span>
                      </DropdownMenuItem>
                    </DialogTrigger>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Are You Sure You want to Sign out?
                    </DialogTitle>
                  </DialogHeader>
                  <DialogFooter>
                    <Button
                      variant={"default"}
                      onClick={() => setModalOpen(false)}
                    >
                      No
                    </Button>
                    <Button variant={"destructive"} onClick={() => signOut()}>
                      Yes
                    </Button>
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
