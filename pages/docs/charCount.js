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
        <title>Docs: charCount</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>charCount()</code></h1>

        <p className={styles.description}>returns the character count with spaces, without spaces, and leaves out the given exceptions.</p>

        <pre><code className="js">
          {`const { charCount } = require("utility-text");
const myText = "this is a sentence";

const changed = charCount(myText, ["s", "t"]);

console.log(changed);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>exceptions <span className={styles.invertCode}>Array</span><br /><span className={styles.paramSub}>specifies the characters to leave out while counting</span></li>

        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>charCount<span className={styles.invertCode}>Number</span> <br /><span className={styles.paramSub}>simply the text&apos;s length but removing the exceptions</span></li>
          <br />
          <li className={styles.parameter}>wordCount<span className={styles.invertCode}>Number</span> <br /><span className={styles.paramSub}>the number of words in the sentence</span></li>
          <br />
          <li className={styles.parameter}>noSpacesCount<span className={styles.invertCode}>Number</span> <br /><span className={styles.paramSub}>removing the spaces and exceptions, the character count</span></li>
        </ul>

      </main>
    </div>
  );
}
