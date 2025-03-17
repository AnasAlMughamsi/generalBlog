"use client"

import React, { useState } from 'react'
import style from "./authLink.module.scss"
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';


const AuthLink = () => {

  const [open, setOpen] = useState(false);
  const { status } = useSession();

  console.log(status);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={style.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={style.link}>Write</Link>
            <span className={style.link} onClick={signOut}>Logout</span>
        </>
      )}
      <div className={style.burger} onClick={() => setOpen(!open)}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      {open && (
        <div className={style.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>

          {status === "authenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
                <span onClick={signOut}>Logout</span>
            </>
          )}

        </div>
      )}
    </>
  )
}

export default AuthLink