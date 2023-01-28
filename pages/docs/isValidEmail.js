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
        <h1 className={styles.title}><code className={styles.headCode}>isValidEmail()</code></h1>

        <p className={styles.description}>checks if the given text is a url or not.</p>

        <pre><code className="js">
          {`const {isValidEmail} = require("utility-text");
const myEmail = "Igotnomail@chill31.com";

const checked = isValidEmail(myEmail);
console.log(checked);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;check&gt; <span className={styles.invertCode}>Boolean</span> <br /><span className={styles.paramSub}>whether the given text is an email or not.</span></li>
        </ul>

      </main>
    </div>
  );
}
