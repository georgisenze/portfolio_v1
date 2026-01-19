"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <header id="home" className="bg-white px-8 py-16">
      <div className="container mx-auto grid min-h-[70vh] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <TypographySafe {...({} as any)}
            variant="h1"
            color="gray-gray"
            className="mb-4 text-3xl lg:text-5xl !leading-tight"
          >
            Développeur Web & Mobile <br />
            <span className="text-gray-800">Fullstack</span>
          </TypographySafe>

          <TypographySafe {...({} as any)}
            variant="lead"
            className="mb-6 text-gray-600 md:pr-16 xl:pr-28"
          >
            Passionné par la conception d’applications performantes et scalables,
            j’interviens sur l’ensemble du cycle de développement : de
            l’architecture backend à l’expérience utilisateur frontend.
            <br />
            <br />
            Spécialisé en <strong>Laravel, Vue.js, React, Next.js</strong> et
            applications web & mobiles.
          </TypographySafe>

          <div className="flex flex-wrap gap-4">
            <a href="/cv/Georgino_Bouko_CV.pdf" target="_blank">
              <Button {...({} as any)} color="gray" className="flex items-center gap-2" size="lg">
                Télercharger mon CV
                 <ArrowDownTrayIcon className="h-5 w-5" />
              </Button>
            </a>
            <a href="#contact">
              <Button {...({} as any)} variant="outlined" color="gray" size="lg">
                Me contacter
              </Button>
            </a>
          </div>
        </div>

        <Image
          width={1024}
          height={1024}
          alt="Développement web et mobile"
          src="/image/georgino.png"
          className="h-[35rem] w-full rounded-xl object-cover"
          priority
        />
      </div>
    </header>
  );
}

export default Hero;
