import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function CompanyInfo() {
  return (
    <div className="max-w-110">
      <Image src={"/logo.png"} alt="logo" width={110} height={44} />

      <p className="mt-7 text-base leading-6 text-text-secondary">
        Browse and effortlessly copy-paste from over 800+ components and
        templates to craft high-quality, custom Tailwind CSS websites without
        coding.
      </p>

      <div className="mt-12 flex items-center justify-start gap-x-2">
        <Link href={"#"}>
          <Button
            className="cursor-pointer rounded-[9px] border text-gray-400 shadow-md has-[>svg]:px-1.75 has-[>svg]:py-1.75"
            variant="ghost"
          >
            <FaXTwitter className="size-4.5" />
          </Button>
        </Link>

        <Link href={"#"}>
          <Button
            className="cursor-pointer rounded-[9px] border text-gray-400 shadow-md has-[>svg]:px-1.75 has-[>svg]:py-1.75"
            variant="ghost"
          >
            <Github className="size-4.5" />
          </Button>
        </Link>

        <Link href={"#"}>
          <Button
            className="cursor-pointer rounded-[9px] border text-gray-400 shadow-md has-[>svg]:px-1.75 has-[>svg]:py-1.75"
            variant="ghost"
          >
            <FaDiscord className="size-4.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
