'use client';
import { useState } from "react";
import styles from './accordion.module.scss';

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggle}>
        <h4>{title}</h4>
        <p alt="Show more" className={styles.button + (isOpen ? ' ' + styles.bigger : '')}>{isOpen ? "-" : "+"}</p>
      </div>
      <div className={styles.content + (isOpen ? ' ' + styles.visible : '')}>
        <p>{content}</p>
      </div>
    </div>
  );
}