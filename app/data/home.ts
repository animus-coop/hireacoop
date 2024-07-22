import ALogoImg from '../../public/a-logo.svg';
import BetterezImg from '../../public/placeholder.jpeg';
import BetterezLogo from '../../public/placeholder.jpeg';
import UltraImg from '../../public/placeholder.jpeg';
import UltraLogo from '../../public/placeholder.jpeg';
import BootNodeImg from '../../public/placeholder.jpeg';
import BootNodeLogo from '../../public/placeholder.jpeg';
import EcromeImg from '../../public/placeholder.jpeg';
import EcromeLogo from '../../public/placeholder.jpeg';
import CWImg from '../../public/placeholder.jpeg';
import CWLogo from '../../public/placeholder.jpeg';
import ForteImg from '../../public/placeholder.jpeg';
import ForteLogo from '../../public/placeholder.jpeg';
import BIDImg from '../../public/placeholder.jpeg';
import BIDLogo from '../../public/placeholder.jpeg';
import INVAPImg from '../../public/placeholder.jpeg';
import INVAPLogo from '../../public/placeholder.jpeg';
import ARSATImg from '../../public/placeholder.jpeg';
import ARSATLogo from '../../public/placeholder.jpeg';

import { WithTranslation } from './common';
import { StaticImageData } from 'next/image';

export const techsData: string[] = ['JavaScript', 'Rust', 'UX / UI', 'NodeJS', 'Web3 / DApp', 'Figma', 'React /', 'Blockchain', 'HTML / CSS', 'NextJS', 'Solidity', 'PostgreSQL', 'React Native', 'PWA', 'MongoDB', 'Elixir', 'Python', 'MySQL', 'Phoenix', 'Django', 'Docker /', 'Liveview', 'PHP / Laravel', 'Kubernetes'];

interface SpecialCard { special: boolean, type: string, image?: StaticImageData };
interface CustomerCard { title: string, location: WithTranslation, description: WithTranslation, stack: string, image: StaticImageData, logo: StaticImageData };

type Card = SpecialCard | CustomerCard;

export const customersData: Card[] = [
  { special: true, type: 'empty' },
  { title: 'Betterez', location: { en: 'Toronto, Canadá', es: 'Toronto, Canadá' }, description: { en: 'Multi-talent online booking system for bus operators.', es: 'Sistema de reservas en línea, multiusuario, para operadores de autobuses.' }, stack: 'Backend / Mobile / NodeJS / TDD / MongoDB / Vue', image: BetterezImg, logo: BetterezLogo },
  { special: true, type: 'logo', image: ALogoImg },
  { title: 'Ultra Mobile', location: { en: 'California, United States', es: 'California, Estados Unidos' }, description: { en: 'The leading prepaid carrier specializing in international services operating on the T-Mobile network.', es: 'El principal operador prepago especializado en servicios internacionales para la red de T-Mobile.'}, stack: 'React / PHP / Ecommerce platform', image: UltraImg, logo: UltraLogo },
  { title: 'BootNode', location: { en: 'Buenos Aires, Argentina', es:'Buenos Aires, Argentina' }, description: { en: 'BootNode is the leading long-term web3 builders partner.', es: 'BootNode es el socio líder para desarrolladores web3.' }, stack: 'Web3 / Blockchain / NextJS / UI design / UX', image: BootNodeImg, logo: BootNodeLogo },
  { title: 'Ecrome', location: { en: 'St Gallen, Switzerland', es: 'San Galo, Suiza' }, description: { en: 'eCrome Digital AG is one of the leading full-service digital agencies for digital publishing.', es: 'eCrome Digital AG es una de las principales agencias que ofrece servicios integrales para publicaciones digitales.' }, stack: 'React / React Native / Mobile APPS / Backend / PHP / MySQL', image: EcromeImg, logo: EcromeLogo },
  { title: 'CW Enerji', location: { en: 'Antalya, Türkiye', es: 'Antalya, Turquía' }, description: { en: 'A leading manufacturer and solution provider in the photovoltaic power generation sector.', es: 'Fabricante y proveedor de soluciones líderes en generación de energía fotovoltaica.' }, stack: 'Mobile development / React Native / NextJS / UI Design / UX', image: CWImg, logo: CWLogo },
  { title: 'Forte.io', location: { en: 'San Francisco, United States', es: 'San Francisco, Estados Unidos' }, description: { en: 'Forte\'s platform allows game publishers to easily integrate blockchain technologies.', es: 'La plataforma de Forte permite a los editores de juegos integrar fácilmente tecnologías blockchain.' }, stack: 'Elixir / Phoenix / Blockchain / Solidity', image: ForteImg, logo: ForteLogo },
  { title: 'BID', location: { en: 'Washington, United States', es: 'Washington, Estados Unidos' }, description: { en: 'The main source of development financing for Latin America and the Caribbean.', es: 'Principal fuente de financiamiento para el desarrollo de América Latina y el Caribe.' }, stack: 'Web development / UI design / UX', image: BIDImg, logo: BIDLogo },
  { title: 'INVAP', location: { en: 'Bariloche, Argentina', es: 'Bariloche, Argentina' }, description: { en: 'A world-class model in technological projects and the leader of development in Argentina.', es: 'Empresa referente en proyectos tecnológicos a nivel mundial y protagonista del desarrollo en Argentina.' }, stack: 'Mobile App / Web development / React Native / UI design / UX', image: INVAPImg, logo: INVAPLogo },
  { title: 'ARSAT', location: { en: 'Buenos Aires, Argentina', es: 'Buenos Aires, Argentina' }, description: { en: 'Argentine government-owned telecommunications company.', es: 'Empresa estatal argentina de telecomunicaciones.' }, stack: 'Software development / Web / UI design / UX', image: ARSATImg, logo: ARSATLogo },
];
