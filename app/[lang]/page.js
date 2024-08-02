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

        {/* <div className={styles.section1}>
          <h2 className={styles.sectionTitle + ' slide-in-bottom'}>{section1['title']}</h2>
          
          <div className={styles.grid + ' slide-in-bottom'}>
            <HorizontalSecion
              white
              containerClassNames={styles.scaleContainer}
              title={section1['scale']}
            >
              <p>{section1['scale-text']}</p>
            </HorizontalSecion>
            
            <div className={styles.bottomRow + ' staggered-slide-in-bottom'}>
              <div className={styles.item}>
                <p aria-hidden="true">:::::::</p>
                <h3 className={styles.gradientText}>{section1['title1']}</h3>
                <p>{section1['text1']}</p>
              </div>
              <div className={styles.item}>
                <p aria-hidden="true">:::::::</p>
                <h3 className={styles.gradientText}>{section1['title2']}</h3>
                <p>{section1['text2']}</p>
              </div>
              <div className={styles.item}>
                <p aria-hidden="true">:::::::</p>
                <h3 className={styles.gradientText}>{section1['title3']}</h3>
                <p>{section1['text3']}</p>
              </div>
            </div>
          </div>

          <div className={styles.agileContainer + ' staggered-slide-in-bottom' + spanishClass}>
            <div className={styles.agileTitleContainer}>
              <h3 className={spanishClass}>{section1['agile']}</h3>
              <div className={styles.dotsContainer}>
                <Image
                  src="/dots-square.svg"
                  alt=""
                  className={styles.dots}
                  fill
                />
              </div>
            </div>
            <div className={styles.agileTextContainer}>
              <p>{section1['agile-text']}</p>
              <p className={styles.asterisc} aria-hidden='true'>*</p>
            </div>
          </div>
        </div>

        <div className={styles.section2}>
          <h2 className={styles.sectionTitle + ' slide-in-bottom'}>{section2['title']}</h2>

          <div className={styles.techsGrid + ' fade-in'}>
            {techsData.map((tech, index) => (
              <p key={index} className={styles.techsItem}>{tech}</p>
            ))}
          </div>
        </div>

        <div className={styles.breakSection}>
          <Image
            src={BreakSectionImg}
            alt="People working together"
            className={styles.img}
            fill
            placeholder="blur"
            sizes='(max-width: 768px) 100vw, 0vw'
          />
        </div>

        <div className={styles.globalCustomersSection}>
          <h2 className={styles.title + ' slide-in-bottom'}>{globalCustomersSection['title']}</h2>
          
          <div className={styles.mainTextContainer + ' staggered-slide-in-bottom'}>
            <div></div>
            <div>
              <h3>{globalCustomersSection['mainTitle']}</h3>
              <p>{globalCustomersSection['mainText']}</p>
            </div>
          </div>
          
          <div className={styles.customersGridContainer}>
            <h2 className={styles.title + ' slide-in-bottom' + spanishClass}>{globalCustomersSection['customersGrid']['title']}</h2>

            <div className={styles.customersGrid}>
              {customersData.map(({ location, title, description, stack, special, type, image, logo }, index) => {
                if (special) {
                  switch (type) {
                    case 'empty':
                      return <div key={index} className={styles.cell + ' ' + styles.borderless + ' ' + styles.special}></div>
                    case 'logo':
                      return <div key={index} className={styles.cell + ' ' + styles.letter + ' ' + styles.special}><Image alt="logo" src={image} width={180} height={180} /></div>
                  }
                } else {
                  return (
                    <div key={index} className={styles.cell}>
                      <FlippingCard
                        location={location[lang]}
                        title={title}
                        description={description[lang]}
                        stack={stack}
                        image={image}
                        logo={logo}
                      />
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>

        <div id="why-us" className={styles.whyUsSection}>
          <VantaFog 
            elementId="#why-us"
            baseColor="#FFFFFF" 
            lowlightColor="#F5F5F5" 
            midtoneColor="#D4D4D4" 
            highlightColor="#CDCDCD"
            blurFactor={0.5}
            zoom={0.9}
            speed={1.5}
            minHeight={1500}
          />
          <h2 className={styles.title + ' slide-in-bottom'}>{whyUsSection['title']}</h2>
          <div className={styles.content + ' staggered-slide-in-right'}>
            <Accordion
              title={whyUsSection['item1']['title']}
              content={whyUsSection['item1']['text']}
            />
            <Accordion
              title={whyUsSection['item2']['title']}
              content={whyUsSection['item2']['text']}
            />
            <Accordion
              title={whyUsSection['item3']['title']}
              content={whyUsSection['item3']['text']}
            />
            <Accordion
              title={whyUsSection['item4']['title']}
              content={whyUsSection['item4']['text']}
            />
          </div>
        </div>
      
        <div className={styles.section3}>
          <h2 className={styles.sectionTitle + ' slide-in-bottom'}>{section3['title']}</h2>
          <h3 className={styles.mainTitle + ' slide-in-bottom' + spanishClass}>{section3['mainTitle']}</h3>
          
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.list + ' slide-in-bottom no-opacity'}>
                <div className={styles.item}>
                  <div className={styles.arrowContainer}>
                    <Image 
                      src='/arrow.svg'
                      alt=""
                      fill
                    />
                  </div>
                  <p>{section3['item1']}</p>
                </div>
                <div className={styles.item}>
                  <div className={styles.arrowContainer}>
                    <Image 
                      src='/arrow.svg'
                      alt=""
                      fill
                    />
                  </div>
                  <p>{section3['item2']}</p>
                </div>
                <div className={styles.item}>
                  <div className={styles.arrowContainer}>
                    <Image 
                      src='/arrow.svg'
                      alt=""
                      fill
                    />
                  </div>
                  <p>{section3['item3']}</p>
                </div>
              </div>
              <Button
                text={section3['button']}
                href="/[lang]/about-us"
                as={getTranslatedPathname(lang, 'about-us')}
                blackBorder
              />
            </div>
            <div className={styles.right}>
              <Image
                src={CoopeImg}
                alt="People working together"
                className={styles.img + ' slide-in-bottom'}
                fill
                placeholder="blur"
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </div>
        </div>

        <Footer lang={lang} /> */}
      </main>
    </AnimationWrapper>
  );
}
