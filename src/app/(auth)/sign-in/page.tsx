import { signIn } from "@/auth";
import AuthForm from "@/components/auth/shared/Form";
import Header from "@/components/auth/shared/Header";
import { AuthFormState } from "@/components/auth/shared/types";
import type { Metadata } from "next";
import { AuthError } from "next-auth";

export function generateMetadata(): Metadata {
  return {
    title: "Login | Pimjo",
    description: "Login to your account | Pimjo",
  };
}

export default function LoginPage() {
  const signInAction = async (
    _prevState: AuthFormState,
    formData: FormData,
  ): Promise<AuthFormState> => {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const result: unknown = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if ((result as { error: string }).error) {
        return {
          success: undefined,
          error: "Invalid email or password.",
          fieldErrors: {
            email: "We couldn't find an account with that email.",
            password: "Double-check your password and try again.",
          },
        };
      }

      return {
        success: "You have successfully signed in",
        error: undefined,
        fieldErrors: {},
      };
    } catch (error) {
      if (error instanceof AuthError && error.type === "CredentialsSignin") {
        return {
          success: undefined,
          error: "Invalid email or password.",
          fieldErrors: {
            email: "We couldn't find an account with that email.",
            password: "Double-check your password and try again.",
          },
        };
      }

      return {
        success: undefined,
        error: "Something went wrong while signing you in. Please try again.",
        fieldErrors: {},
      };
    }
  };

  return (
    <div>
      <Header type="sign-in" />

      <div className="w-full border-y">
        <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
          <div className="pattern-section-content-width flex h-full items-center justify-center border-x bg-white">
            <AuthForm type="sign-in" action={signInAction} />
          </div>
        </div>
      </div>
    </div>
  );
}
