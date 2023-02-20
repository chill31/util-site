import Head from "next/head";
import styles from "../styles/docs/global.module.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import CopyButtonPlugin from '../scripts/hljsCopy'

hljs.registerLanguage("javascript", javascript);

import { useEffect } from "react";
import Link from 'next/link'

export default function Home() {

  useEffect(() => {
    hljs.highlightAll();

    hljs.addPlugin(new CopyButtonPlugin())
  }, []);

  return (
    <div className={styles.container}>

      <Head>
        <title>Function presets - utility-text</title>
        <meta
          name="description"
          content="official documentation site for npm package utility-text"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Defaults</h1>

        <p className={styles.description}>for any function&apos;s parameters which are not required, you can check the default values set here.</p>

        <div className={styles.paramGrid}>

          <div className={styles.param}>
            <Link href="/docs/oppositeCase" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>oppositeCase()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>upperFirst <span className={styles.invertCode}>Boolean</span><br /><code className={styles.codeScope}>=&gt; true</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/analyze" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>analyze()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>strict <span className={styles.invertCode}>Boolean</span><br /><code className={styles.codeScope}>=&gt; true</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/formatNumber" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>formatNumber()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>locale <span className={styles.invertCode}>String</span><br /><code className={styles.codeScope}>=&gt; &lt;system locale&gt;</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/charCount" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>charCount()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>exceptions <span className={styles.invertCode}>Array</span><br /><code className={styles.codeScope}>=&gt; []</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/removeDuplicates" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>removeDuplicates()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>strict <span className={styles.invertCode}>Boolean</span><br /><code className={styles.codeScope}>=&gt; true</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/normalize" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>normalize()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>customSymbols <span className={styles.invertCode}>Array</span><br /><code className={styles.codeScope}>=&gt; []</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/insertAt" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>insertAt()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>before <span className={styles.invertCode}>Boolean</span><br /><code className={styles.codeScope}>=&gt; false</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/advanceReplace" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>advanceReplace()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>skip <span className={styles.invertCode}>Number</span><br /><code className={styles.codeScope}>=&gt; 0</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/listSearch" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>listSearch()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>returnAll <span className={styles.invertCode}>Boolean</span><br /><code className={styles.codeScope}>=&gt; false</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/objectSearch" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>objectSearch()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>returnAll <span className={styles.invertCode}>Boolean</span><br /><code className={styles.codeScope}>=&gt; false</code></li>
            </ul>
          </div>

          <div className={styles.param}>
            <Link href="/docs/truncate" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>truncate()</code></Link>

            <ul className={styles.paramList}>
              <li className={styles.parameter}>ellipsis <span className={styles.invertCode}>Object</span><br /><code className={styles.codeScope}>=&gt;<br />
                {`{
  show: true,
  content: "..."
}`}</code></li>
            </ul>
          </div>

        </div>

        <h1 className={styles.title} data-sub>Presets</h1>
        <p className={styles.description}>Here you can find the regular expressions, preset checks and things that the functions use.</p>

        <div className={styles.paramFlex}>

          <div className={styles.param}>
            <Link href="/docs/isValidEmail" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>isValidEmail()</code></Link>
            <legend className={styles.invertCodeLegend}>Email RegExp</legend>
            <pre><code className="js">
              {`const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/gi;`}
            </code></pre>
          </div>

          <div className={styles.param}>
            <Link href="/docs/extractEmail" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>extractEmail()</code></Link>
            <legend className={styles.invertCodeLegend}>Email RegExp</legend>
            <pre><code className="js">
              {`const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/gi;`}
            </code></pre>
          </div>

          <div className={styles.param}>
            <Link href="/docs/camelCase" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>camelCase()</code></Link>
            <legend className={styles.invertCodeLegend}>Checking for spaces and symbols, etc. RegExp</legend>
            <pre><code className="js">
              {`const reg = /(?:^\w|[A-Z]|\b\w)/g;`}
            </code></pre>
          </div>

          <div className={styles.param}>
            <Link href="/docs/snakeCase" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>snakeCase()</code></Link>
            <legend className={styles.invertCodeLegend}>checking for punctuations, etc. RegExp</legend>
            <pre><code className="js">
              {`const reg = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g`}
            </code></pre>
          </div>

          <div className={styles.param}>
            <Link href="/docs/normalize" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>normalize()</code></Link>
            <legend className={styles.invertCodeLegend}>preset symbols to remove in normalize function</legend>
            <pre><code className="js">
              {`const symbols = [ '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '"', ':', '?', '>', '<', ';', '.', ',', '-'];
`}
            </code></pre>
          </div>

          <div className={styles.param}>
            <Link href="/docs/kebabCase" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>kebabCase()</code></Link>
            <legend className={styles.invertCodeLegend}>preset regex for converting to kebab-case</legend>
            <pre><code className="js">
              {`const reg = /[\\s_]+/
`}
            </code></pre>
          </div>

          <div className={styles.param}>
            <Link href="/docs/escape" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>escape()</code></Link>
            <legend className={styles.invertCodeLegend}>preset regex for checking unescaped characters</legend>
            <pre><code className="js">
              {`const reg = /[&<>"'/]/ig;`}
            </code></pre>
          </div>

          <div className={styles.param}>
            <Link href="/docs/unescape" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>unescape()</code></Link>
            <legend className={styles.invertCodeLegend}>preset regex for checking escaped characters</legend>
            <pre><code className="js">
              {`const reg = /&(amp|lt|gt|quot|#039|#x2F);/ig;`}
            </code></pre>
          </div>

          <div className={styles.param}>
            <Link href="/docs/stripHTML" className={styles.subTitle} data-paramtitle><code className={styles.subHeadCode}>stripHTML()</code></Link>
            <legend className={styles.invertCodeLegend}>regex for checking html tags and their attributes</legend>
            <pre><code className="js">
              {`const reg = /<[^>]*>/g;`}
            </code></pre>
          </div>

        </div>

      </main>
    </div>
  );
}
