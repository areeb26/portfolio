import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { BookACall } from "@/components/sections/BookACall";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/ui/cursor-glow";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CursorGlow />
      <Navbar />
      <Hero />
      <StatsBar />
      <TechMarquee />
      <Projects />
      <About />
      <Services />
      <BookACall />
      <Footer />
    </main>
  );
}
