import Image from "next/image";

interface HeaderProps {
  type: "sign-in" | "sign-up";
}

export default function Header({ type }: HeaderProps) {
  const subtitle =
    type === "sign-in"
      ? "Unlock exclusive access to premium components and design resources."
      : "Join us and start your journey today, it only takes a minute to get started.";

  return (
    <div className="w-full border-b">
      <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
        <div className="pattern-section-content-width flex h-full flex-col items-center justify-center gap-y-4.5 border-x bg-white py-10">
          <Image src="/logo.png" alt="Logo" width={110} height={44} />

          <h1 className="text-[2.5rem]/[3rem] font-medium text-[#2E2E2E]">
            {type === "sign-in" ? "Sign In" : "Sign Up"} to your account
          </h1>

          <p className="max-w-102.5 text-center text-lg/[1.75rem] text-text-secondary">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
