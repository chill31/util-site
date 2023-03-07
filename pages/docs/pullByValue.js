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
        <title>Docs: pullByValue</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>pullByValue()</code></h1>

        <p className={styles.description}>pulls multiple values from array</p>

        <pre><code className="js">
          {`const { pullByValue } = require("utility-text");
const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pulled = pullByValue(myList, 1, 2, 3);
console.log(pulled);
// [ 4, 5, 6, 7, 8, 9, 10 ]
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>array <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>...values <span className={styles.invertCode}>&lt;array values&gt;</span> <span className={styles.important}>*</span> <br /><span className={styles.paramSub}>the values you want to pull from the array</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;array&gt; <span className={styles.invertCode}>Array</span> <br /><span className={styles.paramSub}>the modified array</span></li>
        </ul>

      </main>
    </div>
  );
}
