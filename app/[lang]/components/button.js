'use client';

import Link from 'next/link';
import styles from './button.module.scss';

export default function Button({ text, href = '', as = '', loading, loadingText, disabled, blackBorder, submitForm }) {  

  if (submitForm) {
    return (
      <button 
        type="submit"
        className={styles.button + (blackBorder ? ` ${styles.blackBorder}` : '')}
        disabled={disabled}
      >
        <p>{text}</p>
      </button>
    );
  } else {
    return (
      <Link 
        href={href}
        as={as}
        disabled={disabled}
        className={styles.button + (blackBorder ? ` ${styles.blackBorder}` : '')}
      >
        <p>{text}</p>
      </Link>
    );
  }
}