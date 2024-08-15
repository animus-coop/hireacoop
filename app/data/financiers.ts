import PlaceHolderImg from '../../public/placeholder.jpeg';
import { StaticImageData } from 'next/image';

type Financier = {
  name: string;
  logo: StaticImageData;
  alt?: string;
}

export const financierData: Financier[] = [
  { name: "WOIP", logo: PlaceHolderImg, alt: 'Placeholder alt' },
  { name: "Digital Labour", logo: PlaceHolderImg, alt: 'Placeholder alt' },
  { name: "FACTTIC", logo: PlaceHolderImg, alt: 'Placeholder alt' },
];