"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { loadProjectsFromTranslations } from "@/utils/projects";
import { useScopedI18n } from "@/locales/client";
import { TypographySafe } from "@/components/TypographySafe";
import { Button } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Footer, Navbar } from "@/components";

export interface Project {
  slug: string;
  title: string;
  desc: string;
  longDescription: string;
  tech: string;
  img: string;
  images: string[];
  link?: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const scopedT = useScopedI18n("project");

  // Charger tous les projets pour trouver celui correspondant au slug
  // const projectsData: Project[] = [];
  // for (let i = 0; i < 7; i++) {
  //   const images = scopedT(`items.${i}.images` as any);
  //   try {
  //     projectsData.push({
  //       slug: scopedT(`items.${i}.slug` as any),
  //       title: scopedT(`items.${i}.title` as any),
  //       desc: scopedT(`items.${i}.desc` as any),
  //       longDescription: scopedT(`items.${i}.longDescription` as any),
  //       tech: scopedT(`items.${i}.tech` as any),
  //       img: scopedT(`items.${i}.img` as any),
  //       images: Array.isArray(images) ? images : [],
  //       link: scopedT(`items.${i}.link` as any),
  //     });
  //   } catch (e) {
  //     break;
  //   }
  // }
  const projectsData = loadProjectsFromTranslations(scopedT);
  // Trouver le projet correspondant au slug
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return (
      <div className="container mx-auto px-8 py-24 text-center">
        <TypographySafe {...({} as any)} variant="h3" className="mb-4">
          {scopedT("not_found")}
        </TypographySafe>
        <a href="/#projects">
          <Button {...({} as any)} color="gray">
           {scopedT("return_btn")}
          </Button>
        </a>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <a href="/#projects" className="text-gray-500 hover:underline">
              &larr; {scopedT("return_btn")}
            </a>
          </div>

          {/* En-tête du projet */}
          <div className="mb-12">
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
              {project.desc}
            </TypographySafe>

            <TypographySafe
              {...({} as any)}
              className="mb-6 font-semibold"
            >
              {project.tech}
            </TypographySafe>
            <div className="mb-12">
              <TypographySafe
                {...({} as any)}
                variant="h4"
                className="mb-4 font-bold"
              >
                Description
              </TypographySafe>
              <TypographySafe
                {...({} as any)}
                className="text-gray-700 leading-relaxed"
              >
                {project.longDescription}
              </TypographySafe>
            </div>

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
            {/* Bouton retour */}
            <a href="/#projects">
              <Button {...({} as any)} color="gray" size="sm" className="mr-2">
               {scopedT("return_btn")}
              </Button>
            </a>
            {project.link && project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button {...({} as any)} variant="outlined" color="gray"  size="sm">
                  {scopedT("link_btn")} 
                </Button>
              </a>
            )}
          </div>

          {/* Galerie d'images */}
          {/* {project.images && project.images.length > 0 && (
            <div className="mb-12">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                className="rounded-lg"
              >
                {project.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-96 w-full">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )} */}

          {/* Description détaillée */}
        </div>
      </section>
      <Footer />
    </>
  );
}
