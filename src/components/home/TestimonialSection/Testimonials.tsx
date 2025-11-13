import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  avatarFallback: string;
  stars: number;
  testimonial: string[];
}

const testimonials: Testimonial[] = [
  {
    name: "Fajar Siddiq",
    title: "Serial Entrepreneur, Singapore",
    avatar: "/avatars/user-1.png",
    avatarFallback: "FS",
    stars: 5,
    testimonial: [
      "TailGrids is such a great help when comes to building landing page and web app UI for Tailwind CSS web projects with just copy-paste method!",
      "I really liked the design and it is easy to get started which saves tons of time & money for developers and designers with Figma files & source code!",
    ],
  },
  {
    name: "Ostap Brehin",
    title: "Fullstack Developer",
    avatar: "/avatars/user-2.png",
    avatarFallback: "OB",
    stars: 5,
    testimonial: [
      "A landing page is the first thing your customers will see before even trying the project. You want to make sure it looks great, and this is where TailGrids comes to help!",
    ],
  },
  {
    name: "Arnob Mukherjee",
    title: "Founder @Olvy, Bangladesh",
    avatar: "/avatars/user-3.png",
    avatarFallback: "AM",
    stars: 5,
    testimonial: [
      "Seems like an amazing alternative to tailwindui, also the design looks amazing man 🚀",
    ],
  },
  {
    name: "Marko Denic",
    title: "Developer and Software Engineer",
    avatar: "/avatars/user-4.png",
    avatarFallback: "MD",
    stars: 5,
    testimonial: [
      "TailGrids includes all the essential UI components you need to build beautiful websites with Tailwind CSS. Its consistent design, clean codebase, copy-paste interface, and detailed documentation make it organized and easy to use.",
    ],
  },
  {
    name: "Anamoul Rouf",
    title: "UX Designer",
    avatar: "/avatars/user-5.png",
    avatarFallback: "AR",
    stars: 5,
    testimonial: [
      "Even though I am a design person, I need to build site sometimes. TailGrids UI empowered me to do more with my little HTML/CSS skills",
    ],
  },
  {
    name: "Athar Ahmed",
    title: "Founder, ScrapeOwl",
    avatar: "/avatars/user-6.png",
    avatarFallback: "AA",
    stars: 5,
    testimonial: [
      "Since I like doing engineering parts only, designing and coding landing pages is great blocker for me while I develop MVPs or try to validate a new product idea. TailGrids seems have great collection of UI components that also comes relevant contents and Figma file that I can use to play or create prototype before diving into code.",
    ],
  },
  {
    name: "Fajar Siddiq",
    title: "Software Developer @HappyAddons",
    avatar: "/avatars/user-7.png",
    avatarFallback: "FS",
    stars: 5,
    testimonial: [
      "Having used almost all the Tailwind CSS UI toolkits and resources, I can confidently say that TailGrids is the easiest and most comprehensive Tailwind UI Library with almost all essential Tailwind CSS components you may need to build web UI faster.",
    ],
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-100 p-10">
      <div className="w-full columns-1 gap-2 space-y-2 sm:columns-2 lg:columns-3">
        {/* Testimonial cards */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group/card relative break-inside-avoid rounded-2xl bg-white p-10"
          >
            {/* Header */}
            <div className="mb-[2.188rem] flex items-start justify-between gap-x-6">
              <div className="flex items-center gap-x-3.5">
                <Avatar className="size-10">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>

                <div>
                  <p className="text-base leading-6 font-medium text-title dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm leading-5 font-normal text-gray-400 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <StarRating count={testimonial.stars} />
            </div>

            {/* Body */}
            {testimonial.testimonial.map((text, index) => (
              <p
                key={index}
                className="mt-5 text-base leading-6 font-normal text-text-secondary first-of-type:mt-0 dark:text-gray-200"
              >
                {text}
              </p>
            ))}

            {/* Dots */}
            <span className="absolute top-4 left-4 hidden size-2 -translate-x-1/2 rounded-full bg-gray-300 duration-300 group-hover/card:block" />
            <span className="absolute top-4 right-4 hidden size-2 -translate-x-1/2 rounded-full bg-gray-300 duration-300 group-hover/card:block" />
            <span className="absolute bottom-4 left-4 hidden size-2 -translate-x-1/2 rounded-full bg-gray-300 duration-300 group-hover/card:block" />
            <span className="absolute right-4 bottom-4 hidden size-2 -translate-x-1/2 rounded-full bg-gray-300 duration-300 group-hover/card:block" />
          </div>
        ))}
      </div>
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center text-yellow-300">
      {Array.from({ length: 5 }).map((_, index) =>
        index < count ? (
          <Star key={index} className="size-2.5 fill-yellow-300" />
        ) : (
          <Star key={index} className="size-2.5" />
        ),
      )}
    </div>
  );
}
