// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "User" | "Admin"; // change from Role to "User" | "Admin"
      name: string;
      email: string;
      image?: string | "https://dummyimage.com/400x400";
      provider: string; // 
    };
  }

  interface User {
    id: string;
    role: "User" | "Admin"; // change from Role to "User" | "Admin"
    name: string;
    email: string;
    image?: string | "https://dummyimage.com/400x400";
    provider: string; // 
  }

  interface Role{
    role: "User" | "Admin"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    name: string;
    email: string;
    image?: string | "https://dummyimage.com/400x400";
    role: "User" | "Admin";
    provider: string;
    id: string;
  }
  
}
