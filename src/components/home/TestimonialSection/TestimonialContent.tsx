import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function TestimonialContent() {
  return (
    <div className="ml-10 pt-19.5 pb-10">
      <Badge className="gap-x-1.5 rounded-lg border border-[#EDEDED] bg-white px-2.75 py-2 text-text-secondary">
        <Image src="/icons/star.svg" alt="code" width={18} height={18} />

        <span className="font-geist-mono text-sm font-medium">Testimonial</span>
      </Badge>

      <h3 className="mt-4 text-[2.5rem]/[3rem] font-medium text-title">
        Our Wall of Love - Words from
        <br /> Happy Customers
      </h3>
      <p className="mt-4.5 text-lg text-text-secondary">
        Trusted by{" "}
        <span className="font-medium text-text">design professionals</span> and{" "}
        <span className="font-medium text-text">loved by creators</span>{" "}
        worldwide.
      </p>
    </div>
  );
}
