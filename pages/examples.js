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
          manipulation, replacement and many more functions.
        </p>

        <div className={styles.flex}>
          <pre><code className="js">
            {`const {advanceReplace} = require("utility-text"); // instead of importing all functions, you only import the ones you need
const str = "this is a sentence with a lot of spaces     ";

const replaced = advanceReplace({
  text: str,
  replacementText: " ", // looks for spaces
  replacement: "_", // replaces with underscore
  countIndex: 3 // only replaces 3 spaces. leaves the others as they were
});

console.log(replaced); // no function replaces or manipulates the original string.

// returns =>
// this_is_a_sentence with a lot of spaces     
`}</code></pre>

          <pre><code className="js">
            {`const {toggleCase, capitalize} = require("utility-text");
const text = "This is a very normal sentence.";

const changed = toggleCase(text);
const changed2 = capitalize(text);

console.log(changed, changed2);
// returns =>
// tHIS iS a vERY nORMAL sENTENCE.
// This Is A Very Normal Sentence.
`}
          </code></pre>

          <pre><code className="js">
            {`const {extractURL, extractEmail} = require("utility-text");
const str =  "my website is https://chill31.github.io. Mail me at igotnomail@chill31.com";

const urls = extractURL({
  text: str,
  wrap: ["<", ">"] // leave empty for no wrapping around urls.
});
const mails = extractEmail({
  text: str,
  wrap: ["", ""] // the array is not optional. For no wrap, just leave two empty quotes in the wrap parameter.
});

console.log(urls, mails);

// returns =>
/*
{
  text: 'my website is <https://chill31.github.io.> Mail me at igotnomail@chill31.com',
  urls: [ 'https://chill31.github.io.' ]
}
*/
/*
{
  text: 'my website is https://chill31.github.io. Mail me at igotnomail@chill31.com',
  mails: [ 'igotnomail@chill31.com' ]
}
*/
`}
          </code></pre>

        </div>
      </main>
    </div>
  );
}
