import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const title = lang === "es" 
    ? "ANIMUS - Servicios de desarrollo de software y staff augmentation."
    : "ANIMUS - Software development and staff augmentation services.";

  const description = lang === "es"
    ? "Empresa cooperativa de desarrollo de software y servicios de staff augmentation. Equipos distribuidos a nivel global. Back, front, fullstack y diseño UX/UI."
    : "Cooperative software development and staff augmentation services company with globally distributed teams. Back-end, front-end, full-stack, and UX/UI design.";

  const keywords = lang === "es"
    ? [
      "Servicios de Staff Augmentation",
      "Soluciones de Staffing para Proyectos de IT",
      "Desarrollo de Software a Medida",
      "Desarrolladores Web",
      "Desarrolladores Mobile",
      "Diseñadores UX/UI",
      "Desarrolladores Full-Stack",
      "Cooperativa de Software",
      "Desarrolladores React",
      "Desarrolladores NodeJS",
      "Desarrolladores Python",
      "Desarrolladores Elixir",
      "Desarrolladores Rust",
      "Cooperativa de Desarrollo de Software",
    ]
    : [
      "Staff Augmentation Services",
      "IT Project Staffing Solutions",
      "Custom Software Development",
      "Web Developers",
      "Mobile App Developers",
      "UX/UI Designers",
      "Full-Stack Developers",
      "Software Cooperative",
      "React developers",
      "NodeJS develoipers",
      "Python developers", 
      "Elixir developers",
      "Rust developers",
      "Software development co-op",
    ];

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description,
    keywords,
    author: "ANIMUS",
  }
}

export default function RootLayout({ 
  children,
  params: { lang }
}) {
  const language = ["es", "en"].includes(lang) ? lang : "en";

  return (
    <html lang={language}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-DLF1KE4TE7" />
    </html>
  );
}
