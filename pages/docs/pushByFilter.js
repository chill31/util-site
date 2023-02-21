import Head from "next/head";
import styles from "../../styles/docs/global.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import CopyButtonPlugin from '../../scripts/hljsCopy'

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    hljs.highlightAll();
    
    hljs.addPlugin(new CopyButtonPlugin())
  }, []);

  return (
    <div className={styles.container}>

      <Head>
        <title>Docs: pushByFilter</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>pushByFilter()</code></h1>

        <p className={styles.description}>pushes data into an array by filtering</p>

        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagArray}`}>Array</span>
        </div>

        <pre><code className="js">
          {`const { pushByFilter } = require("utility-text");
const myArray = [1, 2, 3];
const filter = (n) => n > 4;

const pushed = pushByFilter(myArray, filter, 4, 5, 6);
console.log(pushed);
// [ 1, 2, 3, 5, 6 ]
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>array <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span></li>

          <br />

          <li className={styles.parameter}>filter <span className={styles.invertCode}>Function</span><br /><span className={styles.paramSub}>the values go through this filter before being pushed to the array</span></li>

          <br />

          <li className={styles.parameter}>...values <span className={styles.invertCode}>&lt;any&gt;</span><br /><span className={styles.paramSub}>all values after the filter parameter are added to the array</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;array&gt;<span className={styles.invertCode}>Array</span> <br /><span className={styles.paramSub}>the new changed array</span></li>
        </ul>

      </main>
    </div>
  );
}
