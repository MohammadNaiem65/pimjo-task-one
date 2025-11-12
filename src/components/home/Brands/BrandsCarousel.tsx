"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const brands = [
  "/one.png",
  "/two.png",
  "/three.svg",
  "/four.png",
  "/five.png",
  "/six.png",
  "/seven.png",
];

export default function BrandsCarousel() {
  return (
    <div className="relative overflow-hidden pl-10">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="animate-marquee -ml-12">
          {[...brands, ...brands].map((brand, index) => (
            <CarouselItem key={index} className="shrink-0 basis-auto pl-12">
              <Image
                src={`/brands${brand}`}
                alt={`Brand ${index}`}
                width={100}
                height={100}
                className="h-12 w-auto object-contain opacity-80 transition hover:opacity-100"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Optional gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-10 w-32 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent" />
    </div>
  );
}
