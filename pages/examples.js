import Head from "next/head";
import styles from "../styles/Examples.module.css";

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
        <h1 className={styles.title}>Examples</h1>

        <p className={styles.description}>
          utility-text is a text-based utility package with many functions which
          javascript does not provide by default. It can help with text
          manipulation, replacement and many more functions.<br />Here you can check examples of how you can use the functions available explaining each use case as you scroll down.
        </p>

        <div className={styles.flex}>
          <p className={styles.description}>examples are yet to be added.</p>
        </div>
      </main>
    </div>
  );
}
