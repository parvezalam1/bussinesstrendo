"use client"
import Image from "next/image"
import { motion } from 'framer-motion'
export const LatestNews = () => {
    const transition = {
        duration: 1.5,
        delay: 0.7,
        ease: [0, 0.71, 0.2, 1.01],
    }
    return (
        <div className="lg:px-20 py-10 w-full h-fit ">
            {/* title */}
            <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-extrabold py-7 text-gray-500">Latest News Updates</h2>
            {/* news cards */}
            <div className="w-full h-fit flex justify-center items-center gap-4 flex-wrap">
                {/* cards */} 
                <div className="lg:w-1/5 w-64 h-fit py-3 shadow-sm hover:shadow-2xl hover:-translate-y-7 transition-all">
                    {/* image box */}
                    <div className="relative rounded-t-md w-[100%] h-40 z-10">
                        <Image className="rounded-t-md hover:scale-50 lg:hover:scale-110 duration-300 hover:-z-0"
                            src={'https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_640.jpg'} fill alt="" />
                    </div>
                    {/* text */}
                    <strong className="text-left p-2 capitalize block lg:text-2xl text-xl font-semibold text-gray-500">top 10 Website development company in prayagraj</strong>
                    <motion.button
                        initial={{ x: -30, y: -40, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={transition}
                        className="text-blue-600 bottom-0 font-extrabold text-xl px-5 py-2
                     shadow-md  mt-3 ml-3 hover:shadow-current">Read More</motion.button>
                </div>
                <div className="lg:w-1/5 w-64 h-fit py-3 shadow-sm hover:shadow-2xl hover:-translate-y-7 transition-all">
                    {/* image box */}
                    <div className="relative rounded-t-md w-[100%] h-40 z-10">
                        <Image className="rounded-t-md hover:scale-50 lg:hover:scale-110 duration-300 hover:-z-0"
                            src={'https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_640.jpg'} fill alt="" />
                    </div>
                    {/* text */}
                    <strong className="text-left p-2 capitalize block lg:text-2xl text-xl font-semibold text-gray-500">top 10 Website development company in prayagraj</strong>
                    <motion.button
                        initial={{ x: -30, y: -40, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={transition}
                        className="text-blue-600 bottom-0 font-extrabold text-xl px-5 py-2
                     shadow-md  mt-3 ml-3 hover:shadow-current">Read More</motion.button>
                </div>
                <div className="lg:w-1/5 w-64 h-fit py-3 shadow-sm hover:shadow-2xl hover:-translate-y-7 transition-all">
                    {/* image box */}
                    <div className="relative rounded-t-md w-[100%] h-40 z-10">
                        <Image className="rounded-t-md hover:scale-50 lg:hover:scale-110 duration-300 hover:-z-0"
                            src={'https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_640.jpg'} fill alt="" />
                    </div>
                    {/* text */}
                    <strong className="text-left p-2 capitalize block lg:text-2xl text-xl font-semibold text-gray-500">top 10 Website development company in prayagraj</strong>
                    <motion.button
                        initial={{ x: -30, y: -40, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={transition}
                        className="text-blue-600 bottom-0 font-extrabold text-xl px-5 py-2
                     shadow-md  mt-3 ml-3 hover:shadow-current">Read More</motion.button>
                </div>
                <div className="lg:w-1/5 w-64 h-fit py-3 shadow-sm hover:shadow-2xl hover:-translate-y-7 transition-all">
                    {/* image box */}
                    <div className="relative rounded-t-md w-[100%] h-40 z-10">
                        <Image className="rounded-t-md hover:scale-50 lg:hover:scale-110 duration-300 hover:-z-0"
                            src={'https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_640.jpg'} fill alt="" />
                    </div>
                    {/* text */}
                    <strong className="text-left p-2 capitalize block lg:text-2xl text-xl font-semibold text-gray-500">top 10 Website development company in prayagraj</strong>
                    <motion.button
                        initial={{ x: -30, y: -40, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={transition}
                        className="text-blue-600 bottom-0 font-extrabold text-xl px-5 py-2
                     shadow-md  mt-3 ml-3 hover:shadow-current">Read More</motion.button>
                </div>
            </div>
        </div>
    )
}