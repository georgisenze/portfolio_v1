import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  slug: string;
  tech: string;
  link: string;
}

export function ProjectCard({ img, title, link, desc, slug, tech }: ProjectCardProps) {
  return (
     <Card {...({} as any)} color="transparent" shadow={false}>
      <CardHeader {...({} as any)}  floated={false} className="mx-0 mt-0 mb-6 h-58">
        <a href={`${link}`}>

          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        </a>
      </CardHeader>
       <CardBody {...({} as any)}  className="p-0">
        <a
          href={`${link}`}
          className="text-gray-gray-900 transition-colors hover:text-gray-800"
        >
          <TypographySafe {...({} as any)} variant="h5" className="mb-2">
            {title}
          </TypographySafe>
        </a>
        <TypographySafe {...({} as any)} className="mb-6 font-normal !text-gray-500">
          {desc}
        </TypographySafe>
        <TypographySafe {...({} as any)} className="mb-2 font-bold text-gray-gray-500">
          {tech}
        </TypographySafe>
        <Link href={`/projects/${slug}`}>
          <Button {...({} as any)}  color="gray" size="sm">
            Voir le projet
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
