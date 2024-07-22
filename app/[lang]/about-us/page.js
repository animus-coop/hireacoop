import { getDictionary } from "../../../get-dictionary";
import HorizontalSecion from "../components/horizontal-section";
import styles from './page.module.scss';
import Nav from "../components/nav";
import Image from "next/image";
import WideCard from "../components/wide-card";

import OficinaImg from '../../../public/about/oficina.jpeg';
import MateImg from '../../../public/about/mate.jpeg';
import MatiImg from '../../../public/about/mati.jpeg';

import HandsImg from '../../../public/about/hands.png';
import ClockImg from '../../../public/about/clock.png';
import LaptopImg from '../../../public/about/laptop.png';
import ChatImg from '../../../public/about/chat.png';
import GemImg from '../../../public/about/gem.png';

import Link from "next/link";
import Footer from "../components/footer";
import Button from "../components/button";
import AnimationWrapper from "../components/animation-wrapper";
import { collectiveProjectsData, positiveImpactProjectsData } from "../../data/about";
import { spanishClassName } from "../../../utils/strings";
import { getTranslatedPathname } from "../../../utils/pathnames";

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const title = lang === 'es'
    ? 'Quiénes Somos'
    : 'About Us';

  return { title }
}

export default async function AboutUs({
  params: { lang }
}) {
  const dictionary = await getDictionary(lang);

  const aboutUs = dictionary['aboutUs'];
  const header = aboutUs['header'];
  const roadMapSection = aboutUs['roadMapSection'];
  const statsSection = aboutUs['statsSection'];
  const joinOurTeamSection = aboutUs['joinOurTeamSection'];
  const perksSection = aboutUs['perksSection'];
  const widerNetworkSection = aboutUs['widerNetworkSection'];
  const wideCardDictionary = dictionary['wideCard'];
  const positiveImpactSection = aboutUs['positiveImpactSection'];

  const spanishClass = spanishClassName(lang, styles.spanish);

  return (
    <AnimationWrapper>
      <div className={styles.main}>
        <div className={styles.header}>
          
          <Nav dictionary={dictionary} lang={lang} black path="/about-us" />

          <div className={styles.hero + ' staggered-slide-in-bottom'}>
            <h1 className={spanishClass}>
              {header['title']}
            </h1>
            <p className={styles.asterisc} aria-hidden='true'>*</p>
          </div>
        </div>

        <div className={styles.horizontalSectionWrapper}>
          <HorizontalSecion
            title={roadMapSection['title']}
          >
            <p>{roadMapSection['paragraph']}</p>
          </HorizontalSecion>
        </div>

        <div className={styles.imagesSection}>
          <div className={styles.imagesContainer + ' fade-in'}>
            <div className={styles.horizontalImageWrapper}>
              <Image
                src={OficinaImg}
                alt="Office image"
                fill
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.verticalImageWrapper}>
              <Image
                src={MateImg}
                alt="Mate with snow image"
                fill
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.left}>
            <div className={styles.item + ' slide-in-bottom'}>
              <h4>{statsSection['left']['title1']}</h4>
              <p>{statsSection['left']['text1']}</p>
            </div>

            <div className={styles.item + ' slide-in-bottom'}>
              <h4>{statsSection['left']['title2']}</h4>
              <p>{statsSection['left']['text2']}</p>
            </div>

            <div className={styles.item + ' slide-in-bottom'}>
              <h4>{statsSection['left']['title3']}</h4>
              <p>{statsSection['left']['text3']}</p>
            </div>

            <div className={styles.item + ' slide-in-bottom'}>
              <h4>{statsSection['left']['title4']}</h4>
              <p>{statsSection['left']['text4']}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.top + ' staggered-slide-in-bottom'}>
              <h4>{statsSection['right']['title']}</h4>
              <p>{statsSection['right']['item1']}</p>
              <p>{statsSection['right']['item2']}</p>
              <p>{statsSection['right']['item3']}</p>
              <p>{statsSection['right']['item4']}</p>
            </div>
            <h3 className={styles.verticalCoop}>coop</h3>
          </div>
        </div>

        <div className={styles.joinOurTeamSection}>
          <div className={styles.left}>

            <h2 className={styles.gradientText + ` ${styles.higher}` + ' slide-in-bottom'}>{joinOurTeamSection['title']}</h2>
            <p className={styles.paragraph + ' slide-in-bottom'}>{joinOurTeamSection['paragraph1']}</p>

            <h4 className='slide-in-bottom'>{joinOurTeamSection['subtitle']}</h4>
            <p className={styles.paragraph + ' slide-in-bottom'}>{joinOurTeamSection['paragraph2']}</p>

            <div className={styles.separator} />

            <div className="slide-in-bottom">
              <Button
                text={joinOurTeamSection['button']}
                href={`/${lang}/join-us`}
                as={getTranslatedPathname(lang, 'join-us')}
                blackBorder
              />
            </div>
          </div>

          <div className={styles.imageWrapper + ' fade-in'}>
            <Image
              src={MatiImg}
              alt='Mati working'
              fill
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className={styles.perksSection}>
          <div className={styles.left + ' slide-in-bottom'}>
            <h3>{perksSection['title']}</h3>
          </div>

          <div className={styles.right + ' staggered-slide-in-bottom'}>
            <div className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image src={HandsImg} placeholder="blur" alt="Clock icon" fill sizes="10vw" />
              </div>
              <div>
                <h6>{perksSection['item1']['title']}</h6>
                <p>{perksSection['item1']['text']}</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image src={ClockImg} placeholder="blur" alt="Clock icon" fill sizes="10vw" />
              </div>
              <div>
                <h6>{perksSection['item2']['title']}</h6>
                <p>{perksSection['item2']['text']}</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image src={LaptopImg} placeholder="blur" alt="Clock icon" fill sizes="10vw" />
              </div>
              <div>
                <h6>{perksSection['item3']['title']}</h6>
                <p>{perksSection['item3']['text']}</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image src={ChatImg} placeholder="blur" alt="Clock icon" fill sizes="10vw" />
              </div>
              <div>
                <h6>{perksSection['item4']['title']}</h6>
                <p>{perksSection['item4']['text'].replace('<br/>', '\n')}</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image src={GemImg} placeholder="blur" alt="Clock icon" fill sizes="10vw" />
              </div>
              <div>
                <h6>{perksSection['item5']['title']}</h6>
                <p>{perksSection['item5']['text']}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.widerNetworkSection}>
          <HorizontalSecion
            white
            title={widerNetworkSection['title']}
            containerClassNames={styles.widerNetworkContainer}
          >
            <h4 className={styles.subtitle}>
              {widerNetworkSection['subtitlePt1']}
              <Link href='https://facttic.org.ar/' target="_blank"><span className={styles.gradientText}>
                {widerNetworkSection['subtitleSpan']}</span>
              </Link>
              {widerNetworkSection['subtitlePt2']}
            </h4>
            <p>{widerNetworkSection['paragraph1']}</p>
          </HorizontalSecion>

          <h2 className={styles.sectionTitle + ' slide-in-bottom'}>{widerNetworkSection['collectiveProjectsTitle']}</h2>

          <div className={styles.wideCardsContainer}>
            {collectiveProjectsData.map((project, index) => (
              <WideCard
                key={index}
                index={index + 1}
                title={project.title[lang]}
                text={project.text[lang]}
                image={project.image}
                alt={project.alt}
                dictionary={wideCardDictionary}
              />
            ))}
          </div>
        </div>

        <div className={styles.positiveImpactSection + ' staggered-slide-in-bottom'}>
          <h2>{positiveImpactSection['title']}</h2>
          <div className={styles.textContainer}>
            <p>{positiveImpactSection['paragraph']}</p>
            <div className={styles.blackStarContainer}>
              <Image
                src='/black-star.svg'
                alt='Black star'
                fill
              />
            </div>
          </div>

          <div className={styles.wideCardsContainer}>
            {positiveImpactProjectsData.map((project, index) => (
              <WideCard
                key={index}
                index={index + 1}
                title={project.title[lang]}
                text={project.text[lang]}
                image={project.image}
                alt={project.alt}
                dictionary={wideCardDictionary}
                black
              />
            ))}
          </div>
        </div>

        <Footer lang={lang} />
      </div>
    </AnimationWrapper>
  );
}