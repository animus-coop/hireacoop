'use client';

import Link from 'next/link';
import styles from './news-card.module.scss';
import Image from 'next/image';

import AsteriscIcon from '../../../public/icons/asterisc.png';
import StarIcon from '../../../public/icons/star.png';
import SunIcon from '../../../public/icons/sun.png';
import BarsIcon from '../../../public/icons/bars.png';
import DotsIcon from '../../../public/icons/dots.png';
import TriangleIcon from '../../../public/icons/triangle.png';

export default function NewsCard({
  index,
  title,
  category,
  text,
  url,
  dictionary,
  lang,
}) {

  const props = [
    { icon: AsteriscIcon, greyBackground: false, blackBorder: false, coloredTitle: true },
    { icon: StarIcon, greyBackground: true, blackBorder: false, coloredTitle: false },
    { icon: SunIcon, greyBackground: false, blackBorder: true, coloredTitle: false },
    { icon: BarsIcon, greyBackground: false, blackBorder: false, coloredTitle: true },
    { icon: DotsIcon, greyBackground: true, blackBorder: false, coloredTitle: false },
    { icon: TriangleIcon, greyBackground: false, blackBorder: true, coloredTitle: false },
  ][index % 6];

  return (
    <div className={styles.container + (props.greyBackground ? ` ${styles.greyBackground}` : '') + (props.blackBorder ? ` ${styles.blackBorder}` : '') + (props.coloredTitle ? ` ${styles.coloredTitle}` : '') }>
      <div className={styles.categoryContainer}>
        <Image src='/black-line.svg' alt='' height={10} width={25} />
        <h6 className={styles.category}>
          {category[lang]}
        </h6>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title} alt={title}>
            {title[lang]}
          </h3>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text/* + ' ' + textLinesClass*/} alt={text}>
            {text[lang]}
          </p>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.iconContainer}>
          <Image src={props.icon} alt='' fill sizes="(max-width: 768px) 70vw, 30vw" />
        </div>
        <Link href={url} className={styles.link} target='_blank'>{`[${dictionary['buttonText']}]`}</Link>
      </div>
    </div>
  );
}