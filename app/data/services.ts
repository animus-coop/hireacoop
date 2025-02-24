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
      es: 'Desarrollo web y de aplicaciones móviles',
      en: 'Web and mobile application development',
      pt: 'Desenvolvimento de aplicativos móveis e da Web',
    },
    image: '',
    alt: 'Web and mobile application development image',
  },
  {
    text: {
      es: '',
      en: '',
      pt: '',
    },
    image: '',
    alt: '',
  },
  {
    text: {
      es: '',
      en: '',
      pt: '',
    },
    image: '',
    alt: '',
  },
  {
    text: {
      es: '',
      en: '',
      pt: '',
    },
    image: '',
    alt: '',
  },
  {
    text: {
      es: '',
      en: '',
      pt: '',
    },
    image: '',
    alt: '',
  },
  {
    text: {
      es: '',
      en: '',
      pt: '',
    },
    image: '',
    alt: '',
  },
  {
    text: {
      es: '',
      en: '',
      pt: '',
    },
    image: '',
    alt: '',
  },
];
