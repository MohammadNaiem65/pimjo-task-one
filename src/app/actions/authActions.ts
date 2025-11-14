"use server";

import { signIn } from "@/auth";

export async function socialSignIn(formData: FormData) {
  const action = formData.get("action");

  if (!action) return;

  if (action === "github") {
    return await signIn("github");
  }

  if (action === "google") {
    return await signIn("google");
  }
}
