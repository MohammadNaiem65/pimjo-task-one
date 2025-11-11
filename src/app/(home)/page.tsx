import AnnouncementBar from "@/components/home/AnnouncementBar";
import Navbar from "@/components/home/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />

      <Navbar />
    </main>
  );
}
