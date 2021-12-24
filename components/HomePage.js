import React from 'react'
import Head from 'next/head'
import styles from './HomePage.module.scss'

export default function HomePage() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Kathleen Mudrick || Artist, Educator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.hero}>
        <div className={styles.heroFade}>
          <div className={styles.heroText}>
            <div>
              <h1 className={styles.heading}>Kathleen Mudrick</h1>
            </div>
            <div className={styles.subHeading}>
              <p>Artist</p>
              <p>Photographer </p>
              <p>Educator </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
