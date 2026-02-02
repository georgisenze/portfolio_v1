export interface Project {
  slug: string;
  title: string;
  desc: string;
  longDescription: string;
  tech: string;
  img: string;
  images: string[];
  link?: string;
}

// export const projects: Project[] = [
//   {
//     slug: "youpijob",
//     title: "YoupiJob",
//     desc: "Plateforme de mise en relation entre particuliers ou entreprises et des prestataires de services.",
//     longDescription:
//       "YoupiJob est une plateforme innovante qui facilite la mise en relation entre particuliers ou entreprises et des prestataires de services qualifiés. J'ai participé au développement complet de cette application, en intégrant des fonctionnalités clés telles que la gestion des utilisateurs, la publication d'annonces, le système de réservation et les paiements en ligne.",
//     tech: ["Laravel", "Next.js", "MongoDB"],
//     img: "/image/youpi1.png",
//     images: ["/image/youpi1.png", "/image/youpi2.png"],
//     link: "https://youpijob.cm",
//   },
//   {
//     slug: "pambeh",
//     title: "Pambeh",
//     desc: "Application mobile de mise en relation entre particuliers et professionnels pour divers services à domicile.",
//     longDescription:
//       "Pambeh est une application mobile conçue pour connecter les particuliers avec des professionnels offrant divers services à domicile, tels que la plomberie, l'électricité, le ménage, et bien plus encore. J'ai contribué au développement de cette application en mettant en place des fonctionnalités essentielles telles que la géolocalisation des prestataires, la gestion des rendez-vous, et un système d'évaluation des services.",
//     tech: ["Laravel", "Vue.js", "MySQL"],
//     img: "/image/pambeh1.png",
//     images: ["/image/pambeh1.png", "/image/pambeh2.png", "/image/pambeh3.png"],
//     link: "https://pambeh.cm",
//   },
//   {
//     slug: "sungrocery",
//     title: "SunGrocery",
//     desc: "Intégration d’un module de dropshipping et maintenance évolutive d’une plateforme e-commerce existante.",
//     longDescription:
//       "SunGrocery est une plateforme e-commerce spécialisée dans la vente de produits alimentaires. J'ai travaillé sur l'intégration d'un module de dropshipping, permettant à la plateforme d'élargir son catalogue de produits sans gérer de stock physique. De plus, j'ai assuré la maintenance évolutive de la plateforme, en ajoutant de nouvelles fonctionnalités et en optimisant les performances pour une meilleure expérience utilisateur.",
//     tech: ["Laravel", "Vue.js", "Paiement en ligne"],
//     img: "/image/sungrocery.png",
//     images: ["/image/sungrocery.png", "/image/sungrocery2.png"],
//     link: "https://sungrocery.biz",
//   },
//   {
//     slug: "TBH",
//     title: "Tunisia Bénin House",
//     desc: "Plateforme B2B, dédiée à l’échange d’expertise et de solutions pour le secteur du bâtiment au Bénin.",
//     longDescription:
//       "Tunisia Bénin House est une plateforme professionnelle dédiée à l’échange d’expertise et de solutions visant à soutenir le développement urbain et l’innovation dans le secteur du bâtiment au Bénin. J’ai contribué au développement de la plateforme en mettant en place des fonctionnalités clés telles que la gestion des membres, la publication de contenus spécialisés et un système de forum favorisant les échanges et la collaboration entre les acteurs du secteur.",
//     tech: ["Laravel", "MySQL"],
//     img: "/image/tbh1.png",
//     images: ["/image/tbh1.png", "/image/tbh2.png", "/image/tbh3.png", "/image/tbh4.png"],
//     link: "https://tunisiabeninhouse.com",
//   },
//   {
//     slug: "courrier",
//     title: "Enterprise Mail Manager",
//     desc: "Platforme de gestion et de suivi des courriers entrants, sortants et interne de votre entreprise.",
//     longDescription:
//       "Enterprise Mail Manager est une plateforme complète de gestion des courriers pour les entreprises. Elle permet de suivre les courriers entrants, sortants et internes, facilitant ainsi la gestion administrative. J'ai participé au développement de cette application en intégrant des fonctionnalités telles que la numérisation des courriers, le suivi des statuts, et la génération de rapports.",
//     tech: ["Laravel", "MySQL"],
//     img: "/image/courrier.png",
//     images: ["/image/courrier.png", "/image/courrier2.png"],
//     link: "#",
//   },
//   {
//     slug: "dbi",
//     title: "Destination Bonheur Internationnal",
//     desc: "Site vitrine pour une communauté, présentant leurs activités et événements.",
//     longDescription:
//       "Destination Bonheur International est un site vitrine développé pour une communauté dynamique, mettant en avant leurs activités, événements et initiatives. J'ai conçu et développé ce site en utilisant des technologies modernes pour assurer une expérience utilisateur fluide et engageante.",
//     tech: ["Laravel", "MySQL"],
//     img: "/image/dbi1.png",
//     images: ["/image/dbi1.png", "/image/dbi2.png"],
//     link: "#",
//   },
//   {
//     slug: "inventory",
//     title: "Inventory — Gestion de stocks",
//     desc: "Système complet de gestion des stocks : entrées, sorties, suivi des produits et reporting.",
//     longDescription:
//       "Inventory est un système de gestion des stocks conçu pour aider les entreprises à suivre efficacement leurs produits. Il offre des fonctionnalités telles que la gestion des entrées et sorties de stock, le suivi des niveaux de produits, et la génération de rapports détaillés. J'ai participé au développement de cette application en mettant l'accent sur la convivialité et l'efficacité.",
//     tech: ["Laravel", "Vue.js", "MySQL"],
//     img: "/image/inventory.png",
//     images: ["/image/inventory.png"],
//     link: "#",
//   },
// ];

// export function getProjectBySlug(slug: string): Project | undefined {
//   return projects.find((project) => project.slug === slug);
// }

export function getProjectBySlug(projects: Project[], slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
