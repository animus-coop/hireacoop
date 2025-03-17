import { StaticImageData } from 'next/image';
import { WithTranslation } from './common';

import branding from '../../public/branding.png'
import communityManager from '../../public/community-manager.png'
import socialImpact from '../../public/social-impact.png'
import softwareDevelopment from '../../public/software-development.png'
import staffAugmentation from '../../public/staff-augmentation.png'
import virtualQueue from '../../public/virtual-queue.png'
import designUxui from '../../public/design-uxui.png'


type Service = {
  text: WithTranslation;
  image: StaticImageData;
  alt?: string;
}

export const servicesData: Service[] = [
  {
    text: {
      es: 'Desarrollo web y de aplicaciones móviles',
      en: 'Web and mobile application development',
      pt: 'Desenvolvimento de aplicativos de Web',
    },
    image: softwareDevelopment,
    alt: 'Web and mobile application development image',
  },
  {
    text: {
      es: 'Diseño de marca',
      en: 'Branding',
      pt: 'Design de marca',
    },
    image: branding,
    alt: 'Branding image',
  },
  {
    text: {
      es: 'Diseño UX/UI',
      en: 'UX/UI design',
      pt: 'Design UX/UI',
    },
    image: designUxui,
    alt: 'UX/UI design image',
  },
  {
    text: {
      es: 'Community Manager',
      en: 'Community Manager',
      pt: 'Community Manager',
    },
    image: communityManager,
    alt: 'Community Manager image',
  },
  {
    text: {
      es: 'Staff Augmentation',
      en: 'Staff Augmentation',
      pt: 'Staff Augmentation',
    },
    image: staffAugmentation,
    alt: 'Staff Augmentation image',
  },
  {
    text: {
      es: 'Virtual queue',
      en: 'Virtual queue',
      pt: 'Fila virtual',
    },
    image: virtualQueue,
    alt: 'Virtual queue image',
  },
  {
    text: {
      es: 'Gestión de proyectos de impacto social',
      en: 'Social impact project management',
      pt: 'Gestão de projetos de impacto social',
    },
    image: socialImpact,
    alt: 'Social impact project management image',
  },
];
