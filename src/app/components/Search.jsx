// "use client"
import Image from "next/image"
import { useState } from "react"
import {motion} from 'framer-motion'
export const Search = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Image
            onClick={()=>setOpen(prev=>!prev)}
                className="cursor-pointer"
                src={!open?'/icons/search.png':'/icons/searchoff.png'} width={20} height={20} alt="" />
           {
            open &&
           <motion.form 
           initial={{x:400,y:-200,opacity:0}}
           animate={{x:0,y:0,opacity:1}}
           transition={{duration:0.7,delay:0.1}}
           action="" className="absolute lg:right-5 right-1 top-20 lg:px-7 p-2 lg:py-3 lg:w-1/4 w-72 rounded-md flex justify-center  bg-gray-200">
                <input type="search" placeholder="Search..." className="outline-none focus:shadow-current
                px-5 py-3 bottom-0 rounded-md shadow-md font-medium"/>
            </motion.form>
            } 

        </div>
    )
}