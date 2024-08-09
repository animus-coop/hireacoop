import PlaceholderImg from '../../public/placeholder.jpeg';

import { WithTranslation } from './common';
import { StaticImageData } from 'next/image';

type Service = {
  text: WithTranslation;
  image: StaticImageData;
  alt?: string;
}

export const servicesData: Service[] = [
  { 
    text: {
      es: 'Desarrollo web y aplicaciones móviles',
      en: 'Web development and mobile applications',
      pt: 'Desenvolvimento web e aplicativos móveis',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Análisis y visualización de datos',
      en: 'Data analysis and visualization',
      pt: 'Análise e visualização de dados',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Diseño de informes, identidades visuales',
      en: 'Report design, visual identities',
      pt: 'Design de relatórios, identidades visuais',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Producción audiovisual e ilustración digital',
      en: 'Audiovisual production and digital illustration',
      pt: 'Produção audiovisual e ilustração digital',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  {
    text: {
      es: 'Desarrollo de software para la gestión documental',
      en: 'Software development for document management',
      pt: 'Desenvolvimento de software para gestão documental',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  {
    text: {
      es: 'Diseño e implementación de campus virtuales',
      en: 'Design and implementation of virtual campuses',
      pt: 'Design e implementação de campus virtuais',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  {
    text: {
      es: 'Ilustración digital',
      en: 'Digital illustration',
      pt: 'Ilustração digital',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Gestión de redes sociales',
      en: 'Social media management',
      pt: 'Gestão de redes sociais',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Infraestructura segura para el almacenamiento de datos',
      en: 'Secure infrastructure for data storage',
      pt: 'Infraestrutura segura para armazenamento de dados',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Infraestructura de redes - MariaLab?',
      en: 'Network infrastructure - MariaLab?',
      pt: 'Infraestrutura de redes - MariaLab?',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Automatización de procesos administrativos',
      en: 'Administrative process automation',
      pt: 'Automação de processos administrativos',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  {
    text: {
      es: 'Desarrollo de software a medida para el análisis de datos',
      en: 'Custom software development for data analysis',
      pt: 'Desenvolvimento de software sob medida para análise de dados',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Capacitaciones y asesoramiento para la implementación de proyectos tecnológicos',
      en: 'Training and consulting for technology project implementation',
      pt: 'Treinamentos e consultoria para a implementação de projetos tecnológicos',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
];
