import React from 'react'
import styles from './Biography.module.scss'

export default function Biography() {
  return (
    <div className={styles.root}>
      <div className={styles.moduleOne}>
        <div className={styles.fade}>
          {/* <div className={styles.heading}>
            <h2>About Kathleen</h2>
          </div> */}
        </div>
      </div>
      <div className={styles.bioContainer}>
        <div className={styles.bio}>
          <p>
            <strong>Kate Mudrick</strong> is a Toronto-based visual artist, whose primary choice of
            media includes oil or acrylic paint on canvas. With an educational background in the
            arts, sciences, and teaching, she attended Etobicoke School of the Arts for Visual Art,
            gained her HBSc from Guelph University and is currently attending the University of
            Toronto, working towards a Masters of Teaching degree.
          </p>
          <br />
          <p>
            Kate has worked both independently, and in association with YAYMaker (formerly
            PaintNite), as a Teaching Artist for painting events. She is also open for commissions
            on a case-by-case basis. Please contact her directly for inquiries regarding painting
            events, commissions, or to purchase a piece.
          </p>
        </div>
      </div>
      <div className={styles.moduleTwo}>
        <div className={styles.fadeReverse}></div>
      </div>
    </div>
  )
}

// Kate Mudrick is a Toronto-based visual artist, whose primary choice of media includes oil or acrylic paint on canvas. With an educational background in the arts, sciences, and teaching, she attended Etobicoke School of the Arts for Visual Art, gained her HBSc from Guelph University and is currently attending the University of Toronto, working towards a Masters of Teaching degree.

// Kate has worked both independently, and in association with YAYMaker (formerly PaintNite), as a Teaching Artist for painting events. She is also open for commissions on a case-by-case basis. Please contact her directly for inquiries regarding painting events, commissions, or to purchase a piece.
