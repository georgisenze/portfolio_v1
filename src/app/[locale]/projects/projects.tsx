"use client";

import { ProjectCard } from "@/components";
import { TypographySafe } from "@/components/TypographySafe";
// import { projects } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { loadProjectsFromTranslations } from "@/utils/projects";

import "swiper/css";
import "swiper/css/pagination";
import { useI18n, useScopedI18n } from "@/locales/client";

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

export function Projects() {
  const scopedT = useScopedI18n("project");
  const t = useI18n();
const projectsData = loadProjectsFromTranslations(scopedT);

  return (
    <section id="projects" className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto mb-16 text-center">
        <TypographySafe
          {...({} as any)}
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          {scopedT("subtitle")}
        </TypographySafe>
        <TypographySafe
          {...({} as any)}
          as="h2"
          color="blue-gray"
          className="mb-4 text-3xl font-bold"
        >
          {scopedT("title")}
        </TypographySafe>
        <TypographySafe
          {...({} as any)}
          variant="lead"
          className="mx-auto w-full px-4 text-gray-600 lg:w-7/12"
        >
          {scopedT("description")}
        </TypographySafe>
      </div>

      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="rounded-lg"
          // pagination={{
          //   clickable: true,
          //   progressbarOpposite: true,
          // }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          height={400}
        >
          {projectsData.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard key={project.slug} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
