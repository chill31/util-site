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
        <title>Docs: insertToArray</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={`${styles.headCode_L} ${styles.headCode_XL}`}>insertToArray()</code></h1>

        <p className={styles.description}>inserts any value to a specified index in an array</p>

        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagArray}`}>Array</span>
        </div>

        <pre><code className="js">
          {`const { insertToArray } = require("utility-text");
const myList = [0, 1, 3, 4, 5]; // notice the '2' is missing.

const changed = insertToArray({
  array: myList,
  value: 2,
  index: 1,
  before: false
});

console.log(changed);
// [ 0, 1, 2, 3, 4, 5 ]
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>array <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>value <span className={styles.invertCode}>Any</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>the value you want to insert to the specified array</span></li>
          <br />
          <li className={styles.parameter}>index <span className={styles.invertCode}>Number</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>the index where you want to insert the value</span></li>
          <br />
          <li className={styles.parameter}>before <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether the insertion should be done before the index or after the index</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;array&gt;<span className={styles.invertCode}>Array</span> <br /><span className={styles.paramSub}>the array with the new inserted value</span></li>
          <br />
        </ul>

      </main>
    </div>
  );
}
