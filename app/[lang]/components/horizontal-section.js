import styles from './horizontal-section.module.scss';

export default async function HorizontalSecion({ title, children, white = false, containerClassNames = ''}) {
  return (
    <div className={styles.container + ' ' + containerClassNames + ' staggered-slide-in-bottom'}>
      <div className={styles.left}>
        <h3 className={white ? styles.white : ''}>{title}</h3>
      </div>
      <div className={styles.right}>
        {children}
      </div>
    </div>
  );
}