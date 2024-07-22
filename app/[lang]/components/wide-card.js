import Image from 'next/image';
import styles from './wide-card.module.scss';
import Link from 'next/link';

export default function WideCard({ index, title, text, image, alt = '', dictionary, black = false, link = null }) {
  return (
    <div className={styles.container + (black ? ` ${styles.black}` : '')}>
      <div className={styles.top + ' slide-in-bottom'}>
        <h3>{title}</h3>
        <p>{'0' + index}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.textContainer + ' slide-in-bottom'}>
          <p>{text}</p>

          {link && (
            <Link href={link}>
              <div className={styles.button}>
                <p>{dictionary?.['buttonText']}</p>
                <div className={styles.arrowContainer}>
                  <Image
                    src='/arrow-right.svg'
                    alt=''
                    fill
                    className={styles.arrow}
                  />
                </div>
              </div>
            </Link>
          )}
        </div>
        <div className={styles.imageContainer + ' slide-in-bottom'}>
          <Image
            src={image}
            alt={alt}
            fill
            placeholder='blur'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
      </div>
    </div>
  );
};