"use client";

import { Typography } from "@material-tailwind/react";
import {
  CommandLineIcon,
  Squares2X2Icon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: Squares2X2Icon,
    title: "Développement Frontend",
    children:
      "Développement d’interfaces modernes, performantes et maintenables avec Vue.js, React, Next.js et Nuxt.js. Intégration UI responsive et orientée expérience utilisateur.",
  },
  {
    icon: CommandLineIcon,
    title: "Développement Backend",
    children:
      "Conception et implémentation de backends robustes avec Laravel. Création d’APIs REST, gestion des rôles, authentification, sécurité et logique métier.",
  },
  {
    icon: CircleStackIcon,
    title: "Bases de données",
    children:
      "Modélisation et gestion de bases de données relationnelles et NoSQL : MySQL et MongoDB. Optimisation des requêtes et structuration des données.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Applications Web & Mobile",
    children:
      "Développement d’applications web, PWA et mobiles hybrides avec Cordova. Intégration de fonctionnalités natives et déploiement sur Android.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Intégrations & Outils",
    children:
      "Intégration d’APIs tierces, paiements en ligne, géolocalisation, QR code tracking. Utilisation de Git, Postman, Jira et workflows collaboratifs.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Méthodologie & Qualité",
    children:
      "Travail en méthodologie Scrum, maintenance évolutive, correction de bugs, optimisation des performances et amélioration continue des applications.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-8 py-24">
      <div className="container mx-auto mb-16 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          compétences
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Ce que je maîtrise
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full text-gray-600 lg:w-9/12"
        >
          Un ensemble de compétences techniques et méthodologiques me permettant
          de concevoir, développer et maintenir des applications web et mobiles
          fiables, évolutives et orientées métier.
        </Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
