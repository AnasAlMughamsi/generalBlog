'use client'

import React from 'react'
import styles from './LoginPage.module.scss'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

// import GoogleIcon from "../../../public/svg_images/google.svg"

// TODO: Redesing the whole page
const LoginPage = () => {

  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>
  }

  if (status === "authenticated") {
    router.push("/")
  }
  console.log(data, status);


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* TODO: add icons for buttons */}
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          <Image src="/images/googleIcon.png" alt="f" height={30} width={30}/>
          Sing in with Google
        </div>
        <div className={styles.socialButton}>
          <FaGithub size={30} />
          Sing in with Github
        </div>
      </div>
    </div>
  )
}

export default LoginPage