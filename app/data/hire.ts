import PlaceholderImg from '../../public/placeholder.jpeg';
import { WithTranslation } from './common';
import { StaticImageData } from 'next/image';

type Hire = {
    text: WithTranslation;
    image: StaticImageData;
    alt?: string;
  }

  export const hireData: Hire[] = [
    { 
      text: {
        en: 'Organizaciones democráticas y horizontales',
        es: 'Organizaciones democráticas y horizontales',
        pt: 'Organizaciones democráticas y horizontales',
      },
      image: PlaceholderImg,
      alt: 'Placeholder alt',
    },
    { 
        text: {
          en: 'Les trabajadoris que las integran son sus dueñes',
          es: 'Les trabajadoris que las integran son sus dueñes',
          pt: 'Les trabajadoris que las integran son sus dueñes',
        },
        image: PlaceholderImg,
        alt: 'Placeholder alt',
      },
      { 
        text: {
          en: 'valorar todas las instancias de los procesos y a consensuar las decisiones',
          es: 'valorar todas las instancias de los procesos y a consensuar las decisiones',
          pt: 'valorar todas las instancias de los procesos y a consensuar las decisiones',
        },
        image: PlaceholderImg,
        alt: 'Placeholder alt',
      },
]