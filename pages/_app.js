import '../styles/globals.css'
import Layout from '../components/Layout'
import React, { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.querySelector(".mobile_menu_main").removeAttribute("open");
  });

  return <div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>

}

export default MyApp