import PropositionCard from "./PropositionCard";
import PropositionContent from "./PropositionContent";

export default function ValuePropositions() {
  const propositionOne = {
    title: "Built with Figma’s latest features",
    img: "/mockups/proposition-img-1.png",
    features: [
      {
        icon: "figma-dark.svg",
        description:
          "Built with Figma’s latest and coolest features to make your workflow smarter and faster.",
      },
      {
        icon: "layout-2.svg",
        description:
          "Fully compatible with Auto Layout 5.0 across all pages, components, and UI kits.",
      },
      {
        icon: "theme-switcher.svg",
        description:
          "Switch between Light and Dark modes effortlessly with Figma’s variables for every UI component and block, all in one click.",
      },
    ],
  };

  const propositionTwo = {
    title: "Style customization made simple",
    img: "/mockups/proposition-img-2.png",
    features: [
      {
        icon: "font.svg",
        description:
          "A precise, versatile, and fully scalable typography system—easily adjustable with a single click from variables panel.",
      },
      {
        icon: "palette.svg",
        description:
          "Vibrant color palette with 253+ prebuilt colors, extensive shades, and variables fully compatible with Tailwind CSS.",
      },
      {
        icon: "shadow.svg",
        description:
          "Seamless shadow and blur styles designed to ensure consistency across all your designs.",
      },
    ],
  };

  return (
    <section className="mt-20 w-full border-y">
      {/* Upper section */}
      <div className="w-full border-b">
        <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
          {/* Proposition Content */}
          <div className="pattern-section-content-width h-full border-x bg-white">
            <PropositionContent />

            <PropositionCard proposition={propositionOne} />
          </div>
        </div>
      </div>

      {/* Empty section */}
      <div className="h-20 w-full border-b">
        <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
          <div className="pattern-section-content-width h-full border-x bg-white" />
        </div>
      </div>

      {/* Lower section */}
      <div className="w-full border-b">
        <div className="max-content-width diagonal-background-pattern mx-auto h-full border-x">
          <div className="pattern-section-content-width h-full border-x bg-white">
            <PropositionCard
              proposition={propositionTwo}
              rowDirection="reverse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
