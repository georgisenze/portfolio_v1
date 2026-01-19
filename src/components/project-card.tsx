import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
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
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-58">
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
      <CardBody className="p-0">
        <a
          href={`${link}`}
          className="text-gray-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Typography className="mb-2 font-bold text-gray-gray-500">
          {tech}
        </Typography>
        <Link href={`/projects/${slug}`}>
          <Button color="gray" size="sm">
            Voir le projet
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
