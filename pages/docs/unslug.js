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
        <title>Docs: unslug</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>unslug()</code></h1>

        <p className={styles.description}>converts text from URL friendly strings to readable strings</p>

        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagString}`}>String</span>
        </div>

        <pre><code className="js">
          {`const { unslug } = require("utility-text");
const myText = "https://example.com/examplefile?search=query%20not%20url%20friendly"; // using slug() function

const changed = unslug(myText);
console.log(changed);
// https://example.com/examplefile?search=query not url friendly
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>readable text</span></li>
        </ul>

      </main>
    </div>
  );
}
