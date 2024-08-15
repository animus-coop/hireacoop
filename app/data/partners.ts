import CL from '../../public/CodigoLibre.svg';
import Animus from '../../public/Animus.png';
import ALT from '../../public/ALT.png';
import PlaceHolderImg from '../../public/placeholder.jpeg';
import Marialab from '../../public/marialab.png';
import { StaticImageData } from 'next/image';

type Partner = {
  name: string;
  logo: StaticImageData;
  alt?: string;
}

export const partnersData: Partner[] = [
  { name: "Animus", logo: Animus, alt: 'Placeholder alt' },
  { name: "ALT", logo: ALT, alt: 'Placeholder alt' },
  { name: "Codigo Libre", logo: CL, alt: 'Placeholder alt' },
  { name: "Señoritas Courier", logo: PlaceHolderImg, alt: 'Placeholder alt' },
  { name: "Central Salta", logo: PlaceHolderImg, alt: 'Placeholder alt' },
  { name: "MTST", logo: PlaceHolderImg, alt: 'Placeholder alt' },
  { name: "Maria Lab", logo: Marialab, alt: 'Placeholder alt' },

];
