"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });

    router.push("/");
    toast.success("Logged out successfully");
  };
  return (
    <form action={handleLogout}>
      <button
        type="submit"
        className="cursor-pointer text-sm font-medium text-text"
      >
        Log Out
      </button>
    </form>
  );
}
