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
        <title>Docs: fromBinaryToString</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={`${styles.headCode_L} ${styles.headCode_XL}`}>fromBinaryToString()</code></h1>

        <p className={styles.description}>reverts binary code back into normal text.</p>

        <pre><code className="js">
          {`const { fromBinaryToString } = require("utility-text");
const binaryText = "01110100011010000110100101110011001000000110100101110011001000000110000100100000011100110111010001110010011010010110111001100111";

const normal = fromBinaryToString(binaryText);
console.log(normal);
// this is a string
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>binary <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt; <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>normal text</span></li>
        </ul>

      </main>
    </div>
  );
}
