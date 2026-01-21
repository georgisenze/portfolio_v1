"use client";
import Image from "next/image";

export function FixedPlugin() {
  return (
    <a
      href="https://wa.me/22962508830"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 transition-transform duration-300 hover:scale-110 active:scale-95 animate-bounce animation-delay-100"
    >
      <Image
        src="/logos/whatsapp-3.svg"
        alt="WhatsApp"
        width={48}
        height={38}
        className="h-20 w-20"
      />
    </a>
  );
}
