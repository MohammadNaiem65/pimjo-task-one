import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function PropositionContent() {
  return (
    <div className="mb-10 ml-10 pt-20">
      <Badge className="gap-x-1.5 rounded-lg border border-[#EDEDED] bg-white py-1.75 text-text-secondary">
        <Image src="/icons/code.svg" alt="code" width={18} height={18} />

        <span className="font-geist-mono text-sm font-medium">
          Why Choose us?
        </span>
      </Badge>

      <h3 className="mt-4 text-[2.5rem]/[3rem] font-medium text-title">
        Smart, Collaborative, and Built <br /> for Modern Designers
      </h3>
      <p className="mt-4.5 text-lg text-text-secondary">
        From smart components to real-time updates, everything works together{" "}
        <br /> to keep your team in sync.
      </p>
    </div>
  );
}
