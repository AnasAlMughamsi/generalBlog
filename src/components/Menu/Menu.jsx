import React from 'react'
import styles from "./menu.module.scss"
import { postList } from '@/utilities/posts'
import Link from 'next/link'
import Image from 'next/image'
import MenuPost from './MenuPost'
import { categoriesList } from '@/utilities/categoriesList'

const Menu = () => {

  const categories = categoriesList.map((item, key) => 
    <Link key={key} href={`/blog?cat=${item.name}`} className={styles.category}
      style={{backgroundColor: `${item.color}`}}>
      {item.name}
    </Link>
  );

  
  return (
    <div className={styles.container}>
      <h2>What's hot</h2>
      <h1>Most Popular</h1>
      <div className={styles.postsContainer}>
        <MenuPost withImage={false}/>
      </div>
      <div className={styles.categoriesContainer}>
        <h3>Discover by topic</h3>
        <h2>Categories</h2>
        <div className={styles.categoriesList}>
          {categories}
        </div>
      </div>
      <div className={styles.postsContainer}>
        <h3>Choosen by the editor</h3>
        <h2>Editors Pick</h2>
          <MenuPost withImage={true}/>
      </div>
    </div>
  )
}

export default Menu