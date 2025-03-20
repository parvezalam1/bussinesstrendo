"use client"
import Image from "next/image";
import { motion } from 'framer-motion'

export const Hero = () => {
    return (

        <div className="flex lg:flex-row flex-col lg:px-20 h-screen">
            {/* left */}
            <div className="flex justify-center items-center p-2 lg:order-1 order-2 flex-col gap-3 lg:w-2/4 w-full">
                <motion.h2
                    className="lg:font-extrabold font-semibold  text-center lg:text-6xl text-xl capitalize"
                    initial={{ x: 1400, y: 200 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 3.5, type: "spring", stiffness: 25 }}
                >top digital marketing <br />agency in noida</motion.h2>
                <h5
                    className="font-semibold lg:text-2xl text-xl capitalize lg:text-justify text-center text-purple-500"
                >professional digital marketing services that drive results</h5>
                <motion.button className="bg-red-400 px-5 py-2 rounded-md font-bold text-xl text-white"
                    initial={{ x: -200, y: 300 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 3.5, type: "spring", stiffness: 40 }}
                >
                    Send Request</motion.button>
            </div>
            {/* right */}
            <div className="flex justify-center items-center lg:order-2 order-1 lg:w-2/4 lg:h-[90vh] h-2/4">
                <Image
                    src={'https://cdn.pixabay.com/photo/2022/07/23/05/05/computer-7339324_640.png'}
                   width={500} height={500}
                    alt=""
                    className="lg:w-96 lg:h-96 w-72 h-72"
                />
            </div>
        </div>
    )
}