import AuthForm from "@/components/auth/shared/Form";
import Header from "@/components/auth/shared/Header";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Register | Pimjo",
    description: "Register to your account | Pimjo",
  };
}

export default function LoginPage() {
  return (
    <div>
      <Header type="sign-up" />

      <div className="w-full border-y">
        <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
          <div className="pattern-section-content-width flex h-full items-center justify-center border-x bg-white">
            <AuthForm type="sign-up" />
          </div>
        </div>
      </div>
    </div>
  );
}
