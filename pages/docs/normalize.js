import Head from "next/head";
import styles from "../../styles/docs/global.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

import CopyButtonPlugin from "../../scripts/hljsCopy";
import Link from 'next/link'

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
        <title>Docs: normalize</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>normalize()</code></h1>

        <p className={styles.description}>removes all symbols and capitalizes the first word of the given string. You can also provide your own symbols to remove</p>

        <pre><code className="js">
          {`const { normalize } = require("utility-text");
const myText = "this is a VERY wEiRD sentence";

const changed = normalize(myText, ["×", "÷"]); // also removes multiply and divide symbol if there are any
console.log(changed);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>customSymbols <span className={styles.invertCode}>Array</span><br /><span className={styles.paramSub}>a list of symbols to remove while normalizing the text. There is already a <Link className={styles.link} href="/presets/">preset list</Link></span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the normalized text</span></li>
        </ul>

      </main>
    </div>
  );
}
