import { ChevronDown, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

import { auth, signOut } from "@/auth";
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div>
      <div className="max-content-width mx-auto h-5 border-x" />

      <nav className="h-20.75 w-full border-y">
        <div className="max-content-width mx-auto flex h-full items-center justify-between border-x px-8">
          <Image src={"/logo.png"} alt="logo" width={110} height={44} preload />

          <div className="flex items-center justify-between gap-x-6">
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

            <AccountDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
}

async function AccountDropdown() {
  const links = [
    {
      name: "Overview",
      icon: "/icons/circles.svg",
    },
    {
      name: "Downloads",
      icon: "/icons/download.svg",
    },
    {
      name: "Billing",
      icon: "/icons/doc.svg",
    },
  ];

  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-10.5 cursor-pointer rounded-xl border border-black bg-gray-800 px-4.5 py-2.75 text-sm font-medium inset-shadow-[0px_16px_8px_0px_#1F1F1F03] hover:bg-gray-900">
          <FaCircleUser className="size-6" />
          <span>Account</span>
          <ChevronDown className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        sideOffset={12}
        align="end"
        className="w-75 rounded-[1.25rem] p-2 shadow-lg"
      >
        <DropdownMenuLabel className="px-4 py-3.5">
          <h4 className="text-base leading-6 font-medium text-title">
            {session?.user?.name}
          </h4>
          <p className="mt-0.5 text-sm leading-5 text-text-secondary">
            {session?.user?.email}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((link) => (
          <DropdownMenuItem
            key={link.name}
            className="flex h-13 cursor-pointer items-center justify-start gap-x-3 rounded-[0.875rem] px-4 font-medium"
          >
            <Image src={link.icon} alt="circles" width={24} height={24} />
            {link.name}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex h-13 cursor-pointer items-center justify-start gap-x-3 rounded-[0.875rem] px-0 py-0"
          asChild
        >
          <form
            action={async () => {
              "use server";

              return await signOut({ redirectTo: "/sign-in" });
            }}
          >
            <button
              type="submit"
              className="flex h-full w-full cursor-pointer items-center justify-start gap-x-3 px-4 font-medium"
            >
              <CiLogout className="size-6 text-gray-400" />
              Log Out
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
