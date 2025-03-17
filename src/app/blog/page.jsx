import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'
import React from 'react'
import styles from "./blogPage.module.scss"

const BlogPage = ({ searchParams }) => {

  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Anas</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu/>
      </div>
    </div>
  )
}

export default BlogPage