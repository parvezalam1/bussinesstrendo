"use client"
import { useEffect, useState } from "react"
import { Menu } from "./Menu"
import { motion } from 'framer-motion'
import { Search } from "./Search"
export const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const checkScrollPosition = () => {
    if (window.scrollY > 130) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition)
    return () => {
      window.removeEventListener('scroll', checkScrollPosition)
    }
  })
  const transition = {
    duration: 1.5,
    delay: 0.7,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <nav 
    className={`${scroll?"lg:sticky -top-24 translate-y-24 duration-500 transition-all left-0 bg-gray-200 ":"bg-slate-50"}
     fixed w-full h-20 z-50 flex justify-between items-center lg:px-20 px-2`}>
      {/* left */}
      <motion.div className="w-1/4 font-bold lg:text-3xl text-2xl lg:px-4 px-1 flex items-center"
        initial={{ x: -500, y: -200, opacity: 0.2 }}
        animate={{ x: 0, y: 0, opacity: 0.7 }}
        transition={transition}
      >Busines<b className="font-extrabold text-6xl text-lime-600">s</b>trend<b className="font-extrabold text-6xl text-red-600">o</b>
      </motion.div>
      {/* right */}
      <div className="w-3/4 flex items-center gap-7 justify-end">
        <Menu />
        <Search/>
      </div>
    </nav>
  )
}