"use client"
import { Menu } from "./Menu"
import {motion} from 'framer-motion'
export const Navbar= ()=>{
    const transition = {
        duration: 1.5,
        delay: 0.7,
        ease: [0, 0.71, 0.2, 1.01],
      }
    return (
        <nav className="fixed w-full h-20 z-50 bg-slate-50 flex justify-between items-center lg:px-20 px-2">
        {/* left */}
        <motion.div className="w-1/4 font-bold text-3xl lg:px-4 px-1"
        initial={{x:-500,y:-200,opacity:0.2}}
          animate={{ x:0 ,y:0,opacity:0.7}}
          transition={transition}
        >Busines<b className="font-extrabold text-6xl text-lime-600">s</b>trend<b className="font-extrabold text-6xl text-red-600">o</b></motion.div>
        {/* right */}
        <div className="w-3/4 flex justify-end">
            <Menu/>
        </div>
        </nav>
    )
}