"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CommandLineIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children:
      "Licence en Architecture des Logiciels — ESGIS Bénin (2019 – 2022)",
  },
  {
    icon: BriefcaseIcon,
    children:
      "Développeur Web & Mobile Fullstack — +3 ans d’expérience (on-site & remote)",
  },
  {
    icon: CommandLineIcon,
    children:
      "Stack principale : Laravel, Vue.js, React, Next.js, MySQL, MongoDB",
  },
  {
    icon: CheckCircleIcon,
    children:
      "Méthodologie Scrum, travail en équipe, maintenance et optimisation applicative",
  },
];

export function Resume() {
  return (
    <section id="resume" className="px-8 py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <Typography variant="h2" color="gray-gray" className="mb-4">
            Résumé professionnel
          </Typography>

          <Typography className="mb-6 w-full lg:w-10/12 text-gray-600">
            Développeur web et mobile fullstack, spécialisé dans la conception
            d’applications métiers performantes et évolutives. J’interviens sur
            des projets variés allant du e-commerce aux systèmes de gestion,
            en passant par des solutions de suivi et de géolocalisation.
            <br />
            <br />
            À l’aise en environnement agile, en équipe ou en remote.
          </Typography>

          <a href="/cv/Georgino_Bouko_CV.pdf" target="_blank">
            <Button
              color="gray"
              className="flex items-center gap-2"
            >
              Télécharger mon CV
              <ArrowDownTrayIcon className="h-5 w-5" />
            </Button>
          </a>
        </div>

        {/* Right */}
        <div className="grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
