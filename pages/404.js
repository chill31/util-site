import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'
import { BsHouse } from 'react-icons/bs'

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    document.querySelector(".argument-one").textContent = `--${window.location.pathname.replace("/", "")}`;
  });

  return (

    <div className={styles.container}>

      <Head>
        <title>utility-text: 404 Not Found</title>
      </Head>

      <div className={styles.main}>

        <h1 className={styles.title}>404</h1>
        <span className={styles.sub}>Invalid page.</span>

        <code className={styles.runCode}>
          <code className={styles.actualCode}>
            <span className={styles.code}>&gt;&gt;&gt; <span className={styles.function}>npm</span> <span className={styles.token}>run</span> <span className={styles.parameter}>page-load</span> <span className={`${styles.argument} argument-one`}></span><br /><br /><span className={styles.function}>npm</span> <span className={styles.error}>ERR!</span> page not found</span>
          </code>
        </code>

        <Link href="/" className={styles.homeLink}>
          <BsHouse></BsHouse>
          Back To Home</Link>

      </div>
    </div>
  )
}
