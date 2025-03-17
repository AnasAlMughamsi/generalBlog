"use client"
import React from 'react'
import { postList } from '@/utilities/posts'
import styles from  "./card.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ item }) => {

  const image = item.img !== null || "" ? item.img : "default.jpg";

  const defaultImageUrl = "/images/default.jpg";

  return (
    <div className={styles.container} key={item.ID}>
      <div className={styles.imageContainer}>
        {/* {item.img && <Image src={`/images/${item.img}`} alt={item.img} width={100} height={100}/>} */}
        <img src={`/images/${image}`} alt={item.img} onError={(e) => {
          // Disable further error handling
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultImageUrl;
        }} />
      </div>
      <div className={styles.contentContainer} >
        <div className={styles.details}>
          <div className={styles.date}>{item.createdAt.substring(0, 10)}</div>
          <div className={styles.catergory}>{(item.categorySlug)[0].toUpperCase() + (item.categorySlug).slice(1)}</div>
          {/* add here 1. author and a 2. num of comments  */}
        </div>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.paragraph}>{(item.desc).slice(0, 500)}...</div>

        <Link href={`/posts/${item.slug}`}>
          <button className={styles.cardButton}>Read More</button>
        </Link>
      </div>
    </div>
  )
}

export default Card