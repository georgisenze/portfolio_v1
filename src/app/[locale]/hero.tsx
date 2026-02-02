"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { TypographySafe } from "@/components/TypographySafe";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useI18n  } from "@/locales/client";


export default function Hero() {
  const t = useI18n();
  return (
    <header id="home" className="bg-white px-8 py-16 overflow-hidden">
      <div className="container mx-auto grid min-h-[70vh] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <TypographySafe {...({} as any)}
            variant="h1"
            color="gray-gray"
            className="mb-4 text-3xl lg:text-5xl !leading-tight"
          >
            {t('Developpeur')} <br />
            <span className="text-gray-800">Fullstack</span>
          </TypographySafe>

          <TypographySafe {...({} as any)}
            variant="lead"
            className="mb-6 text-gray-600 md:pr-16 xl:pr-28"
          >
            {t('passionate_about_technology')}
            <br />
            <br />
            {t('speciality')}
          </TypographySafe>

          <div className="flex flex-wrap gap-4">
            <a href="/cv/Georgino_Bouko_CV.pdf" target="_blank" rel="noopener noreferrer" download>
              <Button {...({} as any)} color="gray" className="flex items-center gap-2" size="lg">
                {t('download_cv')}
                 <ArrowDownTrayIcon className="h-5 w-5" />
              </Button>
            </a>
            <a href="#contact">
              <Button {...({} as any)} variant="outlined" color="gray" size="lg">
                {t('contact_me')}
              </Button>
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Effet de lumière 1 - Gradient bleu/violet */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-3xl opacity-30 animate-pulse"></div>
          
          {/* Effet de lumière 2 - Cercles flottants */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          
          {/* Image */}
          <div className="relative z-10">
            <Image
              width={1024}
              height={1024}
              alt="Développement web et mobile"
              src="/image/4471284.jpg"
              className="h-[35rem] w-full rounded-xl object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </header>
  );
}
