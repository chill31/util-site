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
        <title>Docs: generatePassword</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={` ${styles.headCode_L} ${styles.headCode_XL}`}>generatePassword()</code></h1>

        <p className={styles.description}>generates a customized password according to your needs</p>

        <pre><code className="js">
          {`const { PasswordUtil } = require("utility-text");
const util = new PasswordUtil();

const password = util.generatePassword({
  length: 16,
  // all the other values are set to true by default

  includeNumbers: false,
  includeUpper: true,
  includeLower: true,
  includeSymbols: true
});

console.log(password);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>length <span className={styles.invertCode}>Number</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>includeNumbers <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether to include numbers in the password or not</span></li>
          <br />
          <li className={styles.parameter}>includeSymbols <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether to include symbols in the password or not</span></li>
          <br />
          <li className={styles.parameter}>includeUpper <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether to include uppercase characters in the password or not</span></li>
          <br />
          <li className={styles.parameter}>includeLower <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether to include lowercase characters in the password or not</span></li>

        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt;<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the generated password</span></li>
        </ul>

      </main>
    </div>
  );
}
