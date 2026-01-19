"use client";
import Image from "next/image";

export function FixedPlugin() {
  return (
    <a
      href="https://wa.me/22962508830"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="flex h-18 w-18 items-center justify-center rounded-full bg-white shadow-lg hover:scale-105 transition-transform">
        <Image
          src="/logos/whatsapp-3.svg"
          alt="WhatsApp"
          width={48}
          height={38}
          className="h-20 w-20"
        />
      </div>
    </a>
  );
}
