"use client"

import React, { useState } from 'react'
import style from "./comments.module.scss"
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import Image from 'next/image';
import AnimatedSVG from '@/app/animatedSVG/AnimatedSVG';
import { FaTrashAlt } from 'react-icons/fa';
import moment from 'moment';

const fetcher = async (url) => {

  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed")
    }

    return data;

  } catch (err) {
    console.log(err.message)
  }
}


const Comments = ({ postSlug }) => {

  const { status } = useSession();
  const { data: user } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comment?postSlug=${postSlug}`, fetcher
  );

  const [desc, setDesc] = useState("");

  // console.log("data comments: ", data)
  console.log("fetcher: ", mutate)



  const handleSubmit = async () => {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    }),
      mutate();
    setDesc("")
  }

  const deleteComment = async (id) => {
    // if (!confirm("Are you sure you want to delete this comment?")) return;
    try {
      const response = await fetch(`/api/comment/${id}`, {
        method: "DELETE",
      });
      mutate();
      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }

      console.log("Comment deleted successfully");
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  }


  return (
    <div className={style.container}>
      <h2 className={style.title}>Comments</h2>

      {status === "authenticated" ?
        (<div className={style.writeSection}>

          <textarea placeholder='write a comment...' 
            className={style.textarea} rows={4} id='textarea' dir="auto" onChange={(e) => setDesc(e.target.value)}></textarea>

          <button className={style.buttonComment} onClick={handleSubmit}>Send</button>
        </div>

        ) : (
          <Link href="/login">Login to write a comment</Link>
        )
      }

      <div className={style.commentsContainer}>
        <h3>Comment section</h3>
        {isLoading ? "loading" : data?.map((item, key) => (

          <div className={style.commentBody} key={key}>
            <div className={style.userDetails}>
              {item.User.image && <Image src={item.User?.image} alt="user-comment-image"
                width={40} height={40}
                className={style.userCommentImage} />}

              <div className={style.userInfo}>
                <span className={style.username}>{item.User?.name}</span>
                <span className={style.date}>{moment(item.createdAt).format('LLL')}</span>
                {/* moment().format('LLL'); */}
              </div>
            </div>

            <div className={style.commentSection}>
              <p className={style.commentContent}>{item.desc}</p>
              {/* TODO: below here add option button :
                the option will show sub-menu have these values:
                  - detele 
                  - share
                  - report 
                   */}
              {/* {user?.user?.email === com} */}
              <div className={style.deleteComment} onClick={() => deleteComment(item.id)}>
                <FaTrashAlt color='rgb(129, 13, 13)' className={style.trashIcon} />
                {/* <AnimatedSVG /> */}
              </div>
            </div>

        </div>
        ))}

      </div>
    </div>
  )
}

export default Comments