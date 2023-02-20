import Head from "next/head";
import styles from "../../../styles/docs/global.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import CopyButtonPlugin from "../../../scripts/hljsCopy";

hljs.registerLanguage("javascript", javascript);

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {

  useEffect(() => {
    hljs.highlightAll();

    hljs.addPlugin(new CopyButtonPlugin())
  }, []);

  return (
    <div className={styles.container}>

      <Head>
        <title>Docs: PasswordUtil</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>PasswordUtil</code></h1>

        <p className={styles.description}>provides a few password related functions</p>

        <pre><code className="js">
          {`const { PasswordUtil } = require("utility-text");
const util = new PasswordUtil();`}
        </code></pre>

        <h2 className={styles.subTitle}>Methods</h2>

        <ul className={styles.paramList}>

          <li className={styles.parameter}>
            <Link href="/docs/constructors/PasswordUtil/generatePassword" className={styles.refLink}>generatePassword()</Link>
          </li>
          <br />
          <li className={styles.parameter}>
            <Link href="/docs/constructors/PasswordUtil/checkPassword" className={styles.refLink}>checkPassword()</Link>
          </li>
          <br />
          <li className={styles.parameter}>
            <Link href="/docs/constructors/PasswordUtil/hashPassword" className={styles.refLink}>hashPassword()</Link>
          </li>
          <br />
          <li className={styles.parameter}>
            <Link href="/docs/constructors/PasswordUtil/generateSalt" className={styles.refLink}>generateSalt()</Link>
          </li>

        </ul>

        <h2 className={styles.subTitle}>Variables</h2>
        <ul className={styles.paramList}>
          <li className={styles.parameter}>algorithm<span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the algorithm through which the functions hash or generate a salt</span><br /><code className={styles.codeScope}>{`util.algorithm = 'sha512' // just for example`}</code></li>
        </ul>

      </main>
    </div>
  );
}
