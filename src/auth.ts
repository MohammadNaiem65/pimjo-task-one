import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Remove the adapter entirely

  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email?: string;
          password?: string;
        };

        if (!email || !password) return null;

        const { data } = await supabase
          .from("auth_credentials")
          .select("*")
          .eq("email", email)
          .single();

        if (!data) return null;

        const valid = await bcrypt.compare(password, data.password_hash);
        if (!valid) return null;

        return {
          id: data.user_id,
          email,
          name: email,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async signIn({ user, account }) {
      // Store OAuth users in your Supabase users table manually if needed
      if (account?.provider === "google" || account?.provider === "github") {
        const { error } = await supabase.from("users").upsert(
          {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          },
          { onConflict: "email" },
        );

        if (error) console.error("Error storing user:", error);
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.id && typeof token.id === "string") {
        session.user.id = token.id;
      }
      return session;
    },
  },
});
