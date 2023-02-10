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
        <title>Docs: objectSearch</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>objectSearch()</code></h1>

        <p className={styles.description}>searches a string in specified keys in the array of objects</p>

        <pre><code className="js">
          {`const {objectSearch} = require("utility-text");
const searchWord = "useful";

const searched = objectSearch({
  searchList: [
   {
    title: "fnName()",
    text: "this function does something useful"
   },
   {
    title: "secondFn()",
    text: "this function does something else"
   }
  ],
  searchKeys: ["title", "text"],
  searchText: searchWord,
  returnAll: false,
});
console.log(searched);
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <legend className={styles.invertCodeLegend}>Object</legend>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>searchList <span className={styles.invertCode}>Array of Objects <code className={styles.codeScope}>{`[{...}, {...}]`}</code></span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>this is the list of objects you want to search the text in</span></li>
          <br />
          <li className={styles.parameter}>searchText <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>the text you want to search for in the searchList array&apos;s objects</span></li>
          <br />
          <li className={styles.parameter}>searchKeys <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span><br /><span className={styles.paramSub}>the list of keys you want to search in</span></li>
          <br />
          <li className={styles.parameter}>returnAll <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether the function should return all matches or just the first match</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <ul className={styles.paramList}>

          <li className={styles.parameter}><code className={styles.codeScope}>returnAll: false</code><br /><span className={styles.paramSub}>if the returnAll parameter is false, then the data below gets returned:</span>
          
            <br />
            <br />

            <legend className={styles.invertCodeLegend}>Object</legend>

            <br />

            <ul className={styles.paramList}>
              <li className={styles.parameter}>found <span className={styles.invertCode}>Boolean</span><br /><span className={styles.paramSub}>whether the match was found or not</span></li>
              <br />
              <li className={styles.parameter}>search <span className={styles.invertCode}>String</span><br /><span className={styles.paramSub}>the search string</span></li>
              <br />
              <li className={styles.parameter}>match <span className={styles.invertCode}>String</span><br /><span className={styles.paramSub}>the match found</span></li>
              <br />
              <li className={styles.parameter}>object <span className={styles.invertCode}>Object</span><br /><span className={styles.paramSub}>the object where the match was found</span></li>
              <br />
              <li className={styles.parameter}>key <span className={styles.invertCode}>Object</span><br /><span className={styles.paramSub}>the key in the object where the match was found</span></li>
              <br />
              <li className={styles.parameter}>index <span className={styles.invertCode}>Number</span><br /><span className={styles.paramSub}>the array&apos;s index where the match was found</span></li>
            </ul>
          </li>

          <br />
          <br />

          <li className={styles.parameter}><code className={styles.codeScope}>returnAll: true</code><br /><span className={styles.paramSub}>if the returnAll parameter is set to true, then the data below gets returned:</span>
          
          <br />
          <br />

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
              <li className={styles.parameter}>object <span className={styles.invertCode}>Object</span><br /><span className={styles.paramSub}>the object where the match was found</span></li>
              <br />
              <li className={styles.parameter}>key <span className={styles.invertCode}>Object</span><br /><span className={styles.paramSub}>the key in the object where the match was found</span></li>
              <br />
              <li className={styles.parameter}>index <span className={styles.invertCode}>Number</span><br /><span className={styles.paramSub}>the array&apos;s index where the match was found</span></li>
            </ul>
        </li>

        </ul>

      </main>
    </div>
  );
}
