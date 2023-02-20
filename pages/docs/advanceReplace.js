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
        <title>Docs: advanceReplace</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>advanceReplace()</code></h1>

        <p className={styles.description}>replaces a specific number of occurences of provided set of characters with a given replacement</p>

        <pre><code className="js">
          {`const { advanceReplace } = require("utility-text");
const myText = "this is a string with a lot of spaces in between the words";

const changed = advanceReplace({
  text: myText,
  countIndex: 4,
  replacementText: " ",
  replacement: "_",
  skip: 3,
});

console.log(changed);
// this is a string_with_a_lot_of spaces in between the words
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>countIndex <span className={styles.invertCode}>Number</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>specifies the number of occurences to replace</span></li>
          <br />
          <li className={styles.parameter}>replacementText <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>specifies the text to replace</span></li>
          <br />
          <li className={styles.parameter}>replacement <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>specifies the text to replace the occurence with</span></li>
          <br />
          <li className={styles.parameter}>skip <span className={styles.invertCode}>Number</span><br /><span className={styles.paramSub}>specifies the number of occurences to skip from the start before starting the replacing operation</span></li>

        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the replaced text</span></li>
        </ul>

      </main>
    </div>
  );
}
