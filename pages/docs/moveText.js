import Head from "next/head";
import styles from "../../styles/docs/global.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className={styles.container}>

      <Head>
        <title>NPM: utility-text</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>moveText()</code></h1>

        <p className={styles.description}>moves the first occurence of a given part of a string to the given index.</p>

        <pre><code className="js">
          {`const {moveText} = require("utility-text");
const myText = "this is an example string";

const moved = moveText({
  text: myText,
  moveText: "this",
  moveIndex: 26,
});
console.log(moved);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>moveText <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span> <br /><span className={styles.paramSub}>the part of text you want to move</span></li>
          <br />
          <li className={styles.parameter}>moveIndex <span className={styles.invertCode}>Number</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>the index where you want to move the text. Should be a valid index in the given <code className={styles.codeScope}>text</code> parameter</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt; <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the same text, but with the move text&apos;s position changed.</span></li>
        </ul>

      </main>
    </div>
  );
}
