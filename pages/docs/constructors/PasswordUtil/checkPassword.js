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
        <title>Docs: checkPassword</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>checkPassword()</code></h1>

        <p className={styles.description}>checks the strength of a password and shows it&apos;s weaknesses</p>

        <pre><code className="js">
          {`const { PasswordUtil, checkPassword } = require("utility-text");
const util = new PasswordUtil();

const weaknesses = util.checkPassword("someRandomPass123#@!");

console.log(weaknesses);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>password <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>

        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <legend className={styles.invertCodeLegend}>Array of Objects</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>message<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the analyzed weakness</span></li>

          <br />
          <br />

          <span className={styles.paramSub}>If there are no weaknesses, the function will just log {`"No Weaknesses"`}</span>
        </ul>
      </main>
    </div>
  );
}
