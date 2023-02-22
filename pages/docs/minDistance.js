import Head from "next/head";
import styles from "../../styles/docs/global.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

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
        <title>Docs: minDistance</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>minDistance()</code></h1>

        <p className={styles.description}>returns minimum number of changes required to convert one string to another</p>
        
        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagString}`}>String</span>
          <span className={`${styles.tag} ${styles.tagNumber}`}>Number</span>
        </div>

        <pre><code className="js">
          {`const { minDistance } = require("utility-text");
const myText = "this is some string";
const text2 = "this is another string"

const distance = minDistance(myText, text2);

console.log(distance);
// 5
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>comparison <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>the second string which you want to calculate the differences for</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;distance&gt;<span className={styles.invertCode}>Number</span> <br /><span className={styles.paramSub}>the minimum number of changes required to convert the first string to the second</span></li>
        </ul>

      </main>
    </div>
  );
}
