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
        <h1 className={styles.title}><code className={styles.headCode_L}>extractEmail()</code></h1>

        <p className={styles.description}>gets the emails out of a string and returns them with the extracted mails.</p>

        <pre><code className="js">
          {`const {extractEmail} = require("utility-text");
const myText = "this is a string with a some_example_mail@domain.com mail";

const extracted = extractEmail({
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
          <li className={styles.parameter}>wrap <span className={styles.invertCode}>Array [2 items]</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>specifies the two wraps around all the mails.<br />If you do not want a wrap, leave the 2 items empty <code className={styles.invertCode}>["", ""]</code></span></li>

        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the same text but wrapped with the given wrap parameters</span></li>
          <br />
          <li className={styles.parameter}>&lt;mails&gt;<span className={styles.invertCode}>Array</span> <br /><span className={styles.paramSub}>the extracted mails list</span></li>
        </ul>

      </main>
    </div>
  );
}
