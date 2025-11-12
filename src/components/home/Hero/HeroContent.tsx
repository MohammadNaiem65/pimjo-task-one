import bgImg from "@/../public/backgrounds/hero-gradient.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const users = [
  {
    name: "woman_one",
    avatar: "/one.png",
    fallback: "CN",
  },
  {
    name: "man_one",
    avatar: "/two.png",
    fallback: "LR",
  },
  {
    name: "woman_two",
    avatar: "/three.png",
    fallback: "ER",
  },
  {
    name: "man_two",
    avatar: "/four.png",
    fallback: "RT",
  },
];

export default function HeroContent() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className={`flex h-115 w-full flex-col items-center justify-center border-x bg-cover pt-16`}
    >
      <UsersBadge />

      <h1 className="mt-8 text-center text-[3.25rem]/[3.625rem] font-semibold">
        The Ultimate UI Library and <br />
        Design System for Figma
      </h1>

      <p className="mt-4.5 max-w-182.5 text-center text-lg text-text-secondary">
        A complete toolkit for modern designers — 600+ functional Figma UI
        components for landing pages, e-commerce, dashboards, and more. Boost
        your workflow <br />
        and creativity with our product.
      </p>

      <div className="mt-8 flex items-center gap-x-3">
        <Button className="h-11 cursor-pointer gap-x-2 rounded-xl border bg-transparent py-3 text-sm font-medium text-title has-[>svg]:px-3.5">
          <Image src="/icons/figma.png" alt="" width={24} height={24} />
          <span>
            <span>Preview</span>{" "}
            <span className="text-text-secondary">- Figma</span>
          </span>

          <ChevronRight className="size-5" />
        </Button>

        <Button className="h-11 cursor-pointer gap-x-2 rounded-xl border border-brand-600 bg-brand-600 py-3 text-sm font-medium text-white hover:bg-brand-700 has-[>svg]:px-3.5">
          <span>
            <span>Buy Now</span>{" "}
            <span className="text-white/72">- One-time</span>
          </span>

          <ChevronRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

function UsersBadge() {
  return (
    <Badge className="border border-[#EDEDED] bg-white py-1.75">
      <div className="flex -space-x-2 text-black *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
        {users.map((user) => (
          <Avatar className="size-6" key={user.avatar}>
            <AvatarImage src={`/avatars/${user.avatar}`} alt={user.name} />
            <AvatarFallback>{user.fallback}</AvatarFallback>
          </Avatar>
        ))}
      </div>

      <span className="mr-2 ml-2.5 font-geist-mono text-sm font-medium text-text-secondary">
        Used by 65,000+ Designers worldwide
      </span>

      <Link
        href="#"
        className="flex h-5.5 w-7 items-center justify-center rounded-full border border-[#EDEDED] text-gray-500"
      >
        <ChevronRight className="size-4" />
      </Link>
    </Badge>
  );
}
