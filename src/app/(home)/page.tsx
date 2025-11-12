import AnnouncementBar from "@/components/home/AnnouncementBar";
import Brands from "@/components/home/Brands/Brands";
import Hero from "@/components/home/Hero/Hero";
import Navbar from "@/components/home/Navbar/Navbar";
import TemplateSection from "@/components/home/TemplateSection/TemplateSection";
import UIKitStats from "@/components/home/UIKitStats/UIKitStats";
import ValuePropositions from "@/components/home/ValuePropositions/ValuePropositions";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />

      <Navbar />

      <Hero />

      <Brands />

      <UIKitStats />

      <ValuePropositions />

      <TemplateSection />
    </main>
  );
}
