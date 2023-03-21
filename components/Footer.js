import styles from '../styles/Component.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footerMain}>

        Made by <Link href="https://github.com/chill31" className={styles.footerLink}>Chill31</Link>
        <br />
        <br />
        <Link href="https://npmjs.com/package/utility-text" className={styles.footerLink}>NPM package Link</Link>
        <br />
        <br />
        <Link href="/LICENSE" className={styles.footerLink}>Website - MIT License</Link>
        <br />

      </span>
    </footer>
  );
}
