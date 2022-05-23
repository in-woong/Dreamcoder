import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  console.log('footer');
  return (
    <footer className={styles.footer}>
      <span className={styles.title}>code your dream</span>
    </footer>
  );
});

export default Footer;
