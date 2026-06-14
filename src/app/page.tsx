import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import SkillsGrid from "@/components/SkillsGrid";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <SkillsGrid />
        <Highlights />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
