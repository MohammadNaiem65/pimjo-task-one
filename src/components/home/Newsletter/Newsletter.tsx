import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronRight, Mail } from "lucide-react";

export default function Newsletter() {
  const accentColor = "#1A1E28"; // For border & pattern

  return (
    <section
      style={{ ["--accent-color" as string]: accentColor }}
      className={cn(
        `my-20 grid w-full grid-cols-1 border-y border-(--accent-color) bg-gray-950 [--pattern-color:var(--accent-color)]`,
      )}
    >
      <div className="w-full border-y border-inherit">
        <GridRow>
          <h2 className="flex items-center justify-center border-inherit font-geist-mono text-4xl leading-10">
            Newsletter
          </h2>

          <p className="flex items-center border-inherit pl-2 text-base leading-6 text-gray-400">
            Get fresh updates, free resources, exclusive offers, and <br />{" "}
            product news—straight to your inbox.
          </p>

          <div className="flex items-center justify-between bg-gray-900 py-3 pr-2 pl-7">
            <div className="flex items-center gap-x-4">
              <Mail className="size-6 text-gray-400" />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-none border-0 p-0 text-base leading-6 font-normal text-gray-400 focus-visible:border-b focus-visible:ring-0"
              />
            </div>

            <Button className="h-11.5 cursor-pointer gap-x-2 rounded-xl border border-brand-600 bg-brand-600 py-2.75 text-base leading-6 font-medium text-white hover:bg-brand-700 has-[>svg]:pr-5 has-[>svg]:pl-6">
              <span>
                <span>Get Offers</span>
              </span>

              <ChevronRight className="size-5 text-white/70" />
            </Button>
          </div>
        </GridRow>
      </div>

      {/* Empty rows  */}
      {Array.from({ length: 2 }).map((_, index) => (
        <GridRow
          key={index}
          className={index === 0 ? "order-first" : "order-last"}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="col-span-1 border-inherit" />
          ))}
        </GridRow>
      ))}
    </section>
  );
}

function GridRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const gridClasses = "grid grid-cols-[313px_540px_1fr] ";

  return (
    <div
      className={cn(
        `max-content-width diagonal-background-pattern mx-auto h-full w-full border-x border-inherit`,
        className,
      )}
    >
      <div
        className={cn(
          "pattern-section-content-width h-20 divide-x border-x border-inherit bg-gray-950 text-white",
          gridClasses,
        )}
      >
        {children}
      </div>
    </div>
  );
}
