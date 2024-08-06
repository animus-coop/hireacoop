import Image from "next/image";
import styles from "./page.module.scss";
import { getDictionary } from "../../get-dictionary";
import Nav from "./components/nav";

import AnimationWrapper from "./components/animation-wrapper";

import WideCard from "./components/wide-card";
import FloatingCard from "./components/floating-card";
import SmallItem from "./components/small-item";
import EmailForm from "./components/email-form";
import PartnerBadge from "./components/partner-badge";

import PlaceholderImg from "../../public/placeholder.jpeg";

import { servicesData } from "../data/services";
import { partnersData } from "../data/partners";

export default async function Home({
  params: { lang }
}) {
  const dictionary = await getDictionary(lang);

  const hero = dictionary["hero"];
  const about = dictionary["about"];
  const services = dictionary["services"];
  const aboutWOIP = dictionary["aboutWOIP"];
  const cooperativism = dictionary["cooperativism"];
  const contactForm = dictionary["contactForm"];
  const emailForm = contactForm["emailForm"];
  const partners = dictionary["partners"];

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

        <div id="about" className={styles.about}>
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

        <div id="services" className={styles.services}>
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

        <div className={styles.cooperativism}>
          <h2 className={styles.sectionTitle}>{cooperativism["title"]}</h2>

          <div className={styles.itemsContainer}>
            <SmallItem image={PlaceholderImg} text={cooperativism["item1Text"]} />
            <SmallItem image={PlaceholderImg} text={cooperativism["item2Text"]} />
            <SmallItem image={PlaceholderImg} text={cooperativism["item3Text"]} />
            <SmallItem image={PlaceholderImg} text={cooperativism["item4Text"]} />
          </div>
        </div>

        <div id="contact" className={styles.contactForm}>
          <h3 className={styles.ourValues}>{contactForm["values"]}</h3>

          <div className={styles.formContainer}>
            <EmailForm
              dictionary={emailForm}
              lang={lang}
            />
          </div>
        </div>

        <div className={styles.partners}>
          <h2 className={styles.sectionTitle}>{partners["title"]}</h2>

          <div className={styles.itemsContainer}>
            {partnersData.map((partner, index) => (
              <PartnerBadge
                key={index}
                image={partner.logo}
                alt={partner.alt || ""}
                name={partner.name}
              />
            ))}
          </div>
        </div>

      </main>
    </AnimationWrapper>
  );
}
