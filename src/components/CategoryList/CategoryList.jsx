// 'use client'

import React from 'react'
import styles from "./categoryList.module.scss"
import { categoriesList } from '@/utilities/categoriesList'
import Image from 'next/image'
import Link from 'next/link'


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Faild")
  }
  return res.json();
}


const CategoryList = async () => {

  const colors = [
    { title: "travel", color: "#ff795736" },
    { title: "history", color: "#ffb04f45" },
    { title: "food", color: "#7fb88133" },
    { title: "coding", color: "#da85c731" },
    { title: "games", color: "#ds800031" },
  ];

  const data = await getData();

  const upatedData = data?.map(item => {
    const colorMatch = colors.find(color => color.title === item.title);
    return {
      ...item,
      color: colorMatch ? colorMatch.color : null
    }
  })


  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Popular Categories</h3>
      
      <div className={styles.lists}>
        {upatedData?.map((cate, key) => (
          <Link className={styles.list} style={{ backgroundColor: `${cate.color}` }}
            href={`/blog?cat=${cate.title}`}
            key={key}>

            {cate.img && <Image src={cate.img} alt='test' width={32} height={32} className={styles.img} />}
            <p className={styles.p}>{cate.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList