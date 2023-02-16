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
        <title>Docs: formatNumber</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode_L}>formatNumber()</code></h1>

        <p className={styles.description}>formats a number according to specified/default locale</p>

        <pre><code className="js">
          {`const { formatNumber } = require("utility-text");
const myNum = 100900300;

const formatted = formatNumber(myNum);
console.log(formatted);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>number <span className={styles.invertCode}>Number</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>locale <span className={styles.invertCode}>Locale String</span><br /> <span className={styles.paramSub}>specifies a locale if you want a custom one. The default is the system locale.</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;number&gt;<span className={styles.invertCode}>String&lt;LocaleString&gt;</span> <br /><span className={styles.paramSub}>locally formatted number</span></li>
        </ul>

      </main>
    </div>
  );
}
