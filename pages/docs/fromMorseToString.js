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
        <title>Docs: fromMorseToString</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={`${styles.headCode_L} ${styles.headCode_XL}`}>fromMorseToString()</code></h1>

        <p className={styles.description}>reverts morse code back into normal text.</p>

        <pre><code className="js">
          {`const { fromMorseToString } = require("utility-text");
const morseText = "- .... .. ...   .. ...   .-   ... - .-. .. -. --.";

const normal = fromMorseToString(morseText);
console.log(normal);
// this is a string
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>morse <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt; <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>normal text</span></li>
        </ul>

      </main>
    </div>
  );
}
