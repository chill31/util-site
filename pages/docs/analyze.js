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
        <title>NPM: utility-text</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>analyze()</code></h1>

        <p className={styles.description}>returns occurence of provided text / characters</p>

        <pre><code className="js">
          {`const {analyze} = require("utility-text");
const myText = "this is a string";

const analyzed = analyze({
  text: myText,
  charSet: "I",
  strict: false // optional [this checks for both small i and capital I's]
});
console.log(analyzed);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>charSet <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span> <br /> <span className={styles.paramSub}>the set of characters you want the count of.</span></li>
          <br />
          <li className={styles.parameter}>strict <span className={styles.invertCode}>Boolean</span> <br /><span className={styles.paramSub}>specifies whether the checking should be strict or not (if false, converts text to lowercase and then checks)</span></li>

        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;number&gt;<span className={styles.invertCode}>Number</span> <br /><span className={styles.paramSub}>the count of the occurence of the given text</span></li>
        </ul>

      </main>
    </div>
  );
}
