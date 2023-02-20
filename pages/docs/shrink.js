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
        <title>Docs: shrink</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>shrink()</code></h1>

        <p className={styles.description}>shrinks an array to a specified length. deletes all values if they are not in the specified range</p>

        <pre><code className="js">
          {`const { shrink } = require("utility-text");
const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shrinked = shrink(myList, 5) // shrinks the array to the 5th index.
console.log(shrinked);
[ 1, 2, 3, 4, 5 ]
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>array <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>index <span className={styles.invertCode}>Number</span> <span className={styles.important}>*</span> <br /><span className={styles.paramSub}>the index till where you want to shrink the array.</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;array&gt; <span className={styles.invertCode}>Array</span> <br /><span className={styles.paramSub}>the modified array</span></li>
        </ul>

      </main>
    </div>
  );
}
