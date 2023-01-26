import c2Styles from '../styles/Component.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={c2Styles.footer}>
      <span className={c2Styles.footerMain}>

        Made by Chill31
        <br />
        <Link href="https://npmjs.com/package/utility-text" className={c2Styles.footerLink}>NPM package</Link>

      </span>
    </footer>
  );
}
