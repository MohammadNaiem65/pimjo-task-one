import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function TemplateContent() {
  return (
    <div className="ml-10 pt-19.5 pb-10">
      <Badge className="gap-x-1.5 rounded-lg border border-[#EDEDED] bg-white py-1.75 text-text-secondary">
        <Image src="/icons/layout-3.svg" alt="code" width={18} height={18} />

        <span className="font-geist-mono text-sm font-medium">Templates</span>
      </Badge>

      <h3 className="mt-4 text-4xl/[3rem] font-medium text-title">
        Ready-to-use Figma templates for
        <br />
        building websites faster.
      </h3>
      <p className="mt-4.5 text-lg text-text-secondary">
        Design and explore stunning website layouts with our{" "}
        <span className="font-medium text-text">ready-made templates.</span>
      </p>
    </div>
  );
}
