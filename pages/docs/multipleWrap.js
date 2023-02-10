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
        <title>Docs: multipleWrap</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>multipleWrap()</code></h1>

        <p className={styles.description}>wraps multiple characters/texts with different provided wrappers.</p>

        <pre><code className="js">
          {`const {multipleWrap} = require("utility-text");
const myText = "aaaa bbbb cccc dddd";

const wrapped = multipleWrap({
  text: myText,
  charSet: ["a", "b", "c", "d"],
  wrapperSet: [["<", ">"], ["{", "}"], ["[", "]"], ["(", ")"]]
});

console.log(wrapped);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>charSet <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>specifies the different characters/strings to wrap</span></li>
          <br />
          <li className={styles.parameter}>wrapperSet <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>specifies the list of characters to wrap the given texts with.</span></li>

        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the same text, wrapped with the given wrap parameters</span></li>
        </ul>

      </main>
    </div>
  );
}
