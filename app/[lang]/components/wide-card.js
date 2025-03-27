import Image from 'next/image';
import styles from './wide-card.module.scss';

export default function WideCard({ index, text, image, alt = '', reverse = false }) {
  return (
      <div className={styles.container} key={index}>

        { !reverse &&
          <div className={styles.textContainer}>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        }

        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={alt}
            fill
            placeholder='blur'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>

        { reverse &&
          <div className={styles.textContainer}>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        }
      </div>
  );
};