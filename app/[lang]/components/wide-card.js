import Image from 'next/image';
import styles from './wide-card.module.scss';

export default function WideCard({ index, text, image, alt = '', reverse = false }) {
  return (
      <div className={styles.container} key={index}>

        { !reverse &&
          <div className={styles.textContainer + ' slide-in-bottom'}>
            <p>{text}</p>
          </div>
        }

        <div className={styles.imageContainer + ' slide-in-bottom'}>
          <Image
            src={image}
            alt={alt}
            fill
            placeholder='blur'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>

        { reverse &&
          <div className={styles.textContainer + ' slide-in-bottom'}>
            <p>{text}</p>
          </div>
        }
      </div>
  );
};