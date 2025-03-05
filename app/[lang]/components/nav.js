'use client';

import styles from './nav.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav({
  dictionary,
  lang = 'en',
}) {
  const mobileVisible = false;
  
  function toggleMenu() {
    document.getElementById('mobile-nav').classList.toggle(styles.visible);
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.logoWrapper}>
          <Image
            src="/HACBlack.svg"
            alt="HAC Logo"
            className={styles.logo}
            fill
            priority
          />
        </div>

        <div className={styles.nav}>

        <div className={styles.navItemContainer}>
            <Link href="#services" className={styles.link}>
              {dictionary?.['nav']?.["services"]}
            </Link>
          </div>

          <div className={styles.navItemContainer}>
            <Link href="#about" className={styles.link}>
              {dictionary?.['nav']?.["aboutHaC"]}
            </Link>
          </div>

          <div className={styles.navItemContainer}>
            <Link href="#contact" className={styles.link}>
              {dictionary?.['nav']?.["contact"]}
            </Link>
          </div>

          <div className={styles.lang}>
            <Link href={"/es"} className={lang === 'es' ? ' ' + styles.active : ''}>ES</Link>
            /
            <Link href={"/en"} className={lang === 'en' ? ' ' + styles.active : ''}>EN</Link>
            /
            <Link href={"/pt"} className={lang === 'pt' ? ' ' + styles.active : ''}>PT</Link>
          </div>

        </div>

        <Image
          src={`/burger-menu-black.svg`}
          alt='Burger menu'
          className={styles.burgerMenu}
          width={32}
          height={32}
          onClick={toggleMenu}
          priority
        />
      </div>

      <div id='mobile-nav' className={styles.mobileNav + (mobileVisible ? ` ${styles.visible}` : '')}>
        <Link href="#about" className={styles.link}>
          {dictionary?.['nav']?.["aboutHaC"]}
        </Link>

        <Link href="#services" className={styles.link}>
          {dictionary?.['nav']?.["services"]}
        </Link>

        <Link href="#contact" className={styles.link}>
          {dictionary?.['nav']?.["contact"]}
        </Link>

        <div className={styles.link + ' ' + styles.langsContainer}>
          <Image alt='Language symbol' src={`/lang-black.svg`} width={13} height={13} />

          {lang !== "es" && (
            <Link href={"/es"}>
              ES
            </Link>
          )}
          {lang !== "en" && (
            <Link href={"/en"}>
              EN
            </Link>
          )}
          {lang !== "pt" && (
            <Link href={"/pt"}>
              PT
            </Link>
          )}
        </div>
      </div>
      
    </div>
  );
}