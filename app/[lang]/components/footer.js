import Image from 'next/image';
import styles from './footer.module.scss';
import { getDictionary } from "../../../get-dictionary";
import Link from 'next/link';
import { spanishClassName } from '../../../utils/strings';
import { getTranslatedPathname } from '../../../utils/pathnames';

export default async function Footer({ lang, path, bottomOnly = false, transparent = false }) {
  const dictionary = await getDictionary(lang);
  const footer = dictionary["footer"];
  const nav = dictionary["nav"];

  const isJoinUs = path === '/join-us';

  const spanishClass = spanishClassName(lang, styles.spanish);

  return (
    <footer className={styles.footer + (transparent ? ` ${styles.transparent}` : '') }>
      { !bottomOnly &&
        <div className={styles.main}>
          <Link className={styles.action} href="/[lang]/contact" as={getTranslatedPathname(lang, 'contact')}>
            <div className={styles.arrowContainer}>
              <Image
                src='/arrow-right.svg'
                alt=''
                className={styles.arrowRight}
                fill
              />
            </div>
            <p className={spanishClass}>{footer['actionText']}</p>
          </Link>
        </div>
      }

      { !bottomOnly &&
        <div className={styles.mainMobile}>
          <Link className={styles.action} href="/[lang]/contact" as={getTranslatedPathname(lang, 'contact')}>
            <p>{footer['actionText']}</p>
            <div className={styles.arrowContainer}>
              <Image
                src='/arrow-right.svg'
                alt=''
                className={styles.arrowRight}
                fill
              />
            </div>
          </Link>
        </div>
      }

      <div className={styles.bottom}>
        <div className={styles.navItemContainer}>
          <Link href="/[lang]/join-us" as={getTranslatedPathname(lang, 'join-us')} className={styles.link + (isJoinUs ? ' ' + styles.active : '')}>
            {nav["joinUs"]}
          </Link>
          {isJoinUs && <div className={styles.underline} />}
        </div>

        <p className={styles.address}>
          Bariloche, Patagonia | Argentina
        </p>
        
        <div className={styles.media}>
          <Link href="https://www.facebook.com/animuscoop" target='_blank'>
            FB
          </Link>
          <Link href="https://twitter.com/animuscoop" target='_blank'>
            X
          </Link>
          <Link href="https://www.linkedin.com/company/animus-argentina/" target='_blank'>
            LINKEDIN
          </Link>
          <Link href="https://www.instagram.com/animuscoop/" target='_blank'>
            IG
          </Link>
        </div>
      </div>
    </footer>
  )
}