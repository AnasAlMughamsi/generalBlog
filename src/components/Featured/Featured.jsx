import React from 'react'
import styles from "./featured.module.scss"
import Image from 'next/image'
import SubscribeCard from '../subscribeCard/SubscribeCard'


const Featured = () => {
  return (

    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.post}>

          <div className={styles.textContainer}>
            <h1>Echoes of a Forgotten Time</h1>

            <p>
              The wind whispers through the cracks of the abandoned house,
              carrying with it the echoes of a forgotten time. Once a place of warmth and life,
              it now stands alone in the vast desert, its wooden beams weathered by the relentless
              sun and shifting sands. Faded memories linger in the air—laughter that once filled
              its walls, footsteps that once crossed its threshold. The empty windows gaze out
              like weary eyes, watching as the world moves on,
              leaving only silence and the distant call of the wind to tell its story...
            </p>

            <button className={styles.featuredBtn}>Read more</button>
          </div>

          <div className={styles.imgContainer}>
            <img src="/images/blogs_imgs/al-seef.jpg" alt='image-hero' className={styles.image} />
          </div>
        </div>

      </div>
    </div>


  )
}

export default Featured