export const Form=()=>{
    return(
        <form className="flex flex-col gap-3 lg:w-[75%] w-[95%] p-4 shadow-2xl hover:shadow-current transition-shadow">
            <h1 className="lg:text-2xl md:text-xl text-md text-center font-extrabold text-gray-800 uppercase shadow-md shadow-red-400">Submit Below Details</h1>
        <input type="text" placeholder="Enter Your Name" className="h-6 px-3 py-5 outline-none focus:shadow-md focus:shadow-current
       font-medium text-gray-500 text-xl transition-all"/>
        <input type="email" placeholder="Enter Your Email" className="h-6 px-3 py-5 outline-none focus:shadow-md focus:shadow-current
       font-medium text-gray-500 text-xl transition-all"/>
        <input type="number" placeholder="Enter Your Mobile" className="h-6 px-3 py-5 outline-none focus:shadow-md focus:shadow-current
       font-medium text-gray-500 text-xl transition-all"/>
        <textarea name="" id="" cols="30" rows="6" placeholder="Write Message..."
        className="outline-none p-2 focus:shadow-md focus:shadow-current text-gray-500 text-xl font-medium"></textarea>
        <button className="bg-teal-300 font-extrabold text-2xl
     text-yellow-50 py-1 rounded-md hover:bg-teal-600 transition-all">Send Now</button>
        </form>
    )
}