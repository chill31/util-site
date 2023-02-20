import Head from "next/head";
import styles from "../../../../styles/docs/global.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import CopyButtonPlugin from "../../../../scripts/hljsCopy";

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
        <title>Docs: generateSalt</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>generateSalt()</code></h1>

        <p className={styles.description}>generates a random salt according to a specified length</p>

        <pre><code className="js">
          {`const { PasswordUtil, generateSalt } = require("utility-text");
const util = new PasswordUtil();

const salt = util.generateSalt(5);

console.log(salt);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>password <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;salt&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the randomly generated salt</span></li>
        </ul>

      </main>
    </div>
  );
}