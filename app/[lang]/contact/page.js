import { getDictionary } from "../../../get-dictionary";
import EmailForm from "../components/email-form";
import styles from "./page.module.scss";
import Nav from "../components/nav";
import Footer from "../components/footer";

import Button from "../components/button";
import AnimationWrapper from "../components/animation-wrapper";
import { getTranslatedPathname } from "../../../utils/pathnames";

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const title = lang === 'es'
    ? 'Contacto'
    : 'Contact';

  return { title }
}

export default async function Contact({
  params: { lang },
}) {
  const dictionary = await getDictionary(lang);
  const contactDictionary = dictionary['contact'];
  const header = contactDictionary['header'];
  const formSection = contactDictionary['formSection'];
  const wannaJoinSection = contactDictionary['wannaJoinSection'];

  return (
    <AnimationWrapper>
      <div className={styles.main}>
        <div className={styles.header}>

          <Nav dictionary={dictionary} lang={lang} path="/contact" />

          <div className={styles.hero + ' slide-in-bottom'}>
            <h1>{header['title']}</h1>
            <p className={styles.asterisc} aria-hidden='true'>*</p>
          </div>

        </div>

        <div className={styles.formSection + ' staggered-slide-in-bottom'}>

          <div className={styles.left}>
            <h3>{formSection['title']}</h3>
            <p>{formSection['paragraph']}</p>
          </div>

          <div className={styles.right}>
            <EmailForm lang={lang} dictionary={formSection['form']} />
          </div>

        </div>

        <div className={styles.wannaJoinSection + ' staggered-slide-in-bottom'}>

          <div className={styles.left}>
            <h3 className={styles.gradientText}>{wannaJoinSection['title']}</h3>
            <p className={styles.paragraph}>{wannaJoinSection['paragraph']}</p>

            <Button
              text={wannaJoinSection["button"]}
              href="/[lang]/join-us"
              as={getTranslatedPathname(lang, 'join-us')}
            />
          </div>
        </div>

        <Footer lang={lang} bottomOnly transparent />

        <div className={styles.bgContainer} />
      </div>
    </AnimationWrapper>
  );
}