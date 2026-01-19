"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  "html-1",
  "css-3",
  "javascript-1",
  "php-6",
  "laravel-2",
  "react-native-1",
  "vitejs",
  "next-js",
  "react-native-1",
  "nuxt-2",
  "pinia-1",
  "cordova",
  "xampp",
  "mongodb-icon-2",
  "github-icon-1",
  "slack-new-logo",
];

export function Clients() {
  return (
    <section className="px-8 py-10">
      <div className="container mx-auto text-center">
        {/* <Typography variant="h6" color="gray-gray" className="mb-8">
          My awesome clients
        </Typography> */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-12 h-12"
              src={`/logos/${logo}.svg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
