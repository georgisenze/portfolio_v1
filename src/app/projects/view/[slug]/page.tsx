"use client";

import { Navbar, Footer } from "@/components";
import { Button, Chip } from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";
import Image from "next/image";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <section className="px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <a href="/#projects" className="text-gray-500 hover:underline">
              &larr; Retour aux projets
            </a>
          </div>

          {/* Title */}
          <TypographySafe
            {...({} as any)}
            as="h1"
            color="blue-gray"
            className="mb-4 text-4xl font-bold"
          >
            {project.title}
          </TypographySafe>

          <TypographySafe
            {...({} as any)}
            className="mb-8 text-lg text-gray-600"
          >
            {project.longDescription}
          </TypographySafe>

          {/* Tech stack */}
          <div className="mb-10 flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <Chip key={index} value={tech} />
            ))}
          </div>

          {/* Images */}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                width={800}
                height={600}
                className="rounded-xl object-cover"
              />
            ))}
          </div>

          {/* Link */}
          {project.link && project.link != '#' ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button {...({} as any)} color="gray">
                Voir le site
              </Button>
            </a>
          ) : project.link === '#' ? (
            <TypographySafe {...({} as any)} className="text-gray-500 italic">
              Le site de ce projet est confidentiel ou n’est pas disponible pour le moment.
            </TypographySafe>
          ) : null}
        </div>
      </section>

      <Footer />
    </>
  );
}
