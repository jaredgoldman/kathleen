import React from 'react'

import Link from 'next/link'
import Head from 'next/head'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.navLinks}>
        <div className={styles.link}>
          <Link href='/'>km</Link>
        </div>
        <div className={styles.link}>
          <Link href='/art'>artwork</Link>
        </div>
        <div className={styles.link}>
          <Link href='/bio'>about</Link>
        </div>
        <div className={styles.link}>
          <a href='https://www.instagram.com/paintbyk8/' target='_blank'>
            instagram
          </a>
        </div>
        <div className={styles.link}>
          <a href='mailto:kathleen.mudrick@gmail.com' target='_blank'>
            email
          </a>
        </div>
      </div>
    </header>
  )
}
