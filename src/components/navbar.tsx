"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const NAV_MENU = [
  {
    name: "Accueil",
    icon: Squares2X2Icon,
    href: "/#home",
  },
  {
    name: "Parcours",
    icon: AcademicCapIcon,
    href: "/#resume",
  },
  {
    name: "Compétences",
    icon: CommandLineIcon,
    href: "/#stack",
  },
  {
    name: "Projets",
    icon: RectangleStackIcon,
    href: "/#projects",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-gray-700 transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MTNavbar
      {...({} as any)}
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="cursor-pointer">
          <TypographySafe
            {...({} as any)}
            color="gray"
            className="text-lg font-bold"
          >
            GB. Fullstack Developer
          </TypographySafe>
        </a>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="/#contact-form">
            <Button {...({} as any)} color="gray">
              Me contacter
            </Button>
          </a>
        </div>

        <IconButton
          {...({} as any)}
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="/#contact-form" className="w-full">
              <Button {...({} as any)} color="gray" className="w-full">
                Me contacter
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;