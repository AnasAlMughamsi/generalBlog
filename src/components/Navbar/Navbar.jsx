// 'use client'

import React, { useContext } from 'react'
import styles from "./navbar.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import AuthLink from '../authLink/AuthLink'
import { ThemeContext } from '@/context/ThemeContext'
import { FaMeta } from 'react-icons/fa6'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'



const Navbar = () => {

  
  return (
    <div className={styles.navContainer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Nasibah's Blog</Link>
        </div>



        <div className={styles.links}>
          {/* <ThemeToggle /> */}
          <Link href="/" className={styles.link}>Homepage</Link>
          <Link href="/" className={styles.link}>Contact</Link>
          <Link href="/" className={styles.link}>About</Link>
          <AuthLink />
        </div>

        <div className={styles.social}>
          {/* <Image src="/images/meta1.png" alt='meta' width={24} height={24} priority /> */}
          <FaMeta size={30} color='#ac958a' />
          <FaYoutube size={30} color='#ac958a' />
          <FaInstagram size={30} color='#ac958a' />
          <FaTiktok size={30} color='#ac958a' />
          {/* <Image src="/images/youtube.png" alt='youtube' width={24} height={24} /> */}
          {/* <Image src="/images/instagram.png" alt='instagram' width={24} height={24} /> */}
          {/* <Image src="/images/tiktok.png" alt='tiktok' width={24} height={24} /> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar