import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import { BsClipboard, BsFileEarmarkMedical } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <h1 className={styles.title}>Documentation</h1>

        <p className={styles.description}>
          <code
            className={styles.code}
            onClick={() => {
              toast.success('Copied installation code', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              navigator.clipboard.writeText("npm i utility-text");
            }}
          >
            npm i utility-text <BsClipboard></BsClipboard>
          </code>
        </p>

        <div className={styles.navFlex}>

          <Link className={styles.navLink} href="/examples">Examples</Link>
          <Link className={styles.navLink} href="/docs/main">API</Link>
          <Link className={styles.navLink} href="/help">Help</Link>

        </div>

        <span className={styles.divider}></span>
      </main>

      <section className={styles.section}>

        <h1 className={styles.title}>Usage</h1>
        <p className={styles.description}>This package can be used by both ES modules and CommonJS projects. </p>

        <h2 className={styles.subTitle}>CommonJS</h2>
        <pre><code className="js">
          {`const utils = require("utility-text");
/* --- OR --- */
const {functionName} = require("utility-text");

// start using the package
`}
        </code></pre>

        <h2 className={styles.subTitle}>ES Module</h2>
        <pre><code className="js">
          {`import utils from 'utility-text';
/* --- OR --- */
import {functionName} from 'utility-text';

// start using the package
`}
        </code></pre>

        <button className={styles.docsBtn}><BsFileEarmarkMedical /> Visit Docs</button>

      </section>
    </div>
  );
}
