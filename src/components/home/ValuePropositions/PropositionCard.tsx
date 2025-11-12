import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export interface Proposition {
  title: string;
  img: string;
  features: {
    icon: string;
    description: string;
  }[];
}

export interface PropositionCardProps {
  proposition: Proposition;
  rowDirection?: "normal" | "reverse";
}

export default function PropositionCard({
  proposition,
  rowDirection = "normal",
}: PropositionCardProps) {
  const { title, img, features } = proposition;

  return (
    <Card className="rounded-none border-0 bg-gray-100 p-5">
      <CardContent
        className={cn(
          "flex items-center justify-between gap-x-22 p-0",
          rowDirection === "reverse" ? "flex-row-reverse" : "flex-row",
        )}
      >
        <div className="ml-5">
          <h3 className="text-[2.5rem]/[3rem] font-medium text-title">
            {title}
          </h3>

          <div className="mt-8 w-137">
            {features.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-between gap-6"
              >
                <Badge className="size-9 rounded-xl border-gray-200 bg-transparent p-0 shadow-md [&>svg]:size-6">
                  <Image
                    src={`/icons/${feature.icon}`}
                    alt="figma-dark"
                    width={24}
                    height={24}
                  />
                </Badge>

                <div className="flex-1 justify-start font-['DM_Sans'] text-base leading-6 font-normal text-text">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-11 flex items-center gap-x-3">
            <Button className="h-11 cursor-pointer gap-x-2 rounded-xl border bg-white py-3 text-sm font-medium text-title shadow-md hover:bg-gray-200 has-[>svg]:px-3.5">
              <Image src="/icons/figma.png" alt="" width={24} height={24} />
              <span>
                <span>Preview</span>{" "}
                <span className="text-text-secondary">- Figma</span>
              </span>

              <ChevronRight className="size-5" />
            </Button>

            <Button className="h-11 cursor-pointer gap-x-2 rounded-xl border border-gray-600 bg-gray-800 py-3 text-sm font-medium text-white shadow-md hover:bg-gray-700 has-[>svg]:px-3.5">
              <span>
                <span>Buy Now</span>{" "}
                <span className="text-white/72">- One-time</span>
              </span>

              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <Image
          src={img}
          alt="figma features"
          width={660}
          height={564}
          className="rounded-[1.25rem]"
        />
      </CardContent>
    </Card>
  );
}
