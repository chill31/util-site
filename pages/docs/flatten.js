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
        <title>Docs: flatten</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>flatten()</code></h1>

        <p className={styles.description}>removes all child arrays from the main array</p>

        <pre><code className="js">
          {`const { flatten } = require("utility-text");
const myMultiArray = [
  [1,2,3],
  [4,5,6],
  [7,8, [9]]
];

const flattened = flatten(myMultiArray);
console.log(flattened);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>array <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;array&gt;<span className={styles.invertCode}>Array</span> <br /><span className={styles.paramSub}>the flattened array</span></li>
        </ul>

      </main>
    </div>
  );
}
