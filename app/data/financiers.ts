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
  url: string;
}

export const financierData: Financier[] = [
  { name: "WOIP", logo: WOIP, alt: 'Placeholder alt', url:'https://digilabour.com.br/worker-owned-intersectional-platforms-woip/' },
  { name: "DigiLabour", logo: digilabour, alt: 'Placeholder alt', url:'https://digilabour.com.br/' },
  { name: "FACTTIC", logo: facttic, alt: 'Placeholder alt', url:'https://facttic.org.ar/' },
  { name: "University of Toronto", logo: TorontoUniversity, alt: 'Placeholder alt', url:'https://www.utoronto.ca/' },
  { name: "SSHRC", logo: SSHRC, alt: 'Placeholder alt', url:'https://www.sshrc-crsh.gc.ca/' },

];