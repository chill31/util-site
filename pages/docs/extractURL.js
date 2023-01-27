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
        <h1 className={styles.title}><code className={styles.headCode_L}>extractURL()</code></h1>

        <p className={styles.description}>gets the urls out of a string and returns them with the extracted urls.</p>

        <pre><code className="js">
          {`const {extracURL} = require("utility-text");
const myText = "this is a string with a https://example.com/ url";

const extracted = extractURL({
  text: myText,
  wrap: ["<", ">"]
});

console.log(extracted);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>wrap <span className={styles.invertCode}>Array [2 items]</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>specifies the two wraps around all the urls.<br />If you do not want a wrap, leave the 2 items empty <code className={styles.invertCode}>[&quot;&quot;, &quot;&quot;]</code></span></li>

        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the same text, wrapped with the given wrap parameters</span></li>
          <br />
          <li className={styles.parameter}>&lt;urls&gt;<span className={styles.invertCode}>Array</span> <br /><span className={styles.paramSub}>the extracted urls&apos; list</span></li>
        </ul>

      </main>
    </div>
  );
}
