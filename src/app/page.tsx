// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects/projects";
import Resume from "./resume";
import Stack from "./stacks";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Stack />
      <Skills />
      <Projects />
      <Resume />
      <ContactForm />
      <Footer />
    </>
  );
}
