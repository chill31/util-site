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
        <title>Docs: toBinary</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>toBinary()</code></h1>

        <p className={styles.description}>converts a string into binary.</p>

        <pre><code className="js">
          {`const { toBinary } = require("utility-text");
const myText = "this is a string";

const changed = toBinary(myText);
console.log(changed);
// 01110100011010000110100101110011001000000110100101110011001000000110000100100000011100110111010001110010011010010110111001100111
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;binary&gt; <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>converted binary code</span></li>
        </ul>

      </main>
    </div>
  );
}
