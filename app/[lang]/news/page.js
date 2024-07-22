import { getDictionary } from "../../../get-dictionary";
import styles from './page.module.scss';
import Nav from "../components/nav";

import Footer from "../components/footer";
import AnimationWrapper from "../components/animation-wrapper";
import Image from "next/image";
import NewsCard from "../components/news-card";

import BigStarImg from '../../../public/big-star.svg';
import { newsData } from "../../data/news";
import { spanishClassName } from "../../../utils/strings";

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const title = lang === 'es'
    ? 'Novedades'
    : 'News';

  return { title }
}

export default async function News({
  params: { lang }
}) {
  const dictionary = await getDictionary(lang);
  const newsDict = dictionary['news'];
  const headerDict = newsDict['header'];
  const cardDict = newsDict['card'];

  const spanishClass = spanishClassName(lang, styles.spanish);

  return (
    <AnimationWrapper>
      <div className={styles.main}>
        <div className={styles.header}>
          
          <Nav dictionary={dictionary} lang={lang} black path="/news" />

          <div className={styles.hero + ' slide-in-bottom'}>
            <h1 className={spanishClass}>
              {headerDict['title']}
            </h1>
            
            <div className={styles.starContainer}>
              <Image fill src={BigStarImg} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.content + ' staggered-slide-in-bottom'}>
          {newsData.map((news, i) => (
            <NewsCard
              key={i}
              index={i}
              title={news.title}
              category={news.category}
              text={news.text}
              url={news.url}
              lang={lang}
              dictionary={cardDict}
            />
          ))}
        </div>

        <Footer lang={lang} />
      </div>
    </AnimationWrapper>
  );
}