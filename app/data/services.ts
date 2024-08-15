import antena from '../../public/antena.png'
import archivos from '../../public/archivos.png'
import camara_video from '../../public/camara video.png'
import candado from '../../public/candado.png'
import computadora from '../../public/computadora.png'
import engranajes from '../../public/engranajes.png'
import graficos from '../../public/graficos.png'
import pizarron from '../../public/pizarron.png'
import polaroid from '../../public/polaroid.png'
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
    image: computadora,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Análisis y visualización de datos',
      en: 'Data analysis and visualization',
      pt: 'Análise e visualização de dados',
    },
    image: graficos,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Diseño de informes, identidades visuales',
      en: 'Report design, visual identities',
      pt: 'Design de relatórios, identidades visuais',
    },
    image: archivos,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Producción audiovisual e ilustración digital',
      en: 'Audiovisual production and digital illustration',
      pt: 'Produção audiovisual e ilustração digital',
    },
    image: camara_video,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Gestión de redes sociales',
      en: 'Social media management',
      pt: 'Gestão de redes sociais',
    },
    image: polaroid,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Infraestructura segura para el almacenamiento de datos',
      en: 'Secure infrastructure for data storage',
      pt: 'Infraestrutura segura para armazenamento de dados',
    },
    image: candado,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Infraestructura de redes',
      en: 'Network infrastructure',
      pt: 'Infraestrutura de redes',
    },
    image: antena,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Automatización de procesos administrativos',
      en: 'Administrative process automation',
      pt: 'Automação de processos administrativos',
    },
    image: engranajes,
    alt: 'Placeholder alt',
  },
  { 
    text: {
      es: 'Capacitaciones y asesoramiento para la implementación de proyectos tecnológicos',
      en: 'Training and consulting for technology project implementation',
      pt: 'Treinamentos e consultoria para a implementação de projetos tecnológicos',
    },
    image: pizarron,
    alt: 'Placeholder alt',
  },
];
