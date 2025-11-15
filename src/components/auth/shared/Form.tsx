"use client";

import { socialSignIn } from "@/app/_actions/authActions";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { AuthFormState } from "./types";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
  action: (
    _prevState: AuthFormState,
    formData: FormData,
  ) => Promise<AuthFormState>;
}

export default function AuthForm({ type, action }: AuthFormProps) {
  const actionInitialState: AuthFormState = {
    error: undefined,
    success: undefined,
    fieldErrors: {},
  };

  const [state, formAction, isPending] = useActionState(
    action,
    actionInitialState,
  );

  useEffect(() => {
    if (state.success === "You have successfully signed in") {
      toast.success("You have successfully signed in");

      redirect("/dashboard");
    } else if (state.success === "You have successfully signed up") {
      toast.success("You have successfully signed up");

      redirect("/sign-in");
    }
  }, [state.success]);

  return (
    <section className="h-full border-x p-15">
      <div className="h-full w-138 rounded-[2.125rem] bg-gray-100 p-3">
        {/* Social logins */}
        <Form action={socialSignIn}>
          <Button
            type="submit"
            name="action"
            value="google"
            className="h-13 w-full cursor-pointer rounded-full bg-white hover:bg-gray-200"
          >
            <Image
              src="/icons/google.svg"
              alt="Google"
              className="size-5"
              width={20}
              height={20}
            />
            <span className="text-sm/[1.25rem] font-medium text-[#0E121B]">
              Continue with Google
            </span>
          </Button>

          <Button
            type="submit"
            name="action"
            value="github"
            className="mt-3 h-13 w-full cursor-pointer rounded-full bg-white hover:bg-gray-200"
          >
            <Image
              src="/icons/github.svg"
              alt="Github"
              className="size-5"
              width={20}
              height={20}
            />
            <span className="text-sm/[1.25rem] font-medium text-[#0E121B]">
              Continue with Github
            </span>
          </Button>
        </Form>

        <Divider
          color="#ededed"
          thickness={2}
          className="my-5 text-sm text-text-secondary"
        >
          Or Continue With
        </Divider>

        <Form
          action={formAction}
          className="flex flex-col gap-y-5 rounded-3xl bg-white p-8"
        >
          {/* Name */}
          {type === "sign-up" && (
            <div>
              <Label
                htmlFor="name"
                className="text-sm leading-5 font-medium text-label-text"
              >
                Full Name
              </Label>

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                disabled={isPending}
                aria-invalid={Boolean(state.fieldErrors?.name)}
                aria-describedby="name-error"
                className={cn(
                  "mt-2 h-12 rounded-xl px-4 py-3.5 text-sm leading-5 text-input-placeholder focus-visible:border-brand-300 focus-visible:ring-brand-300",
                  state.fieldErrors?.name &&
                    "border-red-300 focus-visible:border-red-400 focus-visible:ring-red-400",
                )}
              />

              {state.fieldErrors?.name ? (
                <p className="mt-2 text-sm text-red-600" role="alert">
                  {state.fieldErrors.name}
                </p>
              ) : null}
            </div>
          )}

          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              className="text-sm leading-5 font-medium text-label-text"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              disabled={isPending}
              aria-invalid={Boolean(state.fieldErrors?.email)}
              aria-describedby="email-error"
              required
              className={cn(
                "mt-2 h-12 rounded-xl px-4 py-3.5 text-sm leading-5 text-input-placeholder focus-visible:border-brand-300 focus-visible:ring-brand-300",
                state.fieldErrors?.email &&
                  "border-red-300 focus-visible:border-red-400 focus-visible:ring-red-400",
              )}
            />

            {state.fieldErrors?.email ? (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {state.fieldErrors.email}
              </p>
            ) : null}
          </div>

          {/* Password */}
          <div>
            <Label
              htmlFor="password"
              className="text-sm leading-5 font-medium text-label-text"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              disabled={isPending}
              aria-invalid={Boolean(state.fieldErrors?.password)}
              aria-describedby="password-error"
              required
              className={cn(
                "mt-2 h-12 rounded-xl px-4 py-3.5 text-sm leading-5 text-input-placeholder focus-visible:border-brand-300 focus-visible:ring-brand-300",
                state.fieldErrors?.password &&
                  "border-red-300 focus-visible:border-red-400 focus-visible:ring-red-400",
              )}
            />

            {state.fieldErrors?.password ? (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {state.fieldErrors.password}
              </p>
            ) : null}
          </div>

          {type === "sign-in" && (
            <p className="text-text-secondary">
              Forgot password?{" "}
              <Link href="/#" className="text-brand-500">
                Reset Here
              </Link>
            </p>
          )}

          {state?.error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {state.error}
            </div>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="mt-1 h-11 cursor-pointer gap-x-2 rounded-xl border border-brand-600 bg-brand-600 py-3 text-sm font-medium text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-600/70 disabled:text-brand-600/50 has-[>svg]:px-3.5"
          >
            {isPending
              ? type === "sign-in"
                ? "Signing In..."
                : "Signing Up..."
              : type === "sign-in"
                ? "Sign In"
                : "Sign Up"}
          </Button>

          {type === "sign-in" ? (
            <p className="text-center text-text-secondary">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-brand-500">
                Sign Up
              </Link>
            </p>
          ) : (
            <p className="text-center text-text-secondary">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-brand-500">
                Login Now
              </Link>
            </p>
          )}
        </Form>
      </div>
    </section>
  );
}
