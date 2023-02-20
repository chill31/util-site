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
        <title>Docs: insertAt</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>insertAt()</code></h1>

        <p className={styles.description}>inserts a string into the given index in the provided text.</p>

        <pre><code className="js">
          {`const { insertAt } = require("utility-text");
const myText = "abcef"; // notice the 'd' is missing.

const changed = insertAt({
  text: myText,
  before: false,
  index: 2,
  insertionText: "d"  
});

console.log(changed);
// abcdef
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>before <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether the insertion should be done before the index or after the index</span></li>
          <br />
          <li className={styles.parameter}>index <span className={styles.invertCode}>Number</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>the string&apos;s index where the operation should be done</span></li>
          <br />
          <li className={styles.parameter}>insertionText <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>the text you want to insert</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the text but with the new inserted text</span></li>
          <br />
        </ul>

      </main>
    </div>
  );
}
