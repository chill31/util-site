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
        <title>Docs: compare</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}><code className={styles.headCode}>compare()</code></h1>

        <p className={styles.description}>compares 2 strings</p>

        <div className={styles.tags}>
          <span className={`${styles.tag} ${styles.tagString}`}>String</span>
        </div>

        <pre><code className="js">
          {`const { compare } = require("utility-text");
const myText1 = "this";
const myText2 = "that";

const compared = compare(myText1, myText2);
console.log(compared);
/*
[
  {
    firstText: 'i',
    secondText: 'a',
    difference: 'a',
    atIndex: 2,
    type: { message: 'both indexes exist but are not equal', code: 2 }
  },
  ... all the other differences
] */
`}
        </code></pre>

        <h2 className={styles.subTitle}>Parameters</h2>

        <ul className={styles.paramList}>
          <li className={styles.parameter}>text1 <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
          <br />
          <li className={styles.parameter}>text2 <span className={styles.invertCode}>String</span> <span className={styles.important}>*</span></li>
        </ul>

        <h2 className={styles.subTitle}>Returns</h2>

        <legend className={styles.invertCodeLegend}>Array of Objects <code className={styles.codeScope}>[{'{...}, {...}'}]</code></legend>
        
        <ul className={styles.paramList}>
          <li className={styles.parameter}>firstText <span className={styles.invertCode}>String | <code className={styles.codeScope}>null</code></span> <br /><span className={styles.paramSub}>the first text&apos;s character</span></li>
          <br />
          <li className={styles.parameter}>secondText <span className={styles.invertCode}>String | <code className={styles.codeScope}>null</code></span> <br /><span className={styles.paramSub}>the second text&apos;s character</span></li>
          <br />
          <li className={styles.parameter}>difference <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>the difference between the first and second characters</span></li>
          <br />
          <li className={styles.parameter}>atIndex <span className={styles.invertCode}>Number</span> <br /><span className={styles.paramSub}>the index where the function is currently comparing the text at</span></li>
          <br />
          <li className={styles.parameter}>type <span className={styles.invertCode}>Object</span> <br /><span className={styles.paramSub}>the type of difference [Object]</span> <br /><br />

            <ul className={styles.paramList}>
              <li className={styles.parameter}>message <span className={styles.invertCode}>String</span> <br /><span className={styles.paramSub}>describes how the characters are different, or if either one of them is null at the specific position.</span></li>
              <br />
              <li className={styles.parameter}>code <span className={styles.invertCode}>Number&lt;<code className={styles.codeScope}>0 | 1 | 2</code>&gt;</span><br /><span className={styles.paramSub}>another way of getting the type of difference between the characters.</span></li>
            </ul>

          </li>
        </ul>

      </main>
    </div>
  );
}
