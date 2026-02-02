"use client";

import { TypographySafe } from "@/components/TypographySafe";
import { Button, Card } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CommandLineIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { useI18n, useScopedI18n } from "@/locales/client";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children:
      "Licence en Architecture des Logiciels — ESGIS Bénin (2019 – 2022)",
  },
  {
    icon: BriefcaseIcon,
    children: "Développeur Web Fullstack — JP Management (En Remote)",
  },
  {
    icon: BriefcaseIcon,
    children: "Développeur Web & Mobile Fullstack — Afric-uni (Sur site)",
  },
  {
    icon: CommandLineIcon,
    children:
      "Développeur fullstack - Youpi Sarl (Remote) : Laravel, Vue.js, React, Next.js, MySQL, MongoDB",
  },
  {
    icon: CheckCircleIcon,
    children:
      "Agent d'exploitation informatique - RESIT Technologies : Méthodologie Scrum, travail en équipe, maintenance et optimisation applicative",
  },
];

export function Resume() {
  const scopedT = useScopedI18n("resume");
  const t = useI18n();

  return (
    <section id="resume" className="px-8 py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
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
            className="mb-6 w-full lg:w-10/12 text-gray-600"
          >
            {scopedT("description")}
            <br />
            <br />
            {scopedT("content")}
          </TypographySafe>

          <a href="/cv/Georgino_Bouko_CV.pdf" target="_blank">
            <Button
              {...({} as any)}
              color="gray"
              className="flex items-center gap-2"
            >
              {t("download_cv")}
              <ArrowDownTrayIcon className="h-5 w-5" />
            </Button>
          </a>
        </div>

        {/* Right */}
        <div className="grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {/* {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))} */}
          <div className="flex items-start gap-4">
            <Card
              {...({} as any)}
              color="gray"
              className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
            >
              <AcademicCapIcon className="h-6 w-6" strokeWidth={2} />
            </Card>
            <TypographySafe className="w-full font-normal !text-gray-500">
              {scopedT("items.0.children")}
            </TypographySafe>
          </div>
          <div className="flex items-start gap-4">
            <Card
              {...({} as any)}
              color="gray"
              className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
            >
              <BriefcaseIcon className="h-6 w-6" strokeWidth={2} />
            </Card>
            <TypographySafe className="w-full font-normal !text-gray-500">
              {scopedT("items.1.children")}
            </TypographySafe>
          </div>
          <div className="flex items-start gap-4">
            <Card
              {...({} as any)}
              color="gray"
              className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
            >
              <BriefcaseIcon className="h-6 w-6" strokeWidth={2} />
            </Card>
            <TypographySafe className="w-full font-normal !text-gray-500">
              {scopedT("items.2.children")}
            </TypographySafe>
          </div>
          <div className="flex items-start gap-4">
            <Card
              {...({} as any)}
              color="gray"
              className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
            >
              <CommandLineIcon className="h-6 w-6" strokeWidth={2} />
            </Card>
            <TypographySafe className="w-full font-normal !text-gray-500">
              {scopedT("items.3.children")}
            </TypographySafe>
          </div>
          <div className="flex items-start gap-4">
            <Card
              {...({} as any)}
              color="gray"
              className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
            >
              <CheckCircleIcon className="h-6 w-6" strokeWidth={2} />
            </Card>
            <TypographySafe className="w-full font-normal !text-gray-500">
              {scopedT("items.4.children")}
            </TypographySafe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
