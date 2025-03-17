"use client"
import React, { useContext } from 'react'
import style from "./themeToggle.module.scss"
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'


const ThemeToggle = () => {

  const {theme, toggle} = useContext(ThemeContext);
  // console.log("theme from themeToggle: ", theme);

  const themeIsDark = theme === "dark" 
  ? {backgroundColor: "white", outline: "1px solid rgba(255, 255, 255, 0.25)"} 
  : {backgroundColor: "#0f172a", outline: "1px solid rgba(15, 23, 42, 0.5)"};

  
  return (
    <div className={style.container} onClick={toggle} style={themeIsDark}>
      <Image src="/images/moon.png" alt='moon' width={14} height={14}/>
      <div className={style.ball} 
      style={
        theme === "dark" 
        ? {left: 2, backgroundColor: "#0f172a"} 
        : {right: 2, backgroundColor: "white"} }>
        </div>
      <Image src="/images/sun.png" alt='sun' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle