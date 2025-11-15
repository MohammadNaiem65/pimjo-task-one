import { supabaseAdmin } from "@/lib/supabase/server";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),

    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const { email, password } = credentialsSchema.parse(credentials);

          // Sign in with Supabase Auth
          const { data, error } = await supabaseAdmin.auth.signInWithPassword({
            email,
            password,
          });

          if (error || !data.user) {
            return null;
          }

          // Get profile data
          const { data: profile } = await supabaseAdmin
            .from("profiles")
            .select("full_name, avatar_url")
            .eq("id", data.user.id)
            .single();

          return {
            id: data.user.id,
            email: data.user.email!,
            name: profile?.full_name || data.user.email,
            image: profile?.avatar_url || null,
          };
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Handle OAuth providers (Google, GitHub)
      if (account?.provider !== "credentials") {
        try {
          // Check if user already exists in Supabase Auth
          const { data: existingUser } =
            await supabaseAdmin.auth.admin.getUserById(user.id!);

          if (!existingUser.user) {
            // Create user in Supabase Auth
            const { data: newUser, error: createError } =
              await supabaseAdmin.auth.admin.createUser({
                email: user.email!,
                email_confirm: true,
                user_metadata: {
                  full_name: user.name,
                  avatar_url: user.image,
                  provider: account?.provider,
                },
              });

            if (createError) {
              return false;
            }

            user.id = newUser.user.id;
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          return false;
        }
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
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
