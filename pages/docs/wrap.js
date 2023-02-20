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
        <title>Docs: wrap</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>wrap()</code></h1>

        <p className={styles.description}>wraps certain characters with the provided set of wraps.</p>

        <pre><code className="js">
          {`const { wrap } = require("utility-text");
const myText = "this is a normal sentence";

const wrapped = wrap({
  text: myText,
  char: "t",
  wrapper: ["<", ">"]
});

console.log(wrapped);
// <t>his is a normal sen<t>ence
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>char <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>specifies the characters/text to be wrapped</span></li>
          <br />
          <li className={styles.parameter}>wrapper <span className={styles.invertCode}>Array [2 items]</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>specifies the wrap around the given character/text</span></li>

        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the same text, wrapped with the given wrap parameters</span></li>
          <br />
        </ul>

      </main>
    </div>
  );
}
