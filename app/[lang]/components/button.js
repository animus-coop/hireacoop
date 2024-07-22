'use client';

import Link from 'next/link';
import styles from './button.module.scss';
import Image from 'next/image';

export default function Button({ text, href = '', as = '', loading, loadingText, disabled, blackBorder, submitForm }) {  

  if (submitForm) {
    return (
      <button 
        type="submit"
        className={styles.button + (blackBorder ? ` ${styles.blackBorder}` : '')}
        disabled={disabled}
      >
        {loading ? <p>{loadingText}</p> :
          <>
            <p>{text}</p>
            <div className={styles.arrowContainer}>
              <Image src="/btn-arrow-hover.png" alt="" fill sizes="(max-width: 768px) 10vw, 5vw" />
            </div>
          </>
        }
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
        {loading ? <p>{loadingText}</p> :
          <>
            <p>{text}</p>
            <div className={styles.arrowContainer}>
              <Image src="/btn-arrow-hover.png" alt="" fill sizes="(max-width: 768px) 10vw, 5vw" />
            </div>
          </>
        }
      </Link>
    );
  }
}