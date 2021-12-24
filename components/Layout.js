import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className={styles.root}>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Poiret+One&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant:wght@300;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
