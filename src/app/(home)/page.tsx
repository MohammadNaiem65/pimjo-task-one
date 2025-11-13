import AnnouncementBar from "@/components/home/AnnouncementBar";
import Brands from "@/components/home/Brands/Brands";
import Hero from "@/components/home/Hero/Hero";
import Newsletter from "@/components/home/Newsletter/Newsletter";
import Footer from "@/components/home/shared/Footer/Footer";
import Navbar from "@/components/home/shared/Navbar/Navbar";
import TemplateSection from "@/components/home/TemplateSection/TemplateSection";
import TestimonialSection from "@/components/home/TestimonialSection/TestimonialSection";
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

      <TestimonialSection />

      <Newsletter />

      <Footer />
    </main>
  );
}
