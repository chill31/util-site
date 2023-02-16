import Head from "next/head";
import styles from "../../styles/docs/global.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import CopyButtonPlugin from '../../scripts/hljsCopy'

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
        <title>Docs: removeDuplicates</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>removeDuplicates()</code></h1>

        <p className={styles.description}>removes all duplicates from the given string</p>

        <pre><code className="js">
          {`const { removeDuplicates } = require("utility-text");
const myText = "this this this is is is is a very normal sentence.";

const changed = removeDuplicates(myText, false); // if false, converts the text to lowercase, then checks for duplicates.
console.log(changed);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>strict <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether the text should be converted to lowercase or not before checking for duplicates. By default true.</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>text without duplicates</span></li>
        </ul>

      </main>
    </div>
  );
}
