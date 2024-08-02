import Image from "next/image";
import styles from "./page.module.scss";
import { getDictionary } from "../../get-dictionary";
import Nav from "./components/nav";

import AnimationWrapper from "./components/animation-wrapper";

import WideCard from "./components/wide-card";
import FloatingCard from "./components/floating-card";
import PlaceholderImg from "../../public/placeholder.jpeg";

import { servicesData } from "../data/services";

export default async function Home({
  params: { lang }
}) {
  const dictionary = await getDictionary(lang);

  const hero = dictionary["hero"];
  const about = dictionary["about"];
  const services = dictionary["services"];
  const aboutWOIP = dictionary["aboutWOIP"];

  return (
    <AnimationWrapper>
      <main className={styles.main}>

        <Nav dictionary={dictionary} lang={lang} />

        <div className={styles.hero}>
          <div className={styles.imageContainer}>
            <Image
              src="/hero.svg"
              alt="Fist logo"
              fill
              priority
            />
          </div>

          <div className={styles.titleContainer}>
            <h1>
              {hero["title"]}
            </h1>
          </div>
        </div>

        <div className={styles.about}>
          <h2 className={styles.sectionTitle}>{about["title"]}</h2>

          <div className={styles.itemsContainer}>
            <WideCard
              text={about["item1Text"]}
              image={PlaceholderImg}
              reverse
            />

            <WideCard
              text={about["item2Text"]}
              image={PlaceholderImg}
            />
          </div>
        </div>

        <div className={styles.services}>
          <h2 className={styles.sectionTitle}>{services["title"]}</h2>

          <div className={styles.cardsContainer}>
            {servicesData.map((service, index) => (
              <FloatingCard
                key={index}
                text={service["text"]}
                image={PlaceholderImg}
                alt=""
                lang={lang}
              />
            ))}
          </div>
        </div>

        <div className={styles.about}>
          <h2 className={styles.sectionTitle}>{aboutWOIP["title"]}</h2>
          
          <div className={styles.itemsContainer}>
            <WideCard
              text={aboutWOIP["item1Text"]}
              image={PlaceholderImg}
              reverse
            />
            
            <WideCard
              text={aboutWOIP["item2Text"]}
              image={PlaceholderImg}
            />
          </div>
        </div>
      </main>
    </AnimationWrapper>
  );
}
