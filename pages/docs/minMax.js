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
        <title>Docs: minMax</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>minMax()</code></h1>

        <p className={styles.description}>returns the longest and shortest word of a sentence.</p>

        <pre><code className="js">
          {`const {minMax} = require("utility-text");
const myText = "this is just a normal string";

const changed = minMax(myText);
console.log(changed);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;longest&gt; <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the longest word in the string</span></li>
          <br />
          <li className={styles.parameter}>&lt;shortest&gt; <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the shortest word in the string</span></li>
        </ul>

      </main>
    </div>
  );
}
