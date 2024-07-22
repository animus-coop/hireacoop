import { WithTranslation } from "./common";

type NewsCard = {
  category: WithTranslation;
  title: WithTranslation;
  text: WithTranslation;
  url: string;
};

export const newsData: NewsCard[] = [
  {
    category: {
      en: "Our story",
      es: "Institucional",
    },
    title: {
      en: "Step by Step, from the Ground Up",
      es: "Paso a paso, desde los cimientos",
    },
    text: { 
      en: "In 2023, we started taking the initial steps to turn the dream of building our own office into reality. Having a physical space enhances the long-term stability of our jobs and boosts activities that contribute to the community.",
      es: "En 2023, comenzamos a dar los primeros pasos para hacer realidad el sueño de construir nuestra propia oficina. Tener un espacio físico potencia actividades y mejora la estabilidad de nuestros empleos.",
    },
    url: "https://www.linkedin.com/pulse/paso-desde-los-cimientos-animus-argentina-ujtce/?trackingId=q2Uu8TT8sBKyaPQHYOUgiw%3D%3D",
  },
  {
    category: { 
      en: "Community",
      es: "Comunidad",
    },
    title: {
      en: "Animus at UNRN",
      es: "Animus en la UNRN",
    },
    text: { 
      en: "We presented a talk on Frontend Development, UI, and Accessibility at the Research and Extension Event of the National University of Río Negro (UNRN) as part of an ongoing collaboration agreement.",
      es: "Presentamos una charla sobre Desarrollo Frontend, UI y Accesibilidad en las Jornadas de Investigación y Extensión de la Universidad Nacional de Río Negro (UNRN).",
    },
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7203476860746252290/",
  },
  {
    category: { 
      en: "Research",
      es: "Investigación",
    },
    title: {
      en: "Sieve of Atkin implementation in Elixir",
      es: "Implementación del Cribado de Atkin en Elixir",
    },
    text: {
      en: "At Animus, we love challenges! Recently, our colleague Juli Somoza explored the Sieve of Atkin to find prime numbers using Elixir. Check out the full article to learn more!",
      es: "En Animus, teníamos la tradición de publicar un desafío semanal. Impulsado por este juego nuestro compañero Juli Somoza exploró el Tamiz de Atkin para encontrar números primos utilizando Elixir.",
    },
    url: "https://medium.com/p/63ec0f3487bc",
  },
  {
    category: {
      en: "Community",
      es: "Comunidad",
    },
    title: {
      en: "We Value the Cooperative Movement and Identity",
      es: "Valoramos el movimiento y la identidad cooperativa",
    },
    text: {
      en: "We envision a country where cooperativism and technology support sovereignty and productive development. In light of the attack on our sector, we share FACTTIC's stance.",
      es: "Queremos un país en donde el cooperativismo y la tecnología sean soporte de la soberanía y el desarrollo productivo. Ante el ataque que está sufriendo el sector, compartimos el posicionamiento de FACTTIC.",
    },
    url: "https://cooperativas-suspendidas.sutty.nl/gacetilla-de-prensa/",
  },
  {
    category: { 
      en: "Expeditions",
      es: "Expediciones",
    },
    title: { 
      en: "We traveled to São Paulo",
      es: "Viajamos a San Pablo",
    },
    text: { 
      en: "Together with the cooperatives ALT and Código Libre, we participated in a series of activities in Brazil as part of a project on intersecting worker-owned digital platforms.", 
      es: "Junto con las cooperativas ALT y Código Libre participamos de una serie de actividades en Brasil, en el marco del proyecto sobre plataformas digitales interseccionales de propiedad de los trabajadores.", 
    },
    url: "https://www.instagram.com/p/C7Mu_rtOVDK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    category: {
      en: "Institutional",
      es: "Institucional",
    },
    title: {
      en: "Joining the FACTTIC Committee",
      es: "Conformamos el Consejo de FACTTIC",
    },
    text: {
      en: "In December 2023, we joined the Federation's plenary session, as we usually do. This time, we had the immense joy and commitment of also participating in the new Board for the 2023-2025 term.",
      es: "En diciembre del 2023 nos sumamos al plenario de la Federación, como lo hacemos habitualmente. Esta vez, con la inmensa alegría y compromiso de participar del nuevo Consejo de Administración 2023-2025.",
    },
    url: "https://www.instagram.com/p/C05CcyHx85T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    category: {
      en: "Community",
      es: "Comunidad",
    },
    title: {
      en: "App for the Women's and Gender Diversity Convention",
      es: "App del encuentro de mujeres y disidencias",
    },
    text: {
      en: "We developed the app for the 36th Plurinational Convention of Women, Lesbians, Transvestites, Trans, Bisexuals, Intersex, and Non-Binary People, held in October 2023 in Bariloche.",
      es: "Desarrollamos la app para el 36° Encuentro Plurinacional de Mujeres, Lesbianas, Travestis, Trans, Bisexuales, Intersexuales y No Binaries, que se realizó en octubre de 2023 en Bariloche.",
    },
    url: "https://medium.com/@animus-coop/cómo-creamos-colectivamente-una-app-para-el-36-encuentro-plurinacional-de-mujeres-y-disidencias-daef38a7529d",
  },
  {
    category: { 
      en: "Analysis",
      es: "Análisis",
    },
    title: { 
      en: "Racially Neutral Language",
      es: "Lenguaje racialmente neutral",
    },
    text: { 
      en: "They say that how you name things is how you live. We conducted an analysis of tech jargon and the number of allegories to racism it contains. Here we share these reflections.",
      es: "Dicen que cómo nombrás es cómo vivís. Hicimos un análisis sobre la jerga informática y la cantidad de alegorías al racismo que tiene. Compartimos estas reflexiones.",
    },
    url: "https://animus-coop.medium.com/lenguaje-racialmente-neutral-4b569c16b543",
  },
  {
    category: {
      en: "Community",
      es: "Comunidad",
    },
    title: {
      en: "Launch of Abuelas' Website",
      es: "Lanzamiento del sitio de Abuelas",
    },
    text: {
      en: "We took part in the launch of Abuelas' new institutional website, a day filled with pride and emotion. The redesign was a collaborative effort by several cooperatives within FACTTIC.",
      es: "Participamos de la presentación de la nueva web institucional de Abuelas, una jornada de mucho orgullo y emoción. El rediseño fue un trabajo conjunto de varias cooperativas pertenecientes a FACTTIC.",
    },
    url: "https://www.instagram.com/reel/CyBzaukPkVq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];
