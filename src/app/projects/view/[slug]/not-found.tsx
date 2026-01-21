"use client";

import { Navbar, Footer } from "@/components";
import { Button } from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="px-8 py-24">
        <div className="container mx-auto max-w-5xl text-center">
          <TypographySafe
            {...({} as any)}
            as="h1"
            className="mb-4 text-4xl font-bold"
          >
            Projet non trouvé
          </TypographySafe>
          <TypographySafe {...({} as any)} className="mb-8 text-gray-600">
            Le projet que vous recherchez n’existe pas ou a été supprimé.
          </TypographySafe>
          <a href="/#projects">
            <Button {...({} as any)} color="gray">
              Retour aux projets
            </Button>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}