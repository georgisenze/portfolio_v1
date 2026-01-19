// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects/projects";
import Resume from "./resume";
import Stack from "./stacks";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import { NavbarEn, FooterEn } from "@/components/en";

export default function Portfolio() {
  return (
    <>
      <NavbarEn />
      <Hero />
      <Clients />
      <Stack />
      <Skills />
      <Projects />
      <Resume />
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      <FooterEn />
    </>
  );
}
