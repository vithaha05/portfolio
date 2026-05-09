import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
import { Contact, Footer } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Now } from "@/components/sections/Now";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Activities />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
