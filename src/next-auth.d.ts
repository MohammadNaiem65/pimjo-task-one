import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string;
      email?: string;
      password?: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface User {
    name?: string;
    email?: string;
    password?: string;
    image?: string;
  }
}

declare module "next/server" {
  interface NextRequest {
    auth: {
      user?: {
        id?: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
      };
      expires?: string;
    } | null;
  }
}
