import Circle1Img from '../../public/circle1.jpeg';
import Circle2Img from '../../public/circle2.jpeg';
import Circle3Img from '../../public/circle3.jpeg';

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
      es: 'Las cooperativas somos organizaciones democráticas y horizontales',
      en: 'Cooperatives are democratic and horizontal organizations',
      pt: 'As cooperativas são organizações democráticas e horizontais',
    },
    image: Circle1Img,
    alt: 'Image with lots of hands raised',
  },
  { 
    text: {
      es: 'Les trabajadores que las integran son sus dueñes',
      en: 'The workers who are part of them are their owners',
      pt: 'Os trabalhadores que as integram são seus proprietários',
    },
    image: Circle2Img,
    alt: 'Image of a hand holding a key',
  },
  { 
    text: {
      es: 'Valoramos las instancias de los procesos y consensuamos las decisiones',
      en: 'We value the processes and reach decisions through consensus',
      pt: 'Valorizamos as instâncias dos processos e tomamos decisões por consenso',
    },
    image: Circle3Img,
    alt: 'Image representing concense',
  },
]