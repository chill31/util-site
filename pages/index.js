import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  BsClipboard,
  BsGearWideConnected,
  BsFileEarmarkMedical,
  BsCodeSlash,
  BsPersonCircle,
  BsBraces,
  BsSpeedometer,
  BsUiChecks,
  BsGraphUp,
  BsPersonBoundingBox,
  BsStars,
  BsCodeSquare,
  BsBox,
  BsBug,
} from "react-icons/bs";
import { GoPackage } from "react-icons/go";

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

    const title = document.querySelector(".title");
    const docBrief = document.querySelector(".docBrief");
    const codeBlock = document.querySelector(".description");

    const mainObserver = new IntersectionObserver((allEntries) => {
      allEntries.forEach((entry) => {
        if (entry.isIntersecting) {
          title.classList.add("intersect");

          setTimeout(() => {
            docBrief.classList.add("intersect");
          }, 400);

          setTimeout(() => {
            codeBlock.classList.add("intersect");
          }, 800);
        }
      });
    });

    mainObserver.observe(title);

    const statIcons = document.querySelectorAll(".statIcon");
    const iconObserver = new IntersectionObserver(
      (allEntries) => {
        allEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("intersect");
          }
        });
      },
      {
        threshold: 1,
      }
    );

    statIcons.forEach((icon) => iconObserver.observe(icon));

    const allFeatureFromLeft = document.querySelectorAll(".fromLeft");
    const allFeatureFromRight = document.querySelectorAll(".fromRight");

    const leftObserver = new IntersectionObserver(
      (allEntries) => {
        allEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".fromLeft")
              .forEach((left) => left.classList.add("intersect"));
            entry.target
              .querySelectorAll(".featureIcon")
              .forEach((ico) => ico.classList.add("intersect"));
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const rightObserver = new IntersectionObserver(
      (allEntries) => {
        allEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".fromRight")
              .forEach((left) => left.classList.add("intersect"));
            entry.target
              .querySelectorAll(".featureIcon")
              .forEach((ico) => ico.classList.add("intersect"));
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    allFeatureFromLeft.forEach((feature) => leftObserver.observe(feature));
    allFeatureFromRight.forEach((feature) => rightObserver.observe(feature));

    const contributeTitle = document.querySelector(".contributeTitle");
    const contributeBrief = document.querySelector(".contributeBrief");

    const contributeObserver = new IntersectionObserver(
      (allEntries) => {
        allEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            contributeTitle.classList.add("intersect");
            setTimeout(() => {
              contributeBrief.classList.add("intersect");
            }, 400);
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    contributeObserver.observe(contributeTitle);

    const stepIcons = document.querySelectorAll(".contributeIcon");
    const stepTitles = document.querySelectorAll(".stepTitle");
    const stepBriefs = document.querySelectorAll(".stepBrief");

    const stepObserver = new IntersectionObserver(
      (allEntries) => {
        allEntries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("intersect");
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

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
        <h1 className={`${styles.title} title`}>UTILITY-TEXT</h1>
        <p className={`${styles.docBrief} docBrief`}>Documentation</p>

        <p className={`${styles.description} description`}>
          <code
            className={styles.code}
            onClick={() => {
              toast.success("Copied installation code", {
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

        <div className={styles.stats}>
          <div className={`${styles.stat} stat`}>
            <BsGraphUp className={`${styles.statIcon} statIcon`} />
            <h2 className={`${styles.statNum} statNum`}>2.5K+</h2>
            <p className={`${styles.statName} statName`}>Downloads</p>
          </div>

          <div className={`${styles.stat} stat`}>
            <BsCodeSlash className={`${styles.statIcon} statIcon`} />
            <h2 className={`${styles.statNum} statNum`}>45+</h2>
            <p className={`${styles.statName} statName`}>Functions</p>
          </div>

          <div className={`${styles.stat} stat`}>
            <BsPersonBoundingBox className={`${styles.statIcon} statIcon`} />
            <h2 className={`${styles.statNum} statNum`}>
              <Link
                href="https://github.com/chill31/utility-text/contributors"
                tabIndex="-1"
              >
                1
              </Link>
            </h2>
            <p className={`${styles.statName} statName`}>Contributor</p>
          </div>
        </div>

        <div className={styles.usage}>
          <h1 className={styles.usageTitle} id="usage-title">
            Usage
          </h1>

          <ul className={styles.useList}>
            <li className={styles.useItem}>
              NPM
              <br />
              <code className={styles.useCode}>npm i utility-text</code>
            </li>
            <li className={styles.useItem}>
              Web
              <br />
              <ul className={styles.useList}>
                <li className={styles.useItem}>
                  Common JS
                  <br />
                  <pre>
                    <code className="xml">
                      {`<!-- *.html -->\n<script src="https://cdn.jsdelivr.net/npm/utility-text/src/web/common.min.js"></script>
<script>
// use the functions normally.
console.log(lower("FULL CAPITAL SENTENCE"))
</script>`}
                    </code>
                  </pre>
                </li>
                <li className={styles.useItem}>
                  Module Imports
                  <br />
                  <pre>
                    <code className="js">
                      {`// *.js\n// <script> tag must be a type="module"\nimport 'https://cdn.jsdelivr.net/npm/utility-text/src/web/module.min.js';
// use the functions normally.
console.log(lower("FULL CAPITAL SENTENCE"))`}
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.features}>
          <div className={`${styles.feature} fromLeft`}>
            <div className={`${styles.featureInfo} fromLeft`}>
              <h1 className={styles.featureTitle}>Easy To Use</h1>
              <p className={styles.brief}>
                Streamline your experience with this package that is both simple
                and straightforward to use
              </p>
            </div>
            <BsGearWideConnected
              className={`${styles.featureIcon} featureIcon`}
            />
          </div>

          <div className={`${styles.feature} fromRight`}>
            <BsFileEarmarkMedical
              className={`${styles.featureIcon} featureIcon`}
            />

            <div className={`${styles.featureInfo} fromRight`}>
              <h1 className={styles.featureTitle}>Use anywhere</h1>
              <p className={styles.brief}>
                This package works in normal HTML pages, or in node processes,
                so you can use it anywhere you like. It is able to be imported
                by both ES modules and common JS require methods
              </p>
            </div>
          </div>

          <div className={`${styles.feature} fromLeft`}>
            <div className={`${styles.featureInfo} fromLeft`}>
              <h1 className={styles.featureTitle} data-dep>
                Efficient & Unique
              </h1>
              <p className={styles.brief}>
                the package takes in consideration performance and tries to
                implement functions which run fast.
                <br />
                functions are unique and provide a lot of use cases in many
                projects.
              </p>
            </div>

            <BsSpeedometer className={`${styles.featureIcon} featureIcon`} />
          </div>

          <div className={`${styles.feature} fromRight`}>
            <BsUiChecks className={`${styles.featureIcon} featureIcon`} />

            <div className={`${styles.featureInfo} fromRight`}>
              <h1 className={styles.featureTitle}>Useful</h1>
              <p className={styles.brief}>
                this package is a must for anyone who needs to manipulate,
                analyze, or transform large amounts of text data efficiently
              </p>
            </div>
          </div>

          <div className={`${styles.feature} fromLeft`}>
            <div className={`${styles.featureInfo} fromLeft`}>
              <h1 className={styles.featureTitle} data-dep>
                No Dependencies
              </h1>
              <p className={styles.brief}>
                The package uses no external resources so you do not need to
                worry about your project&apos;s load
              </p>
            </div>
            <GoPackage className={`${styles.featureIcon} featureIcon`} />
          </div>

          <div className={`${styles.feature} fromRight`}>
            <BsPersonCircle className={`${styles.featureIcon} featureIcon`} />

            <div className={`${styles.featureInfo} fromRight`}>
              <h1 className={styles.featureTitle}>Clear Docs</h1>
              <p className={styles.brief}>
                If you experience any problems, visit the{" "}
                <Link href="/docs/main" className={styles.featureLink}>
                  docs
                </Link>{" "}
                to understand better about this package. All functions have a
                example so you can easily understand how the function works
              </p>
            </div>
          </div>
        </div>

        <Link className={styles.docsBtn} href="/docs/main">
          <BsBraces /> Visit Full Documentation
        </Link>

        <div className={styles.contributeWrapper}>
          <h1 className={`${styles.contributeTitle} contributeTitle`}>
            Want to Contribute?
          </h1>
          <p className={`${styles.contributeBrief} contributeBrief`}>
            Whether it&apos;s a bug, or it&apos;s a idea, you can report it
            through the following steps...
          </p>

          <div className={`${styles.contributeSteps} contributeSteps`}>
            <div className={`${styles.contributeStep} contributeStep`}>
              <BsStars className={`${styles.contributeIcon} contributeIcon`} />

              <h2 className={`${styles.stepTitle} stepTitle`}>
                Feature Request
              </h2>
              <p className={`${styles.stepBrief} stepBrief`}>
                go to{" "}
                <Link
                  className={styles.contributeLink}
                  href="https://github.com/chill31/utility-text/issues"
                >
                  https://github.com/chill31/utility-text/issues
                </Link>{" "}
                and create a new issue with the the label of feature request and
                describe your feature there and why it would be useful in the
                package. If it seems appropriate, the feature will likely be
                added
              </p>
            </div>

            <div className={`${styles.contributeStep} contributeStep`}>
              <BsBug className={`${styles.contributeIcon} contributeIcon`} />

              <h2 className={`${styles.stepTitle} stepTitle`}>Bug Report</h2>
              <p className={`${styles.stepBrief} stepBrief`}>
                go to{" "}
                <Link
                  className={styles.contributeLink}
                  href="https://github.com/chill31/utility-text/issues"
                >
                  https://github.com/chill31/utility-text/issues
                </Link>{" "}
                and create a new issue. Describe the issue in the specific
                function or the package thoroughly and post the issue. It should
                be fixed soon after that and you will be a contributor
              </p>
            </div>

            <div className={`${styles.contributeStep} contributeStep`}>
              <BsCodeSquare
                className={`${styles.contributeIcon} contributeIcon`}
              />

              <h2 className={`${styles.stepTitle} stepTitle`}>Pull Request</h2>
              <p className={`${styles.stepBrief} stepBrief`}>
                If you want to program the feature yourself, fork the{" "}
                <Link
                  className={styles.contributeLink}
                  href="https://github.com/chill31/utility-text"
                >
                  github repository
                </Link>{" "}
                and make the changes. Then, make a{" "}
                <Link
                  className={styles.contributeLink}
                  href="https://github.com/chill31/utility-text/pulls"
                >
                  pull request
                </Link>
                . The code will be reviewed and if it is good, it will be
                accepted and you will be a contributor
              </p>
            </div>
          </div>

          <Link
            className={styles.docsBtn}
            href="https://github.com/chill31/utility-text/"
          >
            <BsBox /> Visit Repository
          </Link>
        </div>
      </main>
    </div>
  );
}
