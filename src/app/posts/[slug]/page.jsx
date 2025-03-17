import React from 'react'
import styles from "./SinglePage.module.scss"
import Menu from '@/components/Menu/Menu'
import Comments from '@/components/Comments/Comments'
import Image from 'next/image'


const getPosts = async (slug) => {

  try {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
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

const SinglePage = async ({ params }) => {

  const { slug } = params;
  const singlePost = await getPosts(slug);
  // console.log("show me single post : ", singlePost)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>{singlePost.title}</h1>
          <div className={styles.userInfoContainer}>

            <div className={styles.userImage}>
              {singlePost.img && <Image src={singlePost?.User.image} alt="user-image" height={30} width={30} />}
            </div>

            <div className={styles.userDetails}>
              <p className={styles.username}>{singlePost.User.name}</p>
              <p className={styles.postDate}>{singlePost.createdAt.substring(0, 10)}</p>
            </div>

          </div>
        </div>
        <div className={styles.iamgeContainer}>
          {singlePost.img && <img src={`/images/${singlePost.img}`} alt="post-image" />}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.postContent}>
          {/* <h2 className={styles.postTitle}>{singlePost.title}</h2> */}
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: singlePost?.desc }} />

          <div className={styles.commentsContainer}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </div >
  )
}

export default SinglePage