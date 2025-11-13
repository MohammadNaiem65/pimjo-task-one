import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

export default function AuthForm({ type }: AuthFormProps) {
  return (
    <section className="h-full border-x p-15">
      <div className="h-full w-138 rounded-[2.125rem] bg-gray-100 p-3">
        <Button className="h-13 w-full cursor-pointer rounded-full bg-white hover:bg-gray-200">
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

        <Button className="mt-3 h-13 w-full cursor-pointer rounded-full bg-white hover:bg-gray-200">
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

        <Divider
          color="#ededed"
          thickness={2}
          className="my-5 text-sm text-text-secondary"
        >
          Or Continue With
        </Divider>

        <Form
          action=""
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
                type="text"
                className="mt-2 h-12 rounded-xl px-4 py-3.5 text-sm leading-5 text-input-placeholder focus-visible:border-brand-300 focus-visible:ring-brand-300"
              />
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
              type="email"
              placeholder="Enter your email"
              className="mt-2 h-12 rounded-xl px-4 py-3.5 text-sm leading-5 text-input-placeholder focus-visible:border-brand-300 focus-visible:ring-brand-300"
            />
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
              type="password"
              placeholder="Enter your password"
              className="mt-2 h-12 rounded-xl px-4 py-3.5 text-sm leading-5 text-input-placeholder focus-visible:border-brand-300 focus-visible:ring-brand-300"
            />
          </div>

          {type === "sign-in" && (
            <p className="text-text-secondary">
              Forgot password?{" "}
              <Link href="/#" className="text-brand-500">
                Reset Here
              </Link>
            </p>
          )}

          <Button
            type="submit"
            className="mt-1 h-11 cursor-pointer gap-x-2 rounded-xl border border-brand-600 bg-brand-600 py-3 text-sm font-medium text-white hover:bg-brand-700 has-[>svg]:px-3.5"
          >
            {type === "sign-in" ? "Sign In" : "Sign Up"}
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
