import Head from "next/head";
import styles from "../../styles/docs/global.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import CopyButtonPlugin from "../../scripts/hljsCopy";

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
        <title>Docs: rangeShrink</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>rangeShrink()</code></h1>

        <p className={styles.description}>shrinks an array to a specified range. deletes all values if they are not in the specified range</p>

        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagArray}`}>Array</span>
        </div>

        <pre><code className="js">
          {`const { rangeShrink } = require("utility-text");
const myList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shrinked = rangeShrink(myList, [2, 7]) // shrinks the array from the 2nd index to the 7th index.
console.log(shrinked);
// [ 2, 3, 4, 5, 6, 7 ]
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>array <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>range <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span> <br /><span className={styles.paramSub}>the start and stop index of the range you want to shrink the array to. Both the range indexes are included in the modified array</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;array&gt; <span className={styles.invertCode}>Array</span> <br /><span className={styles.paramSub}>the modified array</span></li>
        </ul>

      </main>
    </div>
  );
}
