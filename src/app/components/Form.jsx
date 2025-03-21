"use client"
import {motion} from 'framer-motion'
export const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form
            onSubmit={handleSubmit} className="flex flex-col gap-3 lg:w-[75%] w-[95%] p-4 shadow-2xl hover:shadow-current transition-shadow">
            <motion.h1
                initial={{ x: -1200 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="lg:text-2xl md:text-xl text-md text-center font-extrabold text-gray-800 uppercase shadow-md shadow-red-400">
                Submit Below Details</motion.h1>
            <input type="text" placeholder="Enter Your Name" required className="h-6 px-3 py-5 outline-none focus:shadow-md focus:shadow-current
       font-medium text-gray-500 text-xl transition-all"/>
            <input type="email" placeholder="Enter Your Email" required className="h-6 px-3 py-5 outline-none focus:shadow-md focus:shadow-current
       font-medium text-gray-500 text-xl transition-all"/>
            <input type="number" placeholder="Enter Your Mobile" required className="h-6 px-3 py-5 outline-none focus:shadow-md focus:shadow-current
       font-medium text-gray-500 text-xl transition-all"/>
            <textarea name="" id="" cols="30" rows="6" required placeholder="Write Message..."
                className="outline-none p-2 focus:shadow-md focus:shadow-current text-gray-500 text-xl font-medium"></textarea>
            <button className="bg-teal-300 font-extrabold text-2xl
     text-yellow-50 py-1 rounded-md hover:bg-teal-600 transition-all">Send Now</button>
        </form>
    )
}