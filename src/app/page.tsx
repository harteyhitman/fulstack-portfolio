import About from "@/components/AboutSection";
import Contact from "@/components/ContactForm";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Projects from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <MobileNav />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}
