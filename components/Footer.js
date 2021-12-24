import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.link}>
        Made with love by <a href='https://github.com/jaredgoldman'>JG</a>
      </div>
      <div className={styles.link}>
        <a href='mailto:kathleen.mudrick@gmail.com'>Contact</a>
      </div>
    </div>
  )
}
