import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import { BsClipboard } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
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
        <h1 className={styles.title}>Documentation</h1>

        <p className={styles.description}>
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

            <Link className={styles.navLink} href="/examples">Examples</Link>
            <Link className={styles.navLink} href="/docs/main">API</Link>
            <Link className={styles.navLink} href="/help">Help</Link>

        </div>
      </main>
    </div>
  );
}
