import React from 'react'
import styles from "./cardlist.module.scss"
import Pagination from '../Pagination/Pagination'
import Card from '../Card/Card'


const getPosts = async (page, cat) => {

  try {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed")
    }
    return res.json();
  } catch (err) {
    console.log(err)
  }
}


const CardList = async ({ page, cat }) => {

  const { posts, count } = await getPosts(page, cat);

  const POST_PER_PAGE = 3;
  // page 1
  const hasPrev = POST_PER_PAGE * (page - 1) > 0; // 4 * (0) = 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count; // (4*0) + 4 = 4
  return (
    <div className={styles.container}>
      <h1>Recent Posts</h1>
      <div className={styles.postContainer}>
        {posts?.map((item) => (
          <Card item={item} key={item.ID} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList