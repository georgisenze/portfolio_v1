import Image from "next/image";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, desc, tech, img } = project;
  
  return (
    <Card {...({} as any)} color="transparent" shadow={false}>
      <CardHeader
        {...({} as any)}
        floated={false}
        className="mx-0 mt-0 mb-6 h-58"
      >
        <a href={`/projects/view/${slug}`}>
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        </a>
      </CardHeader>
      <CardBody {...({} as any)} className="p-0">
        <a
          href={`/projects/view/${slug}`}
          className="text-gray-gray-900 transition-colors hover:text-gray-800"
        >
          <TypographySafe {...({} as any)} variant="h5" className="mb-2">
            {title}
          </TypographySafe>
        </a>
        <TypographySafe
          {...({} as any)}
          className="mb-6 font-normal !text-gray-500"
        >
          {desc}
        </TypographySafe>
        <TypographySafe
          {...({} as any)}
          variant="h5"
          className="mb-2 font-bold text-gray-gray-500"
        >
          {tech.join(" • ")}
        </TypographySafe>
        <a href={`/projects/view/${slug}`}>
          <Button {...({} as any)} color="gray" size="sm">
            Voir le projet
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
