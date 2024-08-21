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
import FinanciersBadge from "./components/financiers";

import Footer from "./components/footer";

import HAC_1 from "../../public/HAC_1.jpg";
import HAC_2 from "../../public/HAC_2.jpg";
import WOIP_1 from "../../public/WOIP_1.jpg";
import WOIP_2 from "../../public/WOIP_2.jpg";
import Icono1 from "../../public/Icono_1.jpg";
import Icono2 from "../../public/Icono_2.jpg";
import Icono3 from "../../public/Icono_3.jpg";
import Icono4 from "../../public/Icono_4.jpg";
import HireCard from "./components/hire-card";
import { hireData } from "../data/hire";

import { servicesData } from "../data/services";
import { partnersData } from "../data/partners";

import HeroImg from "../../public/hero.jpg";
import { financierData } from "../data/financiers";
import Link from "next/link";

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
  const hire = dictionary["hire"];
  const footer = dictionary["footer"];

  return (
    <AnimationWrapper>
      <main className={styles.main}>

        <Nav dictionary={dictionary} lang={lang} />

        <div className={styles.hero}>
          <div className={styles.imageContainer  + ' scroll-down-parallax'}>
            <Image
              src={HeroImg}
              alt="HaC logo"
              fill
              priority
              sizes="100vw"
              className={styles.image}
              placeholder="blur"
            />
            <div className={styles.overlay}></div>
          </div>

          <div className={styles.titleContainer}>
            <h1 className={lang === 'en' ? styles.en : ''}>
              {hero["title"]}
            </h1>
          </div>
        </div>

        <div id="about" className={styles.about}>
          <h2 className={styles.sectionTitle}>{about["title"]}</h2>

          <div className={styles.itemsContainer}>
            <WideCard
              text={about["item1Text"]}
              image={HAC_1}
              reverse
            />

            <WideCard
              text={about["item2Text"]}
              image={HAC_2}
            />
          </div>
        </div>

        <div className={styles.hire}>
          <div className={styles.titlesContainer}>
            <h2 className={styles.sectionTitle}>{hire["title2"]}</h2>
          </div>

          <div className={styles.hireCardsContainer}>
            {hireData.map((hireItem, index) => (
              <HireCard
                key={index}
                image={hireItem.image}
                alt={hireItem.alt}
                title={hireItem.text[lang]}
                placeholder="blur"
              />
            ))}
          </div>
        </div>

        <div id="services" className={styles.services}>
          <h2 className={styles.sectionTitle}>{services["title"]}</h2>

          <div className={styles.cardsContainer}>
            {servicesData.map((service, index) => (
              <FloatingCard
                key={index}
                text={service["text"]}
                image={service["image"]}
                alt=""
                lang={lang}
              />
            ))}
          </div>
        </div>

        <div className={styles.about}>
          <h2 className={styles.sectionTitle}>{aboutWOIP["title"]}<Link className={styles.link} href="https://digilabour.com.br/worker-owned-intersectional-platforms-woip/" target="_blank">WOIP</Link></h2>

          <div className={styles.itemsContainer}>
            <WideCard
              text={aboutWOIP["item1Text"]}
              image={WOIP_1}
              reverse
            />
            
            <WideCard
              text={aboutWOIP["item2Text"]}
              image={WOIP_2}
            />
          </div>
        </div>

        <div className={styles.cooperativism}>
          <h2 className={styles.sectionTitle}>{cooperativism["title"]}</h2>

          <div className={styles.itemsContainer}>
            <SmallItem image={Icono1} text={cooperativism["item1Text"]} />
            <SmallItem image={Icono3} text={cooperativism["item2Text"]} />
            <SmallItem image={Icono2} text={cooperativism["item3Text"]} />
            <SmallItem image={Icono4} text={cooperativism["item4Text"]} />
          </div>
        </div>

        <div id="contact" className={styles.contactForm}>
          <h3 className={styles.ourValues}>{contactForm["values"]}</h3>

          <h2 className={styles.sectionTitle}>{contactForm["title"]}</h2>

          <div className={styles.formContainer}>
            <EmailForm
              dictionary={emailForm}
              lang={lang}
            />
          </div>
        </div>

        <div className={styles.partners}>
          <h2 className={styles.sectionTitle}>{partners["title1"]}</h2>

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

        <div className={styles.partners}>
          <h2 className={styles.sectionTitle}>{partners["title2"]}</h2>

          <div className={styles.itemsContainer}>
            {financierData.map((financier, index) => (
              <FinanciersBadge
                key={index}
                image={financier.logo}
                alt={financier.alt || ""}
                name={financier.name}
                url={financier.url}
              />
            ))}
          </div>
        </div>

        <Footer dictionary={footer} lang={lang} />

      </main>
    </AnimationWrapper>
  );
}
