import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import { BsClipboard, BsGearWideConnected, BsFileEarmarkMedical, BsCodeSlash, BsPersonCircle, BsBraces, BsSpeedometer, BsUiChecks, BsGraphUp, BsPersonBoundingBox, BsStars, BsCodeSquare, BsBox } from "react-icons/bs";

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

    const statIcons = document.querySelectorAll(".statIconWrapper");
    const iconObserver = new IntersectionObserver((allEntries) => {
      allEntries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersect");
        }
      })
    }, {
      threshold: 1
    });

    statIcons.forEach((icon) => iconObserver.observe(icon));

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
      threshold: .5
    });

    allFeatureFromLeft.forEach((feature) => leftObserver.observe(feature));
    allFeatureFromRight.forEach((feature) => rightObserver.observe(feature));

    const contributeTitle = document.querySelector(".contributeTitle");
    const contributeBrief = document.querySelector(".contributeBrief");

    const contributeObserver = new IntersectionObserver((allEntries) => {
      allEntries.forEach((entry) => {
        if (entry.isIntersecting) {
          contributeTitle.classList.add("intersect");
          setTimeout(() => {
            contributeBrief.classList.add("intersect");
          }, 400);
        }
      })
    }, {
      threshold: .7
    });

    contributeObserver.observe(contributeTitle);

    const stepIcons = document.querySelectorAll(".contributeIconWrapper");
    const stepTitles = document.querySelectorAll(".stepTitle");
    const stepBriefs = document.querySelectorAll(".stepBrief");

    const stepObserver = new IntersectionObserver((allEntries) => {
      allEntries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("intersect");
        }
      });

    }, {
      threshold: .8
    });

    stepIcons.forEach((icon) => stepObserver.observe(icon));
    stepTitles.forEach((title) => stepObserver.observe(title));
    stepBriefs.forEach((brief) => stepObserver.observe(brief));

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

        <div className={styles.stats}>

          <div className={`${styles.stat} stat`}>
            <div className={`${styles.statIconWrapper} statIconWrapper`}>
              <BsGraphUp className={`${styles.statIcon} statIcon`} />
            </div>
            <h2 className={`${styles.statNum} statNum`}>1.5K+</h2>
            <p className={`${styles.statName} statName`}>Downloads</p>
          </div>

          <div className={`${styles.stat} stat`}>
            <div className={`${styles.statIconWrapper} statIconWrapper`}>
              <BsCodeSlash className={`${styles.statIcon} statIcon`} />
            </div>
            <h2 className={`${styles.statNum} statNum`}>35+</h2>
            <p className={`${styles.statName} statName`}>Functions</p>
          </div>

          <div className={`${styles.stat} stat`}>
            <div className={`${styles.statIconWrapper} statIconWrapper`}>
              <BsPersonBoundingBox className={`${styles.statIcon} statIcon`} />
            </div>
            <h2 className={`${styles.statNum} statNum`}><Link href="https://github.com/chill31/utility-text/contributors" tabIndex="-1">1</Link></h2>
            <p className={`${styles.statName} statName`}>Contributor</p>
          </div>

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

        <div className={styles.contributeWrapper}>

          <h1 className={`${styles.contributeTitle} contributeTitle`}>Have Ideas?</h1>
          <p className={`${styles.contributeBrief} contributeBrief`}>Your ideas and reviews keep the package running, so do not hesitate to tell your ideas here</p>

          <div className={`${styles.contributeSteps} contributeSteps`}>

            <div className={`${styles.contributeStep} contributeStep`}>

              <div className={`${styles.contributeIconWrapper} contributeIconWrapper`}>
                <BsStars className={`${styles.contributeIcon} contributeIcon`} />
              </div>

              <h2 className={`${styles.stepTitle} stepTitle`}>Feature Request</h2>
              <p className={`${styles.stepBrief} stepBrief`}>go to <Link className={styles.contributeLink} href="https://github.com/chill31/utility-text/issues">https://github.com/chill31/utility-text/issues</Link> and create a new issue with the the label of feature request and describe your feature there and why it would be useful in the package. If it seems appropriate, the feature will likely be added</p>

            </div>

            <div className={`${styles.contributeStep} contributeStep`}>

              <div className={`${styles.contributeIconWrapper} ${styles.contributeIconWrapperSecond} contributeIconWrapper`}>
                <BsCodeSquare className={`${styles.contributeIcon} contributeIcon`} />
              </div>

              <h2 className={`${styles.stepTitle} stepTitle`}>Pull Request</h2>
              <p className={`${styles.stepBrief} stepBrief`}>If you want to program the feature yourself, fork the <Link className={styles.contributeLink} href="https://github.com/chill31/utility-text">github repository</Link> and make the changes. Then, make a <Link className={styles.contributeLink} href="https://github.com/chill31/utility-text/pulls">pull request</Link>. The code will be reviewed and if it is good, it will be accepted and you will be a contributor</p>

            </div>

          </div>

        <Link className={styles.docsBtn} href="https://github.com/chill31/utility-text/"><BsBox /> Visit Repository</Link>

        </div>
      </main>
    </div>
  );
}
