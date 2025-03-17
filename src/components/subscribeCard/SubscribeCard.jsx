import React from 'react'
import styles from "./subscribeCard.module.scss"


const SubscribeCard = () => {

    return (
        <div className={styles.container}>

            <div className={styles.text}>
                <h4>Subscribe to my Newsletter</h4>
                <p>Join my journey! Get my latest thoughts, stories, and insights delivered straight to your inbox.
                    <span className={styles.noSpam}>No spam</span>—just authentic content,
                    <span className={styles.madeForYou}> made for you. </span>
                </p>
            </div>
            <div className={styles.input}>
                <input type="text" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default SubscribeCard