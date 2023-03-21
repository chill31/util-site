import Head from "next/head";
import styles from "../styles/Installation.module.css";
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

  function selectOption(optionNumber) {
    const firstOption = document.getElementById("first-option");
    const secondOption = document.getElementById("second-option");

    const firstSection = document.getElementById("first-installation");
    const secondSection = document.getElementById("second-installation");

    if (optionNumber === 0) {

      firstOption.setAttribute("data-active", "");
      secondOption.removeAttribute("data-active", "");

      firstSection.setAttribute("data-active", "");
      secondSection.removeAttribute("data-active", "");

    } else if (optionNumber === 1) {

      secondOption.setAttribute("data-active", "");
      firstOption.removeAttribute("data-active", "");

      secondSection.setAttribute("data-active", "");
      firstSection.removeAttribute("data-active", "");

    }
  }

  function selectSnippet(optionNumber) {
    const firstOption = document.getElementById("first-snippet");
    const secondOption = document.getElementById("second-snippet");

    const firstSection = document.getElementById("first-snippet-code");
    const secondSection = document.getElementById("second-snippet-code");

    if (optionNumber === 0) {

      firstOption.setAttribute("data-active", "");
      secondOption.removeAttribute("data-active", "");

      firstSection.setAttribute("data-active", "");
      secondSection.removeAttribute("data-active", "");

    } else if (optionNumber === 1) {

      secondOption.setAttribute("data-active", "");
      firstOption.removeAttribute("data-active", "");

      secondSection.setAttribute("data-active", "");
      firstSection.removeAttribute("data-active", "");

    }
  }

  function selectHTMLSnippet(optionNumber) {
    const firstOption = document.getElementById("first-html-snippet");
    const secondOption = document.getElementById("second-html-snippet");

    const firstSection = document.getElementById("first-html-snippet-code");
    const secondSection = document.getElementById("second-html-snippet-code");

    if (optionNumber === 0) {

      firstOption.setAttribute("data-active", "");
      secondOption.removeAttribute("data-active", "");

      firstSection.setAttribute("data-active", "");
      secondSection.removeAttribute("data-active", "");

    } else if (optionNumber === 1) {

      secondOption.setAttribute("data-active", "");
      firstOption.removeAttribute("data-active", "");

      secondSection.setAttribute("data-active", "");
      firstSection.removeAttribute("data-active", "");

    }
  }

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
        <title>Installation - utility-text</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>

        <header className={styles.header}>
          <h1 className={styles.title}>Installation</h1>
          <p className={styles.brief}>Whether it be plain html, or a node.js project, you can use this package effortlessly anywhere you want.</p>
        </header>

        <div className={styles.selectOption}>
          <span id="first-option" className={styles.option} onClick={() => selectOption(0)} data-active="">NPM</span>
          <span id="second-option" className={styles.option} onClick={() => selectOption(1)}>HTML</span>
        </div>

        <div id="first-installation" className={styles.installation} data-active="">
          <div className={styles.stepWrapper}>
            <li className={styles.stepName}>Open Your Terminal</li>
            <span className={styles.step}>type in the installation command to install the package files and functions</span>
            <pre>
              <code>
                &gt;&gt;&gt; npm i utility-text
              </code>
            </pre>
          </div>

          <div className={styles.stepWrapper}>
            <li className={styles.stepName}>Open Your JS file</li>
            <span className={styles.step}>You can either use the package in ES modules or Common JS projects, check the below code snippets for both cases</span>

            <div className={styles.selectSnippet}>
              <span id="first-snippet" className={styles.option} onClick={() => selectSnippet(0)} data-active="">Common JS</span>
              <span id="second-snippet" className={styles.option} onClick={() => selectSnippet(1)}>ES Module</span>
            </div>

            <pre id='first-snippet-code' className={styles.snippetPre} data-active>
              <code className="js">
{`const { functionName } = require("utility-text");
console.log(functionName(...));`}
              </code>
            </pre>
            <pre id='second-snippet-code' className={styles.snippetPre}>
              <code className="js">
{`import { functionName } from 'utility-text'
console.log(functionName(...));`}
              </code>
            </pre>
          </div>
        </div>

        <div id="second-installation" className={styles.installation}>

          <div className={styles.stepWrapper}>
            <li className={styles.stepName}>Open Your Code Editor</li>
            <span className={styles.step}>If you want to use the functions in an ES module, you will need to import the resources from the javascript file, and if you want to use it normally, add the link as an src to a script tag</span>

            <div className={styles.selectSnippet}>
              <span id="first-html-snippet" className={styles.option} onClick={() => selectHTMLSnippet(0)} data-active="">Common JS</span>
              <span id="second-html-snippet" className={styles.option} onClick={() => selectHTMLSnippet(1)}>ES Module</span>
            </div>

            <pre id='first-html-snippet-code' className={styles.snippetPre} data-active="">
              <code className="html">
{`<script src="https://cdn.jsdelivr.net/npm/utility-text@1.6.1/src/web/common.min.js"></script>
<script>
  console.log(validFunctionName(...));
</script>`}
              </code>
            </pre>
            <pre id='second-html-snippet-code' className={styles.snippetPre}>
              <code className="html">
{`<script type="module">
  import 'https://cdn.jsdelivr.net/npm/utility-text@1.6.1/src/web/module.min.js';
  console.log(validFunctionName(...));
</script>`}
              </code>
            </pre>
          </div>
        </div>

        <Link className={styles.readDocsBtn} href="/docs/main">Read The Docs</Link>
      </main>
    </div>
  );
}
