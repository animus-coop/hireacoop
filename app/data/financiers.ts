import facttic from '../../public/FACTTIC.png';
import digilabour from '../../public/Digitalabour.png';
import WOIP from '../../public/WOIP.png';
import TorontoUniversity from '../../public/TorontoUniversity.png';
import SSHRC from '../../public/SSHRC.png';
import { StaticImageData } from 'next/image';

type Financier = {
  name: string;
  logo: StaticImageData;
  alt?: string;
}

export const financierData: Financier[] = [
  { name: "WOIP", logo: WOIP, alt: 'Placeholder alt' },
  { name: "DigiLabour", logo: digilabour, alt: 'Placeholder alt' },
  { name: "FACTTIC", logo: facttic, alt: 'Placeholder alt' },
  { name: "University of Toronto", logo: TorontoUniversity, alt: 'Placeholder alt' },
  { name: "sshrc", logo: SSHRC, alt: 'Placeholder alt' },

];