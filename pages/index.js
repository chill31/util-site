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
          <Link className={styles.navLink} href="/docs/main">Docs</Link>
          <Link className={styles.navLink} href="/help">Help</Link>

        </div>
      </main>

      <section className={styles.section}>

        <h1 className={styles.title}>Note</h1>
        <p className={styles.description}>Check the basic structure of the package and how to get started.</p>

        <h2 className={styles.subTitle}>Exports</h2>

        <div className={styles.codeFlex}>
          <pre className={styles.pre}>
            <code className="js">
              {`/* ---- COMMON JS ---- */
module.exports = {
  upper,
  lower,
  capitalize,
  reverse,
  ...
};
`}
            </code>
          </pre>
          <pre className={styles.pre}>
            <code className="js">
              {`/* ---- ES MODULE ---- */
export default {
  upper,
  lower,
  capitalize,
  reverse,
  ...
};
`}
            </code>
          </pre>
        </div>

        <h2 className={styles.subTitle}>Usage</h2>

        <div className={styles.codeFlex}>

          <pre className={styles.pre}>
            <code className="js">
              {`/* ---- COMMON JS ---- */
const allUtils = require("utility-text");
// --- OR ---
const {functionName} = require("utility-text");

console.log(allUtils);
console.log(functionName(...))
`}
            </code>
          </pre>

          <pre className={styles.pre}>
            <code className="js">
              {`/* ---- ES MODULE ---- */
import allUtils from "utility-text";
// --- OR ---
import {functionName} from "utility-text";

console.log(allUtils);
console.log(functionName(...))
`}
            </code>
          </pre>

        </div>

        <Link className={styles.docsBtn} href="/docs/main"><BsFileEarmarkMedical /> Visit Full Documentation</Link>

      </section>
    </div>
  );
}
