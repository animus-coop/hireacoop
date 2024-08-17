import Image from "next/image";
import styles from "./financiers.module.scss";

export default function FinanciersBadge({ name, image, alt = "", key }) {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.image}
        />
      </div>

      <p className={styles.text}>{name}</p>
    </div>
  );
}