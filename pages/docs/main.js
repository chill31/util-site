import Head from "next/head";
import styles from "../../styles/docs/main.module.css";

import { BsArrowRight, BsXLg } from 'react-icons/bs'
import { FaRegHandPointer } from 'react-icons/fa'

import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const links = document.querySelectorAll(".refLink");

    const clickInput = document.querySelector(".searchBar");
    const searchWrapper = document.querySelector(".searchWrapper");
    const searchMain = document.querySelector(".searchMain");
    const searchClose = document.querySelector(".searchClose");
    const searchInput = document.querySelector(".searchInput");
    const searchBtn = document.querySelector(".searchEnter");

    setData([])

    function hide() {
      searchWrapper.classList.remove("visible");
      searchMain.classList.remove("visible");
    }

    function show() {
      searchWrapper.classList.add("visible");
      searchMain.classList.add("visible");
    }

    function search(e) {
      const val = e.value.toLowerCase().trim();

      document.querySelectorAll('.searchLink').forEach((item) => {
        const content = item.textContent.toLowerCase().trim();
        if (content.includes(val)) {
          item.classList.add("show");
        } else {
          
          const tags = item.getAttribute("tags").split(",");  
          tags.forEach((tag) => {
            const tagContent = tag.toLowerCase().trim();
            if(tagContent.includes(val)) {
              item.classList.add("show");
            } else {
              item.classList.remove("show");
            }
          });

        }
      })
    }

    clickInput.addEventListener("click", () => {
      show();
    });

    searchClose.addEventListener("click", () => {
      hide();
    });

    addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hide();
      }
    });

    searchWrapper.addEventListener("click", (e) => {
      if (e.target.classList.contains("searchWrapper")) {
        hide();
      }
    })

    links.forEach((item) => {
      setData(data => [...data, { val: item.textContent, href: item.getAttribute("href"), tags: item.getAttribute("tags") }]);
    });

    searchInput.addEventListener("keydown", (e) => {

      if(e.target.value === '' || e.target.value === ' ') {
        document.querySelectorAll('.searchLink').forEach((link) => link.classList.add('show'));
      }

      if(e.key === 'Enter') {
        search(e.target);
      }

    });

    searchBtn.addEventListener("click", () => {
      search(searchInput);
    });
  }, []);

  return (
    <div className={styles.container}>

      <Head>
        <title>Documentation for utility-text</title>
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

        <p className={styles.subDescription}>Check the <Link className={styles.link} href="/presets/">Presets and Defaults</Link> for any parameter in the below functions which is not required.<br /> (<span className={styles.important}>*</span> a symbol like this means the parameter is required)</p>

        <button className={`${styles.searchBar} searchBar`} tabIndex="0"><FaRegHandPointer /> search documentation</button>
        <div className={`${styles.searchWrapper} searchWrapper`} tabIndex="-1">

          <div className={`${styles.searchMain} searchMain`} tabIndex="-1">
            <BsXLg className={`${styles.searchClose} searchClose`} />
            <h1 className={styles.searchTitle}>Search</h1>
            <div className={styles.searchDiv}>
              <input className={`${styles.searchInput} searchInput`} placeholder="search... (Enter)" tabIndex="1" />
              <button className={`${styles.searchEnter} searchEnter`} tabIndex="1">
                <BsArrowRight className={styles.searchIcon} />
              </button>
            </div>

            <div className={`${styles.searchFunctions} searchFunctions`}>
              {data.map((item, k) => (
                <Link key={k} className="searchLink show" href={item.href} tabIndex="1" tags={item.tags}>{item.val}</Link>
              ))}
            </div>
          </div>

        </div>

        <div className={styles.docs}>

          <div className={styles.docSection}>

            <legend className={styles.docLabel}>Functions</legend>

            <div className={styles.entries}>

              <div className={styles.entry}>
                <Link tags="string" href="/docs/upper" className={`${styles.refLink} refLink`}>upper()</Link>
                <Link tags="string" href="/docs/lower" className={`${styles.refLink} refLink`}>lower()</Link>
                <Link tags="string" href="/docs/capitalize" className={`${styles.refLink} refLink`}>capitalize()</Link>
                <Link tags="string" href="/docs/reverse" className={`${styles.refLink} refLink`}>reverse()</Link>
                <Link tags="string" href="/docs/toggleCase" className={`${styles.refLink} refLink`}>toggleCase()</Link>
                <Link tags="string" href="/docs/oppositeCase" className={`${styles.refLink} refLink`}>oppositeCase()</Link>
                <Link tags="string" href="/docs/advanceReplace" className={`${styles.refLink} refLink`}>advanceReplace()</Link>
                <Link tags="string" href="/docs/analyze" className={`${styles.refLink} refLink`}>analyze()</Link>
                <Link tags="string" href="/docs/extractEmail" className={`${styles.refLink} refLink`}>extractEmail()</Link>
                <Link tags="string" href="/docs/extractURL" className={`${styles.refLink} refLink`}>extractURL()</Link>
                <Link tags="string" href="/docs/charCount" className={`${styles.refLink} refLink`}>charCount()</Link>
                <Link tags="string" href="/docs/formatNumber" className={`${styles.refLink} refLink`}>formatNumber()</Link>
                <Link tags="string" href="/docs/compare" className={`${styles.refLink} refLink`}>compare()</Link>
                <Link tags="string" href="/docs/slug" className={`${styles.refLink} refLink`}>slug()</Link>
                <Link tags="string" href="/docs/unslug" className={`${styles.refLink} refLink`}>unslug()</Link>
              </div>

              <div className={styles.entry}>
                <Link tags="string" href="/docs/camelCase" className={`${styles.refLink} refLink`}>camelCase()</Link>
                <Link tags="string" href="/docs/snakeCase" className={`${styles.refLink} refLink`}>snakeCase()</Link>
                <Link tags="string" href="/docs/isValidEmail" className={`${styles.refLink} refLink`}>isValidEmail()</Link>
                <Link tags="string" href="/docs/isValidURL" className={`${styles.refLink} refLink`}>isValidURL()</Link>
                <Link tags="string" href="/docs/normalize" className={`${styles.refLink} refLink`}>normalize()</Link>
                <Link tags="string" href="/docs/removeDuplicates" className={`${styles.refLink} refLink`}>removeDuplicates()</Link>
                <Link tags="string" href="/docs/minMax" className={`${styles.refLink} refLink`}>minMax()</Link>
                <Link tags="string" href="/docs/wrap" className={`${styles.refLink} refLink`}>wrap()</Link>
                <Link tags="string" href="/docs/multipleWrap" className={`${styles.refLink} refLink`}>multipleWrap()</Link>
                <Link tags="string,array" href="/docs/listSearch" className={`${styles.refLink} refLink`}>listSearch()</Link>
                <Link tags="object,array" href="/docs/objectSearch" className={`${styles.refLink} refLink`}>objectSearch()</Link>
                <Link tags="string" href="/docs/insertAt" className={`${styles.refLink} refLink`}>insertAt()</Link>
                <Link tags="string" href="/docs/moveText" className={`${styles.refLink} refLink`}>moveText()</Link>
                <Link tags="string" href="/docs/moveTextByPos" className={`${styles.refLink} refLink`}>moveTextByPos()</Link>
                <Link tags="string" href="/docs/encode" className={`${styles.refLink} refLink`}>encode()</Link>
              </div>

              <div className={styles.entry}>
                <Link tags="string" href="/docs/decode" className={`${styles.refLink} refLink`}>decode()</Link>
                <Link tags="array" href="/docs/pushByFilter" className={`${styles.refLink} refLink`}>pushByFilter()</Link>
                <Link tags="array" href="/docs/flatten" className={`${styles.refLink} refLink`}>flatten()</Link>
                <Link tags="string" href="/docs/kebabCase" className={`${styles.refLink} refLink`}>kebabCase()</Link>
                <Link tags="array" href="/docs/pullByValue" className={`${styles.refLink} refLink`}>pullByValue()</Link>
                <Link tags="array" href="/docs/pullByIndex" className={`${styles.refLink} refLink`}>pullByIndex()</Link>
                <Link tags="string" href="/docs/toAcronym" className={`${styles.refLink} refLink`}>toAcronym()</Link>
                <Link tags="array" href="/docs/insertToArray" className={`${styles.refLink} refLink`}>insertToArray()</Link>
                <Link tags="array" href="/docs/shrink" className={`${styles.refLink} refLink`}>shrink()</Link>
                <Link tags="array" href="/docs/rangeShrink" className={`${styles.refLink} refLink`}>rangeShrink()</Link>
                <Link tags="string" href="/docs/escape" className={`${styles.refLink} refLink`}>escape()</Link>
                <Link tags="string" href="/docs/unescape" className={`${styles.refLink} refLink`}>unescape()</Link>
                <Link tags="string" href="/docs/stripHTML" className={`${styles.refLink} refLink`}>stripHTML()</Link>
                <Link tags="string" href="/docs/truncate" className={`${styles.refLink} refLink`}>truncate()</Link>
                <Link tags="string,number" href="/docs/minDistance" className={`${styles.refLink} refLink`}>minDistance()</Link>
              </div>

            </div>

          </div>

          <div className={styles.docSection}>

            <legend className={styles.docLabel}>Constructors</legend>

            <div className={styles.entries}>

              <div className={styles.entry}>
                <Link href="/docs/constructors/PasswordUtil" className={`${styles.refLink} refLink`} tags="constructor,class">PasswordUtil</Link>
              </div>

              <div className={styles.entry}>

              </div>

              <div className={styles.entry}>
                
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
