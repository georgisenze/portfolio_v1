import { Typography, Button } from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";

import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const LINKS = [
   {
    name: "Accueil",
    icon: Squares2X2Icon,
    href: "#home",
  },
  {
    name: "À propos",
    icon: UserCircleIcon,
    href: "#resume",
  },
  {
    name: "Compétences",
    icon: CommandLineIcon,
    href: "#skills",
  },
  {
    name: "Projets",
    icon: RectangleStackIcon,
    href: "#projects",
  },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <TypographySafe {...({} as any)} className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Georgino Bouko – Tous droits réservés.
          </TypographySafe>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link.name}>
                <TypographySafe {...({} as any)} 
                  as="a"
                  href={link.href}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </TypographySafe>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;