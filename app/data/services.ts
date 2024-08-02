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
      en: 'Análisis y visualización de datos',
      es: 'Análisis y visualización de datos',
      pt: 'Análisis y visualización de datos',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      en: 'Desarrollo web y aplicaciones móviles',
      es: 'Desarrollo web y aplicaciones móviles',
      pt: 'Desarrollo web y aplicaciones móviles',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      en: 'Diseño de informes, identidades visuales',
      es: 'Diseño de informes, identidades visuales',
      pt: 'Diseño de informes, identidades visuales',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      en: 'Producción audiovisual e ilustración digital',
      es: 'Producción audiovisual e ilustración digital',
      pt: 'Producción audiovisual e ilustración digital',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      en: 'Infraestructura segura para el almacenamiento de datos',
      es: 'Infraestructura segura para el almacenamiento de datos',
      pt: 'Infraestructura segura para el almacenamiento de datos',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      en: 'Gestión de redes sociales',
      es: 'Gestión de redes sociales',
      pt: 'Gestión de redes sociales',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      en: 'Automatización de procesos administrativos',
      es: 'Automatización de procesos administrativos',
      pt: 'Automatización de procesos administrativos',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      en: 'Infraestructura de redes - MariaLab?',
      es: 'Infraestructura de redes - MariaLab?',
      pt: 'Infraestructura de redes - MariaLab?',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      en: 'Capacitaciones y asesoramiento para la implementación de proyectos tecnológicos',
      es: 'Capacitaciones y asesoramiento para la implementación de proyectos tecnológicos',
      pt: 'Capacitaciones y asesoramiento para la implementación de proyectos tecnológicos',
    },
    image: PlaceholderImg,
    alt: 'Placeholder alt',
  },
];
