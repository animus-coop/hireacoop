import CL from '../../public/CodigoLibre.svg';
import Animus from '../../public/Animus.png';
import ALT from '../../public/ALT.png';
import SeñoCourier from '../../public/Señoritas Courier.png';
import Marialab from '../../public/Marialab.png';
import MTST from '../../public/MTST.png';
import CentralSalta from '../../public/Central Salta.jpg';
import { StaticImageData } from 'next/image';

type Partner = {
  name: string;
  logo: StaticImageData;
  alt?: string;
}

export const partnersData: Partner[] = [
  { name: "Animus", logo: Animus, alt: 'Placeholder alt' },
  { name: "Alternativa Laboral Trans", logo: ALT, alt: 'Placeholder alt' },
  { name: "Codigo Libre", logo: CL, alt: 'Placeholder alt' },
  { name: "Señoritas Courier", logo: SeñoCourier, alt: 'Placeholder alt' },
  { name: "Central Salta", logo: CentralSalta, alt: 'Placeholder alt' },
  { name: "MTST", logo: MTST, alt: 'Placeholder alt' },
  { name: "Maria Lab", logo: Marialab, alt: 'Placeholder alt' },

];
