import PlaceholderImg from '../../public/placeholder.jpeg';
import { StaticImageData } from 'next/image';

type Partner = {
  name: string;
  logo: StaticImageData;
  alt?: string;
}

export const partnersData: Partner[] = [
  { name: "Partner 1", logo: PlaceholderImg, alt: 'Placeholder alt' },
  { name: "Partner 2", logo: PlaceholderImg, alt: 'Placeholder alt' },
  { name: "Partner 3", logo: PlaceholderImg, alt: 'Placeholder alt' },
  { name: "Partner 4", logo: PlaceholderImg, alt: 'Placeholder alt' },
];
