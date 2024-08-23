"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaFire } from "react-icons/fa";
import { v4 as uuid } from "uuid";
const tags = Array.from({ length: 9 }).map(
  (_, i) =>
    `this is post,${i} lorem ipsum dolor sito amet  `,
);

export default function Home() {
  const {data: session} = useSession()
  return (
    <>
      {/* when not signed in: */}
      <div className=" mt-16 flex flex-col items-center">
        <h1 className="mb-3 flex flex-col items-center text-5xl font-extrabold">
          <span className="relative mb-5">
            <span>The </span>
            <span className="group relative ">
              BEST
              <Image
                src={"./bbblob.svg"}
                className="!left-8 !top-6 -z-10 !size-14 scale-[3.5] transition-all group-hover:scale-[3.7]"
                fill={true}
                alt="blobl"
              />
            </span>
          </span>
          <span>Blog in Town</span>
        </h1>
        <h3 className="text-center font-medium">
          <span className="relative m-5  ">
            Tech Blog is The Place Where Tech Enthusiasts Like You, Talk Tech
            <Image
              src={"./cccircle.svg"}
              className="!left-[27.7rem] !top-2 hidden !w-10 scale-[3.5] md:block"
              fill={true}
              alt="circle"
            />
          </span>
        </h3>
        {!session?.user.email ? (
          <span className="relative">
            <Link
              href="/auth"
              className="hover:bg-primary/90 group mt-4 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-text ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <FaFire className="mr-1 text-yellow-500 transition-all group-hover:scale-125" />{" "}
              Sign up Now!
            </Link>
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className="mt-28 flex flex-col items-center">
        <h2 className="m-5 border-b-2 border-transparent text-3xl font-bold transition-all hover:border-b-2 hover:border-primary">
          Discover Latest Posts
        </h2>
        <div className="flex flex-col flex-wrap  justify-start md:flex-row">
          <div className="flex w-[95vw] flex-col items-center rounded-md transition-all ">
            <h3 className="m-5 w-[75vw] text-2xl font-semibold transition-all ">
              Editors Pick
            </h3>
            <div className="my-5 flex flex-col flex-wrap justify-center gap-10 md:flex-row ">
              {tags.map((tag) => (
                <Card
                  key={uuid()}
                  className="max-w-[20rem] transition-all hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle>Post</CardTitle>
                    <CardDescription>This is some Post</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{tag}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h3 className="m-5 w-[75vw] text-2xl font-semibold transition-all ">
              Top Pick
            </h3>
            <div className="my-5 flex flex-col flex-wrap justify-center gap-10 md:flex-row ">
              {tags.map((tag) => (
                <Card
                  key={uuid()}
                  className="max-w-[20rem] transition-all hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle>Post</CardTitle>
                    <CardDescription>This is some Post</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{tag}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
