"use client"
import { animate, motion } from 'framer-motion'
import Image from 'next/image'

import { useEffect, useState } from "react"


export const Menu = () => {
    const [open, setOpen] = useState(false)
    const listVarient = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                StaggerChildren: 0.2
            }
        },
    }
    const listItemsVarients = {
        closed: {
            x: -20,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }


   const lists = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: `Company +`,
            companySubLists: [
                {
                    id: 1,
                    name: "About Us",
                },
                {
                    id: 2,
                    name: "Our Gallery",
                },
            ]
        },
        {
            id: 3,
            name: "Services +",
            serviceSubLists: [
                {
                    id: 1,
                    name: "Digital Marketing",
                },
                {
                    id: 2,
                    name: "Website Design",
                },
                {
                    id: 2,
                    name: "Content Writing",
                },
            ]
        },
        {
            id: 4,
            name: "Packages +",
            packageSubLists: [
                {
                    id: 1,
                    name: "SEO Packages",
                },
            ]
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

const [listStatus,setList]=useState(false)

    const handleList=(e)=>{
        setList(true)
        e.target.className+=" active"
        // e.target.className=""
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
                            className="relative mli list-none cursor-pointer px-2 py-1 text-md font-medium" key={list.id}>
                            {list.name}
                            <motion.ul
                                className='absolute w-52 top-14 flex flex-col gap-1 left-0 shadow-xl shadow-gray-300 rounded-md'>
                                {
                                    list.companySubLists?.map((li) =>
                                        <li className=' text-left py-1 px-2 font-medium text-gray-700 hover:bg-slate-200' key={li.id}>{li.name}</li>
                                    )
                                }
                                {
                                    list.serviceSubLists?.map((li) =>
                                        <li className='whitespace-nowrap text-left py-1 px-2 font-medium text-gray-700 hover:bg-slate-200' key={li.id}>{li.name}</li>
                                    )
                                }
                                {
                                    list.packageSubLists?.map((li) =>
                                        <li className=' text-left py-1 px-2 font-medium text-gray-700 hover:bg-slate-200' key={li.id}>{li.name}</li>
                                    )
                                }
                            </motion.ul>
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
                                onClick={handleList}
                                variants={listItemsVarients}
                                id='mlist2'
                                className={`mlist relative bg-red-200 text-gray-700 shadow-md w-48 list-none cursor-pointer px-2 py-1 text-md font-medium rounded-md`}
                                key={list.id}>
                                {list.name}
                                <motion.ul
                                    className='absolute top-0 left-0 flex flex-col gap-1 shadow-xl shadow-gray-300 rounded-md'>
                                    {
                                        list.companySubLists?.map((li) =>
                                            <li className=' text-left py-1 px-2 font-medium text-gray-700 hover:bg-slate-200' key={li.id}>{li.name}</li>
                                        )
                                    }
                                    {
                                        list.serviceSubLists?.map((li) =>
                                            <li className='whitespace-nowrap text-left py-1 px-2 font-medium text-gray-700 hover:bg-slate-200' key={li.id}>{li.name}</li>
                                        )
                                    }
                                    {
                                        list.packageSubLists?.map((li) =>
                                            <li className=' text-left py-1 px-2 font-medium text-gray-700 hover:bg-slate-200' key={li.id}>{li.name}</li>
                                        )
                                    }
                                </motion.ul>

                            </motion.li>
                        )

                    }
                </motion.ul>

            }
        </>
    )
}