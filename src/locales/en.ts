import { title } from "process";

export default {
  hello: "Hello",
  Developpeur: "Web & Mobile Developer",
  passionate_about_technology:
    "Passionate about designing high-performance and scalable applications, I work across the entire development cycle: from backend architecture to frontend user experience.",
  speciality:
    "Specialized in Laravel, Vue.js, React, Next.js and web & mobile applications.",
  download_cv: "Download my CV",
  contact_me: "Contact me",

  todo: {
    title: "Areas of intervention",
    description:
      "I support companies and teams in the design, development and evolution of digital solutions tailored to their business needs.",
    items: [
      {
        title: "Web Applications",
        description:
          "Design and development of robust web applications: backoffice, dashboards, business platforms and e-commerce.",
        icon: "Squares2X2Icon",
      },
      {
        title: "Mobile Applications",
        description:
          "Development of hybrid mobile applications and PWAs for Android, with Play Store integration.",
        icon: "DevicePhoneMobileIcon",
      },
      {
        title: "Backend & APIs",
        description:
          "Backend architecture, REST APIs, database management and third-party service integrations.",
        icon: "CommandLineIcon",
      },
      {
        title: "Geolocation & Tracking",
        description:
          "Solutions based on geolocation, real-time tracking, QR Code tracking and monitoring.",
        icon: "MapPinIcon",
      },
      {
        title: "Management Systems",
        description:
          "Design of management systems: inventory, transport, universities, mail, waste, fuel.",
        icon: "CloudIcon",
      },
      {
        title: "Maintenance & Optimization",
        description:
          "Evolutive maintenance, refactoring, performance optimization and resolution of complex problems.",
        icon: "QrCodeIcon",
      },
    ],
  },

  skills: {
    subtitle: "Skills",
    title: "My Technical Skills",
    description:
      "A set of technical and methodological skills enabling me to design, develop and maintain reliable, scalable and business-oriented web and mobile applications.",
    items: [
      {
        title: "Frontend Development",
        children:
          "Development of modern, high-performance and maintainable interfaces with Vue.js, React, Next.js and Nuxt.js. Responsive UI integration focused on user experience.",
      },
      {
        title: "Backend Development",
        children:
          "Design and implementation of robust backends with Laravel. Creation of REST APIs, role management, authentication, security and business logic.",
      },
      {
        title: "Databases",
        children:
          "Modeling and management of relational and NoSQL databases: MySQL and MongoDB. Query optimization and data structuring.",
      },
      {
        title: "Web & Mobile Applications",
        children:
          "Development of web applications, PWAs and hybrid mobile apps with Cordova. Integration of native features and deployment on Android.",
      },
      {
        title: "Integrations & Tools",
        children:
          "Integration of third-party APIs, online payments, geolocation, QR code tracking. Use of Git, Postman, Jira and collaborative workflows.",
      },
      {
        title: "Methodology & Quality",
        children:
          "Working in Scrum methodology, evolutive maintenance, bug fixing, performance optimization and continuous improvement of applications.",
      },
    ],
  },

  project: {
    subtitle: "Experiences",
    title: "Completed Projects",
    description:
      "A selection of projects I’ve worked on, illustrating my experience in developing business-oriented web and mobile applications.",
    show_project: "View",
    link_btn: "Visit the site",
    return_btn: "Back to projects",
    not_found: "Project not found",
    items: [
      {
        slug: "youpijob",

        title: "YoupiJob",

        desc: "Platform connecting individuals or businesses with service providers.",

        longDescription:
          "YoupiJob is an innovative platform that facilitates connections between individuals or businesses and qualified service providers. I participated in the complete development of this application, integrating key features such as user management, job posting, the booking system, and online payments.",
        tech: "Laravel • Next.js • MongoDB",
        img: "/image/youpi1.png",
        images: ["/image/youpi1.png", "/image/youpi2.png"],
        link: "https://youpijob.cm",
      },

      {
        slug: "pambeh",

        title: "Pambeh",

        desc: "Mobile application connecting individuals and professionals for various services in home.",

        longDescription:
          "Pambeh is a mobile application designed to connect individuals with professionals offering various home services, such as plumbing, electrical work, cleaning, and much more. I contributed to the development of this application by implementing essential features such as geolocation of service providers, appointment management, and a service rating system.",
        tech: "Laravel • Vue.js • MySQL",
        img: "/image/pambeh1.png",
        images: [
          "/image/pambeh1.png",

          "/image/pambeh2.png",

          "/image/pambeh3.png",
        ],
        link: "https://pambeh.cm",
      },

      {
        slug: "sungrocery",
        title: "SunGrocery",
        desc: "Integration of a dropshipping module and ongoing maintenance of an e-commerce platform existing.",

        longDescription:
          "SunGrocery is an e-commerce platform specializing in the sale of food products. I worked on integrating a dropshipping module, allowing the platform to expand its product catalog without managing physical inventory. Furthermore, I provided ongoing maintenance for the platform, adding new features and optimizing performance for a better user experience.",
        tech: "Laravel • Vue.js • Online Payment",
        img: "/image/sungrocery.png",
        images: ["/image/sungrocery.png", "/image/sungrocery2.png"],
        link: "https://sungrocery.biz",
      },

      {
        slug: "tbh",

        title: "Tunisia Benin House",

        desc: "B2B platform dedicated to the exchange of expertise and solutions for the construction sector in Benin.",
        longDescription:
          "Tunisia Benin House is a professional platform dedicated to the exchange of expertise and solutions aimed at supporting urban development and innovation in the building sector in Benin. I contributed to the platform's development by implementing key features such as member management, the publication of specialized content, and a forum system that fosters exchange and collaboration among industry stakeholders.",
        tech: "Laravel • MySQL",
        img: "/image/tbh1.png",
        images: [
          "/image/tbh1.png",

          "/image/tbh2.png",

          "/image/tbh3.png",

          "/image/tbh4.png",
        ],
        link: "https://tunisiabeninhouse.com",
      },

      {
        slug: "courrier",
        title: "Enterprise Mail Manager",
        desc: "Platform for managing and tracking incoming, outgoing, and internal mail of your company.",
        longDescription:
          "Enterprise Mail Manager is a comprehensive mail management platform for businesses. It allows you to track incoming, outgoing, and internal mail, thus facilitating administrative management. I participated in the development of this application by integrating features such as mail scanning, status tracking, and report generation.",
        tech: "Laravel • MySQL",
        img: "/image/courrier.png",
        images: ["/image/courrier.png", "/image/courrier2.png"],
        link: "#",
      },

      {
        slug: "dbi",

        title: "Destination Bonheur International",
        desc: "A showcase website for a community, presenting their activities and events.",
        longDescription:
          "Destination Bonheur International is a showcase website developed for a dynamic community, highlighting their activities, events, and initiatives. I designed and developed this site using modern technologies to ensure a user-friendly experience. A fluid and engaging user experience.",
        tech: "Laravel • MySQL",
        img: "/image/dbi1.png",
        images: ["/image/dbi1.png", "/image/dbi2.png"],
        link: "#",
      },

      {
        slug: "inventory",

        title: "Inventory",

        desc: "Complete inventory management system: inbound, outbound, product tracking, and reporting.",

        longDescription:
          "Inventory is an inventory management system designed to help businesses efficiently track their products. It offers features such as managing inbound and outbound stock, tracking product levels, and generating detailed reports. I participated in the development of this application, focusing on user-friendliness and efficiency.",
        tech: "Laravel • Vue.js • MySQL",
        img: "/image/inventory.png",

        images: ["/image/inventory.png"],
        link: "#",
      },
    ],
  },

  resume: {
    title: "Professional Summary",
    description:
      "Full-stack web and mobile developer, specializing in the design of high-performance and scalable business applications. I work on a variety of projects ranging from e-commerce to management systems, including tracking and geolocation solutions.",
    content:
      "Comfortable in agile environments, working in a team or remotely.",
    items: [
      {
        children:
          "Bachelor's Degree in Software Architecture — ESGIS Benin (2019 – 2022)",
      },
      {
        children: "Full-stack Web Developer — JP Management (Remote)",
      },

      {
        children: "Full-stack Web & Mobile Developer — Afric-uni (On-site)",
      },

      {
        children:
          "Full-stack Developer - Youpi Sarl (Remote): Laravel, Vue.js, React, Next.js, MySQL, MongoDB",
      },

      {
        children:
          "IT Operations Agent - RESIT Technologies: Scrum Methodology, Teamwork, Application Maintenance and Optimization",
      },
    ],
  },

  contact: {
    title: "Contact me",
    subtitle:
      "A project, a mission, an opportunity, or just a question? Feel free to reach out. I’ll get back to you as soon as possible.",

    infoTitle: "Contact information",
    infoDescription:
      "Available for web & mobile projects, freelance missions, or professional opportunities (on-site or remote).",

    phone: "Phone",
    email: "Email",
    linkedin: "LinkedIn",

    form: {
      fullName: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Your message",
      submit: "Send message",
      sending: "Sending...",
    },

    feedback: {
      success: "✅ Message sent successfully.",
      error: "❌ Something went wrong. Please try again.",
    },
  },

  footer: {
    brand: "GB. Fullstack Developer",
    description:
      "Fullstack Developer passionate about building modern and high-performance web applications.",

    navigation: {
      title: "Navigation",
      home: "Home",
      resume: "Background",
      skills: "Skills",
      projects: "Projects",
    },

    contact: {
      title: "Contact",
      contactMe: "Contact me",
    },

    copyright: "All rights reserved.",
  },
} as const;
