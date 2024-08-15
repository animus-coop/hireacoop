import facttic from '../../public/FACTTIC.png';
import digilabour from '../../public/Digitalabour.png';
import WOIP from '../../public/WOIP.png';
import { StaticImageData } from 'next/image';

type Financier = {
  name: string;
  logo: StaticImageData;
  alt?: string;
}

export const financierData: Financier[] = [
  { name: "WOIP", logo: WOIP, alt: 'Placeholder alt' },
  { name: "Digital Labour", logo: digilabour, alt: 'Placeholder alt' },
  { name: "FACTTIC", logo: facttic, alt: 'Placeholder alt' },
];