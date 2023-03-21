import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CopyButtonPlugin from "../scripts/hljsCopy";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    hljs.highlightAll();

    hljs.addPlugin(new CopyButtonPlugin());

  });

  return (
    <div className={styles.container}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Head>
        <title>NPM: utility-text</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>

        <header className={styles.header}>
          <h1 className={styles.title}>utility-text</h1>
          <p className={styles.brief}>Never have problems working with text again using functions such as <Link className={styles.fnLink} href="/docs/truncate">truncating text</Link>, <Link className={styles.fnLink} href="/docs/escape">escaping text</Link>, and many more.</p>
        </header>

        <Link className={styles.startBtn} href="/installation">Get Started</Link>

      </main>
    </div>
  );
}
