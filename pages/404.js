import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/404.module.css'
import { BsHouse } from 'react-icons/bs'

export default function Home() {

  return (

    <div className={styles.container}>

      <Head>
        <title>utility-text: 404</title>
      </Head>

      <div className={styles.main}>

        <h1 className={styles.title}>404</h1>
        <span className={styles.sub}>Invalid page.</span>

        <Link href="/" className={styles.homeLink}>
          <BsHouse></BsHouse>
          Back To Home</Link>

      </div>
    </div>
  )
}
