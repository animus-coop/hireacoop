import Image from 'next/image';
import styles from './hire-card.module.scss';

export default function HireCard({ image, alt = '', title }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt=""
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
