import bgImg from "@/../public/backgrounds/ui-kit-stats.png";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface StatsProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

const stats: StatsProps[] = [
  {
    icon: "layer.svg",
    title: "400+",
    subtitle: "Widgets & Examples",
    description:
      "Explore a rich collection of ready-to-use widgets and examples — built to inspire and speed up your design workflow.",
  },
  {
    icon: "components.svg",
    title: "10000+",
    subtitle: "Components & Variant",
    description:
      "Discover hundreds of flexible components and variants — crafted to help you design faster and maintain consistency effortlessly.",
  },
  {
    icon: "bolt.svg",
    title: "650+",
    subtitle: "Styles, Variable & Tokens",
    description:
      "Access well-structured styles, variables, and tokens — ensuring seamless scalability and visual harmony across every design.",
  },
];

export default function Stats() {
  return (
    <div className="h-[23.563rem] w-full border-b">
      <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
        <div className="pattern-section-content-width flex h-full items-end justify-start border-x bg-white">
          {/* Content starts here */}
          <div
            style={{ backgroundImage: `url(${bgImg.src})` }}
            className="grid h-full w-full grid-cols-3 gap-x-2.5 bg-cover px-2.5 py-2.75"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat }: { stat: StatsProps }) {
  return (
    <Card className="justify-between gap-6 px-10 py-9">
      <CardHeader className="p-0">
        <Badge className="size-16 rounded-[1.125rem] border-gray-200 bg-transparent p-0 shadow-md [&>svg]:size-9">
          <Image
            src={`/icons/${stat.icon}`}
            alt={stat.title}
            width={36}
            height={36}
          />
        </Badge>
      </CardHeader>

      <CardContent className="p-0">
        <h3 className="font-geist-mono text-[2.75rem] leading-[auto] font-medium text-text">
          {stat.title}
        </h3>
        <h4 className="mt-2 text-2xl font-medium text-text">{stat.subtitle}</h4>

        <p className="mt-2 text-text-secondary">{stat.description}</p>
      </CardContent>
    </Card>
  );
}
