import Image from 'next/image';
import styles from './footer.module.scss';
import HACLogo from '../../../public/HAC-fist-black.svg';

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Image
          src={HACLogo}
          alt="HAC logo"
          fill
          className={styles.image}
        />
      </div>

      <p className={styles.text}>Links a FACTTIC? Coopes? Powered by?</p>
    </footer>
  )
}