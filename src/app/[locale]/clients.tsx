"use client";

import { Card, CardBody } from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";

import {
  CommandLineIcon,
  Squares2X2Icon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import { useI18n, useScopedI18n } from "@/locales/client";


export function Expertise() {
  const scopedT = useScopedI18n('todo')

  return (
    <section id="clients" className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <TypographySafe {...({} as any)} as="h2" color="blue-gray" className="mb-4 text-3xl font-bold">
            {scopedT('title')}
          </TypographySafe>
          <TypographySafe {...({} as any)} className="mx-auto max-w-2xl text-gray-600">
            {scopedT('description')}
          </TypographySafe>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* {scopedT('items').map(({ title, description, icon: Icon }, index) => ( */}
             <Card {...({} as any)} className="shadow-sm">
               <CardBody {...({} as any)} >
                <Squares2X2Icon className="mb-4 h-8 w-8 text-gray-800" />
                <TypographySafe {...({} as any)} variant="h6" className="mb-2">
                  {scopedT('items.0.title')}
                </TypographySafe>
                <TypographySafe {...({} as any)} className="text-gray-600">
                  {scopedT('items.0.description')}
                </TypographySafe>
              </CardBody>
            </Card>
            <Card {...({} as any)} className="shadow-sm">
                <CardBody {...({} as any)} >
                <DevicePhoneMobileIcon className="mb-4 h-8 w-8 text-gray-800" />
                <TypographySafe {...({} as any)} variant="h6" className="mb-2">
                  {scopedT('items.1.title')}
                </TypographySafe>
                <TypographySafe {...({} as any)} className="text-gray-600">
                  {scopedT('items.1.description')}
                </TypographySafe>
              </CardBody>
            </Card>
            <Card {...({} as any)} className="shadow-sm">
                <CardBody {...({} as any)} >
                <CommandLineIcon className="mb-4 h-8 w-8 text-gray-800" />
                <TypographySafe {...({} as any)} variant="h6" className="mb-2">
                  {scopedT('items.2.title')}
                </TypographySafe>
                <TypographySafe {...({} as any)} className="text-gray-600">
                  {scopedT('items.2.description')}
                </TypographySafe>
              </CardBody>
            </Card>
            <Card {...({} as any)} className="shadow-sm">
                <CardBody {...({} as any)} >
                <MapPinIcon className="mb-4 h-8 w-8 text-gray-800" />
                <TypographySafe {...({} as any)} variant="h6" className="mb-2">
                  {scopedT('items.3.title')}
                </TypographySafe>
                <TypographySafe {...({} as any)} className="text-gray-600">
                  {scopedT('items.3.description')}
                </TypographySafe>
              </CardBody>
            </Card>
            <Card {...({} as any)} className="shadow-sm">
                <CardBody {...({} as any)} >
                <CloudIcon className="mb-4 h-8 w-8 text-gray-800" />
                <TypographySafe {...({} as any)} variant="h6" className="mb-2">
                  {scopedT('items.4.title')}
                </TypographySafe>
                <TypographySafe {...({} as any)} className="text-gray-600">
                  {scopedT('items.4.description')}
                </TypographySafe>
              </CardBody>
            </Card>
            <Card {...({} as any)} className="shadow-sm">
                <CardBody {...({} as any)} >
                <QrCodeIcon className="mb-4 h-8 w-8 text-gray-800" />
                <TypographySafe {...({} as any)} variant="h6" className="mb-2">
                  {scopedT('items.5.title')}
                </TypographySafe>
                <TypographySafe {...({} as any)} className="text-gray-600">
                  {scopedT('items.5.description')}
                </TypographySafe>
              </CardBody>
            </Card>
          {/* ))} */}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
