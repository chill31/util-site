import Head from "next/head";
import styles from "../../styles/docs/main.module.css";

import Link from 'next/link'

export default function Home() {
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
        <h1 className={styles.title}>Get Started</h1>

        <p className={styles.description}>
          click on one of the functions to get detailed information.
        </p>

        <div className={styles.docs}>

          <div className={styles.entries}>

            <div className={styles.entry}>
              <Link href="/docs/upper" className={styles.refLink}>upper()</Link>
              <Link href="/docs/lower" className={styles.refLink}>lower()</Link>
              <Link href="/docs/capitalize" className={styles.refLink}>capitalize()</Link>
              <Link href="/docs/reverse" className={styles.refLink}>reverse()</Link>
              <Link href="/docs/toggleCase" className={styles.refLink}>toggleCase()</Link>
              <Link href="/docs/oppositeCase" className={styles.refLink}>oppositeCase()</Link>
              <Link href="/docs/advanceReplace" className={styles.refLink}>advanceReplace()</Link>
            </div>

            <div className={styles.entry}>
              <Link href="/docs/analyze" className={styles.refLink}>analyze()</Link>
              <Link href="/docs/extractURL" className={styles.refLink}>extractURL()</Link>
              <Link href="/docs/extractEmail" className={styles.refLink}>extractEmail()</Link>
              <Link href="/docs/slug" className={styles.refLink}>slug()</Link>
              <Link href="/docs/camelCase" className={styles.refLink}>camelCase()</Link>
              <Link href="/docs/snakeCase" className={styles.refLink}>snakeCase()</Link>
              <Link href="/docs/formatNumber" className={styles.refLink}>formatNumber()</Link>
            </div>

            <div className={styles.entry}>
              <Link href="/docs/isValidEmail" className={styles.refLink}>isValidEmail()</Link>
              <Link href="/docs/isValidURL" className={styles.refLink}>isValidURL()</Link>
              <Link href="/docs/charCount" className={styles.refLink}>charCount()</Link>
              <Link href="/docs/normalize" className={styles.refLink}>normalize()</Link>
              <Link href="/docs/removeDuplicates" className={styles.refLink}>removeDuplicates()</Link>
              <Link href="/docs/minMax" className={styles.refLink}>minMax()</Link>
            </div>

          </div>
          
        </div>

        <p className={styles.subDescription}>Check the <Link className={styles.link} href="/docs/presets">Presets and Defaults</Link> for any parameter in the above functions which is not required. <span className={styles.important}>*</span></p>

      </main>
    </div>
  );
}
