import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'
import { BsHouse } from 'react-icons/bs'

import CopyButtonPlugin from '../scripts/hljsCopy'

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    hljs.highlightAll();
    
    hljs.addPlugin(new CopyButtonPlugin())
  }, []);

  return (

    <div className={styles.container}>

      <Head>
        <title>utility-text: 404</title>
      </Head>

      <div className={styles.main}>

        <h1 className={styles.title}>404</h1>
        <span className={styles.sub}>Invalid page.</span>

        <pre className={styles.pre}><code className="js">
{`> npm run page-load
critical error. Page not found
`}
        </code></pre>

        <Link href="/" className={styles.homeLink}>
          <BsHouse></BsHouse>
          Back To Home</Link>

      </div>
    </div>
  )
}
