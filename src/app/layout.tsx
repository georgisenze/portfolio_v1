/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import { Analytics } from "@vercel/analytics/next"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: " Georgino Bouko - Développeur Web & Mobile",
  keywords:
    "Georgino Bouko, Georgino, Bouko, Portfolio, Développeur Web, Développeur Mobile, React, Next.js, Vue.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Material Tailwind, Laravel, PHP, MySQL, MongoDB, Git, GitHub",
  authors: [{ name: "Georgino Bouko" }],
  creator: "Georgino Bouko - Développeur Web & Mobile",
  description:
    "Bienvenue sur le portfolio de Georgino Bouko, développeur web et mobile passionné. Découvrez mes projets, compétences et expériences dans le développement d'applications modernes et performantes.",
  openGraph: {
    title: "Georgino Bouko - Développeur Web & Mobile",
    description:
      "Bienvenue sur le portfolio de Georgino Bouko, développeur web et mobile passionné. Découvrez mes projets, compétences et expériences dans le développement d'applications modernes et performantes.",
    url: "https://portfolio-mauve-eight-20.vercel.app/",
    siteName: "Georgino Bouko Portfolio",
    images: [
      {
        url: "/G.png",
        width: 1200,
        height: 630,
        alt: "Georgino Bouko Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/G.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <Analytics />
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
