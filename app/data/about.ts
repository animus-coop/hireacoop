import AbuelasImg from '../../public/placeholder.jpeg';
import PlatformCoopImg from '../../public/placeholder.jpeg';

import CoopchainImg from '../../public/placeholder.jpeg';
import CannabisImg from '../../public/placeholder.jpeg';
import AlMargenImg from '../../public/placeholder.jpeg';
import WomenImg from '../../public/placeholder.jpeg';

import { WithTranslation } from './common';
import { StaticImageData } from 'next/image';

type Project = {
  title: WithTranslation;
  text: WithTranslation;
  image: StaticImageData;
  alt?: string;
}

export const collectiveProjectsData: Project[] = [
  { 
    title: { 
      en: 'Abuelas.org.ar',
      es: 'Abuelas.org.ar'
    }, text: { 
      en: 'Alongside 8 other cooperatives, we redesigned the institutional website of Abuelas de Plaza de Mayo, a civil association that locates and reunites with their rightful families the children (now adults) appropriated by the last civic-military dictatorship in Argentina.',
      es: 'Junto a otras 8 cooperativas, rediseñamos el sitio web institucional de Abuelas de Plaza de Mayo, una asociación civil que localiza y reencuentra con sus familias legítimas a los niños (ahora adultos) apropiados por la última dictadura cívico-militar en Argentina.',
    }, image: AbuelasImg
  },
  { 
    title: {
      en: 'Platform cooperativism',
      es: 'Cooperativismo de plataforma'
    },
    text: {
      en: 'Popular Media is a news cooperative platform that advocates for a collective model of information dissemination. It was funded by FACTTIC to address challenges in communicational pluralism and developed in collaboration with another cooperative within the network.',
      es: 'Medios Populares es una plataforma cooperativa que impulsa un modelo colectivo de difusión de noticias. Fue financiada por FACTTIC para hacer frente a un contexto regresivo para el pluralismo comunicacional, y desarrollada por Animus junto a otra cooperativa miembro de la Federación.'
    }, image: PlatformCoopImg
  }
];

export const positiveImpactProjectsData: Project[] = [
  {
    title: {
      en: 'coopchain',
      es: 'coopchain'
    },
    text: {
      en: 'We co-create a blockchain-based tool for securely, decentralized, and immutable digital signing of cooperative documents and minutes. Coopchain leverages the benefits of the BFA (Blockchain Federal Argentina), a private implementation of Ethereum that makes it free and fast.',
      es: 'Co-creamos una herramienta basada en blockchain para la firma digital segura, descentralizada e inmutable de documentos y actas cooperativas. Coopchain aprovecha los beneficios del BFA (Blockchain Federal Argentina), una implementación privada de Ethereum que lo hace gratuito y rápido.'
    }, image: CoopchainImg, alt: "Coopchain project logo"
  },
  {
    title: {
      en: 'Growing App',
      es: 'App de autocultivo'
    },
    text: {
      en: 'We are working on the development of an app that guides self-growing, aiming to facilitate the task and develop the full potential of the planted crop. The application will provide a plan for optimal nutrition and actions to follow, based on information collected by sensors: humidity, electrical conductivity and light, among others.',
      es: 'Estamos trabajando en el desarrollo de una aplicación que proporciona un plan para la óptima nutrición de los cultivos y las acciones a seguir para lograr el pleno potencial en el crecimiento de las plantas. La guía se basa en información que tiene el cultivador junto a otra recopilada por sensores de humedad, conductividad y luz, entre otros.'
    }, image: CannabisImg
  },
  {
    title: {
      en: 'Al margen',
      es: 'Al margen'
    },
    text: {
      en: 'We developed a community e-commerce platform for the Civil Association “Colectivo Al Margen”. The system facilitates order management, helping to strengthen a direct circuit between producers and consumers. This makes quality products available to members at low prices and facilitates the sale of local products.',
      es: 'Desarrollamos una plataforma de comercio electrónico comunitario para la Asociación Civil “Colectivo Al Margen”. El sistema facilita la gestión de pedidos, ayudando a fortalecer un circuito directo entre productores y consumidores. Esto pone a disposición de los socios productos de calidad a precios bajos y facilita la venta de productos locales.'
    }, image: AlMargenImg
  },
  {
    title: {
      en: 'Women and gender diversity app',
      es: 'App para mujeres y disidencias'
    },
    text: {
      en: 'We developed an application for the 36th Plurinational Women and Gender Diversity Convention, an event that aims to discuss gender barriers in society. The app provided information on 112 workshops and over 200 cultural activities, displayed locations on the map, and allowed real-time support interactions.',
      es: 'Desarrollamos una aplicación para el 36º Encuentro Plurinacional de Mujeres y Disidencias, un evento que busca discutir, año a año, las barreras de género en la sociedad. La app proporcionó información sobre 112 talleres y más de 200 actividades culturales durante el evento, además de ubicarlas en un mapa y permitir interacciones de apoyo en tiempo real.'
    }, image: WomenImg
  }
];
