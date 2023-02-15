import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import { BsClipboard, BsGearWideConnected, BsFileEarmarkMedical, BsCodeSlash, BsPersonCircle, BsBraces, BsSpeedometer, BsUiChecks } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CopyButtonPlugin from '../scripts/hljsCopy'

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    hljs.highlightAll();

    hljs.addPlugin(new CopyButtonPlugin())

    const title = document.querySelector(".title");
    const codeBlock = document.querySelector(".description");
    const navLinks = document.querySelectorAll(".navLink");

    const mainObserver = new IntersectionObserver((allEntries) => {
      allEntries.forEach((entry) => {
        if (entry.isIntersecting) {

          title.classList.add("intersect");

          setTimeout(() => {
            codeBlock.classList.add("intersect");
          }, 400);

          setTimeout(() => {
            navLinks.forEach((link) => {
              link.classList.add("intersect");
            })
          }, 800);

        }
      });
    });

    mainObserver.observe(title);

    const allFeatureFromLeft = document.querySelectorAll(".fromLeft");
    const allFeatureFromRight = document.querySelectorAll(".fromRight");

    const leftObserver = new IntersectionObserver((allEntries) => {
      allEntries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".fromLeft").forEach((left) => left.classList.add('intersect'));
          entry.target.querySelectorAll(".featureIcon").forEach((ico) => ico.classList.add('intersect'));
        }

      });
    }, {
      threshold: .7
    });

    const rightObserver = new IntersectionObserver((allEntries) => {
      allEntries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".fromRight").forEach((left) => left.classList.add('intersect'));
          entry.target.querySelectorAll(".featureIcon").forEach((ico) => ico.classList.add('intersect'));
        }

      });
    }, {
      threshold: .7
    });

    allFeatureFromLeft.forEach((feature) => leftObserver.observe(feature));
    allFeatureFromRight.forEach((feature) => rightObserver.observe(feature));
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
        <h1 className={`${styles.title} title`}>Documentation</h1>

        <p className={`${styles.description} description`}>
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

          <Link className={`${styles.navLink} ${styles.firstLink} navLink`} href="/examples">Examples</Link>
          <Link className={`${styles.navLink} ${styles.secondLink} navLink`} href="/docs/main">Docs</Link>
          <Link className={`${styles.navLink} ${styles.thirdLink} navLink`} href="/presets">Presets</Link>

        </div>

        <div className={styles.features}>

          <div className={`${styles.feature} fromLeft`}>

            <div className={`${styles.featureInfo} fromLeft`}>
              <h1 className={styles.featureTitle}>Easy To Use</h1>
              <p className={styles.brief}>Streamline your experience with this package that is both simple and straightforward to use</p>
            </div>
            <BsGearWideConnected className={`${styles.featureIcon} featureIcon`} />

          </div>

          <div className={`${styles.feature} fromRight`}>

            <BsFileEarmarkMedical className={`${styles.featureIcon} featureIcon`} />

            <div className={`${styles.featureInfo} fromRight`}>
              <h1 className={styles.featureTitle}>Use anywhere</h1>
              <p className={styles.brief}>This package is built to use anywhere. It supports both importing through modules or just normal Common JS projects.</p>
            </div>

          </div>

          <div className={`${styles.feature} fromLeft`}>

            <div className={`${styles.featureInfo} fromLeft`}>
              <h1 className={styles.featureTitle} data-dep>Efficient & Unique</h1>
              <p className={styles.brief}>the package takes in consideration performance and tries to implement functions which run fast.<br />functions are unique and provide a lot of use cases in many projects.</p>
            </div>

            <BsSpeedometer className={`${styles.featureIcon} featureIcon`} />

          </div>

          <div className={`${styles.feature} fromRight`}>

            <BsUiChecks className={`${styles.featureIcon} featureIcon`} />

            <div className={`${styles.featureInfo} fromRight`}>
              <h1 className={styles.featureTitle}>Useful</h1>
              <p className={styles.brief}>this package is a must for anyone who needs to manipulate, analyze, or transform large amounts of text data efficiently</p>
            </div>

          </div>

          <div className={`${styles.feature} fromLeft`}>

            <div className={`${styles.featureInfo} fromLeft`}>
              <h1 className={styles.featureTitle} data-dep>No Dependencies</h1>
              <p className={styles.brief}>The package uses no external resources so you do not need to worry about your project&apos;s load</p>
            </div>
            <BsCodeSlash className={`${styles.featureIcon} featureIcon`} />

          </div>

          <div className={`${styles.feature} fromRight`}>

            <BsPersonCircle className={`${styles.featureIcon} featureIcon`} />

            <div className={`${styles.featureInfo} fromRight`}>
              <h1 className={styles.featureTitle}>Clear Docs</h1>
              <p className={styles.brief}>If you experience any problems, visit the <Link href="/docs/main" className={styles.featureLink}>docs</Link> to understand better about this package. All functions have a example so you can easily understand how the function works</p>
            </div>

          </div>

        </div>

        <Link className={styles.docsBtn} href="/docs/main"><BsBraces /> Visit Full Documentation</Link>
      </main>
    </div>
  );
}
