import Link from "next/link";
import styles from "../styles/Component.module.css";

import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";

export default function Menu() {
  
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(prev => !prev);
  }

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.mobileMenu}>
        <button className={styles.activator} onClick={handleMenu}>
          <BsList tabIndex="0" className={styles.icon}></BsList>
        </button>

        <div className={styles.mobileMenuContentWrapper} data-open={open ? 'true' : 'false'}>
          <div className={styles.properties}>
            <BsXLg className={styles.closeIcon} onClick={handleMenu}></BsXLg>
            <h1 className={styles.mobileMenuTitle}>utility-text</h1>
          </div>
          <span className={styles.divider}></span>

          <div className={styles.mobile_content}>
            <Link href="/">Home</Link>
            <Link href="/examples">Examples</Link>
            <Link href="/docs/main">Docs</Link>
            <Link href="/installation">Installation</Link>
            <Link href="/presets">Presets and Defaults</Link>
            <Link href="https://npmjs.com/package/utility-text">Package Link</Link>
          </div>
        </div>
      </div>

      <div className={styles.desktopMenu}>
        <div className={styles.desktopMenuStartContent}>
          <Link className={styles.startContentLink} href="/">
            Home
          </Link>
          <Link className={styles.startContentLink} href="/examples">
            Examples
          </Link>
          <Link className={styles.startContentLink} href="/docs/main">
            Docs
          </Link>
        </div>

        <div className={styles.desktopMenuEndContent}>
          <Link
            className={styles.packageLink}
            href="https://npmjs.com/package/utility-text"
          >
            Package Link
          </Link>
        </div>
      </div>
    </div>
  );
}
