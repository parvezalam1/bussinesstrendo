import Image from "next/image"

export const Footer = () => {
    return (
        <div className="lg:px-20 lg:py-10 p-2 w-full h-fit bg-slate-600 ">
            {/* top */}
            <div className="flex flex-wrap gap-3 p-2 justify-between items-start">
                <div className="p-2 lg:w-1/5 w-72">
                    <h1 className="lg:text-2xl text-xl text-white font-extrabold">Bussinesstrendo</h1>
                    <b className="text-md font-medium text-white mt-3 block">Follow us on our social media channels,
                        and let us keep in touch with you. Stay updated with our latest offers!</b>
                    {/*social icons */}
                    <div className="flex gap-4 mt-3">
                        <div className="w-10 h-10 rounded-full cursor-pointer bg-slate-300 flex justify-center items-center">
                            <Image src="/icons/facebook.png" width="25" height="25" />
                        </div>
                        <div className="w-10 h-10 rounded-full cursor-pointer bg-slate-300 flex justify-center items-center">
                            <Image src="/icons/instagram.png" width="25" height="25" />
                        </div>
                        <div className="w-10 h-10 rounded-full cursor-pointer bg-slate-300 flex justify-center items-center">
                            <Image src="/icons/youtube.png" width="25" height="25" />
                        </div>
                    </div>
                </div>

                <div className="p-2 lg:w-1/5 w-72">
                    <h1 className="lg:text-2xl text-xl text-white font-extrabold">What We Do</h1>
                    <ul className="flex flex-col gap-2 mt-5">
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Our Packages</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Pay Per Click</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Lead Generation</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Social Media Marketing</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Search Engine Optimization</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Website Design Service</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Graphic Designing Service</li>
                    </ul>
                </div>
                <div className="p-2 lg:w-1/5 w-72">
                    <h1 className="lg:text-2xl text-xl text-white font-extrabold">Quick Links</h1>
                    <ul className="flex flex-col gap-2 mt-5">
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">About Us</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Our Gallery</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Career</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Privacy Policy</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Search Engine Optimization</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Refund Policy</li>
                        <li className="list-none font-semibold text-yellow-50 cursor-pointer">Terms Of Services</li>
                    </ul>
                    
                </div>
                <div className="p-2 lg:w-1/5 w-72">
                    <h1 className="lg:text-2xl text-xl text-white font-extrabold">Our Offices</h1>
                    <b className="text-md font-medium text-white mt-3 block">
                        Follow us on our social media channels,
                        and let us keep in touch with you. Stay updated with our latest offers!
                        </b>
                  <span className="block text-md font-medium text-white mt-4"><b>Email: </b>Info@gmail.com</span>
                  <span className="text-md font-medium text-white mt-3 block"><b>Mobile: </b>+910000000000</span>
                </div>
            </div>
        </div>
    )
}