import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'
import { BsClipboard, BsHouse } from 'react-icons/bs'

import { useEffect } from "react";

export default function Home() {

  var loc;

  useEffect(() => {
    loc = window.location.pathname;
    document.querySelector(".argument-one").textContent = `--${loc.replace("/", "")}`;
  });

  return (

    <div className={styles.container}>

      <Head>
        <title>utility-text: 404</title>
      </Head>

      <div className={styles.main}>

        <h1 className={styles.title}>404</h1>
        <span className={styles.sub}>Invalid page.</span>

        <code className={styles.runCode}>
          <code className={styles.actualCode}>
            <span className={styles.code}>&gt;&gt;&gt; <span className={styles.function}>npm</span> <span className={styles.token}>run</span> <span className={styles.parameter}>page-load</span> <span className={`${styles.argument} argument-one`}>--{`${loc}`}</span><br /><br /><span className={styles.function}>npm</span> <span className={styles.error}>ERROR</span> page not found</span>
          </code>
        </code>

        <Link href="/" className={styles.homeLink}>
          <BsHouse></BsHouse>
          Back To Home</Link>

      </div>
    </div>
  )
}
