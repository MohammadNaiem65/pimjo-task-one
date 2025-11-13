import { Card, CardContent } from "@/components/ui/card";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import Image from "next/image";

interface TemplateGroup {
  id: string;
  title: string;
  templates: {
    img: string;
    title: string;
    description: string;
  }[];
}

export default function TemplateFilterTabs() {
  const templateGroups: TemplateGroup[] = [
    {
      id: "all-templates",
      title: "All Templates",
      templates: [
        {
          img: "/mockups/app-mockup-3.png",
          title: "AI Land - Creative AI Template",
          description:
            "Perfect template to build your AI startup website faster in no time.",
        },
        {
          img: "/mockups/app-mockup-2.png",
          title: "Business",
          description:
            "A full-featured template for business websites with AI that helps you build your website faster.",
        },
        {
          img: "/mockups/app-mockup-3.png",
          title: "E-commerce",
          description:
            "An AI-powered template for e-commerce websites that helps you build your website faster with easier.",
        },
      ],
    },
    {
      id: "agency",
      title: "Agency",
      templates: [
        {
          img: "/mockups/app-mockup-1.png",
          title: "Agency",
          description: "A full-featured template for agency websites.",
        },
        {
          img: "/mockups/app-mockup-1.png",
          title: "Meditation App",
          description: "A full-featured template for meditation apps.",
        },
        {
          img: "/mockups/app-mockup-2.png",
          title: "Portfolio",
          description: "A modern portfolio template for showcasing your work.",
        },
      ],
    },
    {
      id: "business",
      title: "Business",
      templates: [
        {
          img: "/mockups/app-mockup-3.png",
          title: "AI Land - Creative AI Template",
          description:
            "Perfect template to build your AI startup website faster in no time.",
        },
        {
          img: "/mockups/hero-img.png",
          title: "AI Website Builder",
          description: "Lovable like feature-rich AI website builder.",
        },
        {
          img: "/mockups/app-mockup-1.png",
          title: "Dashboard",
          description: "A full-featured template for dashboard websites.",
        },
      ],
    },
    {
      id: "e-commerce",
      title: "E-commerce",
      templates: [
        {
          img: "/mockups/proposition-img-2.png",
          title: "Style customization made simple",
          description:
            "Fully compatible with Auto Layout 5.0 across all pages, components, and UI kits.",
        },
        {
          img: "/mockups/proposition-img-1.png",
          title: "Built with Figma’s latest features",
          description:
            "Built with Figma’s latest and coolest features to make your workflow smarter and faster.",
        },
        {
          img: "/mockups/app-mockup-1.png",
          title: "V0 UI Kit",
          description: "A full-featured template for e-commerce websites.",
        },
      ],
    },
    {
      id: "dashboard",
      title: "Dashboard",
      templates: [
        {
          img: "/mockups/app-mockup-1.png",
          title: "Agency",
          description: "Agency",
        },
        {
          img: "/mockups/app-mockup-2.png",
          title: "Business",
          description: "Business",
        },
        {
          img: "/mockups/app-mockup-3.png",
          title: "E-commerce",
          description: "E-commerce",
        },
      ],
    },
  ];

  return (
    <Tabs defaultValue="all-templates" className="w-full">
      <TabsList className="h-20 w-full justify-start gap-1 rounded-none px-10 py-5">
        {templateGroups.map((templateGroup) => (
          <TabsTrigger
            key={templateGroup.id}
            value={templateGroup.id}
            className="flex-none cursor-pointer rounded-full px-5 py-2 font-medium text-title shadow-md data-[state=active]:shadow-md data-[state=inactive]:shadow-none"
          >
            {templateGroup.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {templateGroups.map((templateGroup) => (
        <TemplateContent templateGroup={templateGroup} key={templateGroup.id} />
      ))}
    </Tabs>
  );
}

function TemplateContent({ templateGroup }: { templateGroup: TemplateGroup }) {
  return (
    <TabsContent
      value={templateGroup.id}
      className="relative grid w-full grid-cols-3 gap-x-9 px-10"
    >
      {templateGroup.templates.map((template) => (
        <Card
          key={template.img}
          className="border-0 bg-transparent p-0 shadow-none"
        >
          <CardContent className="relative gap-6 p-0 pb-12">
            <Image
              src={template.img}
              alt={template.title}
              width={408}
              height={297}
              className="h-[297px] w-[408px] rounded-2xl"
            />
            <h3 className="mt-6.5 text-xl leading-7 font-medium text-title">
              {template.title}
            </h3>
            <p className="mt-2 text-base leading-6 text-text-secondary">
              {template.description}
            </p>
          </CardContent>
          {/* Shadow */}
          <div className="absolute right-0 bottom-0 left-2/3 h-40 bg-linear-to-b from-transparent to-gray-100 bg-cover" />
          <div className="absolute right-0 bottom-0 left-0 h-40 bg-linear-to-b from-transparent to-gray-100 bg-cover" />
        </Card>
      ))}
    </TabsContent>
  );
}
