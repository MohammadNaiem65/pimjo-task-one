import AuthForm from "@/components/auth/shared/Form";
import Header from "@/components/auth/shared/Header";
import { AuthFormState } from "@/components/auth/shared/types";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Register | Pimjo",
    description: "Register to your account | Pimjo",
  };
}

export default function LoginPage() {
  const signUpAction = async (
    _prevState: AuthFormState,
    formData: FormData,
  ) => {
    "use server";

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!name || !email || !password) {
      return {
        error: "All fields are required",
        success: undefined,
        fieldErrors: {},
      };
    }

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

      const response = await fetch(`${baseUrl}/api/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ full_name: name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      return {
        success: "You have successfully signed up",
        error: undefined,
        fieldErrors: {},
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        error: "Failed to sign up",
        success: undefined,
        fieldErrors: {},
      };
    }
  };
  return (
    <div>
      <Header type="sign-up" />

      <div className="w-full border-y">
        <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
          <div className="pattern-section-content-width flex h-full items-center justify-center border-x bg-white">
            <AuthForm type="sign-up" action={signUpAction} />
          </div>
        </div>
      </div>
    </div>
  );
}
