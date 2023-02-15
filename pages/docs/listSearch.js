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
        <title>Docs: listSearch</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>listSearch()</code></h1>

        <p className={styles.description}>searches a string in an array of strings.</p>

        <pre><code className="js">
          {`const {listSearch} = require("utility-text");
const searchWord = "hello";

const searched = listSearch({
  searchList: [
    "hellO",
    "HElLo",
    "hello"
  ],
  searchText: searchWord,
  returnAll: true,
});
console.log(searched);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>searchList <span className={styles.invertCode}>Array</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>this is the array of strings you want to search the text in</span></li>
          <br />
          <li className={styles.parameter}>searchText <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>the text you want to search for in the searchList array.</span></li>
          <br />
          <li className={styles.parameter}>returnAll <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether the function should return all matches or just the first match</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>

          <legend className={styles.invertCodeLegend}>Array of Objects <code className={styles.codeScope}>{'[{...}, {...}]'}</code></legend>

          <br />
          <br />

          <ul className={styles.paramList}>
            <li className={styles.parameter}>found <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether the match was found or not</span></li>
            <br />
            <li className={styles.parameter}>search <span className={styles.invertCode}>String</span><br /><span className={styles.paramSub}>the search string</span></li>
            <br />
            <li className={styles.parameter}>match <span className={styles.invertCode}>String</span><br /><span className={styles.paramSub}>the match found</span></li>
            <br />
            <li className={styles.parameter}>index <span className={styles.invertCode}>Number</span><br /><span className={styles.paramSub}>the array&apos;s index where the match was found</span></li>
          </ul>

        </ul>

      </main>
    </div>
  );
}
