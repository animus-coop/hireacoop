import Image from 'next/image';
import Link from 'next/link';

import styles from './footer.module.scss';

import HACLogo from '../../../public/HAC-fist-black.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';
import LinkedInIcon from '../../../public/icons/linkedin.svg';
import PlacehoderImg from '../../../public/placeholder.jpeg';
import AnimusLogo from '../../../public/Animus.png';
import ALTLogo from '../../../public/ALT.png';
import CodigoLibreLogo from '../../../public/CodigoLibre.svg';

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Image
          src={HACLogo}
          alt="HAC logo"
          className={styles.image}
          fill
          priority
        />
      </div>

      <div className={styles.socialMedia}>
        <Link href="https://www.instagram.com/hac_coop/" className={styles.item} target="_blank">
          <div className={styles.iconContainer}>
            <Image
              src={InstagramIcon}
              alt="Instagram"
              fill
            />
          </div>
          <p>Instagram</p>
        </Link>

        <Link href="https://www.instagram.com/hac_coop/" className={styles.item} target="_blank">
          <div className={styles.iconContainer}>
            <Image
              src={LinkedInIcon}
              alt="LinkedIn"
              fill
            />
          </div>
          <p>LinkedIn</p>
        </Link>
      </div>

      <div className={styles.poweredBy}>
        <p className={styles.text}>Powered by</p>

        <div className={styles.logosWrapper}>
          <Link href="https://animus.coop/" target='_blank'>
            <div className={styles.logoContainer}>
              <Image src={AnimusLogo} className={styles.logo} alt="Animus Logo" fill />
            </div>
          </Link>

          <Link href="https://altcooperativa.com/" target='_blank'>
            <div className={styles.logoContainer}>
              <Image src={ALTLogo} className={styles.logo} alt="ALT Logo" fill />
            </div>
          </Link>

          <Link href="https://codigolibre.coop.ar/" target='_blank'>
            <div className={styles.logoContainer}>
              <Image src={CodigoLibreLogo} className={styles.logo} alt="Codigo Libre Logo" fill />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}