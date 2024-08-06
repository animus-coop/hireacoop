import "./globals.css";
// import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const title = {
    es: "Hire a Coop - Contratá cooperativas para tus necesidades tecnológicas",
    pt: "Hire a Coop - Contrate cooperativas para suas necessidades tecnológicas",
  }[lang] ?? "Hire a Coop - Hire cooperatives for your tech needs";

  const description = {
    es: "La igualdad y la diversidad son fundamentales para nuestras creencias y valores. Alentamos a su organización a contratar cooperativas para sus necesidades digitales. De esta manera, obtiene calidad mientras fomenta un futuro más justo y sostenible en la fuerza laboral.",
    pt: "A igualdade e a diversidade são fundamentais para nossas crenças e valores. Incentivamos sua organização a contratar cooperativas para suas necessidades digitais. Dessa forma, você obtém qualidade enquanto promove um futuro mais justo e sustentável na força de trabalho.",
  }[lang] ?? "Equality and diversity are fundamental to our core beliefs and values. We encourage your organization to hire cooperatives for your digital needs. This way, you obtain quality while fostering a fairer and more sustainable future in the workforce.";

  const keywords = lang === "es" // @TODO
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
    // title: {
    //   template: `%s | ${title}`,
    //   default: title,
    // },
    title,
    description,
    keywords,
    author: "ANIMUS",
  }
}

export default function RootLayout({ 
  children,
  params: { lang }
}) {
  const language = ["es", "en", "pt"].includes(lang) ? lang : "en";

  return (
    <html lang={language}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
      {/* <GoogleAnalytics gaId="G-DLF1KE4TE7" /> */}
    </html>
  );
}
