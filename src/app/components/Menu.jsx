"use client"
import { animate, motion } from 'framer-motion'

import { useState } from "react"

export const Menu = () => {
    const [open, setOpen] = useState(false)
    const lists = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "Company +"
        },
        {
            id: 3,
            name: "Services +"
        },
        {
            id: 4,
            name: "Packages +"
        },
        {
            id: 5,
            name: "Career"
        },
        {
            id: 6,
            name: "Blog"
        },
        {
            id: 7,
            name: "Contact Us"
        },
    ]
    const listVarient={
        closed:{
            x:"100vw",
        },
        opened:{
            x:0,
            transition:{
                when:"beforeChildren",
                StaggerChildren:0.2
            }
        },
    }
    const listItemsVarients={
        closed:{
            x:-20,
            opacity:0
        },
        opened:{
            x:0,
            opacity:1
        }
    }
    return (
        <>

            <img src={!open ? "./icons/menu.png" : "./icons/x.png"} alt="alt"
                className="lg:hidden block w-5 h-5" onClick={() => setOpen(prev => !prev)} />


            <ul className="lg:flex hidden justify-end gap-3">
                {
                    lists.map((list) =>
                        <motion.li
                            initial={{ x: -300, y: -300 }}
                            animate={{ x: 0, y: 0 }}
                            transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
                            className="list-none cursor-pointer px-2 py-1 text-md font-medium" key={list.id}>
                                {list.name}
                        </motion.li>
                    )

                }
            </ul>
            {
                open &&
                <motion.ul 
                variants={listVarient}
                initial="closed"
                animate="opened"
                className="bg-cyan-200 w-full lg:hidden h-screen py-5 absolute top-20 left-0 flex justify-start items-center flex-col gap-2">
                    {
                        lists.map((list) =>
                            <motion.li
                            variants={listItemsVarients}
                                className="bg-red-200 text-gray-700 shadow-md w-48 list-none cursor-pointer px-2 py-1 text-md font-medium rounded-md"
                                key={list.id}>
                                    {list.name}
                            </motion.li>
                        )

                    }
                </motion.ul>

            }
        </>
    )
}