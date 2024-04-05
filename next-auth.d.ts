// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      uid: string;
      role: string;
      name?: string | null;
      email: string;
      image?: string | "https://dummyimage.com/400x400";
    };
  }

  interface User {
    id: int;
    uid: string;
    role: string;
    name: string;
    email: string;
    password: string | null;
    image: string;
    provider: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
  }
}
