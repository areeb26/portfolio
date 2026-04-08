import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
