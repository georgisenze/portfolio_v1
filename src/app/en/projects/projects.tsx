"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Akuatrade — Plateforme d’achat en ligne",
    desc: "Intégration d’un module d’achat en ligne sur une plateforme existante. Gestion des produits, commandes et paiements.",
    tech: "Laravel • Vue.js • MySQL",
    link: "https://atrcorporation.com/public/akuatrad",
    slug: "akuatrad",
  },
  {
    img: "/image/blog2.svg",
    title: "Inventory — Gestion de stocks",
    desc: "Système complet de gestion des stocks : entrées, sorties, suivi des produits et reporting.",
    tech: "Laravel • Vue.js • MySQL",
    link: "https://inventory.kyubisarl.com",
  },
  {
    img: "/image/blog3.svg",
    title: "Transporter — Suivi de colis",
    desc: "Application de gestion et de suivi des transports de colis avec backoffice et monitoring.",
    tech: "Laravel • Vue.js • API • Géolocalisation",
    link: "https://manage.transporter.atrcorporation.com",
  },
  {
    img: "/image/blog-1.svg",
    title: "SunGrocery — E-commerce & Dropshipping",
    desc: "Intégration d’un module de dropshipping et maintenance évolutive d’une plateforme e-commerce existante.",
    tech: "Laravel • Vue.js • Paiement en ligne",
    link: "https://sungrocery.biz",
  },
  {
    img: "/image/blog2.svg",
    title: "TEC School — Gestion universitaire",
    desc: "Application web pour la gestion académique : étudiants, enseignants, filières et inscriptions.",
    tech: "Laravel • Vue.js • MySQL",
  },
  {
    img: "/image/blog3.svg",
    title: "CMS Builder — Générateur de sites",
    desc: "Développement d’un CMS permettant de générer dynamiquement des sites vitrines à partir de templates.",
    tech: "Laravel • Vue.js",
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

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
