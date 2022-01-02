import React from 'react'
import styles from './Biography.module.scss'

export default function Biography() {
  const renderAboutText = () => {
    return ['#BCDD7E', '#C4E18E', '#DDEEBF', '#F6FBEF'].map((color) => {
      return (
        <div className={styles.aboutRow}>
          <div style={{ color: color }}>About</div>
          <div style={{ color: color }}>About</div>
        </div>
      )
    })
  }
  return (
    <div className={styles.root}>
      <div className={styles.moduleOne}>
        <div className={styles.fade}>
          <div className={styles.aboutText}>
            <div className={styles.smallAbout}>About</div>
            {renderAboutText()}
          </div>
        </div>
      </div>
      <div className={styles.bioContainer}>
        <div className={styles.bio}>
          <p>
            <strong>Kate Mudrick</strong> is a Toronto-based educator and visual artist. As an
            artist, Kate has worked both independently, and in association with YAYMaker (formerly
            PaintNite), as a Teaching Artist for painting events. Her primary artistic medium
            includes oil and acrylic paint on canvas.
          </p>
          <br />
          <p>
            Kate's diverse educational background includes the arts, sciences, and teaching. She
            attended Etobicoke School of the Arts for Visual Art, gained her Honours Bachelor of
            Science in Biology (H.B.Sc.) with Distinction from Guelph University and is currently
            pursuing a masters degree in teaching at OISE, University of Toronto. Kate specializes
            in instructing science for junior-intermediate age groups and will be graduating in the
            class of 2022.
          </p>
          <br />
          <p>
            In addition to art and education, Kate has worked extensively as a medical writer and
            science editor for several digital communications agencies in Toronto.
          </p>
          <br />
          <p>
            Kate is open for painting commissions, tutoring and freelance writing and editing on a
            case-by-case basis. If you're interested, please contact her{' '}
            <a className={styles.link} href='mailto:kathleen.mudrick@gmail.com'>
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div className={styles.moduleTwo}>
        <div className={styles.fadeReverse}></div>
      </div>
    </div>
  )
}
