import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import TemplateFilterTabs from "./TemplateFilterTabs";

export default function TemplateGallery() {
  return (
    <div className="bg-gray-100 pb-15">
      <TemplateFilterTabs />

      {/* Actions */}
      <div className="mx-auto flex w-full items-center justify-center gap-x-3">
        <Button className="h-11 cursor-pointer gap-x-2 rounded-xl border bg-white py-3 text-sm font-medium text-title shadow-md hover:bg-gray-200 has-[>svg]:px-3.5">
          <Image src="/icons/figma.png" alt="" width={24} height={24} />
          <span>
            <span>Preview</span>{" "}
            <span className="text-text-secondary">- Figma</span>
          </span>

          <ChevronRight className="size-5" />
        </Button>

        <Button className="h-11 cursor-pointer gap-x-2 rounded-xl border border-gray-600 bg-gray-800 py-3 text-sm font-medium text-white shadow-md hover:bg-gray-700 has-[>svg]:pr-3 has-[>svg]:pl-4.5">
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
