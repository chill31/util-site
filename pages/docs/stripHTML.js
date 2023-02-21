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
        <title>Docs: stripHTML</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>stripHTML()</code></h1>

        <p className={styles.description}>removes all html tags and attributes from a string</p>

        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagString}`}>String</span>
        </div>

        <pre><code className="js">
          {`const { stripHTML } = require("utility-text");
const myText = "<div>this is normal html content with a <a href='#'>link</a></div>";

const changed = stripHTML(myText);
console.log(changed);
// this is normal html content with a link
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt; <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the modified text</span></li>
        </ul>

      </main>
    </div>
  );
}
