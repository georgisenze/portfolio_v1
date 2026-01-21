"use client";

import { ProjectCard } from "@/components";
import { TypographySafe } from "@/components/TypographySafe";
import { projects } from "@/data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export function Projects() {
  return (
    <section id="projects" className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto mb-16 text-center">
         <TypographySafe {...({} as any)} color="blue-gray" className="mb-2 font-bold uppercase">
          expériences
        </TypographySafe>
        <TypographySafe {...({} as any)} as="h2" color="blue-gray" className="mb-4 text-3xl font-bold">
           Projets réalisés
        </TypographySafe>
        <TypographySafe {...({} as any)}
          variant="lead"
          className="mx-auto w-full px-4 text-gray-600 lg:w-7/12"
        >
          Une sélection de projets sur lesquels j’ai travaillé, illustrant mon
          expérience en développement d’applications web et mobiles orientées
          métier.
        </TypographySafe>
      </div>

      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ 
            clickable: true,
            progressbarOpposite: true,
          }}
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
          {/* {PROJECTS.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard
                {...project}
                slug={project.slug}
                link={project.link || ""}
              />
            </SwiperSlide>
          ))} */}
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard
                key={project.slug}
                project={project}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
