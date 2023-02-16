import Head from "next/head";
import styles from "../../styles/docs/main.module.css";

import {BsMouse, BsXLg} from 'react-icons/bs'
import {FaRegHandPointer} from 'react-icons/fa'

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

    setData([])

    function hide() {
      searchWrapper.classList.remove("visible");
      searchMain.classList.remove("visible");
    }

    function show() {
      searchWrapper.classList.add("visible");
      searchMain.classList.add("visible");
    }

    clickInput.addEventListener("click", () => {
      show();
    });

    searchClose.addEventListener("click", () => {
      hide();
    });

    addEventListener("keydown", (e) => {
      if(e.key === "Escape") {
        hide();
      }
    });

    searchWrapper.addEventListener("click", (e) => {
      if(e.target.classList.contains("searchWrapper")) {
        hide();
      }
    })

    links.forEach((item) => {
      setData(data => [...data, { val: item.textContent.replace("()", "") }]);
    });

    searchInput.addEventListener("input", (e) => {
      const val = e.target.value.toLowerCase().trim();

      document.querySelectorAll('.searchLink').forEach((item) => {
        const content = item.textContent.toLowerCase().trim();
        if(content.includes(val)) {
          item.classList.add("show");
        } else {
          item.classList.remove("show");
        }
      })
    })
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

        <div className={`${styles.searchBar} searchBar`} tabIndex="0"><FaRegHandPointer /> search functions</div>
        <div className={`${styles.searchWrapper} searchWrapper`} tabIndex="-1">

          <div className={`${styles.searchMain} searchMain`} tabIndex="-1">
            <BsXLg className={`${styles.searchClose} searchClose`} />
            <h1 className={styles.searchTitle}>Search</h1>
            <input className={`${styles.searchInput} searchInput`} placeholder="search..." tabIndex="1" />

            <div className={`${styles.searchFunctions} searchFunctions`}>
              {data.map((item, k) => (
                <Link key={k} className="searchLink show" href={`/docs/${item.val}`} tabIndex="1">{item.val}()</Link>
              ))}
            </div>
          </div>

        </div>

        <div className={styles.docs}>

          <div className={styles.entries}>

            <div className={styles.entry}>
              <Link href="/docs/upper" className={`${styles.refLink} refLink`}>upper()</Link>
              <Link href="/docs/lower" className={`${styles.refLink} refLink`}>lower()</Link>
              <Link href="/docs/capitalize" className={`${styles.refLink} refLink`}>capitalize()</Link>
              <Link href="/docs/reverse" className={`${styles.refLink} refLink`}>reverse()</Link>
              <Link href="/docs/toggleCase" className={`${styles.refLink} refLink`}>toggleCase()</Link>
              <Link href="/docs/oppositeCase" className={`${styles.refLink} refLink`}>oppositeCase()</Link>
              <Link href="/docs/advanceReplace" className={`${styles.refLink} refLink`}>advanceReplace()</Link>
              <Link href="/docs/analyze" className={`${styles.refLink} refLink`}>analyze()</Link>
              <Link href="/docs/extractEmail" className={`${styles.refLink} refLink`}>extractEmail()</Link>
              <Link href="/docs/extractURL" className={`${styles.refLink} refLink`}>extractURL()</Link>
              <Link href="/docs/charCount" className={`${styles.refLink} refLink`}>charCount()</Link>
              <Link href="/docs/formatNumber" className={`${styles.refLink} refLink`}>formatNumber()</Link>
              <Link href="/docs/compare" className={`${styles.refLink} refLink`}>compare()</Link>
              <Link href="/docs/slug" className={`${styles.refLink} refLink`}>slug()</Link>
            </div>

            <div className={styles.entry}>
              <Link href="/docs/unslug" className={`${styles.refLink} refLink`}>unslug()</Link>
              <Link href="/docs/camelCase" className={`${styles.refLink} refLink`}>camelCase()</Link>
              <Link href="/docs/snakeCase" className={`${styles.refLink} refLink`}>snakeCase()</Link>
              <Link href="/docs/isValidEmail" className={`${styles.refLink} refLink`}>isValidEmail()</Link>
              <Link href="/docs/isValidURL" className={`${styles.refLink} refLink`}>isValidURL()</Link>
              <Link href="/docs/normalize" className={`${styles.refLink} refLink`}>normalize()</Link>
              <Link href="/docs/removeDuplicates" className={`${styles.refLink} refLink`}>removeDuplicates()</Link>
              <Link href="/docs/minMax" className={`${styles.refLink} refLink`}>minMax()</Link>
              <Link href="/docs/wrap" className={`${styles.refLink} refLink`}>wrap()</Link>
              <Link href="/docs/multipleWrap" className={`${styles.refLink} refLink`}>multipleWrap()</Link>
              <Link href="/docs/listSearch" className={`${styles.refLink} refLink`}>listSearch()</Link>
              <Link href="/docs/objectSearch" className={`${styles.refLink} refLink`}>objectSearch()</Link>
              <Link href="/docs/insertAt" className={`${styles.refLink} refLink`}>insertAt()</Link>
              <Link href="/docs/moveText" className={`${styles.refLink} refLink`}>moveText()</Link>
            </div>

            <div className={styles.entry}>
              <Link href="/docs/moveTextByPos" className={`${styles.refLink} refLink`}>moveTextByPos()</Link>
              <Link href="/docs/encode" className={`${styles.refLink} refLink`}>encode()</Link>
              <Link href="/docs/decode" className={`${styles.refLink} refLink`}>decode()</Link>
              <Link href="/docs/pushByFilter" className={`${styles.refLink} refLink`}>pushByFilter()</Link>
              <Link href="/docs/flatten" className={`${styles.refLink} refLink`}>flatten()</Link>
              <Link href="/docs/kebabCase" className={`${styles.refLink} refLink`}>kebabCase()</Link>
              <Link href="/docs/pullByValue" className={`${styles.refLink} refLink`}>pullByValue()</Link>
              <Link href="/docs/pullByIndex" className={`${styles.refLink} refLink`}>pullByIndex()</Link>
              <Link href="/docs/toAcronym" className={`${styles.refLink} refLink`}>toAcronym()</Link>
              <Link href="/docs/insertToArray" className={`${styles.refLink} refLink`}>insertToArray()</Link>
              <Link href="/docs/shrink" className={`${styles.refLink} refLink`}>shrink()</Link>
              <Link href="/docs/rangeShrink" className={`${styles.refLink} refLink`}>rangeShrink()</Link>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
