import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";
import { Github, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import Logout from "./Logout";
import MegaMenuWrapper from "./MegaMenuWrapper";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="flex h-[83px] w-full items-center justify-center border-y">
      {/* Nav content */}
      <div className="max-content-width flex w-full items-center justify-between border-x px-8 py-5">
        {/* Right side links */}
        <div className="flex items-center justify-between gap-x-11">
          <Image src={"/logo.png"} alt="logo" width={110} height={44} />

          <MegaMenuWrapper />
        </div>

        <div className="flex items-center justify-between gap-x-6">
          {/* Input */}
          <div className="flex h-11 w-[250px] items-center rounded-lg border border-secondary py-[8.5px] pr-2.5 pl-4 text-text-tertiary">
            <Search className="size-5" />
            <Input
              placeholder="Quick search..."
              className="border-0 pl-3 text-sm shadow-none focus-visible:ring-0"
            />
            <Kbd className="flex h-[27px] w-14 items-center justify-center border border-[#F3F4F6] bg-background p-0 text-xs text-text-secondary">
              ⌘ K
            </Kbd>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-between gap-x-2">
            <Link href={"#"}>
              <Button
                className="cursor-pointer rounded-[9px] border text-gray-400"
                variant="ghost"
              >
                <FaXTwitter />
              </Button>
            </Link>

            <Link href={"#"}>
              <Button
                className="cursor-pointer rounded-[9px] border text-gray-400"
                variant="ghost"
              >
                <Github />
              </Button>
            </Link>

            <Link href={"#"}>
              <Button
                className="cursor-pointer rounded-[9px] border text-gray-400"
                variant="ghost"
              >
                <FaDiscord />
              </Button>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {session?.user ? (
              <Logout />
            ) : (
              <Link href={"/sign-in"} className="text-sm font-medium text-text">
                Sign in
              </Link>
            )}

            <Button className="h-10.5 cursor-pointer rounded-xl border border-black bg-gray-800 px-4.5 py-2.75 text-sm font-medium inset-shadow-[0px_16px_8px_0px_#1F1F1F03] hover:bg-gray-900">
              Pricing & FAQ
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
