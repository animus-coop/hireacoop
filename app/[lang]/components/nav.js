'use client';

import styles from './nav.module.scss';
import Link from 'next/link';
import Image from 'next/image';
// import logo from '../../../public/logo.svg';
import { useEffect } from 'react';
import gsap from 'gsap';
import { getTranslatedPathname } from '../../../utils/pathnames';

export default function Nav({
  dictionary,
  lang = 'en',
  black = false,
  path = ''
}) {
  useEffect(() => {
    const previousPath = localStorage.getItem('path');

    if (previousPath === path) {
      return;
    }

    const notFromNav = !previousPath || previousPath === '/' || previousPath === '/join-us';

    const order = ['/about-us', '/contact', '/news'];
    const previousIndex = order.indexOf(previousPath);
    const currentIndex = order.indexOf(path);

    const comesFromLeft = previousIndex < currentIndex;
    
    const underlines = document.getElementsByClassName(styles.underline);

    const fromObject = notFromNav ? { scaleX: 0 } : { translateX: comesFromLeft ? -100 : 100 };
    const toObject = notFromNav ? { scaleX: 1 } : { translateX: 0 };
    
    if (underlines.length > 0) {
      gsap.fromTo(underlines, fromObject, toObject);
    }
    
    localStorage.setItem('path', path);
  }, [path]);

  const mobileVisible = false;
  
  function toggleMenu() {
    document.getElementById('mobile-nav').classList.toggle(styles.visible);
  }

  const isAbout = path === '/about-us';
  const isContact = path === '/contact';
  const isNews = path === '/news';

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/[lang]" as={`/${lang}`}>
          <Image
            src="/HACBlack.svg"
            alt="HAC Logo"
            className={styles.logo + (black ? ' ' + styles.black : '')}
            width={100}
            height={60}
            priority
          />
        </Link>

        <div className={styles.nav + ' ' + (black ? styles.black : styles.white)}>
          <div className={styles.navItemContainer}>
            <Link href="/[lang]/about-us" as={getTranslatedPathname(lang, 'about-us')} className={styles.link + (isAbout ? ' ' + styles.active : '')}>
              {dictionary?.['nav']?.["about"]}
            </Link>
            {isAbout && <div className={styles.underline} />}
          </div>
          <div className={styles.navItemContainer}>
            <Link href="/[lang]/contact" as={getTranslatedPathname(lang, 'contact')} className={styles.link + (isContact ? ' ' + styles.active : '')}>
              {dictionary?.['nav']?.["contact"]}
            </Link>
            {isContact && <div className={styles.underline} />}
          </div>
          <div className={styles.navItemContainer}>
            <Link href="/[lang]/news" as={getTranslatedPathname(lang, 'news')} className={styles.link + (isNews ? ' ' + styles.active : '')}>
              {dictionary?.['nav']?.["news"]}
            </Link>
            {isNews && <div className={styles.underline} />}
          </div>

          <div className={styles.lang}>
            <Link href={"/en" + path} className={lang === 'en' ? ' ' + styles.active : ''}>ENG</Link>
            |
            <Link href={getTranslatedPathname('es', path.split('/')[1] ?? '')} className={lang === 'es' ? ' ' + styles.active : ''}>ESP</Link>
          </div>
        </div>

        <Image
          src={`/burger-menu-${black ? 'black' : 'white'}.svg`}
          alt='Burger menu'
          className={styles.burgerMenu}
          width={28}
          height={25}
          onClick={toggleMenu}
          priority
        />
      </div>

      <div id='mobile-nav' className={styles.mobileNav + ' ' + (black ? styles.black : styles.white) + (mobileVisible ? ` ${styles.visible}` : '')}>
        <Link href="/[lang]/about-us" as={getTranslatedPathname(lang, 'about-us')} className={styles.link + (isAbout ? ' ' + styles.active : '')}>
          {dictionary?.['nav']?.["about"]}
        </Link>
        <Link href="/[lang]/contact" as={getTranslatedPathname(lang, 'contact')} className={styles.link + (isContact ? ' ' + styles.active : '')}>
          {dictionary?.['nav']?.["contact"]}
        </Link>
        <Link href="/[lang]/news" as={getTranslatedPathname(lang, 'news')} className={styles.link + (isNews ? ' ' + styles.active : '')}>
          {dictionary?.['nav']?.["news"]}
        </Link>

        <div className={styles.link + (black ? ` ${styles.black}` : '')}>
          <Link href={lang === "es" ? ("/en" + path) : getTranslatedPathname('es', path.split('/')[1] ?? '')}>
            <Image alt='Language symbol' src={`/lang-${black ? 'black' : 'white'}.svg`} width={12} height={12} />
            {lang === "es" ? "ENG" : "ESP"}
          </Link>
        </div>
      </div>
      
    </div>
  );
}