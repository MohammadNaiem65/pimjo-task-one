import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

export default function HeaderSection() {
  return (
    <div className="flex items-center justify-between p-6">
      <h3 className="text-lg leading-7 font-semibold text-title">All Users</h3>

      <div className="flex items-center justify-between gap-x-3">
        {/* Search input */}
        <div className="flex h-11 w-[320px] items-center rounded-lg border border-[#D0D5DD] py-[8.5px] pr-2.5 pl-4 text-text-tertiary">
          <Search className="size-5" />
          <Input
            placeholder="Search"
            className="border-0 pl-3 text-sm shadow-none focus-visible:ring-0"
          />
        </div>

        {/* Filter button */}
        <Button variant="outline" className="border-[#D0D5DD]">
          <Image
            src="/icons/filter.svg"
            alt="Filter"
            width={20}
            height={20}
            className="size-5"
          />
          <span className="text-sm leading-5 text-[#344054]">Filter</span>
        </Button>
      </div>
    </div>
  );
}
