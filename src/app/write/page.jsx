'use client'

import React, { useState } from 'react'
import style from "./WritePage.module.scss"
import Image from 'next/image'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const WritePage = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState(null);
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    router.push("/")
  }


  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");


  const handleSubmit = async () => {

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        categorySlug: "food"
      }),
    })
    //mutate();
    console.log(res)
  }


  return (
    <div className={style.container}>
      <input type="text" placeholder='Insert Title Here' className={style.blogTitle}
        onChange={e => setTitle(e.target.value)} />
      
      <div className={style.editor}>
        <button className={style.insertButton} onClick={() => setOpen(!open)} >
          <AiOutlinePlusSquare size={30}/>
          {/* <Image src="/images/plus.png" alt='insert_stuff' width={26} height={26} /> */}
        </button>

        {open &&
          <div className={style.addContainer} >
            <input type="file" name="image" id="image" style={{ display: "none" }} />

            <button className={style.addButton}>
              <label htmlFor="image">
                <AiOutlinePicture size={25} className={style.fileIcon} />
              </label>
            </button>

            <input type="date" id='link' style={{ display: "none" }} />
            <button className={style.addButton}>
              <label htmlFor="link">
                <AiOutlineLink size={25} className={style.fileIcon} />
              </label>
            </button>

            <button className={style.addButton}>
              <AiOutlineVideoCameraAdd size={25} className={style.fileIcon} />
            </button>
          </div>
          }
      </div>

      <ReactQuill theme="bubble" value={value} onChange={setValue}
        className={style.textArea}
        placeholder='Tell your story...' />

      <button className={style.publish} onClick={handleSubmit}>Publish</button>
    </div>
  )
}

export default WritePage