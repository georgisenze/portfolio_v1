"use client";

import { Typography, Card, CardBody } from "@material-tailwind/react";
import {
  CommandLineIcon,
  Squares2X2Icon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const DOMAINS = [
  {
    title: "Applications Web",
    description:
      "Conception et développement d’applications web robustes : backoffice, dashboards, plateformes métiers et e-commerce.",
    icon: Squares2X2Icon,
  },
  {
    title: "Applications Mobiles",
    description:
      "Développement d’applications mobiles hybrides et PWA pour Android, avec intégration Play Store.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Backend & APIs",
    description:
      "Architecture backend, APIs REST, gestion des bases de données et intégrations de services tiers.",
    icon: CommandLineIcon,
  },
  {
    title: "Géolocalisation & Tracking",
    description:
      "Solutions basées sur la géolocalisation, suivi en temps réel, QR Code tracking et monitoring.",
    icon: MapPinIcon,
  },
  {
    title: "Systèmes de gestion",
    description:
      "Conception de systèmes de gestion : stocks, transport, universités, courriers, déchets, carburant.",
    icon: CloudIcon,
  },
  {
    title: "Maintenance & Optimisation",
    description:
      "Maintenance évolutive, refactoring, optimisation des performances et résolution de problèmes complexes.",
    icon: QrCodeIcon,
  },
];

export function Expertise() {
  return (
    <section className="px-8 py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Domaines d’intervention
          </Typography>
          <Typography className="mx-auto max-w-2xl text-gray-600">
            J’accompagne les entreprises et les équipes dans la conception,
            le développement et l’évolution de solutions digitales adaptées à
            leurs besoins métiers.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map(({ title, description, icon: Icon }, index) => (
            <Card key={index} className="shadow-sm">
              <CardBody>
                <Icon className="mb-4 h-8 w-8 text-gray-800" />
                <Typography variant="h6" className="mb-2">
                  {title}
                </Typography>
                <Typography className="text-gray-600">
                  {description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
