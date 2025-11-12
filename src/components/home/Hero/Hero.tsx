import Image from "next/image";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="mb-10 h-331.5">
      {/* Pattern section */}
      <div className="h-259 w-full border-b">
        <div className="diagonal-background-pattern max-content-width mx-auto h-full w-full border-x">
          {/* Content starts here */}
          <div className="pattern-section-content-width mx-auto h-full border-x bg-white">
            <HeroContent />
          </div>
        </div>
      </div>

      <Image
        src={"/hero-img.png"}
        alt=""
        width={1296}
        height={804}
        className="mx-auto -mt-128.5"
      />
    </section>
  );
}
