'use client';

import styles from './nav.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav({
  dictionary,
  lang = 'en',
  black = false,
  path = ''
}) {

  const mobileVisible = false;
  
  function toggleMenu() {
    document.getElementById('mobile-nav').classList.toggle(styles.visible);
  }

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
            <Link href="#about" className={styles.link}>
              {dictionary?.['nav']?.["aboutHaC"]}
            </Link>
          </div>

          <div className={styles.navItemContainer}>
            <Link href="#services" className={styles.link}>
              {dictionary?.['nav']?.["services"]}
            </Link>
          </div>

          <div className={styles.navItemContainer}>
            <Link href="#contact" className={styles.link}>
              {dictionary?.['nav']?.["contact"]}
            </Link>
          </div>

          <div className={styles.lang}>
            <Link href={"/en" + path} className={lang === 'en' ? ' ' + styles.active : ''}>EN</Link>
            |
            <Link href={"/es"} className={lang === 'es' ? ' ' + styles.active : ''}>ES</Link>
            |
            <Link href={"/pt"} className={lang === 'pt' ? ' ' + styles.active : ''}>PT</Link>
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
        <Link href="#about" className={styles.link}>
          {dictionary?.['nav']?.["aboutHaC"]}
        </Link>

        <Link href="#services" className={styles.link}>
          {dictionary?.['nav']?.["services"]}
        </Link>

        <Link href="#contact" className={styles.link}>
          {dictionary?.['nav']?.["contact"]}
        </Link>

        {/* <div className={styles.link + (black ? ` ${styles.black}` : '')}>
          <Link href={lang === "es" ? ("/en" + path) : getTranslatedPathname('es', path.split('/')[1] ?? '')}>
            <Image alt='Language symbol' src={`/lang-${black ? 'black' : 'white'}.svg`} width={12} height={12} />
            {lang === "es" ? "ENG" : "ESP"}
          </Link>
        </div> */}
      </div>
      
    </div>
  );
}