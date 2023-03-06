import Head from "next/head";
import styles from "../styles/web.module.css";

import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import CopyButtonPlugin from '../scripts/hljsCopy'

hljs.registerLanguage("xml", xml);

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    hljs.highlightAll();

    hljs.addPlugin(new CopyButtonPlugin())
  }, []);
  return (
    <div className={styles.container}>

      <Head>
        <title>Web Download - utility-text</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>Web Usage</h1>

        <div className={styles.linksWrapper}>
          <pre><code className="xml">
            {`<script src="https://cdn.jsdelivr.net/npm/utility-text/src/web/common.min.js"></script>`}
          </code></pre>
          <pre><code className="xml">
            {`<script type="module" src="https://cdn.jsdelivr.net/npm/utility-text/src/web/module.min.js"></script>`}
          </code></pre>
        </div>
      </main>

    </div>
  )
}