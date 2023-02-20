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
        <title>Docs: truncate</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>truncate()</code></h1>

        <p className={styles.description}>cuts a string to a specific length and adds a ellipsis if specified</p>

        <pre><code className="js">
          {`const { truncate } = require("utility-text");
const myText = "this is a very long sentence and probably should be shortened down.";

const truncated = truncate({
  text: myText,
  maxLength: 15,
  ellipsis: {
    show: true,
    content: "....."
  }
});
console.log(truncated);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>maxLength <span className={styles.invertCode}>Number</span> <span className={styles.important}>*</span> <br /><span className={styles.paramSub}>the length till where you want to cut the string</span></li>
          <br />
          <li className={styles.parameter}>ellipsis <span className={styles.invertCode}>Object</span><br /><span className={styles.paramSub}>options for an ellipsis</span><br /><br />

            <ul className={styles.paramList}>
              <li className={styles.parameter}>show <span className={styles.invertCode}>Boolean</span> <br /><span className={styles.paramSub}>whether there should be an ending content after the string has been cut or not</span></li>
              <br />
              <li className={styles.parameter}>content <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the content which should be put after the end of the new string</span></li>
            </ul>

          </li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>&lt;text&gt; <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the new truncated string</span></li>
        </ul>

      </main>
    </div>
  );
}
