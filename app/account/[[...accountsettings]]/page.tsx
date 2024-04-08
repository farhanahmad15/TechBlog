"use server";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import { authOptions } from "@/lib/nextAuthOptions";

export default async function Page({
  params,
}: {
  params: { accountsettings: string };
}) {
  const session = await getServerSession(authOptions);
  
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
          <p>Your role is {session?.user?.role}</p>
          <p>You signed up using {session?.user?.provider}</p>
          <p>You Email is {session?.user?.email}</p>
          <p>You ID is {session?.user?.id}</p>
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
