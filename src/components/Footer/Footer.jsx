import React from 'react'
import styles from "./footer.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaMeta } from 'react-icons/fa6'



const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.info}>

        <div className={styles.logo}>
          {/* <img src="./images/logo.png" alt="logo-footer" /> */}
          <h3>Nasibah_Blog</h3>
        </div>

        <div className={styles.footerContent}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing eLinkt. Repellat,
            minus optio. Odio praesentium quasi itaque tempore? Atque rem, eius illo sit
            distinctio, id dolorem incidunt ipsa quia ad eos? Maxime!
          </p>
          <div className={styles.social}>
            <FaMeta size={30} color='#ac958a' />
            <FaYoutube size={30} color='#ac958a' />
            <FaInstagram size={30} color='#ac958a' />
            <FaTiktok size={30} color='#ac958a' />
            {/* <Image src="/images/meta1.png" alt='meta' width={24} height={24} priority />
            <Image src="/images/youtube.png" alt='youtube' width={24} height={24} />
            <Image src="/images/instagram.png" alt='instagram' width={24} height={24} />
            <Image src="/images/tiktok.png" alt='tiktok' width={24} height={24} /> */}
          </div>
        </div>

      </div>


      <div className={styles.shortcuts}>

        <div className={styles.links}>
          <h4>Links</h4>
          <Link href={"/"} title='Homepage'>Homepage</Link>
          <Link href={"/"} title='Blog'>Blog</Link>
          <Link href={"/"} title='About'>About</Link>
          <Link href={"/"} title='Contact'>Contact</Link>
        </div>

        <div className={styles.links}>
          <h4>Tags</h4>
          <Link href={"/"} title='Style'>Style</Link>
          <Link href={"/"} title='Culture'>Culture</Link>
          <Link href={"/"} title='History'>History</Link>
          <Link href={"/"} title='Coding'>Coding</Link>
        </div>

        <div className={styles.links}>
          <h4>Social</h4>
          <Link href={"/"} title="X">X</Link>
          <Link href={"/"} title="Youtube">Youtube</Link>
          <Link href={"/"} title="Tiktok">Tiktok</Link>
          <Link href={"/"} title="Instagram">Instagram</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer 