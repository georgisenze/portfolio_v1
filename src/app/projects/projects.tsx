"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { link } from "fs";

const PROJECTS = [
  {
    img: "/image/youpi1.png",
    title: "YoupiJob",
    desc: "Plateforme de mise en relation entre particuliers ou entreprises et des prestataires de services.",
    tech: "Laravel • Next.js • MongoDB",
    link: "https://youpijob.cm",
    slug: "youpijob",
  },
  {
    img: "/image/pambeh1.png",
    title: "Pambeh",
    desc: "Application mobile de mise en relation entre particuliers et professionnels pour divers services à domicile.",
    tech: "Laravel • Next.js • MongoDB",
    link: "https://pambeh.cm",
    slug: "pambeh",
  },
  {
    img: "/image/courrier.png",
    title: "Enterprise Mail Manager",
    desc: "Platforme de gestion et de suivi des courriers entrants, sortants et interne de votre entreprise.",
    tech: "Laravel • MySQL",
    link: "#",
    slug: "courrier"
  },
  {
    img: "/image/dbi1.png",
    title: "Destination Bonheur Internationnal",
    desc: "Site vitrine pour une communauté, présentant leurs activités et événements.",
    tech: "Laravel • MySQL",
    link: "#",
    slug: "dbi",
  },
  {
    img: "/image/inventory.png",
    title: "Inventory — Gestion de stocks",
    desc: "Système complet de gestion des stocks : entrées, sorties, suivi des produits et reporting.",
    tech: "Laravel • Vue.js • MySQL",
    link: "#",
    slug: "inventory"
  },

  {
    img: "/image/sungrocery.png",
    title: "SunGrocery",
    desc: "Intégration d’un module de dropshipping et maintenance évolutive d’une plateforme e-commerce existante.",
    tech: "Laravel • Vue.js • Paiement en ligne",
    link: "https://sungrocery.biz",
    slug: "sungrocery"
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="gray-gray" className="mb-4">
          Projets réalisés
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-gray-600 lg:w-7/12"
        >
          Une sélection de projets sur lesquels j’ai travaillé, illustrant mon
          expérience en développement d’applications web et mobiles orientées
          métier.
        </Typography>
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
          pagination={{ clickable: true }}
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
          {PROJECTS.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectCard
                {...project}
                slug={project.slug}
                link={project.link || ""}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
