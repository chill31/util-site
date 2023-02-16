import c2Styles from '../styles/Component.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={c2Styles.footer}>
      <span className={c2Styles.footerMain}>

        Made by <Link href="https://github.com/chill31" className={c2Styles.footerLink}>Chill31</Link>
        <br />
        <br />
        <Link href="https://npmjs.com/package/utility-text" className={c2Styles.footerLink}>NPM package Link</Link>
        <br />
        <br />
        <Link href="/LICENSE" className={c2Styles.footerLink}>Website - MIT License</Link>
        <br />

      </span>
    </footer>
  );
}
