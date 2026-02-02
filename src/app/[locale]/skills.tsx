"use client";

import { TypographySafe } from "@/components/TypographySafe";
import {
  CommandLineIcon,
  Squares2X2Icon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { useScopedI18n } from "@/locales/client";
import { Card, CardBody } from "@material-tailwind/react";


export function Skills() {
  const scopedT = useScopedI18n("skills");

  return (
    <section id="skills" className="px-8 py-24">
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
          className="mx-auto w-full text-gray-600 lg:w-9/12"
        >
          {scopedT("description")}
        </TypographySafe>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        <Card {...({} as any)} color="transparent" shadow={false}>
          <CardBody
            {...({} as any)}
            className="grid justify-center text-center"
          >
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
              <Squares2X2Icon className="h-6 w-6" strokeWidth={2} />
            </div>
            <TypographySafe
              {...({} as any)}
              variant="h5"
              color="gray-gray"
              className="mb-2"
            >
              {scopedT("items.0.title")}
            </TypographySafe>
            <TypographySafe
              {...({} as any)}
              className="px-8 font-normal !text-gray-500"
            >
              {scopedT("items.0.children")}
            </TypographySafe>
          </CardBody>
        </Card>
        <Card {...({} as any)} color="transparent" shadow={false}>
          <CardBody
            {...({} as any)}
            className="grid justify-center text-center"
          >
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
              <CommandLineIcon className="h-6 w-6" strokeWidth={2} />
            </div>
            <TypographySafe
              {...({} as any)}
              variant="h5"
              color="gray-gray"
              className="mb-2"
            >
              {scopedT("items.1.title")}
            </TypographySafe>
            <TypographySafe
              {...({} as any)}
              className="px-8 font-normal !text-gray-500"
            >
              {scopedT("items.1.children")}
            </TypographySafe>
          </CardBody>
        </Card>
        <Card {...({} as any)} color="transparent" shadow={false}>
          <CardBody
            {...({} as any)}
            className="grid justify-center text-center"
          >
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
              <CircleStackIcon className="h-6 w-6" strokeWidth={2} />
            </div>
            <TypographySafe
              {...({} as any)}
              variant="h5"
              color="gray-gray"
              className="mb-2"
            >
              {scopedT("items.2.title")}
            </TypographySafe>
            <TypographySafe
              {...({} as any)}
              className="px-8 font-normal !text-gray-500"
            >
              {scopedT("items.2.children")}
            </TypographySafe>
          </CardBody>
        </Card>
        <Card {...({} as any)} color="transparent" shadow={false}>
          <CardBody
            {...({} as any)}
            className="grid justify-center text-center"
          >
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
              <DevicePhoneMobileIcon className="h-6 w-6" strokeWidth={2} />
            </div>
            <TypographySafe
              {...({} as any)}
              variant="h5"
              color="gray-gray"
              className="mb-2"
            >
              {scopedT("items.3.title")}
            </TypographySafe>
            <TypographySafe
              {...({} as any)}
              className="px-8 font-normal !text-gray-500"
            >
              {scopedT("items.3.children")}
            </TypographySafe>
          </CardBody>
        </Card>
        <Card {...({} as any)} color="transparent" shadow={false}>
          <CardBody
            {...({} as any)}
            className="grid justify-center text-center"
          >
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
              <Cog6ToothIcon className="h-6 w-6" strokeWidth={2} />
            </div>
            <TypographySafe
              {...({} as any)}
              variant="h5"
              color="gray-gray"
              className="mb-2"
            >
              {scopedT("items.4.title")}
            </TypographySafe>
            <TypographySafe
              {...({} as any)}
              className="px-8 font-normal !text-gray-500"
            >
              {scopedT("items.4.children")}
            </TypographySafe>
          </CardBody>
        </Card>
        <Card {...({} as any)} color="transparent" shadow={false}>
          <CardBody
            {...({} as any)}
            className="grid justify-center text-center"
          >
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
              <CheckBadgeIcon className="h-6 w-6" strokeWidth={2} />
            </div>
            <TypographySafe
              {...({} as any)}
              variant="h5"
              color="gray-gray"
              className="mb-2"
            >
              {scopedT("items.5.title")}
            </TypographySafe>
            <TypographySafe
              {...({} as any)}
              className="px-8 font-normal !text-gray-500"
            >
              {scopedT("items.5.children")}
            </TypographySafe>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Skills;
