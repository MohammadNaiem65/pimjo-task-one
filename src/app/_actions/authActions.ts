"use server";

import { signIn } from "@/auth";

export async function socialSignIn(formData: FormData) {
  const action = formData.get("action");
  if (!action) return;

  if (action === "github") {
    return await signIn("github", {
      redirectTo: "/dashboard?auth=oauth-success",
    });
  }

  if (action === "google") {
    return await signIn("google", {
      redirectTo: "/dashboard?auth=oauth-success",
    });
  }
}
