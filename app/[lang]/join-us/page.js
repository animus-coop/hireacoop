import EmailForm from "../components/email-form";
import styles from "./page.module.scss";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";

import { openPositionsData } from "../../data/join-us";
import { getDictionary } from "../../../get-dictionary";
import AnimationWrapper from "../components/animation-wrapper";
import { spanishClassName } from "../../../utils/strings";

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const title = lang === 'es'
    ? 'Sumate'
    : 'Join Us';

  return { title }
}

export default async function JoinUs({
  params: { lang },
}) {
  const dictionary = await getDictionary(lang);
  const contactDictionary = dictionary['contact'];
  const joinUsDictionary = contactDictionary['joinUs'];
  const header = joinUsDictionary['header'];
  const openPositions = joinUsDictionary['openPositions'];
  const formSection = contactDictionary['formSection'];

  const noPositions = openPositionsData.length === 0;

  const spanishClass = spanishClassName(lang, styles.spanish);

  return (
    <AnimationWrapper>
      <div className={styles.main}>
        <div className={styles.header}>

          <Nav dictionary={dictionary} lang={lang} path="/join-us" />

          <div className={styles.hero + ' staggered-slide-in-bottom'}>
            <h1 className={styles.gradientText + spanishClass}>{header['title']}</h1>
            <p className={styles.asterisc + ' ' + styles.gradientText} aria-hidden='true'>*</p>
          </div>

        </div>

        <div className={styles.formSection + ' staggered-slide-in-bottom'}>

          <div className={styles.left}>
            <h3>{openPositions['title']}</h3>
            { noPositions && <p>{openPositions['noPositions']}</p> }
            { !noPositions && (
              <ul className={styles.openPositionsContainer}>
                {openPositionsData.map((position, i) => (
                  <li className={styles.item} key={i}>
                    <div className={styles.arrowContainer}>
                      <Image 
                        src='/arrow.svg'
                        alt="Arrow"
                        fill
                      />
                    </div>
                    <div className={styles.right}>
                      <h4>{position.title}</h4>
                      <p>{position.description[lang]}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.right}>
            <EmailForm lang={lang} dictionary={formSection['form']} cv />
          </div>

        </div>

        <Footer lang={lang} path="/join-us" bottomOnly transparent />

        <div className={styles.bgContainer} />
      </div>
    </AnimationWrapper>
  );
}