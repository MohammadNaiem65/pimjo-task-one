import AnnouncementBar from "@/components/home/AnnouncementBar";
import Hero from "@/components/home/Hero/Hero";
import Navbar from "@/components/home/Navbar/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />

      <Navbar />

      <Hero />
    </main>
  );
}
