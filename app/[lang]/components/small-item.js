import Image from 'next/image';
import styles from './small-item.module.scss';

export default function SmallItem({ index, image, text, alt = '' }) {
  return (
      <div className={styles.container} key={index}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={alt}
            fill
            placeholder='blur'
            sizes='(max-width: 768px) 40vw, 20vw'
          />
        </div>

        <div className={styles.textContainer}>
          <p>{text}</p>
        </div>
      </div>
  );
};