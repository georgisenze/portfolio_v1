"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Typography, Button, Chip } from "@material-tailwind/react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="px-8 py-24">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <Typography variant="h2" color="blue-gray" className="mb-4">
          {project.name}
        </Typography>

        <Typography className="mb-8 text-gray-600">
          {project.longDescription}
        </Typography>

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
              alt={`${project.name} screenshot ${index + 1}`}
              width={800}
              height={600}
              className="rounded-xl object-cover"
            />
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a href={project.link} target="_blank">
            <Button color="gray">
              Voir le site
            </Button>
          </a>
        )}
      </div>
    </section>
  );
}
