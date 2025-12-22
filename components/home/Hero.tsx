"use client"

import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Homepage hero">
      <div className={styles.frame}>
        <img
          src="/assets/hero/hero-bg.png"
          alt="Living room scene with sofa, chandelier, curtains, vase and flooring"
          className={styles.image}
          draggable={false}
        />
        />

        {/* Hotspots: percentage positions assume a 1920x1080 image (16:9). */}

        {/* Chandelier: upper-center area */}
        <Link href="/chandelier" className={`${styles.hotspot} ${styles.chandelier}`} aria-label="Chandelier">
          <span className={styles.visuallyHidden}>Chandelier</span>
        </Link>

        {/* Curtains (left): left vertical area covering full curtain */}
        <Link href="/curtains" className={`${styles.hotspot} ${styles.curtains}`} aria-label="Curtains">
          <span className={styles.visuallyHidden}>Curtains</span>
        </Link>

        {/* Sofa: lower-center-left area covering full sofa */}
        <Link href="/sofa" className={`${styles.hotspot} ${styles.sofa}`} aria-label="Sofa">
          <span className={styles.visuallyHidden}>Sofa</span>
        </Link>

        {/* Stone Wall: right-middle vertical area */}
        <Link href="/wall" className={`${styles.hotspot} ${styles.wall}`} aria-label="Stone wall">
          <span className={styles.visuallyHidden}>Stone wall</span>
        </Link>

        {/* Vase with Stand: right-mid/bottom */}
        <Link href="/vase" className={`${styles.hotspot} ${styles.vase}`} aria-label="Vase with stand">
          <span className={styles.visuallyHidden}>Vase with stand</span>
        </Link>

        {/* Flooring: bottom strip covering visible floor area */}
        <Link href="/flooring" className={`${styles.hotspot} ${styles.flooring}`} aria-label="Wooden flooring">
          <span className={styles.visuallyHidden}>Wooden flooring</span>
        </Link>
      </div>
    </section>
  )
}
